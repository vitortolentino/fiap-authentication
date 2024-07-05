import fastify from "fastify";
import cors from "@fastify/cors";
import { authRoutes } from "./routes/authRoutes";
import { oauth2Middleware } from "../auth/oauth2Middleware";
import fastifyExpress from "@fastify/express";
import { decodeJWT } from "../auth/jwtMiddleware";

const app = fastify({ logger: true });

export const listen = (port) => {
  app.register(cors, {
    origin: true,
  });

  app.register(fastifyExpress);

  app.register(authRoutes);

  app.get(
    "/rota-autenticada",
    { preHandler: oauth2Middleware },
    (request, reply) => {
      const loggedUser = decodeJWT(request?.headers?.authorization);
      reply.send({
        username: loggedUser?.username,
        userId: loggedUser?.userId,
      });
    }
  );

  app.listen({ port }, (_, address) => {
    console.log(address);
  });
};

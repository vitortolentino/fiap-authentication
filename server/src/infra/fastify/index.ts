import fastify from "fastify";
import cors from "@fastify/cors";
import { authRoutes } from "./routes/authRoutes";
const app = fastify({ logger: true });

export const listen = (port) => {
  app.register(authRoutes);
  app.register(cors, {
    origin: true,
  });

  app.listen({ port }, async (_, address) => {
    app.log.info(`Server listening at ${address}`);
  });
};

export default app;

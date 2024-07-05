import axios from "axios";
import { FastifyPluginCallback } from "fastify";
import jwt from "jsonwebtoken";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_OAUTH_URL } =
  process.env;

export const authRoutes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get("/getAuthToken", async (request, reply) => {
    const { code } = request.query as { code: string };

    const body = {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
    };

    const options = {
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await axios.post(
        `${GITHUB_OAUTH_URL}/access_token`,
        body,
        options
      );

      if (!response.data) {
        return reply.code(403).send("Erro ao autenticar");
      }

      const token = jwt.sign(
        {
          userId: 1,
          username: "Vitor Afonso",
        },
        "meu-secret",
        {
          algorithm: "HS256",
        }
      );

      return reply.send({ access_token: token });
    } catch (error) {
      console.log({ error });
      return reply.send(error);
    }
  });

  done();
};

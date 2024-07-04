import axios from "axios";
import { FastifyPluginCallback } from "fastify";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_OAUTH_URL } =
  process.env;

export const authRoutes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get("/rota-autenticada", (request, reply) => {
    reply.send("vc ta logado");
  });

  fastify.get("/getAuthToken", async (request, reply) => {
    const { code } = request.query as { code: string };
    const body = {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code: code,
    };
    const options = {
      headers: {
        accept: "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${GITHUB_OAUTH_URL}/access_token`,
        body,
        options
      );
      return reply.send(data);
    } catch (error) {
      return reply.send(error);
    }
  });

  done();
};

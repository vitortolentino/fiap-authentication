import axios from "axios";
import { FastifyPluginCallback } from "fastify";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_OAUTH_URL } =
  process.env;

export const authRoutes: FastifyPluginCallback = (fastify, _, done) => {
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

    console.log(`${GITHUB_OAUTH_URL}/access_token`, body);

    try {
      const { data } = await axios.post(
        `${GITHUB_OAUTH_URL}/access_token`,
        body,
        options
      );
      console.log(data, "---------- data");
      return reply.send(data);
    } catch (error) {
      return reply.send(error);
    }
  });

  // Rota protegida que requer autenticação JWT
  app.get("/protected", authenticateJWT, (req, res) => {
    res.json({ message: "Você tem acesso a esta rota!" });
  });

  done();
};

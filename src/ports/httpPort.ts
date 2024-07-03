import { listen } from "../infra/fastify";

const PORT = process.env.PORT || 3000;

listen(PORT);

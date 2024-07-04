import { listen } from "../infra/fastify";

const PORT = process.env.PORT || 4000;

listen(PORT);

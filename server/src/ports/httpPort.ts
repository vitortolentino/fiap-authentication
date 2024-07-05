import { listen } from "../infra/fastify";

const port = process.env.PORT || 4000;

listen(port);

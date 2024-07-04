export const authenticateOauth = (request, reply) => {
  const token = request.headers;
  console.log(token);
  if (token) {
    return reply.sendStatus(403);
  } else {
    reply.sendStatus(401);
  }
};

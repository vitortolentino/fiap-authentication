export const oauth2Middleware = (request, reply, done) => {
  const [_, token] = request.headers?.authorization?.split(" ");

  if (!token) {
    return reply.send(403);
  }

  return done();
};

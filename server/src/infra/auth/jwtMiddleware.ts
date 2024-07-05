import jwt from "jsonwebtoken";

export type tokenData = {
  userId: number;
  username: string;
};

export const jwtMiddleware = (request, reply, done) => {
  const [_, token] = request.headers?.authorization?.split(" ");

  if (!token) {
    return reply.send(403);
  }

  return done();
};

export const decodeJWT = (authorization?: string) => {
  const splittedAuthorization = authorization?.split(" ");
  if (!splittedAuthorization) {
    return;
  }

  const [_, token] = splittedAuthorization;
  if (!token) {
    return;
  }

  return jwt.decode(token) as tokenData | null;
};

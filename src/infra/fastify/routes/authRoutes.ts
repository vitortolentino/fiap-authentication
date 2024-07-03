import axios from 'axios';
import { FastifyPluginCallback } from 'fastify';

const {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_OAUTH_URL,
} = process.env

export const authRoutes: FastifyPluginCallback = (fastify, _, done) => {

  fastify.get('/auth', async (_, reply) => {
    console.log('auth -  redirecting to github', `${GITHUB_OAUTH_URL}/authorize?client_id=${GITHUB_CLIENT_ID}`)
    reply.redirect(`${GITHUB_OAUTH_URL}/authorize?client_id=${GITHUB_CLIENT_ID}`);
  });
  
  fastify.get('/oauth-callback', async (_, reply) => {
    console.log(_.query, '---------- reply.body')
    const body = {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET
    }
    const options = {
      headers: {
        accept: 'application/json'
      }
    }

    console.log(`${GITHUB_OAUTH_URL}/access_token`, body)

    try {
      const { data } = await axios.post(`${GITHUB_OAUTH_URL}/access_token`, body, options)
      console.log(data, '---------- data')
      return reply.send(data.token);
    } catch (error) {
      return reply.send(error);
    }
  });

  done();
};



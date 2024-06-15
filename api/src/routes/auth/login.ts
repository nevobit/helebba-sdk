import { login } from "@helebba/business-logic";
import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";

export const loginRoute: RouteOptions = {
 method: 'POST',
 url: '/login',
 handler: async (request: FastifyRequest, reply: FastifyReply) => {
  try{
   const { body } = request;
   const data = body as {email: string, password: string}
   const user = await login(data);
   reply.status(200).send(user);
  }catch(err){
   reply.status(500).send(err);
  }
 }
}
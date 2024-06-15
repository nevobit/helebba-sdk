import { registerUser } from "@helebba/business-logic";
import { CreateUserDto } from "@helebba/entities";
import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";

export const registerUserRoute: RouteOptions = {
 method: 'POST',
 url: '/register',
 handler: async (request: FastifyRequest, reply: FastifyReply) => {
  try{
   const { body } = request;
   const data = body as CreateUserDto;
   const user = await registerUser(data);
   reply.status(201).send(user);
  }catch(err){
   reply.status(500).send(err);
  }
 }
}
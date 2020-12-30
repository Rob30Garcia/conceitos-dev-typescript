import {Request, Response} from 'express';

import  CreateUser  from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
  const user = CreateUser({
    name: "Robert Garcia da Silva",
    email: "robert@email.com",
    password: 123456789,
    techs: ["nodejs", "ReactJs", "ReactNative"],
  });
  
  return response.json(user);
}
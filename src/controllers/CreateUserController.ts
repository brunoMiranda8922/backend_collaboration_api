import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;
    const user = await new CreateUserService().execute({
      name,
      email,
      admin,
      password,
    });

    return response.status(201).json(user);
  }
}

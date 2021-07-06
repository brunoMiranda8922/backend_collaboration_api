import { Request, Response } from 'express';
import { CreateTagService } from '../services/CreateTagService';

export class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const tag = await (new CreateTagService().execute(name));

    return response.status(201).json(tag);
  }
}

import { Request, Response, Router } from "express";
import { GetStoriesControllerInterface } from "../interfaces/GetStories.controller.interface";
import { GetStoriesServiceInterface } from "../interfaces/GetStories.service.interface";

export class GetStoriesController implements GetStoriesControllerInterface {
  constructor(private getStoriesService: GetStoriesServiceInterface) {}

  getRouter(route: string): Router {
    const router = Router();
    router.post(route, this.getStories());
    return router;
  }

  private getStories(): (req: Request, res: Response) => Promise<void> {
    return async (req: Request, res: Response) => {};
  }
}

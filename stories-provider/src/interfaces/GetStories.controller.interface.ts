import { Router } from "express";

export interface GetStoriesControllerInterface {
  getRouter(route: string): Router;
}

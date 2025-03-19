import { Router } from "express";

export interface AuthControllerInterface {
  get getRouter(): Router;
}

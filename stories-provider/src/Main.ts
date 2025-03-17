import { Application, json } from "express";
import express from "express";
import { GetStoriesControllerInterface } from "./interfaces/GetStories.controller.interface";

export class Main {
  constructor(
    private app: Application,
    private getStoriesController: GetStoriesControllerInterface
  ) {
    this.app.use(json());
    this.app.use("/stories", this.getStoriesController.getRouter("/stories"));
  }
  async main(): Promise<void> {
    this.app.listen(3337).on("listening", () => {
      console.log("Server is running on port", 3337);
    });
  }
}

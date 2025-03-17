import { GetStoriesController } from "./controllers/GetStories.controller";
import { Main } from "./Main";
import express from "express";
import { GetStoriesService } from "./services/GetStories.service";

new Main(express(), new GetStoriesController(new GetStoriesService()))
  .main()
  .then(() => {})
  .catch((error) => {
    console.error(error);
  });

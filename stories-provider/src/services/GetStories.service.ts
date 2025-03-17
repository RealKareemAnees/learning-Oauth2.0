import { GetStoriesServiceInterface } from "../interfaces/GetStories.service.interface";

export class GetStoriesService implements GetStoriesServiceInterface {
  constructor() {}

  async getStories(username: string): Promise<string[]> {
    return ["Story 1", "Story 2", "Story 3"];
  }
}

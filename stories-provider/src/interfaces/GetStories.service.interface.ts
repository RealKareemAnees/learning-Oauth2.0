export interface GetStoriesServiceInterface {
  getStories(username: string): Promise<string[]>;
}

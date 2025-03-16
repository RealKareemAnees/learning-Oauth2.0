import { Application, json } from "express";

export class Main {
  constructor(private application: Application) {
    this.application.use(json());
  }

  static async main(): Promise<void> {}
}

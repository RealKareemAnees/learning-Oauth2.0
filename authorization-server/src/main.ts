import express from "express";

export class Main {
  constructor(private app: express.Application) {
    console.log("initializing app");
  }

  async run() {
    console.log("running app");
    this.app
      .listen(3000)

      .on("listening", () => {
        console.log("listening on port 3000");
      });
  }
}

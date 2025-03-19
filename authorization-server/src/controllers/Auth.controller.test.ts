import { describe, it, expect, beforeAll, afterAll } from "bun:test";
import express from "express";
import { AuthController } from "./Auth.controller";
import { AuthControllerInterface } from "../interfaces/Auth.controller.interface";
import { GETCodeServiceInterface } from "../interfaces/GETCode.service.interface";
import axios from "axios";

describe("AuthController", () => {
  let controller: AuthControllerInterface;
  let service: GETCodeServiceInterface;
  let app = express();
  let server: any;

  beforeAll((done) => {
    service = {
      async GETCode() {
        return "abcd";
      },
    };
    controller = new AuthController(service);
    app.use(controller.getRouter);
    server = app.listen(3000, done); // Ensure server is fully started before tests run
  });

  afterAll(() => {
    server.close(); // Ensure the server is properly closed after all tests
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return a code", async () => {
    const response = await axios.get("http://127.0.0.1:3000/code", {
      params: {
        clientID: "www",
        challenge: "ss",
        scope: "ddd",
        redirectURL: "localhost:3000",
        UserID: "123",
      },
    });

    expect(response.status).toBe(200);
    expect(response.data).toBe("abcd");
  });

  it("should return 400 if clientID is missing", async () => {
    try {
      await axios.get("http://127.0.0.1:3000/code", {
        params: {
          challenge: "ss",
          scope: "ddd",
          redirectURL: "localhost:3000",
          UserID: "123",
        },
      });
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toBe("clientID is required");
    }
  });

  it("should return 400 if challenge is missing", async () => {
    try {
      await axios.get("http://127.0.0.1:3000/code", {
        params: {
          clientID: "www",
          scope: "ddd",
          redirectURL: "localhost:3000",
          UserID: "123",
        },
      });
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toBe("challenge is required");
    }
  });

  it("should return 400 if scope is missing", async () => {
    try {
      await axios.get("http://127.0.0.1:3000/code", {
        params: {
          clientID: "www",
          challenge: "ss",
          redirectURL: "localhost:3000",
          UserID: "123",
        },
      });
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toBe("scope is required");
    }
  });

  it("should return 400 if redirectURL is missing", async () => {
    try {
      await axios.get("http://127.0.0.1:3000/code", {
        params: {
          clientID: "www",
          challenge: "ss",
          scope: "ddd",
          UserID: "123",
        },
      });
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data).toBe("redirectURL is required");
    }
  });

  it("should redirect to login if UserID is missing", async () => {
    try {
      await axios.get("http://127.0.0.1:3000/code", {
        params: {
          clientID: "www",
          challenge: "ss",
          scope: "ddd",
          redirectURL: "localhost:3000",
        },
        maxRedirects: 0, // Prevent axios from automatically following redirects
      });
    } catch (error: any) {
      expect(error.response.status).toBe(302); // Redirect status
      expect(error.response.headers.location).toBe(
        "http://localhost:3000/login-and-consent"
      );
    }
  });
});

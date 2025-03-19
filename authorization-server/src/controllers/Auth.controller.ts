import { Request, Response, Router } from "express";
import { AuthControllerInterface } from "../interfaces/Auth.controller.interface";
import { GETCodeQuery } from "../types/GETCodeQuery.type";
import { isQueryValid } from "../lib/isQueryValid.function";
import { GETCodeServiceInterface } from "../interfaces/GETCode.service.interface";

export class AuthController implements AuthControllerInterface {
  private router: Router;

  constructor(private GETCodeService: GETCodeServiceInterface) {
    this.router = Router();
    this.router.get("/code", this.GETCode); // Fix: Pass function reference
  }

  get getRouter() {
    return this.router;
  }

  private GETCode = async (req: Request, res: Response): Promise<void> => {
    const { isValid, error } = isQueryValid(req.query as GETCodeQuery);
    if (!isValid) {
      res.status(400).send(error);
      return;
    }

    if (!req.query.UserID) {
      res.send("UserID is required");
      return;
    }

    const code = await this.GETCodeService.GETCode(req.query as GETCodeQuery);

    res.status(200).send(code);

    return;
  };
}

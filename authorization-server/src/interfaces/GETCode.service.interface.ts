import { GETCodeQuery } from "../types/GETCodeQuery.type";

export interface GETCodeServiceInterface {
  GETCode(query: GETCodeQuery): Promise<string>;
}

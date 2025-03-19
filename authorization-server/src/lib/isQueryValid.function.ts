import { GETCodeQuery } from "../types/GETCodeQuery.type";

export function isQueryValid(query: GETCodeQuery): {
  isValid: boolean;
  error?: string;
} {
  if (!query.clientID) {
    return { isValid: false, error: "clientID is required" };
  }
  if (!query.challenge) {
    return { isValid: false, error: "challenge is required" };
  }
  if (!query.scope) {
    return { isValid: false, error: "scope is required" };
  }
  if (!query.redirectURL) {
    return { isValid: false, error: "redirectURL is required" };
  }
  return { isValid: true };
}

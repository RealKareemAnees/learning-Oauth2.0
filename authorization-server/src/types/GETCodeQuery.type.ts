export type GETCodeQuery = {
  clientID: string;
  challenge: string;
  scope: string;
  redirectURL: string;
  UserID?: string;
};

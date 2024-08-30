import { Request, Response } from "express";
import { NETWORKS } from "src/config/networks";

export async function getAvailableNetworks(_req: Request, res: Response) {
  res.json(NETWORKS);
}

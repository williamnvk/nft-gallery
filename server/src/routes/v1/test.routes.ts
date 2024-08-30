import { Request, Response, Router } from "express";

const router = Router();

router.route("/test").get((_req: Request, res: Response) => {
  res.status(201).json({ message: "Works!" });
});

export default router;

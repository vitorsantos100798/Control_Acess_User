import { Request, Response } from "express";
import { PermissionRepository } from "../repositories/PermissionRepository";

export class PermissionControlher {
  async create(req: Request, res: Response) {
    const { name, username, description } = req.body;
    const existPermission = await PermissionRepository.findOneBy({ name });

    if (existPermission) {
      return res.status(400).json({ error: "Prmission already exists!" });
    }

    const permission = PermissionRepository.create({
      name,
      description,
    });
    await PermissionRepository.save(permission);

    return res.json({ Permission: permission });
  }
}

import { Request, Response } from "express";
import { PermissionRepository } from "../repositories/PermissionRepository";
import { RoleRepository } from "../repositories/RoleRepository";

export class RoleControlher {
  async create(req: Request, res: Response) {
    const { name, description, permissions } = req.body;

    const existRole = await RoleRepository.findOneBy({ name });

    if (existRole) {
      return res.status(400).json({ err: "Role already exists!" });
    }

    const existsPermissions = await PermissionRepository.findBy(permissions);

    const role = RoleRepository.create({
      name,
      description,
      permission: existsPermissions,
    });

    await RoleRepository.save(role);

    return res.json(role);
  }
}

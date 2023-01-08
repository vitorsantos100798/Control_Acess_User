import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";
import bcrypt from "bcrypt";
export class UserController {
  async create(req: Request, res: Response) {
    const { name, password, username } = req.body;

    const userExits = await userRepository.findOneBy({ username });

    if (userExits) {
      return res.status(400).json({ message: "User Already Exists!" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = userRepository.create({
      name,
      username,
      password: hashPassword,
    });
    await userRepository.save(user);
    const userJson = { ...user, password: null };
    return res.status(201).json({ user: userJson });
  }
}

import { compare } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { userRepository } from "../repositories/UserRepository";
export class SessionControlle {
  async createdSession(req: Request, res: Response) {
    const { username, password } = req.body;
    const userExits = await userRepository.findOneBy({ username });

    if (!userExits) {
      return res.json(400).json({ error: "User not found!" });
    }
    const macthPassword = await compare(password, userExits.password);

    if (!macthPassword) {
      return res.status(400).json({ error: "Incorrect password or username" });
    }
    const token = sign({}, "1234", {
      expiresIn: "1d",
      subject: userExits.id,
    });
    return res.json({ token, userExits });
  }
}

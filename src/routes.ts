import { Router } from "express";
import { PermissionControlher } from "./controllers/PermissionControlher";
import { RoleControlher } from "./controllers/RoleController";
import { SessionControlle } from "./controllers/SessionController";
import { UserController } from "./controllers/UserController";

export const router = Router();

router.post("/users", new UserController().create);
router.post("/session", new SessionControlle().createdSession);
router.post("/permission", new PermissionControlher().create);
router.post("/role", new RoleControlher().create);

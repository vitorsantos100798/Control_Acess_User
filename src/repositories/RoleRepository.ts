import { AppDataSource } from "../data-source";
import { Role } from "../entities/Role";

export const RoleRepository = AppDataSource.getRepository(Role);

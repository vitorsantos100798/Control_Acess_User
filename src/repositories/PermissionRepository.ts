import { AppDataSource } from "../data-source";
import { Permission } from "../entities/Permission";

export const PermissionRepository = AppDataSource.getRepository(Permission);

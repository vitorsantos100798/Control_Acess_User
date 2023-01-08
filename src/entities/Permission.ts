import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
} from "typeorm";
import { Role } from "./Role";

@Entity("permissions")
export class Permission {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Role, (role) => role.permission)
  permission_id: Role[];

  @CreateDateColumn()
  created_at: Date;
}

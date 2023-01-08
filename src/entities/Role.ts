import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Permission } from "./Permission";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: "permissions_roles",
    joinColumns: [{ name: "role_id" }],
    inverseJoinColumns: [{ name: "permission_id" }],
  })
  permission: Permission[];

  @CreateDateColumn()
  created_at: Date;
}

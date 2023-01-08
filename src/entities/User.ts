import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Role } from "./Role";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Role)
  @JoinTable({
    name: "users_roles",
    joinColumns: [{ name: "user_id" }],
    inverseJoinColumns: [{ name: "role_id" }],
  })
  roles: Role[];

  @CreateDateColumn()
  created_at: Date;
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class default1673100637910 implements MigrationInterface {
    name = 'default1673100637910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "FK_1c3e884be4aa69af6bc0d0cb2d7"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "FK_9173e2102ae416a0d07b0c574fc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1c3e884be4aa69af6bc0d0cb2d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9173e2102ae416a0d07b0c574f"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "PK_4d965ad8590b85d4bfa31aed665"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "PK_9173e2102ae416a0d07b0c574fc" PRIMARY KEY ("permission_id")`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP COLUMN "room_id"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "PK_9173e2102ae416a0d07b0c574fc"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP COLUMN "permission_id"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD "role_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "PK_e07d497132709affeef715a2b60" PRIMARY KEY ("role_id")`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD "ppermission_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "PK_e07d497132709affeef715a2b60"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "PK_00116dd8bcbc0f225460b2471a6" PRIMARY KEY ("role_id", "ppermission_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_e07d497132709affeef715a2b6" ON "permission_roles" ("role_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_3f004698ffa66193b824409ad0" ON "permission_roles" ("ppermission_id") `);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "FK_e07d497132709affeef715a2b60" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "FK_3f004698ffa66193b824409ad08" FOREIGN KEY ("ppermission_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "FK_3f004698ffa66193b824409ad08"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "FK_e07d497132709affeef715a2b60"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3f004698ffa66193b824409ad0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e07d497132709affeef715a2b6"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "PK_00116dd8bcbc0f225460b2471a6"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "PK_e07d497132709affeef715a2b60" PRIMARY KEY ("role_id")`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP COLUMN "ppermission_id"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "PK_e07d497132709affeef715a2b60"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP COLUMN "role_id"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD "permission_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "PK_9173e2102ae416a0d07b0c574fc" PRIMARY KEY ("permission_id")`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD "room_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "PK_9173e2102ae416a0d07b0c574fc"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "PK_4d965ad8590b85d4bfa31aed665" PRIMARY KEY ("room_id", "permission_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_9173e2102ae416a0d07b0c574f" ON "permission_roles" ("permission_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_1c3e884be4aa69af6bc0d0cb2d" ON "permission_roles" ("room_id") `);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "FK_9173e2102ae416a0d07b0c574fc" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "FK_1c3e884be4aa69af6bc0d0cb2d7" FOREIGN KEY ("room_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}

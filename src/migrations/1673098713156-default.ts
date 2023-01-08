import { MigrationInterface, QueryRunner } from "typeorm";

export class default1673098713156 implements MigrationInterface {
    name = 'default1673098713156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permission_roles" ("room_id" uuid NOT NULL, "permission_id" uuid NOT NULL, CONSTRAINT "PK_4d965ad8590b85d4bfa31aed665" PRIMARY KEY ("room_id", "permission_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1c3e884be4aa69af6bc0d0cb2d" ON "permission_roles" ("room_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9173e2102ae416a0d07b0c574f" ON "permission_roles" ("permission_id") `);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "FK_1c3e884be4aa69af6bc0d0cb2d7" FOREIGN KEY ("room_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "FK_9173e2102ae416a0d07b0c574fc" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "FK_9173e2102ae416a0d07b0c574fc"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "FK_1c3e884be4aa69af6bc0d0cb2d7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9173e2102ae416a0d07b0c574f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1c3e884be4aa69af6bc0d0cb2d"`);
        await queryRunner.query(`DROP TABLE "permission_roles"`);
    }

}

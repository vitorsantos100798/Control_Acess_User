import { MigrationInterface, QueryRunner } from "typeorm";

export class default1673101367411 implements MigrationInterface {
    name = 'default1673101367411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "FK_3f004698ffa66193b824409ad08"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3f004698ffa66193b824409ad0"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" RENAME COLUMN "ppermission_id" TO "permission_id"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" RENAME CONSTRAINT "PK_00116dd8bcbc0f225460b2471a6" TO "PK_0a8c5ef722edb01ee0d27acdf08"`);
        await queryRunner.query(`CREATE INDEX "IDX_9173e2102ae416a0d07b0c574f" ON "permission_roles" ("permission_id") `);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "FK_9173e2102ae416a0d07b0c574fc" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permission_roles" DROP CONSTRAINT "FK_9173e2102ae416a0d07b0c574fc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9173e2102ae416a0d07b0c574f"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" RENAME CONSTRAINT "PK_0a8c5ef722edb01ee0d27acdf08" TO "PK_00116dd8bcbc0f225460b2471a6"`);
        await queryRunner.query(`ALTER TABLE "permission_roles" RENAME COLUMN "permission_id" TO "ppermission_id"`);
        await queryRunner.query(`CREATE INDEX "IDX_3f004698ffa66193b824409ad0" ON "permission_roles" ("ppermission_id") `);
        await queryRunner.query(`ALTER TABLE "permission_roles" ADD CONSTRAINT "FK_3f004698ffa66193b824409ad08" FOREIGN KEY ("ppermission_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

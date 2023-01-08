import { MigrationInterface, QueryRunner } from "typeorm";

export class default1673178820264 implements MigrationInterface {
    name = 'default1673178820264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permissions_roles" ("role_id" uuid NOT NULL, "permission_id" uuid NOT NULL, CONSTRAINT "PK_838ed6e68b01d6912fa682bedef" PRIMARY KEY ("role_id", "permission_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e08f6859eaac8cbf7f087f64e2" ON "permissions_roles" ("role_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_3309f5fa8d95935f0701027f2b" ON "permissions_roles" ("permission_id") `);
        await queryRunner.query(`ALTER TABLE "permissions_roles" ADD CONSTRAINT "FK_e08f6859eaac8cbf7f087f64e2b" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" ADD CONSTRAINT "FK_3309f5fa8d95935f0701027f2bd" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permissions_roles" DROP CONSTRAINT "FK_3309f5fa8d95935f0701027f2bd"`);
        await queryRunner.query(`ALTER TABLE "permissions_roles" DROP CONSTRAINT "FK_e08f6859eaac8cbf7f087f64e2b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3309f5fa8d95935f0701027f2b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e08f6859eaac8cbf7f087f64e2"`);
        await queryRunner.query(`DROP TABLE "permissions_roles"`);
    }

}

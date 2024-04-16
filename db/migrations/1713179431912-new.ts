import { MigrationInterface, QueryRunner } from "typeorm";

export class New1713179431912 implements MigrationInterface {
    name = 'New1713179431912'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`test\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`test\``);
    }

}

import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions:DataSourceOptions = {
        type: 'mysql',
        host: 'mysql',
        port: 3306,
        username: 'root',
        password: '1234rtyu',
        database: 'basic-project',
        entities: ['dist/**/*.entity.js'],
        // logging: true,
        // autoLoadEntities: true,
        // synchronize: Boolean(process.env.DATABASE_SYNC),
        migrations: ['dist/db/migrations/*.js']
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource;
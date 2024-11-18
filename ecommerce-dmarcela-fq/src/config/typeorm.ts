import { registerAs } from '@nestjs/config';
import { config as dotenConfig } from 'dotenv'
import { DataSource, DataSourceOptions, Migration } from 'typeorm';

dotenConfig (
    {path:'.env.development'}
);
const config = {
    type: 'postgres',
    database: `${process.env.DB_NAME}` || 'localhost',
    host: `${process.env.DB_HOST}`,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations:['dist/**/migrations/*{.ts,.js}'],
    autoLoadEntities: true,
    dropSchema: true,
    synchronize: true,
    logging: true
}

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
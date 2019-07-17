import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  APP: process.env.APP || 'development',
  PORT: process.env.PORT || '8081',

  DB_DIALECT: process.env.DB_DIALECT || 'mongo',
  DB_HOST: process.env.DB_HOST || 'MONGO_CONNECTION_URL',
  DB_NAME: process.env.DB_NAME || 'DB_NAME',
  DB_PASSWORD: process.env.DB_PASSWORD || 'DB_PASSWORD',
  DB_PORT: process.env.DB_PORT || 'DB_PORT',
  DB_USER: process.env.DB_USER || 'DB_USER',

  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || 'JWT_ENCRYPTION',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '14d',
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10
};

export default config;

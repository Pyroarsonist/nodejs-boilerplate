import dotenv from 'dotenv';

dotenv.config();

globalThis.__DEV__ = process.env.NODE_ENV !== 'production';

export const someEnv = process.env.SOME_ENV;

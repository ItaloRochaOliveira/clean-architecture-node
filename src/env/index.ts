import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
    
    MYSQL_HOST: z.string(),
    MYSQL_PORT:z.coerce.number(),
    // DB_PASS: z.coerce.number(),
    MYSQL_USER: z.string(),
    MYSQL_PASSWORD: z.string(),
    DB_DATABASE: z.string()
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
    console.error('❌ Invalid enviroment variable', _env.error.format());
  
    throw new Error('Invalid enviroment variables');
}
  
export const env = _env.data;
  
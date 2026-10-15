interface AppEnv {
    NODE_ENV: string
    PORT: String
    DATABASE_URL: string
    BETTER_AUTH_URL: string
    BETTER_AUTH_SECRET: string
};

const loadEnvVariables = (): AppEnv => {
    const requiredVariavles = [
        "NODE_ENV",
        "PORT",
        "DATABASE_URL",
        "BETTER_AUTH_URL",
        "BETTER_AUTH_SECRET"
    ];

    const missingVariables: string[] = requiredVariavles.filter((variable: string) => !process.env[variable]);

    if (missingVariables.length > 0) {
        throw new Error(`Missing environment variables: ${missingVariables.join(", ")}`)
    };

    const envs: AppEnv = {
        NODE_ENV: process.env.NODE_ENV as string,
        PORT: process.env.PORT as string,
        DATABASE_URL: process.env.DATABASE_URL as string,
        BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
        BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string,
    };

    return envs;
};

export const envVars = loadEnvVariables();
import { app } from "./app";
import { envVars } from "./config/env";

const bootstrap = async () => {
    try {
        app.listen(envVars.PORT, () => {
            console.log(`Server is running on http://localhost:${envVars.PORT}`);
        })

    } catch (err) {
        console.log("Failed to start server", err);
    };
};

bootstrap();
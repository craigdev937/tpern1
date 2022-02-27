module.exports = [
    {
        type: "postgres",
        host: "localhost",
        url: process.env.DATABASE_URL,
        synchronize: true,
        logging: false,
        entities: ["dist/models/**/*.js"],
        migrations: ["src/migrations/**/*.ts"],
        subscribers: ["src/subscribers/**/*.ts"],
        cli: {
            "entitiesDir": "src/models",
            "migrationsDir": "src/migrations",
            "subscribersDir": "src/subscribers"
        }
    }    
]



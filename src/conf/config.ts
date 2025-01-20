interface IConfig {
    BACKEND_URL : string;
}

const config : IConfig = {
    BACKEND_URL : process.env.BACKEND_URL || 'http://localhost:8080'
}

export default config;
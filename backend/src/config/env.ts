const ENV = { ...process.env };

type ENV_KEYS = keyof typeof ENV;

const env = (key: ENV_KEYS, defaultValue: string = ''): any => {
    return ENV[key] || defaultValue;
}

const isDevelopment = (): boolean => process.env.NODE_ENV === 'development';

export {
    ENV,
    env,
    isDevelopment
}
const ENV = { ...process.env };

type ENV_KEYS = keyof typeof ENV;

const env = (key: ENV_KEYS, defaultValue: string = ''): string => {
    return ENV[key] || defaultValue;
}

export {
    ENV,
    env,
}
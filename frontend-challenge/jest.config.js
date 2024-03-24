module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testMatch: [
        "<rootDir>/src/**/__tests__/**/*.{ts,tsx}",
        "<rootDir>/src/**/*.{spec,test}.{ts,tsx}"
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    globals: {
        'ts-jest': {
        tsconfig: 'tsconfig.json'
        }
    }
};
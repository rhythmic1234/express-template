module.exports = {
    env: {
        node: true,
        jest: true
    },
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['sonarjs', 'jest'],
    rules: {
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/expect-expect': 'error',
    },
    extends: [
        "eslint:recommended",
        'google',
        'prettier',
        'plugin:sonarjs/recommended',
    ],
    ignorePatterns: [
        "package.json",
        "package-lock.json",
        "docs/*",
        "*.md",
        "*.env",
    ]
};

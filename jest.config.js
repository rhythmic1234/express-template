module.exports = async () => {
    return {
        verbose: true,

        // Abort tests when a test has failed
        bail: 1,
        collectCoverage: true,
        coverageReporters: ['text', 'lcov'],
        reporters: ['default'],

        // Randomly run tests within a file
        randomize: true,
        showSeed: true,

        collectCoverageFrom: ['./src/**/*.{js,jsx}', '!**/node_modules/**'],

        // Use 50% of available CPU capacity (for example if there are 20 CPU cores, use 10 for tests)
        maxWorkers: '50%',
    };
};

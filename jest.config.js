export default {
    verbose: true,
    transform: {
        "^.+\\.ts?$": [
            "ts-jest",
            {
                useESM: true
            }
        ]
    },
    extensionsToTreatAsEsm: [".ts"],
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    }
};
const { pascalCase } = require('change-case');

module.exports = {
    title: 'React',
    default: 'tsx',
    path: ({ options }, filename) => (options.directory ? `./src/components/${filename}` : './src/components'),
    description: 'React components',
    options: {
        directory: {
            type: 'boolean',
            short: 'd',
            description: 'Create as directory',
        }
    },
    hooks: {
        preFileName: (_, filename) => pascalCase(filename),
    },
};

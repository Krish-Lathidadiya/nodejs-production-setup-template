// A typical commitlint.config.js file defines the rules for how commit messages should be structured.

module.exports = {
    extends: ['@commitlint/cli','@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2, // Error level (2 = error, 1 = warning, 0 = disable)
        'always',
        [
          'feat',    // New features
          'fix',     // Bug fixes
          'docs',    // Documentation changes
          'style',   // Code style changes (formatting, no impact on logic)
          'refactor',// Refactoring code (neither adding features nor fixing bugs)
          'perf',    // Performance improvements
          'test',    // Adding or updating tests
          'build',   // Changes to build process, tools, or dependencies
          'ci',      // Changes to CI configuration
          'chore',   // General tasks unrelated to the code itself
          'revert'   // Reverting a previous commit
        ],
      ],
      'subject-case': [2, 'never', ['start-case', 'pascal-case']], // Enforces lower case in the subject
      'subject-empty': [2, 'never'], // Prevent empty subjects
      'header-max-length': [2, 'always', 72], // Limit header to 72 characters
    },
  };
  
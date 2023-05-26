module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'add',
        'fix',
        'update',
        'docs',
        'style',
        'refactor',
        'test',
        'revert',
        'ci'
      ]
    ]
  }
}

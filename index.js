module.exports = {
  extends: ['tslint-config-standard'],
  rules: {
    "new-parens": false,
    "trailing-comma": [true, {"multiline": "always", "singleline": "never"}],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-type",
      "check-typecast",
      "check-preblock"
    ]
  }
}

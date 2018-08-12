module.exports = {
    "extends": "google",
    "parserOptions": {
        "ecmaVersion": 6
    },
    rules: {
        "linebreak-style": ["error", "windows"],
        "new-cap": ["error", {
            "properties": false
        }],
        "space-before-function-paren": ["error", "always"],
    }
};
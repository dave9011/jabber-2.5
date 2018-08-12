module.exports = {
    "extends": "google",
    "parserOptions": {
        "ecmaVersion": 2017
    },
    rules: {
        "linebreak-style": ["error", "windows"],
        "new-cap": ["error", {
            "properties": false
        }],
        "space-before-function-paren": ["error", "always"],
    }
};
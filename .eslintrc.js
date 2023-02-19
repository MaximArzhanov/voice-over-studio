module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns":
        [
            "babel.config.js", 
            "package-lock.json",
            "package.json",
            "postcss.config.js",
            "webpack.config.js",
            ".eslintrc.js",
            "dist/index.html",
            "dist/main.html",
        ],
    "rules": {
    }
}
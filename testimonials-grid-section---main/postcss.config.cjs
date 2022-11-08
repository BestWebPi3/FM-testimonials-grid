module.exports = {
    plugins: [
        require('postcss-pxtorem')({propList: ['*'], mediaQuery: true})
    ]
};
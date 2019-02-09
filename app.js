const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello from library app')
})

app.listen(3000, () => {
    debug('====================================');
    debug(`Listening on port ${chalk.green('3000')}`);
    debug('====================================');
})
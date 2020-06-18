const glob = require('glob');
const shell = require('shelljs');
glob("src/**/*.js", (err, matches) => {
    if(err) throw err;
    matches.map(match => {
        return require('fs').watchFile(`./${match}`, (cur, prev) => {
            shell.exec("npm run go")
        })
    })
})
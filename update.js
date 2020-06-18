const glob = require('glob');
const shell = require('shelljs');
shell.exec("npm run go")
glob("src/**/*.js", (err, matches) => {
    if(err) throw err;
    matches.map(match => {
        return require('fs').watchFile(`./${match}`, (cur, prev) => {
            shell.exec("npm run go")
        })
    })
})
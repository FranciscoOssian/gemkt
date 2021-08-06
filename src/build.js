const { exec } = require('child_process');

const build = (grunt) => {
    if(!grunt) return;

    exec('npm run build', (err, stdout, stderr) => {
        if (err) return console.log("node couldn't execute the command", err);
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

module.exports.build = build
// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Example route to run command
app.get('/run-command', (req, res) => {
    const { cmd } = req.query;
    console.log(cmd);
    // Code to run the command
    const { exec } = require('child_process');
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log(`stdout: ${stdout}`);
        res.send(stdout);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

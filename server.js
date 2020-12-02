fs = require('fs')
const express = require('express');
const app = express();
const port = 3000

const readFile = ((filePath) =>
{
	console.log("reading file ", filePath);
        const data = fs.readFileSync(filePath, 'utf8')
        console.log(data)
        return data;
});

app.get('/', (req, res) => {
  console.log("Got new request");
  res.send('Contenu de l\'historique : ', readFile("/tmp/discord_history.txt"));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


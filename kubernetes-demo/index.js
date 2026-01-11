import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    messsage:
    'Hello, Kubernetes!',
    service: 'hello-node',
    pod: process.POD_NAME || 'unknown',
    time: new Date().toISOString(),
});
});

app.get('/readyz',(req,res) => {
    res.sendStatus(200); // OK status code
    res.send('ready');
});

app.get('/healthz',(req,res) => {
    res.sendStatus(200); // OK status co
    res.send('OK');
})


app.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}`);
})
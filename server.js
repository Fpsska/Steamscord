const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();



// middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT, PATCH, UPDATE");
    next();
});



// routes
app.get('/', (req, res) => {
    res.send('START route');
});

app.get('/api/data', async (req, res) => {
    const IDS = '76561198263478170_76561198034948682_76561198084746227_76561197988532919_76561198291514144_76561198873628029_76561198857004420_76561198155088017_76561198075746592_76561198833049585_76561198087024643_76561198353651479_76561198278418996'
    const URL = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.API_KEY}&steamids=${IDS}`
    const response = await fetch(URL)
        .then(res => res.json())
        .catch(err => console.error(err.message || err));

    res.json(response.response);
});



// connection
const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
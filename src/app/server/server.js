const express = require("express");
const path = require('path');
const axios = require('axios');

const PORT = process.env.PORT

if (PORT == null || PORT == "") {
    PORT = 8000;
}

const app = express();

//  Serve the static files from the React app
app.use(express.static('/public'));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT, PATCH, UPDATE");
    next()
});

app.get('/api', (req, res) => {
    axios.get("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=A15845DCA701187E95FB717C1D208226&steamids=76561198263478170_76561198034948682_76561198084746227_76561197988532919_76561198291514144_76561198873628029_76561198857004420_76561198155088017_76561198075746592")
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error(response.status)
        //     }
        //     return response
        // })
        .then(response => {
            responseData = response.data.response.players
            res.json(responseData)
        })
    // .catch(error => console.log(error))
});


app.listen(PORT, (err) => {
    if (err) {
        console.log("LISTEN ERROR: ", err);
        return;
    }
    console.log(`Server started on port ${PORT}`);
});
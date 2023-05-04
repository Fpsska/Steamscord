const fetch = require("node-fetch");

class steamController {
  async getUsersData(req, res) {
    const userIDS = [
      "76561198263478170",
      "76561198034948682",
      "76561198084746227",
      "76561197988532919",
      "76561198291514144",
      "76561198873628029",
      "76561198857004420",
      "76561198155088017",
      "76561198075746592",
      "76561198833049585",
      "76561198087024643",
      "76561198353651479",
      "76561198278418996",
      "76561198847348436",
      "76561198026374216",
    ];
    const stringifyUserIDS = userIDS.join("_");

    const URL = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.API_KEY}&steamids=${stringifyUserIDS}`;

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("some error of steam API");
      }

      const data = await response.json();
      res.json(data.response.players);
    } catch (err) {
      console.error(err.message | err);
    }
  }
}

module.exports = new steamController();

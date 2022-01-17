require("dotenv").config();
const fetch = require("node-fetch");
const NftController = require("../Controllers/NftController");
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
  async fetchNFTData(latestActivity) {
    var url1 =
      "https://api.opensea.io/api/v1/asset/" +
      latestActivity.asset.asset_contract.address +
      "/" +
      latestActivity.asset.token_id +
      "/";
    console.log("============= Fetching NFT Data ================");
    console.log("URL  => ", url1);
    console.log("================================================");
    var options1 = {
      method: "GET",
      headers: {
        "X-API-KEY": "4271a1652e6448aba8ce217acb2fabd1",
      },
    };
    await fetch(url1, options1)
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          NftController.storeNewNFT(json, latestActivity, null);
        }, 1000);
      })
      .catch((err) => console.log(err));
    await timer(5000);
  },

  async latestEvents() {
    var timeAfter = Date.now() - 120 * 1000;
    var timeBefore = Date.now();
    var collectionsSlugs = {};
    var assetIds = [];
    var offset = 0,
      url1 = "",
      exit = false,
      options1 = {};
    for (let offset = 0; offset < 10000 && !exit; offset = offset + 300) {
      url1 =
        "https://api.opensea.io/api/v1/events?only_opensea=false&offset=" +
        offset +
        "&event_type=created&limit=300&occurred_after=" +
        timeAfter +
        "&occurred_before=" +
        timeBefore;
      options1 = {
        method: "GET",
        headers: {
          "X-API-KEY": "4271a1652e6448aba8ce217acb2fabd1",
        },
      };
      await fetch(url1, options1)
        .then((json) => json.json())
        .then((json) => {
          if (!json.asset_events || json.asset_events.length == 0) {
            console.log(
              "============= Response From OpenSea EventsAPI ================"
            );
            console.log(json);
            console.log("URL  => ", url1);
            console.log(
              "=============================================================="
            );
            exit = true;
          } else {
            json.asset_events.map(async (a) => {
              if (a.asset && !assetIds.includes(a.asset.id)) {
                if (
                  (a.bid_amount && a.bid_amount / 1000000000000000000 > 0.25) ||
                  (a.starting_price &&
                    a.starting_price / 1000000000000000000 > 0.25)
                ) {
                  var cnt = 1;
                  assetIds.push(a.asset.id);
                  if (collectionsSlugs[a.collection_slug])
                    cnt = collectionsSlugs[a.collection_slug] + 1;
                  collectionsSlugs[a.collection_slug] = cnt;
                  if (cnt < 6) {
                    this.fetchNFTData(a);
                  }
                } else if (a.event_type === "transfer") {
                  assetIds.push(a.asset.id);
                  this.fetchNFTData(a);
                }
              }
            });
          }
        })
        .catch((err) => console.log(err));
      await timer(1500);
    }
    return assetIds;
  },
  async fetchNFTs(publicNfts) {
    await this.latestEvents();
  },
};

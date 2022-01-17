const fetch = require("node-fetch");
const NftController = require("./Controllers/NftController");
module.exports = {
    async fetchOwnerNfts(ownerId, user_id, name, real_user) {
        if (real_user) {
            const url =
                "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=" +
                ownerId;
            console.log(url);
            const options = {
                method: "GET"
                , headers: {
                    "X-API-KEY": "4271a1652e6448aba8ce217acb2fabd1",
                },
            };
            fetch(url, options)

                .then((res) => res.json())
                .then((json) => {
                    console.log("alert 3")
                    // alert 4 json { assets: [] }
                    // alert 4 json { detail: 'Request was throttled.' }
                    console.log("alert 4 json", json)
                    NftController.store(json, user_id, name);
                    console.log(true)
                })
                .catch((err) => console.log(err));
        } else {
            const url =
                "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&order_by=sale_price&owner=" +
                ownerId;
            const options = {
                method: "GET",
                headers: {
                    "X-API-KEY": "4271a1652e6448aba8ce217acb2fabd1",
                },
            };
            fetch(url, options)
                .then((res) => res.json())
                .then((json) => {
                    NftController.store(json, user_id, name);

                    console.log(true)
                })
                .catch((err) =>
                    console.log(err)
                );
        }
        return true
        // }
    }
}

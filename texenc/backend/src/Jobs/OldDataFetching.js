// fetchCollectionNfts = (collection) => {
//   var offset = 0;
//   while (offset <= 10000) {
//     console.log("offset => ", offset);
//     const url =
//       "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=" +
//       offset +
//       "&limit=50&collection=" +
//       collection;
//     const options = { method: "GET" };
//     fetch(url, options)
//       .then((res) => res.json())
//       .then((json) => NftC.store(json, null))
//       .catch((err) => {});
//     offset = offset + 50;
//   }
// };

// markRealUserNft = async () => {
//   let publicAddresses = [];
//   let realUsers = await User.findAll({
//     where: {
//       real_user: true,
//     },
//   });

//   realUsers.map((a) => {
//     if (a.public_address) {
//       publicAddresses.push(a.public_address);
//     }
//   });

//   let nftsOfRealUsers = await Nft.findAll({
//     include: [
//       {
//         association: "getComments",
//         attributes: {
//           exclude: ["photo_id", "updatedAt"],
//         },
//       },
//       {
//         association: "getLikes",
//         attributes: ["user_id"],
//       },
//     ],
//     where: {
//       creator_public_address: publicAddresses,
//     },
//   });

//   let temp = [];
//   let idForLoop = [];
//   for (let i = 0; i < nftsOfRealUsers.length; i++) {
//     let arr = [];
//     let arrId = [];
//     let mostliked = null;
//     let mostCommented = null;
//     for (let j = 0; j < nftsOfRealUsers.length; j++) {
//       if (!idForLoop.includes(nftsOfRealUsers[i].creator_public_address)) {
//         if (
//           nftsOfRealUsers[j].creator_public_address ==
//           nftsOfRealUsers[i].creator_public_address
//         )
//           arr.push(nftsOfRealUsers[j]);
//       }
//     }
//     if (!idForLoop.includes(nftsOfRealUsers[i].creator_public_address))
//       idForLoop.push(nftsOfRealUsers[i].creator_public_address);
//     arr.map((x) => {
//       arrId.push(x.id);
//       if (mostliked != null) {
//         if (x.getLikes.length > mostliked.getLikes.length) {
//           mostliked = x;
//         }
//       } else {
//         mostliked = x;
//       }
//       if (mostCommented != null) {
//         if (x.getComments.length > mostCommented.getComments.length) {
//           mostCommented = x;
//         }
//       } else {
//         mostCommented = x;
//       }
//     });
//     if (mostliked)
//       if (mostliked.getLikes.length > mostCommented.getComments.length)
//         temp.push(mostliked);
//       else temp.push(mostCommented);

//     await Nft.update(
//       {
//         nft_index: null,
//       },
//       {
//         where: {
//           id: arrId,
//         },
//       }
//     );
//   }

//   let idOfNfts = [];
//   temp.map((i) => {
//     idOfNfts.push(i.id);
//   });

//   await Nft.update(
//     {
//       nft_index: 1,
//     },
//     {
//       where: {
//         id: idOfNfts,
//       },
//     }
//   );
// };

// fetchOwnerNfts = (ownerId, user_id, name) => {
//   const url =
//     "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=" +
//     ownerId;
//   const options = { method: "GET" };
//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => NftC.store(json, user_id, name))
//     .catch((err) => {});
// };

// cron.schedule("*/5 * * * *", function () {
//   // console.log('============== in script of logged in ======================');
//   // console.log('====================================');

//   // GET logged in user NFTS
//   cliente.get("loggedInUsers", (err, data) => {
//     if (!data) return "";
//     if (err) throw err;
//     if (!data) return;
//     var users = data.split(" ").filter((a) => a != "null" && a != "");
//     // console.log('===================== users ==============================');
//     // console.log(users);
//     // console.log('===================== users ==============================');
//     users.map(async (a) => {
//       if (a) {
//         let user = await User.findOne({
//           where: { public_address: a },
//           attributes: {
//             exclude: ["password", "updatedAt"],
//           },
//           include: [
//             {
//               association: "getFollows",
//               attributes: ["user_to"],
//               include: [
//                 {
//                   association: "getUserFollows",
//                   attributes: ["id", "public_address"],
//                 },
//               ],
//             },
//           ],
//         });
//         if (user) {
//           // console.log('====== in user query ==============================');
//           var allWallets = await Wallet.findAll({
//             where: {
//               user_id: user.id,
//             },
//           });
//           fetchOwnerNfts(a, user.id, user.name);
//           allWallets.map((wallet) => {
//             console.log(
//               "=========== here is all wallets ========================="
//             );
//             console.log(wallet.public_address);
//             console.log("====================================");
//             fetchOwnerNfts(wallet.public_address, user.id, user.name);
//           });
//           user.getFollows.map(async (b) => {
//             fetchOwnerNfts(b.getUserFollows.public_address, b.user_to);
//           });
//         }
//       }
//     });
//   });

//   markRealUserNft();
// });

// cron.schedule("0 0/12 * * *", function () {
//   // GET Collection NFTS
//   var collectionSlugs = [
//     "fnd",
//     "rarible",
//     "async-art",
//     "superrare",
//     "makersplace",
//     "known-origin",
//   ];
//   collectionSlugs.map((a) => {
//     console.log(a);
//     fetchCollectionNfts(a);
//   });
// });
// // cron.schedule("* * * * *", async function () {
// //   var users = await User.findAll({
// //     where: {
// //       name: ''
// //     }
// //   })
// //   for (var i = 0; i < users.length; i++) {
// //     if (users[i].public_address != '')
// //       users[i].update({ name: users[i].public_address })
// //     else
// //       users[i].destroy()

// //   }
// // });

// cron.schedule("0 0/12 * * *", async function () {
//   // GET logged out user NFTS
//   // var users = await Wallet.findAll({});
//   // users.map((a) => {
//   //   if (a.public_address) {
//   //     const url =
//   //       "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=" +
//   //       a.public_address;
//   //     const options = { method: "GET" };
//   //     fetch(url, options)
//   //       .then((res) => res.json())
//   //       .then((json) => NftC.store(json, a.user_id))
//   //       .catch((err) => { });
//   //   }
//   // });
//   // GET 10k Public NFTS

//   var offset = 0,
//     url1 = "",
//     options1 = {};
//   while (offset <= 10000) {
//     console.log("offset => ", offset);
//     url1 =
//       "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=" +
//       offset +
//       "&limit=50";
//     options1 = { method: "GET" };
//     fetch(url1, options1)
//       .then((res) => res.json())
//       .then((json) => NftC.store(json, null))
//       .catch((err) => {});
//     offset = offset + 50;
//   }
// });

const Sequelize = require("sequelize");
// const mongodb = require("mongodb");
// const mongoClient = mongodb.mongoClient;

// const mongoConnect = callback => {
//   mongoClient
//     .connect("127.0.0.1")
//     .then(result => {
//       console.log("MongoDB connected");
//       callback(client);
//     })
//     .catch(err => {
//       console.log("err");
//     });
// };
const sequelize = new Sequelize("node-complete", "root", "password", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequelize;
// module.exports = mongodb;

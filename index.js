
const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, console.log("Server was activated!"));

// 以下でローカルサーバーが立ち上がっているかlocalhost:3000で確認できればok!  
app.get("/", (req, res) => {
  // res.json("Clientに返すサーバー側の処理")
  res.send("Clientに返すサーバー側の処理")
});
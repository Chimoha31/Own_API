
const express = require("express");
const app = express();
// json()形式を使用する場合は、(postmanを使用する際などにも)以下の記述が必要
app.use(express.json());

const PORT = 3000;

app.listen(PORT, console.log("Server was activated!"));

// 以下でローカルサーバーが立ち上がっているかlocalhost:3000で確認できればok!  
app.get("/", (req, res) => {
  // res.json("Clientに返すサーバー側の処理")
  res.send("Clientに返すサーバー側の処理")
});


//客情報をサーバーに置いておく(twitterで言うと最新tweetにあたる)
// 以下json()形式で記述。Web APIを作る上でのデータとなり、これをClient側に返す。
const customers = [
  {title: "Tanaka", id:1},
  {title: "Saitou", id:2},
  {title: "Maekawa", id:3},
  {title: "Suzuki", id:4},
  {title: "Andou", id:5},
];

// (GETメソッド)データを取得できるようにする(CRUD=Create,Read,Update,Delete)
app.get("/api/customers", (req, res) => {
  res.send(customers)
});

// 1人1人の客のデータをidの指定よって呼び出したい時
app.get("/api/customers/:id", (req, res) => {
 const customer = customers.find((c) => c.id === parseInt(req.params.id));
 res.send(customer);
});

//(POSTメソッド)データを送信(作成)してみよう
app.post("/api/customers", (req, res) => {
  const customer = {
    title: req.body.title,
    id: customers.length + 1,
  };
  customers.push(customer);
  res.send(customers);
})
"use strict";
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.get("/religion", (req, res) => {
let religion =[
    {num:1, religion:"北海道・東北"},
    {num:2, religion:"関東"},
    {num:3, religion:"中部"},
    {num:4, religion:"近畿"},
    {num:5, religion:"中国・四国"},
    {num:6, religion:"九州"}
]
  res.render('religon', {data: religion} );
});
app.get("/religion/0", (req, res) => {
let prefec = [
    {id:1, name:"北海道"},
    {id:2, name:"青森県"},
    {id:3, name:"岩手県"},
    {id:4, name:"秋田県"},
    {id:5, name:"宮城県"},
    {id:6, name:"山形県"},
    {id:7, name:"福島県"}

]; 
  res.render('tohoku', {data: prefec} );
});
app.get("/religion/1", (req, res) => {
let prefec = [
    {id:1, name:"茨城県"},
    {id:2, name:"栃木県"},
    {id:3, name:"群馬県"},
    {id:4, name:"埼玉県"},
    {id:5, name:"千葉県"},
    {id:6, name:"東京都"},
    {id:7, name:"神奈川県"}

]; 
  res.render('kanto', {data: prefec} );
});

app.get("/religion/2", (req, res) => {
let prefec = [
    {id:1, name:"長野県"},
    {id:2, name:"岐阜県"},
    {id:3, name:"山梨県"},
    {id:4, name:"静岡県"},
    {id:5, name:"愛知県"},
    {id:6, name:"新潟県"},
    {id:7, name:"富山県"},
    {id:8, name:"石川県"},
    {id:9, name:"福井県"}

];
  res.render('tyubu', {data: prefec} );
});

app.get("/religion/3", (req, res) => {
let prefec = [
    {id:1, name:"滋賀県"},
    {id:2, name:"京都府"},
    {id:3, name:"三重県"},
    {id:4, name:"和歌山県"},
    {id:5, name:"奈良県"},
    {id:6, name:"大阪府"},
    {id:7, name:"兵庫県"}

];
  res.render('kinki', {data: prefec} );
});
app.get("/religion/4", (req, res) => {
let prefec = [
    {id:1, name:"鳥取県"},
    {id:2, name:"島根県"},
    {id:3, name:"岡山県"},
    {id:4, name:"広島県"},
    {id:5, name:"山口県"},
    {id:6, name:"愛媛県"},
    {id:7, name:"香川県"},
    {id:8, name:"高知県"},
    {id:9, name:"徳島県"}

];
  res.render('sikoku', {data: prefec} );
});

app.get("/religion/5", (req, res) => {
let prefec = [
    {id:1, name:"大分県"},
    {id:2, name:"福岡県"},
    {id:3, name:"佐賀県"},
    {id:4, name:"長崎県"},
    {id:5, name:"熊本県"},
    {id:6, name:"宮崎県"},
    {id:7, name:"鹿児島県"},
    {id:8, name:"沖縄県"}

];
  res.render('kyusyu', {data: prefec} );
});

let tohoku = [
    {id:1, name:"北海道", capital:"札幌市", religion:"北海道・東北", population:"約522万人", Gdcity:"札幌市", RCcity:"札幌市", fls:"時計塔"},
    {id:2, name:"青森県", capital:"青森市", religion:"北海道・東北", population:"約123万人", Gdcity:"なし", RCcity:"なし", fls:"りんご"},
    {id:3, name:"岩手県", capital:"盛岡市", religion:"北海道・東北", population:"約121万人", Gdcity:"なし", RCcity:"なし", fls:"わんこそば"},
    {id:4, name:"秋田県", capital:"秋田市", religion:"北海道・東北", population:"約95万人", Gdcity:"なし", RCcity:"なし", fls:"なまはげ"},
    {id:5, name:"宮城県", capital:"仙台市", religion:"北海道・東北", population:"約230万人", Gdcity:"仙台市", RCcity:"仙台市", fls:"牛タン"},
    {id:6, name:"山形県", capital:"山形市", religion:"北海道・東北", population:"約106万人", Gdcity:"なし", RCcity:"なし", fls:"さくらんぼ"},
    {id:7, name:"福島県", capital:"福島市", religion:"北海道・東北", population:"約183万人", Gdcity:"なし", RCcity:"なし", fls:"フルーツ"},

];
let kanto = [
   {id:1, name:"茨城県", capital:"水戸市", religion:"関東", population:"約286万人", Gdcity:"なし", RCcity:"なし", fls:"水戸納豆"},
   {id:2, name:"栃木県", capital:"日光市", religion:"関東", population:"約193万人", Gdcity:"なし", RCcity:"なし", fls:"日光東照宮"},
   {id:3, name:"群馬県", capital:"前橋市", religion:"関東", population:"約193万人", Gdcity:"なし", RCcity:"なし", fls:"富岡製糸場"},
   {id:4, name:"埼玉県", capital:"さいたま市", religion:"関東", population:"約734万人", Gdcity:"さいたま市", RCcity:"なし", fls:"埼玉アリーナ"},
   {id:5, name:"千葉県", capital:"千葉市", religion:"関東", population:"約628万人", Gdcity:"千葉市", RCcity:"なし", fls:"ディズニーランド・ディズニーシー"},
   {id:6, name:"東京都", capital:"東京(新宿)", religion:"関東", population:"約1404万人", Gdcity:"なし", RCcity:"なし", fls:"国会議事堂"},
   {id:7, name:"神奈川県", capital:"横浜市", religion:"関東", population:"約923万人", Gdcity:"横浜市、川崎市、相模原市", RCcity:"なし", fls:"鎌倉"},
];
let tyubu = [
    {id:1, name:"長野県", capital:"長野市", religion:"中部", population:"約204万人", Gdcity:"なし", RCcity:"なし", fls:"松本城"},
    {id:2, name:"岐阜県", capital:"岐阜市", religion:"中部", population:"約197万人", Gdcity:"なし", RCcity:"なし", fls:"白川郷"},
    {id:3, name:"山梨県", capital:"甲府市", religion:"中部", population:"約80万人", Gdcity:"なし", RCcity:"なし", fls:"信玄餅"},
    {id:4, name:"静岡県", capital:"静岡市", religion:"中部", population:"約363万人", Gdcity:"静岡市", RCcity:"なし", fls:"茶"},
    {id:5, name:"愛知県", capital:"名古屋市", religion:"中部", population:"約754万人", Gdcity:"名古屋市", RCcity:"なし", fls:"TOYOTA"},
    {id:6, name:"新潟県", capital:"新潟市", religion:"中部", population:"約220万人", Gdcity:"新潟市、浜松市", RCcity:"なし", fls:"米"},
    {id:7, name:"富山県", capital:"富山市", religion:"中部", population:"約103万人", Gdcity:"なし", RCcity:"なし", fls:"伝統工芸品"},
    {id:8, name:"石川県", capital:"金沢市", religion:"中部", population:"約113万人", Gdcity:"なし", RCcity:"なし", fls:"兼六園"},
    {id:9, name:"福井県", capital:"福井市", religion:"中部", population:"約76万人", Gdcity:"なし", RCcity:"なし", fls:"越前がに"}
];
let kinki = [
  {id:1, name:"滋賀県", capital:"大津市", religion:"近畿", population:"約141万人", Gdcity:"なし", RCcity:"なし", fls:"琵琶湖"},
  {id:2, name:"京都府", capital:"京都市", religion:"近畿", population:"約257万人", Gdcity:"京都市", RCcity:"なし", fls:"神社仏閣"},
  {id:3, name:"三重県", capital:"津市", religion:"近畿", population:"約177万人", Gdcity:"なし", RCcity:"なし", fls:"伊勢神宮"},
  {id:4, name:"和歌山県", capital:"和歌山市", religion:"近畿", population:"約92万人", Gdcity:"なし", RCcity:"なし", fls:"みかん"},
  {id:5, name:"奈良県", capital:"奈良市", religion:"近畿", population:"約132万人", Gdcity:"なし", RCcity:"なし", fls:"シカ"},
  {id:6, name:"大阪府", capital:"大阪市", religion:"近畿", population:"約883万人", Gdcity:"堺市、大阪市", RCcity:"なし", fls:"たこ焼き"},
  {id:7, name:"兵庫県", capital:"神戸市", religion:"近畿", population:"約546万人", Gdcity:"神戸市", RCcity:"なし", fls:"神戸牛"},
];
let sikoku = [
  {id:1, name:"鳥取県", capital:"鳥取市", religion:"中国・四国", population:"約55万人", Gdcity:"なし", RCcity:"なし", fls:"砂丘"},
  {id:2, name:"島根県", capital:"松江市", religion:"中国・四国", population:"約67万人", Gdcity:"なし", RCcity:"なし", fls:"出雲大社"},
  {id:3, name:"岡山県", capital:"岡山市", religion:"中国・四国", population:"約188万人", Gdcity:"岡山市", RCcity:"なし", fls:"白桃"},
  {id:4, name:"広島県", capital:"広島市", religion:"中国・四国", population:"約279万人", Gdcity:"広島市", RCcity:"広島市", fls:"原爆ドーム"},
  {id:5, name:"山口県", capital:"山口市", religion:"中国・四国", population:"約134万人", Gdcity:"なし", RCcity:"なし", fls:"下関温泉"},
  {id:6, name:"愛媛県", capital:"松山市", religion:"中国・四国", population:"約133万人", Gdcity:"なし", RCcity:"なし", fls:"みかん"},
  {id:7, name:"香川県", capital:"高松市", religion:"中国・四国", population:"約95万人", Gdcity:"なし", RCcity:"なし", fls:"讃岐うどん"},
  {id:8, name:"高知県", capital:"高知市", religion:"中国・四国", population:"約69万人", Gdcity:"なし", RCcity:"なし", fls:"カツオのたたき"},
  {id:9, name:"徳島県", capital:"徳島市", religion:"中国・四国", population:"約71万人", Gdcity:"なし", RCcity:"なし", fls:"阿波踊り"}
];
let kyusyu = [
  {id:1, name:"大分県", capital:"大分市", religion:"九州・沖縄", population:"約112万人", Gdcity:"なし", RCcity:"なし", fls:"別府温泉"},
  {id:2, name:"福岡県", capital:"福岡市", religion:"九州・沖縄", population:"約513万人", Gdcity:"福岡市、北九州市", RCcity:"福岡市、北九州市", fls:"博多ラーメン"},
  {id:3, name:"佐賀県", capital:"佐賀市", religion:"九州・沖縄", population:"約81万人", Gdcity:"なし", RCcity:"なし", fls:"吉野ヶ里遺跡"},
  {id:4, name:"長崎県", capital:"長崎市", religion:"九州・沖縄", population:"約131万人", Gdcity:"なし", RCcity:"なし", fls:"ハウステンボス"},
  {id:5, name:"熊本県", capital:"熊本市", religion:"九州・沖縄", population:"約173万人", Gdcity:"熊本市", RCcity:"なし", fls:"熊本城"},
  {id:6, name:"宮崎県", capital:"宮崎市", religion:"九州・沖縄", population:"約106万人", Gdcity:"なし", RCcity:"なし", fls:"宮崎牛"},
  {id:7, name:"鹿児島県", capital:"鹿児島市", religion:"九州・沖縄", population:"約158万人", Gdcity:"なし", RCcity:"なし", fls:"屋久島"},
  {id:8, name:"沖縄県", capital:"那覇市", religion:"九州・沖縄", population:"約146万人", Gdcity:"なし", RCcity:"なし", fls:"美ら海水族館"}
];

app.get("/religion/0/tohoku/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = tohoku[index];
  res.render('tohoku_add', { data: Data }); 
});

app.get("/religion/1/kanto/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = kanto[index];
  res.render('kanto_add', { data: Data }); 
});

app.get("/religion/2/tyubu/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = tyubu[index];
  res.render('tyubu_add', { data: Data }); 
});

app.get("/religion/3/kinki/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = kinki[index];
  res.render('kinki_add', { data: Data }); 
});

app.get("/religion/4/sikoku/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = sikoku[index];
  res.render('sikoku_add', { data: Data }); 
});

app.get("/religion/5/kyusyu/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = kyusyu[index];
  res.render('kyusyu_add', { data: Data }); 
});

//詳細表示
app.get("/religion/0/tohoku/:number", (req, res) => {
  const sql = "SELECT * FROM tohoku";
  const number = req.params.number;
  const detail = tohoku[ number - 1 ];
  res.render('tohoku_detail', {id: number, data: detail} );
});
app.get("/religion/1/kanto/:number", (req, res) => {
  const sql = "SELECT * FROM kanto";
  const number = req.params.number;
  const detail = kanto[ number - 1 ];
  res.render('kanto_detail', {id: number, data: detail} );
});
app.get("/religion/2/tyubu/:number", (req, res) => {
  const sql = "SELECT * FROM tyubu";
  const number = req.params.number;
  const detail = tyubu[ number - 1 ];
  res.render('tyubu_detail', {id: number, data: detail} );
});

app.get("/religion/3/kinki/:number", (req, res) => {
  const sql = "SELECT * FROM kinki";
  const number = req.params.number;
  const detail = kinki[ number - 1 ];
  res.render('kinki_detail', {id: number, data: detail} );
});

app.get("/religion/4/sikoku/:number", (req, res) => {
  const sql = "SELECT * FROM sikoku";
  const number = req.params.number;
  const detail = sikoku[ number - 1 ];
  res.render('sikoku_detail', {id: number, data: detail} );
});

app.get("/religion/5/kyusyu/:number", (req, res) => {
  const sql = "SELECT * FROM kyusyu";
  const number = req.params.number;
  const detail = kyusyu[ number - 1];
  res.render('kyusyu_detail', {id: number, data: detail} );
});
//Create
app.post("/religion/0/tohoku/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = tohoku[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/religion/0/tohoku/' + number);
});

app.post("/religion/1/kanto/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = kanto[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/religion/1/kanto/' + number);
});
app.post("/religion/2/tyubu/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = tyubu[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/religion/2/tyubu/' + number);
});

app.post("/religion/3/kinki/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = kinki[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/religion/3/kinki/' + number);
});

app.post("/religion/4/sikoku/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = sikoku[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/religion/4/sikoku/' + number);
});

app.post("/religion/5/kyusyu/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = kyusyu[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/religion/5/kyusyu/' + number);
});

//Edit
app.get("/religion/0/tohoku/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = tohoku[ number - 1];
  res.render('tohoku_edit', {id: number, data: detail} );
});

app.post("/religion/0/tohoku/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = tohoku[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/religion/0/tohoku/' + number);
});

app.get("/religion/1/kanto/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = kanto[ number - 1];
  res.render('kanto_edit', {id: number, data: detail} );
});

app.post("/religion/1/kanto/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = kanto[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/religion/1/kanto/' + number);
});

app.get("/religion/2/tyubu/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = tyubu[ number - 1];
  res.render('tyubu_edit', {id: number, data: detail} );
});

app.post("/religion/2/tyubu/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = tyubu[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/religion/2/tyubu/' + number);
});

app.get("/religion/3/kinki/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = kinki[ number - 1];
  res.render('kinki_edit', {id: number, data: detail} );
});

app.post("/religion/3/kinki/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = kinki[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/religion/3/kinki/' + number);
});

app.get("/religion/4/sikoku/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = sikoku[ number - 1];
  res.render('sikoku_edit', {id: number, data: detail} );
});

app.post("/religion/4/sikoku/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = sikoku[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/religion/4/sikoku/' + number);
});

app.get("/religion/5/kyusyu/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = kyusyu[ number - 1];
  res.render('kyusyu_edit', {id: number, data: detail} );
});

app.post("/religion/5/kyusyu/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = kyusyu[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/religion/5/kyusyu/' + number);
});
//Delete
app.get("/religion/0/tohoku/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = tohoku[index];
  res.render('tohoku_delete',{id: number, data: Data});
});

app.post("/religion/0/tohoku/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = tohoku.find((t) => String(t.id) === id);

    // データが見つからなかった場合のエラー処理
    if (!target) {
        return res.send("データが見つかりません");
    }

    // 2. チェックボックスの処理
    // 何もチェックされずに送信された場合は items が undefined になるのでガードします
    if (items) {
        
        // 1個しかチェックされていないと「文字」で届くので、「配列」に変換して統一します
        if (!Array.isArray(items)) {
            items = [items];
        }

        // 3. 削除実行（空文字で上書き）
        items.forEach((key) => {
            // key には "capital" や "population" が入っています
            // target["capital"] = "-" のように書き換わります
            target[key] = ""; // 空白にしたければ "" にしてください
        });
    }
    res.redirect('/religion/0/tohoku/' + id );
});

app.get("/religion/1/kanto/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = kanto[index];
  res.render('kanto_delete',{id: number, data: Data});
});

app.post("/religion/1/kanto/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = kanto.find((t) => String(t.id) === id);

    // データが見つからなかった場合のエラー処理
    if (!target) {
        return res.send("データが見つかりません");
    }

    // 2. チェックボックスの処理
    // 何もチェックされずに送信された場合は items が undefined になるのでガードします
    if (items) {
        
        // 1個しかチェックされていないと「文字」で届くので、「配列」に変換して統一します
        if (!Array.isArray(items)) {
            items = [items];
        }

        // 3. 削除実行（空文字で上書き）
        items.forEach((key) => {
            // key には "capital" や "population" が入っています
            // target["capital"] = "-" のように書き換わります
            target[key] = ""; // 空白にしたければ "" にしてください
        });
    }
    res.redirect('/religion/1/kanto/' + id );
});

app.get("/religion/2/tyubu/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = tyubu[index];
  res.render('tyubu_delete',{id: number, data: Data});
});

app.post("/religion/2/tyubu/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = tyubu.find((t) => String(t.id) === id);

    // データが見つからなかった場合のエラー処理
    if (!target) {
        return res.send("データが見つかりません");
    }

    // 2. チェックボックスの処理
    // 何もチェックされずに送信された場合は items が undefined になるのでガードします
    if (items) {
        
        // 1個しかチェックされていないと「文字」で届くので、「配列」に変換して統一します
        if (!Array.isArray(items)) {
            items = [items];
        }

        // 3. 削除実行（空文字で上書き）
        items.forEach((key) => {
            // key には "capital" や "population" が入っています
            // target["capital"] = "-" のように書き換わります
            target[key] = ""; // 空白にしたければ "" にしてください
        });
    }
    res.redirect('/religion/2/tyubu/' + id );
});

app.get("/religion/3/kinki/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = kinki[index];
  res.render('kinki_delete',{id: number, data: Data});
});

app.post("/religion/3/kinki/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = kinki.find((t) => String(t.id) === id);

    // データが見つからなかった場合のエラー処理
    if (!target) {
        return res.send("データが見つかりません");
    }

    // 2. チェックボックスの処理
    // 何もチェックされずに送信された場合は items が undefined になるのでガードします
    if (items) {
        
        // 1個しかチェックされていないと「文字」で届くので、「配列」に変換して統一します
        if (!Array.isArray(items)) {
            items = [items];
        }

        // 3. 削除実行（空文字で上書き）
        items.forEach((key) => {
            // key には "capital" や "population" が入っています
            // target["capital"] = "-" のように書き換わります
            target[key] = ""; // 空白にしたければ "" にしてください
        });
    }
    res.redirect('/religion/3/kinki/' + id );
});

app.get("/religion/4/sikoku/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = sikoku[index];
  res.render('sikoku_delete',{id: number, data: Data});
});

app.post("/religion/4/sikoku/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = sikoku.find((t) => String(t.id) === id);

    // データが見つからなかった場合のエラー処理
    if (!target) {
        return res.send("データが見つかりません");
    }

    // 2. チェックボックスの処理
    // 何もチェックされずに送信された場合は items が undefined になるのでガードします
    if (items) {
        
        // 1個しかチェックされていないと「文字」で届くので、「配列」に変換して統一します
        if (!Array.isArray(items)) {
            items = [items];
        }

        // 3. 削除実行（空文字で上書き）
        items.forEach((key) => {
            // key には "capital" や "population" が入っています
            // target["capital"] = "-" のように書き換わります
            target[key] = ""; // 空白にしたければ "" にしてください
        });
    }
    res.redirect('/religion/4/sikoku/' + id );
});

app.get("/religion/5/kyusyu/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = kyusyu[index];
  res.render('kyusyu_delete',{id: number, data: Data});
});

app.post("/religion/5/kyusyu/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = kyusyu.find((t) => String(t.id) === id);

    // データが見つからなかった場合のエラー処理
    if (!target) {
        return res.send("データが見つかりません");
    }

    // 2. チェックボックスの処理
    // 何もチェックされずに送信された場合は items が undefined になるのでガードします
    if (items) {
        
        // 1個しかチェックされていないと「文字」で届くので、「配列」に変換して統一します
        if (!Array.isArray(items)) {
            items = [items];
        }

        // 3. 削除実行（空文字で上書き）
        items.forEach((key) => {
            // key には "capital" や "population" が入っています
            // target["capital"] = "-" のように書き換わります
            target[key] = ""; // 空白にしたければ "" にしてください
        });
    }
    res.redirect('/religion/5/kyusyu/' + id );
});





app.listen(8080, () => console.log("Example app listening on port 8080!"));
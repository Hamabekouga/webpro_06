"use strict";
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.get("/kinds", (req, res) => {
let kinds =[
    {num:1, kinds:"新習志野キャンパス"},
    {num:2, kinds:"津田沼キャンパス"},
    {num:3, kinds:"東京スカイツリータウンキャンパス"},

]
  res.render('kinds', {data: kinds} );
});
app.get("/kinds/0", (req, res) => {
let building = [
    {id:1, name:"1号館"},
    {id:2, name:"2号館"},
    {id:3, name:"3号館"},
    {id:4, name:"5号館"},
    {id:5, name:"6号館"},
    {id:6, name:"7号館"},
    {id:7, name:"8号館"},
    {id:8, name:"9号館"},
    {id:9, name:"10号館"},
    {id:10, name:"11号館"},
    {id:11, name:"12号館"},
    {id:12, name:"食堂棟"},
    {id:13, name:"体育館"}

]; 
  res.render('sinnarasino', {data: building} );
});
app.get("/kinds/1", (req, res) => {
let building = [
    {id:1, name:"1号館"},
    {id:2, name:"2号館"},
    {id:3, name:"3号館"},
    {id:4, name:"4号館"},
    {id:5, name:"5号館"},
    {id:6, name:"6号館"},
    {id:7, name:"7号館"},
    {id:8, name:"8号館"}

]; 
  res.render('tudanuma', {data: building} );
});

app.get("/kinds/2", (req, res) => {
let building = [
    {id:1, name:"Area I"},
    {id:2, name:"Area II"}

];
  res.render('skytree', {data: building} );
});

let sinnarasino = [
    {id:1, name:"1号館", place:"正門入ってすぐ左手", feat:"教室が大きい", struct:"1階建て", nota:"1101, 1102など"},
    {id:2, name:"2号館", place:"1号館の後ろ", feat:"調査中", struct:"9階建て", nota:"2101, 2201など"},
    {id:3, name:"3号館", place:"2号館を囲む形", feat:"人文・自然系の実験室あり", struct:"3階建て", nota:"3101, 3102など"},
    {id:4, name:"5号館", place:"キャンパス中央やや右寄り", feat:"講義棟", struct:"3階建て", nota:"5101, 5201など"},
    {id:5, name:"6号館", place:"キャンパス中央下", feat:"図書館がある", struct:"2階建て", nota:"図書館、自学自習室"},
    {id:6, name:"7号館", place:"キャンパス中央上", feat:"ガラス張り", struct:"2階建て", nota:"7101, 7202など"},
    {id:7, name:"8号館", place:"キャンパス中央やや右上", feat:"コンピュータ演習室", struct:"2階建て", nota:"8104, 8109など"},
    {id:8, name:"9号館", place:"キャンパス中央", feat:"ロボット開発", struct:"2階建て", nota:"調査中"},
    {id:9, name:"10号館", place:"キャンパス中央上", feat:"学生サポートセンター", struct:"調査中", nota:"調査中"},
    {id:10, name:"11号館", place:"キャンパス中央やや右下", feat:"工作室、演習室", struct:"3階建て", nota:"調査中"},
    {id:11, name:"12号館", place:"正門入ってすぐ前方", feat:"教学センター", struct:"調査中", nota:"1階教学センターなど"},
    {id:12, name:"食堂棟", place:"キャンパス右上", feat:"1,2階共に食堂", struct:"3階建て", nota:"食堂棟3階講義室1など"},
    {id:13, name:"体育館", place:"キャンパス中央やや左", feat:"トレーニングルーム", struct:"調査中", nota:"調査中"}

]; 

let tudanuma = [
    {id:1, name:"1号館", place:"正門入って右前方", feat:"ソーラーパネル", struct:"調査中", nota:"調査中"},
    {id:2, name:"2号館", place:"キャンパス中央やや右下", feat:"開放型施設", struct:"調査中", nota:"調査中"},
    {id:3, name:"3号館", place:"キャンパス中央上", feat:"食堂", struct:"2階建て", nota:"調査中"},
    {id:4, name:"4号館", place:"キャンパス右上", feat:"2012年にリニューアル", struct:"9階建て", nota:"調査中"},
    {id:5, name:"5号館", place:"正門入って左手", feat:"図書館", struct:"", nota:"調査中"},
    {id:6, name:"6号館", place:"キャンパス中央下", feat:"講義棟", struct:"5階建て", nota:"613, 621など"},
    {id:7, name:"7号館", place:"キャンパス中央やや左上", feat:"コンピュータ多い", struct:"8階建て", nota:"721など"},
    {id:8, name:"8号館", place:"キャンパス右下", feat:"最先端研究施設", struct:"調査中", nota:"調査中"}

]; 

let skytree = [
    {id:1, name:"Area I", place:"東京スカイツリー8階", feat:"ロボット", struct:"-", time:"10:30〜18:00(12/29〜1/1のみ11:00〜17:00)"},
    {id:2, name:"Area II", place:"東京スカイツリー8階", feat:"宇宙系の展示物", struct:"-", time:"10:30〜18:00(12/29〜1/1のみ11:00〜17:00)"}

];



//Create
app.get("/kinds/0/sinnarasino/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = sinnarasino[index];
  res.render('sinnarasino_add', { data: Data }); 
});

app.get("/kinds/1/tudanuma/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = tudanuma[index];
  res.render('tudanuma_add', { data: Data }); 
});

app.get("/kinds/2/skytree/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = skytree[index];
  res.render('skytree_add', { data: Data }); 
});



//詳細表示
app.get("/kinds/0/sinnarasino/:number", (req, res) => {
  const sql = "SELECT * FROM sinnarasino";
  const number = req.params.number;
  const detail = sinnarasino[ number - 1 ];
  res.render('sinnarasino_detail', {id: number, data: detail} );
});
app.get("/kinds/1/tudanuma/:number", (req, res) => {
  const sql = "SELECT * FROM tudanuma";
  const number = req.params.number;
  const detail = tudanuma[ number - 1 ];
  res.render('tudanuma_detail', {id: number, data: detail} );
});
app.get("/kinds/2/skytree/:number", (req, res) => {
  const sql = "SELECT * FROM skytree";
  const number = req.params.number;
  const detail = skytree[ number - 1 ];
  res.render('skytree_detail', {id: number, data: detail} );
});

//Create
app.post("/kinds/0/sinnarasino/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = sinnarasino[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/kinds/0/sinnarasino/' + number);
});

app.post("/kinds/1/tudanuma/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = tudanuma[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/kinds/1/tudanuma/' + number);
});

app.post("/kinds/2/skytree/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = skytree[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/kinds/2/skytree/' + number);
});


//Edit
app.get("/kinds/0/sinnarasino/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = sinnarasino[ number - 1];
  res.render('sinnarasino_edit', {id: number, data: detail} );
});

app.post("/kinds/0/sinnarasino/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = sinnarasino[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/kinds/0/sinnarasino/' + number);
});

app.get("/kinds/1/tudanuma/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = tudanuma[ number - 1];
  res.render('tudanuma_edit', {id: number, data: detail} );
});

app.post("/kinds/1/tudanuma/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = tudanuma[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/kinds/1/tudanuma/' + number);
});

app.get("/kinds/2/skytree/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = skytree[ number - 1];
  res.render('skytree_edit', {id: number, data: detail} );
});

app.post("/kinds/2/skytree/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = skytree[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/kinds/2/skytree/' + number);
});

//Delete
app.get("/kinds/0/sinnarasino/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = sinnarasino[index];
  res.render('sinnarasino_delete',{id: number, data: Data});
});

app.post("/kinds/0/sinnarasino/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = sinnarasino.find((t) => String(t.id) === id);

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
    res.redirect('/kinds/0/sinnarasino/' + id );
});

app.get("/kinds/1/tudanuma/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = tudanuma[index];
  res.render('tudanuma_delete',{id: number, data: Data});
});

app.post("/kinds/1/tudanuma/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = tudanuma.find((t) => String(t.id) === id);

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
    res.redirect('/kinds/1/tudanuma/' + id );
});

app.get("/kinds/2/skytree/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = skytree[index];
  res.render('skytree_delete',{id: number, data: Data});
});

app.post("/kinds/2/skytree/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = skytree.find((t) => String(t.id) === id);

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
    res.redirect('/kinds/2/skytree/' + id );
});



app.listen(8080, () => console.log("Example app listening on port 8080!"));
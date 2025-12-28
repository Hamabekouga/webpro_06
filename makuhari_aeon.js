"use strict";
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.get("/mall", (req, res) => {
let mall =[
    {num:1, mall:"GRAND MALL"},
    {num:2, mall:"PET MALL"},
    {num:3, mall:"EKIMAE MALL"},
    {num:4, mall:"ACTIVE MALL"}

];
  res.render('mall', {data: mall} );
});
app.get("/mall/0", (req, res) => {
let building = [
    {id:1, name:"1階"},
    {id:2, name:"2階"},
    {id:3, name:"3階"}

]; 
  res.render('grand', {data: building} );
});
app.get("/mall/1", (req, res) => {
let building = [
    {id:1, name:"1階"},
    {id:2, name:"2階"},
    {id:3, name:"3階"}

]; 
  res.render('pet', {data: building} );
});

app.get("/mall/2", (req, res) => {
let building = [
    {id:1, name:"1階"},
    {id:2, name:"2階"},
    {id:3, name:"3階"}

];
  res.render('ekimae', {data: building} );
});

app.get("/mall/3", (req, res) => {
let building = [
    {id:1, name:"1階"},
    {id:2, name:"2階"},
    {id:3, name:"3階"}

];
  res.render('active', {data: building} );
});

let EKIMAE = [
    {id:1, name:"1階", pet:"できない", parking:"立体駐車場あり", shopjenre:"様々(グッズ系の店多め)", examshop:"DAISO、無印良品、Zoffなど"},
    {id:2, name:"2階", pet:"できない", parking:"立体駐車場あり", shopjenre:"様々(グッズ、ファッション系の店多め)", examshop:"ONWARD CROSSET SELECT、KIDS REPUBLIC、未来屋書店など"},
    {id:3, name:"3階", pet:"できない", parking:"立体駐車場あり", shopjenre:"グルメ、アミューズメント系の店多め", examshop:"スカイパーク、スペースアスレチックトンデミ、サイゼリヤ、幸楽苑など"}

]; 

let PET = [
    {id:1, name:"1階", pet:"できる", parking:"立体駐車場あり", shopjenre:"ペット関連の店多め", examshop:"PETEMO、ドトールコーヒーペットカフェ、屋外ドッグランなど" },
    {id:2, name:"2階", pet:"できる", parking:"立体駐車場あり", shopjenre:"ペット関連の店多め", examshop:"NECOMO、ペットパラダイスなど" },
    {id:3, name:"3階", pet:"できる", parking:"立体駐車場あり", shopjenre:"卓球", examshop:"PING PONG PARK(10:00〜21:00)"}

]; 

let GRAND = [
    {id:1, name:"1階", pet:"一部エリアのみ可能", parking:"立体駐車場あり", shopjenre:"様々", examshop:"蔦屋書店、島村楽器、ミスタードーナツ、総合クリニックなど"   },
    {id:2, name:"2階", pet:"できない", parking:"立体駐車場あり", shopjenre:"様々(ファッション多め)", examshop:"ユニクロ、H＆M、GUなど"    },
    {id:3, name:"3階", pet:"できない", parking:"立体駐車場あり", shopjenre:"様々(アミューズメント多め)", examshop:"イオンシネマ、よしもと幕張イオンモール劇場、namco、ムラサキスポーツなど"    },
    {id:4, name:"4階", pet:"できない", parking:"立体駐車場あり", shopjenre:"景色系", examshop:"グランドテラス、Prayer Roomなど"    }

];

let ACTIVE = [
    {id:1, name:"1階", pet:"できない", parking:"平面駐車場・立体駐車場あり", shopjenre:"グッズ・サービス", examshop:"イオンバイク、ちきゅうのにわなど"    },
    {id:2, name:"2階", pet:"できない", parking:"立体駐車場あり", shopjenre:"グッズ・スポーツ", examshop:"ノジマ、メガスポーツ、CNSなど"    },
    {id:3, name:"3階", pet:"できない", parking:"立体駐車場あり", shopjenre:"アミューズメント", examshop:"フットボールパーク、インドアテニススクール、メガスポーツなど"    }
];



//Create
app.get("/mall/0/GRAND/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = GRAND[index];
  res.render('grand_add', { data: Data }); 
});

app.get("/mall/1/PET/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = PET[index];
  res.render('pet_add', { data: Data }); 
});

app.get("/mall/2/EKIMAE/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = EKIMAE[index];
  res.render('ekimae_add', { data: Data }); 
});
app.get("/mall/3/ACTIVE/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = ACTIVE[index];
  res.render('active_add', { data: Data }); 
});

//詳細表示
app.get("/mall/0/GRAND/:number", (req, res) => {
  const sql = "SELECT * FROM GRAND";
  const number = req.params.number;
  const detail = GRAND[ number - 1 ];
  res.render('grand_detail', {id: number, data: detail} );
});
app.get("/mall/1/PET/:number", (req, res) => {
  const sql = "SELECT * FROM PET";
  const number = req.params.number;
  const detail = PET[ number - 1 ];
  res.render('pet_detail', {id: number, data: detail} );
});
app.get("/mall/2/EKIMAE/:number", (req, res) => {
  const sql = "SELECT * FROM EKIMAE";
  const number = req.params.number;
  const detail = EKIMAE[ number - 1 ];
  res.render('ekimae_detail', {id: number, data: detail} );
});
app.get("/mall/3/ACTIVE/:number", (req, res) => {
  const sql = "SELECT * FROM ACTIVE";
  const number = req.params.number;
  const detail = ACTIVE[ number - 1 ];
  res.render('active_detail', {id: number, data: detail} );
});

//Create
app.post("/mall/0/GRAND/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = GRAND[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/mall/0/GRAND/' + number);
});

app.post("/mall/1/PET/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = PET[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/mall/1/PET/' + number);
});

app.post("/mall/2/EKIMAE/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = EKIMAE[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/mall/2/EKIMAE/' + number);
});

app.post("/mall/3/ACTIVE/create/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1
  let Data = ACTIVE[index];
  const newthing = req.body.newthing;
  const newvalue = req.body.newvalue;
  Data[newthing] = newvalue;
  console.log( Data );
  res.redirect('/mall/3/ACTIVE/' + number);
});


//Edit
app.get("/mall/0/GRAND/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = GRAND[ number - 1];
  res.render('grand_edit', {id: number, data: detail} );
});

app.post("/mall/0/GRAND/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = GRAND[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/mall/0/GRAND/' + number);
});

app.get("/mall/1/PET/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = PET[ number - 1];
  res.render('pet_edit', {id: number, data: detail} );
});

app.post("/mall/1/PET/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = PET[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/mall/1/PET/' + number);
});

app.get("/mall/2/EKIMAE/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = EKIMAE[ number - 1];
  res.render('ekimae_edit', {id: number, data: detail} );
});

app.post("/mall/2/EKIMAE/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = EKIMAE[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/mall/2/EKIMAE/' + number);
});

app.get("/mall/3/ACTIVE/edit/:number", (req, res) => {

  const number = req.params.number;
  const detail = ACTIVE[ number - 1];
  res.render('active_edit', {id: number, data: detail} );
});

app.post("/mall/3/ACTIVE/update/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  let Data = ACTIVE[index];
  Object.keys(req.body).forEach(function(key) {
        
        if (key !== 'newthing' && key !== 'newvalue' && key !== 'id') {
            
            Data[key] = req.body[key];
        }

    });
  console.log( Data );
  res.redirect('/mall/3/ACTIVE/' + number);
});

//Delete
app.get("/mall/0/GRAND/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = GRAND[index];
  res.render('grand_delete',{id: number, data: Data});
});

app.post("/mall/0/GRAND/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = GRAND.find((t) => String(t.id) === id);

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
            target[key] = ""; 
        });
    }
    res.redirect('/mall/0/GRAND/' + id );
});

app.get("/mall/1/PET/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = PET[index];
  res.render('pet_delete',{id: number, data: Data});
});

app.post("/mall/1/PET/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = PET.find((t) => String(t.id) === id);

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
            target[key] = ""; 
        });
    }
    res.redirect('/mall/1/PET/' + id );
});

app.get("/mall/2/EKIMAE/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = EKIMAE[index];
  res.render('ekimae_delete',{id: number, data: Data});
});

app.post("/mall/2/EKIMAE/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = EKIMAE.find((t) => String(t.id) === id);

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
            target[key] = ""; 
        });
    }
    res.redirect('/mall/2/EKIMAE/' + id );
});

app.get("/mall/3/ACTIVE/delete/:number", (req, res) => {
  const number = req.params.number;
  const index = number - 1;
  const Data = ACTIVE[index];
  res.render('active_delete',{id: number, data: Data});
});

app.post("/mall/3/ACTIVE/delete/:id", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const id = req.params.id;
  let items = req.body.deletething;

  const target = ACTIVE.find((t) => String(t.id) === id);

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
            target[key] = ""; 
        });
    }
    res.redirect('/mall/3/ACTIVE/' + id );
});



app.listen(8080, () => console.log("Example app listening on port 8080!"));
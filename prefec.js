const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
let prefecture =[
    {name:北海道, capital:札幌市, religion:北海道・東北, population:約522万人, Gdcity:札幌市, RCcity:札幌市, fls:},
    {name:青森県, capital:青森市, religion:北海道・東北, population:約123万人, Gdcity:なし, RCcity:なし},
    {name:岩手県, capital:盛岡市, religion:北海道・東北, population:, Gdcity:, RCcity:},
    {name:秋田県, capital:, religion:, population:, Gdcity:, RCcity:},
]















app.listen(8080, () => console.log("Example app listening on port 8080!"));
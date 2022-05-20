//第一排

let mainmeal = document.getElementById('mainmeal');
let NUM1 = document.getElementById('NUM1');
let pria = document.getElementById('pria');
let costa = document.getElementById('costa');
// let tobtn = document.getElementById('tobtn');

mainmeal.onchange = function () {
    myMainmeal()
    myTotal() 
};

NUM1.onkeyup = function() {
    myMainmeal()
    myTotal()
};

function myMainmeal() {
    let option = mainmeal.value;
    switch (option) {
        case "豬排堡":
            mystring = 70;
            result = mystring * parseInt(NUM1.value);
            break;
        case "香雞堡":
            mystring = 75;
            result = mystring * parseInt(NUM1.value);
            break;
        case "炒泡麵":
            mystring = 80;
            result = mystring * parseInt(NUM1.value);
            break;
        case "雞腿堡":
            mystring = 85;
            result = mystring * parseInt(NUM1.value);
            break;
        case "番茄義大利麵":
            mystring = 90;
            result = mystring * parseInt(NUM1.value);
            break;
        case "白醬義大利麵":
            mystring = 100;
            result = mystring * parseInt(NUM1.value);
            break;
        case "青醬義大利麵":
            mystring = 110;
            result = mystring * parseInt(NUM1.value);
            break;
        case "潛艇堡":
            mystring = 90;
            result = mystring * parseInt(NUM1.value);
            break;
        case "大熱狗":
            mystring = 80;
            result = mystring * parseInt(NUM1.value);
            break;
        default:
            mystring = 0;
            result = mystring * parseInt(NUM1.value);
            break;
    }
    if (isNaN(result)) { result = 0; }
    pria.innerText = mystring +" 元";
    costa.innerText = result +" 元";
    return result;
}

// tobtn.addEventListener('click', function (e) {
//     e.preventDefault(); //submit不送出資料
//     let option = mainmeal.value;
//     console.log(mainmeal.value);
//     switch (option) {
//         case "豬排堡":
//             mystring = 70;
//             result = mystring * parseInt(NUM1.value);
//             break;
//         case "香雞堡":
//             mystring = 75;
//             result = mystring * parseInt(NUM1.value);
//             break;
//         case "炒泡麵":
//             mystring = 80;
//             result = mystring * parseInt(NUM1.value);
//             break;
//         case "雞腿堡":
//             mystring = 85;
//             result = mystring * parseInt(NUM1.value);
//             break;
//         case "番茄義大利麵":
//             mystring = 90;
//             result = mystring * parseInt(NUM1.value);
//             break;
//         case "白醬義大利麵":
//             mystring = 100;
//             result = mystring * parseInt(NUM1.value);
//             break;
//         case "青醬義大利麵":
//             mystring = 110;
//             result = mystring * parseInt(NUM1.value);
//             break;
//         case "潛艇堡":
//             mystring = 90;
//             result = mystring * parseInt(NUM1.value);
//             break;
//         case "大熱狗":
//             mystring = 80;
//             result = mystring * parseInt(NUM1.value);
//             break;
//         default:
//             break;
//     }
//     pria.innerText = mystring + " 元";

//     costa.innerText = result + " 元";
// });

//第一排結束

//第二排

let sidemeal = document.getElementById('sidemeal');
let NUM2 = document.getElementById('NUM2');
let prib = document.getElementById('prib');
let costb = document.getElementById('costb');

sidemeal.onchange = function () {
    mySidemeal()
    myTotal()
};

NUM2.onkeyup = function() {
    mySidemeal()
    myTotal()
};

function mySidemeal() {
    let option = sidemeal.value;
    switch (option) {
        case "薯條":
            mystring2 = 35;
            result2 = mystring2 * parseInt(NUM2.value);
            break;
        case "雞塊":
            mystring2 = 40;
            result2 = mystring2 * parseInt(NUM2.value);
            break;
        case "薯餅":
            mystring2 = 40;
            result2 = mystring2 * parseInt(NUM2.value);
            break;
        case "地瓜條":
            mystring2 = 40;
            result2 = mystring2 * parseInt(NUM2.value);
            break;
        case "沙拉":
            mystring2 = 50;
            result2 = mystring2 * parseInt(NUM2.value);
            break;
        case "玉米濃湯":
            mystring2 = 50;
            result2 = mystring2 * parseInt(NUM2.value);
            break;
        case "味噌湯":
            mystring2 = 40;
            result2 = mystring2 * parseInt(NUM2.value);
            break;
        case "魚丸湯":
            mystring2 = 35;
            result2 = mystring2 * parseInt(NUM2.value);
            break;
        case "酸辣湯":
            mystring2 = 35;
            result2 = mystring2 * parseInt(NUM2.value);
            break;
        default:
            mystring2 = 0;
            result2 = mystring2 * parseInt(NUM2.value);
            break;
    }
    if (isNaN(result2)) { result2 = 0; }
    prib.innerText = mystring2 +" 元";
    costb.innerText = result2 +" 元";
}
// tobtn.addEventListener('click', function (e) {
//     e.preventDefault(); //submit不送出資料
//     let option2 = sidemeal.value;
//     console.log(sidemeal.value);
//     switch (option2) {
//         case "薯條":
//             mystring2 = 35;
//             result2 = mystring2 * parseInt(NUM2.value);
//             break;
//         case "雞塊":
//             mystring2 = 40;
//             result2 = mystring2 * parseInt(NUM2.value);
//             break;
//         case "薯餅":
//             mystring2 = 40;
//             result2 = mystring2 * parseInt(NUM2.value);
//             break;
//         case "地瓜條":
//             mystring2 = 40;
//             result2 = mystring2 * parseInt(NUM2.value);
//             break;
//         case "沙拉":
//             mystring2 = 50;
//             result2 = mystring2 * parseInt(NUM2.value);
//             break;
//         case "玉米濃湯":
//             mystring2 = 50;
//             result2 = mystring2 * parseInt(NUM2.value);
//             break;
//         case "味噌湯":
//             mystring2 = 40;
//             result2 = mystring2 * parseInt(NUM2.value);
//             break;
//         case "魚丸湯":
//             mystring2 = 35;
//             result2 = mystring2 * parseInt(NUM2.value);
//             break;
//         case "酸辣湯":
//             mystring2 = 35;
//             result2 = mystring2 * parseInt(NUM2.value);
//             break;
//         default:
//             break;
//     }
//     prib.innerText = mystring2 + " 元";
//     costb.innerText = result2 + " 元";
// });


//第二排結束

//第三排
let drink = document.getElementById('drink');
let NUM3 = document.getElementById('NUM3');
let pric = document.getElementById('pric');
let costc = document.getElementById('costc');


drink.onchange = function () {
    myDrink()
    myTotal()
};

NUM3.onkeyup = function() {
    myDrink()
    myTotal()
};

function myDrink() {
    let option = drink.value;
    switch (option) {
        case "冬瓜茶":
            mystring3 = 25;
            result3 = mystring3 * parseInt(NUM3.value);
            break;
        case "西米露":
            mystring3 = 40;
            result3 = mystring3 * parseInt(NUM3.value);
            break;
        case "奶茶":
            mystring3 = 35;
            result3 = mystring3 * parseInt(NUM3.value);
            break;
        case "鮮奶茶":
            mystring3 = 40;
            result3 = mystring3 * parseInt(NUM3.value);
            break;
        case "麥仔茶":
            mystring3 = 20;
            result3 = mystring3 * parseInt(NUM3.value);
            break;
        case "紅茶":
            mystring3 = 25;
            result3 = mystring3 * parseInt(NUM3.value);
            break;
        case "綠茶":
            mystring3 = 30;
            result3 = mystring3 * parseInt(NUM3.value);
            break;
        case "可樂":
            mystring3 = 30;
            result3 = mystring3 * parseInt(NUM3.value);
            break;
        case "仙草茶":
            mystring3 = 25;
            result3 = mystring3 * parseInt(NUM3.value);
            break;
        default:
            mystring3 = 0;
            result3 = mystring3 * parseInt(NUM3.value);
            break;
    }
    if (isNaN(result3)) { result3 = 0; }
    pric.innerText = mystring3 +" 元";
    costc.innerText = result3 +" 元";
}

// tobtn.addEventListener('click', function (e) {
//     e.preventDefault(); //submit不送出資料
//     let option3 = drink.value;
//     console.log(drink.value);
//     switch (option3) {
//         case "冬瓜茶":
//             mystring3 = 25;
//             result3 = mystring3 * parseInt(NUM3.value);
//             break;
//         case "西米露":
//             mystring3 = 40;
//             result3 = mystring3 * parseInt(NUM3.value);
//             break;
//         case "奶茶":
//             mystring3 = 35;
//             result3 = mystring3 * parseInt(NUM3.value);
//             break;
//         case "鮮奶茶":
//             mystring3 = 40;
//             result3 = mystring3 * parseInt(NUM3.value);
//             break;
//         case "麥仔茶":
//             mystring3 = 20;
//             result3 = mystring3 * parseInt(NUM3.value);
//             break;
//         case "紅茶":
//             mystring3 = 25;
//             result3 = mystring3 * parseInt(NUM3.value);
//             break;
//         case "綠茶":
//             mystring3 = 30;
//             result3 = mystring3 * parseInt(NUM3.value);
//             break;
//         case "可樂":
//             mystring3 = 30;
//             result3 = mystring3 * parseInt(NUM3.value);
//             break;
//         case "仙草茶":
//             mystring3 = 25;
//             result3 = mystring3 * parseInt(NUM3.value);
//             break;
//         default:
//             break;
//     }
//     pric.innerText = mystring3 + " 元";
//     costc.innerText = result3 + " 元";
// });
//第三排結束

//第四排

let dessert = document.getElementById('dessert');
let NUM4 = document.getElementById('NUM4');
// let pric = document.getElementById('pric');
let prid = document.getElementById('prid');
let costd = document.getElementById('costd');


dessert.onchange = function () {
    myDessert()
    myTotal()
};

NUM4.onkeyup = function() {
    myDessert()
    myTotal()
};

function myDessert() {
    let option = dessert.value;
    switch (option) {
        case "起司蛋糕片":
            mystring4 = 50;
            result4 = mystring4 * parseInt(NUM4.value);
            break;
        case "黑森林蛋糕片":
            mystring4 = 60;
            result4 = mystring4 * parseInt(NUM4.value);
            break;
        case "抹茶蛋糕片":
            mystring4 = 70;
            result4 = mystring4 * parseInt(NUM4.value);
            break;
        case "冰淇淋蛋糕片":
            mystring4 = 75;
            result4 = mystring4 * parseInt(NUM4.value);
            break;
        case "紅豆冰棒":
            mystring4 = 40;
            result4 = mystring4 * parseInt(NUM4.value);
            break;
        case "牛奶冰棒":
            mystring4 = 45;
            result4 = mystring4 * parseInt(NUM4.value);
            break;
        case "水果冰棒":
            mystring4 = 35;
            result4 = mystring4 * parseInt(NUM4.value);
            break;
        case "綠豆沙":
            mystring4 = 40;
            result4 = mystring4 * parseInt(NUM4.value);
            break;
        case "芒果冰沙":
            mystring4 = 60;
            result4 = mystring4 * parseInt(NUM4.value);
            break;
        default:
            mystring4 = 0;
            result4 = mystring4 * parseInt(NUM4.value);
            break;
    }
    if (isNaN(result4)) { result4 = 0; }
    prid.innerText = mystring4 +" 元";
    costd.innerText = result4 +" 元";
}
// tobtn.addEventListener('click', function (e) {
//     e.preventDefault(); //submit不送出資料
//     let option4 = dessert.value;
//     console.log(dessert.value);
//     switch (option4) {
//         case "起司蛋糕片":
//             mystring4 = 50;
//             result4 = mystring4 * parseInt(NUM4.value);
//             break;
//         case "黑森林蛋糕片":
//             mystring4 = 60;
//             result4 = mystring4 * parseInt(NUM4.value);
//             break;
//         case "抹茶蛋糕片":
//             mystring4 = 70;
//             result4 = mystring4 * parseInt(NUM4.value);
//             break;
//         case "冰淇淋蛋糕片":
//             mystring4 = 75;
//             result4 = mystring4 * parseInt(NUM4.value);
//             break;
//         case "紅豆冰棒":
//             mystring4 = 40;
//             result4 = mystring4 * parseInt(NUM4.value);
//             break;
//         case "牛奶冰棒":
//             mystring4 = 45;
//             result4 = mystring4 * parseInt(NUM4.value);
//             break;
//         case "水果冰棒":
//             mystring4 = 35;
//             result4 = mystring4 * parseInt(NUM4.value);
//             break;
//         case "綠豆沙":
//             mystring4 = 40;
//             result4 = mystring4 * parseInt(NUM4.value);
//             break;
//         case "芒果冰沙":
//             mystring4 = 60;
//             result4 = mystring4 * parseInt(NUM4.value);
//             break;
//         default:
//             break;
//     }
//     prid.innerText = mystring4 + " 元";
//     costd.innerText = result4 + " 元";
// });
//第四排結束
//總
// let tobtn = document.getElementById('tobtn');

let priTotal = document.getElementById('priTotal');

function myTotal(priMainmeal) {
    // priTotal.innerText = "總金額 : 3000 元";
    // let costaInt =costa.innerText;
    // let costbInt =costb.innerText;
    // let costcInt =costc.innerText;
    // let costdInt =costd.innerText;
    // console.log("costaInt="+ costa.innerText.slice(0,costa.innerText.indexOf(" 元")));
    let costaInt = parseInt(costa.innerText.slice(0,costa.innerText.indexOf(" 元")));
    if (isNaN(costaInt)) { costaInt = 0; }
    let costbInt = parseInt(costb.innerText.slice(0,costb.innerText.indexOf(" 元")));
    if (isNaN(costbInt)) { costbInt = 0; }
    let costcInt = parseInt(costc.innerText.slice(0,costc.innerText.indexOf(" 元")));
    if (isNaN(costcInt)) { costcInt = 0; }
    let costdInt = parseInt(costd.innerText.slice(0,costd.innerText.indexOf(" 元")));
    if (isNaN(costdInt)) { costdInt = 0; }
    priTotal.innerText = "總金額 : " + (costaInt + costbInt + costcInt + costdInt) + " 元";
}
let total = document.getElementById('total');
tobtn.addEventListener('click', function (e) {
    e.preventDefault(); //submit不送出資料




    result5 = result + result2 + result3 + result4;
    total.innerText = "訂單總金額 : " + result5 + " 元";



});
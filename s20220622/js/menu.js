
function getTotal() {
    console.log('onchange ok');
    calResult1 = parseInt(itemPrice1.value) * parseInt(itemCount1.value);
    itemTotal1.value = calResult1;
    calResult2 = parseInt(itemPrice2.value) * parseInt(itemCount2.value);
    itemTotal2.value = calResult2;
    calResult3 = parseInt(itemPrice3.value) * parseInt(itemCount3.value);
    itemTotal3.value = calResult3;
    total = parseInt(itemTotal1.value) + parseInt(itemTotal2.value) + parseInt(itemTotal3.value);

    pResult.innerText = "Result : " + total;
    return total;
}

const form = document.getElementById("myForm");

const itemPrice1 = document.getElementById("itemPrice1");
const itemCount1 = document.getElementById("itemCount1");
const itemTotal1 = document.getElementById("itemTotal1");

const itemPrice2 = document.getElementById("itemPrice2");
const itemCount2 = document.getElementById("itemCount2");
const itemTotal2 = document.getElementById("itemTotal2");

const itemPrice3 = document.getElementById("itemPrice3");
const itemCount3 = document.getElementById("itemCount3");
const itemTotal3 = document.getElementById("itemTotal3");

const resultBtn = document.getElementById("resultBtn");
const pResult = document.getElementById("pResult");



form.addEventListener("submit", function (e) {
    // console.log(e);
    //預防表單重新整理的預設行為
    e.preventDefault();
    
    // total資料計算
    let getTotalRes = getTotal();

    if(confirm('今天要購買嗎?')){
        alert('算你8折');
        let resString = `
            原價 Result : ${getTotalRes} => 8折 : ${getTotalRes*0.8}
        `;
        pResult.innerText = resString;

    }else{
        alert('好吧算你3折')
        let resString = `
            原價 Result : ${getTotalRes} => 3折 : ${getTotalRes*0.3}
        `;
        pResult.innerText = resString;
    }
});

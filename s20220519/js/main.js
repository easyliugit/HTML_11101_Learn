const item1 = document.getElementById('item1');
const item1Num = document.getElementById('item1Num');
const item1Price = document.getElementById('item1Price');


// button 1.click / button submit ->form
const myForm = document.getElementById('myForm');
// const myBtn = document.getElementById('myBtn');

myForm.addEventListener('submit',function(e){
    e.preventDefault();
    let item1Val = parseInt(item1.value);
    let item1NumVal = parseInt(item1Num.value);
    let item1Result = item1Val * item1NumVal ;
    item1Price.value = item1Result;
    // console.log('item1Val',item1Val);
})


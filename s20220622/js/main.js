function getTotal(num1,num2,option){
    let resultNum = 0;
    switch (option) {
        case "+":
            resultNum = num1 + num2 ;        
            break;
        case "-":
            resultNum = num1 - num2 ;        
            break;
        case "*":
            resultNum = num1 * num2 ;        
            break;
        case "/":
            resultNum = num1 / num2 ;        
            break;
    
        default:
            break;
    }

    return resultNum;

}

const myForm = document.getElementById("myForm");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const optionInput = document.getElementById("option");
const resultP = document.getElementById("result");

console.log(myForm);
console.log(num1Input);
console.log(num2Input);
console.log(resultP);

myForm.addEventListener('submit', function(e){
    e.preventDefault(); //submit不送出表單
    // console.log(e);
    // console.log(num1Input.value);
    // console.log(num2Input.value);
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);
    let option = optionInput.value;

    // 加減乘除 計算
    let resultNum = getTotal(num1,num2,option);
    
    console.log(resultNum);
    myString1 = `${num1} ${option} ${num2} = ${resultNum}`;
    resultP.innerText = myString1;
    
})


resultP.innerText = "hello first change text";


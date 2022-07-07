$(document).ready(function () {

    // 練習一 紅綠燈
    // green id 1 3 5 7 .... 
    // red id 2 4 6 8 10 .... 
    // reset all no color

    // 練習二
    // first => first red other 沒顏色
    // last => last red other 沒顏色

    // 練習三
    // 當我按學生姓名
    // tr red
    // next tr blue
    // prev tr green


    function resetFun() {
        myTable.find('tr').css('color', 'black');
    }


    //btn
    const firstBtn = $('.firstBtn');
    const lastBtn = $('.lastBtn');
    const greenBtn = $('.green');
    const redBtn = $('.red');
    const resetBtn = $('.reset');
    const myTable = $('#myTable');
    // table childrend 非tr
    // table find('tr')
    const myTr = $('tr');
    
    


    console.log(myTable.find('tr'));

    greenBtn.click(function () {
        resetFun();
        console.log('greenBtn ok');
        console.log('children', table.children());
        // myTr.odd().css('color', 'green');
        myTable.find('tr').odd().css('color', 'green');

    });
    redBtn.click(function () {
        resetFun();
        console.log('redBtn ok');
        // myTr.evne().css('color', 'red');
        myTable.find('tr').even().not('tr:first').css('color', 'red');
    });
    resetBtn.click(function () {
        resetFun();
        console.log('resetBtn ok');
    });

    firstBtn.click(function () {
        resetFun();
        myTable.find('td').parent().first().next().next().css('color', 'red');
    });

    lastBtn.click(function () {
        resetFun();
        myTable.find('tr').last().css('color', 'red');
    });

    // 方法一 class
    $('.myName').each(function (index, element) {
        $(this).click(function () {
            // console.log('span',index);
            let getID = $(this).parent().prev().text();
            let getName = $(this).text();
            let getMobile = $(this).parent().next().text();

            resetFun();
            // 不要第一個tr
            let prevObj = $(this).parent().parent().prev();
            console.log('prevObj.index', prevObj.index());
            if (prevObj.index() != 0) {
                prevObj.css('color', 'green');
            }
            $(this).parent().parent().css('color', 'red');
            $(this).parent().parent().next().css('color', 'blue');

            // alert(`Hello ${getID} / ${getName} / ${getMobile} `);
        });
    });

    // 方法二 綁定元件
    // myTable.find('tr').each(function (index, element) {
    //     $(this).click(function () {
    //         console.log(index);
    //     });
    // });

});
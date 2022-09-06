<?php
//允許來源傳回 Access-Control-Allow-Origin 標頭
// header("Access-Control-Allow-Origin: *");

// [PHP]curl - 佛祖球球
// https://blog.johnsonlu.org/php-curl/
// [程式][PHP] 如何使用PHP CURL，基礎教學。
// https://expect7.pixnet.net/blog/post/36428081
// 初始化 curl
$ch = curl_init("https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json?page=0&size=10");
//關閉SSL認證 https 要取得
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
// 因傳回結果為物件，前端前端JS無法直接使用，不直接顯示在畫面上，傳給前端JS記得加這行
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

//解析後轉換為字串
$output = curl_exec($ch);

//加入User Agent 模擬browser行為
// curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0");

// close
curl_close($ch);

echo $output;
// var_dump($output);

// 多維array
    // data[0]['id'] => 1
    // data[0]['name'] => amy
    // data[0]['address'] => taipei

    // data[1]['id'] => 1
    // data[1]['name'] => bob
    // data[1]['address'] => taipei

    // data[2]['id'] => 1
    // data[2]['name'] => cat
    // data[3]['address'] => taipei
//-----------------------------------------------
    // data[amy]['id'] => 1
    // data[amy]['name'] => amy
    // data[amy]['address'] => taipei

    // data[1]['id'] => 1
    // data[1]['name'] => amy
    // data[1]['address'] => taipei

    // data[2]['id'] => 1
    // data[2]['name'] => amy
    // data[3]['address'] => taipei




    // let data = [
    //     ['id' => 1,
    //       'name' => 'amy',
    //       'address' => 'taipei'
    //     ],
    //     ['id' => 2,
    //       'name' => 'bob',
    //       'address' => 'taipei'
    //     ],
    //     ['id' => 3,
    //       'name' => 'cat',
    //       'address' => 'taipei'
    //     ],
    // ]
?>
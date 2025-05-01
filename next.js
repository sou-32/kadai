//今日の日付データを変数に格納
//変数は"today"とする
var today=new Date(); 

//年・月・日・曜日を取得
var year = today.getFullYear();//年
var month = today.getMonth()+1;//月
var day = today.getDate();//日
var week = today.getDay();//曜日
var hour = today.getHours();//時
var minutes = today.getMinutes();//分
if(minutes < 10){
    const nullnum = 0;
}

var week_array = new Array("日","月","火","水","木","金","土");
var timetext = ("最終更新日 : "+year+"年"+month+"月"+day+"日 "+week_array[week]+"曜日 "+hour+":"+minutes);
//年・月・日・曜日を書き出す
document.getElementById("clock").innerHTML = timetext;
//直前の　else ifが偽の場合のみ実行されるため3かつ5の倍数を一番上に持ってくるというひっかけ問題
let num = 150;

//3の倍数かつ5の倍数の場合
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
  //3の倍数の場合
} else if (num % 3 === 0) {
  console.log("3の倍数です");
  //5の倍数の場合
} else if (num % 5 === 0) {
  console.log("5の倍数です");
  //いずれでもない場合
} else {
  console.log(num);
}

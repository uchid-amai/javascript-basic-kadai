const today = new Date();
// 年を取得
const year = today.getFullYear();
// 月を取得
const month = today.getMonth() + 1;
// 日を取得
const date = today.getDate();

// コンソールに文字列として出力
console.log(year + "年" + month + "月" + date + "日");
console.log(today);

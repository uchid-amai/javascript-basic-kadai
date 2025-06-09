const btn = document.getElementById("btn");
const text = document.getElementById("text");
// 確認用
console.log(text);

// クリックしたら（イベント処理）、非同期処理の処理のsetTimeoutを実行
btn.addEventListener("click", () => {
  setTimeout(() => {
    // テキストを書き換え
    text.textContent = "ボタンをクリックしました";
    // 確認用
    console.log(text);
  }, 2000);
});

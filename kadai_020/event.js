// btnのidをもつHTMｌ要素を取得して代入
const btn = document.getElementById("btn");

// HTML要素がクリックされた時文章を書き換える
btn.addEventListener("click", () => {
  // 文字列のHTMl要素を取得して定数に代入;
  const text = document.getElementById("text");
  // 文字列を書き換え
  text.textContent = "ボタンをクリックしました";
});

// 確認
console.log(text);

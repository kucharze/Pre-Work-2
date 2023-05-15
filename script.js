const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);
button.addEventListener("click", function(e) {
  e.preventDefault();
  const cost = document.querySelector("input");
  console.log(cost.value * 0.15);
  let tip = (cost.value * 0.15).toFixed(2);
  let temp = `<h1><u>15%</u> tip for <u>$${cost.value}</u> is <u>$${tip}</u></h1>`;
  output.innerHTML = temp;
})
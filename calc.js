const buttonContainer = document.getElementById("buttons");
const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+" , "c" ,"<"];
let exp = "";
const result = document.getElementById("result");

buttons.forEach(text => {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.classList.add("calc-button");
  btn.addEventListener("click", () => handleButtonClick(text));
  buttonContainer.appendChild(btn);
});
function handleButtonClick(text){
    if (text === "c") {
        exp = "";
        result.textContent = "0";
        return;
    }
    if (text ==="<"){
        exp = exp.slice(0,-1);
        result.textContent = exp || "0";
        return;
    }
    if (text === "="){
        try {
            const res = Function(`return ${exp}`)();
            result.textContent = res;
            exp = res.toString();
            }
        catch{
            result.textContent = "Error";
            exp = "";
            }
        return;
    }
    exp +=text;
    result.textContent = exp;
}


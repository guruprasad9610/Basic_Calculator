const output = document.getElementById("output");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

// add event listener to all number buttons
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => 
{
  button.addEventListener("click", () => 
  {
    if (output.innerHTML === "0") 
    {
      output.innerHTML = button.value;
    } 
    else 
    {
      output.innerHTML += button.value;
    }
  });
});

// add event listener to all operator buttons
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => 
{
  button.addEventListener("click", () => 
  {
    if (output.innerHTML[output.innerHTML.length - 1] !== button.value) 
    {
      output.innerHTML += button.value;
    }
  });
});

// add event listener to clear button
clear.addEventListener("click", () => 
{
  output.innerHTML = "0";
});

// add event listener to equal button
equal.addEventListener("click", () => 
{
  const result = eval(output.innerHTML);
  output.innerHTML = result;
});

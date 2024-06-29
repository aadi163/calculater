var result = document.getElementById("result");

function display(number)
{
   if(result.value=="0")
   {
    result.value=" "
    result.value += number;
   }
   else if(result.value.length<=5)
   {
    result.value += number;
   }
}
function calculate()
{
    var final = result.value;
    var final_result = eval(final);
    result.value = final_result;
}
function clr()
{
  var clr = "0";
  result.value = clr;
}
function del()
{
    
    result.value = result.value.slice(0,-1);
}

//let btnValue=[1,2,3,4]
let input=document.getElementById('input');
function display(v)
{
  if(input.value=='0')
    { 
      input.value='';
      input.value+=v;
    } 

  else if(input.value.length<8)
  {
    input.value+=v;
    console.log(i.length);
  }
  else{
    input.style.border="1px solid red";
  }  
}
function calculate()
{
    let final = input.value;
    let ans = eval(final);
    input.value=ans;
}
function clr()
{
   input.value='0';
}
function del()
{
  input.value = input.value.slice(0,-1);
}




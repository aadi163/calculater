//let fName=document.getElementById('first-name').value;
//let lName=document.getElementById('last-name').value;

function submitData()
{
  let fName=document.getElementById('first-name').value;
  console.log(fName);
  let lName=document.getElementById('last-name').value;
  console.log(lName);
  let cNo=document.getElementById('contact-no').value;
  console.log(cNo);
  let gMail=document.getElementById('gmail').value;
  console.log(gMail);
  let gender=document.getElementsByName('gender');
  for(let i=0; i<gender.length;i++)
    {
      if(gender[i].checked)
        {
          console.log( gender[i].value);
          document.getElementById('gender').innerText=gender[i].value;
    

        }
    }
  //console.log(lName);
  //let add=document.getElementById('Address').value;
  //console.log(lName);
 // let lName=document.getElementById('last-name').value;
   //let lName=document.getElementById('last-name').value;

document.getElementById('f-name').innerText=fName;

document.getElementById('l-name').innerText=lName;

document.getElementById('c-no').innerText=cNo;

document.getElementById('g-mail').innerText=gMail;


}
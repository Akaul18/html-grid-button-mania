// function loadFunc(){
//   document.querySelector('ul').style.display='none';
// }
const buttons = document.querySelectorAll('nav button');
// const ul = document.querySelector('ul');
const body = document.body;
// console.log(buttons);
// console.log(ul);

buttons.forEach(button => button.addEventListener('click',changeCss));

function changeCss(e){
  // document.querySelector('ul').style.display='grid';
  // ul.className="";

  const btn = e.target.innerText;
  // console.log(btn);
  // ul.classList.add("change-layout"+btn);
  buttons
  body.className = "change-layout"+btn;
  console.log(body.className);
}

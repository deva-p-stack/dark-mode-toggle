import './style.css'




document.addEventListener("DOMContentLoaded", () => {
  
let html = document.documentElement; 
let darkbtn = document.querySelector('#darkbtn');
let lightbtn = document.querySelector('#lightbtn');
let address = document.querySelector('#address');
let name = document.querySelector('#name');
let phonenumber = document.querySelector('#phone');
let submit = document.querySelector('#submitbtn');
let h3 = document.querySelector('#h3');
let errorname = document.querySelector('.errorname');
let form = document.querySelector('#form');
let phonenumberpattern =/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
let errorphone = document.querySelector('.errorphone');
let usericon = document.querySelector('.usericon');
let mobileicon = document.querySelector('.mobileicon');
let erroraddress = document.querySelector('.erroraddress');
let livecount = document.querySelector('.livecount');
let section = document.querySelector('.section');

// load the theme
// if(localStorage.theme === "dark"){
//     html.classList.add("dark");
//     darkbtn.classList.add("hidden");
//     lightbtn.classList.remove("hidden");
// }else{
//   html.classList.remove("dark");
//    darkbtn.classList.remove("hidden");
//     lightbtn.classList.add("hidden");
// }


darkbtn.addEventListener("click",function(){
  h3.classList.remove("text-dark");
    lightbtn.classList.toggle("hidden");
    darkbtn.classList.toggle("hidden");
    html.classList.add("dark");
      // localStorage.theme = "dark";
      form.classList.remove("bg-[#fffdfd]");
    form.classList.add("bg-gray-800");
    h3.classList.add("text-gray-200");
    section .classList.toggle("bg-gray-900");


    
// save the theme
// if (html.classList.contains("dark")) {
//   localStorage.theme = "dark";
// } else {
//   localStorage.theme = "light";
// }

})

lightbtn.addEventListener("click",function(){
   form.classList.remove("bg-gray-800");
    h3.classList.remove("text-gray-200");
 
 darkbtn.classList.toggle("hidden");
 lightbtn.classList.toggle("hidden");
 html.classList.remove("dark");
 html.removeAttribute("class");
  localStorage.theme = "light";
 form.classList.add("bg-[#fffdfd]");
 h3.classList.add("text-dark");
 section .classList.toggle("bg-gray-900");
   // save the theme
// if (html.classList.contains("dark")) {
//   localStorage.theme = "dark";
// } else {
//   localStorage.theme = "light";
// }
})



form.addEventListener("submit",function (e){

e.preventDefault();

let validate = true;



if ( name.value.trim() === ""){
errorname.classList.remove("hidden");
usericon.classList.remove("bottom-2");
usericon.classList.add("bottom-8");
errorname.textContent="please enter the name ";
validate = false;
}
else{
    errorname.classList.add("hidden");
    usericon.classList.remove("bottom-8");
    usericon.classList.add("bottom-2");
   
}




let phoneValue = phonenumber.value.trim();

if(phoneValue === "")
{
    errorphone.classList.remove("hidden");  
   
    mobileicon.classList.remove("bottom-2");
    mobileicon.classList.add("bottom-8.5");
     errorphone.textContent = "Please enter your phone number";
    validate = false;
}
else if(!phonenumberpattern.test(phoneValue)){
    errorphone.classList.remove("hidden");  
    errorphone.textContent = "please enter validate Number";
    mobileicon.classList.remove("bottom-2");
     mobileicon.classList.add("bottom-8"); 
    validate = false;
}
else{
    errorphone.classList.add("hidden");
     mobileicon.classList.remove("bottom-10");
     mobileicon.classList.add("bottom-2");
   
}



if ( address.value.trim() === ""){
erroraddress.classList.remove("invisible");
erroraddress.textContent="please enter your Address ";
validate = false;
}
else if (address.value.length > 255) {
  erroraddress.classList.remove("invisible");
  erroraddress.textContent = "Maximum 255 characters allowed";
  validate = false;
}
else{
    erroraddress.classList.add("invisible");   
}





if (validate) {
  form.submit();
}


})

address.addEventListener("input",function(){
let length = address.value.length;
let  addresslength = 255;

livecount.textContent = `${length}/${addresslength}`;

 if (length >= addresslength) {
    erroraddress.classList.remove('invisible');
     erroraddress.textContent = "Maximum 255 characters allowed";
 address.classList.add("border", "border-red-500");

  } else {
    erroraddress.classList.add('invisible');
    address.classList.remove("border", "border-red-500");

  }

})

});









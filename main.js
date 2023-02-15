let form=document.querySelector('form');
form.addEventListener('submit',function(k){
k.preventDefault();

let sum=Number(document.querySelector("#phone").value);
let sum1=document.querySelector("#name");
let sum2=document.querySelector("#password").value;
let sum3=document.querySelector("#confirm").value;
let reselt=document.querySelector("#result");

if((sum===" ")||(sum<0)||(isNaN(sum))){
		reselt.innerHTML ="please enter your phone number";
		reselt.style.color="red";
	}
else if (sum2!==sum3){
	reselt.innerHTML="please enter your  password";
    reselt.style.color="red";
}



})


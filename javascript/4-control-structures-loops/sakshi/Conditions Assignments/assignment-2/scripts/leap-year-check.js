const results=document.getElementById("results");
const input=document.getElementById("year");
const button=document.querySelector("button");
button.addEventListener("click",checkLeapYear);
function checkLeapYear(){
    const year=Number(input.value);
    let result="";
    if(isNaN(year) || year<0){
        result="Invalid input";
    }else if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        result="Leap Year"
    }else{
        result="Not a Leap Year";
    }
    results.textContent=result;
}
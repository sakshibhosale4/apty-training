const input=document.getElementById("marks");
const button=document.querySelector("button");
const results=document.getElementById("results");
button.addEventListener("click",calGrade);
function calGrade(){
    const marks = Number(input.value.trim());
    let gradeText="";
    if (isNaN(marks) || marks>100 || marks<0){
        gradeText="Invalid Marks";
    }else if(marks>=90){
        gradeText="Grade A";
    }else if(marks>=75){
        gradeText="Grade B";
    }else if(marks>=50){
        gradeText="Grade C";
    }else{
        gradeText="Grade F";
    }
    results.textContent=gradeText ;
}



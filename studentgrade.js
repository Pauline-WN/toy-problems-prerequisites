// A = 100 to 79
// B = 79 t0 60
// C = 59 to 49
// D = 49 to 40
// E = 40 to 0



// declaring a function called 'studentgrades'
function studentgrades() {

    // Prompting the user to input student marks
let marks = prompt("Please enter the student's grades (between 0 and 100):");
       
if (marks <= 100 && marks >= 79){
        alert ('A');
        }  else if (marks < 79 && marks >= 60){ 
        alert ('B');    
        }  else if (marks <= 59 && marks >= 49){
        alert ('C');
        }   else if (marks <= 49 && marks >= 40){  
        alert ('D');
        }   else if (marks <= 40 && marks >= 0){
        alert ('E');  
        } else (marks > 100) ; {
        alert ('Out of Range') 
    }

}

studentgrades()



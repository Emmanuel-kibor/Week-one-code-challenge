//Code that prompts the user to enter marks

let studentMarks = prompt("enter marks")

if (studentMarks >= 79) {
    grade = 'A';
} else if (studentMarks >= 60 && studentMarks < 79) {
    grade = 'B';
} else if (studentMarks >= 49 && studentMarks <= 59) {
    grade = 'C';
} else if (studentMarks >= 40 && studentMarks < 49) {
    grade = 'D';
} else if (studentMarks < 40 && studentMarks > 0) {
    grade = 'E';
} else {
    grade = 'N/A';
}
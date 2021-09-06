// // Solution 1
// function gradingStudents(grades) {
//   // Write your code here
//   for (let i = 0; i < grades.length; i++ ) {
//       if ((grades[i] >= 38) && ((((grades[i] % 5) == 3) || ((grades[i] % 5 == 4))))) {
//             grades[i] = grades[i] + (5 - (grades[i] % 5))
//             console.log(grades)
//       }
//   }
//   return grades;
// }
// gradingStudents([34, 38, 43, 48])

// // Solution 2
// const gradingStudents2 = (grades) => {
//   for (let i = 0; i < grades.length; i++) {
//     if ((grades[i] >= 38) && ((((grades[i] % 5) == 3) || ((grades[i] % 5) == 4)))) {
//        grades[i] = Math.ceil(grades[i]/5) * 5
//        console.log(grades)
//     }
//   }
//   return grades;
// }

// gradingStudents2([34, 38, 43, 48])

const gradingStudents3 = (grades) => {
  return grades.map(grade => {
    const round = Math.ceil((grade + 1) / 5) * 5
    return (round - grade < 3) && (grade >= 38) ? round : grade
  })
}

console.log(gradingStudents3([34, 38, 43, 48, 41, 37]))

function gradingStudents4(scores) {
  // If the score is > 38
  // &&
  // the next multiple of 5 of the score minus the score <  3
  // We round to the nearest multiple of 5
  // diff = rounded score - score
  return scores.map(score => {
    let round = Math.ceil(score / 5) * 5
    let diff = round - score;
    let result = '';

    // return (score >= 38) && (diff < 3) ? round : score
     if (score >= 38 && diff < 3) {
       result = round;
     } else {
       result = score;
     }

     return result;
  
  }) 
    
}

console.log(gradingStudents4([34, 38, 43, 48, 41, 37]));

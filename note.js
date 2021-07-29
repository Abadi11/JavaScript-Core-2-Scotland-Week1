/*You are given an object of trainee names and grades Loop through all the trainees' grades and console log the name and grade of the ones with grade more than 18 Try to use both methods shown above to achieve this*/

const traineeGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

/*for (var key in traineeGrades){
 if (traineeGrades[key] >= 18){
  console.log(key + ": " + traineeGrades[key])
 };
}*/
let traineeGradesKeys = Object.keys(traineeGrades);
console.log(traineeGradesKeys);
traineeGradesKeys.forEach((key) => {
 if (traineeGrades[key] >= 18){
  console.log(key +": " + traineeGrades[key])
 }
})
// Prints
// TOM - 20
// ABDUL - 19
students = [
    let {
     name: "Amna",
     gender: "female",
     dob: new Date("02-04-1990"),
     address: {
         ilaqa: "Gulistan-e-Johar",
         city: "Karachi",
         country: "Pakistan",
         postalCode: 47114
     },    
     phoneNo: "0331-2324243",
     admissionTestScore: 56,
     hasInternet: true,
     hasComputer: false,
     hasJob: true,
     hasSchoolBefore: false
     },
     {
     name: "Hadia",
     gender:"female",
     dob: new Date("05-15-1984"),
     address: {
         ilaqa: "Lyari",
         city: "Karachi",
         country: "Pakistan",
         postalCode: 75660
     },
     phoneNo: "0345-3452953",
     admissionTestScore: 48,
     hasInternet: false,
     hasComputer: false,
     hasJob: false,
     hasSchoolBefore: true
     },
     {
     name: "Ahmed",
     gender: "male",
     dob: new Date("06-27-2002"),
     address: {
         ilaqa: "University Road",
         city: "Quetta",
         country: "Pakistan",
         postalCode: 82215
     },
     phoneNo: "0333-0124325",
     admissionTestScore: 33,
     hasInternet: true,
     hasComputer: false,
     hasJob: false,
     hasSchoolBefore: false
     },
     {
     name: "Fariha",
     gender:"female",
     dob: new Date("09-13-1998"),
     address: {
         ilaqa: "University Road",
         city: "Karachi",
         country: "Pakistan",
         postalCode: 82215
     },
     phoneNo: "0331-9432532",
     admissionTestScore: 33,
     hasInternet: true,
     hasComputer: false,
     hasJob: false,
     hasSchoolBefore: false
     },
     {
     name: "Abdullah",
     gender: "male",
     dob: new Date("01-24-1972"),
     address: {
         ilaqa: "Bazar Colony",
         city: "Lahore",
         country: "Pakistan",
         postalCode: 32212
     },
     phoneNo: "0345-9912121",
     admissionTestScore: 33,
     hasInternet: false,
     hasComputer: false,
     hasJob: true,
     hasSchoolBefore: true
     }
 ];
 // 1.Print each student in this format:
 // Name: Amna
 // Gender: Female
 // City: Karachi
 // Score: 56 marks
 
 for(let i = 0; i < students.length; i++){
     console.log("Name: " + students[i].name);
     console.log("Gender: " + students[i].gender);
     console.log("City: " + students[i].address.city);
     console.log("Score: " + students[i].admissionTestScore + " marks");
     console.log('')
 }
 
 // 2.Print names of female students only.
 
 for (let i = 0 ; i< students.length; i++){
     if(students[i].gender ==="female"){
         console.log(students[i].name)
     }
 }
 console.log('');
 // 3.Print names of male students only.
 
 for (let i = 0 ; i< students.length; i++){
     if(students[i].gender ==="male"){
         console.log(students[i].name)
     }
 }
 console.log('');
 
 // 4.Print names of students who have passed the admission test. Passing marks are 50.
 
 for (let i=0 ; i <students.length;i++){
     if (students[i].admissionTestScore >= 50){
         console.log(students[i].name)
     }
 }
 console.log('');
 // 5.Print names of eligible students only (students who have internet and live in Karachi are eligible)
 
 for (let i=0; i< students.length; i++ ){
     if(students[i].hasInternet === true && students[i].address.city === "karachi"){
         console.log(students[i].name)
     }
 }
 
 console.log('');
 // 6.Print address of each student in this format:
 // Amna's address:
 // Gulistan-e-Johar in Karachi, Pakistan
 
 for (let i=0 ; i <students.length ; i++){
     console.log(students[i].name + "'s address: \n" 
     +students[i].address.ilaqa +" in " + students[i].address.city +", " + students[i].address.country )
 }
 
 console.log('');
 
 // 7.Print names and phone number of students who have Ufone.
 
 for (let i=0 ; i <students.length; i++){
     if (students[i].phoneNo.charAt(2)== 3){
         console.log(students[i].name)
     }
 }
 
 console.log('');
 
 // 8.Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
 // Group A:  name1, name2
 // Group B:  name3, name4, name5
 
 let groupA=[];
 let groupB=[];
 // khali array banany k  bad usmai .push kro yani k add kro koi string or call karo loops k bahar.
 for (let i=0 ; i <students.length ; i++){
     if(students[i].hasJob === true || students[i].hasSchoolBefore === true){
         groupA.push(students[i].name);
     }else{
         groupB.push(students[i].name)
     }
 }
 console.log("Group A: "+ groupA.join(", "));
 console.log("Group B: " + groupB.join(', '));
 console.log('');
 
 // 9.Print age of each student in the below format:
 // function calculateAge(dateOfBirth){
 
 // },
 
 // Amna's age is 29 years
 
 for (let i=0 ; i < students.length; i++){
     let dobYear = students[i].dob.getFullYear();
     let todayYear= new Date().getFullYear();
     let age = todayYear - dobYear;
 
     let dobMonth = students[i].dob.getMonth();
     let todayMonth= new date().getMonth();
     
     if(todayMonth < dobMonth){
         age--;
     }else if(todayMonth === dobMonth){
         dob
 
 
     }
     console.log("")
 }
 
 
 
 
 
 
 // 10.Print the name of the oldest student.
 // e.g
 //     let oldestStudent= students[0];
     
 //     for (let i = 1; 1<students.length; i++){
 //         if (students[i].age > oldestStudent.age{
 //             oldestStudent= students[i];
 //         } 
 //     } 
 // console.log(oldestStudent.name);
 let oldestStudent
 
 if (age < oldestStudents.age){
 
 }
 
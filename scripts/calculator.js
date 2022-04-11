

// take action - metrices

const checkbox = document.querySelectorAll(".checkbox");

let could_be_value = document.querySelector(".could_be_value");

// fake number
let fakeNumber = 35;
// remaining percentage of 100 after fakenumber
let percentage = (100 - fakeNumber) / 3;
// let startingvalue = could_be_value = fakeNumber;
could_be_value = fakeNumber;



let grow = could_be_value + percentage;

// let addTo = checkbox.setAttribute("fakeNumber", "percentage").value;
// console.log(addTo);


// i does it have to be a new class? or what should we call it 
checkbox.forEach((e) => {
    e.setAttribute("i", percentage);
    console.log(e);
    e.addEventListener("click", () =>{
        console.log("check");
        
        
    });
    // could_be_value.style.setProperty("--end-progress", `${percentage}%`);
});


    

// growPercentage(fakeNumber, percentage);
// function growPercentage(){
//     checkbox.setAttribute("fakeNumber", "percentage");
//     // percentage.setAttribute(checkbox, "");
//     console.log(growPercentage.value);
// }

// function percentage (){
//     let fakeresult = fakeNumber/100;

//     console.log(percentage(fakeresult));
// }

// var number = 120;
 
// //The percent that we want to get.
// //i.e. We want to get 50% of 120.
// var percentToGet = 50;
 
// //Calculate the percent.
// var percent = (percentToGet / 100) * number;


// checkbox.forEach((e) => {
//     e.addEventListener("click", () => {
//       if (could_be_value.classList.contains("grow")) {
//         could_be_value.classList.add("grow");
//       } else {
//         could_be_value.classList.remove("grow");
//       }
//       console.log("checkbox");
//     });
//   });
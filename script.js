// let donors =
// JSON.parse(localStorage.getItem("donors")) || [];

// let requests =
// JSON.parse(localStorage.getItem("requests")) || [];

// displayDonors();
// showStats();
// loadRequests();

// document.getElementById("donorForm")
// .addEventListener("submit", function(e){

// e.preventDefault();

// let donor = {
// id: Date.now(),
// name: name.value,
// age: age.value,
// city: city.value,
// phone: phone.value,
// blood: bloodGroup.value,
// available:true,
// points:100
// };

// if(donor.age < 18){
// alert("Not eligible to donate.");
// return;
// }

// donors.push(donor);

// localStorage.setItem(
// "donors",
// JSON.stringify(donors)
// );

// displayDonors();
// showStats();

// this.reset();
// });

// function displayDonors(data = donors){

// let list =
// document.getElementById("donorList");

// list.innerHTML = "";

// data.forEach(donor=>{

// list.innerHTML += `
// <div class="card">

// <h3>${donor.name}</h3>

// <p>Blood Group: ${donor.blood}</p>

// <p>City: ${donor.city}</p>

// <p>Phone: ${donor.phone}</p>

// <p>Reward Points: ${donor.points}</p>

// <p class="${donor.available ?
// 'available':'unavailable'}">

// ${donor.available ?
// 'Available':'Unavailable'}

// </p>

// <button onclick="toggleStatus(${donor.id})">
// Toggle Status
// </button>

// <button onclick="deleteDonor(${donor.id})">
// Delete
// </button>

// </div>
// `;
// });
// }

// function deleteDonor(id){

// donors =
// donors.filter(d=>d.id!==id);

// localStorage.setItem(
// "donors",
// JSON.stringify(donors)
// );

// displayDonors();
// showStats();
// }

// function toggleStatus(id){

// donors.forEach(d=>{

// if(d.id===id){
// d.available=!d.available;
// }
// });

// localStorage.setItem(
// "donors",
// JSON.stringify(donors)
// );

// displayDonors();
// }

// function searchDonors(){

// let blood =
// document.getElementById("searchBlood").value;

// let city =
// document.getElementById("searchCity")
// .value.toLowerCase();

// let filtered =
// donors.filter(d=>{

// let bloodMatch =
// blood==="" || d.blood===blood;

// let cityMatch =
// d.city.toLowerCase().includes(city);

// return bloodMatch && cityMatch;

// });

// displayDonors(filtered);
// }

// function showStats(){

// let stats =
// document.getElementById("stats");

// let bloodCount = {};

// donors.forEach(d=>{

// bloodCount[d.blood] =
// (bloodCount[d.blood] || 0)+1;
// });

// stats.innerHTML = "";

// for(let group in bloodCount){

// stats.innerHTML += `
// <div class="stat">
// ${group}: ${bloodCount[group]}
// </div>
// `;
// }
// }

// function addRequest(){

// let text =
// document.getElementById("requestText").value;

// if(!text) return;

// requests.push(text);

// localStorage.setItem(
// "requests",
// JSON.stringify(requests)
// );

// loadRequests();

// requestText.value="";
// }

// function loadRequests(){

// let list =
// document.getElementById("requestList");

// list.innerHTML="";

// requests.forEach(r=>{

// list.innerHTML +=
// `<li>${r}</li>`;

// });
// }

// function checkCompatibility(){

// const compatible = {

// "A+": ["A+","A-","O+","O-"],
// "A-": ["A-","O-"],

// "B+": ["B+","B-","O+","O-"],
// "B-": ["B-","O-"],

// "AB+": ["A+","A-","B+","B-","AB+","AB-","O+","O-"],

// "AB-": ["A-","B-","AB-","O-"],

// "O+": ["O+","O-"],

// "O-": ["O-"]
// };

// let receiver =
// document.getElementById("receiver").value;

// document.getElementById(
// "compatibilityResult"
// ).innerHTML =
// "Compatible Donors: " +
// compatible[receiver].join(", ");
// }

// document.getElementById("themeBtn")
// .addEventListener("click",()=>{

// document.body.classList.toggle("dark");

// });
/*
      JavaScript 6th Edition
      Chapter 7
      Hands-on Project 7-4

      Author: Lupe Acosta
      Date: February 17, 2022  

      Filename: script.js
*/
"strict mode"
// Global variables
var delivInfo = {}
var delivSummary = document.getElementById("deliverTo");

function processDeliveryInfo() {
   var prop;
   delivInfo.name = document.getElementById("nameinput").value;
   delivInfo.addr = document.getElementById("addrinput").value;
   delivInfo.city = document.getElementById("cityinput").value;
   delivInfo.email = document.getElementById("emailinput").value;
   delivInfo.phone = document.getElementById("phoneinput").value;
   for (prop in delivInfo) {
      delivSummary.innerHTML += "<p>" + delivInfo[prop] + "<p>";
   }
   document.getElementById("deliverTo").style.display = "block";
}
function previewOrder() {
   processDeliveryInfo();
   document.getElementsByTagName("section")[0].style.display = "block";
}
// create event listeners
function createEventlisteners() {
   var previewBtn = document.getElementById("previewBtn");
   if (previewBtn.addEventListener) {
      previewBtn.addEventListener("click", previewOrder, false);
   } else if (previewBtn.attachEvent) {
      previewBtn.attachEvent("onclick", previewOrder);
   }
}

// create event listeners when the page finishes loading
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}

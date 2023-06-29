// import axios from 'axios';
function resume(){
  if (confirm("You will be taken to the resume link.")) document.location = '/resume.html';
}
var category = 'happiness';
function fetchQuote(){  
  fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
    method: "GET",
    mode: 'cors',
    headers: { 'X-Api-Key': 'tjp6vIHqtaWYPn2gsfixOw==79UxvIq7qx8S2MVL'},
  })
  .then(response => response.json())
  .then(data=>{
    window.alert(JSON.stringify(data[0].quote));
    console.log(data);
  })
}
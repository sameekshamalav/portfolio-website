// import axios from 'axios';
function resume(){
  if (confirm("You will be taken to the resume link.")) document.location = '/resume.html';
}
var mykey=config.api_key;
function fetchQuote(){  
  fetch('https://api.api-ninjas.com/v1/quotes', {
    method: "GET",
    headers: { 'X-Api-Key': mykey},
  })
  .then(response => response.json())
  .then(data=>{
    window.alert(JSON.stringify(data[0].quote));
    console.log(data);
  })
}
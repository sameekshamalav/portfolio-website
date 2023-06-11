function resume(){
  if (confirm("You will be taken to the resume link.")) document.location = '/resume.html';
}
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }
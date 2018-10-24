document.addEventListener("DOMContentLoaded", function(event){
    
  const floral = document.getElementById('floral')
   floral.addEventListener('click', function(event) {
  document.getElementById("background").style.backgroundImage = "url(https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6febeaaa69fd0cab717c6bab09776051&auto=format&fit=crop&w=2466&q=80)";
  document.getElementById("firstname").style.fontFamily = "Impact,Charcoal,sans-serif"; 
  document.getElementById("firstname").style.letterSpacing = "0px";
  document.getElementById("firstname").style.color = "orange";
  document.getElementById("secondname").style.fontFamily = "Impact,Charcoal,sans-serif";
  document.getElementById("secondname").style.letterSpacing = "0px";
  document.getElementById("secondname").style.color = "orange";
   })
   
  

   
    const magical = document.getElementById('magical')
   magical.addEventListener('click', function(event) {
  document.getElementById("background").style.backgroundImage = "url(https://images.unsplash.com/photo-1527190997915-67ce3b53cc58?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b3bf88a842b778b89ca52af5c096649&auto=format&fit=crop&w=668&q=80)";
  document.getElementById("firstname").style.fontFamily = "'Roboto Mono', monospace";
  document.getElementById("firstname").style.letterSpacing = "5px";
  document.getElementById("firstname").style.color = "red";
  
  document.getElementById("secondname").style.fontFamily = "'Roboto Mono', monospace";
  document.getElementById("secondname").style.letterSpacing = "5px";
  document.getElementById("secondname").style.color = "red";
  
  document.getElementById("lastname").style.fontFamily = "'Charmonman', cursive";
  document.getElementById("lastname").style.fontSize = "50px";
  document.getElementById("lastname").style.color = "pink";
  document.getElementById("lastname").style.padding = "0px";
  document.getElementById("lastname").style.margin = "20px";
  
  document.getElementById("date").style.fontFamily = "'Nanum Gothic', sans-serif";
  
  document.getElementById("location").style.fontFamily = "'Roboto Mono', monospace";
  
   })
   
   
    const cats = document.getElementById('cats')
   cats.addEventListener('click', function(event) {
  document.getElementById("background").style.backgroundImage = "url(https://images.unsplash.com/photo-1516139008210-96e45dccd83b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac07676efc2ca5b11b548d8ae01301ba&auto=format&fit=crop&w=800&q=60)";
  document.getElementById("firstname").style.fontFamily = "cursive";
  document.getElementById("firstname").style.letterSpacing = "0px";
  document.getElementById("firstname").style.color = "green";
  document.getElementById("secondname").style.fontFamily = "cursive";
  document.getElementById("secondname").style.letterSpacing = "0px";
  document.getElementById("secondname").style.color = "green";
   })

const go = document.getElementById('go')
   go.addEventListener('click', function(event) {
     event.preventDefault
  document.getElementById('firstname').innerHTML = document.getElementById("firstnameinput").value
  document.getElementById('secondname').innerHTML = document.getElementById("secondnameinput").value
  document.getElementById('lastname').innerHTML = document.getElementById("lastnameinput").value
  document.getElementById('date').innerHTML = document.getElementById("dateinput").value
  document.getElementById('location').innerHTML = document.getElementById("locationinput").value
   })
  
  
})
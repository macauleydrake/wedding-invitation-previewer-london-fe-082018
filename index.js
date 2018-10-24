document.addEventListener("DOMContentLoaded", function(event){
    
  const floral = document.getElementById('floral')
   floral.addEventListener('click', function(event) {
  document.getElementById("background").style.backgroundImage = "url(https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6febeaaa69fd0cab717c6bab09776051&auto=format&fit=crop&w=2466&q=80)";
  document.getElementById("firstname").style.fontFamily = "Impact,Charcoal,sans-serif"; 
  
   })
   
  

   
    const niche = document.getElementById('niche')
   niche.addEventListener('click', function(event) {
  document.getElementById("background").style.backgroundImage = "url(https://images.unsplash.com/photo-1527190997915-67ce3b53cc58?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b3bf88a842b778b89ca52af5c096649&auto=format&fit=crop&w=668&q=80)";
  document.getElementById("firstname").style.fontFamily = "Roboto Mono, monospace;";
  document.getElementById("firstname").style.letterSpacing = "5px";
  
   })
   
   
    const cats = document.getElementById('cats')
   cats.addEventListener('click', function(event) {
  document.getElementById("background").style.backgroundImage = "url(https://images.unsplash.com/photo-1516139008210-96e45dccd83b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac07676efc2ca5b11b548d8ae01301ba&auto=format&fit=crop&w=800&q=60)";
  document.getElementById("firstname").style.fontFamily = "cursive";
   })


  
  
})
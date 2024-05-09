
const homePage = document.getElementById("homePage")
const lineCalculator = document.getElementById("lineCalulator")



// Start - menu bar //

homePage.addEventListener("click",function(){
    window.location.href = "index.php"
    
  })
  
  lineCalculator.addEventListener("click",function(){  
   
    window.open("https://za12ew44zz.github.io/Tax-Calculator-Line-Creator/","_blank")
  
})

// End - menu bar //





$(document).ready(function(){
  
    $("#menu-function").click(function(){
      $("#box-menu").toggle(100)
      
    })
    
    $("#full-screen").click(function(){
        
        if (document.fullscreenEnabled) {
           
            document.documentElement.requestFullscreen();
          } else if (document.webkitFullscreenEnabled) {  // Safari
            document.documentElement.webkitRequestFullscreen();
          } else if (document.msFullscreenEnabled) {  // IE/Edge
            document.documentElement.msRequestFullscreen();
          } else {
           
            console.error("Fullscreen not supported by your browser.");
          }
    })
    
    $("#toggle-darkmode").click(function(){
      
      $("body").toggleClass("light-mode dark-mode");
    })

  
})
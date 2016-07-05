$(".sigma" ).change(function() {
  
  var s11 = $("#s11").val();
  var s22 = $("#s22").val();
  var s21 = $("#s21").val();
  
  
  if(s11 && s22 && s21){
   
    // Get axis X and [(s11,s12),(s22,s21)] angle
    
    // Compute blue and red points centers based on last angle
    
    // Set blue and red points 
    var redPoint = document.getElementById("mohrRedPoint");
    var bluePoint = document.getElementById("mohrBluePoint");
    
    var alpha = Math.atan(2*s21/(s11-s22));
    
    redPoint.setAttribute("cx",125 + 90*Math.cos(alpha));
    redPoint.setAttribute("cy",120 - 90*Math.sin(alpha));
    
    bluePoint.setAttribute("cx",125 - 90*Math.cos(alpha));
    bluePoint.setAttribute("cy",120 + 90*Math.sin(alpha));
    
    // Compute Maximun and minimum strains
    
    // Change points titles
    
  }
});
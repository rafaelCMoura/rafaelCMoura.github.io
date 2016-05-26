function rotateCard(btn) {
  var $card = $(btn).closest('.card-container');
  console.log($card);
  if ($card.hasClass('hover')) {
    $card.removeClass('hover');
  } else {
    $card.addClass('hover');
  }
}

function refreshCalcDisplay(sender){
  var display = document.getElementById("calc-display");

  if(sender.innerHTML=="=")
  {
    display.innerHTML = eval(display.innerHTML.replace("%","/100"));
  }
  else if (sender.innerHTML=="C")
  {
    display.innerHTML = display.innerHTML.slice(0,-1);
  }
  else if (sender.innerHTML=="AC")
  {
    display.innerHTML = "";
  }
  else if (sender.innerHTML=="()")
  {//Need to be completed
    /*
    var lastChar = display.innerHTML[display.innerHTML.length-1];
    if(lastChar=="."){
      display.innerHTML = display.innerHTML + "0*(";
    }else if(lastChar=="("){
      display.innerHTML = display.innerHTML + "(";
    }else if(lastChar=="+" || lastChar=="-" || lastChar=="*" || lastChar=="/"){
      display.innerHTML = display.innerHTML + "(";
    }else {
      display.innerHTML = display.innerHTML + ")";
    }
    */
  }
  else
  {
    if(display.innerHTML.length>16)
    {
      if( $('#alertdiv').length==0)
      {
        $('#alert_placeholder')
        .append('<div id="alertdiv" class="alert alert-warning"><a class="close" data-dismiss="alert">×</a><span>You reach display\'s text limit! :(</span></div>');
        setTimeout(function(){$("#alertdiv").remove();}, 5000);
      }
    }
    else
    {
      display.innerHTML = display.innerHTML+sender.innerHTML;
    }
  }
}

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
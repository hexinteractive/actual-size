
var res = 10;//TVs can have very low dpi/ppi even HD TVs

while( !window.matchMedia("(max-resolution: "+ res +"dpi)").matches ) {
    
    if(res > 500){ 
      $('#error').show();
      res = -1;
      break;
    }
    
    res+=10;

}
res-=10;
while( !window.matchMedia("(max-resolution: "+ res +"dpi)").matches ) {
    if(res == -1){break;}
    res+=1;
}




$(document).ready(function(){
  

  var makeActualSize = function(){
    var $imgs = $('body.actualSize img[data-inch-width]').each(function(){
      var inchWidth = parseFloat($(this).attr('data-inch-width'), 10);
      $(this).css('width', inchWidth*res);
      console.log('inchWidth: ', inchWidth);
    });
  };
  
  var getScreenSize = function(res){
    var ext = {};
    ext.dpi = res | 'UNKNOWN';
    ext.inchWidth = (Math.round((screen.width/res)*100))*.01; // rounded to two decimals
    ext.inchHeight = (Math.round((screen.height/res)*100))*.01; // rounded to two decimals
    ext.inchDiagonal = (Math.round((  Math.sqrt((ext.inchWidth*ext.inchWidth) + (ext.inchHeight*ext.inchHeight) )  )*100))*.01; // rounded to two decimals
    return ext;
  };
  
  if(res !== -1) {
      $('#screenSize').text((getScreenSize(res)).inchDiagonal + '"').css({'color':'#060', 'font-weight':'bold'});
  }

  // console.log('96: '+ (getScreenSize(96)).inchDiagonal);
  
  $('#toggle').click(function(e){
    $('body').toggleClass('actualSize');
    makeActualSize();
  });
  
  
  // iPhone 4 & iPhone  4S 326dpi
  // iPhone 3 etc 163dpi
var str = "(resolution: "+ res +"dpi)";
var x = window.matchMedia(str);
  console.log(str + ": " + x.matches );
  // console.log('res: ', res);
  
  var dpr = "(-webkit-device-pixel-ratio: 1)";
  var answer = window.matchMedia(dpr);
    console.log(dpr + ": " + answer.matches );
});




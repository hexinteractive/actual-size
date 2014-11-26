
var res = 10;//TVs can have very low dpi/ppi even HD TVs

while( !window.matchMedia("(max-resolution: "+ res +"dpi)").matches ) {

    if(res > 500){
      $('#error').show();
      res = -1;
      break;
    }

    res+=10;
    console.log('while max-res matches: ', res);

}
console.log('over res: ', res);
res-=10;
console.log('res adjusted down: ', res);
while( !window.matchMedia("(max-resolution: "+ res +"dpi)").matches ) {
    if(res == -1){break;}
    res+=1;
    console.log('res stepping down: ', res);
}
// my fifteen inch mac should have a diagonal value of ~15.6" and 128dpi
// however when testing this in FF19+ this is broke and it thinks i have a 20.64" screen at 96dpi
// I went back and tested this in FF15 and it works fine.
// In FF16 they added support for dppx "device-pixel per pixel"
// It seems that when adding support for dppx they moved from actual inches to CSS inches which is fixed to 96dpi. useless!
// its not just FF, I tested this page in Chrome 30 and it "works" I get 96dpi. I think Chrome added support in 29.
// I believe the W3C broke the standard. http://www.w3.org/TR/css3-images/#resolution-units
// on the bright side Mozilla created the experimental unit "mozmm" which refers to actual mm not CSS mm. https://developer.mozilla.org/en-US/docs/Web/CSS/length

$(document).ready(function(){


  var makeActualSize = function(){
    var $imgs = $('body.actualSize img[data-inch-width]').each(function(){
      var inchWidth = parseFloat($(this).attr('data-inch-width'), 10);

      $(this).css('width', inchWidth*res);
      console.log('inchWidth: ', inchWidth);
      console.log('res: ', res);
      console.log(' - - - ');
    });
  };

  var getScreenSize = function(res){
    var ext = {};
    ext.dpi = res | 'UNKNOWN';
    ext.inchWidth = (Math.round((screen.width/res)*100))* 0.01; // rounded to two decimals
    ext.inchHeight = (Math.round((screen.height/res)*100))* 0.01; // rounded to two decimals
    ext.inchDiagonal = (Math.round((  Math.sqrt((ext.inchWidth*ext.inchWidth) + (ext.inchHeight*ext.inchHeight) )  )*100))* 0.01; // rounded to two decimals
    return ext;
  };

  if(res !== -1) {
      $('#screenDPI').text(res);
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





var title = document.querySelector("#intro .title");
window.addEventListener("wheel", go);
var offset = 0;
var sectionCounter = 0;
var count = 0;
function go(e){
    count++;
    var goCount = count%5;
    if(e.wheelDelta < 0){
        if(goCount == 4 && sectionCounter < 5){
            sectionCounter++;
        }
    }else{
        if(goCount == 4 && sectionCounter > 0){
            sectionCounter--;
        }
    }
    offset = innerHeight * sectionCounter; //innerWidth, scrollLeft
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
}




// 스크롤 막기 시작
$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll touchmove mousewheel', function(event) {
event.preventDefault();
event.stopPropagation();
return false;
});
//스크롤 막기 끝
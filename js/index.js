/**
 * Created by Administrator on 2016/9/21.
 */
$(function(){
    $('.search').click(function(){
        $(this).parentsUntil('.top-box').addClass("searchings")
    })
    $('.remove').click(function(){
        $(this).parentsUntil('.top-box').removeClass("searchings")
    })
    $(".bacha").click(function(){
        if($(this).parent().hasClass("inner")){
            $(this).parent().removeClass("inner")
        }else {
            $(this).parent().addClass("inner")
        }
        $(".bacha-inner").slideToggle()
        // $(".bacha-inner").toggleClass("active1")
        $(".bacha-inner li").toggleClass("lis")
        $(".top-box").toggleClass("block")
    })
    var img=$('.img-box a')
    var dots=$('.dots li')
    var flag=true;
   var  moveto=function(el,dir){
        if(dir==="right"){
            img.filter(".active")
                .removeClass('active')
                .addClass("leave")
                .delay(1000)
                .queue(function(){
                $(this)
                    .removeClass("leave")
                    .dequeue()
            })
            el.addClass("right")
            el.get(0).offsetWidth
               el .removeClass("right")
                .addClass("active")
        }
        else if(dir=="left"){
            img.filter(".active")
                .removeClass("active")
                .addClass("right")
                .delay(1000)
                .queue(function(){
                $(this).removeClass("right").dequeue()
            })
            el.addClass("enter")
            el.get(0).offsetWidth
            el.removeClass("enter").addClass("active")
        }
        dots.removeClass("active")
        dots.eq(img.index(el)).addClass("active")
    }
     var moveright=function(){
        var pre=img.filter(".active")
        var el= pre.next().length?pre.next():img.eq(0);
        moveto(el,"right")
    }
   var moveleft=function(){
        var pre=img.filter(".active")
        var el=pre.prev().length?pre.prev():img.eq(-1);
        moveto(el,"left")
    }
   var t=setInterval(moveright,2000)
    dots.click(function(){
        clearInterval(t)
        var p=dots.index(dots.filter(".active"))
        dots.removeClass("active")
        $(this).addClass("active")
        var n=$(this).index()
        if(p<n){  flag=true;
           moveto( img.eq(n),"right")
            flag=false;  }else if(p>n){flag=true;
            moveto( img.eq(n),"left")
            flag=false; }

    })
var lefts=$(".leftjian")
    var rights=$(".rightjian")
    lefts.click(function(){
        clearInterval(t)
        moveleft()
    })
    rights.click(function(){
        clearInterval(t)
        moveright()
    })
    var banner=$(".banner")
    var width=banner.outerWidth()
    console.log(width)
        banner.mouseenter(function(e){
            if(e.clientX<width*1/5){
                lefts.addClass("mous")
            }else {
                lefts.removeClass("mous")
            }
           if(e.clientX>width*3/4){
               rights.addClass("mous")
           }else {
               rights.removeClass("mous")
           }
   banner.mouseleave(function () {
       rights.removeClass("mous")
       lefts.removeClass("mous")
   })
     // lefts.mouseenter(function(){
     //     lefts.addClass("mous")
     // })
     //        rights.mouseenter(function(){
     //            rights.addClass("mous")
     //        })
        })
    //尾部
    var footer=$(".footers-top1 .h3")
    footer.click(function(){
        $(this).toggleClass("h3s2")
        $(this).next().toggleClass("uls1")
        $(this).find("h3").toggleClass("h5")
        $(this).find("span").toggleClass("spans1")
    })
})
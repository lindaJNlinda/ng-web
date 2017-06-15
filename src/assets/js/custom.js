/**
 * Created by linlin on 2017/4/17.
 */
$(function(){
  var reg=/\?/;
  var current_url = reg.test(window.location.href.split('http://localhost:4201/')[1])?window.location.href.split('http://localhost:4201/')[1].split('?')[0]:window.location.href.split('http://localhost:4201/')[1],
      $top_menu = $(".top-nav"),$home=$("#home").parent("li");;
      $top_menu.find('a[href="' + current_url + '"]').parents('li').addClass('active');
      $top_menu.find('a[href="' + current_url + '"]').parents('.tab-pane').addClass('active in');
  changeBread();
  $("#home").parent("li").click(function(){
    $($home).addClass("active");
    $($home).siblings("li").removeClass("active");
    $($home).siblings("li").find(".active").removeClass("active");
    $($home).siblings("li").attr("aria-expanded","false");
    $(".tab-pane").removeClass("active in");

    changeBread();
  })
/*  $("#home").parent("li").hover(function(){

    $(this).siblings("li.active").find(".tab-pane").removeClass("active in");
    console.log( $(this));
    if(!$(this).hasClass("active")){
      $(this).addClass("active mhover");
      $(".bread").addClass("bread-mt");
    }
  },function(){

    $(this).siblings("li.active").find(".tab-pane").addClass("active in");
    if($("#home").parent("li").hasClass("mhover")&& $("#home").parent("li").hasClass("active")){
      $("#home").parent("li").removeClass("mhover active")
      $(".bread").removeClass("bread-mt");
    }
  });*/
  $(".tab-pane li").click(function(){
    $(".tab-pane li").removeClass("active");
    $(this).addClass("active");
    $(this).parents("li").removeClass("mhover");
    $(this).parents(".myTabSecond").parent("li").siblings("li").removeClass("active");

    changeBread();

  });
  $(".f-nav").click(function(){
console.log("111111111111111111");
    $(".bread").removeClass("bread-mt");

  });
  $(".f-nav .myTabSecond ul li").click(function(){
    changeBread();
  });
/*
  $(".f-nav").hover(function(){
    if(!$(this).hasClass("active")){
      $(this).addClass("active mhover");
      $(this).find('.tab-pane').addClass('active in');
      $(this).find('.tab-pane li').removeClass("active");
      $(this).siblings("li").find(".tab-pane").removeClass("active in");

    }
    if(!$("#home").parent("li").hasClass("mhover")&& $("#home").parent("li").hasClass("active")){
      $(".bread").removeClass("bread-mt");
    }
  },function(){
    if($(this).hasClass("mhover")){
      $(this).removeClass("active mhover");
      $(this).siblings("li.active").find(".tab-pane").addClass("active in");
      $(this).find('.tab-pane').removeClass('active in');
    }
    if(!$("#home").parent("li").hasClass("mhover") && $("#home").parent("li").hasClass("active")){
      $(".bread").addClass("bread-mt");
    }
  });*/


function changeBread(){
  $nav_a=$("li.active>a");
  var bread_text="";
  for(var i=0;i<$nav_a.length;i++){
    bread_text+=$($nav_a[i]).text()+"/";
  }
  if($nav_a.length>1){
    $(".bread").removeClass("bread-mt");
  }
  else {
    $(".bread").addClass("bread-mt");
  }
  $(".bread .f").text(bread_text);
}
})

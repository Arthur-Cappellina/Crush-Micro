let current_mode = "open"
let current_stack = 100

$(document).ready(function() {
    $(".content-right > div > ul > li").click(function() {
        $(".content-right .selected").removeClass("selected")
        $(this).addClass("selected")
        $(".content-left > img").attr("src", "img/tournoi/" + current_mode + "/" + $(this)[0].id + "/" + current_stack + ".png")
    })  

    $(".inner-navigation > ul > li").click(function() {
        $(".inner-navigation .top-selected").removeClass("top-selected")
        $(this).addClass("top-selected")
        current_mode = $(this)[0].id
        changeMode()
    })

    $(".inner-navigation-stack > ul > li").click(function() {
        $(".inner-navigation-stack .selected-stack").removeClass("selected-stack")
        $(this).addClass("selected-stack")
        current_stack = $(this)[0].id
        loadImage()
    })

    function changeMode() {
        $(".selected-stack").removeClass("selected-stack")
        $(".inner-navigation-stack ul li").each(function(){
            $(this).removeClass("hidden")
        })
        let hasPassed = false;
        if(current_mode == "open"){
            $(".inner-navigation-stack ul li").each(function(){
                if(!hasPassed){
                    $(this).addClass("selected-stack")
                    current_stack = $(this)[0].id
                    hasPassed = true
                }
            })
        }
        if(current_mode == "3-betxopen" || current_mode == "defense-bb" || current_mode == "defense-3-bet"){
            $(".inner-navigation-stack ul li").each(function(){
                if(parseInt($(this)[0].id) < 6){
                    $(this).addClass("hidden")
                }
                else{
                    if(!hasPassed){
                        $(this).addClass("selected-stack")
                        current_stack = $(this)[0].id
                        hasPassed = true
                    }
                    $(this).removeClass("hidden")
                }
            })
        } else if(current_mode == "3-betxshove"){
            $(".inner-navigation-stack ul li").each(function(){
                if(parseInt($(this)[0].id) >= 6){
                    $(this).addClass("hidden")
                }
                else{
                    if(!hasPassed){
                        $(this).addClass("selected-stack")
                        current_stack = $(this)[0].id
                        hasPassed = true
                    }
                    $(this).removeClass("hidden")
                }
            })
        } 
        $(".current-mode").removeClass("current-mode")
        $("." + current_mode).addClass("current-mode")
        $(".content-left > img").attr("src", "img/tournoi/" + current_mode + "/" + $("." + $(".current-mode")[0].className.split(" ")[0] + " .selected")[0].id + "/" + current_stack + ".png")
    }

    function loadImage(){
        console.log(current_stack)
        $(".content-left > img").attr("src", "img/tournoi/" + current_mode + "/" +$("." + $(".current-mode")[0].className.split(" ")[0] + " .selected")[0].id + "/" + current_stack + ".png")
    }
})

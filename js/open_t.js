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
        console.log($(this))
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
        $(".current-mode").removeClass("current-mode")
        $("." + current_mode).addClass("current-mode")
        $(".content-left > img").attr("src", "img/cash/" + $("." + current_mode + " > ul > li")[0].id + "-" + current_mode + ".png")
    }

    function loadImage(){
        $(".content-left > img").attr("src", "img/tournoi/" + current_mode + "/" + $(".selected")[0].id + "/" + current_stack + ".png")
    }
})

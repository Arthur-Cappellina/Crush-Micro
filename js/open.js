let current_mode = "open"

$(document).ready(function() {
    $(".content-right > div > ul > li").click(function() {
        $(".content-right .selected").removeClass("selected")
        $(this).addClass("selected")
        $(".content-left > img").attr("src", "img/" + $(this)[0].id + "-" + current_mode + ".png")
    })  

    $(".inner-navigation > ul > li").click(function() {
        $(".inner-navigation .top-selected").removeClass("top-selected")
        $(this).addClass("top-selected")
        console.log($(this))
        current_mode = $(this)[0].id
        changeMode()
    })

    function changeMode() {
        $(".current-mode").removeClass("current-mode")
        $("." + current_mode).addClass("current-mode")
        $(".content-left > img").attr("src", "img/" + $("." + current_mode + " > ul > li")[0].id + "-" + current_mode + ".png")
    }
})

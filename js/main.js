$(".menu-btn").click(function () {
    let drop=$(this).attr("drop");
    $(".account-btn").attr("drop", "off");
    $(".account").removeClass("active");
    if(drop=='off'){
        $(this).attr("drop","on");
        $("main .menu-container").addClass("active");
    }else{
        $(this).attr("drop", "off");
        $("main .menu-container").removeClass("active");
    }
})

$(".account-btn").click(function () {
    let drop=$(this).attr("drop");
    $(".menu-btn").attr("drop", "off");
    $("main .menu-container").removeClass("active");
    if(drop=='off'){
        $(this).attr("drop","on");
        $(".account").addClass("active");
    }else{
        $(this).attr("drop", "off");
        $(".account").removeClass("active");
    }
})


// range

$("input[type=range]").change(function(){
    let value=$(this).val();
    $(this).closest(".input-box").find(".num").html(value)
})
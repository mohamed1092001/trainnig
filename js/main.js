$(".menu-btn").click(function () {
    let drop = $(this).attr("drop");
    $(".account-btn").attr("drop", "off");
    $(".account").removeClass("active");
    if (drop == 'off') {
        $(this).attr("drop", "on");
        $("main .menu-container").addClass("active");
    } else {
        $(this).attr("drop", "off");
        $("main .menu-container").removeClass("active");
    }
})

$(".account-btn").click(function () {
    let drop = $(this).attr("drop");
    $(".menu-btn").attr("drop", "off");
    $("main .menu-container").removeClass("active");
    if (drop == 'off') {
        $(this).attr("drop", "on");
        $(".account").addClass("active");
    } else {
        $(this).attr("drop", "off");
        $(".account").removeClass("active");
    }
})


// range

$("input[type=range]").on("input", function () {
    let value = $(this).val();
    $(this).closest(".input-box").find(".num").html(value)
})


// ########## لازم نستخدم jquery ########## 
// لما نضغط على زرار السابمت
$(".bmi-form").submit(function (e) {

    $(".result-con").slideDown()
    // امنع عملية الريلود اللى الفورم بيعملها و هو بيبعت الداتا 
    e.preventDefault();

    // الحاجات اللى بنستلمها من الفورم
    let age = $("#age").val();
    let height = $("#height").val() / 100;
    let weight = $("#weight").val();
    // المعادله 
    let bmi = weight / (height * height);
    $(".bmi-result-number").html("<span>bmi : </span>" + bmi);
    // normal weihgt
    let perfectWeight = (height * height) * 23;
    $(".bmi-result-perfect").html("<span>best Weight for you : </span>" + Math.round(perfectWeight) + "<span>kg</span>");

    if (bmi >= 18.5 && bmi < 24.9) {
        if (perfectWeight > weight) {
            $(".bmi-result-need").html("<span>need to gain weight : </span>" + (Math.round(perfectWeight) - weight) + "<span>kg</span>");
        } else {
            $(".bmi-result-need").html("<span>need to loss : </span>" + (weight - Math.round(perfectWeight)) + "<span>kg</span>");
        }
    }

    if (bmi < 18.5) {
        // اكتبى اللى هيتنفذ فالحاله دى يا روناء حسب تصميمك
    } else if (bmi >= 18.5 && bmi < 24.9) {
        // اكتبى اللى هيتنفذ فالحاله دى يا روناء حسب تصميمك
    } else if (bmi >= 24.9) {
        // اكتبى اللى هيتنفذ فالحاله دى يا روناء حسب تصميمك
    } else if (bmi >= 30) {
        // اكتبى اللى هيتنفذ فالحاله دى يا روناء حسب تصميمك
    }
})
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

    // امنع عملية الريلود اللى الفورم بيعملها و هو بيبعت الداتا 
    e.preventDefault();

    var resultCon = $(".result-con").offset();
    console.log(resultCon.top)
    $(window).scrollTop((resultCon.top)-300);


    $(".result-con").css("flex-grow", "1");
    setTimeout(function () {
        $(".result-con .slide").slideDown(1000)
    }, 1500)

    // الحاجات اللى بنستلمها من الفورم
    let age = $("#age").val();
    let height = $("#height").val() / 100;
    let weight = $("#weight").val();
    // المعادله 
    let bmi = weight / (height * height);
    $(".bmi-result-number").html("<span>bmi : </span>" + bmi);
    // normal weihgt
    let perfectWeight = (height * height) * 25;
    $(".bmi-result-perfect").html("<span>best Weight for you : </span>" + Math.round(perfectWeight) + "<span>kg</span>");

    if (bmi >= 18.5 && bmi < 24.9) {
        $(".bmi-result-need").html("<span>you are good</span>");
    } else {
        if (perfectWeight > weight) {
            $(".bmi-result-need").html("<span>need to gain weight : </span>" + (Math.round(perfectWeight) - weight) + "<span>kg</span>");
        } else {
            $(".bmi-result-need").html("<span>need to loss : </span>" + (weight - Math.round(perfectWeight)) + "<span>kg</span>");
        }
    }

    if (bmi <= 18.5) {
        $(".bmi-result-text").html("<span>Your category : </span> Underweight");
        $(".wieght-img").attr("src", "img/min-18.svg")
        $(".bmi-result-advice").html("Try to increase your calorie intake by eating meals rich in calories and protein.<br>Find healthy ways to gain weight, such as eating snacks between main meals.");
    } else if (bmi > 18.5 && bmi <= 24.9) {
        $(".bmi-result-text").html("<span>Your category : </span>Normal weight");
        $(".wieght-img").attr("src", "img/18-24.svg")
        $(".bmi-result-advice").html("Maintain a healthy lifestyle, including good sleep and regular exercise.<br>Eat balanced meals that include vegetables, fruits and healthy proteins.")
    } else if (bmi > 24.9 && bmi <= 34.9) {
        $(".bmi-result-text").html("<span>Your category : </span>Obesity Class I");
        $(".wieght-img").attr("src", "img/24-30.svg")
        $(".bmi-result-advice").html("Do regular exercise and stay away from fatty and packaged foods.<br>Eat healthy foods while maintaining appropriate calories.")
    } else if (bmi > 34.9 && bmi <= 39.9) {
        $(".bmi-result-text").html("<span>Your category : </span>Obesity Class II");
        $(".wieght-img").attr("src", "img/more-30.svg")
        $(".bmi-result-advice").html("Start a proper exercise program and reduce the amount of sugars and saturated fats in food.<br>Consult your doctor for a personalized nutrition plan for your condition.")
    } else if (bmi > 39.9) {
        $(".bmi-result-text").html("<span>Your category : </span>Obesity Class III");
        $(".wieght-img").attr("src", "img/more-30.svg")
        $(".bmi-result-advice").html("Seek professional medical support to improve your overall health and risk of obesity-related chronic diseases.<br>Follow a healthy diet with a balanced exercise program to gradually lose excess weight.")
    }
})
'use strict';
$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");
});
(function ($) {
    $('.progress-bar-style').each(function () {
        var progress = $(this).data("progress");
        var prog_width = progress + '%';
        if (progress <= 100) {
            $(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
        } else {
            $(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
        }
    });
    $('.lan-prog').each(function () {
        var progress = $(this).data("lanprogesss");
        var ele = '<span></span>';
        var ele_fade = '<span class="fade-ele"></span>';
        for (var i = 1; i <= 5; i++) {
            if (i <= progress) {
                $(this).append(ele);
            } else {
                $(this).append(ele_fade);
            }
        }
    });
    if ($().circleProgress) {
        $("#progress1").circleProgress({
            value: 0.75,
            size: 175,
            thickness: 2,
            fill: "#40424a",
            emptyFill: "rgba(0, 0, 0, 0)"
        });
        $("#progress2").circleProgress({
            value: 0.83,
            size: 175,
            thickness: 2,
            fill: "#40424a",
            emptyFill: "rgba(0, 0, 0, 0)"
        });
        $("#progress3").circleProgress({
            value: 0.75,
            size: 175,
            thickness: 2,
            fill: "#ffffff",
            emptyFill: "rgba(0, 0, 0, 0)"
        });
        $("#progress4").circleProgress({
            value: 0.83,
            size: 175,
            thickness: 2,
            fill: "#ffffff",
            emptyFill: "rgba(0, 0, 0, 0)"
        });
        $("#progress5").circleProgress({
            value: 0.75,
            size: 175,
            thickness: 2,
            fill: "#009fff",
            emptyFill: "rgba(0, 0, 0, 0)"
        });
        $("#progress6").circleProgress({
            value: 0.83,
            size: 175,
            thickness: 2,
            fill: "#009fff",
            emptyFill: "rgba(0, 0, 0, 0)"
        });
    }
})(jQuery);
$(function() {
    fenlNav(); //二级导航





    function fenlNav() {
        $(".slided li").hover(function() {
                $(this).addClass("active");
                $(this).children("a").css("color", "#009d4a");
                $(this).children(".jtou").css("background", "url(img/jt-active.png)")
                $(".slided-tt").hide();
                $(this).children(".slided-tt").show();
            }, function() {
                $(this).removeClass("active");
                $(this).children("a").css("color", "#444");
                $(this).children(".jtou").css("background", "url(img/jt.png)")
                $(".slided-tt").hide();
            }

        )

        $(".flclick").click(function() {
            if ($(".slided").css("display") == 'none') {
                $(".slided").show()
            } else { $(".slided").hide() }
            $(".slided-tt").hide();
        });

    }


})

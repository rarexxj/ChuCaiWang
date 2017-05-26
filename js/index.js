$(function() {
    sideNav(); //左侧栏鼠标移文字显示
    mousescroll(); //左侧栏滚轮移动
    $(".sidenav .kb a").show();
    $(".sidenav .kb p").hide();

    function sideNav() {
        $(".sidenav li").hover(function() {
            $(this).children("p").hide();
            $(this).children("p").siblings().show();
        }, function() {
            $(this).children("p").show();
            $(this).children("p").siblings().hide();
        })
    }

    function mousescroll() {
        var koubHeight = document.getElementById("koub")

        $(document).on('scroll', function() {
            if (koubHeight.getBoundingClientRect().top <= 0) {
                $(".sidenav").css({ "position": "fixed", "left": "50%", "top": "10px", "margin-left": "-685px" });
            }

            if (koubHeight.getBoundingClientRect().top > 0) {
                $(".sidenav").css({ "position": "absolute", "left": "-90px", "top": "20px", "margin-left": "0px" })
            }

            $('.tpl-s').each(function(i) {
                var _this = $(this)
                if (_this[0].getBoundingClientRect().top >= 0 && _this[0].getBoundingClientRect().top < 150) {
                    var id = _this.attr('id')
                    $('.sidenav li a').hide()
                    $('.sidenav li p').show()
                    $('li[data-id=' + id + ']').find('p').hide()
                    $('li[data-id=' + id + ']').find('a').show()
                }
            })
        })
    }



    jQuery(".picScroll-left").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "leftLoop", vis: 6 });

    jQuery(".picScroll-left2").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "leftLoop", scroll: 4, vis: 4 });


    jQuery(".index-banner").slide({ mainCell: ".bd ul", autoPlay: true }); // banner棱播
})

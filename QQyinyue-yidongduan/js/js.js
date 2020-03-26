$(function() {
    var url = "http://api.cimns.com:8081/QQMusic/focus";
    $.ajax({
        type: 'get',
        dataType: 'JSON',
        url: url,
        success: function(data) {

            console.log(data.data.list)

            $.each(data.data.list, function(index, item) {
                $('<div class="swiper-slide"><a><img src="" alt=""></a></div>').prependTo($(".g-lunbo-img"))

            })
            $(".g-lunbo-img").children('div').each(function(index, item) {
                $(".g-lunbo-img").children('div').eq(index).find('img').attr('src', data.data.list[index].pic_info.url)
            })
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: true, //可选选项，自动滑动
                loop: true,
                initialSlide: 0, //初始显示的索引值
                // direction : 'vertical',//横竖轴切换
                speed: 500, //时间
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets', //圆点
                    // type: 'fraction',//分式
                    //type : 'progressbar',//进度条
                    //type : 'custom',//自定义
                    bulletElement: 'li', //设定分页器指示器（小点）的HTML标签。
                },
            })
        }
    })

    var mySwiper2 = new Swiper('.swiper-container2', {
        slidesPerView: 'auto',
    })
    var mySwiper3 = new Swiper('.swiper-container3', {
        slidesPerView: 'auto',
    })
    var mySwiper4 = new Swiper('.swiper-container4', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        slidesPerView: 'auto',
    })

    var url2 = "http://api.cimns.com:8081/QQMusic/hotrecom";
    $.ajax({
        type: 'get',
        dataType: 'JSON',
        url: url2,
        success: function(data) {
            console.log(data)
            var cid = []
            $.each(data.data, function(index, item) {
                $('.g-music-menu-inner').each(function(index, item) {
                    $('.g-music-menu-inner').eq(index).find('img').attr('src', data.data[index].cover)
                    $('.g-music-menu-inner').eq(index).children('p').html(data.data[index].title)
                    $('.g-music-menu-inner').eq(index).children('div').children('p').children('span').html(data.data[index].listen_num / 10000 + '万 ')
                    cid.push(data.data[index].content_id)
                })
            })
            $('.g-music-menu-inner').each(function(index, item) {
                $(this).click(function() {
                    console.log(this)
                    var url3 = "http://api.cimns.com:8081/QQMusic/playlist/detail";
                    $.ajax({
                        type: 'get',
                        dataType: 'JSON',
                        url: url3,
                        data: {
                            type: 1,
                            disstid: cid[index]
                        },
                        success: function(data) {
                            var musmid = []
                            console.log(data)
                            $('.music').children('ul').children('li').each(function(index, item) {

                                $('.paiming').eq(index).html(index + 1).next('span').html(data.songlist[index].songname)
                                $('.zuozhe').eq(index).html(data.songlist[index].singer[0].name)
                                musmid.push(data.songlist[index].songmid)
                                // if(data.songlist[index].songname==''){
                                //  $('music').children('ul').remove($('li').eq(index))
                                // }
                                $('.music').children('ul').children('li').eq(index).click(function() {
                                    var urlo = "http://api.cimns.com:8081/QQMusic/song/detail";
                                    $.ajax({
                                        type: 'get',
                                        dataType: 'json',
                                        url: urlo,
                                        data: {
                                            mid: data.songlist[index].songmid
                                        },
                                        success: function(data) {
                                            console.log(data)

                                        }
                                    })
                                })
                            })
                        }

                    })

                    $('.qiehuan').animate({ marginLeft: -($('.doc').width()) }, 250)
                    $('.icon-down2').click(function() {
                        $(window).scrollTop('0')
                        $('.zuozhe').each(function(index, item) {
                            $('.zuozhe').eq(index).html('')
                            $('.paiming').eq(index).next('span').html('')
                        })
                        $('.qiehuan').animate({ marginLeft: 0 }, 250)
                    })
                })
            })
            $('.g-music-menu-muc').width($('.g-music-menu-muc').children('div').length * $('.g-music-menu-muc').children('div').width())
            $(".g-music-menu-muc1").width($('.g-music-menu-inner').outerWidth(true) * $(".g-music-menu-muc1").children().length - 50)
            $(".g-music-menu-muc2").width($('.g-music-menu-inner').outerWidth(true) * $(".g-music-menu-muc2").children().length - 50)
        }
    })

    var url4 = "http://api.cimns.com:8081/QQMusic/newsong";
    $.ajax({
        type: 'get',
        dataType: 'JSON',
        url: url4,
        success: function(data) {
            console.log(data)

        }
    })

})
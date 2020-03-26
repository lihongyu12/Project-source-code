$(
    function() {







        //迷你拖拽
        var maxl = $(document).width() - $('.mini').outerWidth(true)
        var minl = 0
        var maxh = $(document).height() - $('.mini').outerHeight(true)
        $('.mini').mousedown(function(ev) {
            var x1 = ev.pageX - $('.mini').offset().left;
            var y1 = ev.pageY - $('.mini').offset().top;
            $(document).mousemove(function(ev) {
                var x3 = ev.pageX - x1;
                var y3 = ev.pageY - y1;
                x3 = x3 < minl ? minl : x3;
                x3 = x3 > maxl ? maxl : x3;
                y3 = y3 < minl ? minl : y3;
                y3 = y3 > maxh ? maxh : y3;
                $('.mini').css('left', x3)
                $('.mini').css('top', y3)
            })
            $(document).mouseup(function() {
                $(document).off()
            })
            return false;
        })
        //
        //
        $('.g-inner').children('.g-inner-hd').children('ul').children('li').eq(7).click(function() {
            $('.doc').hide(500)
            $('.mini').show(500)
            var dis = true;
            $('.mini-img').children('img').click(function() {

                $('.mini-zhuaji').children('img').attr('src', $('.mini-img').children('img').attr('src'))
                $('.mini-zhuaji').toggle()
            })
            $('.mini-img').children('div').children('i').eq(1).click(function() {
                $('.doc').show(500)
                $('.mini').hide(500)
            })
        })


        $('.xuanping').click(function() {
            $('.music-geci-bottom').css('display', 'none');

            function toggleFullScreen() {
                if (!document.fullscreenElement && // alternative standard method
                    !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                } else {
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            }

            toggleFullScreen();


        })


        var play = document.querySelector('audio');
        var url = "http://api.cimns.com:8081/QQMusic/focus";
        $.ajax({
            type: 'get',
            dataType: 'JSON',
            url: url,
            success: function(data) {

                console.log(data.data.list)

                $.each(data.data.list, function(index, item) {
                    $('<div class="swiper-slide"><img src="" alt=""></div>').prependTo($(".swiper-container .swiper-wrapper"))

                })

                $(".swiper-container .swiper-slide").each(function(index, item) {
                    $(".swiper-container .swiper-slide").eq(index).children('img').attr('src', data.data.list[index].pic_info.url)
                })
                certifySwiper = new Swiper('#certify .swiper-container', {
                    watchSlidesProgress: true, //开启这个参数来计算每个slide的progress
                    slidesPerView: 'auto', //设置slider容器能够同时显示的slides数量
                    centeredSlides: true, //设定为true时，active slide会居中，而不是默认状态下的居左
                    loop: true,
                    loopedSlides: 5, //可是slide个数
                    autoplay: true, //自动播放
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }, //按钮
                    pagination: {
                        el: '.swiper-pagination',
                        // clickable :true,
                    }, //导航
                    on: {
                        progress: function(progress) { //回调函数，当Swiper的progress被改变时执行。接受Swiper的progress作为参数
                            for (i = 0; i < this.slides.length; i++) {
                                var slide = this.slides.eq(i);
                                var slideProgress = this.slides[i].progress;
                                modify = 1;
                                if (Math.abs(slideProgress) > 1) {
                                    modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                                }
                                translate = slideProgress * modify * 260 + 'px';
                                scale = 1 - Math.abs(slideProgress) / 5;
                                zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                                slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                                slide.css('zIndex', zIndex);
                                slide.css('opacity', 1);
                                if (Math.abs(slideProgress) > 3) {
                                    slide.css('opacity', 0);
                                }
                            }
                        },
                        setTransition: function(transition) {
                            for (var i = 0; i < this.slides.length; i++) {
                                var slide = this.slides.eq(i)
                                slide.transition(transition);
                            }

                        } //
                    }

                })

            }
        })


        /////////////////
        var url2 = "http://api.cimns.com:8081/QQMusic/hotrecom";
        $.ajax({
            type: 'get',
            dataType: 'JSON',
            url: url2,
            success: function(data) {
                var music_tit = [];
                console.log(data)
                var cid = []


                $.each(data.data, function(index, item) {

                    $(`<li class="swiper-slide">
                            <div>
                                <img src="${data.data[index].cover}" alt="">
                                <p>${data.data[index].username}</p>
                            </div>
                            <p>${data.data[index].title}</p>
                        </li>`).appendTo($('.g-inner-tui ul'))

                    cid.push(data.data[index])
                    music_tit.push(data.data)

                    $('.swiper-container2 .swiper-wrapper').children('li').click(function() {
                        $('.g-inner-bd').hide(500)
                        $('.g-inner-bd2').show(500)

                    })
                    $('.g-inner-hd').children('ul').children('li').eq(0).click(function() {
                        $('.g-inner-bd').show(500)
                        $('.g-inner-bd2').hide(500)
                    })


                    // $('.g-music-menu-inner').each(function(index, item) {
                    //     $('.g-music-menu-inner').eq(index).find('img').attr('src', data.data[index].cover)
                    //     $('.g-music-menu-inner').eq(index).children('p').html(data.data[index].title)
                    //     $('.g-music-menu-inner').eq(index).children('div').children('p').children('span').html(data.data[index].listen_num / 10000 + '万 ')

                    // })
                })
                var mySwiper = new Swiper('.swiper-container2', {
                    slidesPerView: 'auto',
                })
                var kong = null
                $('.g-inner-tui ul li').each(function(index, item) {
                    $(this).click(function() {

                        $(".music-menu-music").html('');
                        $(".music-type-img").children('img').attr('src', $(this).find('img').attr('src'));
                        $(".music-type-xin").children('h3').html($(this).children('p').html())


                        $('.g-inner-play-img').children('img').attr('src', )
                        var url3 = "http://api.cimns.com:8081/QQMusic/playlist/detail";

                        $.ajax({
                            type: 'get',
                            dataType: 'JSON',
                            url: url3,
                            data: {
                                type: 1,
                                disstid: cid[index].content_id
                            },
                            success: function(data) {
                               
                                var musmid = []
                                console.log(data)
                                $(".music-menu-length").html('歌曲' + '(' + data.songlist.length + ')')
                                $.each(data.songlist, function(index, item) {
                                    console.log(data.songlist[index].interval)
                                    var num = parseInt(data.songlist[index].interval / 60);
                                    var num1 = parseInt(data.songlist[index].interval % 60 / 10);
                                    var num2 = parseInt(data.songlist[index].interval % 60 % 10);
                                    var num3 = '0';
                                    $(`
                                       <li>
                                            <span class="music-name">${data.songlist[index].songname}</span>
                                            <span class="music-zuo">${data.songlist[index].singer[0].name}</span>
                                            <span class="music-zhuan">${data.songlist[index].albumname}</span>
                                            <span class="music-time">${num3+num+':'+num1+num2}</span>
                                       </li> 
                                        `).appendTo($(".music-menu-music"))
                                    musmid.push(data.songlist[index].songmid)
                                    $('.music-menu-music').children('li').eq(index).click(function() {

                                        var urlo = "http://api.cimns.com:8081/QQMusic/song/detail";
                                        clearInterval(kong);
                                        $(".tiao").width(0)
                                        $('.g-inner-play-jindu-2').width(0)
                                        $('.geci-dong').html('')
                                        //进度条
                                        var tiaoW = $('.tiao').parent('span').width() / data.songlist[index].interval;

                                        var xcv = 0
                                        var nm = "0";
                                        
                                        kong = setInterval(function() {

                                        var nm2 = parseInt(play.currentTime/60);
                                        var nm3 = parseInt(play.currentTime%60/10);
                                        var nm4 = parseInt(play.currentTime%60%10);
                                            
                                            if (nm4 == num2 && nm3 == num1 && nm2 == num) {
                                                clearInterval(kong)
                                            }
                                            $('.g-inner-play-star').html(nm + nm2 + ":" + nm3 + nm4)

                                            xcv = tiaoW*play.currentTime
                                            $(".tiao").width(xcv)
                                            $('.g-inner-play-jindu-2').width(xcv)

                                        }, 1000)
                                        
                                        $(".g-inner-play-jindu-2").parent("span").click(function(ev){
                                            
                                            var x12 = ev.pageX - $('.g-inner-play-jindu-2').offset().left;
                                             $(".g-inner-play-jindu-2").width(x12)
                                             play.currentTime=x12/tiaoW

                                        })
                                        $(".tiao").parent("span").click(function(ev){
                                            
                                            var x13 = ev.pageX - $('.tiao').offset().left;
                                             $(".tiao").width(x13)
                                             play.currentTime=x13/tiaoW


                                        })




                                        $.ajax({
                                            type: 'get',
                                            dataType: 'json',
                                            url: urlo,
                                            data: {
                                                mid: musmid[index]

                                            },
                                            success: function(data) {


                                                var xcv = 0
                                                var nm = "0";
                                                var nm2 = 0;
                                                var nm3 = 0;
                                                var nm4 = 0;
                                                // $('.g-inner-play-img').children('img').attr('src',)
                                                $('.g-inner-play-musicname').html($('.music-menu-music').children('li').eq(index).children('span').filter('.music-name').html())

                                                $('.g-inner-play-end').html($('.music-menu-music').children('li').eq(index).children('span').filter('.music-time').html())
                                                play.src = (data.sip[0] + data.purl);
                                                var ope = false;
                                                $('.g-aside-play2 ul').children('li').eq(1).children('i').html('&#xe775;')
                                                $('.g-aside-play ul').children('li').eq(1).children('i').html('&#xe775;')
                                                $('.g-aside-play3 ul').children('li').eq(1).children('i').html('&#xe775;')
                                                play.play();


                                                $('.g-aside-play ul').children('li').eq(1).click(function() {
                                                    
                                                    if (ope == true) {
                                                        play.play();
                                                        $('.g-aside-play3 ul').children('li').eq(1).children('i').html('&#xe775;')
                                                        $('.g-aside-play ul').children('li').eq(1).children('i').html('&#xe775;')
                                                        $('.g-aside-play2 ul').children('li').eq(1).children('i').html('&#xe775;')
                                                        ope = false;
                                                    } else {
                                                        play.pause()
                                                        $('.g-aside-play3 ul').children('li').eq(1).children('i').html('&#xe600;')
                                                        $('.g-aside-play ul').children('li').eq(1).children('i').html('&#xe600;')
                                                        $('.g-aside-play2 ul').children('li').eq(1).children('i').html('&#xe600;')
                                                        ope = true;
                                                        
                                                    }
                                                                                                   })

                                                $('.g-aside-play2 ul').children('li').eq(1).click(function() {
                                                    
                                                    if (ope == true) {
                                                        play.play();
                                                        $('.g-aside-play3 ul').children('li').eq(1).children('i').html('&#xe775;')
                                                        $('.g-aside-play2 ul').children('li').eq(1).children('i').html('&#xe775;')
                                                        $('.g-aside-play ul').children('li').eq(1).children('i').html('&#xe775;')
                                                        ope = false;
                                                    } else {
                                                        play.pause()
                                                        $('.g-aside-play3 ul').children('li').eq(1).children('i').html('&#xe600;')
                                                        $('.g-aside-play2 ul').children('li').eq(1).children('i').html('&#xe600;')
                                                        $('.g-aside-play ul').children('li').eq(1).children('i').html('&#xe600;')
                                                        ope = true;
                                                        
                                                    }


                                                })
                                                $('.g-aside-play3 ul').children('li').eq(1).click(function() {
                                                    if (ope == true) {
                                                        play.play();
                                                        $('.g-aside-play3 ul').children('li').eq(1).children('i').html('&#xe775;')
                                                        $('.g-aside-play2 ul').children('li').eq(1).children('i').html('&#xe775;')
                                                        $('.g-aside-play ul').children('li').eq(1).children('i').html('&#xe775;')
                                                        ope = false;
                                                    } else {
                                                        play.pause()
                                                        $('.g-aside-play3 ul').children('li').eq(1).children('i').html('&#xe600;')
                                                        $('.g-aside-play2 ul').children('li').eq(1).children('i').html('&#xe600;')
                                                        $('.g-aside-play ul').children('li').eq(1).children('i').html('&#xe600;')
                                                        ope = true;
                                                    }
                                                })


                                                // music-geci-hd
                                                // var karr = []
                                                
                                                // console.log(data.lyric.split(","))
                                                // var gc = data.lyric.split("[")
                                                // for (var i = 1; i < gc.length; i++) {
                                                //     var gc2 = gc[i].split("]")
                                                    
                                                //     $(`<p>${gc2[1]}  </P>`).appendTo($('.music-geci-ci'))
                                                //     var gc3 = gc2[0].split(":")
                                                //     karr.push(gc3) 
                                                   
                                                // }
                                                
                                                // $.each(karr,function(index,item){
                                                //     if(parseInt(item[0])>=parseInt(play.currentTime/60)&&parseInt(item[1])>=parseInt(play.currentTime%60) ){
                                                //               $(".music-geci-ci").children('p').eq(i).css("lineHeight",'50px')
                                                //                $(".music-geci-ci").children('p').eq(i).css('color','blue')
                                                //     }
                                                //     console.log(item)
                                                // })
                                              
function tc3(time) {
    var arr=time.split(':');
    return parseFloat(arr[0])*60+ parseFloat(arr[1])
}
$('.music-geci-ci .geci-dong').css('position','absolute').css('top','0px')

$('.music-geci-ci').css('position','relative')
                 var ci=data.lyric.split('\n');
                $('.geci-dong').empty();
                $.each(ci,function (index,item) {
                    var pci=item.split(']');
                    pci[0]=tc3(pci[0].substring(1));
                    var p=$('<p></p>');
                    p.html(pci[1]);
                    $('.geci-dong').append(p);
                    
                    ci[index]=pci;
                })
  
             
             play.addEventListener("timeupdate",function(){

 
                    for(var i=0;i<ci.length;i++){
                       // $('.music-geci-ci .geci-dong').children('p').eq(i).height(47)
                        
                        if(play.currentTime>=ci[i][0]&&play.currentTime<ci[i+1][0]){
                                $('.music-geci-ci .geci-dong').animate({top:-47*i})
                                $('.music-geci-ci .geci-dong').children('p').eq(i).css('color','#24ec24').siblings().css('color','#1d1d1d');   

                        }
                  
                    }



             },false)






                                                $('.g-inner .g-inner-play-img').click(function() {
                                                    $('.doc').hide(500)
                                                    $('.music-play-jiemian').show(500)
                                                    $(".music-geci-zhuanji").html(music_tit[index].albumname)
                                                    $('.music-geci-geshou').html(music_tit[index].singer[0].name)
                                                    $('.music-geci-hd').children('h5').html($('.g-inner-play-musicname').html())
                                                })
                                                $('.fanhui').click(function() {
                                                    $('.doc').show(500);
                                                    $('.music-play-jiemian').hide(500);
                                                })
                                            }
                                        })
                                    })


                                })





                            }

                        })


                    })
                })



            }



        })


    })
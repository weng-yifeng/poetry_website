$(document).ready(function(e) {


// 大轮播图部分开始

//获取整个轮播图大div
    var $imageCarousel = $('#imageCarousel');
//获取图片集合
    var $pic = $('#pic');
//获取小圆圈按钮的集合
    var $btn_span = $('#buttons span');
//获取左箭头
    var $pre = $('#pre');
//获取右箭头
    var $next = $('#next');
//设置轮播图高度为宽度的0.4
    $imageCarousel.height($imageCarousel.width() * 0.4);
// 设置每张图片的宽度和轮播框一样
    $pic.children().width($imageCarousel.width());

//箭头点击触发然后pic改变左距离
    function move(change) {
        //定义每次移动后的Left值，change为一张图片宽度
        var Left = pic.offsetLeft + change;
        //设置定时器让图片运动切换
        var speed = change/5;//每次移动的距离，分5次移动；
        run();
        //定时器
        function run () {
            if ( (speed > 0 && pic.offsetLeft < Left)
                || (speed < 0 && pic.offsetLeft > Left)) {
                //分5次改变left值，直到满足切换条件
                $pic.css('left', pic.offsetLeft + speed);
                //超时定时器
                setTimeout(run,50);//每次运动间隔时间，所以切换一张图片运动时间为5*50=250毫秒
            } else {
                //切换图片
                $pic.css('left',Left);
                //当left变到不恰当范围的时候，把left变回范围内
                if (Left > ($imageCarousel.width()*(-1))) {
                    $pic.css('left',$imageCarousel.width()*(-5));
                }
                if (Left < ($imageCarousel.width()*(-5))) {
                    $pic.css('left',$imageCarousel.width()*(-1));
                }
            }
        }

    }
// 给所有按钮加一个待改变的样式
    $btn_span.addClass('unon');
//默认第一个span加class='on'
    $btn_span.eq(0).addClass('on');

//右箭头点击触发然后pic改变左距离
    $next.on('click', function () {
        move($imageCarousel.width()*(-1));
        //一点击就先重置所有按钮的className
        $btn_span.removeClass('on');
        //计算第几个span按钮要加className
        var x = Math.floor($pic.offset().left/($imageCarousel.width()*(-1)));
        //当x等于4的时候是第五张图片点击向下一张，所以要跳回第一张图片对应的按钮；
        if (x == 5){
            return $btn_span.eq(0).addClass('on');
        }
        //如果x不是等于4
        $btn_span.eq(x).addClass('on');
    });

//左箭头点击触发然后pic改变左距离
    $pre.on('click', function () {
        move($imageCarousel.width());
        //一点击就先重置所有按钮的className
        $btn_span.removeClass('on');
        //计算第几个span按钮要加className
        var x = Math.floor($pic.offset().left/($imageCarousel.width()*(-1)));
        //当x等于0的时候是第1张图片向前点击，所以要跳回第5张图片对应的按钮；
        if (x == 0){
            return $btn_span.eq(4).addClass('on');
        }
        //如果x不是等于0
        $btn_span.eq(x-1).addClass('on');
    });

//点击按钮会跳到对应按钮图片位置并按钮加上样式
    $btn_span.on('click', function () {
        if($(this).className == 'on') {
            return;
        }
        var x =  Math.floor(parseInt($pic.offset().left)/($imageCarousel.width()*(-1)));
        var j = parseInt($(this).attr('id')[1]);
        //获取当前按钮是第几个按钮
        var a = $imageCarousel.width()*(-1) * (j - x - 1); //移动的距离
        move(a);
        $btn_span.removeClass('on');
        $(this).addClass('on');
    });

//声明变量，用来自动播放
    var autorun;
//自动播放函数
    function start() {
        autorun = setInterval(function () {
            $next.click();
        },4000);
    }
//停止自动播放
    function stop () {
        clearInterval(autorun);
    }
//鼠标移到图片轮播区域就停止自动播放
    $imageCarousel.on('mouseover',function () {
        stop();
    });
//鼠标移出图片轮播区域就开始自动播放
    $imageCarousel.on('mouseout',function () {
        start();
    });
    start();


// 大轮播图部分结束



// 诗友大轮播图部分开始
//获取整个轮播图大div
    var $imageCarousel_ul = $('#imageCarousel_ul');
//获取图片集合
    var $tuijian = $('#tuijian');
//获取左箭头
    var $pre_2 = $('#pre_2');
//获取右箭头
    var $next_2 = $('#next_2');

    function win_width() {
        var wWidth = $(window).width();//获取可视区域高度
        //设置轮播图高度为宽度的0.5
        if(wWidth > 500) {
            $imageCarousel_ul.height($imageCarousel_ul.width() * 0.2);
        } else if(wWidth <= 500 && wWidth>260){
            $imageCarousel_ul.height($imageCarousel_ul.width() * 0.25);
        } else if(wWidth <= 260){
            $imageCarousel_ul.height($imageCarousel_ul.width() * 0.35);
        }
    }
    win_width();
// // 设置每张图片的宽度和轮播框一样
// $tuijian.children().width($imageCarousel_ul.width());

//箭头点击触发然后tuijian改变左距离
    function move2(change) {
        //定义每次移动后的Left值，change为一张图片宽度
        var Left = tuijian.offsetLeft + change;
        //设置定时器让图片运动切换
        var speed = change;//每次移动的距离，分5次移动；
        run();
        //定时器
        function run () {
            if ( (speed > 0 && tuijian.offsetLeft < Left)
                || (speed < 0 && tuijian.offsetLeft > Left)) {
                //分5次改变left值，直到满足切换条件
                $tuijian.css('left', tuijian.offsetLeft + speed);
                //超时定时器
                setTimeout(run,100);//每次运动间隔时间，所以切换一张图片运动时间为5*50=250毫秒
            } else {
                //切换图片
                $tuijian.css('left',Left);
                //当left变到不恰当范围的时候，把left变回范围内
                if (Left > ($imageCarousel_ul.width()*(-1))) {
                    $tuijian.css('left',$imageCarousel_ul.width()*(-5));
                }
                if (Left < ($imageCarousel_ul.width()*(-5))) {
                    $tuijian.css('left',$imageCarousel_ul.width()*(-1));
                }
            }
        }
    }

//右箭头点击触发然后tuijian改变左距离
    $next_2.on('click', function () {
        move2($imageCarousel_ul.width()*(-1));
    });

//左箭头点击触发然后tuijian改变左距离
    $pre_2.on('click', function () {
        move2($imageCarousel_ul.width());
    });

//声明变量，用来自动播放
    var autorun_2;
//自动播放函数
    function start_2() {
        autorun_2 = setInterval(function () {
            $next_2.click();
        },5000);
    }
//停止自动播放
    function stop_2 () {
        clearInterval(autorun_2);
    }
//鼠标移到图片轮播区域就停止自动播放
    $imageCarousel_ul.on('mouseover',function () {
        stop_2();
    });
    $next_2.on('mouseover',function () {
        stop_2();
    });
    $pre_2.on('mouseover',function () {
        stop_2();
    });
//鼠标移出图片轮播区域就开始自动播放
    $imageCarousel_ul.on('mouseout',function () {
        start_2();
    });
    $next_2.on('mouseout',function () {
        start_2();
    });
    $pre_2.on('mouseout',function () {
        start_2();
    });

    start_2();

// 诗友大轮播图部分结束


// 注册模块开始
// 点击注册按钮
    var screen = $('#screen');
    var signUpContainer = $('#signUpContainer');
    $('#sign').on('click',function () {
        screen.show();
        signUpContainer.show();
    });
// 点击关闭按钮
    var passTips =  $('#passTips');
    var tips =  $('#tips');
    var sign_text = $('.sign_text');
$('#signUpClose').on('click',function () {
    screen.hide();
    signUpContainer.hide();
    passTips.hide();
    tips.hide();
    sign_text.css('border','').val('');
    });
//各种验证正则匹配
//字母数字下划线字符数4-15个字符
    var pUser = /^(\w{4,15})$/;
//邮件格式
    var pEmail =/^([\w\.\-]+)@([\w\.\-]+)\.([\w]{2,4})$/;
//声明用来赋值最后判断注册条件是否成立
    var checkUser = 0;
    var checkEmail = 0;
    var checkPassword = 0;
    var checkPassword2 = 0;
    var signButton = $('#signButton');
 // 输入框不正确格式的效果以及对于注册按钮效果
    function wrong(a,b) {
        tips.show();
        tips.find('p').html(b);
        a.css('border','1px solid #FF6D00');
        signButton.css({
            'color':'',
            'background-color':''
        });
    }
 // 输入框正确或者没内容的效果及对应注册按钮效果
    function righter(a) {
        tips.hide();
        a.css('border','');
    }
// 用户名的验证，输入框失去焦点后判断
    var user = $('#user');
    user.on('blur',function () {
    if(user.val().length !== 0
    && pUser.test(user.val()) == false) {
        wrong(user,'错误提示：用户名4-15字符，可以是大小写字母、数字、下划线。');
        checkUser = 0;
    } else {
       righter(user);
        checkUser = 0;
    }
    if(pUser.test(user.val())==true){
        checkUser = 1;
    }
});
// 邮箱验证，输入框失去焦点判断
    var email = $('#email');
    email.on('blur',function () {
    if(email.val().length !== 0
    && pEmail.test(email.val())==false){
       wrong(email,'错误提示：请输入正确的邮箱');
       checkEmail = 0;
    } else {
        righter(email);
        checkEmail = 0;
    }
    if(pEmail.test(email.val())==true){
        checkEmail = 1;
    }
});
// 密码的验证，输入框失去焦点判断
    var passTips = $('#passTips');
    var password = $("#password");
    password.on('blur',function () {
        if(password.val().length !==0
        && password.val().length < 6){
            wrong(password,'密码必须大于6个字符');
            checkPassword = 0;
        } else if(password.val().length>16){
            wrong(password,'密码必须小于16个字符');
            checkPassword = 0;
        } else if(password.val().length == 0 ){
            righter(password);
            checkPassword = 0;
        } else if(password.val()>6
            && password.val().length<9
            && /\d/g.test(password.val()) == true
            && /[a-z]/ig.test(password.val()) ==true){
            righter(password);
            passTips.show();
            passTips.css({
                'display':'block',
                'background':'url("../images/zhong.png")',
            });
        }  else if(password.val()>9
            && password.val().length<16
            && /\d/g.test(password.val()) == true
            && /[a-z]/g.test(password.val()) ==true
            && /[A-Z]/g.test(password.val()) ==true){
            righter(password);
            passTips.show();
            passTips.css({
                'display':'block',
                'background':'url("../images/qiang.png")',
            });
        } else{
            righter(password);
            passTips.show();
            passTips.css({
                'display':'block',
                'background':'url("../images/ruo.png")',
            });
        }
})


// 注册模块结束

})


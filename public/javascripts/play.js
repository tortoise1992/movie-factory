import config from '../config/config'

(function ($,window,config) {
    var url=config.host+config.path+config.query;
    var videoUrl='';
    $('.video-click .ready').on('click',function () {
        var inputs=$('#originAddress').val();
        if(/<|>/.test(inputs)){
            alert('我去你妈的！');
            return;
        }
        if(inputs){
            videoUrl=url+inputs;
            $('.video-tips').hide();
            $('#video-play').attr('src',videoUrl);
        }else {
            alert('你还没有输入想看的视频地址，快去输入吧')
            return
        }
    })
    $('.video-click .reset').on('click',function () {
        if(/<|>/.test($('#originAddress').val())){
            alert('我去你妈的！');
            return;
        }
        $('#originAddress').val('');
    })
})(jQuery,window,config)

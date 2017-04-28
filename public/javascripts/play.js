/**
 * Created by Administrator on 2017/4/28.
 */
$(function () {
    var baseUrl="http://www.65yw.com/chaojikan.php?url=";
    var videoUrl='';
    $('.video-click .ready').on('click',function () {
        var inputs=$('#originAddress').val();
        if(inputs){
            videoUrl=baseUrl+inputs;
            $('.video-tips').hide();
            $('#video-play').attr('src',videoUrl);
        }else {
            alert('你还没有输入想看的视频地址，快去输入吧')
            return
        }
    })
    $('.video-click .reset').on('click',function () {
        $('#originAddress').val('');
    })
})
$("#r_email").blur( function () {
    var re = /^[a-zA-Z0-9|.]+@[a-zA-Z0-9]+.[a-zA-Z]+$/;
    if(!re.test(email)){
        $("#r_email").html('<span>邮箱格式不正确</span>');
    }
})
$("#r_UserName").blur(function () {
    if ($("#r_UserName").val()==""&&$("#nameerror").length<=0){
        $(".register_form input.r_UserName").before('<span id="nameerror" style="display:inline-block;color:red;padding-top:-12px">必须填写用户名</span>');
    }
    else if ($("#r_UserName").val()!=""&&$("#nameerror").length>0) {
        $("#nameerror").remove();

    }
})

$("#r_password").blur(function () {
    if ($("#r_password").val()==""){
        $("#r_password").val("必须填写密码");
    }
})
function shake() {
    $(".form").removeClass('shake_effect');
    setTimeout(function()
    {
        $(".form").addClass('shake_effect')
    },1);
}

function check_login() {
    var name=$('#user_name').val();
    var password=$('#password').val();
    if(name =="dazi"&&password=="19950129"){
        alert("登录成功");
        $("#user_name").val("");
        $("#password").val("");
    }
    else{
        shake();
    }

}

function check_register(){
    var name = $("#r_UserName").val();
    var password = $("#r_password").val();
    var email = $("#r_email").val();
    var re = /^[a-zA-Z0-9|.]+@[a-zA-Z0-9]+.[a-zA-Z]+$/;
    if(!re.test(email)){
        $("#r_email").val("请填写正确邮箱格式");
        shake();
    }
    else if (name==''&&password==''){
        alert("不能有空项");
        shake();
    }
    else{
        alert("注册成功");
        $("#r_email").val("");
        $("#r_password").val("");
    }

}
$(function(){
    $("#create").click(function(){
        check_register();
        return false;
    })
    $("#login").click(function(){
        check_login();
        return false;
    })
    $('.message a').click(function () {
        $('form').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 'slow');
    });
})
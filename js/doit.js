var pnum = document.querySelector('#number')
var rebtn = document.querySelector('.rebtn')
var con1 = document.querySelector('.contry1')
var border = window.getComputedStyle(con1, null).border;
var password = document.querySelector('#password');
var passwordagain = document.querySelector('#passwordagain');
var con3 = document.querySelector('.contry3')
var con4 = document.querySelector('.contry4')

rebtn.onclick = function () {
    var pv = pnum.value;
    var pvv = password.value;
    var pvv1 = passwordagain.value;
    var phzz = new RegExp(/^[1](([2-6][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/);
    if (phzz.test(pv) == true && pvv == pvv) {
        ajax({
            url: 'data/login2.php',
            type: 'get',
            data: 'act=add&user=' + pv + '&pass=' + pvv,
            success: function (data) {
                var json = JSON.parse(data);
                alert(json.msg);
            },
            failed: function (code) {
                alert('错误' + code);
            }
        });

    } else {

        alert('注册失败')
    }
    if (!phzz.test(pv) == true) {
        con1.style.cssText = 'border:1px solid red';
        alert('手机号格式有误')
    }else{
        con1.style.cssText = 'border: 1px solid #d9d9d9;';  
    }
    if (pvv == pvv1) {
        con3.style.cssText = 'border: 1px solid #d9d9d9;';  
        con4.style.cssText = 'border: 1px solid #d9d9d9;';  
    } else {
        alert('密码错误')
        con3.style.cssText = 'border:1px solid red';
        con4.style.cssText = 'border:1px solid red';
    }


};
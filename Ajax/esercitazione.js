
var session_id;

function requestImage(){
	$.ajax({
		url:'http://www.dais.unive.it/~cosmo/esercitazione3/captcha.php?callback=?&getIdentifier',
		type: 'GET',
		dataType: 'jsonp',
	}).then(function(data){
		session_id= data.id;
		return 	 $.ajax({
					url: ' http://www.dais.unive.it/~cosmo/esercitazione3/captcha.php?callback=?&getImage&id='+ session_id,
					type: 'GET',
					dataType: 'jsonp',
				});
	}).done(function(data){
		document.getElementById('captcha').src = 'http://www.dais.unive.it/~cosmo/esercitazione3/' + data.url;
	}).fail(function(){
		alert('richeista fallita');
	});
}

function sendCaptcha(codice){
    $.ajax({
            url:'http://www.dais.unive.it/~cosmo/esercitazione3/captcha.php?callback=?&sendCode&id='+session_id+'&code='+codice,
            type: 'POST',
            dataType:'jsonp',
        }).done(function(data){
            if(data.auth == true){
                $("body").remove();
                var body= document.createElement("body");
                var text= document.createElement("h1");
                text.innerHTML="Autenticazione riuscita";
                document.body=body;
                body.append(text);
            }else{
                document.getElementById('captcha_code').value= "";
                requestImage();
            }
        });
    }

$(document).ready(function(){
    requestImage();
    var codice;
    $('#ok').click(function(){
        codice = $("#captcha_code").val();
        console.log(codice);
        sendCaptcha(codice);
    });
});
// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
$('#btn_sonido').click(function(){
if( $('#btn_sonido').hasClass('ui-icon-audio'))
{
//Apagar audio
$ ('#btn_sonido').removeClass('ui-icon-audio');
$ ('#btn_sonido').addClass('ui-icon-bars')
alert('Se apagó el sonido');
}
else
{
//Encender audio
$ ('#btn_sonido').removeClass('ui-icon-bars');
$ ('#btn_sonido').addClass('ui-icon-audio');
navigatior.notification.beep(1);
alert('Se encendio el sonido');
}
});//click a btn_sonido
//}); 
});
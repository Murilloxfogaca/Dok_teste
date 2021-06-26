$(function(){
	'use strict';

    // Para fazer a animação do pedido de correção do form
    $('form .alert').on('click', function (e) {
        $(this).hide();
    });

  $('form').on('submit', function (e) {
    e.preventDefault();
    $('#verificar_msg').hide();
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var etapas = 0;

    //Verifica o form do nome se está indo com sobrenome
    var nome = $("#nome").val();
    const verificaEspaco = (string) => string.indexOf(' ') >= 0;
    if(!verificaEspaco(nome)){
        $('#verificar_nome').show();
        $("#nome").val("");
    } else {
        $('#verificar_nome').hide();
        etapas = etapas + 1;
    }


    //Verifica o form do nome se está indo com sobrenome
    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test( $email );
    }

    //Verifica o form do email se está indo correto
    var email = $("#email").val();
    if(!validateEmail(email) || email.length < 6){
        $('#verificar_email').show();
        $("#email").val("");
    } else {
        $('#verificar_email').hide();
        etapas = etapas + 1;
    }
    

    //Dá um checkup se os dois acima estão corretos para poder enviar
    if(etapas == 2){
        $.ajax({
            type: 'post',
            url: baseUrl+'/acao.php',
            data: {'email':$('input[name="email"]').val(),'nome':$('input[name="nome"]').val()},
            dataType: 'json',
            success: function (response) {
              if (response) {
                console.log(response);
                $('#verificar_msg').html('Contato cadastrado');
              } else {
                $('#verificar_msg').html('Erro ao enviar mensagem');
              }
            },
            error:function(exception){
              console.log('error');
            },
            complete:function(){
                $('#verificar_msg').show();
            }
        });
    }

    });
});

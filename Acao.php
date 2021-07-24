<?php
// O que dispara o email
if (isset($_POST)) {
	/*$voltar = "#"; // COLOCAR EXTENSÃO (.PHP, .HTML)
	$emaildestinatario = 'email_do_contato';
	$mensagemHTML = '';
	$headers   =   "MIME-Version: 1.1\r\n";
	$headers  .=   "Content-type: text/html; charset=utf-8\r\n";
	$headers  .=   "From: EnviaForm@naoresponda.com.br\r\n";
	$headers  .=   "Return-Path: $emaildestinatario \r\n";
	$assunto = 'Contato via site de '.$fullname.' ';
	$envio   =  mail($emaildestinatario, $assunto, $mensagemHTML, $headers); 
	Só para testes por enquanto*/
	$envio = true;
	echo json_encode($envio);
	} 
else {
	$envio = true;
	echo json_encode($envio);
}
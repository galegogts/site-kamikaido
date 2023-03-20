<?php
  //Variáveis
  $email = $_POST['email'];
  $assunto = "newsletter";
  //$mensagem = $_POST['mensagem'];
  //$data_envio = date('d/m/Y');
  //$hora_envio = date('H:i:s');

  //Compo E-mail
  $arquivo = "
    <html>
      <p><b>E-mail: </b>$email</p>
      <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
  ";
  
  //Emails para quem será enviado o formulário
  $destino = "contact@blackmambagames.com";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=UTF-8\n";
  $headers .= "From: $nome <$email>";

  //Enviar
  mail($destino, $assunto, $arquivo, $headers);
  
  echo "<script>alert('E-mail sent');window.location='../index.html'</script>";
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dados do formulário
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
    $assunto = filter_input(INPUT_POST, 'assunto', FILTER_SANITIZE_STRING);
    $mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING);

    // Validação
    if (empty($nome) || empty($email) || empty($mensagem)) {
        header("Location: contato.php?status=erro");
        exit;
    }

    // Corpo do e-mail
    $corpo = "
        Nome: $nome\n
        E-mail: $email\n
        Telefone: $telefone\n
        Assunto: $assunto\n
        Mensagem:\n $mensagem
    ";

    // Configurações
    $para = "margareth@r4mpolidores.com.br"; // Seu e-mail
    $assunto_email = "Novo contato do site: " . ucfirst($assunto);
    $headers = "From: formulario@r4mpolidores.com.br\r\n"; // Use um e-mail do seu domínio
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envio e redirecionamento
    if (mail($para, $assunto_email, $corpo, $headers)) {
        header("Location: contato.php?status=sucesso");
    } else {
        header("Location: contato.php?status=erro");
    }
    exit;
} else {
    header("Location: contato.php");
    exit;
}
?>
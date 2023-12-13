$(function () {
    $("#form-cadastro").validate({
        rules: {
            nome: { required: true },
            login: {
                required: true,
                remote: {
                    url: "validar-login.php",
                    type: "post",
                    data: {
                        login: function (){
                            return $('#login').val();
                        }
                    }
                }
            },
            senha: { required: true, minlength: 6 },
            confirmaSenha: { required: true, minlength: 6, equalTo: '#senha' }
        },
        messages: {
            nome: { required: "Por favor, informe seu nome" },
            login: { required: "É necessário informar um login" },
            senha: { required: "Informe uma senha", minlength: "A senha deve possuir pelo menos 6 caracteres" },
            confirmaSenha: { required: "Conforme a senha", minlength: "A senha deve possuir pelo menos 6 caracteres", equalTo: "A confirmação deve ser igual à senha" }
        }
    });
})

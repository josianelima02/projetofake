
    //formulario
    document.querySelector("#botaoEnviar").addEventListener("click", validarLogin)
    function validarLogin(event) {
        event.preventDefault();
        if (
            document.getElementById("exampleInputPassword1").value != "" &&
            document.getElementById("exampleInputEmail1").value != ""
        ) {
            const senha = document.getElementById("exampleInputPassword1")
            const email = document.getElementById("exampleInputEmail1")

            alert("Bem-vinda ao BOOKSTAN")
            return ;
        } else {

            alert("Por favor, preencha os campos!")
            return ;
        }
    };


        //formulario
        document.querySelector("#botaoCadastrar").addEventListener("click", validarFormulario)
        function validarFormulario() {
    
            if (
                document.getElementById("nome").value != "" &&
                document.getElementById("email").value != ""
            ) {
                const nome = document.getElementById("nome")
                email = document.getElementById("email")
    
                alert("Prontinho!! Você receberá um e-mail com os próximos passos!")
                return ;
            } else {
    
                alert("Por favor, preencha os campos!")
                return ;
            }
        };
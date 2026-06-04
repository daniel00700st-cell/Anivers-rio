function entrar(){

    const senha = document.getElementById("senha").value;

    // SUA DATA ESPECIAL
    const senhaCorreta = "31/10/2025";

    if(senha === senhaCorreta){

        document.getElementById("login").style.display = "none";

        document.getElementById("conteudo").style.display = "block";

        document.getElementById("musica").play();

    }else{
        document.getElementById("erro").innerHTML = "Data incorreta ❤️";
    }

}
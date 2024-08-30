function minhafuncao(valor) {
    var raiz = Math.sqrt(valor);
    alert("A raiz de " + valor + " é " + raiz);
}

function contador() {
    var num= parseInt(prompt("digite um numero de 1 a n:"))

    var resultadodiv =document.getElementById("resultado");
    
}
    
        function showTextInModal() {
            var text = prompt("Digite o texto para exibir no modal:");
            if (text) {
                document.getElementById('modalBodyContent').innerText = text;
                var myModal = new bootstrap.Modal(document.getElementById('textModal'));
                myModal.show();
            }
        }
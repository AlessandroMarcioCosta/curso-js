
    // Função que será executada ao clicar no botão
    function calcularMelhorPreco() {

      // Captura os valores digitados
      let precoAlcool = document.getElementById("alcool").value;
      let precoGasolina = document.getElementById("gasolina").value;

      // Substitui vírgula por ponto e converte para número
      precoAlcool = parseFloat(precoAlcool.replace(",", "."));
      precoGasolina = parseFloat(precoGasolina.replace(",", "."));

      // Referência ao elemento de resultado
      let resultado = document.getElementById("resultado");

      // Validação dos valores
      if (
        isNaN(precoAlcool) || 
        isNaN(precoGasolina) || 
        precoAlcool <= 0 || 
        precoGasolina <= 0
      ) {
        resultado.innerHTML = "Por favor, insira valores válidos.";
        resultado.className = "alert alert-danger text-center";
        return;
      }

      // Regra dos 70%
      let proporcao = precoAlcool / precoGasolina;

      //innerhtml configura o conteudo html do elemento resultado
      // Verificação do melhor combustível
      if (proporcao < 0.7) {
        resultado.innerHTML = "Melhor utilizar Álcool";
        resultado.className = "alert alert-success text-center";
      } else {
                resultado.innerHTML = "Melhor utilizar Gasolina";
        resultado.className = "alert alert-warning text-center";
      }
    }
  
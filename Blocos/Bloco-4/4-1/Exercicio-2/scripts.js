//Exemplo do vídeo

  let nome = "Cainan" // String literal
  let idade = 23 // Number literal
  let aprovado = true // Boolean
  let sobreNome = undefined // Undefined
  let corSelecionada = null // Redefinir valor

//Exercício de Tipagem Dinâmica

    // Aqui vemos algumas declarações de variáveis e seus tipos sendo exibidos `document....innerHTML`.

  let valueOne = "lucas";
    // let valueTwo = "tunico";
  let valueTwo = 666;
  let valueThree = 3.14;
  let valueFour = NaN;
  let valueFive = false;
  let valueSix = undefined;
  let valueSeven = function() {};
    // let valueEight = null;
  let valueEight = true;
  	
	
  document.getElementById("valOne").innerHTML +=  typeof valueOne;
  document.getElementById("valTwo").innerHTML += typeof valueTwo;
    
  document.getElementById("valThree").innerHTML += typeof valueThree;
    // Exiba o valor de valueThree
  document.getElementById("valFour").innerHTML += typeof valueFour;
    // Exiba o valor de valueFour
  document.getElementById("valFive").innerHTML += typeof valueFive;
  document.getElementById("valSix").innerHTML += typeof valueSix;
  document.getElementById("valSeven").innerHTML += typeof valueSeven;
  document.getElementById("valEight").innerHTML += typeof valueEight;
    
    // Agora vamos fazer a mudança de tipo para ver como funciona a tipagem dinâmica.
    
    // Troque o valor de valueTwo para um number e depois exiba seu novo tipo na linha comentada a baixo.
  document.getElementById("valNewTwo").innerHTML = typeof valueNewTwo;
    
    // Troque o valor de valueEight por um boolean e depois exiba seu novo tipo na linha comentada a baixo.
  document.getElementById("valNewEight").innerHTML = typeof valueNewEight;

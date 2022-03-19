var carta1 = {
    nome: "Bk - Alemão",
    imagem:
      "https://cdn.discordapp.com/attachments/675424959463686168/954171548590288956/9k.png",
    atributos: {
      Fuga: 8.5,
      Mira: 7.5,
      NoçãoEmAção: 9
    } // Acessar algum atributo específico: carta1.atributos.x
  };
  var carta2 = {
    nome: "Gugu - 2G/GG",
    imagem:
      "https://cdn.discordapp.com/attachments/675424959463686168/954171777867710484/images.png",
    atributos: {
      Fuga: 7,
      Mira: 9,
      NoçãoEmAção: 9
    }
  };
  var carta3 = {
    nome: "Mili Litros - ML",
    imagem:
      "https://cdn.discordapp.com/attachments/675424959463686168/954173067960135710/9k.png",
    atributos: {
      Fuga: 7,
      Mira: 6.5,
      NoçãoEmAção: 7.5
    }
  };
  
  var baralhoCartas = [carta1, carta2, carta3];
  
  var cartaPC;
  var cartaPlayer;
  
  function sortearCarta() {
    var indiceCartaPC = parseInt(Math.random() * 3);
  
    var indiceCartaPlayer = parseInt(Math.random() * 3);
    while (indiceCartaPC == indiceCartaPlayer) {
      indiceCartaPlayer = parseInt(Math.random() * 3);
    }
    cartaPlayer = baralhoCartas[indiceCartaPlayer];
    cartaPC = baralhoCartas[indiceCartaPC];
    console.log(cartaPlayer);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaPlayer();
  }
  
  
  function rAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = rAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
  
    var valorCartaPlayer = cartaPlayer.atributos[atributoSelecionado];
    var valorCartaPC = cartaPC.atributos[atributoSelecionado];
  
    if (valorCartaPlayer > valorCartaPC) {
        htmlResultado = "<p class='resultado-final'>VENCEU</p>"
    } else if (valorCartaPC > valorCartaPlayer) {
        htmlResultado = "<p class='resultado-final'>MA-MOU</p>"
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou.</p>"
    }
    elementoResultado.innerHTML = htmlResultado
    document.getElementById("btnJogar").disabled = true;
    exibirCartaPC();
  }
  
  function exibirCartaPlayer() {
    var divCartaPlayer = document.getElementById("carta-jogador");
  
    divCartaPlayer.style.backgroundImage = `url(${cartaPlayer.imagem})`;
    //resumo da linha acima: divCartaJogador.style.backgroundImage = "url(" + cartaPlayer.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagOpcoes = '<div id="opcoes" class="carta-status">';
  
    var opcoesTexto = "";
  
    for (var atributo in cartaPlayer.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value=" +
        atributo +
        ">" +
        atributo + " " + cartaPlayer.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaPlayer.nome}</p>`
    divCartaPlayer.innerHTML = moldura + nome + tagOpcoes + opcoesTexto + "</div>"
  }
  
  function exibirCartaPC() {
    var divCartaPC = document.getElementById("carta-maquina");
  
    divCartaPC.style.backgroundImage = `url(${cartaPC.imagem})`;
    //resumo da linha acima: divCartaJogador.style.backgroundImage = "url(" + cartaPlayer.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagOpcoes = '<div id="opcoes" class="carta-status">';
  
    var opcoesTexto = "";
  
    for (var atributo in cartaPC.atributos) {
      opcoesTexto +=
        "<p name='atributo' value=" +
        atributo +
        "</p>" +
        atributo + " " + cartaPC.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaPC.nome}</p>`
    divCartaPC.innerHTML = moldura + nome + tagOpcoes + opcoesTexto + "</div>"
  }
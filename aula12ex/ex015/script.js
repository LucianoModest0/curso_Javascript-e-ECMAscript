function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');
  if (fano.value.length == 0 || Number (fano.value) > ano ) {
    window.alert ('[ERRO] verificque os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName ('radsex');
    var idade = ano - Number(fano.value);
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'assets/menino.jpg')
      } else if (idade < 18) {
        //Jovem
        img.setAttribute('src', 'assets/jovem-homem.jpg')
      } else if (idade < 60) {
        //adulto
        img.setAttribute('src', 'assets/adulto.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'assets/idoso.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'assets/menina.jpg')
      } else if (idade < 18) {
        //Jovem
        img.setAttribute('src', 'assets/jovem-mulher.jpg')
      } else if (idade < 60) {
        //adulto
        img.setAttribute('src', 'assets/adulta.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'assets/idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    // img.style.width = '250px'
    // img.style.height = '250px'
    img.style.borderradius = '50%'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}


function converter() {
  let valor = window.document.querySelector('input#moeda1')
  let type_moeda1 = window.document.querySelector('select#type_moeda1')
  let type_moeda2 = window.document.querySelector('select#type_moeda2')
  let result1 = window.document.querySelector('p#Resultado')

  var myHeaders = new Headers();
  myHeaders.append("apikey", "19y08ONRz6oGvbyurX7XkPUaCRXNmzw7");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  fetch(`https://api.apilayer.com/fixer/convert?to=${type_moeda1}&from=${type_moeda2}&amount=${valor}`, requestOptions)
    .then(response => response.text())
    .then(result => result1.innerHTML + result)
    .catch(error => console.log('error', error));
  result1.innerHTML + response
  }
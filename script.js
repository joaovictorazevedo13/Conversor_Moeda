function converter() {
  let moeda_1 = window.document.querySelector('input#moeda1')
  let type_moeda1 = window.document.querySelector('select#type_moeda1')
  let type_moeda2 = window.document.querySelector('select#type_moeda2')
  

  var myHeaders = new Headers();
myHeaders.append("apikey", "19y08ONRz6oGvbyurX7XkPUaCRXNmzw7");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/fixer/convert?to=${moeda_1}&from=from&amount=amount`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
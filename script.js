var myHeaders = new Headers();
myHeaders.append("apikey", "19y08ONRz6oGvbyurX7XkPUaCRXNmzw7");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/convert?to=to&from=from&amount=amount", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
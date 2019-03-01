// function addItem(item) {
//   if(!getCookie('items')) {
//     createCookie('items', JSON.stringify([item]))
//   } else {
//     var items = getCookie('items');
//     if(!items.find(function(i) {return i === item})) {
//       items.push(item);
//       removeCookie('items');
//       createCookie('items', JSON.stringify(items)) 
//     }
//   }
// }


function createCookie(name, value) {
  document.cookie = name + "=" + value;
}

function getCookie(name) {
  var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
  if(result) {
    return toRealValue(result[1]);
  }
}

function removeCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

function toRealValue(value) {
  try {
      return JSON.parse(value);
  }
  catch(e){
      return value.toString();
  }
}
let costDelivery;
let nameCountry;
nameCountry = prompt('Введите название страны, куда доставить товар');
if (nameCountry === null) {
  console.log('Отменено пользователем!');
} else {
  nameCountry = nameCountry.toUpperCase();
  switch (nameCountry.toUpperCase()) {
    case 'КИТАЙ':
      costDelivery = 100;
      alert(`Доставка в ${nameCountry} будет стоить ${costDelivery} кредитов`);
      break;
    case 'ЧИЛИ':
      costDelivery = 250;
      alert(`Доставка в ${nameCountry} будет стоить ${costDelivery} кредитов`);
      break;
    case 'АВСТРАЛИЯ':
      costDelivery = 170;
      alert(`Доставка в ${nameCountry} будет стоить ${costDelivery} кредитов`);
      break;
    case 'ИНДИЯ':
      costDelivery = 80;
      alert(`Доставка в ${nameCountry} будет стоить ${costDelivery} кредитов`);
      break;
    case 'ЯМАЙКА':
      costDelivery = 120;
      alert(`Доставка в ${nameCountry} будет стоить ${costDelivery} кредитов`);
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }
}

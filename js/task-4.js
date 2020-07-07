const credits = 23580;
const pricePerDroid = 3000;
const amountPrice = prompt('Какое количество дроидов нужно?');
if (amountPrice === null) {
  console.log('Отменено пользователем!');
} else {
  let totalPrice = Number(amountPrice) * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    let balanceCredits = credits - totalPrice;
    alert(
      `Вы купили ${amountPrice} дроидов, на счету осталось ${balanceCredits} кредитов.`,
    );
  }
}

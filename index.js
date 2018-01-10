// Общий оборот
var total = document.getElementById('totalIncome');
var totalIncome ;
 // Получено наличькой
var Nal = document.getElementById('Nal');
var Nalvalue;
// Остаток на счету без Наличьки
var totalCashWithoutNal = totalIncome - Nal;
var Bonus = document.getElementById('Bonus');
var select = document.getElementById('select');
var partnerСommission;
var text1;
var div = document.createElement('div');
var form = document.getElementsByTagName('form');
var info = document.getElementById('info')




function calculation() {
  partnerСommission = parseInt(select.value,10);
  totalIncome = parseInt(total.value,10);
  Nalvalue = parseInt(Nal.value,10);
  bonus = parseInt(Bonus.value,10);
  var totatlProsent = (totalIncome/100) * partnerСommission;
  var withoutCash  = totalIncome - Nalvalue - bonus ;
  var AccountBalance = totalIncome - Nalvalue + bonus;
var totalCashWithoutNal = totalIncome - Nalvalue;
  var fact = totalCashWithoutNal - totatlProsent;
  //Тексты для окна информации (Начало)
  text1 = 'Ваш общий оборот:' + totalIncome;
  text2 = 'Получино наличными:' + Nalvalue;
  text3 = 'Получино без нал:' + withoutCash ;
  text4 = "Ваши бон.noneусы:" + bonus;
  text5 = "Процент партнера :" + partnerСommission;
  text6 = 'Ваш остаток на счету составляет :' + AccountBalance;
  text7 = "Итого к выплате :" + fact;
//Тексты для окна информации (конец)
  var p1  = document.createElement('p');
  var p2 = document.createElement('p');
  var p3  = document.createElement('p');
  var p4 = document.createElement('p');
  var p5  = document.createElement('p');
  var p6 = document.createElement('p');
  var p7 = document.createElement('p');
  var hr = document.createElement('hr');
  var text1 = document.createTextNode(text1);
  var text2 = document.createTextNode(text2);
  var text3 = document.createTextNode(text3);
  var text4 = document.createTextNode(text4);
  var text5 = document.createTextNode(text5);
  var text6 = document.createTextNode(text6);
  var text7 = document.createTextNode(text7);
  p1.appendChild(text1);
  p2.appendChild(text2);
  p3.appendChild(text3);
  p4.appendChild(text4);
  p5.appendChild(text5);
  p6.appendChild(text6);
  p7.appendChild(text7);
  document.getElementById("info").appendChild(p1);
  document.getElementById("info").appendChild(p2);
  document.getElementById("info").appendChild(p3);
  document.getElementById("info").appendChild(p4);
  document.getElementById("info").appendChild(p5);
  document.getElementById("info").appendChild(p6);
  document.getElementById("info").appendChild(p7);
    document.getElementById("info").appendChild(hr);
  form[0].classList.add('active');
  info.classList.add('active');


}

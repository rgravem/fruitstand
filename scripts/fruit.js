console.log('sourced');

// var inventory = [];
// var fruit = {
//   name: '',
//   price: 0,
// };
var orangeInv = 0;
var appleInv = 0;
var bananaInv = 0;
var grapeInv = 0;

var orangeBought = 0;
var appleBought = 0;
var bananaBought = 0;
var grapeBought = 0;

var userMoney = 100;
onload=function(){
  $('#sweetCash').html(userMoney);
  $('#orangePrice').html(orange.price);
  $('#bananaPrice').text(banana.price);
  $('#grapePrice').text(grape.price);
  $('#applePrice').text(apple.price);
};
function randomNum(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

var orange = {
  name: 'orange',
  price: randomNum(0.5, 9.99),
};

var apple = {
  name: 'apple',
  price: randomNum(0.5, 9.99),
};

var banana = {
  name: 'banana',
  price: randomNum(0.5, 9.99),
};

var grape = {
  name: 'grape',
  price: randomNum(0.5, 9.99),
};

var arrayOfPrices = [orange, apple, banana, grape];

$(document).ready(function (){
  setInterval(function(){
    for (var i = 0; i < arrayOfPrices.length; i++) {
      if(arrayOfPrices[i].price >= 9.49) {
        arrayOfPrices[i].price -= randomNum(0.01, 0.5);
      } else if(arrayOfPrices[i].price <= 1) {
        arrayOfPrices[i].price += randomNum(0.01, 0.5);
      } else {
        arrayOfPrices[i].price += randomNum(-0.5, 0.5);
      }
    }
    $('#orangePrice').text(orange.price);
    $('#bananaPrice').text(banana.price);
    $('#grapePrice').text(grape.price);
    $('#applePrice').text(apple.price);
    console.log(arrayOfPrices);
  }, 15000);
  console.log(orange);

  $('.orange').on('click', function(){
    console.log('clicked button');
    if (userMoney - orange.price <= 0) {
      alert('You are broke YO');
    }else{
    userMoney -= orange.price;
    orangeInv ++;
    orangeBought += orange.price;
    $("#avgOrange").html(orangeBought/orangeInv);
    $("#orangeCount").html(orangeInv);
    $('#sweetCash').html(userMoney);
    console.log('user money:', userMoney);
    }
  });
  $('.apple').on('click', function(){
    console.log('clicked button');
    if (userMoney - apple.price <= 0) {
      alert('You are broke YO');
    }else{
    userMoney -= apple.price;

    appleInv ++;
    appleBought += apple.price;
    $("#avgApple").html(appleBought/appleInv);
    $("#appleCount").html(appleInv);
    $('#sweetCash').html(userMoney);
    console.log(appleInv + " , " + appleBought);
  }
  });
  $('.banana').on('click', function(){
    console.log('clicked button');
    if (userMoney - banana.price <= 0) {
      alert('You are broke YO');
    }else{
    userMoney -= banana.price;

    bananaInv ++;
    bananaBought += banana.price;
    $("#avgBanana").html(bananaBought/bananaInv);
    $("#bananaCount").html(bananaInv);
    $('#sweetCash').html(userMoney);
    console.log(bananaInv + " , " + bananaBought);
  }
  });
  $('.grape').on('click', function(){
    console.log('clicked button');
    if (userMoney - grape.price <= 0) {
      alert('You are broke YO');
    }else{
    userMoney -= grape.price;

    grapeInv ++;
    grapeBought += grape.price;
    $("#avgGrape").html(grapeBought/grapeInv);
    $("#grapeCount").html(grapeInv);
    $('#sweetCash').html(userMoney);
    console.log(grapeInv + " , " + grapeBought);
  }
  });
  $('#orangeSell').on('click', function(){
    if (orangeInv == 0) {
      alert('Hey stupid thats not an orange in your basket');
    }else{
      orangeInv --;
      userMoney += orange.price;
      $("#avgOrange").html(orangeBought/orangeInv);
      $("#orangeCount").html(orangeInv);
      $('#sweetCash').html(userMoney);
    }
  });
  $('#bananaSell').on('click', function(){
    if (bananaInv == 0) {
      alert('Hey stupid thats not a banana in your basket');
    }else{
      bananaInv --;
      userMoney += banana.price;
      $("#avgbanana").html(bananaBought/bananaInv);
      $("#bananaCount").html(bananaInv);
      $('#sweetCash').html(userMoney);
    }
  });
  $('#appleSell').on('click', function(){
    if (appleInv == 0) {
      alert('Hey stupid thats not an apple in your basket');
    }else{
      appleInv --;
      userMoney += apple.price;
      $("#avgapple").html(appleBought/appleInv);
      $("#appleCount").html(appleInv);
      $('#sweetCash').html(userMoney);
    }
  });
  $('#grapeSell').on('click', function(){
    if (grapeInv == 0) {
      alert('Hey stupid thats not a grape in your basket');
    }else{
      grapeInv --;
      userMoney += grape.price;
      $("#avggrape").html(grapeBought/grapeInv);
      $("#grapeCount").html(grapeInv);
      $('#sweetCash').html(userMoney);
    }
  });
});

// var loopOfPrices = function(){
//   console.log('in loop price');
//   for (var i = 0; i < arrayOfPrices.length; i++) {
//     if(arrayOfPrices[i].name === $('.buyButton').data('name'))
//       fruit.price = arrayOfPrices[i].price;
//       return fruit.price;
//   }
// };

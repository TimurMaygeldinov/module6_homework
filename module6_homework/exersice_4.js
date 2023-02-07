// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
function numbersCount(a,b){
    var intervalId = setInterval(function (){
      console.log(a);
      if(a === b){
        clearInterval(intervalId);
      }
      a++;
    },1000);
  }
  numbersCount(5,15)
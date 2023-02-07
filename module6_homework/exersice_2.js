function checkNumber(num){
    if(num < 2 || num > 1000){
      return console.log('Данные неверны')
    }
    for(let i = 2; i < num; i++){
      if(num % i === 0){
        return console.log('Число непростое')
      }
      
    }  
      return console.log('Число простое')
  }
  
  checkNumber(10)
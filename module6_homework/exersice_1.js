let arr = [1,1,2,3,6,0,1,0];
let a = (0)
let b = (0)
let c = (0)
function getNumberCount(){
    for (let i = 0; i < arr.length ; i++){
  
        if(arr[i] === 0){
          c = c + 1;
        }
        else if(arr[i] % 2 === 0){
          a = a + 1;
        }
        else{
          b = b + 1;
        }
      }
      console.log('Количество чётных чисел в массиве ' + a);
      console.log('Количество нечётных чисел в массиве ' + b);
      console.log('Количество нулей в массиве ' + c);
}
getNumberCount();

// let a = 2;
// let b = 3;
// function firstNumber(a){
//     return function secondNumber(b)
// }
// function secondNumber(b){
//     return console.log(a + b)
// } 
// данный вариант казался мне логичным, но он никак не запускается, имеет ли место быть такому варианту и что я пропустил для его запуска?
function summ(a){
	return function secondNumber(b){
        return (a + b);
    }
}
console.log(summ(1)(2));
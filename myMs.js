let piscess = [[17,99,3,19],[4,18,33,83],[27,5,91,15],[90,16,11,21]]
let randomArray=[]; //Math.floor(Math.random()*piscess.length)
let firstMedian = [];
let secondMedian = [];


for(let i =0; i < piscess.length; i++){
  let subArray = piscess[i];
  let randomIndex = Math.floor(Math.random() * piscess.length);
  randomArray.push(subArray[randomIndex])
}

//
for(let i = 0; i <= piscess.length-1; i++){
  let k = piscess[i][i];
  firstMedian.push(k)
}

// sec kmed
for(let i = 0, j = 3 ; i <= piscess.length-1; i++,j--){
  
  let k = piscess[i][j];
  secondMedian.push(k);
  
}
console.log(secondMedian)
console.log(firstMedian);
console.log(randomArray)
console.table(piscess);
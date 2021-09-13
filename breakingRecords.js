let max = 0,min = 0, minRecord = scores[0], maxRecord = scores[0];
for(let i = 1; i < scores.length; i++){
if(scores[i] > maxRecord){
max++;
maxRecord = scores[i];
}else if(scores[i] < minRecord){
min++;
minRecord = scores[i];
}
}
let newArr = [max,min];
return newArr 
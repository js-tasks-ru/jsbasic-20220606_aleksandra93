function getMinMax(str) {
let result={ min:0, max:0 };
let arr = str.split(' ');
for (let i=0 ; i < arr.length; i++) {
if ((+arr[i] < result.min) && (typeof(+arr[i]) == 'number') && !isNaN(+arr[i])) {
result.min = +arr[i];
} else  if ((+arr[i] > result.max) && (typeof(+arr[i]) == 'number') && !isNaN(+arr[i])) {
result.max = +arr[i];
}
}
return result;
}

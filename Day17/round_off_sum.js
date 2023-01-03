var x=[1.20,1.89,3.09,5.8];
x=x.map(function(each_element){
return Number(each_element.toFixed(0));});
console.log(x);
  var sum = 0; 
  x.forEach(item => { sum += item; });
  console.log(sum); 
<script>
var data=[{ salary: 56000,}, {     salary: 90000 }]
var sum= data.reduce((accumulator, object) => {
  return accumulator + object.salary;
}, 0);

console.log(sum);
</script>
<script>
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [16, 45, 12,316, 23];
console.log(random_item(items));
</script>
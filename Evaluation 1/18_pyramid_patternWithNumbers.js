var rows=4;
let num="";
let count=1;
for(var i=1;i<=rows;i++)
{
    for(var k=1;k<=(rows-i);k++)
    { 
        num+= " ";
    }
    for(var j=1;j<=i;j++)
    {
      num+=count;
      count++;
      num+=" ";
    }
    num+= "\n";
}
console.log(num);
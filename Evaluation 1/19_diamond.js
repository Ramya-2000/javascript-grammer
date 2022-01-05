 
var n=5;
let string= "";
for(var i=1;i<=n;i++)
{
    for(var k=1;k<=n - i + 1;k++)
    { 
        string+= " ";
    }
    for(var j=1;j<=2 * i-1;j++)
    {
      string+="*";
    }
    string+= "\n";
}
for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 1; j < i+1; j++) {
      string += " ";
    }
    // printing star
    for (let k = 1;k <= 2 * (n - i) - 1;k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
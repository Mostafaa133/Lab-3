var num = Number(prompt("please enter first number"));
var arrNum =[]
var sum=0;
var avg=0;
for(var i=0; i<num;i++){
arrNum[i]=Number(prompt("please enter value"));
sum=sum+arrNum[i];
}
avg=sum/num;
document.write("sum= "+sum+ "\n")
document.write("average= "+avg)
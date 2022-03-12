//reverse a string using stack
const fun=(str)=>{
    let stack=[];
    let reversetemp="";

for(let i=0;i<str.length;i++){
stack.push(str[i])

}
while(stack.length>0){
    reversetemp+=stack.pop();

}
console.log(reversetemp)
}
let str="My name is Ali";
fun(str);
//reverse a string uwithout stack

const fun1=(str)=>{
    let temp="";
for (let i=str.length-1;i>0;i--){
    temp+=str[i];
}
    console.log(temp)

}
let str1="My name is Ali";
fun(str);
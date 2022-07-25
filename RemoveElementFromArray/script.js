

const RemoevElement=(num,val)=>{

  let secondArray=[];
    for(let i=0;i<num;i++){

        if(num[i]!==val){
            secondArray.push(num[i]);
            

        }

        return secondArray;
    }



}
let num=[1,2,3,3,4,3];
let val=3;
console.log(RemoevElement(num,val));


const LongestCommonPrefix=(StrArr)=>{
    if(StrArr.length===0)
    return "the Array length is Zero"
    temp="";
    for(let i=0;i<StrArr[0].length;i++){
        character=StrArr[0][i];
       
        for(let j=0;j<StrArr.length;j++){
            
            if(StrArr[j][i]!==character)
            return temp;
        }
        temp+=character
        
        
        
    }


}

StrArr=["Ali","Ala","Almin"]

console.log(LongestCommonPrefix(StrArr));
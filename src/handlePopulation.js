const handlePopulation = (str) => {
    const array = [0,1,2];
    const newStr = str.toString().split("");
    for(let n in array) {
     if(!newStr.includes(",")) {
         switch (newStr.length) {
             case 3*n+4:
                for(let k = 1; k< newStr.length; k+=4) {
                   newStr.splice(k, 0, ",");
                }
                break;
          case 3*n+ 5:
             for(let k = 2; k< newStr.length; k+=4) {
                newStr.splice(k, 0, ",");
             }
             break;
         case 3*n+ 6:
             for(let k = 3; k< newStr.length; k+=4) {
                 newStr.splice(k, 0, ",");
             }
             break;    
             default:
                break;
          }
     }
      
    }
  
return newStr.join("");
   
}

export default handlePopulation;
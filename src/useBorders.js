
const useBorders = (cCode) => {


const grabData = async() => {
  
   let value = await fetch("https://restcountries.com/v3.1/alpha/" + cCode.id)
                    .then(res => res.json())
                    .then(data => data)
   if(value[0].borders) {
      let data = await fetch("https://restcountries.com/v2/alpha?codes="  + value[0].borders.join(","))
      .then(res => res.json())
      .then(data => data)

    return data;
   }
      

}

return  grabData();

}

export default useBorders;

import Header from './Header';
import handlePopulation from './handlePopulation';
import useFetch from "./useFetch"
import { useParams, useNavigate } from 'react-router-dom';
import useBorders from './useBorders';
import { useEffect, useState } from 'react';


const CountryPage = () => {
     const cCode = useParams();
    let {data, loading,error} = useFetch("https://restcountries.com/v3.1/alpha/" + cCode.id);
    const navigate = useNavigate();

 
    const handleCommas = (obj) => {
      
      if(obj === undefined) {
        return "None";
      }
      else {
        const arr = [];
        //get values from obj 
        const items = Object.values(obj);
        //if obj has only one lang return it 
        if(items.length < 2) {
          return items;
        }
        else {
          for(let i = items.length - 1; i >= 0; i--) {
            //add comma to every word in obj except the last item
            if(i > 0) {
           arr.push(items[i].concat(","));
        }
    
        }
      }
     
     arr.push(items[0]);
      return arr;
  }
}

const handleCurrency = (currency) => {
if(currency === undefined) {
  return "None";
}
else {
  const elem = Object.values(currency);
  return elem[0].name;
}



}

const handleName = (obj, lang, type) => {
 //create obj that will be cotained nativeName via lang name

  if(lang === undefined) {
    return false;
  }
  else {
    const item = Object.keys(lang);
    return item.length > 1 ? " "+ obj[item[item.length - 1]][type] 
    :" " +obj[item][type];
  }
  
 

}

//add border countries to all countries
  const code = useBorders(cCode);
   const[borders, setBorders] = useState(null);
   useEffect(() => {
    code.then(borders=> setBorders(borders));
  
   }, [code]);




    return ( 
    
        <div>
            <Header/>
            <div onClick = {() => navigate(-1)}className="font-light  w-[8em] p-2 pr-8 bg-darkHeader  rounded-sm text-center text-base mx-5 my-9 mt-10 flex shadow-lg lg:hover:cursor-pointer lg:mx-[5.5rem] lg:my-20">
            <svg className="mx-3 my-[0.1rem]" stroke="white" fill="white" strokeWidth="0" viewBox="0 0 16 16" height="1.75em" width="1.75em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd"></path><path fillRule="evenodd" d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
              <p className="text-white  my-[0.18rem]">Back</p>
            </div>
               
               
               {data &&  data.map((item) => (
              
                <div className="text-white ">
                 <img className="rounded w-11/12 h-[13rem] p-5 mx-1 pt-5 lg:w-1/3 lg:h-[30rem] lg:mx-16 lg:my-16" src= {item.flags.png} alt="" /> 
                 <div className="lg:absolute top-[20rem] left-[60rem]">
                 <div className="font-semibold text-left ml-[1.5rem] pt-6 pb-3 text-xl lg:text-3xl lg:pb-6">
                  <div className="break-all">{item.name.common}</div>
                  </div>
                 <p className="font-light p-1 ml-[1.3rem] pb-3 lg:text-lg lg:pb-1.5"><span className="font-normal  text-sm lg:text-lg">Native Name:</span>{handleName(item.name.nativeName, item.languages, "common")} </p>
                  <p className="font-light p-1 indent-5 pb-3 lg:text-lg lg:pb-1.5" ><span className="font-normal text-sm lg:text-lg">Population:</span> {handlePopulation(item.population)}</p>
                  <p className="font-light p-1 indent-5 pb-3 lg:text-lg lg:pb-1.5"><span className="font-normal  text-sm lg:text-lg">Region:</span> {item.region}</p>
                  <p className="font-light p-1 indent-5 pb-3 lg:text-lg lg:pb-1.5"><span className="font-normal  text-sm lg:text-lg">Sub Region:</span> {item.subregion ? <p className='absolute top-[12.65rem] left-[6.5rem] w-full'>{item.subregion}</p> : <p className='absolute top-[12.65rem] left-[6.5rem]'>None</p>}</p>
                <p className="font-light p-1 indent-5 pb-11 lg:text-lg lg:pb-1.5"><span className="font-normal  text-sm lg:text-lg">Capital: </span>{item.capital ? <p className='absolute top-[15rem] left-[4.5rem]'> {handleCommas(item.capital).join(" ")}</p> : <p className='absolute top-[16.7rem] left-[4.5rem]'>None</p>}</p>
                <div className="lg:relative top-[-12rem] left-[26rem]">
                <p className="font-light p-1 indent-5 pb-3 lg:text-lg lg:pb-1.5"><span className="font-normal  text-sm lg:text-lg">Top Level Domain:</span> {item.tld}</p>
                <p className="font-light p-1 indent-5 pb-3 lg:text-lg lg:pb-1.5"><span className="font-normal  text-sm lg:text-lg">Currencies:</span> {handleCurrency(item.currencies)}</p>
                <p className="font-light p-1 ml-[1.3rem] pb-11 lg:text-lg lg:pb-1.5 w-[22rem]"><span className="font-normal  text-sm lg:text-lg">Languages:</span> {item.languages ? handleCommas(item.languages).join(" ") : <p>None</p>}</p>
                </div>
               
                <p className="text-white  text-[1.2rem] indent-5 pb-5 lg:text-lg lg:absolute top-[22rem] ">Border Countries: </p>
                
                <div className="flex flex-wrap gap-2 mx-5 w-full lg:absolute top-[21.8rem] left-[10rem] lg:flex-nowrap lg:w-[40rem]">
                {borders ? borders.map((elem) => (
               <div className="font-light  w-[6.8rem] p-2   flex justify-center  place-content-stretch place-items-center  bg-darkHeader  rounded-sm text-center text-sm  align-middle shadow-lg">
                 {elem.name} 
                </div>
                )) : <div className="font-light  w-[6.8rem] p-2 bg-darkHeader  rounded-sm text-center text-sm shadow-lg">None</div>}
                   </div>
                 
                </div>
                
                 
                </div>
                 
               ))}
               {loading && <h3>Loading....</h3>}
               {error && <div>{error}</div>}
        </div>
     );
}
 
export default CountryPage;
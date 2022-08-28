import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import {nanoid} from "nanoid";
import handlePopulation from "./handlePopulation";

const DataRender = (props) => {
    let link  = `https://restcountries.com/v3.1/${props.subLink}${props.isSlash}${props.name}`;
    let {data, loading,error} = useFetch(link);
   
    return (
        
        <div className=" text-white  w-[96%] absolute top-[20rem] left-12 z-0 lg:grid grid-cols-4 gap-4 lg:min-w-[95%] lg:top-[12.7rem] lg:left-[5rem]">
        {data && data.map((item) => (
         
         
             <div className=" bg-darkHeader rounded w-3/4 my-10 lg:mx-0 lg:w-[79%] " key = {nanoid()}>
                <Link to = { `./${item.ccn3}`}>
              <img className="rounded w-full h-36 lg:h-48"src= {item.flags.png} alt="" />
              <div className="font-semibold text-left mx-6 pt-6 pb-3 text-xl">{item.name.common}</div>
               <p className="font-light p-1 indent-5" ><span className="font-normal text-md ">Population:</span> {handlePopulation(item.population)}</p>
               <p className="font-light p-1 indent-5"><span className="font-normal  text-md">Region:</span> {item.region}</p>
               <p className="font-light p-1 indent-5 pb-11"><span className="font-normal  text-md">Capital:</span>{item.capital ? <p className="relative top-[-1.52rem] left-[3.6rem]"> {item.capital}</p> : <p className="relative top-[-1.52rem] left-[3.6rem]">None</p>}</p>
               </Link>
           </div>
          
           
           
             
        ))
    }
     {loading && <h3>Loading...</h3>}
     {error && <div>{error}</div>}
    </div>
    
   );
}
 


 
export default DataRender;
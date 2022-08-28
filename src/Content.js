import useFetch from "./useFetch";
import handleClick from "./handleClick";
import Header from "./Header";
import DataRender from "./DataRender";
import { useState } from "react";

const Content = () => {
   const {data} = useFetch("https://restcountries.com/v3.1/all");
 
    
  const [isFiltered, setIsFiltered] = useState(false);
  const [region, setRegion] = useState(null);
    const handleFilter = (e) => {
       setRegion(e.target.textContent);
       setIsClicked(false);
       setIsFiltered(true);
    
    }



const [isClicked, setIsClicked] = useState(false);
const [name, setName] = useState(null);

   const handleSearch = () => {
      const input = document.getElementsByClassName("input-search")[0];
       
          data.map((item) => {
          
            if(item.name.official.toLowerCase().includes(input.value.toLowerCase()) ||
            (item.name.common.toLowerCase() === input.value.toLowerCase())) {
           
               setName(item.name.official);
               setIsFiltered(false);
               setIsClicked(true);
             }
          })   
         
 }

 //special case with enter key pressed
 const keySearch = (e) => {
     
   if(e.key === "Enter") {
     handleSearch();
   }
  
 } 

 

    return (
         <div>
            <Header/>
            {/* search-bar */}
            <div className="bg-darkHeader rounded p-4 flex gap-6 w-11/12 absolute left-4 top-[6.7rem] z-60 search-bar md:w-1/4 lg:translate-x-[4rem] lg:translate-y-[2rem]" >
                <span><svg onClick= {handleSearch} className = "lg:hover:cursor-pointer" stroke="white" fill="white" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></span>
                <input onKeyDown={(e) => keySearch(e)} className="bg-darkHeader outline-none text-white z-60 input-search " type="text"  placeholder="Search for a country..."/>
              </div>
              {/* regions filter */}
            
              <div className="flex gap-4 p-4 w-3/5 relative top-[7.5rem] left-4 bg-darkHeader rounded md:w-[12%] lg:translate-x-[98rem] lg:translate-y-[-4rem]">
              <p className="text-white">Filter by Region</p>
              <svg onClick={handleClick} className="my-[0.4rem] absolute left-48  chevron lg:hover:cursor-pointer" stroke="white" fill="white" strokeWidth="1" viewBox="0 0 16 16" height="0.75em" width="0.75em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"clipRule="evenodd"></path></svg>
              </div>
              <div className="bg-darkHeader rounded p-4 text-white absolute top-[16.6rem] left-4 w-3/5 hidden regions z-40 md:w-[12%] lg:translate-x-[98rem] lg:translate-y-[-4rem]">
                <ul className="p-1">
                  <li className="p-1 lg:pt-0 md:hover:font-semibold md:hover:cursor-pointer" onClick ={(e) =>handleFilter(e)}>Africa</li>
                  <li className="p-1 md:hover:font-semibold md:hover:cursor-pointer" onClick ={(e) =>handleFilter(e)}>America</li>
                  <li className="p-1 md:hover:font-semibold md:hover:cursor-pointer" onClick ={(e) =>handleFilter(e)}>Asia</li>
                  <li className="p-1 md:hover:font-semibold md:hover:cursor-pointer" onClick ={(e) =>handleFilter(e)}>Europe</li>
                  <li className="p-1 lg:pb-0 md:hover:font-semibold md:hover:cursor-pointer" onClick ={(e) =>handleFilter(e)}>Oceania</li>
                </ul>
             
            </div>
            {isClicked ? <DataRender name={name} subLink = "name" isSlash = "/"/>
               : isFiltered ? <DataRender name={region} subLink = "region" isSlash = "/"/>
               : <DataRender name="" subLink = "all" isSlash = ""/>
          }
         
            
         </div>

      );
}
 
export default Content;

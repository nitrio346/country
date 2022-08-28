

const Header = () => {
    



    return ( 
        <div>
            <div className="font-main bg-darkHeader text-sm text-white font-b p-8 flex justify-between">
                <p className="lg:text-[1.2rem]">Where in the world?</p> 
                <div className="flex">
                <span><svg className="mx-4 my-[-0.05rem] lg:h-[1.3em] lg:w-[1.3em]"stroke="white" fill="white" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z" clipRule="evenodd"></path></svg></span>
               <p className="font-semibold  lg:text-[1.2rem] ">Dark Mode</p>
                </div>
             
            </div>
            
        </div>
     );
}
 
export default Header;
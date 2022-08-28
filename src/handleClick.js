let count = 0;
const handleClick = () => {
  const regionsNames = document.getElementsByClassName("regions")[0];
  const btn = document.getElementsByClassName("chevron")[0];
  regionsNames.style.display = "block";
  btn.style.transform = "rotate(-180deg)";
  count++;
 
 if(count % 2 === 0) {
  btn.style.transform = "rotate(-360deg)";
  regionsNames.style.display = "none";
  
 }
 
}

export default handleClick;
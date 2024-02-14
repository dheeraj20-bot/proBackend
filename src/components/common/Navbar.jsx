import { Link } from "react-router-dom"



function Navbar(){
   

return (
      <div className="flex w-11/12 mx-auto text-black max-w-maxContent items-center justify-between ">

       <Link to="/">
         <div>Hello</div>  
         </Link>

       <Link to="/">
         <div>Hello</div>  
         </Link>

      </div>
)
}

export default Navbar
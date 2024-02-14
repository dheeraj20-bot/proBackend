import { Link } from "react-router-dom"
import logo from "..//../assets/logo/proclientlogo.png"


function Navbar(){
   

return (
      <div className="flex w-11/12 mx-auto text-black max-w-maxContent items-center justify-between ">

      <Link to={"/"}>
      <div>
        <img src={logo} alt="" />
      </div>
      </Link>

     <div className="flex gap-x-7 items-center ">
     <Link to={"/"}>
      <div className="text-black">
        Home
      </div>
      </Link>

      <Link to={"/"}>
      <div className="text-black">
        Category
      </div>
      </Link>

      <Link to={"/"}>
      <div className="text-black">
        About us
      </div>
      </Link>


      <Link to={"/consultant/login"}>
      <div className="text-white rounded-md bg-violet-900 hover:scale-110 hover:bg-violet-950 transition-all duration-200 py-2 px-5">
        Login
      </div>
      </Link>


     </div>
     

      


       {/* <Link to="/">
         <div>Hello</div>  
         </Link>

       <Link to="/">
         <div>Hello</div>  
         </Link> */}

      </div>
)
}

export default Navbar
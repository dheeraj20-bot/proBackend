import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"


import LoginForm from "./LoginForm"


function Template({ title, description1, description2, image, formType }) {
    const { loading } = useSelector((state) => state.auth)
  
    return (
      <div className="flex  justify-center items-center min-h-[calc(100vh-3.5rem)]">
      <div className="grid place-items-center">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="mx-auto flex w-11/12 max-w-maxContent items-center justify-between  py-12 px-12 rounded-lg shadow-md shadow-violet-500 bg-slate-200 ">
            <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
              <h1 className="text-[1.875rem] font-semibold text-center leading-[2.375rem]">
                {title}
              </h1>
              <p className="mt-4 text-center text-[1.125rem] leading-[1.625rem]">
                <span className="text-black">{description1}</span>{" "}
                <span className="font-bold italic text-blue-500">
                  {description2}
                </span>
              </p>
              {<LoginForm />}
            </div>
          </div>
        )}
      </div>
    </div>
    
    )
  }
  
  export default Template
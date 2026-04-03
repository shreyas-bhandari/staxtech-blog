import { NavLink } from "react-router-dom";

function App(){
  return (
   <>
   <h1 className="text-4xl text-blue-950 text-center py-10 px-10 bg-blue-100 font-bold" >StaxTech Insights Blog Platform</h1>
   
   <div className="text-center space-x-5 py-5">
      

     <NavLink to="/admin/blog" className="text-2xl text-white bg-blue-900 py-2 px-3  inline-block hover:bg-blue-950 rounded-xl "> Manage Blog </NavLink>

      <NavLink to="/blog/Login"  className="text-2xl text-white bg-blue-900 py-2 px-3 hover:bg-blue-950 rounded-xl  " > Login </NavLink>
    </div>
   </>

    
  )
}

export default App;

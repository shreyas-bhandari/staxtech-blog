import React, {useState} from 'react'

 const Login = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sub  = (e) =>{
        e.preventDefault();
        console.log(username,email,password)
    }

  return (
    <div  >
        <form onSubmit={sub}>
           <div> <p className='text-3xl bg-blue-500 py-3 p
             text-center space-x-7 text-white font-bold'>Create your Account</p>
           </div>

          <div className=" space-y-4 py-8 rounded-xl">
             <div className=' rounded-xl  bg-blue-800  space-x-10 text-xl text max-w-[450px] mx-auto p-7 2'>

             <div className='py-3'>
                <input className='bg-white width-full p-0.5 px-1 space-y-10 text-gray-950 font-serif' type="text " onChange={(e) => setUserName(e.target.value)}  placeholder='Enter your name' />
             </div>
            
            <div className='py-3'>
                <input className='bg-white width-full p-0.5 px-1 space-y-10 text-gray-950 font-serif' type="text " onChange={(e) => setEmail(e.target.value)}  placeholder='Enter your mail' />
            </div>

            <div className='py-3'>
                <input className='bg-white width-full p-0.5 px-1 space-y-10 text-gray-950 font-serif' type="password" onChange={(e) => setPassword(e.target.value)}  placeholder='password' />
            </div>
           
           </div>
           <div className='text-2xl px-135 '>
            <button className='bg-blue-950 text-white p-2 rounded-4xl px-3 hover:bg-blue-800' type='submit'>Submit</button>
           </div>
          </div>
            
           

            
            
        </form>
    </div>

    
  )
}

export default Login

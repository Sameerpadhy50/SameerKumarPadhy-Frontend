import React, { useState } from 'react'

export const Register = () => {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [register,setRegister]=useState([])

    const handleClick=()=>{
        let data={
            email,pass,id:Date.now()
        }
        setRegister([...register,data])
    }
    console.log(register)

  return (
    <div className='border-4 border-red-700 w-1/6  '>
        <input type="text" value={email} onClick={(e)=>setEmail(e.target.value)} />
        <br />
        <input type="text" value={pass} onClick={(e)=>setPass(e.target.pass)}/>
        <br />
        <button onClick={()=>handleClick()}>Register</button>
    </div>
  )
}

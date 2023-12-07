const { createContext, useEffect, useState } = require("react");

export const RocketContext=createContext();

const RocketProvider=({children})=>{
    const [rocket,setRocket]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const response=await fetch(`https://api.spacexdata.com/v3/rockets`);
        const data= await response.json()
        setRocket(data)
    }
    return(
        <RocketContext.Provider value={{rocket}}>
            {children}
        </RocketContext.Provider>
    )
}
export  default RocketProvider;
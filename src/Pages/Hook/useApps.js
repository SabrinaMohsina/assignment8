import { useEffect, useState } from "react";
import axios from 'axios'

const useApps = ()=>{
    const [allapps , setApps] = useState([])
    const[loading , setLoading] =useState(true)
    const [error , setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
     axios('../data.json')
       .then(alldata=>setApps(alldata.data))
       .catch(err=>setError(err))
       .finally(()=> setLoading(false))
    },[])
    return{allapps , loading , error}
}

export default useApps 
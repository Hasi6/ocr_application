import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Axios from "axios";


const Verify = ({match})=>{
    const {id} = useParams('id');

    const [verified,setVerify] = useState(false);
    const cheakVerify =async ()  =>{
        
        const res =await Axios.get("http://localhost:5000/verifyAccount/"+id);
        console.log(res);
        // if(res.dat)
    }
    
    useEffect(()=>{
        cheakVerify();
    },[])


    return(
        <h1>{verified?"verified successfuly":"verifing...."}</h1>
    )
}

export default Verify;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import { Loader } from "semantic-ui-react";


const Verify = ({match,history})=>{
    const {id} = useParams('id');

    
    const [verified,setVerify] = useState(false);


    const cheakVerify =async ()  =>{ 
        const res =await Axios.get("http://localhost:5000/api/verifyAccount/"+id);
        if(res){
            setVerify(true);
        }
    }
    
    useEffect(()=>{
        cheakVerify();
    },[])


    return(
        <div>{verified?<h1>verified</h1>:<Loader active inline='centered' size='mini' style={{marginLeft:10}}/>}</div>
    )
}

export default Verify;
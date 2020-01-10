import React, { useState } from 'react';
import { Button, Icon, Loader } from 'semantic-ui-react';
import Axios from 'axios';

const HomePage = () => {

  const [image,setImage]=useState(null);
  const [imagePath,setImagePath]=useState(null);
  const [result,setResult]=useState(null);
  const [uploading,setUploading]=useState(false);

  const showPreviewOfImage=(event)=>{
    setImagePath(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  }
  const showSelectedImage=()=>{
    if(imagePath){
      return(
        <img src={imagePath} alt={"sfsfsfsf"} style={{maxHeight:200,maxWidth:200}}/>
      )
    }else{
      return null;
    }
  }
  const uploadImage=async()=>{
    setUploading(true);
    try {
      let formData = new FormData();
      formData.append("image",image);
      const header={
        headers:{
          "Content-type":"multipart/form-data"
        }
      };
      const res =await Axios.post("http://localhost:5000/api/addImage",formData,header);
      console.log(res);
      setUploading(false);
      setResult(res.data.result);
    } catch (error) {
      
    }
  }

  const displayResult=()=>{
    if(result){
      return(
          <h3>{result}</h3>
      );
    }else{
      return null;
    }
  }
  

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" name="choose a image" style={{display:'none'}} id="selectImage" onChange={showPreviewOfImage}/>
      <Button onClick={()=>document.getElementById("selectImage").click()}>
        <Icon link name='image' />
      </Button>
      {showSelectedImage()}

      <Button onClick={uploadImage} style={{display:'flex'}}>Upload{uploading===true? <Loader active inline='centered' size='mini' style={{marginLeft:10}}/>:null}</Button>
      {displayResult()}
    </div>
  );
}

export default HomePage;

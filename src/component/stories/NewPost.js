import React,{useState} from "react"
import {db,storage} from "../Configure/Fire";
import { useAuth } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
const NewPost=() =>
{
  const [title,setTitle]=useState("");
  const [image,setImage]=useState("");
  const [description,setDescription]=useState("");
  const [imgSrc, setImageSrc] = useState();
  const { currentUser } = useAuth();
  const history = useHistory()

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const firestoreRef = db.collection("posts").doc();
    const storageRef = storage.ref(`${firestoreRef.id}_image`);
    storageRef.put(image).on(
      "state-changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log(percentage);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        firestoreRef.set({
          photot_url: url,
          title:title,
          description:description,
          user_id:currentUser.uid,
          like_count:0,
          upload_time:firebase.firestore.FieldValue.serverTimestamp()
        });
      }
    );
    history.push("/Stories")
  };

  const handleSelectImage = (e) => {
    var file = e.target.files[0];
    setImage(file);
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    console.log(url);
    reader.onloadend = function (e) {
      setImageSrc(reader.result);
    };
  };


    return (
        <div className="container" style={{marginTop:"90px"}}>
        <form onSubmit={handleSubmit}>

      <div className="form-row">

      <div className="col-md-5 mb-4">
      <label for="validationDefault01" style={{float:"left",fontSize:"1.2em",fontWeight:"600px",marginLeft:"2px"}}>Title</label>
      <input 
      type="text" 
      name="title"
      className="form-control" 
      id="validationDefault01" 
      placeholder="Title"  
      onChange={(e)=>setTitle(e.target.value)} 
      required/>
      </div>

      <div className="col-md-5 mb-4" style={{marginTop:"10px",marginLeft:"5px"}}>
      <lebel style={{float:"left",fontSize:"1.2em",fontWeight:"600px",marginLeft:"3px"}}>Raleated Image</lebel>
        <div className="input-group">
        <div className="custom-file">
        <input 
        type="file" 
        className="custom-file-input" 
        id="validationDefault01" 
        aria-describedby="inputGroupFileAddon04" 
        onChange={handleSelectImage}
        required/>
        <label className="custom-file-label" for="validationDefault01">Choose file</label>
        </div>
        </div>
      </div>

      </div>
      <div className="form-row">
      <div>
      <label for="validationDefault01" style={{float:"left",fontSize:"1.2em",fontWeight:"600px",marginLeft:"2px"}}>Description</label>
      <textarea 
      rows = "4" 
      cols = "100" 
      name = "description"
      type="text" 
      className="form-control" 
      id="validationDefault01" 
      placeholder="description"  
      onChange={(e)=>setDescription(e.target.value)} 
      required/>
      </div>
      </div>
        
      <div className="form-row" style={{marginTop:"15px"}}>
        <button className="btn btn-dark" type="submit" style={{background:"#00838F"}}>Submit form</button>
        </div>
        </form>

        </div>
    ) 
}
export default NewPost;
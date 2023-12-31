import React, { useState } from 'react' ;
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@mui/icons-material/Videocam'; 
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { InsertEmoticon } from '@material-ui/icons';



function MessageSender () {

const [input, setInput] = useState("");
const [imageUrl, setImageUrl] = useState("");


const handleSubmit = (e) =>{
e.preventDefault () ;



setInput ("") ;
setImageUrl("");
};

return (
<div className='messageSender'> 
<div className='top1'>
<Avatar /> <form> 
<input
value ={input} onChange = {(e) =>setInput (e.target.value) }className="input"type='text' placeholder ={ 'Whats on your mind'}/>
<input value ={imageUrl} onChange = { (e) =>setImageUrl(e.target.value) }placeholder='image URL(Optional)'/>

<button onClick={handleSubmit} type="Submit">Hidden submit</button>

</form>
</div>

<div className= 'messageSender__bottom'> 

<div className='messageSender__option'>
<VideocamIcon style={{color:'red'}}/>
<h3>Live Video</h3> 
</div>

<div className='messageSender__option'>
<PhotoLibraryIcon style={{color:'green'}}/> <h3>Photo/Video</h3> </div>
<div className= 'messageSender__option'>
<InsertEmoticon style={{color:'Orange'}}/> <h3>Photo/Video</h3> 
    </div>
  </div> 
</div>
 
 )
}

export default MessageSender;
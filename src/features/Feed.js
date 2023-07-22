import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from '../Components/MessageSender';
import Post from '../features/Post';


function Feed() {
return (
<div className='feed'>
<StoryReel/>
<MessageSender/>

<Post profilePic="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBZgOxxMZXghtvBXkfIA.jpg" message="fantastic" timestamp="Timestamp"
username = "Matias" image="https://img.freepik.com/premium-photo/portrait-male-software-developer-smiling-camera-while-sitting-workplace-office-copy-spac_236854-44706.jpg?w=360"/>
<Post/>
<Post/>
</div>
)
}
export default Feed;
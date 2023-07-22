import React from 'react';
 import './StoryReel.css';
import Story from '../features/Story';

function StoryReel() {
return (
<div className='storyReel'>
<Story image="https://www.mindinventory.com/blog/wp-content/uploads/2021/03/mobile-app-design-fundamentals-the-difference-between-UI-and-UX.webp" 
profileSrc="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuZQKAjAbz9PAyejG1.jpg" 
title="Derick Hendricks"/>

<Story image="https://www.dice.com/binaries/medium/content/gallery/dice/insights/2022/09/shutterstock_2079730714.jpg" profileSrc="https://i.pinimg.com/474x/e4/c5/9f/e4c59fdbb41ccd0f87dc0be871d91d98.jpg" 
title="Bobby Brown"/>

<Story 
image="https://cdn.mos.cms.futurecdn.net/6bxva8DmZvNj8kaVrQZZMP.jpg" profileSrc="https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?s=170667a&w=0&k=20&c=8XkzFFaRKg0hPw7dapn7yPvp_SsjiI6ejfkwfsxU2CM="
title="Eric Stanley"/>

<Story
image="https://www.pixelo.net/wp-content/uploads/2018/10/1934823-e1540532501723.jpg"
profileSrc="https://media.istockphoto.com/id/1197071216/photo/portrait-of-a-smart-and-handsome-it-specialist-wearing-glasses-smiles-behind-him-personal.jpg?s=612x612&w=0&k=20&c=Dy8TjvDmeXWhR6gAZ_OuqLu3ytUJmtycEYdVQenpWoI="
title="Drew Andrews" />


<Story
image="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2022/03/16180754/software-engineer-job-skills-1.jpg"
profileSrc="https://i.scdn.co/image/ab6761610000e5ebc7fc654ca244dbeb61cc7392"
title="Paul Nilson" />

</div>
)
}
export default StoryReel;
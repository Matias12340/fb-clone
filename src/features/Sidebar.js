import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'; 
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'; 
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat' ;
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


function Sidebar() {
return (
<div className='sidebar'>

<SidebarRow src= 'https://i.pinimg.com/236x/98/55/4a/98554a182cf4eb5af62507510744a5f3--afro-men-male-haircuts.jpg' title='Matias Pessane'/>

<SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
<SidebarRow Icon={PeopleAltIcon} title="Friends" />
<SidebarRow Icon={ChatIcon} title="Messenger" />
<SidebarRow Icon={StorefrontIcon} title="Marketplace" />
<SidebarRow Icon={VideoLibraryIcon} title="Video"/>
<SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
<SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
</div>
)
}
export default Sidebar;
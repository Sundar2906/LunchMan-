import React from 'react'
import pic1 from '../images/pic1.jpg';
import { Link } from 'react-router-dom';
import button1 from "./Button.js"

import LocalDiningIcon from '@mui/icons-material/LocalDining';
import "./CD.css";
 export const images =[
    
{title:"Aroma",
 img: pic1,subtitle:"Relish the Delicacies at AROMA",
 Button:<Link to="/Menu"><button className="bb">Order Now <LocalDiningIcon/></button></Link>
},

{title:"#Hastag",
 img: pic1,subtitle:"Enjoy the taste of #Hashtag",
 Button:<button className="bb">Order Now<LocalDiningIcon/></button>
},

{title:"brokeneggs", 
img: pic1,subtitle:"Try the flavours of BROKENEGGS",
Button:<button className="bb">Order Now<LocalDiningIcon/></button>
},

]
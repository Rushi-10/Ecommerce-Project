import React, { useState } from "react"
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from "@mui/material";

import 'react-alice-carousel/lib/alice-carousel.css';
const HomeSectionCarousel = ({data, sectionName}) => {
    const[activeIndex,setActiveIndex]=useState(0);
    const responsive={
        0:{items:1},
        720:{items:3},
        1024:{items:4},
    };
    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);
    const syncActiveIndex=({item})=>setActiveIndex(item);
    const items=data.map((item)=><HomeSectionCard product={item}/>);
  return (
    <div className="border">
    <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
    <div className="relative p-5">
    
     <AliceCarousel
     items={items}
     disableButtonsControls
     responsive={responsive}
     disableDotsControls
     animationType={""}
     
     animationDuration={1000}
     onSlideChanged={syncActiveIndex}
     activeIndex={activeIndex}
     />
     {activeIndex < items.length-4 && <Button variant="contained" className="z-50 bg-white" onClick={slideNext} sx={{position:'absolute', top:'8rem', right:'0rem', transform:'translateX(50%) rotate(90deg)', bgcolor:"white"}} aria-label="next">
     <ArrowBackIosIcon sx={{transform:"rotate(90deg)",color:"black"}}/>
     </Button>}
     {activeIndex>=1 &&
     <Button variant="contained" className="z-50 bg-white" onClick={slidePrev} sx={{position:'absolute', top:'8rem', left:'0rem', transform:'translateX(-50%) rotate(-90deg)', bgcolor:"white"}} aria-label="next">
     <ArrowBackIosIcon sx={{transform:"rotate(90deg)",color:"black"}}/>
     </Button>}
  
     </div>
    </div>
  )
};

export default HomeSectionCarousel;

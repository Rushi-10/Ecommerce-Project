import React from "react"
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../data/mens_kurta";
import { mensShoesPage1 } from "../../../data/mens_shoes";
import { mensPantsPage1 } from "../../../data/mens_pants";
const HomePage = () => {
  return (
    <div> 
     <MainCarousel/> 
     <div className="space-y-1 py-20 flex flex-col justify-center px-5 lg:px-10">
     <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
     <HomeSectionCarousel data={mensShoesPage1} sectionName={"Men's Shoes"}/>
     <HomeSectionCarousel data={mensPantsPage1} sectionName={"Men's Pants"}/>
     </div>
     
     
     
    </div>
  )
};

export default HomePage;

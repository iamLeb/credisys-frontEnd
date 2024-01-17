import React from "react";
import { dataLandlord } from "..";
import Main1_Card from "../components/Main1_Card";


import img1 from "../../../../assets/Landlord/startup_8299528.png"
import img2 from "../../../../assets/Landlord/startup_8299528.png";
import img3 from "../../../../assets/Landlord/promotion_1077221.png"

export default function Main2() {
  return (
    <div className="w-screen p-20 flex flex-row justify-center items-center">

     
          <Main1_Card img={img1} tagline={dataLandlord[0].tagline} desc={dataLandlord[0].desc} />
          <Main1_Card img={img2} tagline={dataLandlord[1].tagline} desc={dataLandlord[1].desc} />
          <Main1_Card img={img3} tagline={dataLandlord[2].tagline} desc={dataLandlord[2].desc} />
      
    </div>
  );
}

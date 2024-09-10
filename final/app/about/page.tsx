import Card from "@/components/about/Card";
import { FC } from "react";


const About : FC = () => {
    return(
       <>
       <div>
        <figure>
        
        <img  className="card bg-base-100 w-96 shadow-xl"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="flex flex-row">
            <h1>
            If a dog chews shoes whose shoes does he choose?
            </h1>
        </div>
       </div>

        <div className="flex flex-row">
            <Card/>

            <Card/>
        </div>
       </>
    )
}
export default About ;
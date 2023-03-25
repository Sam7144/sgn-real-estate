import UncontrolledExample from "@/components/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carouse from "@/components/carousel2";
function singleProperty({datta}) {
  const images=datta.images
  
  return (
    <div className="props singleprop wrapper w-100 py-2">
      <Link href="/properties" legacyBehavior>
        <a>Back to the list</a>
      </Link>
      <div className="singleprop__description">
        <h5>location:</h5>
        <h3>{datta.name}</h3>
        <h5>District 5, Budapest</h5>
        <div className="singleprop__combined border-top border-success pt-1">
          <div className="singleprop__left w-50">
            <div className="left border">
              <div className="left__content p-4">
                <p>size:{datta.size}</p>
                <p>Bedrooms:{datta.bedrooms}</p>
                <p>Bathrooms:{datta.bathrooms}</p>
                <p>Floor:{datta.floor}</p>
              </div> 
              <div className="p-4">
                <p>View:{datta.view}</p>
                <p>Parking:{datta.parking}</p>
                <p>Condition:{datta.condition}</p>
                <p>status:{datta.status}</p>
              </div>
            </div>
            <div className="price">
            <button className="bg-primary p-2 text-2xl">Price:{datta.price}</button>
            </div>
            
            <h5>Property Description</h5>
            <p className="prop__des p-1">
              Such a delightful 1 room apartment with balcony in one of the most
              popular locations of the 5th district like this one is rare.
              Approx. 45 m² of living space offer classic high rooms, a spacious
              room and an approx. 3 m2 balcony facing the Boulevard. The
              apartment has been completely renovated and offers classically
              elegant furnishings with oak parquet floors, beautiful room
              heights and a modern bathroom. Here you will not only find
              numerous nice cafés and great restaurants in the immediate area,
              but also with its multitude of shops and the popular attractions
              within walking distance.
            </p>
            <div className='price'>
            <button className="bg-primary p-2 text-2xl my-2">Contact Agent</button>
            </div>
            
          </div>
          <div className="singleprop__right">
            
            <Carouse images={datta.images}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default singleProperty;
export async function getStaticPaths(){
  const {all}=await import('../Data/data.json');
  const allpaths=all.map((path)=>{
      return{
          params:{
              id:path.name
          }
      }
  })
  return{
      paths:allpaths,
      fallback:false
  }
}
export async function getStaticProps(context){
  const id=context.params.id;
  const {all}=await import('../Data/data.json');
  const eventsData=all.find(ev=>id===ev.name)
  return{
      props:{datta:eventsData}
  }
}

import React from 'react'
import Apartments from "@/components/apartments";
function properties({data}) {
  return (
    <div className='props wrapper'>
        <Apartments data={data}/>
    </div>
  )
}

export default properties
export async function getServerSideProps() {
    const { apartments } = await import("./Data/data.json");
    return {
      props: {
        data: apartments,
      },
    };
  }
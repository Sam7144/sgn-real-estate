import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
export default function about() {
  return (
    <div className="wrapper about ">
      <div className="bg-secondary py-2">
        <h1 className="text-center h3">About Empire </h1>
      </div>
      <div className="div2 mb-4">
        <div className='left mt-3'>
          <div className="div3">
            <Image src="/ri.jpg" className='left__image'width={300} height={300} alt="dt"></Image>
          </div>
          <div className='left__content'>
            <h6 className="mt-3">
              The company specializes in meeting all the needs of our
              international investors for their property investment in Budapest,
              for the foreign investor, who does not live in Budapest, and
              cannot or does not want to deal with all the issues related to his
              investment, we have established a professional and comprehensive
              system that includes a variety of real estate services that meet
              all needs.
            </h6>
            <p>
              Includes a unique method for locating assets according to exact
              parameters that match the nature of the investment, whether it is
              for personal needs, short or long term investment...
            </p>
            <h3>Property management</h3>
            
            <Image src="/man.jpg" width={200} className='pi div5' height={200} alt=""></Image>
            <p className='pc'>
              once the property is ready, and it is intended for investment, our
              rental system is one of the best in the market, regardless of
              whether it is a long-term or a short-term rent we have the teams
              that will work for you, and maximize the return on your
              investment.
            </p>
          </div>
        </div>
        <div className="di mt-3">
          <div className='div3'>
            <Image src="/r6.jpg" width={300} height={300} className='div5' alt="dtt"></Image>
          </div>
          <div>
            <h4>Interior design and renovations</h4>
            <p>
              The company has extensive experience in renovation and
              construction, from the plans, approvals, architecture to
              construction and furniture up to the key level, the whole process
              is in cooperation with the customers to make sure they get what
              they expect and even more.
            </p>
            <div className="div4">
            <Image src="/r7.jpg" width={250} height={250} className='div5' alt="dt"></Image>
            </div>
            <h3>Lawyer and accountant service</h3>
            <p>
              In order to make sure that the investments are made in an orderly
              manner and according to the law, we give access to our specialized
              professionals, such as a business lawyer and an accountant in the
              field of real estate, which gives our valued customers peace of
              mind that they have everything under one roof, All services are at
              fair and transparent prices.
            </p>
            <div className="div4">
            <Image src="/r2.jpg" width={250} height={250} className='div5' alt="dt"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

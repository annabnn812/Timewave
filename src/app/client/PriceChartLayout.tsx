'use client'
import React from 'react';
import PriceChart from '../page';
import Image from 'next/image';

const PriceChartLayout: React.FC = () => {
  return (
    <>
    <h1 className="text-2xl-semi text-gry-900" style={{ display: "flex", color: "#4c5a6c" ,justifyContent: "center", fontSize: 40 }}><span className="span">Time</span>wave</h1>
    <h1 className="text-2xl-semi text-gry-900" style={{ display: "flex", color: "#4c5a6c" ,justifyContent: "center", fontSize: 30 }}>7-Day Price Chart</h1> 
    <br></br>
    <div className="header_container">
    <div className="currency">
      <Image
        src="/2.png"
        width={30}
        height={30}
        alt="Atom"
      />
      <h1 style={{ marginLeft: '0.5rem' }}>$ATOM </h1>
     
      <h1 style={{ marginLeft: '0.5rem' }}> / </h1>
     <Image style={{ marginLeft: '0.5rem' }}
      src="/1.png"
      width={30}
      height={30}
      alt="Neutron"
    />
      <h1 style={{ marginLeft: '0.5rem' }}> $NTRN </h1> 
      </div>
     
    
      <div className="price_box">
        <p style={{color: "#082bc8d3"}}>Average Price: <span id="avgPrice"></span></p>
        <p style={{color: "#14c953d3"}}>Maximum Price: <span id="maxPrice"></span></p>
        <p style={{color: "#c8110bd3"}}>Minimum Price: <span id="minPrice"></span></p>
        </div>
        </div>

        <div id="stats">
        <div className="container">
        <PriceChart />
        <canvas id="priceChart"> </canvas>
      </div>
      <div className="footer">
        <a>
          Developer © AnnaBNN 2024
        </a>
      </div>
    </div>
    </>
  );
};

export default PriceChartLayout;
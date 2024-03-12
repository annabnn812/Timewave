'use client';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface PriceData {
  time: number;
  value: number;
}

const PriceChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API
      const encodedInput = encodeURIComponent(
        JSON.stringify({
          json: {
            tokens: [
              'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
              'untrn',
            ],
            chainId: 'neutron-1',
            dateRange: 'D7',
          },
        })
      );

      const apiUrl = `https://app.astroport.fi/api/trpc/charts.prices?input=${encodedInput}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('API Response:', data);
    
        const atomPrices: PriceData[] = data.result?.data?.json?.['ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9']?.series ?? [];
        const ntrnPrices: PriceData[] = data.result?.data?.untrn?.series ?? [];
    
        const combinedPrices = [...atomPrices, ...ntrnPrices];
        const values = combinedPrices.map((price: PriceData) => price.value);
        const labels = combinedPrices.map((price: PriceData) => new Date(price.time * 1000).toLocaleString());
    
        const avgPrice = document.getElementById('avgPrice');
        const maxPrice = document.getElementById('maxPrice');
        const minPrice = document.getElementById('minPrice');
    
        const average = values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
        const max = values.length > 0 ? Math.max(...values) : 0;
        const min = values.length > 0 ? Math.min(...values) : 0;
    
        if (avgPrice && maxPrice && minPrice) {
          avgPrice.textContent = average.toFixed(6);
          maxPrice.textContent = max.toFixed(6);
          minPrice.textContent = min.toFixed(6);
        }

        // Destroy previous chart instance
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

         // Create new chart instance
    const ctx = chartRef.current?.getContext('2d');
    if (ctx) {
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: '$ATOM-$NTRN Price',
              data: values,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Price',
              },
              ticks: {
                callback: (value: string | number, index: number, ticks: any[]) => {
                  if (typeof value === 'number') {
                    return value.toFixed(6);
                  } else {
                    return value;
                  }
                },
              },
            },
          },
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
    fetchData();
  }, []);

  return <canvas ref={chartRef} id="priceChart" />;
};

export default PriceChart;
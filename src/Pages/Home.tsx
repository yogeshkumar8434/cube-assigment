import React, { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const Home = () => {
  const [customers, setCustomers] = useState<number>(10);
  const [currCustomer, setCurrCustomer] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);

  const handleCusomer = (i: number) => {
    setCurrCustomer(i);
  };

  const fetchImages = () => {
    axios
      .get(`https://picsum.photos/v2/list?limit=9`)
      .then((res) => {
        const imageDatas: string[] = res?.data.map((curr: any) => curr?.download_url);
        setImages(imageDatas);
      })
      .catch((err) => console.log(err));
  };

  const handleScroll = () => {
    setCustomers(customers + 10);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffledImages = [...images].sort(() => Math.random() - 0.5);
      setImages(shuffledImages);
    }, 10000); 

    return () => clearInterval(interval); 
  }, [images]);

  return (
    <div className='w-11/12 max-w-[1440px] mt-10 flex justify-center m-auto border border-black-500 rounded'>
      <div className='w-3/12'>
        <Sidebar customers={customers} handleScroll={handleScroll} currCustomer={currCustomer} handleCustomer={handleCusomer} />
      </div>
      <div className='w-9/12'>
        <MainContainer currCustomer={currCustomer} images={images} />
      </div>
    </div>
  );
};

export default Home;

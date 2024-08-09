import React, { useEffect, useState, useRef } from 'react'
import SingleCustomer from './SingleCustomer';

type props = {
  currCustomer: number;
  customers: number;
  handleScroll: any;
  handleCustomer: (i: number) => void;
};

const Sidebar: React.FC<props> = ({ currCustomer , customers, handleCustomer, handleScroll }) => {
  const containerRef = useRef<HTMLDivElement>(null); 
  const [render , setRender ] = useState(false)

  useEffect(() => {
    const container = containerRef.current;

    const handleScrollEvent = () => {
      if (!container) return;
      const { clientHeight, scrollTop, scrollHeight } = container;
      if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
        handleScroll()
        setRender(!render)
      }
    };

    container?.addEventListener("scroll", handleScrollEvent); 
    return () => {
      container?.removeEventListener("scroll", handleScrollEvent);
    };
  }, [render]);

  const handleClick = (id: number) => {
    handleCustomer(id);
  };

  return (
    <div ref={containerRef} className='overflow-y-scroll' style={{ maxHeight: '550px', overflowY: 'scroll' }}>
      {
        new Array(customers).fill(1).map((curr, i) => {
          return <SingleCustomer {...curr} currCustomer={currCustomer} handleClick={() => handleClick(i)} i={i} key={i} />;
        })
      }
    </div>
  );
};

export default Sidebar;

import React from "react";

const Cards = () => {
  const header = "Hello! Good Morning";
  return (
    <section className=" m-10">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-blue-700 font-thin text-4xl">{header}</h1>
        <p className="text-yellow-500 mt-2 ml-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          eveniet recusandae distinctio pariatur eum, modi accusantium
          aspernatur sint architecto incidunt maiores laudantium necessitatibus
          quaerat possimus omnis nisi magni eos voluptates.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-900 ml-2 mt-5">
          Learn More
        </button>
      </div>
      <div className="my-20 flex space-x-4 m-44">
        <div className='border rounded-md bg-slate-100 py-4 px-4'>
        <div className="font-sans text-blue-100 top-0 text-9xl ml-60">01</div>
          <h4 className="text-3xl ">Exercise 1</h4>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          
          </div>

          <div className='border rounded-md bg-slate-100 py-4 px-4'>
          <div className="font-sans text-blue-100 top-0 text-9xl ml-60">02</div>
          <h4 className="text-3xl ">Exercise 2</h4>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          
          </div>

          <div className='border rounded-md bg-slate-100 py-4 px-4'>
          <div className="font-sans text-blue-100 top-0 text-9xl ml-60">03</div>
          <h4 className="text-3xl ">Exercise 3</h4>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          
          </div>
          
      </div>
    </section>
  );
};

export default Cards;

import React from 'react';
import { housesData } from '../data';
import {useParams} from 'react-router-dom';
import { BiBed,BiBath,BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  console.log(id);
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return <section>
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{house.name}</h2>
          <h3 className='text-lg mb-4'>{house.address}</h3>
        </div>
        <div className='mb-4 mr-20 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
          <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
        </div>
        <div className='text3xl font-semibold text-violet-600'>$ {house.price}</div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={house.imageLg} alt=''></img>
          </div>
          <div className='flex gap-x-6 text-violet-700 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl'/>
              <div>{house.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl'/>
              <div>{house.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl'/>
              <div>{house.surface}</div>
            </div>
          </div>
          <div>{house.description}</div>
        </div>
        <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <div className='w-20 h-22 p-1 border border-gray-300 rounded-full md:border-gray-100 '>
              <img src={house.agent.image} alt=""/>
            </div>
            <div>
              <div>{house.agent.name}</div>
              <Link to="" className="text-violet-700 text-sm">View Listing</Link>
            </div>
          </div>
          <form className='flex flex-col gap-y-4' action='https://formsubmit.co/joshuabdeckard@gmail.com' method='POST'>
            <input className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm " type="text" 
            placeholder='Name*' name="name" required/>
            <input className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm " type="text" 
            placeholder='Email*' name="email" required/>
            <input className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm " type="text" 
            placeholder='Phone*' name="phone" required/>
            <input type="hidden" name="_subject" value={`Business Request: ${house.address}`} />
            <textarea className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm 
            text-gray-400" placeholder='Message*' defaultValue={`Hello, I am interested in the property located at ${house.address}.`} name="message"></textarea>
            <div className="flex gap-x-2">
              <button className="bg-violet-700 border border-violet-700 text-white hover:border-violet-500 hover:bg-white
              hover:text-violet-700 rounded p-4 text-sm w-full transition duration-300">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

};

export default PropertyDetails;
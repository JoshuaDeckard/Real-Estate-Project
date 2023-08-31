import React, {useState,useEffect,useContext} from 'react';
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import {BiHomeAlt} from 'react-icons/bi';
import {Menu} from '@headlessui/react'
import {HouseContext} from './HouseContext'

const PropertyDropdown = () => {
  const {property,setProperty,properties} = useContext(HouseContext);
  const [isOpen,setIsOpen] = useState(false);
  return (
   <Menu as='div' className = 'dropdown relative'>
    <Menu.Button onClick={()=> setIsOpen(!isOpen)} className = 'dropdown-btn w-full text-left'>
      <BiHomeAlt className="dropdown-icon-primarys text-[17px]"/>
      <div className='text-[15px] font-medium leading-tight m-2'>
        {property}
        <div className = 'text-[13px]'>Select your Home</div>

      </div>
      {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary'/>
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary"/>
          )
        }
    </Menu.Button>
  

    <Menu.Items className = 'dropdown-menu'>
      {properties.map((property,index)=>{
        return (
          <Menu.Item
            onClick={()=>setProperty(property)}
            className='cursor-pointer
            hover:text-violet-700 transition'
            as='li'
            key={index}
            >
            {property}
            </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>
    );
  };




export default PropertyDropdown;

import React, { useState } from "react";
import banner from "./../assets/images/banner.jpg";
import { IoSearchOutline } from "react-icons/io5";
const Search = ({selectedTag}) => {
  const tags = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "React",
    },
    {
      id: 3,
      name: "React Native",
    },
    {
      id: 4,
      name: "Angular",
    },
    {
      id: 5,
      name: "UI/UX",
    },
  ];
  const [activeIndex,setActiveIndex]=useState(0);
  return (
    <div className="flex justify-center mt-8 flex-col px-[70] md:px-[150px]">
      <img src={banner} className="rounded-2xl" />
      <div className="bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center">
        <IoSearchOutline className="text-[20px] text-gray-400" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="flex gap-10 justify-center mt-5">
        {tags.map((item, index) => (
          <ul key={item.id}
            onClick={() => {setActiveIndex(index);selectedTag(item.name);}}
            className={`${
              index == activeIndex ? "bg-red-500 text-white" : null
            } p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px]
             border-red-500 transition-all duration-100 ease-in-out`}
          >
            <li className='line-clamp-1'>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Search;

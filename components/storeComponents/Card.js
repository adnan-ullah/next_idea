import Image from "next/image";
import React from "react";

export default function Card({ eachItem }) {
  const { id, title , image , description , price} = eachItem;
  return (
  
      <div className="max-w-md max-h-sm rounded-lg bg-neutral-900 overflow-hidden shadow-lg">
       <Image src={image} height='40px' width='30px' alt={title} layout="responsive"/>
        <div className="px-6 py-4">
          <div className="text-green-200 font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-yellow-200 text-base">
            {description.substring(0,100)+'...'}
          </p>
          <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <p className="text-red-900 ">{price+'$'}</p>
          </span>
        </div>

        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #enigma
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #adnanCS
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #gsm-300
          </span>
        </div>
      </div>

  );
}

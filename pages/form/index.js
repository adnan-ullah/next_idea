import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Studenst() {
  const router = useRouter();
  const [idItem, setID_Item] = useState(null);
  const [titleItem, setTitle_Item] = useState(null);
  const [desc, setDesc_Item] = useState(null);
  const [imageItemURL, setImageItemURL] = useState(null)

  const submitItemData = async () => {

     // setImageItemURL(URL.createObjectURL(imageItemURL));

     const itemData = {
      id: idItem,
      title: titleItem,
      description: desc,
      image: imageItemURL
     
     }
  
    const res = await fetch("../api/store", {
      method: "POST",
      body: JSON.stringify({itemData}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
  };

  return (
    <div className="card bg-yellow-100">
      <form className="form p-5 ">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>ID</label>
            <input
              type="text"
              className="form-control"
              id="itemID"
              value={idItem}
              onChange={(e) => setID_Item(e.target.value)}
              placeholder="id"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              id="itemTitle"
              value={titleItem}
              onChange={(e) => setTitle_Item(e.target.value)}
              placeholder="title"
            />
          </div>
        </div>
        <div className="form-group">
          <label f>Description</label>
          <input
            type="text"
            className="form-control"
            id="itemDescription"
            value={desc}
            onChange={(e) => setDesc_Item(e.target.value)}
            placeholder="......"
          />
        </div>

        <div className="mt-6 mr-6 inline-block relative w-64">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>
              Really long option that will likely overlap the chevron
            </option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>



        

        <hr />
        <div className=" mt-10 custom-file bg-green-300 rounded-lg shadow-xl">
          <input
            type="file"
            
            className="imagefile bg-dark"
      
            onChange={(e)=>{if (e.target.files && e.target.files[0]) {
              const i = e.target.files[0];
              setImageItemURL(URL.createObjectURL(i));
            }}}
          />
          <label className="custom-file-label ">Choose file...</label>
          <div className="invalid-feedback">
            Example invalid custom file feedback
          </div>
        </div>

        <button
          className="bg-gray-300 hover:bg-green-400 text-gray-800 mt-4 mb-3 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={submitItemData}
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Add to Store</span>
        </button>

        <div className="mt-5 max-w-sm mx-auto flex p-6 bg-green-300 rounded-lg shadow-xl">
          <div className="flex-shrink-0">
       
          </div>
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">Enigma is here!</h4>
            <p className="text-base text-gray-600 leading-normal">
              Please fill the form, TU!
            </p>
          </div>
        </div>

       
      </form>
    </div>
  );
}

import React from "react";
import Card from "../components/storeComponents/Card";
Card
export default function store({ data }) {
  return (
    <div className="grid grid-cols-3 gap-2 m-10">
      {data.map((item, key) => (
        <div key={key}>
            <Card eachItem = {item}/>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

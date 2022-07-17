import Head from "next/head";
import React from "react";

export default function Meta({ title, keywords, desc }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={desc} />
      <meta name="keyword" content={keywords} />
      
    </Head>
  );
}

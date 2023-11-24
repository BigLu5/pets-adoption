import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return <h1>These are the params: {params.slug}</h1>;
}

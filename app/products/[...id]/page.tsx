import React from 'react';

export default function ProductPage({ params }: { params: { id: number } }) {
  return <div>{params.id}</div>;
}

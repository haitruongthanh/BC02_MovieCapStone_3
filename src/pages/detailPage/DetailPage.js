import React from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  let param = useParams();
  console.log(param);
  return <div>DetailPage</div>;
}

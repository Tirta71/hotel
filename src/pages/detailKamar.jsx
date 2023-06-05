import React from "react";
import { useParams } from "react-router-dom";
import JenisKamar from "../component/DetailKamar/childDetailKamar";

export default function DetailKamar() {
  const { id } = useParams();

  return <JenisKamar id={id} />;
}

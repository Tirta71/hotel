import React from "react";
import { useParams } from "react-router-dom";
import JenisKamar from "../component/DetailKamar/childDetailKamar";

import SocialProfiles from "../component/SocialMedia";

export default function DetailKamar() {
  const { id } = useParams();

  return (
    <>
      <SocialProfiles />
      <JenisKamar id={id} />
    </>
  );
}

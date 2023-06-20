import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('detail') === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>About</p>
      {detail && <p>detail...</p>}
    </div>
  )
}

export default About;
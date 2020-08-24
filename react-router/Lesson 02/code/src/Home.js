import React from 'react';
import { useLocation } from "react-router-dom"

function Home() {
  const query = new URLSearchParams(useLocation().search);
  window.q = useLocation();
  const state = query.get("state")
  const country = query.get("country")
  const planet = query.get("planet")
  return (
    <div className="right">
      <span className="under-line">{ useLocation().search }</span>

      <br />
      <br />
      Home Page

      <br />
      <br />
      { state && <span style={{ color: '#086972' }}>State: {state}</span> }

      <br />
      <br />
      { country && <span style={{ color: '#01a9b4' }}>Country: {country}</span> }

      <br />
      <br />
      { planet && <span style={{ color: '#87dfd6' }}>Planet: {planet}</span> }
    </div>
  )
}

export default Home;

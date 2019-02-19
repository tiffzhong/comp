import React from "react";

import "./Spongebob.css";
function Spongebob(props) {
  return (
    <div className="all">
      <div className="sponge1">
        <img src="https://cdn.vox-cdn.com/thumbor/wnfK7HybprDP8_VZtwpiNYRByKE=/0x0:638x404/1200x800/filters:focal(268x151:370x253)/cdn.vox-cdn.com/uploads/chorus_image/image/62424386/Spongebob_Squarepants.0.png" />
      </div>
      <div className="sponge2">
        <img src="https://www.wikihow.com/images/d/df/Draw-Squidward-from-SpongeBob-SquarePants-Step-22.jpg" />
      </div>
      <div className="sponge3">
        <img src="https://pbs.twimg.com/media/CTYWKY1WEAALCxf.jpg" />
      </div>
      <div className="sponge4">
        <img src="https://costumewall.com/wp-content/uploads/2018/08/sandy-cheeks.jpg" />
      </div>

      <input className="focus1" />
      <select>
        <option value="black">black</option>
        <option value="white" disabled>
          white
        </option>
        <option value="purple">purple</option>
        <option value="green" disabled>
          green
        </option>
      </select>
    </div>
  );
}

export default Spongebob;

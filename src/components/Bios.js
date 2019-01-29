import React from "react";

function Bios(props) {
  let { city, bio_id, bio_interest } = props;
  return (
    <div>
      {city} {bio_interest}
    </div>
  );
}
export default Bios;

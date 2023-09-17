import React from "react";

function Tag({ logementTags }) {
  return (
    <div>
      <p className="logement-tag">{logementTags}</p>
    </div>
  );
}

export default Tag;
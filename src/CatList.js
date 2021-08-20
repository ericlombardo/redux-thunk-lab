import React from 'react';

const CatList = ({ catPics }) => {
  
  return (
    <div>
      {catPics.map(catPic => {
        return (
          <img key={catPic.id} src={catPic.url} alt="pic" />
        )
      })}
    </div>
  )
}

export default CatList
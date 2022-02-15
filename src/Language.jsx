import React from 'react'

const Language = ({lang}) => {
  return (
    <div>
      {lang.map((lang,index) => 
        <p key={index}>{lang}</p>
      )}
    </div>
  )
}

export default Language;
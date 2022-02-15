import React, { useEffect, useState } from 'react'

const MyDate = () => {
    const [date , setDate] = useState(new Date());
    const [boom , setBoom] = useState("");

  useEffect(() => {
     setTimeout(() => setDate(new Date()), 1000);
  })
  useEffect(() => {
    setTimeout(() => setBoom(`${boom} boom`), 10000);
 }, [])

  return( 
      <>
        <h1> L'heure actuelle est {date.toLocaleTimeString()}</h1>
        <p> {boom}</p>
      </>
    
  )

}


export default MyDate;
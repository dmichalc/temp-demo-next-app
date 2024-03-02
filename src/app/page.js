"use client";
import HelloWorld from "@/app/HelloWorld";
import SimpleInput from "@/app/SimpleInput";

import styles from "./page.module.css"
import React, { useState } from 'react';
export default function HomePage() {
  const [showFields, setShowFields] = useState(true);
  return (
  <>
  <main className={ styles.bodText }>
    <HelloWorld />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      In et tempus ligula. Phasellus quis feugiat mauris, at vulputate 
      mi. Nam semper hendrerit velit, sed sollicitudin sapien pharetra 
      nec. Proin eget urna in odio aliquet fermentum vel ut ante. 
      In sed volutpat odio. Maecenas faucibus consectetur magna. 
      Quisque faucibus cursus tortor. Pellentesque ex est, posuere 
      et neque convallis, dapibus euismod velit. Aenean tempor id leo 
      at tincidunt. Sed at nunc finibus, pulvinar elit a, efficitur 
      velit. Pellentesque lacinia ipsum eu ultrices varius.</p>
    
    </main> 
    <footer>
    {showFields ? <SimpleInput /> : null}
        <button onClick={() => { setShowFields(false) }}>Remove</button>
    </footer>
    </> )
}

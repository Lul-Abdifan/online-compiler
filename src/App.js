import React,{useState,useEffect} from 'react';
import { DarkModeCom } from './DarkMode';

import Edit from './Edit';
import Navbar from './Navbar';
import Loading from './Slider';



function App() {
  let [loading, setLoading] = useState(true);
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setLoading(false)
    },2500)
    return () => clearTimeout(timeOut);
  },[])

  

  return (
    <div >
      {loading ? <Loading/> :
      <div>
      <DarkModeCom />
      {/* <Navbar />
      <Edit/> */}
      
      </div>
}
    </div> 
      

 
  
  );
}

export default App;
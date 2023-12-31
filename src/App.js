import React, { useState, useEffect } from 'react';
import Edit from './Edit';
import Navbar from './Navbar';
import Loading from './Slider';


function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div>
      {loading ? <Loading /> :
        <div>
          <Navbar />
          <Edit />
        </div>
      }
    </div>
  );
}

export default App;

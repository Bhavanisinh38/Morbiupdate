import React, { useState, useEffect } from 'react';

// Images Common File
import Img from '../Components/Img';

function Loader() {
    const [addDeactivate, setDeactivateClass] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setDeactivateClass(true);
      }, 100);
  
      return () => clearTimeout(timeout);
    }, []);
    
    return (
        <div className={`web-preloader ${addDeactivate ? 'deactivate' : ''}`}>
            <span className="web-inner">
                <img src={Img.preloader} alt="" />
            </span>
        </div>
    );
}

export default Loader;
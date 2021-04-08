import React from 'react'
import './Input.css'

const  Input = ({config,changed}) => {
      
          let inputElement = null;
         switch(config.inputType){
             case ('input') : 
             inputElement = <input className="Input" {...config.inputDetails} value={config.value} onChange={changed}/>;
             break;
             case ('textarea') : 
             inputElement = <textarea className="Input" {...config.inputDetails}  value={config.value} onChange={changed}/>
             break;
             default : 
             inputElement = <input className="Input" {...config.inputDetails}  value={config.value} onChnage={changed}/>
             break;
         }
        return (
            <div>
                 {inputElement}
            </div>
         
        );
    }


export default Input;
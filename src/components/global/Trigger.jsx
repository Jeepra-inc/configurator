// ButtonComponent.js
import React from 'react';
import { Tooltip } from 'react-tooltip';


const TriggerButton = ({ onClick, svg, className, toolTip }) => {
  return (
    <>
    <button 
    onClick={onClick} 
    className={className}
    data-tooltip-id="controlToolTip"
    data-tooltip-content={toolTip}
    >{svg}</button>
    <Tooltip 
      id="controlToolTip" 
      place="right"
      />
    </>
  );
};

export default TriggerButton;

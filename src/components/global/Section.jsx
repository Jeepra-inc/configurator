import React from 'react';
import { Tooltip } from 'react-tooltip';

const Section = ({ heading, label, labelIcon, clickEvent, map, mapSelector, dataShape, bugName, uniqueClass}) => {
  
  return (
    <div className={uniqueClass ? `configSections ${uniqueClass}` : 'configSections'}>
      <div className="configTitle">
        <div className='ctLeft'>
          <h4> { heading } </h4>
          <span> { label } </span>
        </div>
        {labelIcon ? (
          <div className='ctRight'>
            <img src={labelIcon} alt="Label Icon" />
          </div>
        ) : null }
      </div>
      <div className="configvalue">
        {map.map((item, index) => (
          <div
            key={index}
            className={`item ${
              dataShape
                ? mapSelector === item.frameData + '-' + dataShape
                  ? "item--active"
                  : ""
                : bugName
                ? item.name === mapSelector.name
                  ? "item--active"
                  : ""
                : item.name === mapSelector
                ? "item--active"
                : ""
            }`}


            onClick={() => clickEvent(item, index)}
            data-tooltip-id="tooltip"
            data-tooltip-content={item.label}
            data-shape = {item.frameData + '-' + dataShape}
          >
            <div className='configIcon'>
              { item.iconPath ? <img src={item.iconPath} /> : null }
              { item.color ? <div className="item_dot" style={{ backgroundColor: item.color }} /> : null }
            </div>
            <div className="check"></div>
            {/* {item.priceRectangle}
            <br />
            {item.price} */}
            <Tooltip 
              id="tooltip" 
              place="top"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;

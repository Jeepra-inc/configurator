import React, { useEffect, useState } from 'react';
import { useCustomization } from "../../../contexts/Customization"
import Section from '../../../components/global/Section';
import { shapeMap, standardFabricMap, gilfordFabricMap, finishMap, hangerMap, standMap, framePattern, backMap } from './dataSettings';
import Addtocart from '../../../components/global/AddCart';
import SelectionValue from '../../../components/global/SelectionValue';

const Configurator = () =>
{   
    const {
        shapeMapSelector, 
        setShapeMapSelector,
        standardFabricMapSelector, 
        setStandardFabricMapSelector,
        gilfordFabricMapSelector,
        setGilfordFabricMapSelector,
        finishMapSelector, 
        setFinishMapSelector,
        standMapSelector, 
        setStandMapSelector, 
        hangerMapSelector, 
        setHangerMapSelector, 
        backMapSelector, 
        setBackMapSelector,  
        pattern, 
        setPattern
    } = useCustomization()


    
//////////////////////////////////////////////////////////////////////////////////////////


    //Handle box panel shape data & presentation
    const initialShapeFrameData = shapeMap.length > 0 ? shapeMap[0].frameData : "";
    const [selectedShapeFrameData, setSelectedShapeFrameData] = useState(initialShapeFrameData);
    const [selectedLabel, setSelectedLabel] = useState(0);
    const [labelIcon, setLabelIcon] = useState(0);
    const [shapePriceValue, setShapePriceValue] = useState(0);
    const [shapeName, setShapeName] = useState("");
    const shapePriceData = (item) => { setShapePriceValue(item.price); };
    const labelData = (item) => { setSelectedLabel(item.label); };
    const labelIconData = (item) => { setLabelIcon(item.iconPath); };

    const shapeValue = (item) => { 
        setShapeMapSelector(item.name);
        setShapeName(item.name);
     };    
    const handleShapeClick = (item) => {
                                shapeValue(item);
                                labelData(item);
                                labelIconData(item);
                                shapePriceData(item);
                                setStoredValues(item.name);
                                setSelectedShapeFrameData(item.frameData); 
                                
    };    

    useEffect(() => {
        if (shapeMap.length > 0) {
            labelData(shapeMap[0]);
            labelIconData(shapeMap[0]);
            shapePriceData(shapeMap[0]);
        }
    }, [shapeMap]);


//////////////////////////////////////////////////////////////////////////////////////////


    //Handle box Pattern shape data & presentation
    const [patternLabel, setPatternLabel] = useState(0);
    const [patternIcon, setPatternIcon] = useState(0);
    const patternLabelData = (item) => { setPatternLabel(item.label); };
    const patternIconData = (item) => { setPatternIcon(item.iconPath); };
    const frameSelector = (item) => { setPattern(item.frameData + '-' + selectedShapeFrameData) };

    //Price update
    const [patternPriceValue, setPatternPriceValue] = useState(0);
    const [selectedFrameData, setSelectedFrameData] = useState(null);
    const [dataIndex, setDataIndex] = useState(0); 
    const patternPriceData = (item) => { 
        if (shapeName === "rectangle") {
            setPatternPriceValue(item.priceRectangle);
          } else {
            setPatternPriceValue(item.price);
          }
     };
         
    const handleFrames = (item, index) => { 
        frameSelector(item);
        patternLabelData(item);
        patternIconData(item);

        setDataIndex(index);
        setSelectedFrameData(item);
    }


    //Update price based on condition of rectangle selection
    useEffect(() => {

        if (framePattern.length > 0 && selectedShapeFrameData) {
            setPattern(`${framePattern[dataIndex].frameData}-${selectedShapeFrameData}`);
        }

        
        if (framePattern.length > 0) {
            patternLabelData(framePattern[0]);
            patternIconData(framePattern[0]);

            if (shapeName === "rectangle") {
                patternPriceData(framePattern[dataIndex]);
            } else {
                patternPriceData(selectedFrameData || framePattern[0]);
            }
        }
    }, [framePattern, shapeName, dataIndex, selectedFrameData, framePattern, selectedShapeFrameData]);
    

    
/////////////////////////////////////////////////////////////////////////////////////////



    //Handle color selections & Presentation
    const [selectStandardFabric, setSelectStandardFabric] = useState(0);
    const [standardFabricLabelIcon, setStandardFabricLabelIcon] = useState(0);
    const standardFabricData = (item) => { setSelectStandardFabric(item.label); };
    const standardFabricIcon = (item) => { setStandardFabricLabelIcon(item.iconPath); };

    const standardFabricValue = (item) => { setStandardFabricMapSelector(item) };
    const handleButtonColor = (item) => {
        standardFabricValue(item);
        standardFabricData(item);
        standardFabricIcon(item);
        // calcClicker(item);
        setStoredColors(item.name);
        setSelectGilfordFabric(null)
        setGilfordFabricLabelIcon(null)
        gilfordFabricValue(false)
        setGilfordValue(null)
        setUpdatedPrice(null)

    };

    useEffect(() => {
        if (standardFabricMap.length > 0) {
            standardFabricData(standardFabricMap[0]);
            standardFabricIcon(standardFabricMap[0]);
        }
    }, []);



/////////////////////////////////////////////////////////////////////////////////////////

     //Handle Gilford Fabric color selections & Presentation
     const [updatedPrice, setUpdatedPrice] = useState(0);
     const [selectGilfordFabric, setSelectGilfordFabric] = useState(null);
     const [gilfordFabricLabelIcon, setGilfordFabricLabelIcon] = useState(null);
     const gilfordFabricData = (item) => { setSelectGilfordFabric(item.label); };
     const gilfordFabricIcon = (item) => { setGilfordFabricLabelIcon(item.iconPath); };

     //Price update
    const [gilfordValue, setGilfordValue] = useState(0);
    const [selectedGilfordData, setSelectedGilfordData] = useState(null);

    const gilfordPriceData = (item) => { 
        if (shapeName === "rectangle") {
            setGilfordValue(item.priceRectangle);
          } else {
            setGilfordValue(item.price);
          }
     };

     const gilfordFabricValue = (item) => { setGilfordFabricMapSelector(item) };
     const handleGilfordFabricClick = (item) => {
         gilfordFabricValue(item);
         gilfordFabricData(item);
         gilfordFabricIcon(item);
         setStoredColors(item.name);

         // Store the gilfordValue in updatedPrice
    const newPrice = shapeName === "rectangle" ? item.priceRectangle : item.price;
    setGilfordValue(newPrice);
    setUpdatedPrice(newPrice);


         setSelectedGilfordData(item);

         setSelectStandardFabric(null);
         setStandardFabricLabelIcon(null);
         standardFabricValue(false)
         
         
     };
    //  console.log(updatedPrice)
     useEffect(() => {
        // console.log(updatedPrice);

        if (gilfordFabricMap.length > 0) {     
          if (shapeName === "rectangle") {
            gilfordPriceData(gilfordFabricMap[0]);
          } else {
            const initialSelectedData = gilfordFabricMap[0] ? gilfordFabricMap[0] : null;
            gilfordPriceData(selectedGilfordData || initialSelectedData);
          }
        }
      }, [updatedPrice, gilfordFabricMap, shapeName, selectedGilfordData]);

/////////////////////////////////////////////////////////////////////////////////////


    //Finish of box panel click handle and index selection
    const [selectFinish, setSelectFinish] = useState(0);
    const [selectFinishIcon, setSelectFinishIcon] = useState(0);
    const finishData = (item) => { setSelectFinish(item.label); };
    const finishIcon = (item) => { setSelectFinishIcon(item.iconPath); };

     //Price update
     const [finishValue, setFinishValue] = useState(0);
     const [selectedFinishData, setSelectedFinishData] = useState(null);
     const [finishDataIndex, setFinishDataIndex] = useState(0); 
     const finishPriceData = (item) => { 
         if (shapeName === "rectangle") {
             setFinishValue(item.priceRectangle);
           } else {
             setFinishValue(item.price);
           }
      };

    const finishValueMap = (item) => { setFinishMapSelector(item.name) };
    const handleFinishClick = (item, index) => {
        finishValueMap(item);
        finishData(item);
        finishIcon(item);
        // calcClicker(item);
        // setStoredPrice(item.price);
        // setStoredColors(item.name);

        setSelectedFinishData(item);
        setFinishDataIndex(index);
    };

    useEffect(() => {
        if (finishMap.length > 0) {
            finishValueMap(finishMap[finishDataIndex]);
            finishData(finishMap[0]);
            finishIcon(finishMap[0]);

            if (shapeName === "rectangle") {
                finishPriceData(finishMap[finishDataIndex]);
            } else {
                finishPriceData(selectedFinishData || finishMap[0]);
            }
        }
      }, [finishMap, shapeName, finishDataIndex, selectedFinishData]);



///////////////////////////////////////////////////////////////////////////////////////


    //Handle Gilford Fabric color selections & Presentation

    const [storedStandPrice, setStoredStandPrice] = useState(0);
    const [selectStand, setSelectStand] = useState(0);
    const [standLabelIcon, setStandLabelIcon] = useState(0);
    const standData = (item) => { setSelectStand(item.label); };
    const standIcon = (item) => { setStandLabelIcon(item.iconPath); };

    const standValue = (item) => { setStandMapSelector(item) };
    const handleStandClick = (item) => {
        standValue(item);
        standData(item);
        standIcon(item);
        // calcClicker(item);
        setStoredStandPrice(item.price);
        setStoredColors(item.name);
    };

    useEffect(() => {
       if (standMap.length > 0) {
            standValue(standMap[0]);
            standData(standMap[0]);
            standIcon(standMap[0]);
       }
   }, [standMap]);

////////////////////////////////////////////////////////////////////////////////////////


    const [storedBackPrice, setStoredBackPrice] = useState(0);
    const [selectBack, setSelectBack] = useState(0);
    const [backLabelIcon, setBackLabelIcon] = useState(0);
    const backData = (item) => { setSelectBack(item.label); };
    const backIcon = (item) => { setBackLabelIcon(item.iconPath); }; 

    const backValue = (item) => { setBackMapSelector(item.name) };
    const handleBackClick = (item) => {
        backValue(item);
        backData(item);
        backIcon(item);
        setStoredBackPrice(item.price)
    };

    useEffect(() => {
        if (backMap.length > 0) {
            backValue(backMap[0]);
            backData(backMap[0]);
            backIcon(backMap[0]);
        }
    }, [backMap]);

////////////////////////////////////////////////////////////////////////////////////////////

    const [selectHanger, setSelectHanger] = useState(0);
    const [hangerLabelIcon, setHangerLabelIcon] = useState(0);
    const hangerData = (item) => { setSelectHanger(item.label); };
    const hangerIcon = (item) => { setHangerLabelIcon(item.iconPath); }; 

    const hangerValue = (item) => { setHangerMapSelector(item.name) };
    const handleHangerClick = (item) => {
        hangerValue(item);
        hangerData(item);
        hangerIcon(item);
    };

    useEffect(() => {
        if (hangerMap.length > 0) {
            hangerValue(hangerMap[0]);
            hangerData(hangerMap[0]);
            hangerIcon(hangerMap[0]);
        }
      }, [hangerMap]);


////////////////////////////////////////////////////////////////////////////////////////

    const [storedValues, setStoredValues] = useState(new Set());
    const [storedColors, setStoredColors] = useState(new Set());





    const totalPriceSum = shapePriceValue + patternPriceValue + updatedPrice  + finishValue + storedStandPrice + storedBackPrice;    

    // console.log(gilfordValue);
    return (
        <div className="configurator">
                
            <Section 
                heading= "Shape"
                map={shapeMap}
                mapSelector={shapeMapSelector}
                clickEvent={handleShapeClick}
                label={selectedLabel}
                labelIcon={labelIcon}     
            />    
            
            <Section 
                heading= "Pattern"
                map={framePattern}
                mapSelector={pattern}
                clickEvent={handleFrames}
                label={patternLabel  + '-' + selectedShapeFrameData}
                labelIcon={patternIcon}
                dataShape={selectedShapeFrameData} 
                uniqueClass="pattern"           
            />

            <Section 
                heading= "Standard Fabric"
                bugName="yes"
                map={standardFabricMap}
                mapSelector={standardFabricMapSelector}
                clickEvent={handleButtonColor}
                label={selectStandardFabric}
                labelIcon={standardFabricLabelIcon}            
            /> 

            <Section 
                heading= "Gilford of Maine Fabric"
                map={gilfordFabricMap}
                mapSelector={gilfordFabricMapSelector}
                clickEvent={handleGilfordFabricClick} 
                label={selectGilfordFabric}
                labelIcon={gilfordFabricLabelIcon} 
                bugName="yes"  
            />    

            <Section 
                heading= "Finish"
                map={finishMap}
                mapSelector={finishMapSelector}
                clickEvent={handleFinishClick}  
                label={selectFinish}
                labelIcon={selectFinishIcon}       
            />

            <Section 
                heading= "Freestanding Options for square or narrow"
                map={standMap}
                mapSelector={standMapSelector}
                clickEvent={handleStandClick} 
                label={selectStand}         
                labelIcon={standLabelIcon}
                bugName="yes"  
            />

            <Section 
                heading= "Back Cover"
                map={backMap}
                mapSelector={backMapSelector}
                clickEvent={handleBackClick}
                label={selectBack} 
                labelIcon={backLabelIcon}    
            />

            <Section 
                heading= "Hardware"
                map={hangerMap}
                mapSelector={hangerMapSelector}
                clickEvent={handleHangerClick}  
                label={selectHanger}  
                labelIcon={hangerLabelIcon}        
            />

            <SelectionValue 
                Shape={selectedLabel}
                Pattern={patternLabel  + '-' + selectedShapeFrameData}
                StandardFabric={selectStandardFabric}
                GilfordFabric={selectGilfordFabric}
                Finish={selectFinish}
                iconShape = {labelIcon}
                iconPattern = {patternIcon}
                iconStandardFabric = {standardFabricLabelIcon}
                iconGilford = {gilfordFabricLabelIcon}
                iconFinish = {selectFinishIcon}
                iconStand = {standLabelIcon}
                iconBack = {backLabelIcon}
                iconHanger = {hangerLabelIcon}
                Stand={selectStand}
                BackCover={selectBack}
                Hardware={selectHanger}
                Total = {totalPriceSum}            
            />

            <Addtocart
                Shape={selectedLabel}
                Pattern={patternLabel  + '-' + selectedShapeFrameData}
                StandardFabric={selectStandardFabric}
                GilfordFabric={selectGilfordFabric}
                Finish={selectFinish}
                Stand={selectStand}
                BackCover={selectBack}
                Hardware={selectHanger}
                iconShape = {labelIcon}
                iconPattern = {patternIcon}
                iconStandardFabric = {standardFabricLabelIcon}
                iconGilford = {gilfordFabricLabelIcon}
                iconFinish = {selectFinishIcon}
                iconStand = {standLabelIcon}
                iconBack = {backLabelIcon}
                iconHanger = {hangerLabelIcon}
                Total = {totalPriceSum}
            />

        </div>
    )

}

export default Configurator
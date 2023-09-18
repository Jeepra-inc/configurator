import { createContext, useContext, useState } from "react";
import { standMap, standardFabricMap, gilfordFabricMap, backMap } from "../products/alphaSeries/2AalphaPro/dataSettings";

const CustomizationContext = createContext({})

export const CustomizationProvider = (props) => 
{
    const [finishMapSelector, setFinishMapSelector] = useState('frames')
    const [standMapSelector, setStandMapSelector] = useState(standMap[0])
    const [backMapSelector, setBackMapSelector] = useState(standMap[0])
    const [backMap, setBackMap] = useState(standMap[0])
    const [selectedPatternColor, setSelectedPatternColor] = useState('beachblonde');
    const [pattern, setPattern] = useState('square')
    const [framePattern, setFramePattern] = useState('square');
    const [shapeMap, setShapeMap] = useState('square')
    const [shapeMapSelector, setShapeMapSelector] = useState('square')
    const [hangerMap, setHangerMap] = useState('square')
    const [hangerMapSelector, setHangerMapSelector] = useState('square')
    const [standardFabricMapSelector, setStandardFabricMapSelector] = useState(standardFabricMap[0])
    const [gilfordFabricMapSelector, setGilfordFabricMapSelector] = useState(false)

    return (
        <CustomizationContext.Provider 
            value={{
                finishMapSelector,
                setFinishMapSelector,
                standardFabricMapSelector,
                setStandardFabricMapSelector,
                gilfordFabricMapSelector,
                setGilfordFabricMapSelector,
                shapeMapSelector,
                setShapeMapSelector,
                shapeMap,
                setShapeMap,
                standMapSelector,
                setStandMapSelector,
                hangerMap,
                setHangerMap,
                hangerMapSelector,
                setHangerMapSelector,
                selectedPatternColor,
                setSelectedPatternColor,
                pattern,
                setPattern,
                framePattern,
                setFramePattern,
                backMap,
                setBackMap,
                backMapSelector,
                setBackMapSelector
            }}
        >
            {props.children}
        </CustomizationContext.Provider>
    )
}

export const useCustomization = () => 
{
    const context = useContext(CustomizationContext)
    return context
}
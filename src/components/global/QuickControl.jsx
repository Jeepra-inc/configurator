import TriggerButton from "./Trigger"

const QuickControls = ({captureSnapshot,toggleFullScreen, resetCamera, isClosed, toggleClose, lineVisibility }) => {

    return (
        <>
        <div className='snapEnv'>

            <TriggerButton 
                toolTip = "Snapshot"
                onClick={captureSnapshot}
                svg={<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="13" r="3" stroke="#444444" stroke-width="1.5"/><path stroke="#444444" stroke-linecap="round" stroke-width="1.5" d="M3 13c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C5.787 6 7.19 6 10 6h4c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C21 8.787 21 10.19 21 13c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104C18.213 20 16.81 20 14 20h-4c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 0 1-1.104-1.104c-.232-.347-.384-.74-.484-1.222M18 10h-.5M14.5 3.5h-5"/></svg>}
            />

            <TriggerButton 
                toolTip = "Fullscreen"
                onClick={toggleFullScreen}
                svg={<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24"><path stroke="#444444" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9.98V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-1"/><path stroke="#444444" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13 11 5.01-5.02H14M18.01 5.98v4.01M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15Z"/></svg>}
            />

            <TriggerButton  
                toolTip = "View Size"
                onClick={lineVisibility}
                svg={ <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24"><path stroke="#444444" stroke-linecap="round" stroke-width="1.5" d="M12 9h-1c-.943 0-1.414 0-1.707.293C9 9.586 9 10.057 9 11v7.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5V6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h12.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C22 3.393 22 4.096 22 5.5c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C20.607 9 19.904 9 18.5 9H16M12 2v2m6-2v2M9 2v3m6-3v3M2 12h2m-2 6h2m-2-3h3M2 9h3"/></svg>}
            />

            <TriggerButton 
                toolTip = "Adjust Camera"
                onClick={resetCamera}
                svg={<svg fill="#444444" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 24 24"><path d="M8 2H3a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V4h4a1 1 0 0 0 0-2Zm0 18H4v-4a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2ZM21 2h-5a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Zm0 13a1 1 0 0 0-1 1v4h-4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"/></svg>}
            />

        </div>

        <TriggerButton 
            className = {`close ${isClosed ? 'active' : ''}`}
            onClick={toggleClose}
            svg={'X'}
        />
        </>
    )
}

export default QuickControls

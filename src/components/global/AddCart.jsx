function Addtocart({Shape, Pattern, StandardFabric, GilfordFabric, Finish, Stand, BackCover, Hardware, Total, iconShape, iconPattern, iconStandardFabric, iconGilford, iconFinish, iconStand, iconBack, iconHanger}) {
  const sendDataToURL = () => {
    const data = {
      Shape: Shape,
      Pattern: Pattern,
      StandardFabric: StandardFabric,
      GilfordFabric: GilfordFabric,
      Finish: Finish,
      Freestanding: Stand,
      BackCover: BackCover,
      Hardware: Hardware,
      IconShape: iconShape,
      IconPattern:iconPattern,
      IconStandardFabric: iconStandardFabric,
      IconGilford: iconGilford,
      IconFinish:iconFinish,
      IconStand:iconStand,
      IconBack:iconBack,
      IconHanger:iconHanger,
      Total:Total
    }

    // Serialize the data to a query string
    const queryString = Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')

    // Append the query string to the URL and redirect
    window.location.href = `https://eu.gikacoustics.com/processing?${queryString}`
  }

  return (
    <div className="totalPrice" >                
      <div className='ttlHandle'>
          <div>
              <h4>Total Price</h4>
              <span>${Total.toFixed(2)}</span>
          </div> 
          <div className="cartButton">
            <button onClick={sendDataToURL}>Add to cart</button>
          </div>
      </div>
    </div>
  )
}

export default Addtocart

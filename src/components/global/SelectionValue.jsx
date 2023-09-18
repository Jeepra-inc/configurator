const SelectionValue = ({Shape, Pattern, StandardFabric, GilfordFabric, Finish, Stand, BackCover, Hardware, iconShape, iconPattern, iconStandardFabric, iconGilford, iconFinish, iconStand, iconBack, iconHanger }) => {
  return (
    <div className="selected-values">
      <div className='selecItem'> 
      <div className="configTitle">
      <div className='ctLeft'>
      <h4> What you have selected. </h4>
          <span> You can review here what are your selections. </span>
        </div>
          
      </div>       
      <table>
      {Shape && (
  <tr>
    <td>Shape</td>
    <td>{Shape}</td>
    <td><img src={iconShape} /></td>
  </tr>
  )}
  {Pattern && (
  <tr>
    <td>Pattern</td>
    <td>{Pattern}</td>
    <td><img src={iconPattern} /></td>
  </tr>
  )}
  {StandardFabric && (
  <tr>
    <td>Standard Fabric</td>
    <td>{StandardFabric}</td>
    <td><img src={iconStandardFabric} /></td>
  </tr>
  )}
  {GilfordFabric && (
  <tr>
    <td>Gilford of Maine Fabric</td>
    <td>{GilfordFabric}</td>
    <td><img src={iconGilford} /></td>
  </tr>
  )}
  {Finish && (
  <tr>
    <td>Finish</td>
    <td>{Finish}</td>
    <td><img src={iconFinish} /></td>
  </tr>
  )}
    {Stand && (
  <tr>
    <td>Freestanding Options for square or narrow</td>
    <td>{Stand}</td>
    <td><img src={iconStand} /></td>
  </tr>
    )}
    {BackCover && (
  <tr>
    <td>Back Cover</td>
    <td>{BackCover}</td>
    <td><img src={iconBack} /></td>
  </tr>
    )}
    {Hardware && (
  <tr>
    <td>Hardware</td>
    <td>{Hardware}</td>
    <td><img src={iconHanger} /></td>
  </tr>
    )}
</table>

      </div>
    </div>
  );
};

export default SelectionValue;

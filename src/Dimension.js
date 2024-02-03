import React, { useState } from 'react';


const Dimension = ({sharedProps}) => {

  const {selectedDensity, selectedImage} = sharedProps

  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [diameter, setDiameter] = useState('');
  const [height, setHeight] = useState('');

  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleDiameterChange = (event) => {
    setDiameter(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateWeight = () =>{
    const density = parseFloat(selectedDensity)

    console.log(density)

    let volume
    if(selectedImage === 'cubo'){
      const l = parseFloat(length)
      const w = parseFloat(width)
      const h = parseFloat(height)

      volume = (l/1000) * (w/1000) * (h/1000)
      console.log(volume)
    }
    else{
      const d = parseFloat(diameter)
      const h = parseFloat(height)

      volume = Math.PI * (d/2000) * (d/2000) * (h/1000)
      console.log(volume)
    }

    const weight = density * volume
    console.log(weight)

    return isNaN(weight) ? 'Invalid input' : weight.toFixed(3);
  }

  return (
    <section>

      <div >
        <h3>Enter the dimensions in mm</h3>
        <form>

          {selectedImage === 'cubo' ? (
            <div className='dim'>
            <label htmlFor='length'>Length : </label>
            <input type='number' id='length' value={length} onChange={handleLengthChange} />
            <label htmlFor='width'>Width : </label>
            <input type='number' id='width' value={width} onChange={handleWidthChange} />
            <label htmlFor='height'>Height : </label>
            <input type='number' id='height' value={height} onChange={handleHeightChange} />
            </div>
          ) : (
            <div className='dim'>
              <label htmlFor='diameter'>Diameter : </label>
            <input type='number' id='diameter' value={diameter} onChange={handleDiameterChange} />
            <label htmlFor='height'>Height : </label>
            <input type='number' id='height' value={height} onChange={handleHeightChange} />

            </div>
            
          )}
        </form>
      </div>

        <div className='result'>
          <h1>
            Metal Weight : <span> {calculateWeight()} </span>  kg
          </h1>
          
        </div>
      
    </section>


  )
}

export default Dimension
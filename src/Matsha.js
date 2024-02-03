import React , {useState} from 'react'
import cuboImage from './cubo.png';
import cyliImage from './cyli.png';
import Dimension from './Dimension';

const Matsha = () => {
    const [items , setItems] = useState(
        [
          {
            id : 1,
            item : "Mild Steel (MS)",
            density : 7850
          },
          {
            id : 2,
            item : "H13",
            density : 7800
          },
          {
            id : 3,
            item : "M2",
            density : 8138
          },
          {
            id : 4,
            item : "D2",
            density : 7700
          },
          {
            id : 5,
            item : "P20",
            density : 7850
          },
          {
            id : 6,
            item : "Iron",
            density : 7870
          },
          {
            id : 7,
            item : "Brass",
            density : 8500
          },
          {
            id : 8,
            item : "Lead",
            density : 11340
          },
          {
            id : 9,
            item : "Aluminium 6061",
            density : 2700
          },
          {
            id : 10,
            item : "Aluminium 6063",
            density : 2690
          },
          {
            id : 11,
            item : "Aluminium 7075",
            density : 2810
          },
          {
            id : 12,
            item : "Stainless Steel 300 Series",
            density : 7860
          },
          {
            id : 13,
            item : "Stainless Steel 400 Series",
            density : 7722
          },
          {
            id : 14,
            item : "Cast Iron",
            density : 7300
          },
          {
            id : 15,
            item : "Copper",
            density : 8960
          },
          {
            id : 16,
            item : "Gold",
            density : 19300
          },
          {
            id : 17,
            item : "Nickel",
            density : 8900
          },
          {
            id : 18,
            item : "Platinum",
            density : 21500
          },
          {
            id : 19,
            item : "Silver",
            density : 10500
          },
          {
            id : 20,
            item : "Titanium",
            density : 4510
          },
          {
            id : 21,
            item : "Nickel",
            density : 8902
          },
          {
            id : 22,
            item : "Cobalt",
            density : 8832
          },
          {
            id : 23,
            item : "Silicon",
            density : 2329
          },
          {
            id : 24,
            item : "Delrin",
            density : 1420
          },
          {
            id : 25,
            item : "Plastic",
            density : 1175
          },
          
        ]
      )
    
      const [selectedDensity, setSelectedDensity] = useState('');

        const handleChange = (event) => {
            const density = event.target.value;
            setSelectedDensity(density);
            console.log(density);
        }
      
    
      const [selectedImage, setSelectedImage] = useState('cubo');

      const handleRadioChange = (event) => {
        setSelectedImage(event.target.value);
      };
    
      console.log(selectedImage)

      return(
        <section>
            <div className='material'>

                <label htmlFor='material'> Select the Material : </label>
                <select id='material' onChange={handleChange} value={selectedDensity}>
                    <option value="" defaultValue>Choose One</option>
                    {items.map(item => (
                        <option key={item.id} value={item.density}> {item.item} </option>
                    ))}
                </select>
                
            </div>

            <div className='radio'>

              <div className='colradio'>
              <label>
                    <input
                    type="radio"
                    value="cubo"
                    checked={selectedImage === 'cubo'}
                    onChange={handleRadioChange}
                    />
                    Rectangle
                </label>

                <label>
                    <input
                    type="radio"
                    value="cyli"
                    checked={selectedImage === 'cyli'}
                    onChange={handleRadioChange}
                    />
                    Cylinder
                </label>

              </div>

                
                <div>
                    <img
                    src={selectedImage === 'cubo' ? cuboImage : cyliImage}
                    alt='dimension'
                    />
                </div>

            </div>

            <Dimension sharedProps={{selectedImage, selectedDensity}} />

        </section>
        
        
      )
}

export default Matsha
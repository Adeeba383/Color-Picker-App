import React, {useState} from "react"

function ColorPicker(){

    const [color, setColor] = useState("#000000");

    function PickColor(event){
        setColor(event.target.value);
    }

    const isDark = color.toLocaleLowerCase() === "#000000";

   return(
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-picker-display" style={{backgroundColor: color, color: isDark ? "#ffffff" : "#000000"}}>
            <p>Selected color: {color}</p>
        </div>
            <label htmlFor="color">Select color 👇</label>
            <input type="color" id="color" value={color} onChange={PickColor}/>
      </div>
   );

}

export default ColorPicker
import { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ onColorChange }) => {
    const [color, setColor] = useState('#1F2937'); // Default color

    const handleChangeComplete = (color) => {
        setColor(color.hex);  // Update the local state
        onColorChange(color.hex);  // Pass the color to the parent component or server
    };

    return (
        <div>
            <SketchPicker
                color={color}
                onChangeComplete={handleChangeComplete}
            />
        </div>
    );
};

export default ColorPicker;

import { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ onColorChange }) => {
    const [color, setColor] = useState('#1F2937');

    const handleChangeComplete = (color) => {
        setColor(color.hex);
        onColorChange(color.hex);
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

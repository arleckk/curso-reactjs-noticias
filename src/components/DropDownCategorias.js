import React from 'react';
import PropTypes from 'prop-types';

const DropDownCategorias = ({handleClick}) => {
    return (
        <select className="mdb-select md-form" onChange={handleClick}>
            <option value="" disabled>Elige una categor&iacute;a</option>
            <option value="general defaultValue">General</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="business">Negocios</option>
            <option value="health">Salud</option>
            <option value="technology">Tecnolog&iacute;a</option>
        </select>
    );
}
 
DropDownCategorias.propTypes = {
    handleClick : PropTypes.func.isRequired
}

export default DropDownCategorias;
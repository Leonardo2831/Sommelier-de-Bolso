import React from 'react';

// deve desestruturar, pois os valores são passados dentro de um objeto
const SubMenu = ({options}) => {
    return (
        <ul>
            {options.map((option, index) => {
                const link = '#';

                <li key={index}>
                    <a href={link}>{option}</a>
                </li>
            })}
        </ul>
    )
}

export default SubMenu;
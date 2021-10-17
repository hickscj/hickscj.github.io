import React from 'react';

const FilterButton = (props) => {
    return (
         <button className='linkish' onClick={ props.action }>{ props.text }</button>       
    )
};

export default FilterButton;

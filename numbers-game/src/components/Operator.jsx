import React from 'react';
import styled from 'styled-components';

const Operator = ({ className, value, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

export default styled(Operator)`
    width: 100%;
    max-width: 20%;
    height: 30px;
    font-size: 28px;
    background-color: green;
    border: 0;
    border-radius: 4px;
    box-shadow: 2px 2px 2px gray;
`;
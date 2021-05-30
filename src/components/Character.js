// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const StyledCharacter = styled.div`
display: flex;
justify-items: space around;
display: inline;
text-align: center;
border: 3px solid brown;
padding: 8px;
`;


const Character = (props) => {
    return(
        <StyledCharacter>
            <p><b>Name:</b> {props.character.name}</p>
            <p><b>Birth Year:</b> {props.character.birth_year}</p>
            <p><b>Gender:</b> {props.character.gender}</p>
            <p><b>Height:</b> {props.character.height}</p>
        </StyledCharacter>
    )
};

export default Character
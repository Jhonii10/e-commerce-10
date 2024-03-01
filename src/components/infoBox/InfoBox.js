import React from 'react';
import styled from 'styled-components';

const InfoBox = ({title , count , icon , cardClass}) => {
    return (
        <InfoBoxContainer className='info-box'>
            <div className={cardClass}>
                <h4>{title}</h4>
                <span>
                    <h3>{count}</h3>
                    {icon}
                </span>

            </div>
        </InfoBoxContainer>
    );
}

export default InfoBox;


const InfoBoxContainer = styled.div`



`;
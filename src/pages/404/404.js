import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error404 = () => {
    return (
        <StyledContent>
            <StyledError404>
            <div>
                <div>
                    <h1>404</h1>
                <div>
                <h2>
                No se pudo encontrar esta página.
                </h2>
                </div>
                </div>
                <StyledHomeButton to={'/'}>
                    Inicio
                </StyledHomeButton>
                
            </div>
            </StyledError404>
            
        </StyledContent>
    );
}

export default Error404;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledError404 = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 12px;


  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        
        
        h1{
            display: inline-block;
            margin: 0 20px 0 0;
            padding-right: 24px;
            font-size: 24px;
            font-weight: 600;
            border-right:1px solid black;
            color: black;

            
        }

        div{
                display: inline-block;
                text-align: center;

                h2{
                    font-size: 16px;
                    font-weight: 500;
                    margin: 0;
                    color: #020c1b;
                }
         }
    }


  }

`;

const StyledHomeButton = styled(Link)`
  background-color: transparent;
  font-size:16px;
  line-height: 1;
  border-radius:6px;
  padding: 1.25rem 1.75rem;
  margin-top: 20px;
  font-weight: 600;
  color: #020c1b;
  border: 1px solid black;

  &:hover{
    background-color:transparent;
    font-weight: 700;
    color: #020c1b;
    
  }
  
`;
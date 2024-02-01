import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import styled from 'styled-components';

const SearchContainer = styled.div`

   margin: 5px 0;
   position: relative;
   flex: 1;

  .icon-search {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }

  input[type="text"] {
    display: block;
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem;
    padding-left: 3rem;
    margin: 1rem auto;
    width: 100%;
    border: 1px solid #777;
    border-radius: 5px;
    outline: none;
  }

`;

const Search = ({value, onChange}) => {

    return (
        <SearchContainer>
            <IoIosSearch size={22}  className='icon-search'/>
                <input
                    type='text' 
                    placeholder='Buscar Por Nombre'
                    value={value}
                    onChange={onChange}

                />
        </SearchContainer>
    );
}

export default Search;

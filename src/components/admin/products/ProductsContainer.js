import styled from "styled-components";

const ProductsContainer = styled.div`
  
  padding: 5px;
  width: 100%;
  overflow-x: auto;

  .search {
    width: 100%;
    max-width: 300px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 1rem;

    thead {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }

    th {
      border: 1px solid #eee;
    }

    th,
    td {
      vertical-align: center;
      text-align: center;
      padding: 8px;
      
      &.icons {
        > * {
          margin-right: 5px;
          cursor: pointer;
        }
      }
    }

    .table-image{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 74px;
            height: 74px;
            object-fit: cover;
            border-radius: 12px;
        }  
    }

    tr {
        border-bottom: 1px dashed rgba(145, 158, 171, 0.2);
    }

    tr:nth-child(even) {
      background-color: #eee;
    }
  }


`;

export default ProductsContainer;
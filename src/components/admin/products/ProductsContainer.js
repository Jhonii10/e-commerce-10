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
    font-size: 1.4rem;

    thead {
      border-top: 2px solid var(--light-blue);
      border-bottom: 2px solid var(--light-blue);
    }

    th {
      border: 1px solid #eee;
    }

    th,
    td {
      vertical-align: top;
      text-align: left;
      padding: 8px;
      &.icons {
        > * {
          margin-right: 5px;
          cursor: pointer;
        }
      }
    }

    tr {
      border-bottom: 1px solid #ccc;
    }

    tr:nth-child(even) {
      background-color: #eee;
    }
  }


`;

export default ProductsContainer;
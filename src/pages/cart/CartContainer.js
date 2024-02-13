import styled from 'styled-components';

export const CartContainer = styled.section`

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.table {
  padding: 5px;
  width: 100%;
  overflow-x: auto;

  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 1rem;

    thead {
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;
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
  .summary {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: start;

    .card {
      padding: 1rem;
      .text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          color: var(--color-danger);
        }
      }
      button {
        margin-top: 5px;
      }
    }
  }
}
.count {
  display: flex;
  align-items: center;
  button {
    border: 1px solid grey;
  }
  & > * {
    margin-right: 1rem;
  }
}

`;


import styled from "styled-components";

export const OrderHistoryContainer = styled.section`

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    padding-bottom: 24px;
    padding-top: 24px
}

.table {
  padding: 5px;
  width: 100%;
  overflow-x: auto;

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1rem;

    th {
        border-bottom-width: 2px;
        vertical-align: bottom;
        border: 1px solid #dee2e6;
        font-size: 14px;
        text-transform: uppercase;
        padding: 10px 10px 7px 10px;
        text-align: center;
    }

    td{
        vertical-align: middle;
        text-align:center;
        padding: 5px 10px;
    }

    th,
    td {
      border: 1px solid #dee2e6;
      &.icons {
        > * {
          margin-right: 5px;
          cursor: pointer;
        }
      }
    }

    tr {
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      font-size: 14px;
      padding: 8px 10px;
    }
    tbody{
        tr:nth-child(2n-1) {
        background-color: rgba(0, 0, 0, 0.04);
    }

    }
    

    .badge{
        padding: 0.25em 0.4em;
        border-radius: 2px;
        font-weight: 500;
    }
    .pending {
        color: #212529;
        background-color: #ffc107;
        
    }
    .processing {
        color: #000000;
        background-color: #a5e5ff;
    }

    .shipped {
        color: #f7f7f7;
        background-color: #51b9d0;
    }
    .delivered {
        color: #fff;
        background-color: #28a745
        
    }
  }
}


`;
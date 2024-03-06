import styled from "styled-components";

export const OrderDetailsContainer = styled.section`


.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    padding-bottom: 24px;
    padding-top: 24px
}

.img-wrap {
    width: 70px;
    margin: 0 auto;
}

.table {
  padding: 5px;
  width: 100%;
  overflow-x: auto;
  

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1rem;
  }


    thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    }

    th {
        font-size: 13px;
        text-transform: uppercase;
        padding: 10px 10px 7px 10px;
        border: 1px solid #dee2e6;
    }

    td {
        border: 1px solid #dee2e6;
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
        text-align: center;
    }


    tbody{
        tr:nth-child(2n-1) {
        background-color: rgba(0, 0, 0, 0.04);
        }

        td{
            vertical-align: middle;
            border: 1px solid #dee2e6;
            text-align: center;

            .review{
                border-radius: 2px;
                font-weight: 500;
                color: #fff;
                background-color: #1356ea;
                font-size: 100%;
                padding: 0.25em 0.4em;
                cursor:pointer;
            }
        }
    
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


`;
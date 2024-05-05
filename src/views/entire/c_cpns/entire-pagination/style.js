import styled from "styled-components";

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    .pagination{
        display: flex;
        flex-direction: column;
        align-items: center;
        .desc{
            margin-top: 10px;
            color:#484848
        }
        .MuiPaginationItem-text{
            &:hover{
                text-decoration: underline;
            }
        }
        .MuiPaginationItem-page{
            margin: 0 10px;
        }
        .MuiPaginationItem-page.Mui-selected{
            background-color: #000;
            color: #fff;
        }
        .MuiPaginationItem-icon{
            font-size: 22px;
        }
    }
`

export default PaginationWrapper
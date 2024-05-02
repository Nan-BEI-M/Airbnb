import styled from "styled-components";
export const CenterWrapper = styled.div`
    .search-bar{
        display: flex;
        align-items: center;
        width: 240px;
        height: 38px;
        border:1px solid #ddd;
        border-radius: 20px;
        justify-content: space-between;
        padding: 0 5px 0 20px;
        box-shadow: 0 1px 2px rgba(0,0,0,.1);
        .text{
            font-weight: 600;
        }
        .icon{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            color: white;
            border-radius: 50%;
            background-color: ${props => props.theme.color.primaryColor};
        }
        ${props => props.theme.mixin.boxShadow}
    }   
    
`
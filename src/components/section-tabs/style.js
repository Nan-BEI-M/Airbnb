import styled from "styled-components";

const TabsWrapper = styled.div`

    /* display: flex; */
    padding: 10px 0;
    .item{
        box-sizing: border-box;
        border: 0.5px solid #ddd;
        padding: 8px 70px;
        font-size: 18px;
        margin-right: 10px;
        border-radius: 3px;
        white-space: nowrap;
        cursor: pointer;
        font-weight: 600;
        box-shadow: 0 2px 3px rgba(0,0,0,.1);
        &:last-child{
            margin-right:0;
        }
        &.active{
            background-color: ${props => props.theme.color.secondaryColor};
            color: #fff;
        }
    }
`
export default TabsWrapper
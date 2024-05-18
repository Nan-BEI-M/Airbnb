import styled from "styled-components";

const TabsWrapper = styled.div`
    display: flex;
    .item{
        font-size: 16px;
        margin: 5px 10px;
        padding-bottom: 4px;
        color:${props => props.theme.isAlpha ? "#fff" : "#484848"};
        cursor: pointer;
        &.active{
            border-bottom:${props => props.theme.isAlpha ? "2px solid #fff" : "2px solid #484848;"}; 
        } 
    }
`

export default TabsWrapper
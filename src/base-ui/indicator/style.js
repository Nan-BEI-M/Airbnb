import styled from "styled-components";

const IndicatorWrapper = styled.div`
        overflow: hidden;
    .i-content{

        position: relative;
        transition: transform 250ms ease;
    }
    > *{
        display: flex;
        flex-wrap: nowrap;
        flex-shrink:0;
    }
`
export default IndicatorWrapper
import styled from "styled-components";

export const HeaderWrapper = styled.div`
    
    
    
    .content{
        position:relative;
        z-index: 99;
        background-color:${props => props.theme.isAlpha ? ' rbga(0, 0, 0, 0) ' : "#fff"};
        border-bottom:${props => props.theme.isAlpha ? ' rbga(0, 0, 0, 0) ' : "1px solid #eee"} ;
       
        .top{
            display: flex;
            align-items: center;
            height: 80px;
        }
        .bottom{
            height: ${props => props.$isSearch ? "100px" : 0};
            transition:height 250ms ease;
        }
    }
    &.fixed{
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;
        right: 0;
    }
    .cover{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
        background: rgba(0,0,0,.4);
    }
    
`
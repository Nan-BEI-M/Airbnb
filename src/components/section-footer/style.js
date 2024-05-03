import styled from "styled-components";

const FooterWrapper = styled.div`
margin: 20px 0;
    display: flex;
    .info{
        display: flex;
        align-items: center;
        color: ${props => props.$color};
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
        .text{
            font-size: 18px;
            font-weight: 600;
        }
        .icon{
            margin-left: 6px;
        }
    }
`
export default FooterWrapper
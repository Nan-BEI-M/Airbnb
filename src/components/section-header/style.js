import styled from "styled-components";

const HeaderWrapper = styled.div`
margin-bottom: 10px;
    .title{
        margin-bottom: 20px;
    }
    .subtitle{
        color: ${props => props.theme.textColor.secondaryColor};
    }
`
export default HeaderWrapper
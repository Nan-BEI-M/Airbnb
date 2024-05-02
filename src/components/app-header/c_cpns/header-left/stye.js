import styled from "styled-components";
export const LeftWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    /* 使用回调函数 可以接受props参数 使用传递的主题样式 */
    color: ${props => props.theme.color.primaryColor};
    .logo{
        cursor: pointer;
        margin-left: 24px;
    }
`
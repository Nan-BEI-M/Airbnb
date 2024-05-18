import styled from "styled-components";
export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    /* 对其右侧 */
    justify-content: flex-end;
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.textColor.primaryColor};

    .btns{
        display: flex;
        align-items: center;
        span{
            height: 18px;
            line-height: 18px;
            padding: 4px 10px;
            border-radius: 20px;
            cursor: pointer;
            &:hover{
                background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5"};
            }
        }
    }
    .profile{
        position: relative;
        display: flex;
        align-items: center;
        border: 1px solid #ddddde;
        border-radius: 30px;
        margin-right: 10px;
        span{
            padding: 4px 5px;
            cursor: pointer;
        }
        ${props => props.theme.mixin.boxShadow}
        .panel{
            position: absolute;
            width: 200px;
            top: 60px;
            right: 0;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 2px 2px rgba(0,0,0,.1);
            padding: 5px 0;
            font-weight: 600;
            color:#484848;
            cursor: pointer;
            .panel-top{
                border-bottom: 1px solid #ddd;
            }
            .item{
                height: 40px;
                line-height:40px;
                padding: 0 10px;
                &:hover{
                    background-color: #f5f5f5;
                }
            }
        }
    }
`
import styled from "styled-components";
const FooterWrapper = styled.div`
    border-top: 1px solid #ddd;
    margin-top: 30px;
    .inner{
        width: 1080px;
        margin: 0 auto;
        padding: 50px 25px 20px 25px;
        box-sizing: border-box;
        .wrapper{
            display: flex;
            margin-bottom: 20px;
            .item{
                flex: 1;
            .name{
                font-weight: 600;
                margin-bottom: 15px;
            }
            .list{
                color:#888;
                .iten{
                    margin: 4px 0;
                    cursor: pointer;
                    &:hover{
                        text-decoration: underline;
                    }

                }
            }
            }
        }
        .statement{
            text-align: center;
            color:#888;
            padding: 20px 0 0 ;
            border-top: 1px solid #ddd;
        }
        
    }
`
export default FooterWrapper
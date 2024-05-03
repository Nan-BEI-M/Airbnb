import styled from "styled-components";

const ItemWrapper = styled.div`
    width: ${props => props.$roomWidth};
    padding: 0 8px;
    box-sizing: border-box;
    .inner{
        .cover{
            position: relative;
            width: 100%;
            /* 为cover设置top padding */
            padding: 66.66% 0 8px;
            overflow: hidden;
            img{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
        .desc{
            margin-top: 5px;
            color: ${props => props.$verifycolor};
        }
        .name{
            font-weight: 600;
            margin-top:5px;
            font-size: 16px;
            /* 两行省略 */
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            white-space: normal;
        }
        .price{
            margin: 5px 0 ;
            font-size: 14px;
        }
        .bottom{
            line-height: 1;
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            font-size: 12px;
        }
    }
`
export default ItemWrapper
import styled from "styled-components";

const ItemWrapper = styled.div`
    width: ${props => props.$roomWidth};
    padding: 0 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    .inner{
        .slider{
            position: relative;
            cursor: pointer;
            .control{
                display: none;
                .btn{
                    color: #fff;
                    display: flex;
                    align-items: center;
                    padding: 0 15px
                }
                .right{
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right:0;
                        z-index: 9;
                        background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.2));   
                    }
                .left{
                        position: absolute;
                        
                        top: 0;
                        bottom: 0;
                        left:0;
                        z-index: 9;
                        background-image: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.2));

                    }
            }
            &:hover{
               .control{
                display: block;
               } 
            }
            .indicator{
                position: absolute;
                bottom: 10px;
                left: 0;
                right: 0;
                width: 30%;
                z-index: 9;
                margin: 0 auto;
                .item{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 14.29%;
                    flex-shrink: 0;
                    .dot{
                        width: 6px;
                        height: 6px;
                        background-color: white;
                        border-radius: 50%;
                        &.active{
                            width: 8px;
                            height: 8px; 
                        }
                    }
                }
            }
            
        }
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
import styled from "styled-components";

const BrowserWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #333;
    z-index: 99;
    .top{
        position: relative;
        height: 85px;
        .close-btn{
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
        }
    }
    .slider{
        flex: 1;
        display: flex;
        justify-content: center;
        position: relative;
        .control{  
            position: absolute;
            z-index: 1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            .btn{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 83px;
                height: 100%;
                color: white;
                cursor: pointer;
            }
    }
        .picture{
            position: relative;
            width: 100%;
            height: 100%;
            max-width:105vh;
            overflow: hidden;
            img{
                position: absolute; 
               top: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                height: 100%;
                /* 频繁切换图片容易被识别为双击选中，影响体验 */
                user-select: none;
            }
            .pic-enter{
                transform: translateX(${props => props.$isNext ? "100%" : "-100%"});
                opacity: 0;
            }
            .pic-enter-active{
                transform: translateX(0);
                opacity: 1;
                transition:all 200ms ease;
            }
            .pic-exit{
                opacity: 1;
            }
            .pic-exit-active{
                opacity: 0;
                transition:all 200ms ease;
                
            }
    }
    }
    
    .preview{
        height: 100px;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        .info{
            position: absolute;
            bottom: 10px;
            width: 105vh;
            .desc{
                display: flex;
                justify-content: space-between;
                color: #fff;
            }
            .pic-list{
                transition: height 200ms ease;
                height: ${props => props.$showList ? "67px" : "0px"};
                overflow: hidden;
                .item{
                    margin-right: 10px;
                    cursor: pointer;
                    img{
                        height: 67px;
                        opacity: 0.5;
                    }
                    &.active{
                        img{
                            opacity: 1;
                        }
                    }
                
            }
            }
        }
    }
`
export default BrowserWrapper
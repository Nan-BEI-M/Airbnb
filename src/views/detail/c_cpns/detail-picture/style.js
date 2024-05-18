import styled from "styled-components";

const PictureWrapper = styled.div`
    position: relative;
    /* position: absolute;
    top: 48px; */
    .picture{
        display: flex;
        height: 600px;
        .left ,.right{
            width: 50%;
            height: 100%;
            cursor: pointer;
            .item{
                height: 100%;
                img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 250ms ease;   
                
            }
            &:hover{
                img{
                    transform: scale(1.08);                  
                }
            }
            }
        }
        .left{
            position: relative;
            overflow: hidden;
        }
        .right{
            display: flex;
            flex-shrink: 0;
            flex-wrap: wrap;
            .item{
                position: relative;
                width: 50%;
                height: 50%;
                overflow: hidden;
                box-sizing: border-box;
                border: 1px solid #000;
            }
            }
        }
        .cover{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;  
        }
        &:hover{
            .cover{
            background:rgba(0,0,0,.3);
            }
        }
        .item:hover{
            .cover{
                background: none;
            }
        }
        .show-btn{
            position: absolute;
            bottom: 20px;
            right: 20px;
            padding: 6px 12px;
            border: 1px solid black;
            background-color: #fff;
            font-weight: 600;
            border-radius: 5px;
            font-size: 15px;
            cursor: pointer;
        }
    
`
export default PictureWrapper
import styled from "styled-components";

const LongforItemWrapper = styled.div`
    .inner{
        position: relative;
        width: 100%;
        padding: 0 8px;
        box-sizing: border-box;
        
        .item-content{
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            .cover-bg{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60%;
            background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
        }
        .cover{
            border-radius: 5px;
            img{
                width: 200px;
                
            }
        }
        .desc{
            position: absolute;
            bottom: 25px;
            left: 0;
            right: 0;
            color: #fff;
            text-align: center;
            .city{
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 5px;
            }
        }
        }
        
    }
`
export default LongforItemWrapper
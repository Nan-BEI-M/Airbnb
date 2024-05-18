import styled from "styled-components";

const SectionWrapper = styled.div`
    display: flex;
    border:1px solid #ccc;
    height: 66px;
    width: 850px;
    border-radius: 32px;
    background-color: #fff;
    .item{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 15px 10px;
        padding-left: 20px;
        font-size: 12px;
        border-left: 1px solid #ccc;
        .title{
            font-weight: 800;
            margin-bottom: 5px;
            
        }
    }
    :first-child{
        border-left: none;
    }
`
export default SectionWrapper
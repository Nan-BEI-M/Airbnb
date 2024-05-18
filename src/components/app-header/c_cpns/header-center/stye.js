import styled from "styled-components";
export const CenterWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 48px;
    .search-bar{
        position: absolute;
        display: flex;
        align-items: center;
        width: 240px;
        height: 38px;
        border:1px solid #ddd;
        border-radius: 20px;
        justify-content: space-between;
        padding: 0 5px 0 20px;
        box-shadow: 0 1px 2px rgba(0,0,0,.1);
        cursor: pointer;
        .text{
            font-weight: 600;
        }
        .icon{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            color: white;
            border-radius: 50%;
            background-color: ${props => props.theme.color.primaryColor};
        }
        ${props => props.theme.mixin.boxShadow}
    }   

    .search-detail{
        position: relative;
        .section{
            position: absolute;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .bar-enter{
        transform: scale(2) translateY(58px);
        opacity: 0;
    }
    .bar-enter-active{
        transform: scale(1) translateY(0px);
        opacity: 1;
        transition: all 200ms ease;
    }
    .bar-exit{
        opacity: 0;
    }
     .detail-enter{
        transform: scale(0.35, 0.727273) translateY(-58px);
        opacity: 0;
    }
    .detail-enter-active{
        transform: scale(1) translateY(0px);
        opacity: 1;
        transition: all 200ms ease;
    } 
    
    .detail-exit{
        transform: scale(1) translateY(0px);
        opacity: 1;
    }
    .detail-exit-active{
        transform: scale(0.35, 0.727273) translateY(-58px);
        opacity: 0;
        transition: all 200ms ease;
    } 
   
`
import styled from "styled-components";

const ScrollViewWrapper = styled.div`
    /* 用于offsetleft 子元素与带定位的父元素左侧距离 */
    position: relative;
    padding: 8px 0;
    .scroll{ 
        overflow: hidden;
        .scroll-content{
            display: flex;
            transition: transform 250ms ease;  
        }
    }
    .control{
        display: flex;
        position: absolute;
        z-index: 1;
        width: 24px;
        height: 24px;
        background-color: #fff;
        font-size: 20px;
        border-radius:50%;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 3px rgba(0,0,0,.18);
        text-align: center;
        cursor: pointer;
    }
    .left{
        top: 50%;
        left:-10px;
        transform: translate(0,-50%);
    }
    .right{
        top: 50%;
        right:-10px;
        transform: translate(0,-50%);
    }
`
export default ScrollViewWrapper
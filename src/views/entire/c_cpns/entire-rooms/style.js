import styled from "styled-components"

const RoomsWrapper = styled.div`
    position: relative;
    padding: 20px 30px;
    .title{
        font-size: 20px;
        font-weight: 600;
        margin: 20px 0;
    }
    .room-list{
        margin: 0 -8px;
        display: flex;
        flex-shrink: 0;
        flex-wrap: wrap;
    }
    > .cover{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255,255,255,.8);
        
    }
  
`
export default RoomsWrapper
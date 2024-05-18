import styled from "styled-components";

const FilterWrapper = styled.div`
    .filter{
        display: flex;
        padding: 10px 30px;
        margin-top: 81px;
        .item{
            padding: 5px 10px;
            border: 1px solid #ddd;
            border-radius: 3px;
            font-weight: 14px;
            margin-right: 10px;
            cursor: pointer;
            &.active{
                background-color: ${props => props.theme.color.secondaryColor};
                color: #fff;
            }
        }
    }

`
export default FilterWrapper
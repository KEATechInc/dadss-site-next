import styled from "styled-components"

export const GridWrap = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    min-height: 550px;
    margin-bottom: 25px;
    width: 90%;

    img {
        max-height: 142px;
        width: 275px;
        opacity: .9;
        object-fit: cover;
        border-bottom: 1px solid gray;
        :hover {
            cursor: pointer;
        }
    }
`
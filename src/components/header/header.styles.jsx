import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    height: 140px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background:Wheat;
    color:black;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 200px;
    padding:20px;
    color:white;
    &:hover {
        transform: scale(1.1);
        transition: transform 200ms;
`

export const OptionsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: transform 200ms;
    }
`
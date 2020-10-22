import styled from 'styled-components';

const colorSet = {
    text: '#272822',
    main: '#FFAA40',
    second: '#FFDA73',
    border: '#A65C00',
    white: 'white',
    lightgray: '#F1F1F1',
}

export const Header = styled.div`
    min-height: 5rem;
    width: 100%;
    background-color: ${colorSet.main};
    border-bottom: 2px solid ${colorSet.border};
    position: fixed;
    top: 0;
    left: 0;
`

export const HeaderContent = styled.div`
    display: flex;
    padding: 1rem 0;
    align-items: center;
    justify-content: space-between;
`


export const Title = styled.h1`
    font-weight: normal;
    font-size: 2.5rem;
    font-family: sans-serif;
`
export const NavPanel = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const NavPanelItem = styled.div`
    margin-left: 1rem;
`

export const AppContainer = styled.div`
    width: 100%;
    padding-top: 5rem;
    color: ${colorSet.textColor};
    background-color: ${colorSet.lightgray};
`

export const CustomSelect = styled.div`
    position: relative;
    select{
        border-radius: 10px;
        padding: .5rem 1rem;
        outline: none;
        text-transform: uppercase;
        border: 2px solid ${colorSet.border};
        background-color: ${colorSet.second};
    };
`

export const MainContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
`

export const PizzasWrapper = styled.div`
    width: 100%;
    background-color: ${colorSet.white};
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    @media (max-width: 970px) {
        justify-content: center;
  }
`

export const PizzaContainer = styled.div`
    max-width: 320px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
        img{
            width: 100%;
            max-height: 266px;
            object-fit: contain;
        }
`
export const PizzaContainerFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    align-items: center;
`

export const PizzaContainerTitle = styled.h3`
    text-align: center;
    font-size: 1.5rem;
`

export const PizzaDescription = styled.p`
    font-size: .8rem;
`

export const MainButton = styled.button`
    border: 2px solid ${colorSet.border};
    background-color: ${colorSet.second};
    outline: none;
    color: ${colorSet.text};
    border-radius: 10px;
    padding: .5em 1em;
    text-transform: uppercase;
    transition: all .2s ease;

    :hover{
        background-color: ${colorSet.main};
        color: ${colorSet.white};
    }
    :focus{
        background-color: ${colorSet.main};
        color: ${colorSet.white};
    }
    :active{
        background-color: ${colorSet.border}
    }

`


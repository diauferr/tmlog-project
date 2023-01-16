import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Logo = styled.img`
    height: 80px;
    padding: 10px;
`;

export const SelectLang = styled.select`
    display: grid;
    align-items: center;
    &:after {
        justify-self: end;
    }
`;

export const OptionLang = styled.option``;

export const WrapperLeft = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`;

export const Item = styled.li`
    margin: 0 32px 0 0;
`;

export const Link = styled.a`
    font-family: "Poppins Regular";
    font-size: 14px;
    line-height: 26px;
    text-decoration: none;
    color: #333333;
`;

export const WrapperRight = styled.nav`
    display: none;
    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;

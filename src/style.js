import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    background: #fff5e5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Bitter', serif;
    h1{
        font-size: 26px;
        height: 50px;
    }
    h3{
        font-size: 20px;
        height: 50px;
    }
    h3:before{
        content: '- '
    }
    p{
        font-size: 14px;
        height: 50px;
    }
    button{
        height: 50px;
        width: 150px;
        border: none;
        background: #292929;
        color: #fff;
        &:hover{
            filter: brightness(0.8);
            cursor: pointer;
        }
    }
`;

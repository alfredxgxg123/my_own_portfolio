import styled, {css, keyframes} from 'styled-components';

const animate = keyframes`
    from {             
        transform: translate3d(-200%, 0, 0);
        transition: all 0.5s ease-out; 
    }
    to { transform: translate3d(0, 0, 0); }
`;


const MyProjectsStyle = styled.main`

    padding: 4rem;
    min-height: calc(100vh - 60px);

    &:after {
        content: '';
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: rgba(69, 67, 67);
        position: fixed;
        opacity: 0.7;
    }
    

    h1, h2, h3 {
        animation: ${animate} 2s;
        &: hover {
            color: #3b5998;
            transition: all 0.6s ease-out;
        }
        margin: 0;
        font-weight: 400;

        &.lg-heading {
            font-size: 4rem;
        }

        &.sm-heading {
            margin-bottom: 2rem;
            padding: 0.2rem 1rem;
            opacity: 0.8;

            a:hover {
                color: #3b5998;
                transition: all 0.6s ease-out;
            }
        }
    }

   
    .projects {
        animation: ${animate} 2s;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.7rem;
        img {
            width: 100%;
            height: auto;
            max-width: 400px;
            min-height: 250px;
            border: 0.5px #fff solid;
            
            &:hover {
                opacity: 0.5;
                border-color: #3b5998;
                transition: all 0.6s ease-out;
            }
        }

    
    }
    .btn-dark {
        ${btn()}
    }

    .btn-light{
        ${btn()}
    }
`;

function btn(){
    let styles = '';
    styles = `
        display: inline-block;
        padding: 0.5rem 0.5rem;
        border: 0;
        margin-bottom: 0.3rem;
        &:hover {
            background: #3b5998;
        }
    `;
    return css`${styles}`;
}

export default MyProjectsStyle;


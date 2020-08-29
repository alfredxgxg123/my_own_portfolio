import styled from 'styled-components';


const MainStyle = styled.main`

    padding: 4rem;
    min-height: calc(100vh - 60px);

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: rgba(69, 67, 67);
        opacity: 0.7;
    }

    &#home {
        overflow: hidden;
        h1 {
            margin-top: 20vh;
        }
    }
    
    .icons {
        margin-top: 1rem;

        a {
            padding: 0.4rem;
            &: hover {
                color: #3b5998;
                transition: all 0.5s ease-out;
            }
        }
    }

    h1, h2, h3 {
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
        }
    }

`;

export default MainStyle;


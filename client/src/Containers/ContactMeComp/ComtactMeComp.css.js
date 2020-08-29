import styled from 'styled-components';

const ContactMeStyle = styled.main`

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

    .boxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 1rem;

        div {
            font-size: 2rem;
            border: 3px #fff solid;
            padding: 1.5rem 2.5rem;
            margin-bottom: 3rem;
        }
    }
    

    h1, h2, h3 {
        display: flex;
        justify-content: center;
        align-items: center;
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
   
`;

export default ContactMeStyle;
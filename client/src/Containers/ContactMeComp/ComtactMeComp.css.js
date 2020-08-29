import styled, {keyframes} from 'styled-components';

const animate = keyframes`
    from {             
        transform: translate3d(-200%, 0, 0);
        transition: all 0.5s ease-out; 
    }
    to { transform: translate3d(0, 0, 0); }
`;

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
    }


    .wrapper-show {
        box-shadow: 0 0 20px 0 rgba(72,94,116,0.7);
        max-width: 450px;
        height: auto;
        margin: auto;
        animation: ${animate} 2s;
    }


    .wrapper-show > *{
        padding: 1em;
    }

    .company-info h3, h5{
        text-align: center;
        margin:0 0 1rem 0;
    }


    .contact form{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap:20px;
    }

    .contact form label{
        display:block;
    }

    .contact form p{
        margin:0;
    }

    .contact form button, .contact form input, .contact form textarea{
        width:100%;
        padding:1em;
        border:1px solid #c9e6ff;
    }

    .contact form button{
        background:#c9e6ff;
        border:0;
        text-transform: uppercase;
    }

    .contact form button:hover,.contact form button:focus{
        background:#92bde7;
        color:#fff;
        outline:0;
        transition: background-color 2s ease-out;
    }

   
`;

export default ContactMeStyle;
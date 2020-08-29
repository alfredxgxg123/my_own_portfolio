import styled, {keyframes} from 'styled-components';

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

    .about-info {
        animation: ${animate} 2s;
        display: grid;
        grid-gap: 30px;
        grid-template-areas: 
        'bioimage bio bio'
        'job1 job2 job3';
        grid-template-columns: repeat(2, 1fr);

        .bio-image{
            grid-area: bioimage;
            margin: auto;
            border-radius: 10%;
            width: 200px;
            height: 250px;
            border: solid 2px grey;
        }
    
        .bio {
            grid-area: bio;
            font-size: 1.5rem;
        }
    
        .job-1 {
            grid-area: job1;
        }
    
        .job-2 {
            grid-area: job2;
        }
    
        .job-3 {
            grid-area: job3;
        }
    
        .job {
            background: rgb(68, 68, 68);
            padding: 0.5rem;
            border-bottom: grey 3px solid;
        }
    }


`;

export default MyProjectsStyle;


import styled from 'styled-components';


const AboutMeStyle = styled.main`

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

    .about-info {
        display: grid;
        grid-gap: 30px;
        grid-template-areas: 
        'bioimage bio bio'
        'job1 job2 job3';
        grid-template-columns: repeat(3, 1fr);

        .bio-image{
            grid-area: bioimage;
            margin: auto;
            border-radius: 50%;
            border: solid 3px black;
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
            background: rgb(68, 68, 100);
            padding: 0.5rem;
            border-bottom: grey 3px solid;
        }
    }


`;

export default AboutMeStyle;


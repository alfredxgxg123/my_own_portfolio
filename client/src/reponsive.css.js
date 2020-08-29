import styled, {css} from 'styled-components';
//smartphones
function mediaSm() {
    let styles = '';
    styles = `
        @media screen and (max-width: 500px) {
            main{
                &#home {
                    h1{
                        margin-top: 10vh;
                    }
                }
            }
        }
    `
    return css`${styles}`;
}


//tablets & small latops
function mediaMd() {
    let styles = '';
    styles = `
        @media screen and (max-width: 768px) {
            main{
                align-items: center;
                text-align: center;

                .lg-heading {
                    line-height: 1;
                    margin-bottom: 1rem;
                }
            }

            ul.menu-nav,
            div.menu-branding {
                float: none;
                width: 100%;
                min-height: 0;

                &.show {
                    transform: translate3d(0,0,0);
                }
            }

            .menu-nav {
                height: 75vh;
                transform: translate3d(-100%,0,0);
                font-size: 24px;
            }

            .menu-branding {
                height: 25vh;
                transform: translate3d(100%,0,0);

                .portrait {
                    width: 150px;
                    height: 150px;
                }
            }

            .about-info {
                grid-template-areas: 
                'bioimage'
                'bio'
                'job1'
                'job2'
                'job3';
                grid-template-columns: 1fr;
            }
        }
    `
    return css`${styles}`;
}

//desktop labtops
function mediaLg() {
    let styles = '';
    styles = `
        @media screen and (min-width: 769px) and (max-width:1170px) {
            //
        }
    `
    return css`${styles}`;
}

//widescreens 
function mediaXL() {
    let styles = '';
    styles = `
        @media screen and (min-width: 1171px) {
            //
        }
    `
    return css`${styles}`;
}



export {mediaSm, mediaMd, mediaLg, mediaXL};
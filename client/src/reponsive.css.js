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
                &#work {
                    .projects {
                        grid-template-columns: 1fr;
                    }
                }
            }
        }
    `
    return css`${styles}`;
}

function MobilemediaSm() {
    let styles = '';
    styles = `
        @media screen and (max-device-width: 500px) {
            main{
                &#home {
                    h1{
                        margin-top: 10vh;
                    }
                }
                &#work {
                    .projects {
                        grid-template-columns: repeat(2, 1fr);

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
        @media only screen and (max-width: 768px){
            #Contacting {
                .wrapper-show {
                    margin-top: 10vh;
                }
                
            }

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
            .projects {
                grid-template-columns: repeat(2, 1fr);
            }
        }


    `
    return css`${styles}`;
}

function MobilemediaMd() {
    let styles = '';
    styles = `
        @media only screen and (max-device-width: 768px){
            #Contacting {
                .wrapper-show {
                    margin-top: 18vh;
                }
                
            }

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

            .menu-btn {
                .btn-line {
                    width: 50px;
                    height: 8px;
                }

                &.close {
                    transform: rotate(180deg);
                    
                    // make an x instead of 3 lines 
                    .btn-line {
                        &:nth-child(1) {
                            transform: rotate(45deg) translate(8px, 8px);
                        }
                        &:nth-child(2) {
                            opacity: 0;
                        }
        
                        &:nth-child(3) {
                            transform: rotate(-45deg) translate(11px, -9px);
                        }
                    }
                }
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
            .projects {
                grid-template-columns: repeat(2, 1fr);
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
            .projects {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    `
    return css`${styles}`;
}

//widescreens 
function mediaXL() {
    let styles = '';
    styles = `
        @media screen and (min-width: 1171px) {
            .projects {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    `
    return css`${styles}`;
}



export {mediaSm, mediaMd, mediaLg, mediaXL, MobilemediaMd, MobilemediaSm};
import styled, {css} from 'styled-components';
//smartphones
function mediaSm() {
    let styles = '';
    styles = `
        @media screen and (max-width: 500px) {
            @content;
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
        }
    `
    return css`${styles}`;
}

//desktop labtops
function mediaLg() {
    let styles = '';
    styles = `
        @media screen and (min-width: 769px) and (max-width:1170px) {
            @content;
        }
    `
    return css`${styles}`;
}

//widescreens 
function mediaXL() {
    let styles = '';
    styles = `
        @media screen and (min-width: 1171px) {
            @content;
        }
    `
    return css`${styles}`;
}



export {mediaSm, mediaMd, mediaLg, mediaXL};
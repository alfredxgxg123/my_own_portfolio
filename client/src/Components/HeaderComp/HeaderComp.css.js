import styled, {css} from 'styled-components';


const HeaderStyle = styled.header`
    a:hover {
        color: #3b5998;
        transition: all 0.3s ease-out;
    }
    
    
    .menu-btn {
        position: absolute;
        z-index: 3;
        right: 35px;
        top: 35px;
        cursor: pointer;



        .btn-line {
            width: 28px;
            height: 3px;
            margin: 0 0 5px 0;
            background: #fff;
            transition: all 0.3s ease-out;
            &:hover {
                background: #3b5998;
                transition: all 0.1s ease-out;
            }

        }

        &.close {
            transform: rotate(180deg);
            
            // make an x instead of 3 lines 
            .btn-line {
                &:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                &:nth-child(2) {
                    opacity: 0;
                }

                &:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -6px);
                }
            }
        }
    }
    
    //overlay
    .menu {
        position: fixed;
        top: 0;
        width: 100%;
        opacity: 0.9;
        visibility: hidden;

        &.show {
            visibility: visible;
        }

        &-branding,
        &-nav {
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            justify-content: center;
            float: left;
            width: 50%;
            height: 100vh;
            overflow: hidden;
        }

        &-nav {
            margin: 0;
            padding: 0;
            background: rgb(68, 68, 90);
            list-style: none;
            transform: translate3d(0, -100%, 0);
            transition: all 0.5s ease-out;

            &.show {
                //slide from top
                transform: translate3d(0, 0, 0);
            }
        }

        &-branding {
            background: rgb(68, 68, 68);
            transition: all 0.5s ease-out;
            transform: translate3d(0, 100%, 0);
            &.show {
                //slide from bottom
                transform: translate3d(0, 0, 0);
            }
            .portrait {
                background:url(https://pcituress.s3-us-west-1.amazonaws.com/123123.jpg);
                width: 250px;
                height: 250px;
                background-size: cover;
                border-radius: 50%;
                border: solid 3px black;
            }
        }

        .nav-item {
            transform: translate3d(600px, 0, 0);
            transition: all 0.5s ease-out;
            &.show {
                transform: translate3d(0, 0, 0);
            }
        }

        .nav-link {
            display: inline-block;
            font-size: 30px;
            text-transform: uppercase;
            padding: 1rem 0;
            font-weight: 300;
            color:#fff;
            text-decoration: none;
            transition: all 0.5s ease-out;

            &:hover {
                color: #3b5998;
            }
        }

    }
    ${delay()}
`;

function delay(){
    let styles = '';
    for(let i = 1; i <= 4; i++) {
        styles += `.nav-item:nth-child(${i}) {
            transition-delay: ${i * 0.1}s;
        }`
    }
    return css`${styles}`;
}



export default HeaderStyle;
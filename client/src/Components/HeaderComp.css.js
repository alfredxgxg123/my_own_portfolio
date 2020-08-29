import styled from 'styled-components';


const HeaderStyle = styled.header`
    .menu-btn {
        position: absolute;
        z-index: 3;
        right: 35px;
        top: 35px;
        cursor: pointer;

        &:hover {
            color: #3b5998;
            transition: all 0.5s ease-out;
        }

        .btn-line {
            width: 28px;
            height: 3px;
            margin: 0 0 5px 0;
            background: #fff;
            &: hover {
                color: #3b5998;
                transition: all 0.5s ease-out;
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
    }


    
`;

export default HeaderStyle;
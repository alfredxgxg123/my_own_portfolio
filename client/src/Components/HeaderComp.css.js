import styled from 'styled-components';


const HeaderStyle = styled.header`
    .menu-btn {
        position: absolute;
        z-index: 3;
        right: 35px;
        top: 35px;
        cursor: pointer;

        &: hover {
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
    }
`;

export default HeaderStyle;
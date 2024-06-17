import styled from "styled-components";

const MobileCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header-card{
    width: 100%;
    height: calc(100vh - 16.5rem);
    display: flex;
    justify-content: center;
    background-image: url('/assets/login-frame-mobile.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 2rem;
  }

  .content-card{
    max-height: 12.5rem;
    padding: 0.5rem 1rem 1.5rem 1rem;
    background-color: #FAF8FF;
  }  
`

export default MobileCardStyle;
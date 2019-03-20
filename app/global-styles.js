import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }


  .selectedItem:hover{
    transform: scale(1.05);
    animation: fading 0.6s linear
  }

  @keyframes fading{
    0%{ opacity: 0.5},
    100%{ opacity: 1 },
  }

  .selectedButton{
    letter-spacing: 1px;  
  }

  .selectedButton:hover{
    transform: scale(1.05);
    letter-spacing: 2px;
    background-color: rgba(0,150,0,1) !important;
  }

  .navbar-burger {
    color: #62b5e5;
  }

  .table.is-fullwidth {
    border: 1px solid lightgrey;
}

.table td, .table th {
  vertical-align: middle;
  text-align: center;
}

.selectAll:hover,
.selectMobile:hover,
.selectLaptop:hover{
  transform: scale(1.1);
  background-color: rgb(54, 94, 157) !important
}

.logoSwagger{
  animation: swinging 5s linear infinite
}

@keyframes swinging{
  0%{transform: rotateY(0deg);opacity: 0.3}
  25%{transform: rotateY(90deg)}
  50%{transform: rotateY(180deg);opacity: 1}
  75%{transform: rotateY(275deg)}
  100%{transform: rotateY(360deg);opacity: 0.3}
}

a.navbar-item:hover {
  background-color: rgb(54, 94, 157);
}

.logoSwagger2:hover,
.logoSwagger3:hover,
.logoSwagger4:hover{
  transform: scale(1.1);
  color: #fff;
}

.Toastify__toast--success {
  top: 85px;
}

.thankYouApproved{
  color: yellowgreen;
  animation: approving 0.5s linear
}

@keyframes approving{
  0%{transform: scale(2); opacity: 0},
  100%{transform: scale(1); opacity: 1},
}

`;

export default GlobalStyle;

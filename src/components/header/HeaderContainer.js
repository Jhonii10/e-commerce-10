import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: black;
  color: #fff;

  .header {
    width: 100%;
    height: 8rem;
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .logo a h2 {
    width: 25%;
    color: #fff;
    cursor: pointer;

    span {
      color: orangered;
    }
  }

  nav {
    width: 75%;
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;

      .logo-mobile {
        display: none;
      }

      li {
        margin: 0 5px;

        a {
          color: #fff;

          &:hover {
            color: orangered;
          }

          
        &.active {
            color: red;
        }
        }
      }
    }
  }

  .header-right {
    display: flex;

    .cart a {
      display: flex;
      color: #fff;
      position: relative;

      &:hover {
        color: orangered;
      }

      &.active {
        color: red;
      }

      p {
        position: absolute;
        top: -1rem;
        right: -1rem;
        font-weight: 500;
      }
    }

    span {
      margin: 0 5px;

      p {
        color: #fff;
      }
    }

    .links a {
      margin: 0 5px;
      color: #fff;

      &:hover {
        color: orangered;
      }

      &.active {
        color: red;
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    display: none;
  }

  @media screen and (max-width: 800px) {
    nav {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100vh;
      background-color: black;
      padding: 1rem;
      z-index: 999;
      transform: translateX(-200%);
      transition: all 0.3s;

      .nav-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        transform: translateX();
        transition: all 0.3s;
      }

      .show-nav-wrapper {
        transform: translateX(100%);
      }

      ul {
        display: block;

        .logo-mobile {
          display: flex;
          justify-content: space-between;
          align-items: center;

          > * {
            cursor: pointer;
          }
        }

        li {
          padding: 5px 0;
          border-bottom: 1px solid #333;

          a {
            display: block;
          }
        }
      }

      .header-right {
        display: block;

        .links {
          display: block;

          a {
            display: block;
            margin: 0;
            padding: 5px 0;
            border-bottom: 1px solid #333;
          }
        }
      }
    }

    .cart {
      display: block;
      padding: 5px 0;

      a {
        color: #fff;
        position: relative;

        &:hover {
          color: orangered;
        }

        p {
          position: absolute;
          top: -1rem;
          left: 5rem;
          font-weight: 500;
          color: #fff;
        }
      }
    }

    .show-nav {
      transform: translateX(0);
    }

    .hide-nav {
      transform: translateX(-200%);
    }

    .menu-icon {
      display: flex;

      > * {
        margin-left: 2rem;
      }
    }

    

  }

  .btn {
        font-size: 1rem;
        font-weight: 400;
        padding: 6px 8px;
        margin: 0 5px 0 0;
        border: 1px solid transparent;
        border-radius: 3px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
        }

        .btn-primary {
            color: #fff;
            background: #007bff;
        }
`;

export default HeaderContainer;

import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <Wrapper>
      <header>
        <p className="logo">calc</p>
        <div className="themes">
          <p className="text-theme">THEME</p>
          <div className="theme">
            <div className="theme__numbers">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <div className="theme-box">
              <div className="theme-circle"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="screen">
        <b>0</b>
      </div>

      <div className="buttons-container">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>DEL</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
        <button>RESET</button>
        <button>=</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 537px;


  @media (max-width: 500px) {
    width: 500px;
    padding: 25px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    .logo {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 1px;
      color: white;
    }

    .themes {
      display: flex;
      align-items: flex-end;
      gap: 15px;

      .text-theme {
        color: white;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;

        margin-bottom: 7px;
      }

      .theme {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7px;

        .theme__numbers {
          display: flex;
          gap: 12px;
          p {
            color: white;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1px;
            cursor: pointer;
          }
        }
      
        .theme-box {
          width: 72px;

          background-color: hsl(223, 31%, 20%);
          border-radius: 16px;
          padding: 4px;
          cursor: pointer;

          .theme-circle {
            transform: translateX(0px);
            width: 20px;
            height: 20px;
            background-color: hsl(6, 63%, 50%);
            border-radius: 100%;
            cursor: pointer;
          }
        }
      }
    }
  }

  .screen {
    width: 100%;
    padding: 39px 37px;
    background-color: hsl(224, 36%, 15%);
    border-radius: 16px;
    font-size: 36px;
    text-align: right;
    color: white;
    margin-bottom: 24px;
  }

  .buttons-container {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 100px);
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: hsl(223, 31%, 20%);
    border-radius: 16px;

    @media (max-width: 500px) {
      grid-template-columns: repeat(4, 60px);

      gap: 25px;
    }

    button {
      padding: 12px 20px;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      color: hsl(221, 14%, 31%);
      background-color: hsl(30, 25%, 89%);
      border: none;
      border-radius: 8px;
      box-shadow: 0 4px hsl(28, 16%, 65%);
      &:nth-child(18), &:nth-child(17) {
        grid-column: span 2;
      }

      &:nth-child(4), &:nth-child(17) {
        background-color: hsl(225, 21%, 49%);
        box-shadow: 0 4px hsl(224, 28%, 35%);
        color: white;
      }

      &:last-child {
        background-color: hsl(6, 63%, 50%);
        box-shadow: 0 4px hsl(6, 70%, 34%) ;
        color: white;
      }

      @media (max-width: 500px) {
        padding: 6px 12px;
        font-size: 16px;
      }
    }
  }
`;

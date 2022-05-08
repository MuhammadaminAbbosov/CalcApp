import React, { useState } from "react";
import styled from "styled-components";

export default function Main({setChangeColor}) {
  const [changeTheme, setChangeTheme] = useState(1)

  const [calc, setCalc]= useState("")
  const [result , setResult] = useState("")

  const ops = ["/", "*", "+", "-", "."]


  const updateCalc = value => {
    if (
      (ops.includes(value) && calc === "" )|| 
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return; 
    }

    setCalc(calc + value)

    if(!ops.includes(value)) {
      setResult(eval(calc + value).toString( ))
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const deleteLast = () => {
    if(calc === "" ) return;

    const value = calc.slice(0, -1)

    setCalc(value)

    setResult(eval(value).toString())
  }

  const reset = () => {
    setCalc("")
    setResult("")
  }

  return (
    <Wrapper changeTheme={changeTheme}>
      <header>
        <p className="logo">calc</p>
        <div className="themes">
          <p className="text-theme">THEME</p>
          <div className="theme">
            <div className="theme__numbers">
              <p onClick={() => {setChangeTheme(1); setChangeColor(1)}}>1</p>
              <p onClick={() => {setChangeTheme(2); setChangeColor(2)}}>2</p>
              <p onClick={() => {setChangeTheme(3); setChangeColor(3)}}>3</p>
            </div>
            <div className="theme-box">
              <div onClick={() => {setChangeTheme(1); setChangeColor(1)}} className="theme-circle"></div>
              <div onClick={() => {setChangeTheme(2); setChangeColor(2)}} className="theme-circle"></div>
              <div onClick={() => {setChangeTheme(3); setChangeColor(3)}} className="theme-circle"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="screen">
        {result ? <p>({result})</p> : ""}
        <b>{calc || "0"}</b>
      </div>

      <div className="buttons-container">
        <button onClick={() => updateCalc("7")}>7</button>
        <button onClick={() => updateCalc("8")}>8</button>
        <button onClick={() => updateCalc("9")}>9</button>
        <button onClick={() => deleteLast()}>DEL</button>
        <button onClick={() => updateCalc("4")}>4</button>
        <button onClick={() => updateCalc("5")}>5</button>
        <button onClick={() => updateCalc("6")}>6</button>
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("1")}>1</button>
        <button onClick={() => updateCalc("2")}>2</button>
        <button onClick={() => updateCalc("3")}>3</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc("/")}>/</button>
        <button onClick={() => updateCalc("*")}>x</button>
        <button onClick={() => reset()}>RESET</button>
        <button onClick={calculate}>=</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 537px;

  * {
    user-select: none;
  }

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
      color: ${({ changeTheme }) => {
        if (changeTheme === 1) {
          return "white";
        } else if (changeTheme === 2) {
          return "hsl(60, 10%, 19%)";
        } else if (changeTheme === 3) {
          return "hsl(52, 100%, 62%)";
        }
      }};
    }

    .themes {
      display: flex;
      align-items: flex-end;
      gap: 15px;

      .text-theme {
        color: ${({ changeTheme }) => {
          if (changeTheme === 1) {
            return "white";
          } else if (changeTheme === 2) {
            return "hsl(60, 10%, 19%)";
          } else if (changeTheme === 3) {
            return "hsl(52, 100%, 62%)";
          }
        }};
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
            color: ${({ changeTheme }) => {
              if (changeTheme === 1) {
                return "white";
              } else if (changeTheme === 2) {
                return "hsl(60, 10%, 19%)";
              } else if (changeTheme === 3) {
                return "hsl(52, 100%, 62%)";
              }
            }};
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1px;
            cursor: pointer;
          }
        }

        .theme-box {
          width: 72px;
          display: flex;
          background-color: ${({ changeTheme }) => {
            if (changeTheme === 1) {
              return "hsl(223, 31%, 20%)";
            } else if (changeTheme === 2) {
              return "hsl(0, 5%, 81%)";
            } else if (changeTheme === 3) {
              return "hsl(268, 71%, 12%)";
            }
          }};
          border-radius: 16px;
          padding: 4px;
          cursor: pointer;

          .theme-circle {
            transform: translateX(0px);
            width: 20px;
            height: 20px;
            border-radius: 100%;
            cursor: pointer;

            &:nth-child(1) {
              background-color: hsl(6, 63%, 50%);
              box-shadow: 1px 2px hsl(6, 70%, 34%);

              opacity: ${({ changeTheme }) => (changeTheme === 1 ? "1" : "0")};
            }

            &:nth-child(2) {
              background-color: hsl(25, 98%, 40%);
              box-shadow: 1px 2px hsl(25, 99%, 27%);
              opacity: ${({ changeTheme }) => (changeTheme === 2 ? "1" : "0")};
            }
            &:nth-child(3) {
              background-color: hsl(176, 100%, 44%);
              box-shadow: 1px 2px hsl(177, 92%, 70%);
              opacity: ${({ changeTheme }) => (changeTheme === 3 ? "1" : "0")};
            }
          }
        }
      }
    }
  }

  .screen {
    width: 100%;
    padding: 39px 37px;
    background-color: ${({ changeTheme }) => {
      if (changeTheme === 1) {
        return "hsl(224, 36%, 15%)";
      } else if (changeTheme === 2) {
        return "hsl(0, 0%, 93%)";
      } else if (changeTheme === 3) {
        return "hsl(268, 71%, 12%)";
      }
    }};
    border-radius: 16px;
    font-size: 34px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 10px;

    p {
      font-size: 20px;
    }
    color: ${({ changeTheme }) => {
      if (changeTheme === 1) {
        return "white";
      } else if (changeTheme === 2) {
        return "hsl(60, 10%, 19%)";
      } else if (changeTheme === 3) {
        return "hsl(52, 100%, 62%)";
      }
    }};
    margin-bottom: 24px;
  }

  .buttons-container {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 100px);
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: ${({ changeTheme }) => {
      if (changeTheme === 1) {
        return "hsl(223, 31%, 20%)";
      } else if (changeTheme === 2) {
        return "hsl(0, 5%, 81%)";
      } else if (changeTheme === 3) {
        return "hsl(268, 71%, 12%)";
      }
    }};
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
      color: ${({ changeTheme }) => {
        if (changeTheme === 1) {
          return "hsl(221, 14%, 31%)";
        } else if (changeTheme === 2) {
          return "hsl(60, 10%, 19%)";
        } else if (changeTheme === 3) {
          return "hsl(52, 100%, 62%)";
        }
      }};
      border: none;
      border-radius: 8px;

      background-color: ${({ changeTheme }) => {
        if (changeTheme === 1) {
          return "hsl(30, 25%, 89%)";
        } else if (changeTheme === 2) {
          return "hsl(45, 7%, 89%)";
        } else if (changeTheme === 3) {
          return "hsl(268, 47%, 21%)";
        }
      }};
      box-shadow: 2px 4px
        ${({ changeTheme }) => {
          if (changeTheme === 1) {
            return "hsl(28, 16%, 65%)";
          } else if (changeTheme === 2) {
            return "hsl(35, 11%, 61%)";
          } else if (changeTheme === 3) {
            return "hsl(290, 70%, 36%)";
          }
        }};
      &:nth-child(18),
      &:nth-child(17) {
        grid-column: span 2;
      }

      &:nth-child(4),
      &:nth-child(17) {
        background-color: ${({ changeTheme }) => {
          if (changeTheme === 1) {
            return "hsl(225, 21%, 49%)";
          } else if (changeTheme === 2) {
            return "hsl(185, 42%, 37%)";
          } else if (changeTheme === 3) {
            return "hsl(281, 89%, 26%)";
          }
        }};
        box-shadow: 2px 4px
          ${({ changeTheme }) => {
            if (changeTheme === 1) {
              return "hsl(224, 28%, 35%)";
            } else if (changeTheme === 2) {
              return "hsl(185, 58%, 25%)";
            } else if (changeTheme === 3) {
              return "hsl(285, 91%, 52%)";
            }
          }};
        color: white;
      }

      &:last-child {
        background-color: ${({ changeTheme }) => {
          if (changeTheme === 1) {
            return "hsl(6, 63%, 50%)";
          } else if (changeTheme === 2) {
            return "hsl(25, 98%, 40%)";
          } else if (changeTheme === 3) {
            return "hsl(176, 100%, 44%)";
          }
        }};
        box-shadow: 2px 4px
          ${({ changeTheme }) => {
            if (changeTheme === 1) {
              return "hsl(6, 70%, 34%)";
            } else if (changeTheme === 2) {
              return "hsl(25, 99%, 27%)";
            } else if (changeTheme === 3) {
              return "hsl(177, 92%, 70%)";
            }
          }};
        color: ${({ changeTheme }) => {
          if (changeTheme === 1) {
            return "white";
          } else if (changeTheme === 2) {
            return "white";
          } else if (changeTheme === 3) {
            return "hsl(198, 20%, 13%)";
          }
        }};
      }

      @media (max-width: 500px) {
        padding: 6px 12px;
        font-size: 16px;
      }
    }
  }
`;

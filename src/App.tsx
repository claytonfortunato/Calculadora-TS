import BtnEqual from "./assets/ButtonEquals.png";
import PlusMinus from "./assets/PlusMinus.png";
import Plus from "./assets/Plus.png";
import Minus from "./assets/Minus.png";
import X from "./assets/X.png";
import Divide from "./assets/Divide.png";
import Percent from "./assets/Percent.png";
import Equals from "./assets/Equals.png";

import * as C from "./styles";

function App() {
  return (
    <C.Container>
      <C.Calculate>
        <C.Result>
          <span></span>
          <div className="calculate_result">
            <span>
              <img src={Equals} alt="" />
            </span>
            <span className="result"></span>
          </div>
        </C.Result>
        <C.Buttons>
          <button>AC</button>
          <button>C</button>
          <button className="button_operations">
            <img src={Percent} alt="" />
          </button>

          <button className="button_operations">
            <img src={Divide} alt="" />
          </button>
          <button>7</button>
          <button>8</button>
          <button>9</button>

          <button className="button_operations">
            <img src={X} alt="" />
          </button>
          <button>4</button>
          <button>5</button>
          <button>6</button>

          <button className="button_operations">
            <img src={Minus} alt="" />
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>

          <button className="button_operations">
            <img src={Plus} alt="" />
          </button>
          <button className="button_operations">
            <img src={PlusMinus} alt="" />
          </button>
          <button>0</button>
          <button>.</button>
          <button className="button_equals">
            <img src={BtnEqual} alt="" />
          </button>
        </C.Buttons>
      </C.Calculate>
    </C.Container>
  );
}

export default App;

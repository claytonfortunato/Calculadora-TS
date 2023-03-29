import * as C from "./styles";

function App() {
  return (
    <C.Container>
      <h1>Calculadora</h1>
      <C.Calculate>
        <C.Buttons>
          <button>AC</button>
          <button>C</button>
          <button>%</button>
          <button>/</button>

          <button>7</button>
          <button>8</button>
          <button>9</button>

          <button>4</button>
          <button>5</button>
          <button>6</button>

          <button>1</button>
          <button>2</button>
          <button>3</button>

          <button>0</button>
          <button>.</button>
        </C.Buttons>
      </C.Calculate>
    </C.Container>
  );
}

export default App;

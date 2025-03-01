import Button from "./components/button/Button";
import Input from "./components/input/Input";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Input label="Test" placeholder="Write something here" />
      <Button onClick={() => console.log("Clicked")}>Click me</Button>
    </>
  );
}

export default App;

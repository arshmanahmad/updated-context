import { useContext } from "react";
import { DataContext } from "./context/DataProvider";

function App() {
  const {count,setCount} = useContext(DataContext);
  return (
    <div>
      {count}
      <button onClick={()=>{
        setCount(count + 1);
      }}>Click me</button>
    </div>
  );
}

export default App;

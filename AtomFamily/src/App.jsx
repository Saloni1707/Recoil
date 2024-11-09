
import "./App.css";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atoms";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <UpdaterComponent/>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />

    </RecoilRoot>
  );
}

// eslint-disable-next-line react/prop-types
function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      
      <div>Title: {currentTodo.title}</div>
      <div>Description: {currentTodo.description}</div>
      <br />
    </>
  );
}

function UpdaterComponent(){
  const updateTodo = useSetRecoilState ( todosAtomFamily(2));

  useEffect(()=>{
    setTimeout(() => {
      updateTodo({
        id: "2",
        title: "New Todo",
        description: "New todo"
      })
    },5000)
  },[])
  
}

export default App;

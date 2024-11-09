import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    let foundTodo = TODOS.find(todo => todo.id === id);
    return foundTodo || { title: "Not Found", description: "No description available" };
  },
});

// So atomFamily is a function that returns a writeable RecoilState atom
//in simple words
// const todosAtomFamily = atomFamily ({
//    return atom({

//     });
// })

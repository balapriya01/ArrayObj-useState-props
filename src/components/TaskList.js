import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxItem } from "./BoxItem";

const TaskList = (props) => {
  const [characters, setCharacters] = useState([
    { id: 1, name: "Spiderman" },
    { id: 2, name: "BatMan" },
    { id: 3, name: "Hulk" },
    { id: 4, name: "Caption America" },
    { id: 5, name: "Iron Man" },
    { id: 6, name: "Thor" },
    { id: 7, name: "Ghost Rider" },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  function toggle() {
    setShow(!show);
  }

  return (
    <>
      <div className="container">
        <div className="box-con">
          <ul>
            <h1 style={{ textAlign: "center" }}>Hello Task {props.title}</h1>
            <button className="toggle" onClick={() => toggle()}>
              Toggle
            </button>
            {show &&
              characters.map((character) => (
                <TaskCard
                  key={character.id}
                  character={character}
                  handleDelete={handleDelete}
                />
              ))}
          </ul>
        </div>

        <div className="box-con">
          <h1 style={{ textAlign: "center" }}>Hello Box {props.title}</h1>
          <BoxItem bgcolor="greenn">
            <p>Hello World</p>
            <p>It's not over untill it's over</p>
          </BoxItem>
          <BoxItem bgcolor="yelloww">
            <p>Hello Earth</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </BoxItem>
          <BoxItem bgcolor="redd">
            <p>Hello Planet</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </BoxItem>
        </div>
      </div>
    </>
  );
};

export default TaskList;

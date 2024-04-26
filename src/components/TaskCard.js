export const TaskCard = ({ character, handleDelete }) => {
  return (
    <>
      <li>
        <span>
          {character.id} - {character.name}
        </span>
        <button className="delete" onClick={() => handleDelete(character.id)}>
          Delete
        </button>
      </li>
    </>
  );
};

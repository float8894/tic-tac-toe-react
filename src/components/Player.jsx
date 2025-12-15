import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) onChangeName(symbol, playerName);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let buttonTitle = 'Edit';
  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  if (isEditing) {
    buttonTitle = 'Save';
    editablePlayerName = (
      <input type='text' required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonTitle}</button>
    </li>
  );
}

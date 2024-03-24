import {useState} from 'react';

const SwitchType  = {
  Text: 0,
  Picture: 1,
}

function CardSwitch({ pics }) {
  const [type, setType] = useState(SwitchType.Text);
  const keys = Object.keys(SwitchType);

  const toggleType = () => {
    setType(type === keys.length - 1 ? 0 : type + 1);
  };

  return (
    <div>
      <div>{pics[type]}</div>
      <button onClick={toggleType}>{keys[type]}</button>
    </div>
  );
}

export default CardSwitch;


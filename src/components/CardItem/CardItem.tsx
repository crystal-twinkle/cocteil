import {useState} from 'react';
import Button from '../UI/Button';
import './CardItem.scss';

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
      <div className="display">{pics[type]}</div>
      <Button onClick={toggleType}>{keys[type]}</Button>
    </div>
  );
}

export default CardSwitch;


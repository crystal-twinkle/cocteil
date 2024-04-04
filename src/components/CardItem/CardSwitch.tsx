import {useState} from 'react';
import Button from '../UI/Button';
import './CardSwitch.scss';

const SwitchType  = {
  Text: 0,
  Picture: 1,
}

interface ICardSwitch {
  pics: string[];
  index: boolean;
}


function CardSwitch({ pics }: ICardSwitch) {
  const [type, setType] = useState(SwitchType.Text);
  const keys = Object.keys(SwitchType);

  const toggleType = () => {
    setType(type === keys.length - 1 ? 0 : type + 1);
  };

  return (
    <div>
      <div className="display">{pics[type]}</div>
      <Button onclick={toggleType}>{keys[type]}</Button>
    </div>
  );
}

export default CardSwitch;


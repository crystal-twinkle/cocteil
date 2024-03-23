import {useState} from 'react';

function CardSwitch({ pics }) {
  const [index, setIndex] = useState(0);

  const click = () => {
    setIndex(index+1);
    if (index===pics.length - 1) {
      setIndex(0);
    }
  }
  return (
    <div>
      <div>{pics[index]}</div>
      <button onClick={click}>text</button>
    </div>
  );
}

export default CardSwitch;


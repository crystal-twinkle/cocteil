import './Cardlist.scss';
import CardSwitch from '../CardItem/CardItem';
import {useContext} from 'react';
import {AppContext} from '../../contexts/app-context';

function Cardlist() {
  const {smiles}=useContext(AppContext);

  return (
    <div className="list">
      {smiles.map((e, i) => (
        <div className="card" key={i}>
          <p className="card_name"> {e.name}</p>
          <CardSwitch pics={e.pic} index/>
        </div>
      ))}
    </div>
  )
}

export default Cardlist;

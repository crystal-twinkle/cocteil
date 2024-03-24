import data from '../../data/data';
import './Cardlist.css';
import CardSwitch from '../CardItem';

function Cardlist() {
  return (
    <div className="list">
      {data.map((e, i) => (
        <div className="card" key={i}>
          <p className="card_name"> {e.name}</p>
          <CardSwitch pics={e.pic} index/>
        </div>
      ))}
    </div>
  )
}

export default Cardlist;

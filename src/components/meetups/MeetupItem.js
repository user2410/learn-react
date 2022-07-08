// import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
// import FavContext from '../../store/fav-contexts';
import {useSelector, useDispatch} from 'react-redux';
import {addFav, removeFav} from '../../actions/favs';

function MeetupItem(props) {
  // const favContext = useContext(FavContext);
  const allFavs = useSelector((state) => state.favHandler);
  const dispatch = useDispatch();

  const itemIsFav = allFavs.some(meetup => meetup.id === props.id);

  function toggleFavStatusHandler(){
    if(itemIsFav){
      dispatch(removeFav(props.id));
      // favContext.removeFav(props.id);
    }else{
      dispatch(addFav({
        id : props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      }));
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>{itemIsFav ? 'Remove from favorite' : 'Add to favorite'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
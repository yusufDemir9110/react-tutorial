import { useContext } from 'react'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavouritesContext from '../../store/favourites-context'
function MeetupItem(props) {
    const favouritesCtx = useContext(FavouritesContext);

    const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id)

    function toggleFavouritesStatusHandler(){
        if(itemIsFavourite){
            favouritesCtx.removeFavourite(props.id)
        }else{
            favouritesCtx.addFavourite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address
            })
        }
    }
    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}></img>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavouritesStatusHandler}>{itemIsFavourite?"Remove From Favourites": "To Favourites"}</button>
            </div>
            </Card>
            
        </li>


    )
}

export default MeetupItem
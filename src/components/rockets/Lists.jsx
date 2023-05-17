import { useEffect } from "react"
import { reserveRocket } from "../../redux/rockets/RocketsSlice"
import { FetchData } from "../../redux/rockets/API"
import {useDispatch, useSelector} from 'react-redux'
import styles from "../../styles/rockets/rocket.module.css";

export const Lists = ()=>{
    const {rockets, status, error} = useSelector((state)=> state.rockets)
    const Dispatch = useDispatch()
    useEffect(()=>{
        Dispatch(FetchData())
    }, [Dispatch])
    if(status){
        return "...Loading"
    }
    if(error){
        return "there is an error"
    }
    return (
        <div className="topContainer">
        {
            rockets.map((rocket)=>{
                return <section className='Space' key={rocket.id}>
                <div className='img'>
                  <img src={rocket.rocket_flickr_images} alt="" />
                </div>
                <div className='details'>
                  <h2>{rocket.rocket_name}</h2>
                  <p><span className={rocket.reserved? styles.badge: ''}>{rocket.reserved? "Reserved":''}</span>{rocket.description}</p>
                  <button className={`${rocket.reserved? styles.reserve: styles.unreserve}`} onClick={()=> Dispatch(reserveRocket(rocket.id))}>{rocket.reserved ? 'Cancel reservation': 'Reserve Rocket'}</button>
                </div>
              </section>
            })
        }
        </div>
    )
}
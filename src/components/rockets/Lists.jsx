import { useEffect } from "react"
import { FetchData } from "../../redux/rockets/RocketsSlice"
import {useDispatch, useSelector} from 'react-redux'

export const Lists = ()=>{
    const {rockets, status, error} = useSelector((state)=> state.rockets)
    const Dispatch = useDispatch()
    console.log(rockets)
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
                return <section className='Space' key={rocket.rocket_id}>
                <div className='img'>
                  <img src={rocket.rocket_flickr_images} alt="" />
                </div>
                <div className='details'>
                  <h2>{rocket.rocket_name}</h2>
                  <p>{rocket.description}</p>
                  <button className="rocketbtn">Reserve Rocket</button>
                </div>
              </section>
            })
        }
        </div>
    )
}
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const {rockets} = useSelector((state)=> state.rockets)

  return (
    <>
    <Navbar />
    <section className='container'>
      <div className="section1">
      <h2>My Missions</h2>
      <ul className='missions'>
      <li>mission 1</li>
      <li>mission 2</li>
      </ul>
      </div>
      <div className="section2">
      <h2>My Rockets</h2>
      <ul className='rockets'>
      {rockets
              .filter((rocket) => rocket.reserved)
              .map((rocket) => (
                <li key={rocket.id}>{rocket.rocket_name}</li>
              ))}
      </ul>
      </div>
    </section>
    </>
  )
};

export default MyProfile;

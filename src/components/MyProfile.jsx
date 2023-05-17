import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const {rockets} = useSelector((state)=> state.rockets);
  const {missions} = useSelector((state) => state.missions);

  return (
    <>
    <Navbar />
    <section className='container'>
      <div className="section1">
        <h2>My Missions</h2>
        <ul className='missions'>
          {missions
            .filter((mission) => mission.reserved)
            .map((mission) => (
              <li key={mission.id}>{mission.mission_name}</li>
          ))}
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

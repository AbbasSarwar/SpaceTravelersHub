import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission } from "../../redux/missions/missionsSlice";
import styles from "../../styles/Missions.module.css";

const MissionsTable = ({missions}) => {
  const dispatch = useDispatch();
  return ( 
    <table>
      <thead>
        <tr>
          <th className="mission">Misssion</th>
          <th className="description">Description</th>
          <th className="status">Status</th>
          <th className="join-leave-mission"></th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td><span className="status-badge">NOT A MEMBER</span></td>
            <td><button className={`${!mission.reserved? styles.join: styles.leave}`} onClick={()=> dispatch(joinMission(mission.id))}>{!mission.reserved ? 'Join Mission': 'Leave Mission'}</button></td>
          </tr>
        ))}
      </tbody>
    </table>
   );
}

MissionsTable.propTypes = {
  missions: PropTypes.isRequired,
};

 
export default MissionsTable;
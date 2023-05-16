import PropTypes from 'prop-types';

const MissionsTable = ({missions}) => {
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
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td><button>NOT A MEMBER</button></td>
            <td><button>Join Mission</button></td>
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
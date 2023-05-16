import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionsTable from './MissionsTable';
import { missionsData } from '../../redux/missions/MissionsAPI';

const MissionsLogic = () => {
  const { loading, missions, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(missionsData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <MissionsTable missions={missions} />
    </div>
  );
};

export default MissionsLogic;

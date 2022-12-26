import { RotatingLines } from 'react-loader-spinner';

function Loader({ width }) {
  return (
    <div className="loader-container">
      <RotatingLines
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </div>
  );
}

export default Loader;

// import Loader from '../Loader/Loader';
// const Loading = useSelector(isLoading);

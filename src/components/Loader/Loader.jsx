import { RotatingLines } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="loader-container">
      <RotatingLines
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        width="96px"
        visible={true}
      />
    </div>
  );
}

export default Loader;

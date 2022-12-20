import { RotatingLines } from 'react-loader-spinner';

function Loader({ width }) {
  return (
    <>
      <RotatingLines
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </>
  );
}

export default Loader;

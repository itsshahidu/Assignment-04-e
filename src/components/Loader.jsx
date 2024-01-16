import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      <Spinner
        animation='border'
        role='status'
        style={{
          width: '100px',
          height: '100px',
        }}
      >
        <span className='sr-only'></span>
      </Spinner>
    </div>
  );
};

export default Loader;

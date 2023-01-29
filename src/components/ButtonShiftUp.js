import '../App.css';

function ButtonShiftUp({ eventClick }) {
    return (
        <svg onClick={eventClick} className="icon-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
    );
}

export default ButtonShiftUp;

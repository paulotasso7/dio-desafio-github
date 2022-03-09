import './ShowDetailsButton.scss';



const ShowDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="show-details-button">
    <span>
      \/
    </span>
  </button>
);

export default ShowDetailsButton;
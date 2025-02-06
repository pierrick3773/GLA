
import './TopPage.css';
import Mountain from '../../public/photos/image/background_mountain.jpeg'

function TopPage() {
  return (
    <div>
      <div className="TopContainer">
        <h2>Explore Mountains With Us</h2>
        <img src={Mountain} className="Mountain" alt="Mountain" />
      </div>

    </div>
  );
}

export default TopPage;

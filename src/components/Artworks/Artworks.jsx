import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import guns from '../../guns.json';
import StyleArtwork from './StyleArtwork';

function Artworks() {
  return (
    <StyleArtwork>
      <div className="content">
        {guns.map((gun) => {
          return (
            <article>
              <Link
                to={{
                  pathname: `/Picture`,
                  state: { gun },
                }}
              >
                <img className="pictures" src={gun.img} alt={gun.name} />
                <p>{gun.name}</p>
                <p>{gun.artist}</p>
                <p>{gun.about}</p>
                <p>{gun.describe}</p>
                <p>{gun.size}</p>
                <p>{gun.number}</p>
                <p>{gun.price}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </StyleArtwork>
  );
}
export default Artworks;

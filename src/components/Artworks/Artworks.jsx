import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Picture from '../Picture/Picture';
import StyleArtwork from './StyleArtwork';

function Artworks() {
  const [infosPicture, setInfosPicture] = useState(['', '']);

  useEffect(() => {
    axios.get('http://localhost:8000/api/gallery').then(({ data }) => {
      setInfosPicture(data);
    });
  });

  return (
    <StyleArtwork>
      <div className="content">
        {infosPicture.map((picture) => {
          return (
            <article>
              <Link
                to={{
                  pathname: `/Picture`,
                  state: { picture },
                }}
              >
                <img
                  className="pictures"
                  src={picture.url}
                  alt={picture.name}
                />
                <p>{picture.name}</p>
                <p>{picture.artist}</p>
                <p>{picture.about}</p>
                <p>{picture.description}</p>
                <p>{picture.size}</p>
                <p>{picture.number}</p>
                <p>{picture.price}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </StyleArtwork>
  );
}

// Picture.propTypes = {
// pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
export default Artworks;

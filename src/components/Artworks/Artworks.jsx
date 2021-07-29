import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import StyleArtwork from './StyleArtwork';

dotenv.config();

function Artworks() {
  const [infosPicture, setInfosPicture] = useState(['', '']);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/gallery`)
      .then(({ data }) => {
        setInfosPicture(data);
      });
  }, []);

  return (
    <StyleArtwork>
      <div className="content">
        {infosPicture.map((picture) => {
          return (
            <article>
              <Link
                to={{
                  pathname: `/Picture/${picture.id}`,
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

export default Artworks;

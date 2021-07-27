import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StylePicture from './StylePicture';

function Picture() {
  const { id } = useParams();
  const [picture, setPicture] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/gallery/${id}`).then(({ data }) => {
      setPicture(data);
    });
  }, []);

  return (
    <StylePicture>
      <article>
        <img className="pictures" src={picture.url} alt={picture.name} />
        <div>
          <p>{picture.name}</p>
          <p>{picture.artist}</p>
          <p>{picture.about}</p>
          <p>{picture.description}</p>
          <p>{picture.size}</p>
          <p>{picture.number}</p>
          <p>{picture.price}</p>
        </div>
      </article>
    </StylePicture>
  );
}

export default Picture;

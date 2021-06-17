import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
/* import ReactImageMagnify from 'react-image-magnify'; */
import StylePicture from './StylePicture';

function Picture() {
  const location = useLocation();
  const [gun, setgun] = useState({});

  useEffect(() => {
    if (location.state) {
      setgun(location.state.gun);
    }
  }, []);
  return (
    <StylePicture>
      <article>
        <img className="pictures" src={gun.img} alt={gun.name} />
        <div className="caption">
          <p>{gun.name}</p>
          <p>{gun.artist}</p>
          <p>{gun.about}</p>
          <p>{gun.describe}</p>
          <p>{gun.size}</p>
          <p>{gun.number}</p>
          <p>{gun.price}</p>
        </div>
      </article>
    </StylePicture>
  );
}
export default Picture;

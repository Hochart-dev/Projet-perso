import PropTypes from 'prop-types';
import StylePicture from './StylePicture';

function Picture({
  name,
  artist,
  about,
  description,
  size,
  number,
  price,
  url,
}) {
  return (
    <StylePicture>
      <article>
        <img className="pictures" src={url} alt={Picture.name} />
        <div className="caption">
          <p>{name}</p>
          <p>{artist}</p>
          <p>{about}</p>
          <p>{description}</p>
          <p>{size}</p>
          <p>{number}</p>
          <p>{price}</p>
        </div>
      </article>
    </StylePicture>
  );
}

Picture.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Picture;

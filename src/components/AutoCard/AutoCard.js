import { useEffect, useState } from 'react';
// import { CamperDetails } from '../CamperDetails/CamperDetails';
import { Modal } from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { updateFavorites } from '../../redux/autos/autosSlice';
import { AutoDescription, AutoImg, AutoSubtitleDiv, AutoSubtitleText, AutoTitle, AutoTitleDiv, ButtonFavorite, CardLi, PriceDiv, ShowMoreButton, SubtitleDiv } from './AutoCard.styled';

export const AutoCard = ({ auto }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(checkFavorite(auto) || false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites !== null && storedFavorites !== undefined) {
      dispatch(updateFavorites(storedFavorites));
    }
  }, [dispatch]);
    
    

  function checkFavorite(auto) {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (Array.isArray(storedFavorites)) {
      return storedFavorites.some((favorite) => favorite.id === auto.id);
    }
    return false;
  }
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const addToFavorites = (auto) => {
    let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!Array.isArray(storedFavorites)) {
      storedFavorites = [];
    }
    const updatedFavorites = [...storedFavorites, auto];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(true);
    if (storedFavorites.length > 0) {
      dispatch(updateFavorites(updatedFavorites));
    }
  };

  const removeFromFavorites = (auto) => {
    let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = storedFavorites.filter(
      (favorite) => favorite.id !== auto.id
    );

    if (updatedFavorites.length === 0) {
      localStorage.removeItem('favorites');
      dispatch(updateFavorites([]));
    } else {
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      dispatch(updateFavorites(updatedFavorites));
    }

    setIsFavorite(false);
  };

  const handleClick = (auto) => {
    return isFavorite ? removeFromFavorites(auto) : addToFavorites(auto);
  };

  return (
    <CardLi key={auto.id}>
      <div>
        <AutoImg src={auto.gallery[0]} alt={auto.name} />
      </div>
      <div>
        <AutoTitleDiv>
          <AutoTitle>{auto.name}</AutoTitle>
          <PriceDiv>
            <AutoTitle>{`₴${auto.price}`}</AutoTitle>
            <ButtonFavorite
              type="button"
              onClick={() => handleClick(auto)}
            >
              {/* {isFavorite ? <PressedHeartIcon /> : <HeartIcon />} */}
            </ButtonFavorite>
          </PriceDiv>
        </AutoTitleDiv>
        <AutoSubtitleDiv>
          <SubtitleDiv>
            {/* <StarIcon /> */}
            <AutoSubtitleText>{`${auto.rating}(${auto.reviews.length} Reviews)`}</AutoSubtitleText>
          </SubtitleDiv>
          <SubtitleDiv>
            {/* <LocationIcon /> */}
            <AutoSubtitleText>{auto.location}</AutoSubtitleText>
          </SubtitleDiv>
        </AutoSubtitleDiv>
        <AutoDescription>{auto.description}</AutoDescription>
        {/* <CamperDetails auto={auto} /> */}
        <ShowMoreButton type="button" onClick={openModal}>
          Show more
        </ShowMoreButton>
      </div>
          <Modal
              key={auto.id}
              isModalOpen={isModalOpen}
              closeModal={closeModal}
              auto={auto}
          />
    </CardLi>
  );
};
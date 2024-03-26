import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectFavorites } from 'redux/autos/selectors';
import sprite from '../../image/sprite.svg';
import { Modal } from '../Modal/Modal';

import {
  AutoImg,
  AutoSubtitleDiv,
  AutoSubtitleText,
  AutoTitle,
  AutoTitleDiv,
  ButtonFavorite,
  CardDiv,
  Description,
  IconMap,
  IconStar,
  IconSvg,
  PriceDiv,
  ShowMoreButton,
  SubtitleDiv
} from './AutoCard.styled';
import { addFavorites, removeFavorites } from 'redux/autos/favoritesSlice';

export const AutoCard = ({ auto }) => {
    const { name, price, rating, reviews, location, description, gallery } = auto;
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);
    const favorites = useSelector(selectFavorites);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (favorites.some((f) => f._id === auto._id)) {
            setIsFavorite(true);
        }        
    }, [favorites, auto._id]);
    
     const handleClick = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            dispatch(addFavorites(auto));
        } else {
            dispatch(removeFavorites(auto._id));
        }
    };
    
    return (      
        <CardDiv>
            <div>
                <AutoImg src={gallery[0]} alt={name} />
            </div>
            <div>
                <AutoTitleDiv>
                    <AutoTitle>{name}</AutoTitle>
                    <PriceDiv>
                        <AutoTitle>€{price.toFixed(2)}</AutoTitle>
                        <ButtonFavorite type="button" onClick={handleClick} >  
                            <IconSvg>
                                <use href={`${sprite}${!isFavorite ? `#heart` : `#pressHeart`}`} />                               
                           </IconSvg>        
                        </ButtonFavorite>
                    </PriceDiv>
                </AutoTitleDiv>
                <AutoSubtitleDiv>
                    <SubtitleDiv>
                        <AutoSubtitleText >
                            <IconStar>
                                <use href={`${sprite}#star`} />
                            </IconStar>
                            {`${rating}(${reviews.length} Reviews)`}</AutoSubtitleText>
                    </SubtitleDiv>
                    <SubtitleDiv>
                        <AutoSubtitleText>
                            <IconMap>
                                <use href={`${sprite}#map`} />
                            </IconMap>
                            {location}
                        </AutoSubtitleText>
                    </SubtitleDiv>                    
                </AutoSubtitleDiv>
                <Description>{description}</Description>
                <ShowMoreButton type="button" onClick={() => setIsModalOpen(true)}>
                    Show more
                </ShowMoreButton>
            </div>
            {isModalOpen && (
                <Modal
                    key={auto._id}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    auto={auto}
                />
            )}
        </CardDiv>
    );
};

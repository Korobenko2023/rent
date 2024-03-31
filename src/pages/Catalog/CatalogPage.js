import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectAutos, selectIsLoading, selectError } from "redux/autos/selectors";
import { fetchAutos } from "redux/autos/operations";
import { AutosList } from "components/AutosList/AutosList";
import { CatalogDiv, Wrapper } from "./CatalogPage.styled";

export default function CatalogPage() {
  const dispatch = useDispatch();  
  const autos = useSelector(selectAutos);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);  
  const [page, setPage] = useState(1);
 
  useEffect(() => {
    dispatch(fetchAutos(page));
  }, [dispatch, page]);  

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  
  return (
     <CatalogDiv>
      <Wrapper>     
        {isLoading && !error && <Loader />}
        {error && (toast.error('Oops! Something went wrong. Please try again later.'))}
        {autos.length > 0 ? (            
            <AutosList autos={autos} buttonMore={handleLoadMore} />
        ) : null}        
        </Wrapper>
    </CatalogDiv>
    );
};
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
// import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentPage } from "redux/autos/autosSlice";
import { fetchAutos } from "redux/autos/operations";
import { selectAutos, selectCurrentPage, selectIsLoading } from "redux/autos/selectors";
// import { AutosUl, CatalogDiv, LoadMoreButton } from "./CatalogPage.styled";
import { AutoCard } from "components/AutoCard/AutoCard";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const autosItems = useSelector(selectAutos);
  // const visibleItems = useSelector(selectVisibleItems);
  const isLoading = useSelector(selectIsLoading);
  // const isVisibleButton = visibleItems.length !== catalogItems.length;
  const isVisibleButton = autosItems.length % 4 === 0;

  // let filteredCampers = useSelector(selectFilteredCampers);

  useEffect(() => {
    dispatch(fetchAutos(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div>
      <h1>Catalog</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* <Aside /> */}
          <div>
            <ul>
              {autosItems.length !== 0 &&
                autosItems.map((item) => (
                  <AutoCard key={item.id} camper={item} />
                ))}
            </ul>
            {/* <ul>
              {filteredCampers.length !== 0 &&
                filteredCampers.map((item) => (
                  <CamperCard key={item.id} camper={item} />
                ))}
            </ul> */}

            {/* <ul>
              {visibleItems.length !== 0 &&
                visibleItems.map((item) => (
                  <CamperCard key={item.id} camper={item} />
                ))}
            </ul> */}

            {isVisibleButton && (
              <button
                type="button"
                onClick={() => dispatch(updateCurrentPage())}
              >
                Load more
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;

// export default function CatalogPage() {
//   const dispatch = useDispatch();
//   // const isLoading = useSelector(selectIsLoading);
//   // const error = useSelector(selectError);
//   const autos = useSelector(selectAutos);
//   const currentPage = useSelector(selectCurrentPage);
//   const visibleItems = useSelector(selectVisible);
//   const isVisibleButton = visibleItems.length !== autos.length;

//   useEffect(() => {
//     dispatch(fetchAutos(currentPage));
//   }, [dispatch, currentPage]);

//   return ( 
//     <CatalogDiv>
//       <div>Catalog</div>
//        {/* {isLoading && !error && <Loader />}
//        {error && (toast.error('Oops! Something went wrong. Please try again later.'))} */}
//       <AutosUl>
//         {visibleItems.length !== 0 && visibleItems.map((item) => (
//           <AutoCard key={item.id} auto={item} /> 
//         ))}
//       </AutosUl>
//       {isVisibleButton && (
//         <LoadMoreButton
//           type="button"
//           onClick={() => dispatch(updateCurrentPage())}
//         >
//           Load more
//         </LoadMoreButton>
//       )}
//     </CatalogDiv>
//   );
// }
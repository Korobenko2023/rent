import { useSelector } from "react-redux";
import { selectMessage } from "redux/autos/selectors";
import { AutoListDiv, AutoListUl, Btn } from "./AutosList.styled";
import { AutoCard } from "components/AutoCard/AutoCard";

export const AutosList = ({ autos, buttonMore }) => {
  const message = useSelector(selectMessage);
 
  return (
     <AutoListDiv>
      <AutoListUl>
        {autos.map((item) => (
          <li key={item._id}>
            <AutoCard auto={item} />
          </li>
        ))}
      </AutoListUl>
      {message ? (
        <p>{message}</p>
      ) : (
        <Btn type="button" onClick={buttonMore}>
          Load more
        </Btn>
      )}
    </AutoListDiv>
    );
};
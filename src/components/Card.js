import Button from "../components/Button";
// import FaStar from "../components/Icon";
import { FaStar } from "react-icons/fa";

export default function Card({
    id,
    handleStarClick,
    word,
    part_of_speech,
    definition,
    handleExampleClick,
  }) { return (
      <>
        <div className="vocabulary">
        <Button className={"icon-button"}>
        <FaStar
            icon="fa-star"
            className="fa-star"
            id={`star-${id}`}
         onClick={handleStarClick}
        />
        </Button>
          <h2 className="word">{word}</h2>
          <h4>{part_of_speech}</h4>
        </div>
        <h3 className="definition">{definition}</h3>
        <Button
            className={"example-button"}
            text={"Example"}
            onClick={handleExampleClick}
            />
  </>
  ); }
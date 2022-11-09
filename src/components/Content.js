import Card from "./Card";

export default function Content({ vocabularies, handleExampleClick, handleStarClick }) {
    return (
  <div className="content">
    {vocabularies.map((v, i) => (
        <div className="card" key={i}>
            <Card
                word={v.word}
                part_of_speech={v.part_of_speech}
                definition={v.definition}
                example={v.example}
                handleExampleClick={handleExampleClick}
                handleStarClick={handleStarClick}
            />
            
        </div>
    ))
    }
  </div>
    );
}
type ResultCountProps = {
  count: number;
};

const ResultCount = ({ count }: ResultCountProps) => {
  return (
    <div>
      {count} match{count === 1 ? "" : "es"} found
    </div>
  );
};

export default ResultCount;

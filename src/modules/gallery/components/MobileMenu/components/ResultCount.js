const ResultCount = ({ count }) => {
  return (
    <div>
      {count} match{count === 1 ? "" : "es"} found
    </div>
  );
};

export default ResultCount;

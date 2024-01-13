import BagSummary from "../components/BagSummary";

const Bag = () => {
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container"></div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;

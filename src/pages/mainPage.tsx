import "./styles.css";

const MainPage = () => {
  let developerName: string = "Theo";

  return (
    <div className="mainPage">
      <h1>Scroll Game Demo</h1>
      <h2>Developed by {developerName}</h2>
    </div>
  );
};

export default MainPage;

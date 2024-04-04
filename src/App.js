import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";

const App = () => {
  return (
    <div className="mb-20">
      <h1 className="bg-black py-5 text-center text-4xl font-semibold text-white">
        RAVENOUS
      </h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;

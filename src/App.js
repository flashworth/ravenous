import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";

const App = () => {
  return (
    <div className="mb-20">
      <h1 className="bg-amber-700 py-5 text-center text-4xl font-semibold text-white">
        Ravenous
      </h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;

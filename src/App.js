import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";

const App = () => {
  return (
    <div>
      <h1 className="bg-yellow-500 py-5 text-center text-2xl font-semibold text-white">
        Ravenous
      </h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;

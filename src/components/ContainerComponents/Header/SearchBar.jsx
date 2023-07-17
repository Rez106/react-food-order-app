import { useEffect, useState } from "react";

const SearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [foods, setFoods] = useState([]);
  const [filteredFood, setFilteredFoods] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://food-order-react-a79f3-default-rtdb.europe-west1.firebasedatabase.app/foodlist.json"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error("Bad Request!");
        }

        for (const key in data) {
          setFoods(data[key]);
        }
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const onSearchBarChangeHandler = (event) => {
    const searchValue = event.target.value.trim();
    if (foods) {
      setFilteredFoods((prev) => {
        const filtered = foods.filter((food) =>
          food.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        return filtered;
      });
    }
  };

  const onSearchFocusHandler = () => {
    setIsFocused(true);
  };

  const onSearchBlurHandler = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <input
        type="text"
        className={`rounded-2xl w-full 2xl:w-7/12 px-3 py-2 outline-none border-2 text-violet-700
                 border-sky-400 font-semibold duration-300 bg-transparent`}
        placeholder="Search Food"
        onChange={onSearchBarChangeHandler}
        onFocus={onSearchFocusHandler}
        onBlur={onSearchBlurHandler}
      />
      <div
        className={`absolute top-11 left-0 2xl:left-1/2 2xl:-translate-x-1/2 w-full 2xl:w-7/12 max-w-full z-50 ${
          isFocused ? "" : "hidden"
        }
                 shadow-lg rounded-2xl bg-gradient-to-r from-sky-100 to-violet-100`}
      >
        <ul className="w-full mx-auto flex flex-col">
          {isLoading ? (
            <p className="p-4">Loading...</p>
          ) : (
            filteredFood.map((food) => (
              <li
                key={food.id}
                className="flex justify-between items-center last:justify-end p-3 rounded-2xl duration-200 hover:bg-slate-300 cursor-pointer"
              >
                <h5 className="font-semibold w-1/3">
                  {food.id}. {food.name}
                </h5>
                <h5 className="w-1/3 font-semibold">${food.price}</h5>
                <div className="w-1/3 flex justify-end">
                  <span className="py-2 px-4 font-semibold text-white cursor-default bg-green-500 rounded-2xl">
                    Available
                  </span>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;

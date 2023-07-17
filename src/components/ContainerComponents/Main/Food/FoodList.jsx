import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
const FoodList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
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

  return (
    <div className="2xl:w-1/2 lg:w-4/5 min-[300px]:w-11/12 mx-auto bg-slate-50 rounded-2xl p-4 shadow-md mt-5">
      {isLoading && (
        <p className="font-semibold text-center py-5 text-3xl text-violet-600">
          Loading...
        </p>
      )}
      {error && (
        <p className="font-bold text-center py-5 text-3xl text-red-600">
          No Food Found!
        </p>
      )}
      <FoodItem foods={foods} />
    </div>
  );
};

export default FoodList;

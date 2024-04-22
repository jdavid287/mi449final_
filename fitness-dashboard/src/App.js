import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {supabase} from './supabaseClient';
import './App.css';

function Data() {
  const [fitnessData, setFitnessData] = useState([]);
  const [nutritionData, setNutritionData] = useState([]);

  useEffect(() => {
    async function fetchFitnessData() {
      try {
        let { data: fitnessData, error } = await supabase
          .from('fitness_data')
          .select('*');

        if (error) {
          console.error('Error fetching fitness data:', error.message);
          return;
        }

        setFitnessData(fitnessData);
      } catch (error) {
        console.error('Error fetching fitness data:', error.message);
      }
    }

    async function fetchNutritionData() {
      try {
        let { data: nutritionData, error } = await supabase
          .from('nutrition')
          .select('*');

        if (error) {
          console.error('Error fetching nutrition data:', error.message);
          return;
        }

        setNutritionData(nutritionData);
      } catch (error) {
        console.error('Error fetching nutrition data:', error.message);
      }
    }

    fetchFitnessData();
    fetchNutritionData();
  }, []);

  return (
    <div className="flex flex-col gap-8 text-align: center;">
      <div className="p-4 bg-gray-100 rounded-lg text-align: center;">
        <h2 className="text-2xl font-bold mb-4 text-align: center;">Fitness Data</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">Date</th>
              <th className="py-2 px-4 bg-gray-200">Exercise Type</th>
              <th className="py-2 px-4 bg-gray-200">Weight</th>
              <th className="py-2 px-4 bg-gray-200">Reps</th>
            </tr>
          </thead>
          <tbody>
            {fitnessData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4">{item.date}</td>
                <td className="py-2 px-4">{item.exercise_type}</td>
                <td className="py-2 px-4">{item.weight}</td>
                <td className="py-2 px-4">{item.reps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Nutrition Data of Banana</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">Calories</th>
              <th className="py-2 px-4 bg-gray-200">Fat</th>
              <th className="py-2 px-4 bg-gray-200">Protein</th>
              <th className="py-2 px-4 bg-gray-200">Carbohydrate</th>
              <th className="py-2 px-4 bg-gray-200">Sugar</th>
              <th className="py-2 px-4 bg-gray-200">Fiber</th>
              <th className="py-2 px-4 bg-gray-200">Potassium</th>
            </tr>
          </thead>
          <tbody>
            {nutritionData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4">{item.calories}</td>
                <td className="py-2 px-4">{item.fat}</td>
                <td className="py-2 px-4">{item.protein}</td>
                <td className="py-2 px-4">{item.carbohydrate}</td>
                <td className="py-2 px-4">{item.sugar}</td>
                <td className="py-2 px-4">{item.fiber}</td>
                <td className="py-2 px-4">{item.potassium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Data;
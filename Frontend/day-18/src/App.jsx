import "./style.css";

const App = () => {
  const Card = ({ food, cal }) => {
    const foodColor = cal <= 40 ? "green" : cal <= 60 ? "yellow" : "red";
    return (
      <div className="card">
        <h1 style={{ color: foodColor }}>{food}</h1>
        <h2>you have consumed {cal} cals today</h2>
      </div>
    );
  };
  const foodCalorie = [
    { food: "Pizza", calorie: 56 },
    { food: "Burger", calorie: 65 },
    { food: "Coke", calorie: 20 },
    { food: "Browne", calorie: 40 },
    { food: "Fried Rice", calorie: 90 },
    { food: "Lassania", calorie: 36 },
    { food: "Pani puri", calorie: 26 },
    { food: "French Fries", calorie: 76 },
  ];
  return (
    <div className="page">
      <h1>Calorie Read Only</h1>
      <div className="container">
        {foodCalorie.map((item, index) => {
          return <Card food={item.food} cal={item.calorie} key={index} />;
        })}
      </div>
    </div>
  );
};

export default App;

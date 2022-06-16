import { useEffect, useState } from "react";
import "./App.css";
import Excuses from "./components/Excuses";
import Form from "./components/Form";
import Header from "./components/Header";

const backgroundColors = {
  random: "alert-primary",
  family: "alert-secondary",
  office: "alert-success",
  children: "alert-danger",
  college: "alert-warning",
  party: "alert-info",
};

function App() {
  const [category, setCategory] = useState("random");
  const [excuse, setExcuse] = useState([]);
  const [number, setNumber] = useState(0);
  const [background, setBackground] = useState("allert-primary");

  useEffect(() => {
    (async () => {
      let res = await fetch("https://excuser.herokuapp.com/v1/excuse");
      let data = await res.json();
      setExcuse(data);
    })();
  }, []);

  useEffect(() => {
    setBackground(backgroundColors[category]);
  }, [category]);

  useEffect(() => {
    if (number && category !== "random") {
      (async () => {
        let res = await fetch(
          `https://excuser.herokuapp.com/v1/excuse/${category}/${number}`
        );
        let data = await res.json();
        setExcuse(data);
      })();
    }
    if (number && category === "random") {
      (async () => {
        let res = await fetch(
          `https://excuser.herokuapp.com/v1/excuse/${number}`
        );
        let data = await res.json();
        setExcuse(data);
      })();
    }
  }, [number, category]);

  const handleChange = (e) => {
    if (e.target.name === "select") {
      setCategory(e.target.value);
      setNumber(1);
    } else {
      setNumber(e.target.value);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form handleChange={handleChange} number={number} />
      <Excuses excuse={excuse} category={category} background={background} />
    </div>
  );
}

export default App;

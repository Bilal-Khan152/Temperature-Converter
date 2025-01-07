import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  function handleOnClick() {
    const UserInputValue = document.getElementById("InputValue").value;

    const tempSelcted1 = document.getElementById("Select_1");
    const valueOfSelect1 = Select_1.options[tempSelcted1.selectedIndex].value;

    const tempSelcted2 = document.getElementById("Select_2");
    const valueOfSelect2 = Select_2.options[tempSelcted2.selectedIndex].value;

    const CelToFah = (cel) => {
      let Fahernheit = Math.round((cel * 9) / 5 + 32);
      return Fahernheit;
    };

    const FahToCel = (fah) => {
      let Celsius = Math.round(((fah - 32) * 5) / 9);
      return Celsius;
    };

    const KelToCel = (kel) => {
      let Kelvin = Math.round(kel - 273.15);
      return Kelvin;
    };

    const CelToKel = (cel) => {
      let Celsius = Math.round(cel + 273.15);
      return Celsius;
    };

    const FahToKel = (fah) => {
      let Fahernheit = Math.round(((fah - 32) * 5) / 9 + 273.15);
      return Fahernheit;
    };

    const KelToFah = (kel) => {
      let Kelvin = Math.round((kel - 273.15) * 1.8 + 32);
      return Kelvin;
    };

    let Answer;

    if (valueOfSelect1 === "cel" && valueOfSelect2 === "fah") {
      Answer = CelToFah(UserInputValue);
      const answer = (document.getElementById(
        "resultContainer"
      ).innerHTML = `${Answer}°Fahernhite`);
      setResult(answer);
    } else if (valueOfSelect1 === "fah" && valueOfSelect2 === "cel") {
      Answer = FahToCel(UserInputValue);
      const answer = (document.getElementById(
        "resultContainer"
      ).innerHTML = `${Answer}°Celsius`);
      setResult(answer);
    } else if (valueOfSelect1 === "kel" && valueOfSelect2 === "cel") {
      Answer = KelToCel(UserInputValue);
      const answer = (document.getElementById(
        "resultContainer"
      ).innerHTML = `${Answer}°Celsius`);
      setResult(answer);
    } else if (valueOfSelect1 === "cel" && valueOfSelect2 === "kel") {
      Answer = CelToKel(UserInputValue);
      const answer = (document.getElementById(
        "resultContainer"
      ).innerHTML = `${Answer}°Kelvin`);
      setResult(answer);
    } else if (valueOfSelect1 === "fah" && valueOfSelect2 === "kel") {
      Answer = FahToKel(UserInputValue);
      const answer = (document.getElementById(
        "resultContainer"
      ).innerHTML = `${Answer}°Kelvin`);
      setResult(answer);
    } else if (valueOfSelect1 === "kel" && valueOfSelect2 === "fah") {
      Answer = KelToFah(UserInputValue);
      const answer = (document.getElementById("resultContainer").innerHTML =
        `=` + " " + `${Answer}°Fahernhiet`);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="row">
        <div className="col">
          <h2 className="text-light text-center text-2xl font-bold mt-4">
            Temperature Converter
          </h2>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="input-group mx-auto col-12 text-center">
          <input
            type="number"
            className="form-control inputfield w-full sm:w-4/6 md:w-3/5 lg:w-2/5 xl:w-1/3"
            id="InputValue"
            placeholder="Enter a number you would like to convert..."
          />
        </div>

        <div className="col-12 text-center text-light p-2 select">
          <span>Convert</span>

          <select
            name="Select_1"
            className="select p-2 mx-2 rounded"
            id="Select_1"
          >
            <option value="cel">°Celsius</option>
            <option value="fah">°Fahernhite</option>
            <option value="kel">°Kelvin</option>
          </select>
          <span>To</span>
          <select
            name="Select_2"
            className="select p-2 mx-2 rounded"
            id="Select_2"
          >
            <option value="cel">°Celsius</option>
            <option value="fah">°Fahrenheit</option>
            <option value="kel">°Kelvin</option>
          </select>
        </div>
        <div className="col-12 text-center">
          <button
            type="button"
            className="btn btn-outline-secondary p-2 rounded"
            onClick={handleOnClick}
          >
            Click To Convert
          </button>
        </div>
        <span id="resultContainer" className="text-center mt-3 color">
          {result}
        </span>
      </div>
    </div>
  );
}

export default App;

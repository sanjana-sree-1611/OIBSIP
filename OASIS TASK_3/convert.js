function convertTemp() {
    var inputTemp = document.getElementById("inputTemperature").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var resultElement = document.getElementById("result");
  
    var celsius, fh, kelvin;
  
    if (inputUnit==="celsius") 
    {
      celsius = parseFloat(inputTemp);
      fh = celsiusToFahrenheit(celsius);
      kelvin = celsiusToKelvin(celsius);
    } 
    else if (inputUnit==="fahrenheit") 
    {
      fh = parseFloat(inputTemp);
      celsius = fahrenheitToCelsius(fh);
      kelvin = celsiusToKelvin(celsius);
    } 
    else if (inputUnit==="kelvin") 
    {
      kelvin = parseFloat(inputTemp);
      celsius = kelvinToCelsius(kelvin);
      fh = celsiusToFahrenheit(celsius);
    }
  
    resultElement.innerHTML =
      "Celsius: " + celsius + "<br>" + "<br>"+
      "Fahrenheit: " + fh + "<br>" + "<br>" +
      "Kelvin: " + kelvin;
  }
  
  function celsiusToFahrenheit(celsius)
  {
    return (celsius*(9/5))+32;
  }
  
  function fahrenheitToCelsius(fh) 
  {
    return (fh-32)*(5/9);
  }
  
  function celsiusToKelvin(celsius) 
  {
    return celsius+273.15;
  }
  
  function kelvinToCelsius(kelvin) 
  {
    return kelvin-273.15;
  }
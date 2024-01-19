/*-------------DZ+1----------------*/

function parseCount(value) {
    const result = Number.parseFloat(value);
    if (Number.isNaN(result)) {
      throw new Error("Невалидное значение");
    }
    return result;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }

/*-----------------DZ+2-------------*/
  
  class Triangle {
    constructor(side1, side2, side3) {
      if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this.sideOne = side1;
      this.sideTwo = side2;
      this.sideThree = side3;
    }
  
    get perimeter() {
      return this.sideOne + this.sideTwo + this.sideThree;
    }
  
    get area() {
      const p = this.perimeter / 2;
      const area = Math.sqrt(p * (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideThree));
      return parseFloat(area.toFixed(3));
    }
  }
  
  function getTriangle(side1, side2, side3) {
    try {
      return new Triangle(side1, side2, side3);
    } catch (error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует";
        },
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
      };
    }
  }
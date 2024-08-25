// remember that your shape functions must 'return' the value they computer

console.log("Area of a Circle: ")

const getAreaOfCircle = function(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  console.log(getAreaOfCircle(2) + "ft^2");

console.log("Circumference of a Circle: ")

const getCircumferenceOfCircle = radius => {
    return 2 * Math.PI * radius;
}

console.log(getCircumferenceOfCircle(2) + "ft");

console.log("Area of a Square: ")

//implicit return (this is very cool!)
const getAreaOfSquare = side => Math.pow(side, 2);

console.log(getAreaOfSquare(2) + "ft^2");

console.log("Area of a Triangle: ");

const getAreaOfTriangle = (base, height) => {
    return 0.5 * (base * height);
}

console.log(getAreaOfTriangle(3,2) + "ft^2");
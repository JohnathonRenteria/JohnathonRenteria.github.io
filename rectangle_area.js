let length = parseFloat(prompt("Enter Length of Rectangle"));

let width = parseFloat(prompt("Enter Width of Rectangle"));

let area = parseFloat((length)*(width));

const html3 = `<p>Length = ${length}</p>
               <p>Width = ${width}</p>
               <p>Area = ${area.toFixed(3)}</p`;
document.write(html3);

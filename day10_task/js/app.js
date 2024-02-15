// let div = document.getElementsByTagName("div")[0];
// console.log(div.children[0], div.children[1], div.children[2]);

// let inp1 = document.getElementById("num1");
// let inp2 = document.getElementById("num2");
// let btn = document.getElementById("sum");

// let sumArray = (arr) => {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	console.log(sum);
// 	return sum;
// };

// btn.addEventListener("click", (event) => {});

document.addEventListener('DOMContentLoaded', function() {
    // Function to sum the numbers and display the result
    function sumNumbers() {
      var num1 = parseFloat(document.getElementById('num1').value) || 0;
      var num2 = parseFloat(document.getElementById('num2').value) || 0;
      var sum = num1 + num2; // Calculate the sum
  
      // Display the result
      var resultElement = document.getElementById('result');
      if (!resultElement) {
        resultElement = document.createElement('div');
        resultElement.id = 'result';
        document.getElementById("2").appendChild(resultElement); // Append it to the body or to a specific container
      }
      resultElement.textContent = 'Sum: ' + sum;
    }
  
    // Get the sum button and attach the event listener
    document.getElementById('sum').addEventListener('click', sumNumbers);
  });
  
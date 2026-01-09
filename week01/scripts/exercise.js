// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};

// Question #1 Cahnge date output to the foramt: Mon dd, yyyy
today1.innerHTML = new Date().toLocaleDateString("en-UK", options);

// Question #2
today2.innerHTML = "<strong>Volume</strong>: " + volume + " liters";

// Question #3: Declare variable 'quantity' from input #q
let quantity = document.querySelector("#q").value;


// Question #4: Output string to first <aside>
message.innerHTML = "Welcome to <mark>our</mark> neighborhood!";

// Question #5: Output getCelsius(33) to input #temp
document.querySelector("#temp").value = getCelsius(33);

// Question #6: Select all divs and output to #divs
const divs = document.querySelectorAll("div");
document.querySelector("#divs").textContent = `Found ${divs.length} divs`;

// Question #7: Filter citynames for names starting with "c"
const filterC = citynames.filter(city => city.startsWith("C"));
document.querySelector("#c-names").textContent = filterC.join(",");

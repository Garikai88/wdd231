const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Function to render courses
function displayCourses(courseArray) {
    const list = document.getElementById("course-list");
    const creditsDisplay = document.getElementById("credits");
    list.innerHTML = "";

    // Calculate total credits dynamically
    const totalCredits = courseArray.reduce((sum, course) => sum + course.credits, 0);

    courseArray.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";
        card.classList.add(course.completed ? "completed" : "not-completed");

        card.innerHTML = `
            <h3>${course.subject} ${course.number} - ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Technologies:</strong>${course.technology.join(", ")}</p>
            <p><strong>Status:</strong> ${course.completed ? "✅ Completed" : "❌ Not Completed"}</p>
        `;
        

        list.appendChild(card);
    
    });

    creditsDisplay.textContent = totalCredits;
}

//Filter function
function filterCourses(type) {
    let filtered;
    if (type === "all") {
        filtered = courses;

    } else {
        filtered = courses.filter(course => course.subject === type);
    }
    displayCourses(filtered);
}

// Event listeners for buttons 
document.addEventListener("DOMContentLoaded", () => {
    displayCourses(courses); // Initial load

    document.querySelectorAll(".filters button").forEach(button => {
        button.addEventListener("click", () => {
            filterCourses(button.dataset.filter);
        });
    });
});

const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

// "Show the dialog" button opens the dialog modally
openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Apple contains 95 calories`

});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Orange contains 45 calories`

});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Banana contains 105 calories`

});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialogBox.close();
});
   
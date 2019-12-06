//The program outputs an array of JS-developers names.
let programmers = [
    {id: 1, name: "Anatoliy Vorozhko", language: "Java"},
    {id: 2, name: "Ivan Stepanov", language: "Python"},
    {id: 3, name: "Anastasiia Miniailo", language: "JavaScript"},
    {id: 4, name: "Kirill Kotov", language: "PHP"},
    {id: 5, name: "Alina Morok", language: "JavaScript"},
    {id: 6, name: "Alex Brown", language: "C++"},
    {id: 7, name: "Katya Ponizovnaya", language: "Russian"},
    {id: 8, name: "Artem Lisikh", language: "Java"}
];

// returns array, which consists of two programmers
let jsDevs = programmers.filter(item => item.language == "JavaScript").map(item => item.name);

//output
console.log(jsDevs);
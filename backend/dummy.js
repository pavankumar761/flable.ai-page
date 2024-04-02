const mongoose = require('mongoose')
const qaM = require('./Schema/qa')
const mongoDB = require(`./db`)

const data = [
    {
        "_id": "m1@1",
        "question": "What is the capital of France?",
        "answer": "Paris",
        "reaction": 0
    },
    {
        "_id": "m1@2",
        "question": "Who is the author of 'Pride and Prejudice'?",
        "answer": "Jane Austen",
        "reaction": 0
    },
    {
        "_id": "m1@3",
        "question": "What is the chemical symbol for water?",
        "answer": "H2O",
        "reaction": 0
    },
    {
        "_id": "m1@4",
        "question": "Who painted the Mona Lisa?",
        "answer": "Leonardo da Vinci",
        "reaction": 0
    },
    {
        "_id": "m1@5",
        "question": "What is the largest planet in our solar system?",
        "answer": "Jupiter",
        "reaction": 0
    },
    {
        "_id": "m1@6",
        "question": "What year did World War II end?",
        "answer": "1945",
        "reaction": 0
    },
    {
        "_id": "m1@7",
        "question": "Who is credited with inventing the telephone?",
        "answer": "Alexander Graham Bell",
        "reaction": 0
    },
    {
        "_id": "m1@8",
        "question": "What is the tallest mountain in the world?",
        "answer": "Mount Everest",
        "reaction": 0
    },
    {
        "_id": "m1@9",
        "question": "Who wrote 'To Kill a Mockingbird'?",
        "answer": "Harper Lee",
        "reaction": 0
    },
    {
        "_id": "m1@10",
        "question": "What is the currency of Japan?",
        "answer": "Japanese yen",
        "reaction": 0
    },
    {
        "_id": "m1@11",
        "question": "Who was the first woman to fly solo across the Atlantic Ocean?",
        "answer": "Amelia Earhart",
        "reaction": 0
    },
    {
        "_id": "m1@12",
        "question": "What is the freezing point of water in Fahrenheit?",
        "answer": "32 degrees Fahrenheit",
        "reaction": 0
    },
    {
        "_id": "m1@13",
        "question": "Who was the first President of the United States?",
        "answer": "George Washington",
        "reaction": 0
    },
    {
        "_id": "m1@14",
        "question": "What is the chemical symbol for gold?",
        "answer": "Au",
        "reaction": 0
    },
    {
        "_id": "m1@15",
        "question": "Who painted 'The Starry Night'?",
        "answer": "Vincent van Gogh",
        "reaction": 0
    },
    {
        "_id": "m1@16",
        "question": "What is the largest ocean on Earth?",
        "answer": "Pacific Ocean",
        "reaction": 0
    },
    {
        "_id": "m1@17",
        "question": "Who wrote 'Romeo and Juliet'?",
        "answer": "William Shakespeare",
        "reaction": 0
    },
    {
        "_id": "m1@18",
        "question": "What is the main ingredient in guacamole?",
        "answer": "Avocado",
        "reaction": 0
    },
    {
        "_id": "m1@19",
        "question": "Who discovered penicillin?",
        "answer": "Alexander Fleming",
        "reaction": 0
    },
    {
        "_id": "m1@20",
        "question": "What is the capital of Japan?",
        "answer": "Tokyo",
        "reaction": 0
    },
    {
        "_id": "m1@21",
        "question": "Who composed the 'Moonlight Sonata'?",
        "answer": "Ludwig van Beethoven",
        "reaction": 0
    },
    {
        "_id": "m1@22",
        "question": "What is the boiling point of water in Celsius?",
        "answer": "100 degrees Celsius",
        "reaction": 0
    },
    {
        "_id": "m1@23",
        "question": "Who was the first person to step on the moon?",
        "answer": "Neil Armstrong",
        "reaction": 0
    },
    {
        "_id": "m1@24",
        "question": "What is the largest mammal on Earth?",
        "answer": "Blue whale",
        "reaction": 0
    },
    {
        "_id": "m1@25",
        "question": "Who wrote '1984'?",
        "answer": "George Orwell",
        "reaction": 0
    },
    {
        "_id": "m1@26",
        "question": "What is the chemical symbol for carbon?",
        "answer": "C",
        "reaction": 0
    },
    {
        "_id": "m1@27",
        "question": "Who painted the ceiling of the Sistine Chapel?",
        "answer": "Michelangelo",
        "reaction": 0
    },
    {
        "_id": "m1@28",
        "question": "What is the smallest country in the world?",
        "answer": "Vatican City",
        "reaction": 0
    },
    {
        "_id": "m1@29",
        "question": "Who discovered America?",
        "answer": "Christopher Columbus",
        "reaction": 0
    },
    {
        "_id": "m1@30",
        "question": "What is the capital of Australia?",
        "answer": "Canberra",
        "reaction": 0
    },
    {
        "_id": "m1@31",
        "question": "Who wrote 'The Great Gatsby'?",
        "answer": "F. Scott Fitzgerald",
        "reaction": 0
    },
    {
        "_id": "m1@32",
        "question": "What is the chemical symbol for iron?",
        "answer": "Fe",
        "reaction": 0
    },
    {
        "_id": "m1@33",
        "question": "Who was the first female Prime Minister of the United Kingdom?",
        "answer": "Margaret Thatcher",
        "reaction": 0
    },
    {
        "_id": "m1@34",
        "question": "What is the main ingredient in sushi?",
        "answer": "Rice",
        "reaction": 0
    },
    {
        "_id": "m1@35",
        "question": "Who painted the 'Mona Lisa'?",
        "answer": "Leonardo da Vinci",
        "reaction": 0
    },
    {
        "_id": "m1@36",
        "question": "What is the largest bird in the world?",
        "answer": "Ostrich",
        "reaction": 0
    },
    {
        "_id": "m1@37",
        "question": "Who wrote 'The Odyssey'?",
        "answer": "Homer",
        "reaction": 0
    },
    {
        "_id": "m1@38",
        "question": "What is the chemical symbol for silver?",
        "answer": "Ag",
        "reaction": 0
    },
    {
        "_id": "m1@39",
        "question": "Who composed 'The Four Seasons'?",
        "answer": "Antonio Vivaldi",
        "reaction": 0
    },
    {
        "_id": "m1@40",
        "question": "What is the fastest land animal?",
        "answer": "Cheetah",
        "reaction": 0
    },
    {
        "_id": "m1@41",
        "question": "Who wrote 'The Catcher in the Rye'?",
        "answer": "J.D. Salinger",
        "reaction": 0
    },
    {
        "_id": "m1@42",
        "question": "What is the chemical symbol for oxygen?",
        "answer": "O",
        "reaction": 0
    },
    {
        "_id": "m1@43",
        "question": "Who was the first woman to win a Nobel Prize?",
        "answer": "Marie Curie",
        "reaction": 0
    },
    {
        "_id": "m1@44",
        "question": "What is the largest country in the world by land area?",
        "answer": "Russia",
        "reaction": 0
    },
    {
        "_id": "m1@45",
        "question": "Who painted 'The Last Supper'?",
        "answer": "Leonardo da Vinci",
        "reaction": 0
    },
    {
        "_id": "m1@46",
        "question": "What is the deepest ocean in the world?",
        "answer": "Pacific Ocean",
        "reaction": 0
    },
    {
        "_id": "m1@47",
        "question": "Who wrote 'Moby-Dick'?",
        "answer": "Herman Melville",
        "reaction": 0
    },
    {
        "_id": "m1@48",
        "question": "What is the chemical symbol for sodium?",
        "answer": "Na",
        "reaction": 0
    },
    {
        "_id": "m1@49",
        "question": "Who composed 'The Marriage of Figaro'?",
        "answer": "Wolfgang Amadeus Mozart",
        "reaction": 0
    },
    {
        "_id": "m1@50",
        "question": "What is the longest river in the world?",
        "answer": "Nile River",
        "reaction": 0
    }
]

mongoDB();

qaM.insertMany(data)
.then(()=>{
    console.log(`data inserted sucessfully`)
    mongoose.connection.close();
})
.catch((err)=>{
    console.log(`Error in inserting the data`,err)
    mongoose.connection.close();
})
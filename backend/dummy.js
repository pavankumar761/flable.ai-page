const mongoose = require('mongoose')
const qaM = require('./Schema/qa')
const mongoDB = require(`./db`)

const data = [
    {
        "_id": "m1@1",
        "question": "What is the capital of France?",
        "answer": "Paris is the capital city of France.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@2",
        "question": "Who is the author of 'Pride and Prejudice'?",
        "answer": "Jane Austen authored 'Pride and Prejudice.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@3",
        "question": "What is the chemical symbol for water?",
        "answer": "H2O is the chemical symbol for water.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@4",
        "question": "Who painted the Mona Lisa?",
        "answer": "Leonardo da Vinci painted the Mona Lisa.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@5",
        "question": "What is the largest planet in our solar system?",
        "answer": "Jupiter is the largest planet in our solar system.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@6",
        "question": "What year did World War II end?",
        "answer": "World War II ended in 1945.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@7",
        "question": "Who is credited with inventing the telephone?",
        "answer": "Alexander Graham Bell is credited with inventing the telephone.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@8",
        "question": "What is the tallest mountain in the world?",
        "answer": "Mount Everest is the tallest mountain in the world.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@9",
        "question": "Who wrote 'To Kill a Mockingbird'?",
        "answer": "Harper Lee wrote 'To Kill a Mockingbird.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@10",
        "question": "What is the currency of Japan?",
        "answer": "The currency of Japan is Japanese yen.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@11",
        "question": "Who was the first woman to fly solo across the Atlantic Ocean?",
        "answer": "Amelia Earhart was the first woman to fly solo across the Atlantic Ocean.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@12",
        "question": "What is the freezing point of water in Fahrenheit?",
        "answer": "32 degrees Fahrenheit is the freezing point of water.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@13",
        "question": "Who was the first President of the United States?",
        "answer": "George Washington was the first President of the United States.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@14",
        "question": "What is the chemical symbol for gold?",
        "answer": "Au is the chemical symbol for gold.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@15",
        "question": "Who painted 'The Starry Night'?",
        "answer": "Vincent van Gogh painted 'The Starry Night.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@16",
        "question": "What is the largest ocean on Earth?",
        "answer": "The Pacific Ocean is the largest ocean on Earth.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@17",
        "question": "Who wrote 'Romeo and Juliet'?",
        "answer": "William Shakespeare wrote 'Romeo and Juliet.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@18",
        "question": "What is the main ingredient in guacamole?",
        "answer": "Avocado is the main ingredient in guacamole.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@19",
        "question": "Who discovered penicillin?",
        "answer": "Alexander Fleming discovered penicillin.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@20",
        "question": "What is the capital of Japan?",
        "answer": "Tokyo is the capital of Japan.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@21",
        "question": "Who composed the 'Moonlight Sonata'?",
        "answer": "Ludwig van Beethoven composed the 'Moonlight Sonata.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@22",
        "question": "What is the boiling point of water in Celsius?",
        "answer": "100 degrees Celsius is the boiling point of water.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@23",
        "question": "Who was the first person to step on the moon?",
        "answer": "Neil Armstrong was the first person to step on the moon.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@24",
        "question": "What is the largest mammal on Earth?",
        "answer": "The Blue whale is the largest mammal on Earth.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@25",
        "question": "Who wrote '1984'?",
        "answer": "George Orwell wrote '1984.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@26",
        "question": "What is the chemical symbol for carbon?",
        "answer": "C is the chemical symbol for carbon.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@27",
        "question": "Who painted the ceiling of the Sistine Chapel?",
        "answer": "Michelangelo painted the ceiling of the Sistine Chapel.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@28",
        "question": "What is the smallest country in the world?",
        "answer": "Vatican City is the smallest country in the world.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@29",
        "question": "Who discovered America?",
        "answer": "Christopher Columbus discovered America.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@30",
        "question": "What is the capital of Australia?",
        "answer": "Canberra is the capital of Australia.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@31",
        "question": "Who wrote 'The Great Gatsby'?",
        "answer": "F. Scott Fitzgerald wrote 'The Great Gatsby.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@32",
        "question": "What is the chemical symbol for iron?",
        "answer": "Fe is the chemical symbol for iron.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@33",
        "question": "Who was the first female Prime Minister of the United Kingdom?",
        "answer": "Margaret Thatcher was the first female Prime Minister of the United Kingdom.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@34",
        "question": "What is the main ingredient in sushi?",
        "answer": "Rice is the main ingredient in sushi.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@35",
        "question": "Who painted the 'Mona Lisa'?",
        "answer": "Leonardo da Vinci painted the 'Mona Lisa.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@36",
        "question": "What is the largest bird in the world?",
        "answer": "The Ostrich is the largest bird in the world.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@37",
        "question": "Who wrote 'The Odyssey'?",
        "answer": "Homer wrote 'The Odyssey.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@38",
        "question": "What is the chemical symbol for silver?",
        "answer": "Ag is the chemical symbol for silver.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@39",
        "question": "Who composed 'The Marriage of Figaro'?",
        "answer": "Wolfgang Amadeus Mozart composed 'The Marriage of Figaro.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@40",
        "question": "What is the fastest land animal?",
        "answer": "The Cheetah is the fastest land animal.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@41",
        "question": "Who wrote 'The Catcher in the Rye'?",
        "answer": "J.D. Salinger wrote 'The Catcher in the Rye.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@42",
        "question": "What is the chemical symbol for oxygen?",
        "answer": "O is the chemical symbol for oxygen.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@43",
        "question": "Who was the first woman to win a Nobel Prize?",
        "answer": "Marie Curie was the first woman to win a Nobel Prize.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@44",
        "question": "What is the largest country in the world by land area?",
        "answer": "Russia is the largest country in the world by land area.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@45",
        "question": "Who painted 'The Last Supper'?",
        "answer": "Leonardo da Vinci painted 'The Last Supper.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@46",
        "question": "What is the deepest ocean in the world?",
        "answer": "The Pacific Ocean is the deepest ocean in the world.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@47",
        "question": "Who wrote 'Moby-Dick'?",
        "answer": "Herman Melville wrote 'Moby-Dick.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@48",
        "question": "What is the chemical symbol for sodium?",
        "answer": "Na is the chemical symbol for sodium.",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@49",
        "question": "Who composed 'The Marriage of Figaro'?",
        "answer": "Wolfgang Amadeus Mozart composed 'The Marriage of Figaro.'",
        "like": 0,
        "dislike": 0
    },
    {
        "_id": "m1@50",
        "question": "What is the longest river in the world?",
        "answer": "The Nile River is the longest river in the world.",
        "like": 0,
        "dislike": 0
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
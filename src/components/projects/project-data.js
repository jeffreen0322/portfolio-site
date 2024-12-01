import anibrowserImg from "./assets/anibrowser.png";
import sleeptrackImg from "./assets/sleeptracker.png";
import fabflixImg from "./assets/fabflix.png";
import drMarioImg from "./assets/dr-mario.png";
import carMeetImg from "./assets/car-meet.png";
import todoImg from "./assets/todo.png";

export const projects = [
  {
    title: "Anibrowser",
    description:
      "Anime database website developed in React, akin to that of other known anime logging sites such as: MyAnimeList and Anilist. Anibrowser is a website that implements the open-sourced API Jikan, which queries from MyAnimeList.",
    image: anibrowserImg,
    url: "https://anibrowser.vercel.app",
    repo: "https://github.com/jeffreen0322/Anibrowser",
  },
  {
    title: "SleepTracker",
    description:
      "A mobile-first web application that logs an individual's sleep time, along with a measurement of tiredness during the day. Sleep tracking is simple and required date or instantaneous input, whereas sleepiness tracker is dependent on instantaneous time of day, which requires ondemand input.",
    image: sleeptrackImg,
    videoUrl: "https://youtu.be/l5IzflnwdlU",
  },
  {
    title: "Fabflix",
    description:
      "A fullstack web application my partner Houssin Saadeh and I developed. Referencing from sites like IMDB, Fabflix hosts a catalogue of films, containing information such as: title, actors, genres, ratings, etc. Clients browse movies and purchase them and supports separate display for administrators. Administrators can add movies, stars, or genres into the database.",
    image: fabflixImg,
    videoUrl:
      "https://www.youtube.com/watch?v=xXxLp35eHVs&list=PLWMGgD1TjCRFNvk1VDFasJeQac9YO-CSo&index=1&ab_channel=HoussinSaadeh",
  },
  {
    title: "Dr. Mario Tile Game",
    description:
      "As part of a larger project in the creation of a tile game engine from scratch using principles from established game engines such as Unity, I was responsible for the architectural design and implementation of Tiles and Tile components. I led the implementation of a replica Dr. Mario, one of the 3 tile games that were implemented in this project.",
    image: drMarioImg,
    videoUrl: "https://youtu.be/l6lWYx-K61A",
  },
  {
    title: "Carmeet",
    description:
      "Launch site created as part of a udemy web development course, referenced off the App Brewery's Tindog. This webpage was the first tie in which I've experimented with bootstrap, as well as apply elementary responsive design principles.",
    image: carMeetImg,
    url: "https://jeffreen0322.github.io/CarMeet/",
    repo: "https://github.com/jeffreen0322/CarMeet",
  },
  {
    title: "Todo List",
    description:
      "A front-end website utilizing HTML, CSS, and javascript. This project exemplifies the utilization of node.ks and express.js to send and receive data for client-server communication. This application is a simple to do list which allows users to type an input and add it into the list of things to do. Users are able to clear the list or cross out items individiually.",
    image: todoImg,
    videoUrl: "https://youtu.be/-9r22H3V-5g",
    repo: "https://github.com/jeffreen0322/todoList",
  },
];

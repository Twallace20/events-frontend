

const eventCollection = document.querySelector(".event-collection")
const eventURL = "http://localhost:3000/event_planners"
let addEvent = false;
let eventsArray;

const fetchEvents = () => {
    fetch(eventURL)
      .then(response => response.json())
      .then(eventsArray => {
        // arrayOfEvents = eventsArray
            renderEvents(eventsArray)
      })
  }
//   arrayOfToys = toysArray

const renderEvents = (eventsArray) => {
    // eventCollection.innerHTML = ''
    eventsArray.forEach(event_planner =>{
        renderOneEventPlanner(event_planner)
    })
}

const renderOneEventPlanner = (event_planner) => {
    eventCollection.innerHTML += `<div data-id=${event_planner.id} class="card">
    <h2>${event_planner.name} Specialty: ${event_planner.specialty}</h2>
    <h2>${event_planner.star_rating}</h2>
    <img src=${event_planner.picture} class="event_planner-avatar" />
    <p>${event_planner.description} </p>
    <button data-id=${event_planner.id} class="like-btn">Like <3</button>
  </div>`
//   const renderEvents = () => {
// eventCollection.innerHTML = ''
// eventsArray.forEach(event_planner =>{
//     renderOneEventPlanner(event_planner)
// })
  }
  
  fetchEvents()
const eventCollection = document.querySelector(".event-collection")
const eventURL = "http://localhost:3000/event_planners"
const bookButton = document.querySelectorAll('.btn-warning')
// let addEvent = false;
// let eventsArray;

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
     //eventCollection.innerHTML = ''
    eventsArray.forEach(event_planner => {
        renderOneEventPlanner(event_planner)
    })
}

const renderOneEventPlanner = (event_planner) => {
    eventCollection.innerHTML += `<div data-id=${event_planner.id} class="card">
    <h2>${event_planner.name} Specialty: ${event_planner.specialty}</h2>
    <h2> Rating: ${event_planner.star_rating} * </h2>
    <img src=${event_planner.picture} class="event_planner-avatar" width="250" height="250" />
    <p>${event_planner.description} </p>
      <button type="button" data-id=${event_planner.id} class="btn-primary">Like</button>
      <button type="button" data-id=${event_planner.id} class="btn-warning">Book</button>
      <button type="button" data-id=${event_planner.id} class="btn-danger">Delete</button>

  </div>`

  }
  
  fetchEvents()




bookButton.addEventListener("click", () => {
  console.log('hello')
})


//   function asd(a)
// {
//     if(a==1)
//         document.getElementById("asd").style.display="none";
//     else
//         document.getElementById("asd").style.display="block";
// }
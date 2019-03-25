import events from './utils/events/event-actions'
import api from './utils/api/api-actions'

import GameConsoles from './components/GameConsoles'

main()

function main() {
  api.getRequest('/consoles', gameconsoles => {
    getAppContext().innerHTML = GameConsoles(gameconsoles);
  })

  events.on(getAppContext(), 'click', () => {
    if (event.target.classList.contains('add-console__submit')) {
      const consoleName = document.querySelector('.add-console__full-name').value
      const shortName = document.querySelector('.add-console__short-name').value
       
        api.postRequest('/consoles/add', {
        consoleName: consoleName,
        shortName: shortName
      }, (gameconsoles) => getAppContext().innerHTML = GameConsoles(gameconsoles))
    }
  })

 
}
function getAppContext() {
  return document.querySelector("#app")
}
  
        // var consolemodal = document.querySelector(".modal-console");
        // var consoletrigger = document.querySelector(".console-trigger")
        // var closeButton = document.querySelector(".close-button");

        // function toggleConsoleModal() {
        //   consolemodal.classList.toggle("show-consolemodal");
        // }

        // function windowOnClick(event) {
        //   if (event.target === consolemodal) {
        //       toggleConsoleModal();
        //   }
        // }

        // consoletrigger.addEventListener("click", toggleConsoleModal);
        // closeButton.addEventListener("click", toggleConsoleModal);
        // window.addEventListener("click", windowOnClick);

      



 // if (event.target.classList.contains('add-game__submit')) {
  //   const gameName = document.querySelector('.add-game__name').value
  //   const yearReleased = document.querySelection('.add-game__yearreleased').value
  //   const consoleName = document.querySelection('.add-game__console').value
  //   const imagePath = document.querySelection('.add-image__path').value
    
 // }
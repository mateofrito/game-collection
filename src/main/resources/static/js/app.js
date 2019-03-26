import events from './utils/events/event-actions'
import api from './utils/api/api-actions'

import GameConsoles from './components/GameConsoles'

main()

function main() {
  api.getRequest('/consoles', gameconsoles => {
    getAppContext().innerHTML = GameConsoles(gameconsoles);
  })

  events.on(getAppContext(), 'click', () => {
          //console submit
          if (event.target.classList.contains('add-console__submit')) {
            const consoleName = document.querySelector('.add-console__full-name').value
            const shortName = document.querySelector('.add-console__short-name').value
            
              api.postRequest('/consoles/add', {
              consoleName: consoleName,
              shortName: shortName
            }, (gameconsoles) => getAppContext().innerHTML = GameConsoles(gameconsoles))
          }

          //add console modal
          if (event.target.classList.contains('console-trigger')){
          var consolemodal = document.querySelector(".modal-console");
          var consoletrigger = document.querySelector(".console-trigger")
          var closeButton = document.querySelector(".close-button");
          
          function toggleConsoleModal() {
            consolemodal.classList.toggle("show-consolemodal");
          }
          
          function windowOnClick(event) {
            if (event.target === consolemodal) {
                toggleConsoleModal();
            }
          }
          consoletrigger.addEventListener("click", toggleConsoleModal);
          closeButton.addEventListener("click", toggleConsoleModal);
          window.addEventListener("click", windowOnClick);

        }

        //add game modal
        if (event.target.classList.contains('game-trigger')){
          var gameemodal = document.querySelector(".modal-gamee");
          var gametrigger = document.querySelector(".game-trigger")
          var closeButton2 = document.querySelector(".close-button2");
          
          function toggleGameModal() {
            gamemodal.classList.toggle("show-gamemodal");
          }
          
          function windowOnClick(event) {
            if (event.target === gamemodal) {
                toggleGameModal();
            }
          }
          gametrigger.addEventListener("click", toggleGameModal);
          closeButton2.addEventListener("click", toggleGameModal);
          window.addEventListener("click", windowOnClick);

        }



  })

 
}
function getAppContext() {
  return document.querySelector("#app")
}
  

      



 // if (event.target.classList.contains('add-game__submit')) {
  //   const gameName = document.querySelector('.add-game__name').value
  //   const yearReleased = document.querySelection('.add-game__yearreleased').value
  //   const consoleName = document.querySelection('.add-game__console').value
  //   const imagePath = document.querySelection('.add-image__path').value
    
 // }
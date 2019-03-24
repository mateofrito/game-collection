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

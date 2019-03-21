import Games from './Games'

export default function GameConsoles(gameconsoles) {
    return `
      <ul class="consoles">
        ${gameconsoles.map(gameconsole => {
            return `
                <li class="console">
                <h3 class="console__name">${GameConsole.consoleName} ${GameConsole.shortName}</h3>
                <ul class="games">
                    ${Games(GameConsole.game)}
                </ul>
                </li>
            `;
    }).join('')}
      </ul>
      <section class="add-console">
        <input type="text" class="add-console__full-name" placeholder="Console Name">
        <input type="text" class="add-author__short-name" placeholder="Console Short Name">
        <button class="add-console__submit">Add Console</button>
      </section>
    `;
}
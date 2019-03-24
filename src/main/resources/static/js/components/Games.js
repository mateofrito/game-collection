export default function Games(games) {
    return games.map(game => {
            return `
                <li class="game">
                    <h5 class="game__title">${game.gameTitle}</h5>
                    <p class="game__yearreleased">${game.yearReleased}</p>
                    <p class="game__imagepath">${game.imagePath}</p>
                </li>
            `;
        }).join('')
}
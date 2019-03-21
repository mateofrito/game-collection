export default function Games(games) {
    return games
        .map(game => {
            return `
                <li class="book">
                    <h5 class="book__title">${game.title}</h5>
                    <p class="book__description">${game.yearreleased}</p>
                </li>
            `;
        }).join('')
}
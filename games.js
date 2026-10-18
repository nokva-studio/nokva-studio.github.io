/* Add a released title by copying a data object here. Keep image files local.
   Existing HTML is the no-JavaScript fallback for the first release. */
const additionalGames = [
  // { title: '作品名', english: 'ENGLISH TITLE', genre: 'ゲームの種類',
  //   description: '短い紹介文。', image: 'assets/new-game.webp',
  //   imageAlt: 'サムネイルの内容', url: 'https://nokva-studio.github.io/new-game/' }
];
const grid = document.getElementById('game-grid');
for (const game of additionalGames) {
  const url = new URL(game.url, document.baseURI);
  if (!['https:', 'http:'].includes(url.protocol)) continue;
  const card = document.createElement('a');card.className = 'game-card playable';card.href = url.href;card.setAttribute('aria-label', `${game.title}を遊ぶ`);
  const visual = document.createElement('div');visual.className = 'card-visual';
  const img = document.createElement('img');img.src = game.image;img.alt = game.imageAlt || `${game.title}の風景`;img.loading = 'lazy';img.width = 600;img.height = 600;visual.append(img);
  const content = document.createElement('div');content.className = 'card-content';
  const labels = document.createElement('div');labels.className = 'game-label';
  for (const [text, cls] of [[game.english, ''], [game.genre, 'genre']]) { const span = document.createElement('span');span.textContent = text;span.className = cls;labels.append(span); }
  const title = document.createElement('h3');title.textContent = game.title;
  const description = document.createElement('p');description.className = 'game-description';description.textContent = game.description;
  const bottom = document.createElement('div');bottom.className = 'card-bottom';
  const play = document.createElement('span');play.className = 'play-label';play.textContent = 'PLAY NOW';
  const arrow = document.createElement('span');arrow.className = 'play-arrow';arrow.textContent = '↗';arrow.setAttribute('aria-hidden', 'true');bottom.append(play, arrow);
  content.append(labels, title, description, bottom);card.append(visual, content);grid.insertBefore(card, grid.querySelector('.forthcoming'));
}

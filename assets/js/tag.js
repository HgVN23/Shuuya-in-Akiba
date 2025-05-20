class Tag {
	constructor(text) {
		this.id = `t${text.replace(/-|\s/g, '')}`;
		this.name = text;
	}
}

const tagList = [
	new Tag('Action'),
	new Tag('Adult Cast'),
	new Tag('Adventure'),
	new Tag('Anthropomorphic'),
	new Tag('CGDCT'),
	new Tag('Childcare'),
	new Tag('Comedy'),
	new Tag('Crossdressing'),
	new Tag('Detective'),
	new Tag('Drama'),
	new Tag('Ecchi'),
	new Tag('Erotica'),
	new Tag('Fantasy'),
	new Tag('Favorite Anime'),
	new Tag('Favorite ED Song'),
	new Tag('Favorite ED Visual'),
	new Tag('Favorite OP Song'),
	new Tag('Favorite OP Visual'),
	new Tag('Gag Humor'),
	new Tag('Genben'),
	new Tag('Gore'),
	new Tag('Gourmet'),
	new Tag('Harem'),
	new Tag('High Stakes Game'),
	new Tag('Historical'),
	new Tag('Horror'),
	new Tag('Idol'),
	new Tag('Isekai'),
	new Tag('Iyashikei'),
	new Tag('Josei'),
	new Tag('Love Polygon'),
	new Tag('Love Status Quo'),
	new Tag('Mahou Shoujo'),
	new Tag('Martial Arts'),
	new Tag('Mecha'),
	new Tag('Medical'),
	new Tag('Military'),
	new Tag('Music'),
	new Tag('Mystery'),
	new Tag('Mythology'),
	new Tag('Organized Crime'),
	new Tag('Otaku Culture'),
	new Tag('Parody'),
	new Tag('Performing Arts'),
	new Tag('Pets'),
	new Tag('Psychological'),
	new Tag('Reincarnation'),
	new Tag('Romance'),
	new Tag('Samurai'),
	new Tag('School'),
	new Tag('Sci-Fi'),
	new Tag('Seinen'),
	new Tag('Shoujo'),
	new Tag('Shounen'),
	new Tag('Showbiz'),
	new Tag('Slice of Life'),
	new Tag('Space'),
	new Tag('Sports'),
	new Tag('Strategy Game'),
	new Tag('Super Power'),
	new Tag('Supernatural'),
	new Tag('Survival'),
	new Tag('Suspense'),
	new Tag('Time Travel'),
	new Tag('Urban Fantasy'),
	new Tag('Vampire'),
	new Tag('Video Game'),
	new Tag('Villainess'),
	new Tag('Visual Arts'),
	new Tag('Workplace'),
	new Tag('Yuri'),
].sort((a, b) => a.name.localeCompare(b.name));

function tagCut(str) {
	return String(str).match(/^([a-zA-Z]+)_(.*)$/);
}
function tagGroup1(str) {
	return tagCut(str) == null ? str : tagCut(str)[1];
}
function tagGroup2(str) {
	return tagCut(str) == null ? "" : (" " + tagCut(str)[2]);
}
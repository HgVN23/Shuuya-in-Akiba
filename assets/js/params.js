const params = new URLSearchParams(location.search);
const searchTerm = params.get('search')?.toLowerCase() || '';
const page = parseInt(params.get('page')) || 0;
const animeId = params.get('anime');

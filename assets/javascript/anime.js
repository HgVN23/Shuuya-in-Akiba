class Anime {
	constructor(img, name, studio, type, season, year, source, rating, status, tag) {
		this.img = img;
		this.name = name;
		this.studio = studio;
		this.type = type;
		this.season = season;
		this.year = year;
		this.source = source;
		this.rating = rating;
		this.status = status;
		this.tag = tag;
	}
}

const anime = [
	/*new Anime(
		'',
		[
			'',
			'',
			'',
		],
		[  ],
		'TV', 1, 2025, '', 0, 0,
		[
			't',
		]
	),*/
	new Anime(
		'1221/148863',
		[
			'Hibi wa Sugiredo Meshi Umashi',
			'日々は過ぎれど飯うまし',
			'Food for the Soul',
		],
		[ 132 ],
		'TV', 1, 2025, 'Original', 0, 0,
		[
			'tGourmet',
			'tCGDCT',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1066/148358',
		[
			'Teogonia',
		],
		[ 406 ],
		'TV', 1, 2025, 'Light novel', 0, 0,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1192/148314',
		[
			'Chotto dake Ai ga Omoi Dark Elf ga Isekai kara Oikaketekita',
			'ちょっとだけ愛が重いダークエルフが異世界から追いかけてきた',
			'Yandere Dark Elf: She Chased Me All the Way From Another World!',
		],
		[ 2928 ],
		'TV', 1, 2025, 'Web manga', 2, 0,
		[
			'tComedy',
			'tFantasy',
			'tErotica',
			'tUrbanFantasy',
		]
	),
	new Anime(
		'1511/148642',
		[
			'Apocalypse Hotel',
			'アポカリプスホテル',
		],
		[ 1893 ],
		'TV', 1, 2025, 'Original', 0, 0,
		[
			'tSciFi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1677/148603',
		[
			'Mono',
		],
		[ 2917 ],
		'TV', 1, 2025, '4-koma manga', 0, 0,
		[
			'tComedy',
			'tCGDCT',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1979/148096',
		[
			'Uchuujin MuuMuu',
			'宇宙人ムームー',
		],
		[ 28 ],
		'TV', 1, 2025, 'Manga', 0, 0,
		[
			'tComedy',
			'tSciFi',
			'tSeinen',
		]
	),
	new Anime(
		'1855/146642',
		[
			'Ninja to Koroshiya no Futarigurashi',
			'忍者と殺し屋のふたりぐらし',
			'A Ninja and an Assassin Under One Roof',
		],
		[ 44 ],
		'TV', 1, 2025, 'Manga', 0, 0,
		[
			'tSliceofLife',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1263/148318',
		[
			'Kanpekisugite Kawaige ga Nai to Konyaku Haki sareta Seijo wa Ringoku ni Urareru',
			'完璧すぎて可愛げがないと婚約破棄された聖女は隣国に売られる',
			'The Too-Perfect Saint: Tossed Aside by My Fiancé and Sold to Another Kingdom',
		],
		[ 1103 ],
		'TV', 1, 2025, 'Light novel', 0, 0,
		[
			'tFantasy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1691/148602',
		[
			'Summer Pockets',
		],
		[ 91 ],
		'TV', 1, 2025, 'Visual novel', 0, 0,
		[
			'tSliceofLife',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1770/148195',
		[
			'Chuuzenji-sensei Mononoke Kougiroku: Sensei ga Nazo wo Hodoite Shimau kara.',
			'中禅寺先生物怪講義録　先生が謎を解いてしまうから。',
			'The Mononoke Lecture Logs of Chuzenji-sensei: He Just Solves All the Mysteries',
		],
		[ 2696 ],
		'TV', 1, 2025, 'Manga', 0, 0,
		[
			'tMystery',
			'tSupernatural',
			'tSuspense',
			'tHistorical',
			'tPsychological',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1955/148360',
		[
			'Shiunji-ke no Kodomotachi',
			'紫雲寺家の子供たち',
			'The Shiunji Family Children',
		],
		[ 95 ],
		'TV', 1, 2025, 'Manga', 0, 0,
		[
			'tComedy',
			'tRomance',
			'tLovePolygon',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1944/148218',
		[
			"Zatsu Tabi: That's Journey",
			"ざつ旅 -That's Journey-",
		],
		[ 2622 ],
		'TV', 1, 2025, 'Manga', 0, 0,
		[
			'tAdventure',
			'tSliceofLife',
			'tSeinen',
		]
	),
	new Anime(
		'1843/146935',
		[
			'Kakushite! Makina-san!!',
			'かくして！マキナさん!!',
			"Makina-san's a Love Bot?!",
		],
		[ 2144 ],
		'TV', 1, 2025, 'Manga', 2, 0,
		[
			'tComedy',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tSchool',
		]
	),
	new Anime(
		'1714/148317',
		[
			'Gorilla no Kami kara Kago sareta Reijou wa Ouritsu Kishidan de Kawaigarareru',
			'ゴリラの神から加護された令嬢は王立騎士団で可愛がられる',
			"The Gorilla God's Go-To Girl",
		],
		[ 3048 ],
		'TV', 1, 2025, 'Web manga', 0, 0,
		[
			'tFantasy',
			'tRomance',
		]
	),
	new Anime(
		'1988/148017',
		[
			'Witch Watch',
			'ウィッチウォッチ',
		],
		[ 1722 ],
		'TV', 1, 2025, 'Manga', 0, 0,
		[
			'tComedy',
			'tSupernatural',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1069/148148',
		[
			'Katainaka no Ossan, Kensei ni Naru',
			'片田舎のおっさん、剣聖になる',
			'From Old Country Bumpkin to Master Swordsman',
		],
		[ 911, 2370 ],
		'TV', 1, 2025, 'Light novel', 0, 0,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1097/148302',
		[
			'Kowloon Generic Romance',
			'九龍ジェネリックロマンス',
		],
		[ 1874 ],
		'TV', 1, 2025, 'Manga', 0, 0,
		[
			'tRomance',
			'tSciFi',
			'tAdultCast',
			'tWorkplace',
			'tSeinen',
		]
	),
	new Anime(
		'1363/148601',
		[
			'Danjo no Yuujou wa Seiritsu suru? (Iya, Shinai!!)',
			'男女の友情は成立する？（いや、しないっ!!）',
			'Can a Boy-Girl Friendship Survive?',
		],
		[ 7 ],
		'TV', 1, 2025, 'Light novel', 0, 0,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1521/148809',
		[
			'Haite Kudasai, Takamine-san',
			'履いてください、鷹峰さん',
			'Please Put Them On, Takamine-san',
		],
		[ 839 ],
		'TV', 1, 2025, 'Manga', 2, 0,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1169/148459',
		[
			'Rock wa Lady no Tashinami deshite',
			'ロックは淑女の嗜みでして',
			"Rock Is a Lady's Modesty",
		],
		[ 1258 ],
		'TV', 1, 2025, 'Manga', 0, 0,
		[
			'tComedy',
			'tMusic',
			'tSchool',
			'tSeinen',
		]
	),
	new Anime(
		'1577/147967',
		[
			'Your Forma',
			'ユア・フォルマ',
		],
		[ 1393 ],
		'TV', 1, 2025, 'Light novel', 0, 0,
		[
			'tMystery',
			'tSciFi',
			'tDetective',
		]
	),
	new Anime(
		'1211/147335',
		[
			'Isshun de Chiryou shiteita noni Yakutatazu to Tsuihou sareta Tensai Chiyushi, Yami Healer toshite Tanoshiku Ikiru',
			'一瞬で治療していたのに役立たずと追放された天才治癒師、闇ヒーラーとして楽しく生きる',
			"The Brilliant Healer's New Life in the Shadows",
		],
		[ 2622 ],
		'TV', 1, 2025, 'Light novel', 0, 0,
		[
			'tFantasy',
			'tMedical',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1712/148299',
		[
			'Saikyou no Ousama, Nidome no Jinsei wa Nani wo Suru?',
			'最強の王様、二度目の人生は何をする?',
			'The Beginning After the End',
		],
		[ 1209 ],
		'TV', 1, 2025, 'Other', 0, 0,
		[
			'tFantasy',
			'tReincarnation',
		]
	),
	new Anime(
		'1065/148659',
		[
			'Ballpark de Tsukamaete!',
			'ボールパークでつかまえて！',
			'Catch Me at the Ballpark!',
		],
		[ 1264 ],
		'TV', 1, 2025, 'Manga', 0, 0,
		[
			'tComedy',
			'tSports',
			'tAdultCast',
			'tSports',
			'tSeinen',
		]
	),
	new Anime(
		'1620/148221',
		[
			'Aru Majo ga Shinu Made',
			'ある魔女が死ぬまで',
			"Once Upon a Witch's Death",
		],
		[ 1264 ],
		'TV', 1, 2025, 'Light novel', 0, 0,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1722/148906',
		[
			'Kijin Gentoushou',
			'鬼人幻燈抄',
			'Sword of the Demon Hunter: Kijin Gentosho',
		],
		[ 1687 ],
		'TV', 1, 2025, 'Novel', 1, 0,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHistorical',
		]
	),
	new Anime(
		'1743/148272',
		[
			'Kanchigai no Atelier Meister: Eiyuu Party no Moto Zatsuyougakari ga, Jitsu wa Sentou Igai ga SSS Rank Datta to Iu Yoku Aru Hanashi',
			'勘違いの工房主～英雄パーティの元雑用係が、実は戦闘以外がSSSランクだったというよくある話',
			'The Unaware Atelier Meister',
		],
		[ 1264 ],
		'TV', 1, 2025, 'Light novel', 0, 0,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1703/148600',
		[
			'Ore wa Seikan Kokka no Akutoku Ryoushu!',
			'俺は星間国家の悪徳領主！',
			"I'm the Evil Lord of an Intergalactic Empire!",
		],
		[ 2314 ],
		'TV', 1, 2025, 'Light novel', 0, 0,
		[
			'tAction',
			'tSciFi',
			'tHarem',
			'tMecha',
			'tMilitary',
			'tSpace',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1390/146918',
		[
			'Sentai Red Isekai de Boukensha ni Naru',
			'戦隊レッド 異世界で冒険者になる',
			'The Red Ranger Becomes an Adventurer in Another World',
		],
		[ 41 ],
		'TV', 0, 2025, 'Manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tShounen',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1378/148615',
		[
			'A-Rank Party wo Ridatsu shita Ore wa, Moto Oshiego-tachi to Meikyuu Shinbu wo Mezasu.',
			'Aランクパーティを離脱した俺は、元教え子たちと迷宮深部を目指す。',
			'I Left My A-Rank Party to Help My Former Students Reach the Dungeon Depths!',
		],
		[ 1258 ],
		'TV', 0, 2025, 'Light novel', 0, 0,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
			'tFavoriteEDSong_1',
			'tFavoriteEDSong_2',
			'tFavoriteEDVisual_1',
			'tFavoriteEDVisual_2',
		]
	),
	new Anime(
		'1026/146459',
		[
			'Sakamoto Days',
		],
		[ 73 ],
		'TV', 0, 2025, 'Manga', 1, 1,
		[
			'tAction',
			'tComedy',
			'tAdultCast',
			'tOrganizedCrime',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1647/146961',
		[
			'Übel Blatt',
			'Übel Blatt～ユーベルブラット～',
			'Ubel Blatt',
		],
		[ 41, 2405 ],
		'TV', 0, 2025, 'Manga', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tSeinen',
		]
	),
	new Anime(
		'1650/146113',
		[
			'Nihon e Youkoso Elf-san.',
			'日本へようこそエルフさん。',
			'Welcome to Japan, Ms. Elf!',
		],
		[ 1379 ],
		'TV', 0, 2025, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1904/144608',
		[
			'Guild no Uketsukejou desu ga, Zangyou wa Iya nanode Boss wo Solo Toubatsu Shiyou to Omoimasu',
			'ギルドの受付嬢ですが、残業は嫌なのでボスをソロ討伐しようと思います',
			"I May Be a Guild Receptionist, but I'll Solo Any Boss to Clock Out on Time",
		],
		[ 1835 ],
		'TV', 0, 2025, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1255/146484',
		[
			'Akuyaku Reijou Tensei Ojisan',
			'悪役令嬢転生おじさん',
			"From Bureaucrat to Villainess: Dad's Been Reincarnated!",
		],
		[ 30 ],
		'TV', 0, 2025, 'Manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tSchool',
			'tSeinen',
			'tVillainess',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1021/146952',
		[
			'Douse, Koishite Shimaunda.',
			'どうせ、恋してしまうんだ。',
			"Anyway, I'm Falling in Love with You.",
		],
		[ 1340 ],
		'TV', 0, 2025, 'Manga', 0, 2,
		[
			'tDrama',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShoujo',
		]
	),
	new Anime(
		'1887/146512',
		[
			'Around 40 Otoko no Isekai Tsuuhan',
			'アラフォー男の異世界通販',
			'The Daily Life of a Middle-Aged Online Shopper in Another World',
		],
		[ 2455 ],
		'TV', 0, 2025, 'Manga', 0, 1,
		[
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tShounen',
		]
	),
	new Anime(
		'1683/146293',
		[
			'Fuguushoku "Kanteishi" ga Jitsu wa Saikyou Datta',
			'不遇職【鑑定士】が実は最強だった',
			'Even Given the Worthless "Appraiser" Class, I’m Actually the Strongest',
		],
		[ 2037 ],
		'TV', 0, 2025, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1245/147612',
		[
			'Botsuraku Yotei no Kizoku dakedo, Hima Datta kara Mahou wo Kiwametemita',
			'没落予定の貴族だけど、暇だったから魔法を極めてみた',
			"I'm a Noble on the Brink of Ruin, So I Might as Well Try Mastering Magic",
		],
		[ 37, 553 ],
		'TV', 0, 2025, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1802/146725',
		[
			'Magic Maker: Isekai Mahou no Tsukurikata',
			'マジック・メイカー －異世界魔法の作り方－',
			'Magic Maker: How to Make Magic in Another World',
		],
		[ 37 ],
		'TV', 0, 2025, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1382/144602',
		[
			'Honey Lemon Soda',
			'ハニーレモンソーダ',
		],
		[ 7 ],
		'TV', 0, 2025, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
		]
	),
	new Anime(
		'1787/146809',
		[
			'Hana wa Saku, Shura no Gotoku',
			'花は咲く、修羅の如く',
			'Flower and Asura',
		],
		[ 1993 ],
		'TV', 0, 2025, 'Manga', 0, 1,
		[
			'tDrama',
			'tSchool',
			'tSeinen',
		]
	),
	new Anime(
		'1116/146903',
		[
			'Mahoutsukai no Yakusoku',
			'魔法使いの約束',
			'Promise of Wizard',
		],
		[ 839 ],
		'TV', 0, 2025, 'Game', 0, 2,
		[
			'tFantasy',
			'tIsekai',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1792/146404',
		[
			'Kuroiwa Medaka ni Watashi no Kawaii ga Tsuujinai',
			'黒岩メダカに私の可愛いが通じない',
			'Medaka Kuroiwa is Impervious to My Charms',
		],
		[ 118 ],
		'TV', 0, 2025, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tLoveStatusQuo',
		]
	),
	new Anime(
		'1123/146384',
		[
			'Kono Kaisha ni Suki na Hito ga Imasu',
			'この会社に好きな人がいます',
			'I Have a Crush at Work',
		],
		[ 1547 ],
		'TV', 0, 2025, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAdultCast',
			'tWorkplace',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1003/146841',
		[
			'Zenshuu.',
			'全修。',
			'Zenshuu',
		],
		[ 569 ],
		'TV', 0, 2025, 'Original', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1711/146319',
		[
			'Kisaki Kyouiku kara Nigetai Watashi',
			'妃教育から逃げたい私',
			'I Want to Escape from Princess Lessons',
		],
		[ 1264 ],
		'TV', 0, 2025, 'Manga', 0, 2,
		[
			'tComedy',
			'tRomance',
		]
	),
	new Anime(
		'1744/147363',
		[
			'Okinawa de Suki ni Natta Ko ga Hougen Sugite Tsurasugiru',
			'沖縄で好きになった子が方言すぎてツラすぎる',
			"Okitsura: Fell in Love with an Okinawan Girl, but I Just Wish I Know What She's Saying",
		],
		[ 1237 ],
		'TV', 0, 2025, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLovePolygon',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1748/148595',
		[
			'NEET Kunoichi to Nazeka Dousei Hajimemashita',
			'ニートくノ一となぜか同棲はじめました',
			"I'm Living with an Otaku NEET Kunoichi!?",
		],
		[ 2314 ],
		'TV', 0, 2025, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1974/147269',
		[
			'Tasokare Hotel',
			'誰ソ彼ホテル',
		],
		[ 753 ],
		'TV', 0, 2025, 'Game', 0, 1,
		[
			'tFantasy',
			'tMystery',
		]
	),
	new Anime(
		'1909/146787',
		[
			'Sorairo Utility (TV)',
			'空色ユーティリティ',
		],
		[ 2009 ],
		'TV', 0, 2025, 'Original', 0, 1,
		[
			'tSports',
			'tCGDCT',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1775/147330',
		[
			'Class no Daikirai na Joshi to Kekkon suru Koto ni Natta.',
			'クラスの大嫌いな女子と結婚することになった。',
			"I'm Getting Married to a Girl I Hate in My Class",
		],
		[ 418, 1299 ],
		'TV', 0, 2025, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1107/143656',
		[
			'Momentary Lily',
			'もめんたりー・リリィ',
		],
		[ 309 ],
		'TV', 0, 2025, 'Original', 0, 1,
		[
			'tAction',
		]
	),
	new Anime(
		'1096/147327',
		[
			'Ameku Takao no Suiri Karte',
			'天久鷹央の推理カルテ',
			'Ameku M.D.: Doctor Detective',
		],
		[ 439 ],
		'TV', 0, 2025, 'Novel', 0, 1,
		[
			'tMystery',
			'tAdultCast',
			'tMedical',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1431/146222',
		[
			'Izure Saikyou no Renkinjutsushi?',
			'いずれ最強の錬金術師?',
			'Possibly the Greatest Alchemist of All Time',
		],
		[ 126 ],
		'TV', 0, 2025, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1668/144352',
		[
			'Salaryman ga Isekai ni Ittara Shitennou ni Natta Hanashi',
			'サラリーマンが異世界に行ったら四天王になった話',
			'Headhunted to Another World: From Salaryman to Big Four!',
		],
		[ 1857, 2725 ],
		'TV', 0, 2025, 'Web manga', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
		]
	),
	new Anime(
		'1703/146128',
		[
			'Hazure Skill "Kinomi Master": Skill no Mi (Tabetara Shinu) wo Mugen ni Taberareru You ni Natta Ken ni Tsuite',
			'外れスキル《木の実マスター》 ～スキルの実（食べたら死ぬ）を無限に食べられるようになった件について～',
			'Bogus Skill Fruitmaster: About That Time I Became Able to Eat Unlimited Numbers of Skill Fruits (That Kill You)',
		],
		[ 406 ],
		'TV', 0, 2025, 'Manga', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tAdventure',
		]
	),
	new Anime(
		'1656/146916',
		[
			'S-Rank Monster no "Behemoth" dakedo, Neko to Machigawarete Elf Musume no Pet toshite Kurashitemasu',
			'Sランクモンスターの《ベヒーモス》だけど、猫と間違われてエルフ娘の騎士（ペット）として暮らしてます',
			"Beheneko: The Elf-Girl's Cat is Secretly an S-Ranked Monster!",
		],
		[ 1379, 2985 ],
		'TV', 0, 2025, 'Manga', 2, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tReincarnation',
			'tSeinen',
		]
	),
	new Anime(
		'1120/120796',
		[
			'Summertime Render',
			'サマータイムレンダ',
			'Summer Time Rendering',
		],
		[ 28 ],
		'TV', 1, 2022, 'Manga', 1, 1,
		[
			'tMystery',
			'tSupernatural',
			'tSuspense',
			'tTimeTravel',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_2',
		]
	),
	new Anime(
		'1675/144605',
		[
			'Maou 2099',
			'魔王2099',
			'Demon Lord 2099',
		],
		[ 7 ],
		'TV', 3, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tSciFi',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1713/144761',
		[
			'Hamidashi Creative',
			'ハミダシクリエイティブ',
		],
		[ 2370 ],
		'TV', 3, 2024, 'Visual novel', 0, 1,
		[
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'1672/148866',
		[
			'Yarinaoshi Reijou wa Ryuutei Heika wo Kouryakuchuu',
			'やり直し令嬢は竜帝陛下を攻略中',
			'The Do-Over Damsel Conquers The Dragon Emperor',
		],
		[ 7 ],
		'TV', 3, 2024, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tTimeTravel',
			'tShoujo',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1436/144553',
		[
			'Hoshifuru Oukoku no Nina',
			'星降る王国のニナ',
			'Nina the Starry Bride',
		],
		[ 1278 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tRomance',
			'tJosei',
		]
	),
	new Anime(
		'1800/145662',
		[
			'Youkai Gakkou no Sensei Hajimemashita!',
			'妖怪学校の先生はじめました！',
			'A Terrified Teacher at Ghoul School!',
		],
		[ 41 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tGagHumor',
			'tMythology',
			'tSchool',
			'tWorkplace',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1079/145918',
		[
			'Mecha-ude',
			'メカウデ',
			'Mecha-Ude: Mechanical Arms',
		],
		[ 1843 ],
		'TV', 3, 2024, 'Original', 0, 1,
		[
			'tAction',
			'tSciFi',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1428/143773',
		[
			'Raise wa Tanin ga Ii',
			'来世は他人がいい',
			'Yakuza Fiancé',
		],
		[ 37 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tRomance',
			'tOrganizedCrime',
			'tSeinen',
		]
	),
	new Anime(
		'1681/145175',
		[
			'Puniru wa Kawaii Slime',
			'ぷにるはかわいいスライム',
			'Puniru is a Kawaii Slime',
		],
		[ 2705 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tAnthropomorphic',
			'tGagHumor',
			'tSchool',
		]
	),
	new Anime(
		'1752/145548',
		[
			'Tsuma, Shougakusei ni Naru.',
			'妻、小学生になる',
			'If My Wife Becomes an Elementary School Student.',
		],
		[ 1998 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tReincarnation',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1432/141123',
		[
			'Party kara Tsuihou sareta Sono Chiyushi, Jitsu wa Saikyou ni Tsuki',
			'パーティーから追放されたその治癒師、実は最強につき',
			'The Healer Who Was Banished From His Party, Is, in Fact, the Strongest',
		],
		[ 1521 ],
		'TV', 3, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1909/144684',
		[
			'Kimi wa Meido-sama.',
			'君は冥土様。',
			'You Are Ms. Servant.',
		],
		[ 1440 ],
		'TV', 3, 2024, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1535/145026',
		[
			'Mahoutsukai ni Narenakatta Onnanoko no Hanashi',
			'魔法使いになれなかった女の子の話',
			"The Stories of Girls Who Couldn't Be Magicians",
		],
		[ 7 ],
		'TV', 3, 2024, 'Novel', 0, 1,
		[
			'tFantasy',
			'tSchool',
		]
	),
	new Anime(
		'1198/145156',
		[
			'Goukon ni Ittara Onna ga Inakatta Hanashi',
			'合コンに行ったら女がいなかった話',
			"How I Attended an All-Guy's Mixer",
		],
		[ 242 ],
		'TV', 3, 2024, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAdultCast',
			'tCrossdressing',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1926/145102',
		[
			'Kabushikigaisha Magi-Lumière',
			'株式会社マジルミエ',
			'Magilumiere Magical Girls Inc.',
		],
		[ 7, 2855 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tAdultCast',
			'tMahouShoujo',
			'tWorkplace',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1954/144622',
		[
			'Kinoko Inu',
			'きのこいぬ',
			'Kinokoinu Mushroom Pup',
		],
		[ 1075 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tSliceofLife',
			'tAdultCast',
			'tPets',
			'tSeinen',
			'tSupernatural',
		]
	),
	new Anime(
		'1225/144606',
		[
			'Sayounara Ryuusei, Konnichiwa Jinsei',
			'さようなら竜生、こんにちは人生',
			'Good Bye, Dragon Life',
		],
		[ 118, 136 ],
		'TV', 3, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tReincarnation',
		]
	),
	new Anime(
		'1572/145903',
		[
			'Kekkon suru tte, Hontou desu ka',
			'結婚するって、本当ですか 365 Days To The Wedding',
			'365 Days to the Wedding',
		],
		[ 242 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tRomance',
			'tAdultCast',
			'tWorkplace',
			'tSeinen',
			'tFavoriteAnime',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1341/145349',
		[
			'Ao no Hako',
			'アオのハコ',
			'Blue Box',
		],
		[ 94 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tRomance',
			'tSports',
			'tSchool',
			'tShounen',
			'tLovePolygon',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
			'tFavoriteEDSong_1',
			'tFavoriteEDVisual_1',
			'tFavoriteEDVisual_2',
		]
	),
	new Anime(
		'1584/143719',
		[
			'Dandadan',
			'ダンダダン',
		],
		[ 1591 ],
		'TV', 3, 2024, 'Manga', 1, 1,
		[
			'tAction',
			'tComedy',
			'tSupernatural',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1537/145325',
		[
			'NegaPosi Angler',
			'ネガポジアングラー',
			'Negative Positive Angler',
		],
		[ 1567 ],
		'TV', 3, 2024, 'Original', 0, 1,
		[
			'tAdultCast',
			'tSliceofLife',
		]
	),
	new Anime(
		'1397/145153',
		[
			'Acro Trip',
			'アクロトリップ',
		],
		[ 2698 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tParody',
			'tMahouShoujo',
			'tShoujo',
		]
	),
	new Anime(
		'1468/143925',
		[
			'Rekishi ni Nokoru Akujo ni Naru zo',
			'歴史に残る悪女になるぞ',
			"I'll Become a Villainess Who Goes Down in History",
		],
		[ 1978 ],
		'TV', 3, 2024, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tShoujo',
			'tVillainess',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1303/147193',
		[
			'Amagami-san Chi no Enmusubi',
			'甘神さんちの縁結び',
			'Tying the Knot with an Amagami Sister',
		],
		[ 1967 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
			'tFavoriteEDVisual_1',
			'tFavoriteEDVisual_2',
		]
	),
	new Anime(
		'1683/145446',
		[
			'Saikyou no Shienshoku "Wajutsushi" de Aru Ore wa Sekai Saikyou Clan wo Shitagaeru',
			'最凶の支援職【話術士】である俺は世界最強クランを従える',
			`The Most Notorious "Talker" Runs the World's Greatest Clan`
		],
		[ 1440, 2387 ],
		'TV', 3, 2024, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1679/145660',
		[
			'Nageki no Bourei wa Intai shitai',
			'嘆きの亡霊は引退したい',
			'Let This Grieving Soul Retire',
		],
		[ 1379 ],
		'TV', 3, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1714/145320',
		[
			'Hitoribocchi no Isekai Kouryaku',
			'ひとりぼっちの異世界攻略',
			'Loner Life in Another World',
		],
		[ 911, 2370 ],
		'TV', 3, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1664/144272',
		[
			'Naze Boku no Sekai wo Daremo Oboeteinai no ka?',
			'なぜ僕の世界を誰も覚えていないのか？',
			'Why Does Nobody Remember Me in This World?',
		],
		[ 439 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSciFi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1332/143513',
		[
			'Make Heroine ga Oosugiru!',
			'負けヒロインが多すぎる！',
			'Makeine: Too Many Losing Heroines!',
		],
		[ 56 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual_2',
			'tFavoriteEDVisual_3',
		]
	),
	new Anime(
		'1538/147930',
		[
			'Bye Bye, Earth 2nd Season',
			'ばいばい、アース 第2シーズン',
		],
		[ 839 ],
		'TV', 1, 2025, 'Light novel', 0, 2,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tAnthropomorphic',
		]
	),
	new Anime(
		'1104/145564',
		[
			'Bye Bye, Earth',
			'ばいばい、アース',
		],
		[ 839 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tAnthropomorphic',
		]
	),
	new Anime(
		'1315/142250',
		[
			'Koi wa Futago de Warikirenai',
			'恋は双子で割り切れない',
			'Love Is Indivisible by Twins',
		],
		[ 2835 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLovePolygon',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1653/143959',
		[
			'Katsute Mahou Shoujo to Aku wa Tekitai shiteita.',
			'かつて魔法少女と悪は敵対していた。',
			'The Magical Girl and the Evil Lieutenant Used to Be Archenemies',
		],
		[ 4 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tMahouShoujo',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1430/143526',
		[
			'Na Nare Hana Nare',
			'菜なれ花なれ',
			'Narenare -Cheer for You!-',
		],
		[ 132 ],
		'TV', 2, 2024, 'Original', 0, 1,
		[
			'tSports',
			'tDrama',
			'tCGDCT',
		]
	),
	new Anime(
		'1700/143395',
		[
			'Mayonaka Punch',
			'真夜中ぱんチ',
			'Midnight Punch',
		],
		[ 132 ],
		'TV', 2, 2024, 'Original', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tVampire',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1690/141987',
		[
			'Isekai Yururi Kikou: Kosodateshinagara Boukensha Shimasu',
			'異世界ゆるり紀行 ～子育てしながら冒険者します～',
			'A Journey Through Another World: Raising Kids While Adventuring',
		],
		[ 1264 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tSliceofLife',
			'tChildcare',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1382/143437',
		[
			'Elf-san wa Yaserarenai.',
			'エルフさんは痩せられない。',
			'Plus-Sized Elf',
		],
		[ 2928 ],
		'TV', 2, 2024, 'Web manga', 2, 2,
		[
			'tComedy',
			'tFantasy',
			'tEcchi',
		]
	),
	new Anime(
		'1606/144506',
		[
			'VTuber Nandaga Haishin Kiri Wasuretara Densetsu ni Natteta',
			'VTuberなんだが配信切り忘れたら伝説になってた',
			'VTuber Legend: How I Went Viral after Forgetting to Turn Off My Stream',
		],
		[ 120 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tComedy',
			'tOtakuCulture',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1281/144104',
		[
			'Tsue to Tsurugi no Wistoria',
			'杖と剣のウィストリア',
			'Wistoria: Wand and Sword',
		],
		[ 60, 1258 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1572/144060',
		[
			'Madougushi Dahliya wa Utsumukanai',
			'魔導具師ダリヤはうつむかない',
			'Dahlia in Bloom: Crafting a Fresh Start with Magical Tools',
		],
		[ 1340, 2844 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1224/148321',
		[
			'Shoushimin Series 2nd Season',
			'小市民シリーズ 第2期',
			'Shoshimin: How to Become Ordinary Season 2',
		],
		[ 1828 ],
		'TV', 1, 2025, 'Novel', 0, 0,
		[
			'tMystery',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1164/143459',
		[
			'Shoushimin Series',
			'小市民シリーズ',
			'Shoshimin: How to Become Ordinary',
		],
		[ 1828 ],
		'TV', 2, 2024, 'Novel', 0, 1,
		[
			'tMystery',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1578/143664',
		[
			'Mob kara Hajimaru Tansaku Eiyuutan',
			'モブから始まる探索英雄譚',
			"A Nobody's Way Up to an Exploration Hero",
		],
		[ 2554 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1026/143505',
		[
			'Dungeon no Naka no Hito',
			'ダンジョンの中のひと',
			'Dungeon People',
		],
		[ 28 ],
		'TV', 2, 2024, 'Web manga', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1187/141847',
		[
			'Kono Sekai wa Fukanzen Sugiru',
			'この世界は不完全すぎる',
			'Quality Assurance in Another World',
		],
		[ 2201, 2696 ],
		'TV', 2, 2024, 'Web manga', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tVideoGame',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1779/143584',
		[
			'2.5-jigen no Ririsa',
			'2.5次元の誘惑',
			'2.5 Dimensional Seduction',
		],
		[ 7 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tHarem',
			'tOtakuCulture',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1805/142211',
		[
			'Ramen Akaneko',
			'ラーメン赤猫',
		],
		[ 2642 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tAnthropomorphic',
			'tWorkplace',
			'tShounen',
		]
	),
	new Anime(
		'1098/144507',
		[
			'Atri: My Dear Moments',
			'ATRI -My Dear Moments-',
			'Atri -My Dear Moments-',
		],
		[ 1103 ],
		'TV', 2, 2024, 'Visual novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1716/142875',
		[
			'Senpai wa Otokonoko',
			'先輩はおとこのこ',
			'Senpai is an Otokonoko',
		],
		[ 439 ],
		'TV', 2, 2024, 'Web manga', 0, 1,
		[
			'tRomance',
			'tCrossdressing',
			'tLovePolygon',
			'tSchool',
			'tDrama',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1914/143630',
		[
			'Hazurewaku no "Joutai Ijou Skill" de Saikyou ni Natta Ore ga Subete wo Juurin suru made',
			'ハズレ枠の【状態異常スキル】で最強になった俺がすべてを蹂躙するまで',
			'Failure Frame: I Became the Strongest and Annihilated Everything With Low-Level Spells',
		],
		[ 35 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1607/143547',
		[
			'Giji Harem',
			'疑似ハーレム',
			'Pseudo Harem',
		],
		[ 70 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tComedy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1747/143101',
		[
			'Ore wa Subete wo "Parry" suru: Gyaku Kanchigai no Sekai Saikyou wa Boukensha ni Naritai',
			'俺は全てを【パリイ】する ～逆勘違いの世界最強は冒険者になりたい～',
			'I Parry Everything',
		],
		[ 28 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1094/143324',
		[
			'Shikanoko Nokonoko Koshitantan',
			'しかのこのこのここしたんたん',
			'My Deer Friend Nokotan',
		],
		[ 858 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tGagHumor',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1252/143457',
		[
			'Isekai Shikkaku',
			'異世界失格',
			'No Longer Allowed In Another World',
		],
		[ 2298 ],
		'TV', 2, 2024, 'Web manga', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1825/142258',
		[
			'Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san',
			'時々ボソッとロシア語でデレる隣のアーリャさん',
			'Alya Sometimes Hides Her Feelings in Russian',
		],
		[ 95 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1482/143629',
		[
			'Tasuuketsu',
			'多数欠',
			'Tasuketsu -Fate of the Majority-',
		],
		[ 41 ],
		'TV', 2, 2024, 'Web manga', 0, 1,
		[
			'tAction',
			'tDrama',
			'tSuspense',
			'tHighStakesGame',
			'tPsychological',
			'tFavoriteOPSong_2',
		]
	),
	new Anime(
		'1007/141625',
		[
			'Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru.',
			'新米オッサン冒険者、最強パーティに死ぬほど鍛えられて無敵になる。',
			'The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible',
		],
		[ 96 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1101/143646',
		[
			'Boku no Tsuma wa Kanjou ga Nai',
			'僕の妻は感情がない',
			'My Wife Has No Emotion',
		],
		[ 200 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSciFi',
			'tSeinen',
		]
	),
	new Anime(
		'1420/143707',
		[
			'Gimai Seikatsu',
			'義妹生活',
			'Days with My Stepsister',
		],
		[ 37 ],
		'TV', 2, 2024, 'Light novel', 0, 1,
		[
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1814/143744',
		[
			'Maougun Saikyou no Majutsushi wa Ningen datta',
			'魔王軍最強の魔術師は人間だった',
			"The Strongest Magician in the Demon Lord's Army Was a Human",
		],
		[ 1209 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		]
	),
	new Anime(
		'1528/143212',
		[
			'Dead Dead Demons Dededede Destruction (ONA)',
			'デッドデッドデーモンズデデデデデストラクション',
			'Dead Dead Demons Dededede Destruction',
		],
		[ 2157 ],
		'ONA', 1, 2024, 'Manga', 0, 2,
		[
			'tDrama',
			'tSciFi',
			'tSchool',
			'tSeinen',
		]
	),
	new Anime(
		'1514/143260',
		[
			'Dead Dead Demons Dededede Destruction (ONA) Episode 0',
			'デッドデッドデーモンズデデデデデストラクション',
			'Dead Dead Demons Dededede Destruction Episode 0',
		],
		[ 2157 ],
		'ONA', 1, 2024, 'Manga', 0, 1,
		[
			'tDrama',
			'tSciFi',
			'tSchool',
			'tSeinen',
		]
	),
	new Anime(
		'8/77382',
		[
			'Gate: Jieitai Kanochi nite, Kaku Tatakaeri Part 2',
			'GATE（ゲート）自衛隊　彼の地にて、斯く戦えり　第2クール',
			'GATE Part 2',
		],
		[ 56 ],
		'TV', 0, 2016, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tMilitary',
		]
	),
	new Anime(
		'8/76222',
		[
			'Gate: Jieitai Kanochi nite, Kaku Tatakaeri',
			'GATE（ゲート）自衛隊　彼の地にて、斯く戦えり',
			'GATE',
		],
		[ 56 ],
		'TV', 2, 2015, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tMilitary',
		]
	),
	new Anime(
		'1455/141858',
		[
			'Sasayaku You ni Koi wo Utau',
			'ささやくように恋を唄う',
			'Whisper Me a Love Song',
		],
		[ 1687, 2600 ],
		'TV', 1, 2024, 'Manga', 0, 1,
		[
			'tYuri',
			'tMusic',
			'tSchool',
			'tDrama',
		]
	),
	new Anime(
		'1370/140362',
		[
			'Kaijuu 8-gou',
			'怪獣8号',
			'Kaiju No. 8',
		],
		[ 10 ],
		'TV', 1, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tSciFi',
			'tMilitary',
			'tShounen',
			'tAdultCast',
			'tFantasy',
			'tUrbanFantasy',
			'tFavoriteAnime',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1898/141857',
		[
			'The New Gate',
		],
		[ 1687, 2600 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		]
	),
	new Anime(
		'1670/141688',
		[
			'Kaii to Otome to Kamikakushi',
			'怪異と乙女と神隠し',
			'Mysterious Disappearances',
		],
		[ 1379 ],
		'TV', 1, 2024, 'Web manga', 0, 1,
		[
			'tMystery',
			'tSupernatural',
			'tEcchi',
		]
	),
	new Anime(
		'1253/141796',
		[
			'Seiyuu Radio no Uraomote',
			'声優ラジオのウラオモテ',
			'The Many Sides of Voice Actor Radio',
		],
		[ 957 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tComedy',
			'tYuri',
			'tSchool',
			'tDrama',
			'tShowbiz',
		]
	),
	new Anime(
		'1405/147694',
		[
			'Sentai Daishikkaku 2nd Season',
			'戦隊大失格 2nd Season',
			'Go! Go! Loser Ranger! Season 2',
		],
		[ 2009 ],
		'TV', 1, 2025, 'Manga', 0, 0,
		[
			'tAction',
			'tShounen',
			'tFantasy',
			'tUrbanFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1183/141489',
		[
			'Sentai Daishikkaku',
			'戦隊大失格',
			'Go! Go! Loser Ranger!',
		],
		[ 2009 ],
		'TV', 1, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tShounen',
			'tFantasy',
			'tUrbanFantasy',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1375/141863',
		[
			'Vampire Dormitory',
			'ヴァンパイア男子寮',
		],
		[ 478 ],
		'TV', 1, 2024, 'Manga', 0, 1,
		[
			'tRomance',
			'tSupernatural',
			'tCrossdressing',
			'tVampire',
			'tShoujo',
			'tLovePolygon',
		]
	),
	new Anime(
		'1739/140995',
		[
			'Blue Archive the Animation',
			'ブルーアーカイブ The Animation',
		],
		[ 2009, 2134 ],
		'TV', 1, 2024, 'Game', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1676/141714',
		[
			'Jiisan Baasan Wakagaeru',
			'じいさんばあさん若返る',
			'Grandpa and Grandma Turn Young Again',
		],
		[ 2554 ],
		'TV', 1, 2024, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1674/143715',
		[
			'Yozakura-san Chi no Daisakusen',
			'夜桜さんちの大作戦',
			'Mission: Yozakura Family',
		],
		[ 300 ],
		'TV', 1, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPVisual_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_2',
		]
	),
	new Anime(
		'1058/141559',
		[
			'Tonari no Youkai-san',
			'となりの妖怪さん',
		],
		[ 839 ],
		'TV', 1, 2024, 'Web manga', 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tMythology',
			'tUrbanFantasy',
		]
	),
	new Anime(
		'1834/141827',
		[
			'Yoru no Kurage wa Oyogenai',
			'夜のクラゲは泳げない',
			"Jellyfish Can't Swim in the Night",
		],
		[ 95 ],
		'TV', 1, 2024, 'Original', 0, 1,
		[
			'tMusic',
			'tDrama',
			'tFavoriteAnime',
			'tFavoriteEDSong_2',
		]
	),
	new Anime(
		'1646/141411',
		[
			'Hananoi-kun to Koi no Yamai',
			'花野井くんと恋の病',
			'A Condition Called Love',
		],
		[ 2455 ],
		'TV', 1, 2024, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1861/141482',
		[
			'Henjin no Salad Bowl',
			'変人のサラダボウル',
			'A Salad Bowl of Eccentrics',
		],
		[ 118, 126 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tUrbanFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1346/141203',
		[
			'Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?',
			'魔王の俺が奴隷エルフを嫁にしたんだが、どう愛でればいい？',
			"An Archdemon's Dilemma: How to Love Your Elf Bride",
		],
		[ 112 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1246/141999',
		[
			'Lv2 kara Cheat datta Motoyuusha Kouho no Mattari Isekai Life',
			'Lv2からチートだった元勇者候補のまったり異世界ライフ',
			"Chillin' in Another World with Level 2 Super Cheat Powers",
		],
		[ 7 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tIsekai',
		]
	),
	new Anime(
		'1137/147179',
		[
			'Unnamed Memory Act.2',
			'Unnamed Memory Season 2',
		],
		[ 1974 ],
		'TV', 0, 2025, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tRomance',
		]
	),
	new Anime(
		'1143/142439',
		[
			'Unnamed Memory',
		],
		[ 1974 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1462/142547',
		[
			'Bartender: Kami no Glass',
			'バーテンダー 神のグラス',
			'Bartender: Glass of God',
		],
		[ 2527 ],
		'TV', 1, 2024, 'Manga', 0, 1,
		[
			'tDrama',
			'tGourmet',
			'tAdultCast',
			'tWorkplace',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1280/143705',
		[
			'Tensei Kizoku, Kantei Skill de Nariagaru 2nd Season',
			'転生貴族、鑑定スキルで成り上がる 第2期',
			"As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World Season 2",
		],
		[ 2246 ],
		'TV', 3, 2024, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1763/139538',
		[
			'Tensei Kizoku, Kantei Skill de Nariagaru',
			'転生貴族、鑑定スキルで成り上がる',
			"As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World",
		],
		[ 2246 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1372/141859',
		[
			'Astro Note',
			'アストロノオト',
		],
		[ 94 ],
		'TV', 1, 2024, 'Original', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSciFi',
		]
	),
	new Anime(
		'1224/137451',
		[
			'Shuumatsu Train Doko e Iku?',
			'終末トレインどこへいく？',
			'Train to the End of the World',
		],
		[ 1264 ],
		'TV', 1, 2024, 'Original', 0, 1,
		[
			'tAdventure',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1580/141243',
		[
			'Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu',
			'転生したら第七王子だったので、気ままに魔術を極めます',
			'I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability',
		],
		[ 2212 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1059/142414',
		[
			'Ookami to Koushinryou: Merchant Meets the Wise Wolf',
			'狼と香辛料 MERCHANT MEETS THE WISE WOLF',
			'Spice and Wolf: Merchant Meets the Wise Wolf',
		],
		[ 911 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tDrama',
			'tSupernatural',
			'tRomance',
			'tAdultCast',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
			'tFavoriteEDSong_1',
			'tFavoriteEDVisual_1',
			'tFavoriteEDVisual_2',
		]
	),
	new Anime(
		'1523/141680',
		[
			'Re:Monster',
		],
		[ 37 ],
		'TV', 1, 2024, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1578/141782',
		[
			'Kami wa Game ni Ueteiru.',
			'神は遊戯に飢えている。',
			"Gods' Game We Play",
		],
		[ 839 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tSuspense',
			'tUrbanFantasy',
			'tHighStakesGame',
			'tStrategyGame',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1158/141710',
		[
			'Dekisokonai to Yobareta Motoeiyuu wa Jikka kara Tsuihou sareta node Sukikatte ni Ikiru Koto ni Shita',
			'出来損ないと呼ばれた元英雄は、実家から追放されたので好き勝手に生きることにした',
			'The Banished Former Hero Lives as He Pleases',
		],
		[ 37, 553 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1833/141321',
		[
			'One Room, Hiatari Futsuu, Tenshi-tsuki.',
			'ワンルーム、日当たり普通、天使つき。',
			'Studio Apartment, Good Lighting, Angel Included',
		],
		[ 2037 ],
		'TV', 1, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tMythology',
			'tShounen',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1390/120708',
		[
			'Odd Taxi Movie: In the Woods',
			'映画 ODD TAXI イン・ザ・ウッズ',
		],
		[ 28, 1872 ],
		'Movie', 1, 2022, 'Original', 0, 1,
		[
			'tDrama',
			'tMystery',
			'tSuspense',
			'tAdultCast',
			'tAnthropomorphic',
			'tOrganizedCrime',
		]
	),
	new Anime(
		'1981/113348',
		[
			'Odd Taxi',
			'オッドタクシー',
		],
		[ 28, 1872 ],
		'TV', 1, 2021, 'Original', 0, 1,
		[
			'tDrama',
			'tMystery',
			'tSuspense',
			'tAdultCast',
			'tAnthropomorphic',
			'tOrganizedCrime',
		]
	),
	new Anime(
		'1525/139345',
		[
			'Mahou Shoujo ni Akogarete',
			'魔法少女にあこがれて',
			'Gushing over Magical Girls',
		],
		[ 406 ],
		'TV', 0, 2024, 'Web manga', 2, 1,
		[
			'tAction',
			'tComedy',
			'tYuri',
			'tEcchi',
			'tMahouShoujo',
		]
	),
	new Anime(
		'1502/139926',
		[
			'Meitou "Isekai no Yu" Kaitakuki: Around 40 Onsen Mania no Tensei Saki wa, Nonbiri Onsen Tengoku deshita',
			'名湯『異世界の湯』開拓記 ～アラフォー温泉マニアの転生先は、のんびり温泉天国でした～',
			'Isekai Onsen Paradise',
		],
		[ 2052, 2144 ],
		'TV', 0, 2024, 'Light novel', 2, 1,
		[
			'tFantasy',
			'tIsekai',
			'tEcchi',
		]
	),
	new Anime(
		'1280/138474',
		[
			'Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita.',
			'最弱テイマーはゴミ拾いの旅を始めました。',
			'The Weakest Tamer Began a Journey to Pick Up Trash',
		],
		[ 2411 ],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tCrossdressing',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1449/140344',
		[
			'Gekai Elise',
			'外科医エリーゼ',
			'Doctor Elise: The Royal Lady with the Lamp',
		],
		[ 1978 ],
		'TV', 0, 2024, 'Web manga', 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tMedical',
			'tReincarnation',
		]
	),
	new Anime(
		'1948/143550',
		[
			'Sengoku Youko: Senma Konton-hen',
			'戦国妖狐 千魔混沌編',
			'Sengoku Youko 2nd Season',
		],
		[ 314 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHistorical',
			'tMythology',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1645/140627',
		[
			'Sengoku Youko',
			'戦国妖狐',
		],
		[ 314 ],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tHistorical',
			'tFantasy',
			'tMythology',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1150/140028',
		[
			'Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen',
			'悪役令嬢レベル99 ～私は裏ボスですが魔王ではありません～',
			"Villainess Level 99: I May Be the Hidden Boss but I'm Not the Demon Lord",
		],
		[ 755 ],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tSchool',
			'tVillainess',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1671/120628',
		[
			'Leadale no Daichi nite',
			'リアデイルの大地にて',
			'In the Land of Leadale',
		],
		[ 1978 ],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		]
	),
	new Anime(
		'1937/136906',
		[
			'Dosanko Gal wa Namara Menkoi',
			'道産子ギャルはなまらめんこい',
			'Hokkaido Gals Are Super Adorable!',
		],
		[ 300, 1547 ],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1056/139398',
		[
			'Himesama "Goumon" no Jikan desu',
			'姫様“拷問”の時間です',
			`'Tis Time for "Torture," Princess`
		],
		[ 1295 ],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tGourmet',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1902/139271',
		[
			'Oroka na Tenshi wa Akuma to Odoru',
			'愚かな天使は悪魔と踊る',
			'The Foolish Angel Dances with the Devil',
		],
		[ 1407 ],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tMythology',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1124/138750',
		[
			'Kyuujitsu no Warumono-san',
			'休日のわるものさん',
			"Mr. Villain's Day Off",
		],
		[ 118, 247 ],
		'TV', 0, 2024, 'Web manga', 0, 1,
		[
			'tFantasy',
			'tUrbanFantasy',
			'tSliceofLife',
			'tIyashikei',
		]
	),
	new Anime(
		'1533/140617',
		[
			'Loop 7-kaime no Akuyaku Reijou wa, Moto Tekikoku de Jiyuu Kimama na Hanayome Seikatsu wo Mankitsu suru',
			'ループ7回目の悪役令嬢は、元敵国で自由気ままな花嫁生活を満喫する',
			'7th Time Loop: The Villainess Enjoys a Carefree Life Married to Her Worst Enemy!',
		],
		[ 1997, 2097 ],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			'tTimeTravel',
			'tRomance',
			'tTimeTravel',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1319/140093',
		[
			'Saikyou Tank no Meikyuu Kouryaku: Tairyoku 9999 no Rare Skill-mochi Tank, Yuusha Party wo Tsuihou sareru',
			'最強タンクの迷宮攻略 ～体力9999のレアスキル持ちタンク、勇者パーティーを追放される～',
			"The Strongest Tank's Labyrinth Raids",
		],
		[ 2828 ],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1448/147351',
		[
			'Ore dake Level Up na Ken Season 2: Arise from the Shadow',
			'俺だけレベルアップな件 Season 2 -Arise from the Shadow-',
			'Solo Leveling Season 2: Arise from the Shadow',
		],
		[ 56 ],
		'TV', 0, 2025, 'Web manga', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tAdultCast',
			'tUrbanFantasy',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1801/142390',
		[
			'Ore dake Level Up na Ken',
			'俺だけレベルアップな件',
			'Solo Leveling',
		],
		[ 56 ],
		'TV', 0, 2024, 'Web manga', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tAdultCast',
			'tUrbanFantasy',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1188/139825',
		[
			'Yubisaki to Renren',
			'ゆびさきと恋々',
			'A Sign of Affection',
		],
		[ 30 ],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			'tRomance',
			'tAdultCast',
			'tShoujo',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1452/139991',
		[
			'Kekkon Yubiwa Monogatari',
			'結婚指輪物語',
			'Tales of Wedding Rings',
		],
		[ 2405 ],
		'TV', 0, 2024, 'Manga', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tIsekai',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1207/140800',
		[
			'Momochi-san Chi no Ayakashi Ouji',
			'百千さん家のあやかし王子',
			'The Demon Prince of Momochi House',
		],
		[ 1967 ],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			'tSupernatural',
			'tRomance',
			'tMythology',
			'tShoujo',
		]
	),
	new Anime(
		'1733/140802',
		[
			'Chiyu Mahou no Machigatta Tsukaikata',
			'治癒魔法の間違った使い方',
			'The Wrong Way to Use Healing Magic',
		],
		[ 247, 2760 ],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tAdventure',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1008/140287',
		[
			'Nozomanu Fushi no Boukensha',
			'望まぬ不死の冒険者',
			'The Unwanted Undead Adventurer',
		],
		[ 957 ],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1624/139672',
		[
			'Sasaki to Pii-chan',
			'佐々木とピーちゃん',
			'Sasaki and Peeps',
		],
		[ 300 ],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1734/139673',
		[
			'Sokushi Cheat ga Saikyou sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga.',
			'即死チートが最強すぎて、異世界のやつらがまるで相手にならないんですが。',
			'My Instant Death Ability is So Overpowered, No One in This Other World Stands a Chance Against Me!',
		],
		[ 2037 ],
		'TV', 0, 2024, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
		]
	),
	new Anime(
		'1114/140805',
		[
			'Mato Seihei no Slave',
			'魔都精兵のスレイブ',
			'Chained Soldier',
		],
		[ 35 ],
		'TV', 0, 2024, 'Manga', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tShounen',
		]
	),
	new Anime(
		'1711/142478',
		[
			'Dungeon Meshi',
			'ダンジョン飯',
			'Delicious in Dungeon',
		],
		[ 803 ],
		'TV', 0, 2024, 'Manga', 1, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tGourmet',
			'tSeinen',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
			'tFavoriteEDVisual_1',
			'tFavoriteEDVisual_2',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1699/146979',
		[
			'Ishura 2nd Season',
			'異修羅 第2期',
		],
		[ 911 ],
		'TV', 0, 2025, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tGore',
			'tIsekai',
		]
	),
	new Anime(
		'1426/140122',
		[
			'Ishura',
			'異修羅',
		],
		[ 911 ],
		'TV', 0, 2024, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tGore',
			'tIsekai',
		]
	),
	new Anime(
		'1925/139564',
		[
			'Isekai de Mofumofu Nadenade suru Tame ni Ganbattemasu.',
			'異世界でもふもふなでなでするためにがんばってます。',
			'Fluffy Paradise',
		],
		[ 1264 ],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		]
	),
	new Anime(
		'1985/132227',
		[
			'Gokushufudou Season 2',
			'極主夫道',
			'The Way of the Househusband Season 2',
		],
		[ 7 ],
		'ONA', 0, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tGagHumor',
			'tOrganizedCrime',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1942/120785',
		[
			'Gokushufudou Part 2',
			'極主夫道',
			'The Way of the Househusband Part 2',
		],
		[ 7 ],
		'ONA', 3, 2021, 'Web manga', 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tGagHumor',
			'tOrganizedCrime',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1535/117726',
		[
			'Gokushufudou',
			'極主夫道',
			'The Way of the Househusband',
		],
		[ 7 ],
		'ONA', 1, 2021, 'Web manga', 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tGagHumor',
			'tOrganizedCrime',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1802/108501',
		[
			'Majo no Tabitabi',
			'魔女の旅々',
			'Wandering Witch: The Journey of Elaina',
		],
		[ 605 ],
		'TV', 3, 2020, 'Light novel', 1, 1,
		[
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1330/137476',
		[
			'Good Night World',
			'グッド・ナイト・ワールド',
		],
		[ 951 ],
		'ONA', 3, 2023, 'Web manga', 1, 1,
		[
			'tDrama',
			'tFantasy',
			'tPsychological',
			'tVideoGame',
		]
	),
	new Anime(
		'1025/147458',
		[
			'Kusuriya no Hitorigoto 2nd Season',
			'薬屋のひとりごと 第2期',
			'The Apothecary Diaries Season 2',
		],
		[ 28, 2705 ],
		'TV', 0, 2025, 'Light novel', 0, 0,
		[
			'tDrama',
			'tMystery',
			'tHistorical',
			'tMedical',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1708/138033',
		[
			'Kusuriya no Hitorigoto',
			'薬屋のひとりごと',
			'The Apothecary Diaries',
		],
		[ 28, 2705 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tDrama',
			'tMystery',
			'tHistorical',
			'tMedical',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_2',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1136/138410',
		[
			'Undead Unluck',
			'アンデッドアンラック',
		],
		[ 287 ],
		'TV', 3, 2023, 'Manga', 1, 1,
		[
			'tAction',
			'tComedy',
			'tSuperPower',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
			'tFavoriteEDSong_1',
			'tFavoriteEDVisual_1',
		]
	),
	new Anime(
		'1020/139134',
		[
			'Hoshikuzu Telepath',
			'星屑テレパス',
			'Stardust Telepath',
		],
		[ 418 ],
		'TV', 3, 2023, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tYuri',
			'tSuperPower',
			'tSchool',
			'tCGDCT',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1093/145470',
		[
			'Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo 2nd Season',
			'君のことが大大大大大好きな100人の彼女 2期',
			'The 100 Girlfriends Who Really, Really, Really, Really, Really Love You Season 2',
		],
		[ 1722 ],
		'TV', 0, 2025, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tParody',
			'tSchool',
			'tSeinen',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1812/136764',
		[
			'Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo',
			'君のことが大大大大大好きな100人の彼女',
			'The 100 Girlfriends Who Really, Really, Really, Really, Really Love You',
		],
		[ 1722 ],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tParody',
			'tSchool',
			'tSeinen',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1160/138465',
		[
			'Bokura no Ame-iro Protocol',
			'僕らの雨いろプロトコル',
			'Protocol: Rain',
		],
		[ 2314 ],
		'TV', 3, 2023, 'Original', 0, 1,
		[
			'tAction',
			'tVideoGame',
		]
	),
	new Anime(
		'1182/138184',
		[
			'Potion-danomi de Ikinobimasu!',
			'ポーション頼みで生き延びます!',
			'I Shall Survive Using Potions!',
		],
		[ 755 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tAdventure',
		]
	),
	new Anime(
		'1901/139910',
		[
			'Tearmoon Teikoku Monogatari: Dantoudai kara Hajimaru, Hime no Tensei Gyakuten Story',
			'ティアムーン帝国物語～断頭台から始まる、姫の転生逆転ストーリー～',
			'Tearmoon Empire',
		],
		[ 300 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tVillainess',
			'tTimeTravel',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1319/140965',
		[
			'Buta no Liver wa Kanetsu Shiro',
			'豚のレバーは加熱しろ',
			'Butareba -The Story of a Man Who Turned into a Pig-',
		],
		[ 439 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
		]
	),
	new Anime(
		'1363/139744',
		[
			'Kikansha no Mahou wa Tokubetsu desu',
			'帰還者の魔法は特別です',
			"A Returner's Magic Should Be Special",
		],
		[ 1874 ],
		'TV', 3, 2023, 'Web manga', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
			'tTimeTravel',
		]
	),
	new Anime(
		'1032/137893',
		[
			'Hikikomari Kyuuketsuki no Monmon',
			'ひきこまり吸血姫の悶々',
			'The Vexations of a Shut-In Vampire Princess',
		],
		[ 439 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tVampire',
			'tYuri',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1610/138189',
		[
			'Hametsu no Oukoku',
			'はめつのおうこく',
			'The Kingdoms of Ruin',
		],
		[ 1687 ],
		'TV', 3, 2023, 'Manga', 1, 1,
		[
			'tAction',
			'tDrama',
			'tFantasy',
			'tGore',
			'tShounen',
			'tSciFi',
		]
	),
	new Anime(
		'1848/140019',
		[
			'Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi.',
			'経験済みなキミと、 経験ゼロなオレが、 お付き合いする話。',
			'Our Dating Story: The Experienced You and The Inexperienced Me',
		],
		[ 1974 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'1194/138253',
		[
			'Yuzuki-san Chi no Yonkyoudai.',
			'柚木さんちの四兄弟。',
			"The Yuzuki Family's Four Sons",
		],
		[ 1119 ],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			'tSliceofLife',
			'tSchool',
			'tShoujo',
		]
	),
	new Anime(
		'1588/138395',
		[
			'16bit Sensation: Another Layer',
			'16bitセンセーション ANOTHER LAYER',
		],
		[ 1873 ],
		'TV', 3, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tOtakuCulture',
			'tTimeTravel',
			'tWorkplace',
			'tSciFi',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1720/139131',
		[
			'Konyaku Haki sareta Reijou wo Hirotta Ore ga, Ikenai Koto wo Oshiekomu',
			'婚約破棄された令嬢を拾った俺が、イケナイことを教え込む',
			"I'm Giving the Disgraced Noble Lady I Rescued a Crash Course in Naughtiness",
		],
		[ 1379, 1796 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1531/137711',
		[
			'Watashi no Oshi wa Akuyaku Reijou.',
			'私の推しは悪役令嬢。',
			"I'm in Love with the Villainess",
		],
		[ 1471 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tYuri',
			'tIsekai',
			'tSchool',
			'tVillainess',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1506/138529',
		[
			'Seiken Gakuin no Makentsukai',
			'聖剣学院の魔剣使い',
			'The Demon Sword Master of Excalibur Academy',
		],
		[ 911 ],
		'TV', 3, 2023, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tHarem',
			'tReincarnation',
			'tSchool',
		]
	),
	new Anime(
		'1233/138531',
		[
			'Toaru Ossan no VRMMO Katsudouki',
			'とあるおっさんのVRMMO活動記',
			"A Playthrough of a Certain Dude's VRMMO Life",
		],
		[ 1978 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tVideoGame',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1518/143558',
		[
			'Shy 2nd Season',
			'シャイ 東京奪還編',
			'Shy Season 2',
		],
		[ 441 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tDrama',
			'tSuperPower',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1114/136742',
		[
			'Shy',
			'シャイ',
		],
		[ 441 ],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			'tAction',
			'tDrama',
			'tSuperPower',
			'tShounen',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1951/138462',
		[
			'Boushoku no Berserk',
			'暴食のベルセルク',
			'Berserk of Gluttony',
		],
		[ 179 ],
		'TV', 3, 2023, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
		]
	),
	new Anime(
		'1918/138185',
		[
			'Dekoboko Majo no Oyako Jijou',
			'でこぼこ魔女の親子事情',
			'The Family Circumstances of the Irregular Witch',
		],
		[ 1257 ],
		'TV', 3, 2023, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tGagHumor',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1996/147601',
		[
			'Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su 2nd Season',
			'シャングリラ・フロンティア～クソゲーハンター、神ゲーに挑まんとす～ 2nd season',
			'Shangri-La Frontier Season 2',
		],
		[ 605 ],
		'TV', 3, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tVideoGame',
			'tShounen',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
			'tFavoriteEDSong_2',
			'tFavoriteEDVisual_2',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1500/139931',
		[
			'Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su',
			'シャングリラ・フロンティア～クソゲーハンター、神ゲーに挑まんとす～',
			'Shangri-La Frontier',
		],
		[ 605 ],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tVideoGame',
			'tShounen',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
			'tFavoriteEDSong_1',
			'tFavoriteEDSong_2',
			'tFavoriteEDVisual_1',
			'tFavoriteEDVisual_2',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1763/140359',
		[
			'Ragna Crimson',
			'ラグナクリムゾン',
		],
		[ 300 ],
		'TV', 3, 2023, 'Manga', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tShounen',
		]
	),
	new Anime(
		'1036/140549',
		[
			'Sousou no Frieren',
			'葬送のフリーレン',
			"Frieren: Beyond Journey's End",
		],
		[ 11 ],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tShounen',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_1',
			'tFavoriteEDSong',
			'tFavoriteEDVisual_1',
			'tFavoriteEDVisual_2',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1016/139805',
		[
			'Ojou to Banken-kun',
			'お嬢と番犬くん',
			'A Girl & Her Guard Dog',
		],
		[ 439 ],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tOrganizedCrime',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1563/139990',
		[
			'Boukensha ni Naritai to Miyako ni Deteitta Musume ga S-Rank ni Natteta',
			'冒険者になりたいと都に出て行った娘がSランクになってた',
			'My Daughter Left the Nest and Returned an S-Rank Adventurer',
		],
		[ 1340 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1329/135096',
		[
			'Shiro Seijo to Kuro Bokushi',
			'白聖女と黒牧師',
			'Saint Cecilia and Pastor Lawrence',
		],
		[ 95 ],
		'TV', 2, 2023, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1002/138524',
		[
			'Helck',
			'ヘルク',
		],
		[ 41 ],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			'tAction',
			'tFantasy',
		]
	),
	new Anime(
		'1346/138731',
		[
			'Dark Gathering',
			'ダークギャザリング',
		],
		[ 28 ],
		'TV', 2, 2023, 'Manga', 1, 1,
		[
			'tHorror',
			'tSupernatural',
			'tShounen',
		]
	),
	new Anime(
		'1179/136000',
		[
			'Eiyuu Kyoushitsu',
			'英雄教室',
			'Classroom for Heroes',
		],
		[ 60 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1384/136408',
		[
			'Zom 100: Zombie ni Naru made ni Shitai 100 no Koto',
			'ゾン100～ゾンビになるまでにしたい100のこと～',
			'Zom 100: Bucket List of the Dead',
		],
		[ 2674 ],
		'TV', 2, 2023, 'Manga', 1, 1,
		[
			'tAction',
			'tComedy',
			'tHorror',
			'tSupernatural',
			'tAdultCast',
			'tSurvival',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1927/138733',
		[
			'Temple Specials',
			'てんぷる',
			'TenPuru: No One Can Live on Loneliness Specials',
		],
		[ 2554 ],
		'TV', 3, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1879/136896',
		[
			'Temple',
			'てんぷる',
			'TenPuru: No One Can Live on Loneliness',
		],
		[ 2554 ],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1571/134525',
		[
			'Liar Liar',
			'ライアー・ライアー',
		],
		[ 1857 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tSuspense',
			'tPsychological',
			'tSchool',
			'tStrategyGame',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1579/136295',
		[
			'Level 1 dakedo Unique Skill de Saikyou desu',
			'レベル1だけどユニークスキルで最強です',
			'My Unique Skill Makes Me OP Even at Level 1',
		],
		[ 1978 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1074/136720',
		[
			'Dekiru Neko wa Kyou mo Yuuutsu',
			'デキる猫は今日も憂鬱',
			'The Masterful Cat Is Depressed Again Today',
		],
		[ 309 ],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tAdultCast',
			'tAnthropomorphic',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1706/136176',
		[
			'AI no Idenshi',
			'AIの遺電子',
			'The Gene of AI',
		],
		[ 11 ],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			'tDrama',
			'tSciFi',
			'tSuspense',
			'tPsychological',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1396/136273',
		[
			'Nanatsu no Maken ga Shihai suru',
			'七つの魔剣が支配する',
			'Reign of the Seven Spellblades',
		],
		[ 7 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
		]
	),
	new Anime(
		'1490/137816',
		[
			'Seija Musou: Salaryman, Isekai de Ikinokoru Tame ni Ayumu Michi',
			'聖者無双',
			'The Great Cleric',
		],
		[ 1687, 2600 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1722/135542',
		[
			'Higeki no Genkyou to Naru Saikyou Gedou Last Boss Joou wa Tami no Tame ni Tsukushimasu.',
			'悲劇の元凶となる最強外道ラスボス女王は民の為に尽くします。',
			'The Most Heretical Last Boss Queen: From Villainess to Savior',
		],
		[ 28 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tJosei',
		]
	),
	new Anime(
		'1946/136661',
		[
			'Undead Girl Murder Farce',
			'アンデッドガール・マーダーファルス',
			'Undead Murder Farce',
		],
		[ 1828 ],
		'TV', 2, 2023, 'Novel', 1, 1,
		[
			'tFantasy',
			'tMystery',
			'tDetective',
			'tHistorical',
			'tVampire',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1653/136097',
		[
			'Jidou Hanbaiki ni Umarekawatta Ore wa Meikyuu wo Samayou',
			'自動販売機に生まれ変わった俺は迷宮を彷徨う',
			'Reborn as a Vending Machine, Now I Wander the Dungeon',
		],
		[ 418, 1299 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		]
	),
	new Anime(
		'1946/146770',
		[
			'Watashi no Shiawase na Kekkon 2nd Season',
			'わたしの幸せな結婚',
			'My Happy Marriage Season 2',
		],
		[ 290 ],
		'TV', 0, 2025, 'Novel', 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tRomance',
			'tAdultCast',
			'tHistorical',
		]
	),
	new Anime(
		'1508/137052',
		[
			'Watashi no Shiawase na Kekkon: Watashi no Shiawase na Katachi',
			'わたしの幸せな結婚 わたしの 幸せのかたち',
			'My Happy Marriage: The Shape of My Happiness',
		],
		[ 290 ],
		'OVA', 0, 2024, 'Novel', 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tAdultCast',
			'tHistorical',
		]
	),
	new Anime(
		'1147/122444',
		[
			'Watashi no Shiawase na Kekkon',
			'わたしの幸せな結婚',
			'My Happy Marriage',
		],
		[ 290 ],
		'TV', 2, 2023, 'Novel', 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tRomance',
			'tAdultCast',
			'tHistorical',
		]
	),
	new Anime(
		'1582/136325',
		[
			'Suki na Ko ga Megane wo Wasureta',
			'好きな子がめがねを忘れた',
			'The Girl I Like Forgot Her Glasses',
		],
		[ 309 ],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1239/134810',
		[
			'Yumemiru Danshi wa Genjitsushugisha',
			'夢見る男子は現実主義者',
			'The Dreaming Boy is a Realist',
		],
		[ 418, 1299 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'1251/136232',
		[
			'Okashi na Tensei',
			'おかしな転生',
			'Sweet Reincarnation',
		],
		[ 118 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1879/136721',
		[
			'Lv1 Maou to One Room Yuusha',
			'Lv1魔王とワンルーム勇者',
			'Level 1 Demon Lord and One Room Hero',
		],
		[ 300, 1547 ],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
		]
	),
	new Anime(
		'1079/136949',
		[
			'Ryza no Atelier: Tokoyami no Joou to Himitsu no Kakurega',
			'ライザのアトリエ ~常闇の女王と秘密の隠れ家~',
			'Atelier Ryza: Ever Darkness & the Secret Hideout The Animation',
		],
		[ 839 ],
		'TV', 2, 2023, 'Game', 0, 1,
		[
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1984/136274',
		[
			'Uchi no Kaisha no Chiisai Senpai no Hanashi',
			'うちの会社の小さい先輩の話',
			'My Tiny Senpai',
		],
		[ 439 ],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAdultCast',
			'tWorkplace',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1406/136367',
		[
			'Ayaka',
			'AYAKA ‐あやか‐',
			'Ayaka: A Story of Bonds and Wounds',
		],
		[ 478 ],
		'TV', 2, 2023, 'Original', 0, 1,
		[
			'tFantasy',
			'tMythology',
		]
	),
	new Anime(
		'1496/136558',
		[
			'Jitsu wa Ore, Saikyou deshita?',
			'実は俺、最強でした?',
			'Am I Actually the Strongest?',
		],
		[ 2405 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		]
	),
	new Anime(
		'1208/133335',
		[
			'Genjitsu no Yohane: Sunshine in the Mirror',
			'幻日のヨハネ -SUNSHINE in the MIRROR-',
			'Yohane the Parhelion: Sunshine in the Mirror',
		],
		[ 14 ],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			'tFantasy',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'5/85435',
		[
			'Amagi Brilliant Park',
			'甘城ブリリアントパーク',
		],
		[ 2 ],
		'TV', 3, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tWorkplace',
		]
	),
	new Anime(
		'9/39303',
		[
			'Mashiro-iro Symphony: The Color of Lovers',
			'ましろ色シンフォニー -The color of lovers-',
			'Mashiroiro Symphony: The Color of Lovers',
		],
		[ 32 ],
		'TV', 3, 2011, 'Visual novel', 2, 1,
		[
			'tDrama',
			'tHarem',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'1997/127227',
		[
			'Niehime to Kemono no Ou',
			'贄姫と獣の王',
			'Sacrificial Princess and the King of Beasts',
		],
		[ 7 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tAnthropomorphic',
			'tShoujo',
		]
	),
	new Anime(
		'1832/133754',
		[
			'Ao no Orchestra',
			'青のオーケストラ',
			'The Blue Orchestra',
		],
		[ 22 ],
		'TV', 1, 2023, 'Web manga', 0, 1,
		[
			'tDrama',
			'tMusic',
			'tPerformingArts',
			'tSchool',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1006/143302',
		[
			'[Oshi no Ko] 2nd Season',
			'【推しの子】第2期',
		],
		[ 95 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tDrama',
			'tReincarnation',
			'tShowbiz',
			'tSeinen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1812/134736',
		[
			'[Oshi no Ko]',
			'【推しの子】',
		],
		[ 95 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tDrama',
			'tReincarnation',
			'tShowbiz',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1005/139809',
		[
			'Dead Mount Death Play Part 2',
			'デッドマウント・デスプレイ',
		],
		[ 1857 ],
		'TV', 3, 2023, 'Manga', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tReincarnation',
			'tSeinen',
			'tUrbanFantasy',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1930/133758',
		[
			'Dead Mount Death Play',
			'デッドマウント・デスプレイ',
		],
		[ 1857 ],
		'TV', 1, 2023, 'Manga', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tReincarnation',
			'tSeinen',
			'tUrbanFantasy',
		]
	),
	new Anime(
		'1109/130452',
		[
			'Kanojo ga Koushaku-tei ni Itta Riyuu',
			'彼女が公爵邸に行った理由',
			"The Reason Why Raeliana Ended up at the Duke's Mansion",
		],
		[ 1340 ],
		'TV', 1, 2023, 'Web manga', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tRomance',
		]
	),
	new Anime(
		'1402/134007',
		[
			'Kimi wa Houkago Insomnia',
			'君は放課後インソムニア',
			'Insomniacs After School',
		],
		[ 839 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1387/134151',
		[
			'Isekai Shoukan wa Nidome desu',
			'異世界召喚は二度目です',
			'Summoned to Another World for a Second Time',
		],
		[ 1521 ],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tRomance',
		]
	),
	new Anime(
		'1091/135041',
		[
			'Otonari ni Ginga',
			'おとなりに銀河',
			'A Galaxy Next Door',
		],
		[ 406 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tRomance',
			'tSupernatural',
			'tChildcare',
			'tOtakuCulture',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1332/134658',
		[
			'Kawaisugi Crisis',
			'カワイスギクライシス',
			'Too Cute Crisis',
		],
		[ 118 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tSciFi',
			'tPets',
			'tShounen',
		]
	),
	new Anime(
		'1606/141394',
		[
			'Megami no Café Terrace 2nd Season',
			'女神のカフェテラス 第2期',
			'The Café Terrace and Its Goddesses Season 2',
		],
		[ 200 ],
		'TV', 2, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tHarem',
			'tRomance',
			'tShounen',
			'tAdultCast',
		]
	),
	new Anime(
		'1963/136050',
		[
			'Megami no Café Terrace',
			'女神のカフェテラス',
			'The Café Terrace and Its Goddesses',
		],
		[ 200 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tHarem',
			'tRomance',
			'tShounen',
			'tAdultCast',
		]
	),
	new Anime(
		'1171/133777',
		[
			'Edomae Elf',
			'江戸前エルフ',
			'Otaku Elf',
		],
		[ 605 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tShounen',
			'tSupernatural',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1708/133360',
		[
			'Watashi no Yuri wa Oshigoto desu!',
			'私の百合はお仕事です！',
			'Yuri is My Job!',
		],
		[ 911, 1813 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tWorkplace',
			'tYuri',
		]
	),
	new Anime(
		'1250/135256',
		[
			'Isekai One Turn Kill Neesan: Ane Douhan no Isekai Seikatsu Hajimemashita',
			'異世界ワンターンキル姉さん ～姉同伴の異世界生活はじめました～',
			'My One-Hit Kill Sister',
		],
		[ 2554 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tSeinen',
		]
	),
	new Anime(
		'1846/140458',
		[
			'Mashle: Shinkakusha Kouho Senbatsu Shiken-hen',
			'マッシュル-MASHLE- 神覚者候補選抜試験編',
			'Mashle: Magic and Muscles - The Divine Visionary Candidate Exam Arc',
		],
		[ 56 ],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tGagHumor',
			'tParody',
			'tSchool',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1218/135107',
		[
			'Mashle',
			'マッシュル-MASHLE-',
			'Mashle: Magic and Muscles',
		],
		[ 56 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tGagHumor',
			'tParody',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1868/133866',
		[
			'Yuusha ga Shinda!',
			'勇者が死んだ！',
			'The Legendary Hero Is Dead!',
		],
		[ 839 ],
		'TV', 1, 2023, 'Web manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tParody',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1794/135148',
		[
			'Kaminaki Sekai no Kamisama Katsudou',
			'神無き世界のカミサマ活動',
			'KamiKatsu: Working for God in a Godless World',
		],
		[ 2201 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tEcchi',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tSeinen',
		]
	),
	new Anime(
		'1518/138730',
		[
			'Skip to Loafer',
			'スキップとローファー',
			'Skip and Loafer',
		],
		[ 132 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tDrama',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1316/134327',
		[
			'Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta',
			'異世界でチート能力を手にした俺は、現実世界をも無双する ～レベルアップは人生を変えた～',
			'I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too',
		],
		[ 1237 ],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tSchool',
		]
	),
	new Anime(
		'1350/133642',
		[
			'Jijou wo Shiranai Tenkousei ga Guigui Kuru.',
			'事情を知らない転校生がグイグイくる。',
			'My Clueless First Friend',
		],
		[ 1998 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1071/135255',
		[
			'Tensei Kizoku no Isekai Boukenroku: Jichou wo Shiranai Kamigami no Shito',
			'転生貴族の異世界冒険録～自重を知らない神々の使徒～',
			"The Aristocrat's Otherworldly Adventure: Serving Gods Who Go Too Far",
		],
		[ 207, 1264 ],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tReincarnation',
			'tRomance',
		]
	),
	new Anime(
		'1121/133132',
		[
			'Tengoku Daimakyou',
			'天国大魔境',
			'Heavenly Delusion',
		],
		[ 10 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tAdventure',
			'tMystery',
			'tSciFi',
			'tSurvival',
			'tSeinen',
		]
	),
	new Anime(
		'1643/138581',
		[
			'Boku no Kokoro no Yabai Yatsu Season 2',
			'僕の心のヤバイやつ 第2期',
			'The Dangers in My Heart Season 2',
		],
		[ 247 ],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1710/135998',
		[
			'Boku no Kokoro no Yabai Yatsu: Twi-Yaba',
			'僕の心のヤバイやつ ツイヤバ',
		],
		[ 247 ],
		'ONA', 3, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1545/133887',
		[
			'Boku no Kokoro no Yabai Yatsu',
			'僕の心のヤバイやつ',
			'The Dangers in My Heart',
		],
		[ 247 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1298/134178',
		[
			'Yamada-kun to Lv999 no Koi wo Suru',
			'山田くんとLv999の恋をする',
			'My Love Story with Yamada-kun at Lv999',
		],
		[ 11 ],
		'TV', 1, 2023, 'Web manga', 0, 1,
		[
			'tRomance',
			'tVideoGame',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1673/117409',
		[
			'Deatte 5-byou de Battle',
			'出会って5秒でバトル',
			'Battle Game in 5 Seconds',
		],
		[ 118, 136 ],
		'TV', 2, 2021, 'Web manga', 1, 1,
		[
			'tSupernatural',
			'tSuspense',
			'tHighStakesGame',
			'tStrategyGame',
			'tSuperPower',
			'tSurvival',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1429/95946',
		[
			'Akame ga Kill!',
			'アカメが斬る！',
		],
		[ 314 ],
		'TV', 2, 2014, 'Manga', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tShounen',
			'tSuperPower',
			'tGore',
		]
	),
	new Anime(
		'7/86665',
		[
			'Aho Girl',
			'アホガール',
		],
		[ 51 ],
		'TV', 2, 2017, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1472/93813',
		[
			"Knight's & Magic",
			'ナイツ&マジック',
		],
		[ 441 ],
		'TV', 2, 2017, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tMecha',
			'tReincarnation',
			'tSchool',
		]
	),
	new Anime(
		'1951/95080',
		[
			'Island',
		],
		[ 91 ],
		'TV', 2, 2018, 'Visual novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSciFi',
			'tHarem',
			'tTimeTravel',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1709/98068',
		[
			'Charlotte: Tsuyoimono-tachi',
			'Charlotte（シャーロット）特別篇 強い者たち',
			'Charlotte: The Strong Ones',
		],
		[ 132 ],
		'Special', 0, 2016, 'Original', 0, 1,
		[
			'tDrama',
			'tSchool',
			'tSuperPower',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'12/74683',
		[
			'Charlotte',
			'Charlotte（シャーロット）',
		],
		[ 132 ],
		'TV', 2, 2015, 'Original', 0, 1,
		[
			'tDrama',
			'tSchool',
			'tSuperPower',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1818/146584',
		[
			'Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season',
			'Re:ゼロから始める異世界生活',
			'Re:ZERO -Starting Life in Another World- Season 3',
		],
		[ 314 ],
		'TV', 3, 2024, 'Light novel', 1, 1,
		[
			'tDrama',
			'tFantasy',
			'tSuspense',
			'tIsekai',
			'tPsychological',
			'tTimeTravel',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1724/117421',
		[
			'Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2',
			'Re:ゼロから始める異世界生活',
			'Re:ZERO -Starting Life in Another World- Season 2 Part 2',
		],
		[ 314 ],
		'TV', 0, 2021, 'Light novel', 1, 1,
		[
			'tDrama',
			'tFantasy',
			'tSuspense',
			'tIsekai',
			'tPsychological',
			'tTimeTravel',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1444/108005',
		[
			'Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season',
			'Re:ゼロから始める異世界生活',
			'Re:ZERO -Starting Life in Another World- Season 2',
		],
		[ 314 ],
		'TV', 2, 2020, 'Light novel', 1, 1,
		[
			'tDrama',
			'tFantasy',
			'tSuspense',
			'tIsekai',
			'tPsychological',
			'tTimeTravel',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1238/104023',
		[
			'Re:Zero kara Hajimeru Isekai Seikatsu - Hyouketsu no Kizuna',
			'Re:ゼロから始める異世界生活『氷結の絆',
			'Re:ZERO -Starting Life in Another World- The Frozen Bond',
		],
		[ 314 ],
		'Movie', 3, 2019, 'Light novel', 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tSuspense',
			'tPsychological',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1773/109444',
		[
			'Re:Zero kara Hajimeru Isekai Seikatsu - Memory Snow',
			'Re:ゼロから始める異世界生活 Memory Snow',
			'Re:ZERO -Starting Life in Another World- Memory Snow',
		],
		[ 314 ],
		'Movie', 3, 2018, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1522/128039',
		[
			'Re:Zero kara Hajimeru Isekai Seikatsu',
			'Re:ゼロから始める異世界生活',
			'Re:ZERO -Starting Life in Another World',
		],
		[ 314 ],
		'TV', 1, 2016, 'Light novel', 1, 1,
		[
			'tDrama',
			'tFantasy',
			'tSuspense',
			'tIsekai',
			'tPsychological',
			'tTimeTravel',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'6/89687',
		[
			'Busou Shoujo Machiavellianism: Doki! "Goken-darake" no Ian Ryokou',
			'武装少女マキャヴェリズム ドキッ！「五剣だらけ」の慰安旅行',
		],
		[ 300, 957 ],
		'OVA', 3, 2017, 'Manga', 0, 1,
		[
			'tAction',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'3/83995',
		[
			'Busou Shoujo Machiavellianism',
			'武装少女マキャヴェリズム',
			"Armed Girl's Machiavellism",
		],
		[ 300, 957 ],
		'TV', 1, 2017, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tMartialArts',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1880/101146',
		[
			'Tenki no Ko',
			'天気の子',
			'Weathering with You',
		],
		[ 291 ],
		'Movie', 2, 2019, 'Original', 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1224/132328',
		[
			'Kaiko sareta Ankoku Heishi (30-dai) no Slow na Second Life',
			'解雇された暗黒兵士（30代）のスローなセカンドライフ',
			"Chillin' in My 30s after Getting Fired from the Demon King's Army",
		],
		[ 354 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
		]
	),
	new Anime(
		'1078/131921',
		[
			'Ayakashi Triangle',
			'あやかしトライアングル',
		],
		[ 957 ],
		'TV', 0, 2023, 'Manga', 2, 1,
		[
			'tAction',
			'tComedy',
			'tEcchi',
			'tGenben',
			'tMythology',
			'tRomance',
			'tShounen',
			'tSupernatural',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1818/132330',
		[
			'Kubo-san wa Mob wo Yurusanai',
			'久保さんは僕を許さない',
			"Kubo Won't Let Me Be Invisible",
		],
		[ 1295 ],
		'TV', 0, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1661/131889',
		[
			'Tondemo Skill de Isekai Hourou Meshi',
			'とんでもスキルで異世界放浪メシ',
			'Campfire Cooking in Another World with My Absurd Skill',
		],
		[ 569 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tGourmet',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1111/135927',
		[
			'Mononogatari 2nd Season',
			'もののがたり 第二章',
		],
		[ 1258 ],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tAdultCast',
			'tMythology',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1173/131830',
		[
			'Mononogatari',
			'もののがたり',
			'Malevolent Spirits: Mononogatari',
		],
		[ 1258 ],
		'TV', 0, 2023, 'Manga', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tAdultCast',
			'tMythology',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1087/129002',
		[
			'Nokemono-tachi no Yoru',
			'ノケモノたちの夜',
			'The Tale of Outcasts',
		],
		[ 242 ],
		'TV', 0, 2023, 'Manga', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tAnthropomorphic',
			'tHistorical',
			'tShounen',
		]
	),
	new Anime(
		'1044/129594',
		[
			'Eiyuuou, Bu wo Kiwameru Tame Tenseisu: Soshite, Sekai Saikyou no Minarai Kishi♀',
			'英雄王、武を極めるため転生す ～そして、世界最強の見習い騎士♀～',
			'Reborn to Master the Blade: From Hero-King to Extraordinary Squire ♀',
		],
		[ 126 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tGenben',
			'tReincarnation',
		]
	),
	new Anime(
		'1122/96435',
		[
			'Koe no Katachi',
			'聲の形',
			'A Silent Voice',
		],
		[ 2 ],
		'Movie', 2, 2016, 'Manga', 0, 1,
		[
			'tDrama',
			'tLoveStatusQuo',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1417/112991',
		[
			'Byousoku 5 Centimeter',
			'秒速５センチメートル',
			'5 Centimeters Per Second',
		],
		[ 291 ],
		'Movie', 0, 2007, 'Original', 0, 1,
		[
			'tDrama',
			'tRomance',
		]
	),
	new Anime(
		'1805/132335',
		[
			'Benriya Saitou-san, Isekai ni Iku',
			'便利屋斎藤さん、異世界に行く',
			'Handyman Saitou in Another World',
		],
		[ 605 ],
		'TV', 0, 2023, 'Web manga', 1, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1890/131473',
		[
			'Rougo ni Sonaete Isekai de 8-manmai no Kinka wo Tamemasu',
			'老後に備えて異世界で８万枚の金貨を貯めます',
			'Saving 80,000 Gold in Another World for My Retirement',
		],
		[ 1440 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
		]
	),
	new Anime(
		'1547/125900',
		[
			'Saikyou Onmyouji no Isekai Tenseiki',
			'最強陰陽師の異世界転生記',
			'The Reincarnation of the Strongest Exorcist in Another World',
		],
		[ 478 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		]
	),
	new Anime(
		'12/73984',
		[
			'Ben-To',
			'ベン・トー',
		],
		[ 287 ],
		'TV', 3, 2011, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tGourmet',
			'tMartialArts',
		]
	),
	new Anime(
		'1240/133638',
		[
			'Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken',
			'お隣の天使様にいつの間にか駄目人間にされていた件',
			'The Angel Next Door Spoils Me Rotten',
		],
		[ 439 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1553/133767',
		[
			'Buddy Daddies',
		],
		[ 132 ],
		'TV', 0, 2023, 'Original', 0, 1,
		[
			'tAction',
			'tComedy',
			'tChildcare',
			'tOrganizedCrime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1866/133949',
		[
			'Ars no Kyojuu',
			'アルスの巨獣',
			'Giant Beasts of Ars',
		],
		[ 406 ],
		'TV', 0, 2023, 'Original', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1997/131327',
		[
			'Tsundere Akuyaku Reijou Liselotte to Jikkyou no Endou-kun to Kaisetsu no Kobayashi-san',
			'ツンデレ悪役令嬢リーゼロッテと実況の遠藤くんと解説の小林さん',
			'Endo and Kobayashi Live! The Latest on Tsundere Villainess Lieselotte',
		],
		[ 200 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tVideoGame',
			'tRomance',
		]
	),
	new Anime(
		'1884/131748',
		[
			'Revenger',
			'リベンジャー',
		],
		[ 30 ],
		'TV', 0, 2023, 'Original', 1, 1,
		[
			'tAction',
			'tDrama',
			'tMystery',
			'tAdultCast',
			'tHistorical',
			'tOrganizedCrime',
			'tSamurai',
		]
	),
	new Anime(
		'1693/138042',
		[
			'Sugar Apple Fairy Tale Part 2',
			'シュガーアップル・フェアリーテイル',
		],
		[ 7 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tRomance',
			'tVisualArts',
			'tShoujo',
		]
	),
	new Anime(
		'1897/131300',
		[
			'Sugar Apple Fairy Tale',
			'シュガーアップル・フェアリーテイル',
		],
		[ 7 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tRomance',
			'tVisualArts',
			'tShoujo',
		]
	),
	new Anime(
		'1983/132329',
		[
			'Isekai Nonbiri Nouka',
			'異世界のんびり農家',
			'Farming Life in Another World',
		],
		[ 1379 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tSliceofLife',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1058/131632',
		[
			'Oniichan wa Oshimai!',
			'お兄ちゃんはおしまい！',
			"Onimai: I'm Now Your Sister!",
		],
		[ 1993 ],
		'TV', 0, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tCGDCT',
			'tGenben',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1049/131580',
		[
			'Hyouken no Majutsushi ga Sekai wo Suberu',
			'冰剣の魔術師が世界を統べる',
			'The Iceblade Sorcerer Shall Rule the World',
		],
		[ 2600 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
		]
	),
	new Anime(
		'1317/136666',
		[
			'Spy Kyoushitsu 2nd Season',
			'スパイ教室',
			'Spy Classroom Season 2',
		],
		[ 91 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tMystery',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1491/132864',
		[
			'Spy Kyoushitsu',
			'スパイ教室',
			'Spy Classroom',
		],
		[ 91 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tMystery',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1444/131828',
		[
			'Tomo-chan wa Onnanoko!',
			'トモちゃんは女の子！',
			'Tomo-chan Is a Girl!',
		],
		[ 1087 ],
		'TV', 0, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1189/111994',
		[
			'Tanaka-kun wa Itsumo Kedaruge',
			'田中くんはいつもけだるげ',
			'Tanaka-kun is Always Listless',
		],
		[ 300 ],
		'TV', 1, 2016, 'Web manga', 0, 1,
		[
			'tIyashikei',
			'tSchool',
			'tSliceofLife',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1453/132695',
		[
			'Inu ni Nattara Suki na Hito ni Hirowareta. Specials',
			'犬になったら好きな人に拾われた。OVA',
		],
		[ 2314 ],
		'Special', 0, 2023, 'Web manga', 2, 1,
		[
			'tComedy',
			'tEcchi',
		]
	),
	new Anime(
		'1832/132333',
		[
			'Inu ni Nattara Suki na Hito ni Hirowareta.',
			'犬になったら好きな人に拾われた。',
			"My Life as Inukai-san's Dog",
		],
		[ 2314 ],
		'TV', 0, 2023, 'Web manga', 2, 1,
		[
			'tComedy',
			'tEcchi',
		]
	),
	new Anime(
		'1927/132758',
		[
			'Koori Zokusei Danshi to Cool na Douryou Joshi',
			'氷属性男子とクールな同僚女子',
			'The Ice Guy and His Cool Female Colleague',
		],
		[ 1379, 2527 ],
		'TV', 0, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tAdultCast',
			'tMythology',
			'tWorkplace',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1053/129004',
		[
			'Tensei Oujo to Tensai Reijou no Mahou Kakumei',
			'転生王女と天才令嬢の魔法革命',
			'The Magical Revolution of the Reincarnated Princess and the Genius Young Lady',
		],
		[ 51 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tYuri',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1446/131578',
		[
			'Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu',
			'人間不信の冒険者たちが世界を救うようです',
			"Ningen Fushin: Adventurers Who Don't Believe in Humanity Will Save the World",
		],
		[ 1857 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'10/89671',
		[
			'Himouto! Umaru-chan R',
			'干物妹！うまるちゃんR',
		],
		[ 95 ],
		'TV', 3, 2017, 'Manga', 0, 1,
		[
			'tComedy',
			'tOtakuCulture',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'7/76826',
		[
			'Himouto! Umaru-chan OVA',
			'干物妹！うまるちゃん OVA',
		],
		[ 95 ],
		'OVA', 3, 2015, 'Manga', 0, 1,
		[
			'tComedy',
			'tOtakuCulture',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'12/75086',
		[
			'Himouto! Umaru-chan',
			'干物妹！うまるちゃん',
		],
		[ 95 ],
		'TV', 2, 2015, 'Manga', 0, 1,
		[
			'tComedy',
			'tOtakuCulture',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1854/121605',
		[
			'Isekai Quartet Movie: Another World',
			'劇場版 異世界かるてっと ～あなざーわーるど～',
		],
		[ 443 ],
		'Movie', 1, 2022, 'Original', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1030/103383',
		[
			'Isekai Quartet 2',
			'異世界かるてっと2',
		],
		[ 443 ],
		'TV', 0, 2020, 'Original', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1965/99667',
		[
			'Isekai Quartet',
			'異世界かるてっと',
		],
		[ 443 ],
		'TV', 1, 2019, 'Original', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/84858',
		[
			'Hinako Note',
			'ひなこのーと',
		],
		[ 911 ],
		'TV', 1, 2017, '4-koma	manga', 0, 1,
		[
			'tComedy',
			'tSliceofLife',
			'tCGDCT',
			'tPerformingArts',
		]
	),
	new Anime(
		'6/74156',
		[
			'Shigatsu wa Kimi no Uso: Moments',
			'四月は君の嘘 MOMENTS',
			'Your Lie in April: Moments',
		],
		[ 56 ],
		'OVA', 1, 2015, 'Manga', 0, 1,
		[
			'tMusic',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/72831',
		[
			'Shigatsu wa Kimi no Uso',
			'四月は君の嘘',
			'Your Lie in April',
		],
		[ 56 ],
		'TV', 3, 2014, 'Manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tLovePolygon',
			'tMusic',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/89690',
		[
			'Gabriel DropOut Specials',
			'ガヴリールドロップアウトOVA',
		],
		[ 95 ],
		'Special', 0, 2017, 'Manga', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tCGDCT',
			'tMythology',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'9/82590',
		[
			'Gabriel DropOut',
			'ガヴリールドロップアウト',
		],
		[ 95 ],
		'TV', 0, 2017, 'Manga', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tCGDCT',
			'tMythology',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'6/88286',
		[
			'Blend S',
			'ブレンド・S',
			'BLEND-S',
		],
		[ 56 ],
		'TV', 3, 2017, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tOtakuCulture',
			'tLoveStatusQuo',
			'tWorkplace',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1302/94882',
		[
			'Grand Blue',
			'ぐらんぶる',
			'Grand Blue Dreaming',
		],
		[ 1379 ],
		'TV', 2, 2018, 'Manga', 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1755/98075',
		[
			'Kokoro Connect: Michi Random',
			'ココロコネクト ミチランダム',
			'Kokoro Connect OVA',
		],
		[ 300 ],
		'Special', 3, 2012, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tSupernatural',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/39665',
		[
			'Kokoro Connect',
			'ココロコネクト',
		],
		[ 300 ],
		'TV', 2, 2012, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tSupernatural',
			'tLovePolygon',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1419/140614',
		[
			'Shoujo-tachi wa Kouya wo Mezasu: Iubeki Monokashira',
			'少女たちは荒野を目指す 言うべきものかしら',
		],
		[ 271, 439 ],
		'OVA', 0, 2016, 'Visual novel', 0, 1,
		[
			'tSchool',
			'tOtakuCulture',
		]
	),
	new Anime(
		'4/77837',
		[
			'Shoujo-tachi wa Kouya wo Mezasu',
			'少女たちは荒野を目指す',
			'Girls Beyond the Wasteland',
		],
		[ 439 ],
		'TV', 0, 2016, 'Visual novel', 0, 1,
		[
			'tSchool',
			'tOtakuCulture',
		]
	),
	new Anime(
		'3/83000',
		[
			'Koi to Senkyo to Chocolate: Koi Imouto!',
			'恋と選挙とチョコレート 第13話「恋妹！」',
		],
		[ 436 ],
		'Special', 0, 2013, 'Visual novel', 0, 1,
		[
			'tDrama',
			'tHarem',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'4/42015',
		[
			'Koi to Senkyo to Chocolate',
			'恋と選挙とチョコレート',
			'Love, Election and Chocolate',
		],
		[ 436 ],
		'TV', 2, 2012, 'Visual novel', 0, 1,
		[
			'tDrama',
			'tHarem',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'5/56525',
		[
			'Machine-Doll wa Kizutsukanai Specials',
			'機巧少女は傷つかない',
			'Unbreakable Machine-Doll Special',
		],
		[ 456 ],
		'Special', 3, 2013, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'7/52801',
		[
			'Machine-Doll wa Kizutsukanai',
			'機巧少女〈マシンドール〉は傷つかない',
			'Unbreakable Machine-Doll',
		],
		[ 456 ],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tSchool',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1464/112501',
		[
			'Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru OVA',
			'俺の脳内選択肢が、学園ラブコメを全力で邪魔している OAD',
			'My Mental Choices Are Completely Interfering With My School Romantic Comedy OVA',
		],
		[ 51 ],
		'OVA', 1, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tHarem',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'9/55831',
		[
			'Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru',
			'俺の脳内選択肢が、学園ラブコメを全力で邪魔している',
			'My Mental Choices Are Completely Interfering With My School Romantic Comedy',
		],
		[ 51 ],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tHarem',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'12/74014',
		[
			'Nogizaka Haruka no Himitsu Finale ♪',
			'乃木坂春香の秘密 ふぃな～れ♪',
			"Haruka Nogizaka's Secret Finale",
		],
		[ 51 ],
		'OVA', 2, 2012, 'Light novel', 0, 1,
		[
			'tComedy',
			'tSchool',
		]
	),
	new Anime(
		'10/74013',
		[
			'Nogizaka Haruka no Himitsu Purezza ♪',
			'乃木坂春香の秘密ぴゃあれっつぁ♪',
			"Haruka Nogizaka's Secret Purezza",
		],
		[ 51 ],
		'TV', 3, 2009, 'Light novel', 0, 1,
		[
			'tComedy',
			'tSchool',
		]
	),
	new Anime(
		'11/56965',
		[
			'Nogizaka Haruka no Himitsu',
			'乃木坂春香の秘密',
			"Haruka Nogizaka's Secret",
		],
		[ 51 ],
		'TV', 2, 2008, 'Light novel', 0, 1,
		[
			'tComedy',
			'tSchool',
		]
	),
	new Anime(
		'1756/104652',
		[
			'Toradora!: Bentou no Gokui',
			'とらドラ！ 弁当の極意',
			'Toradora!: Bento Battle',
		],
		[ 7 ],
		'Special', 3, 2011, 'Light novel', 0, 1,
		[
			'tComedy',
			'tGourmet',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1242/123508',
		[
			'Toradora!: SOS! Kuishinbou Banbanzai',
			'とらドラ! SOS! 食いしん坊万々歳',
			'Toradora!: SOS! Hurray for Gourmands',
		],
		[ 7 ],
		'Special', 0, 2009, 'Light novel', 0, 1,
		[
			'tComedy',
			'tGourmet',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'13/22128',
		[
			'Toradora!',
			'とらドラ！',
		],
		[ 7 ],
		'TV', 3, 2008, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'4/43643',
		[
			'Sakura-sou no Pet na Kanojo',
			'さくら荘のペットな彼女',
			'The Pet Girl of Sakurasou',
		],
		[ 7 ],
		'TV', 3, 2012, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tVisualArts',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1934/128719',
		[
			'4-nin wa Sorezore Uso wo Tsuku',
			'４人はそれぞれウソをつく',
			'The Little Lies We All Tell',
		],
		[ 1693 ],
		'TV', 3, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tSchool',
			'tShounen',
			'tSupernatural',
			'tSuperPower',
			'tGagHumor',
		]
	),
	new Anime(
		'1423/122029',
		[
			'Shokei Shoujo no Virgin Road',
			'処刑少女の生きる道〈バージンロード〉',
			'The Executioner and Her Way of Life',
		],
		[ 7 ],
		'TV', 1, 2022, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		]
	),
	new Anime(
		'3/84603',
		[
			'Mangaka-san to Assistant-san to The Animation Specials',
			'マンガ家さんとアシスタントさんと THE ANIMATION',
		],
		[ 218 ],
		'TV', 1, 2014, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tHarem',
			'tSeinen',
		]
	),
	new Anime(
		'11/62219',
		[
			'Mangaka-san to Assistant-san to The Animation',
			'マンガ家さんとアシスタントさんと THE ANIMATION',
			'The Comic Artist and His Assistants',
		],
		[ 218 ],
		'TV', 1, 2014, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tHarem',
			'tSeinen',
		]
	),
	new Anime(
		'1256/128714',
		[
			'Mushikaburi-hime',
			'虫かぶり姫',
			'Bibliophile Princess',
		],
		[ 11 ],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tJosei',
			'tRomance',
		]
	),
	new Anime(
		'1614/90408',
		[
			'Darling in the FranXX',
			'ダーリン・イン・ザ・フランキス',
		],
		[ 56, 803, 1835 ],
		'TV', 0, 2018, 'Original', 0, 1,
		[
			'tAction',
			'tDrama',
			'tRomance',
			'tSciFi',
			'tMecha',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1208/120085',
		[
			'Strike the Blood Final',
			'ストライク・ザ・ブラッドFINAL',
		],
		[ 957 ],
		'OVA', 0, 2022, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
		]
	),
	new Anime(
		'1692/116875',
		[
			'Strike the Blood IV',
			'ストライク・ザ・ブラッド IV',
		],
		[ 957 ],
		'OVA', 1, 2020, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
		]
	),
	new Anime(
		'1918/103377',
		[
			'Strike the Blood: Kieta Seisou-hen',
			'ストライク・ザ・ブラッド 消えた聖槍篇',
		],
		[ 957 ],
		'OVA', 0, 2020, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
		]
	),
	new Anime(
		'1768/111676',
		[
			'Strike the Blood III',
			'ストライク・ザ・ブラッドⅢ',
		],
		[ 957 ],
		'OVA', 3, 2018, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
		]
	),
	new Anime(
		'1600/111675',
		[
			'Strike the Blood II',
			'ストライク・ザ・ブラッドⅡ',
			'Strike the Blood Second',
		],
		[ 300, 957 ],
		'OVA', 3, 2016, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
		]
	),
	new Anime(
		'12/77275',
		[
			'Strike the Blood: Valkyria no Oukoku-hen',
			'ストライク・ザ・ブラッド　ヴァルキュリアの王国篇',
			'Strike the Blood: Kingdom of the Valkyria',
		],
		[ 271, 300, 957 ],
		'TV', 3, 2015, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
		]
	),
	new Anime(
		'5/56163',
		[
			'Strike the Blood',
			'ストライク・ザ・ブラッド',
		],
		[ 300, 957 ],
		'TV', 3, 2013, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tVampire',
		]
	),
	new Anime(
		'8/56413',
		[
			'Freezing Vibration Specials',
			'震えちゃう❤フリージング ヴァイブレーションOVA',
		],
		[ 179 ],
		'Special', 3, 2013, 'Light novel', 2, 1,
		[
			'tAction',
			'tComedy',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tMilitary',
		]
	),
	new Anime(
		'3/68195',
		[
			'Freezing Vibration',
			'フリージング ヴァイブレーション',
		],
		[ 179 ],
		'TV', 3, 2013, 'Manga', 2, 1,
		[
			'tAction',
			'tDrama',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tMilitary',
			'tSuperPower',
			'tSeinen',
		]
	),
	new Anime(
		'2/28086',
		[
			'Freezing Specials',
			'はじけちゃう! ドキドキトラブルフリージング',
		],
		[ 179 ],
		'Special', 0, 2011, 'Manga', 2, 1,
		[
			'tAction',
			'tComedy',
			'tEcchi',
		]
	),
	new Anime(
		'10/28535',
		[
			'Freezing',
			'フリージング',
		],
		[ 179 ],
		'TV', 0, 2011, 'Manga', 2, 1,
		[
			'tAction',
			'tDrama',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tMilitary',
			'tSuperPower',
			'tSeinen',
		]
	),
	new Anime(
		'11/22525',
		[
			'Omamori Himari',
			'おまもりひまり',
		],
		[ 218 ],
		'TV', 0, 2010, 'Manga', 2, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tMythology',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1271/90136',
		[
			'Koi wa Ameagari no You ni',
			'恋は雨上がりのように',
			'After the Rain',
		],
		[ 858 ],
		'TV', 0, 2018, 'Manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tWorkplace',
			'tSeinen',
		]
	),
	new Anime(
		'5/76216',
		[
			'Yosuga no Sora: In Solitude, Where We Are Least Alone.',
			'ヨスガノソラ In solitude, where we are least alone.',
			'Yosuga no Sora',
		],
		[ 91 ],
		'TV', 3, 2010, 'Visual novel', 2, 1,
		[
			'tDrama',
			'tRomance',
			'tHarem',
			'tErotica',
		]
	),
	new Anime(
		'3/64911',
		[
			'Madan no Ou to Vanadis',
			'魔弾の王と戦姫 (ヴァナディース)',
			'Lord Marksman and Vanadis',
		],
		[ 41 ],
		'TV', 3, 2014, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tMilitary',
		]
	),
	new Anime(
		'7/71769',
		[
			'Seiken Tsukai no World Break',
			'聖剣使いの禁呪詠唱〈ワールドブレイク〉',
			'World Break: Aria of Curse for a Holy Swordsman',
		],
		[ 51 ],
		'TV', 0, 2015, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tReincarnation',
			'tSchool',
		]
	),
	new Anime(
		'6/76211',
		[
			'Taimadou Gakuen 35 Shiken Shoutai',
			'対魔導学園35試験小隊',
			'AntiMagic Academy 35th Test Platoon',
		],
		[ 300 ],
		'TV', 3, 2015, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tMilitary',
		]
	),
	new Anime(
		'12/76664',
		[
			'Saijaku Muhai no Bahamut',
			'最弱無敗の神装機竜《バハムート》',
			'Undefeated Bahamut Chronicle',
		],
		[ 456 ],
		'TV', 0, 2016, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tMecha',
			'tSchool',
		]
	),
	new Anime(
		'1718/98214',
		[
			'Midara na Ao-chan wa Benkyou ga Dekinai',
			'淫らな青ちゃんは勉強ができない',
			"Ao-chan Can't Study!",
		],
		[ 300 ],
		'TV', 1, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1849/95019',
		[
			'Conception',
			'CONCEPTION（コンセプション）',
		],
		[ 3 ],
		'TV', 3, 2018, 'Game', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tParody',
		]
	),
	new Anime(
		'1465/121561',
		[
			'Seiren',
			'セイレン',
		],
		[ 418, 1299 ],
		'TV', 0, 2017, 'Original', 0, 1,
		[
			'tRomance',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'10/88234',
		[
			'Just Because!',
		],
		[ 1295 ],
		'TV', 3, 2017, 'Original', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tLovePolygon',
		]
	),
	new Anime(
		'1471/93329',
		[
			'Devils Line: Anytime Anywhere',
			'デビルズライン エニタイム エニウェア',
		],
		[ 1471 ],
		'OVA', 2, 2018, 'Manga', 1, 1,
		[
			'tAction',
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tAdultCast',
			'tVampire',
			'tSeinen',
		]
	),
	new Anime(
		'1053/98838',
		[
			'Devils Line',
			'デビルズライン',
			"Devils' Line",
		],
		[ 1471 ],
		'TV', 1, 2018, 'Manga', 1, 1,
		[
			'tAction',
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tAdultCast',
			'tVampire',
			'tSeinen',
		]
	),
	new Anime(
		'6/21655',
		[
			'Ladies versus Butlers! Specials',
			'れでぃ×ばと!',
		],
		[ 27 ],
		'Special', 0, 2010, 'Light novel', 2, 1,
		[
			'tEcchi',
		]
	),
	new Anime(
		'7/75252',
		[
			'Ladies versus Butlers!',
			'れでぃ×ばと!',
		],
		[ 27 ],
		'TV', 0, 2010, 'Light novel', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'13/75662',
		[
			'Campione! Matsurowanu Kamigami to Kamigoroshi no Maou',
			'カンピオーネ！ ～まつろわぬ神々と神殺しの魔王～',
			'Campione!',
		],
		[ 51 ],
		'TV', 2, 2012, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tMythology',
		]
	),
	new Anime(
		'7/62209',
		[
			'Maken-Ki! Two Specials',
			'マケン姫っ！通 Ｐ～私事',
		],
		[ 27 ],
		'Special', 0, 2014, 'Manga', 2, 1,
		[
			'tEcchi',
			'tShounen',
		]
	),
	new Anime(
		'10/58191',
		[
			'Maken-Ki! Two',
			'マケン姫っ！通',
		],
		[ 27 ],
		'TV', 0, 2014, 'Manga', 2, 1,
		[
			'tAction',
			'tEcchi',
			'tHarem',
			'tMartialArts',
			'tSchool',
			'tSuperPower',
			'tShounen',
		]
	),
	new Anime(
		'7/36929',
		[
			'Maken-Ki! OVA',
			'マケン姫っ！ OVA',
		],
		[ 83 ],
		'OVA', 0, 2012, 'Manga', 2, 1,
		[
			'tAction',
			'tEcchi',
			'tHarem',
			'tMartialArts',
			'tSchool',
			'tSuperPower',
		]
	),
	new Anime(
		'1832/121753',
		[
			'Maken-Ki! Specials',
			'マケン姫っ！ ドキドキッ！',
			'Maken-Ki! Secret Training',
		],
		[ 83 ],
		'Special', 3, 2011, 'Manga', 2, 1,
		[
			'tSports',
			'tEcchi',
			'tShounen',
		]
	),
	new Anime(
		'1215/123362',
		[
			'Maken-Ki!',
			'マケン姫っ！',
		],
		[ 83 ],
		'TV', 3, 2011, 'Manga', 2, 1,
		[
			'tAction',
			'tEcchi',
			'tHarem',
			'tMartialArts',
			'tSchool',
			'tSuperPower',
			'tShounen',
		]
	),
	new Anime(
		'4/43515',
		[
			'Kore wa Zombie desu ka? of the Dead: Hai, Minotake ni Attemasu',
			'これはゾンビですか? OF THE DEAD 「はい、身の丈に合ってます」',
			'Is This a Zombie? Of the Dead OVA',
		],
		[ 37 ],
		'OVA', 3, 2012, 'Light novel', 1, 1,
		[
			'tAction',
			'tComedy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
		]
	),
	new Anime(
		'4/37451',
		[
			'Kore wa Zombie desu ka? of the Dead',
			'これはゾンビですか? OF THE DEAD',
			'Is this A Zombie? of the Dead',
		],
		[ 37 ],
		'TV', 1, 2012, 'Light novel', 1, 1,
		[
			'tAction',
			'tComedy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
		]
	),
	new Anime(
		'2/38589',
		[
			'Kore wa Zombie desu ka? OVA',
			'これはゾンビですか? OVA',
			'Is This a Zombie? OVA',
		],
		[ 37 ],
		'OVA', 1, 2011, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
		]
	),
	new Anime(
		'13/75521',
		[
			'Kore wa Zombie desu ka?',
			'これはゾンビですか?',
			'Is This a Zombie?',
		],
		[ 37 ],
		'TV', 0, 2011, 'Light novel', 1, 1,
		[
			'tAction',
			'tComedy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
		]
	),
	new Anime(
		'9/62845',
		[
			'Seitokai no Ichizon Lv.2: Watasu Seitokai',
			'生徒会の一存 Lv.2 渡す生徒会',
		],
		[ 48 ],
		'OVA', 2, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tHarem',
			'tParody',
			'tSchool',
		]
	),
	new Anime(
		'13/75645',
		[
			'Seitokai no Ichizon Lv.2',
			'生徒会の一存 Lv.2',
			"Student Council's Discretion Level 2",
		],
		[ 48 ],
		'ONA', 3, 2012, 'Light novel', 0, 1,
		[
			'tComedy',
			'tHarem',
			'tParody',
			'tSchool',
		]
	),
	new Anime(
		'7/19646',
		[
			'Seitokai no Ichizon',
			'生徒会の一存',
			"Student Council's Discretion",
		],
		[ 37 ],
		'TV', 3, 2009, 'Light novel', 0, 1,
		[
			'tComedy',
			'tHarem',
			'tParody',
			'tSchool',
		]
	),
	new Anime(
		'2/62655',
		[
			'Rokujouma no Shinryakusha!?',
			'六畳間の侵略者！？',
			'Invaders of the Rokujyoma!?',
		],
		[ 300 ],
		'TV', 2, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'1660/121553',
		[
			'Kiss x Sis',
			'キスシス',
		],
		[ 91 ],
		'TV', 1, 2010, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tErotica',
			'tHarem',
			'tSchool',
			'tSeinen',
		]
	),
	new Anime(
		'1323/108709',
		[
			'IS: Infinite Stratos 2 - Infinite Wedding',
			'IS〈インフィニット・ストラトス〉2 インフィニット・ウエディング',
		],
		[ 441 ],
		'Special', 1, 2016, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
		]
	),
	new Anime(
		'9/67545',
		[
			'IS: Infinite Stratos 2 - World Purge-hen',
			'IS〈インフィニット・ストラトス〉2　ワールド・パージ編',
		],
		[ 441 ],
		'OVA', 3, 2014, 'Light novel', 2, 1,
		[
			'tAction',
			'tComedy',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tMecha',
		]
	),
	new Anime(
		'7/56159',
		[
			'IS: Infinite Stratos 2 - Hitonatsu no Omoide',
			'IS 〈インフィニット・ストラトス〉2 ロングバケーション 一夏（ひとなつ）の想いで',
		],
		[ 441 ],
		'OVA', 3, 2013, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tSciFi',
			'tHarem',
			'tMecha',
		]
	),
	new Anime(
		'2/54925',
		[
			'IS: Infinite Stratos 2',
			'IS〈インフィニット・ストラトス〉2',
			'Infinite Stratos 2',
		],
		[ 441 ],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tMecha',
		]
	),
	new Anime(
		'10/33627',
		[
			'IS: Infinite Stratos Encore - Koi ni Kogareru Rokujuusou',
			'IS 〈インフィニット・ストラトス〉 アンコール『恋に焦がれる六重奏』',
		],
		[ 441 ],
		'OVA', 3, 2011, 'Light novel', 2, 1,
		[
			'tAction',
			'tComedy',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tMecha',
		]
	),
	new Anime(
		'3/74045',
		[
			'IS: Infinite Stratos',
			'IS 〈インフィニット・ストラトス〉',
			'Infinite Stratos',
		],
		[ 441 ],
		'TV', 0, 2011, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tMecha',
		]
	),
	new Anime(
		'1311/120270',
		[
			'Heroine Tarumono! Kiraware Heroine to Naisho no Oshigoto',
			'ヒロインたるもの！〜嫌われヒロインと内緒のお仕事〜',
			'Heroines Run the Show: The Unpopular Girl and the Secret Task',
		],
		[ 1087 ],
		'TV', 1, 2022, 'Music', 0, 1,
		[
			'tIdol',
			'tSchool',
		]
	),
	new Anime(
		'1244/117818',
		[
			'Ganbare Douki-chan: Kakusa Shakai ni Nayamu Kaisha no Douki',
			'がんばれ同期ちゃん 格差社会に悩む会社の同期',
			'Ganbare Douki-chan: The Coworker is Suffering from Social Inequality',
		],
		[ 2298 ],
		'Special', 3, 2021, 'Web manga', 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tAdultCast',
			'tLoveStatusQuo',
			'tWorkplace',
		]
	),
	new Anime(
		'1185/117548',
		[
			'Ganbare Douki-chan',
			'がんばれ同期ちゃん',
		],
		[ 2298 ],
		'ONA', 2, 2021, 'Web manga', 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tAdultCast',
			'tLoveStatusQuo',
			'tWorkplace',
		]
	),
	new Anime(
		'1485/119329',
		[
			'Koroshi Ai',
			'殺し愛',
			'Love of Kill',
		],
		[ 1471 ],
		'TV', 0, 2022, 'Manga', 1, 1,
		[
			'tAction',
			'tRomance',
			'tAdultCast',
			'tOrganizedCrime',
			'tJosei',
		]
	),
	new Anime(
		'4/86243',
		[
			'Konbini Kareshi',
			'コンビニカレシ',
			'Convenience Store Boy Friends',
		],
		[ 1 ],
		'TV', 2, 2017, 'Mixed media', 0, 1,
		[
			'tRomance',
		]
	),
	new Anime(
		'1399/131410',
		[
			'Angel Beats! Another Epilogue',
			'エンジェルビーツ! アナザーエピローグ',
		],
		[ 132 ],
		'Special', 3, 2010, 'Original', 0, 1,
		[
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'4/25073',
		[
			'Angel Beats! Specials',
			'エンジェルビーツ',
		],
		[ 132 ],
		'Special', 3, 2010, 'Original', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'10/22061',
		[
			'Angel Beats!',
			'Angel Beats!（エンジェルビーツ!）',
		],
		[ 132 ],
		'TV', 1, 2010, 'Original', 0, 1,
		[
			'tDrama',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/75559',
		[
			'Zero no Tsukaima F',
			'ゼロの使い魔F',
			'The Familiar of Zero F',
		],
		[ 7 ],
		'TV', 0, 2012, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tIsekai',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'6/12370',
		[
			'Zero no Tsukaima: Princesses no Rondo - Yuuwaku no Sunahama',
			'ゼロの使い魔 ～三美姫（プリンセッセ）の輪舞（ロンド）～ 誘惑の砂浜',
			'The Familiar of Zero: Rondo of the Princesses OVA',
		],
		[ 7 ],
		'Special', 3, 2008, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'6/10256',
		[
			'Zero no Tsukaima: Princesses no Rondo',
			'ゼロの使い魔 ～三美姫（プリンセッセ）の輪舞（ロンド）～',
			'The Familiar of Zero: Rondo of Princesses',
		],
		[ 7 ],
		'TV', 2, 2008, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tIsekai',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/22740',
		[
			'Zero no Tsukaima: Futatsuki no Kishi',
			'ゼロの使い魔 ～双月の騎士～',
			'The Familiar of Zero: Knight of the Twin Moons',
		],
		[ 7 ],
		'TV', 2, 2007, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tIsekai',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/20680',
		[
			'Zero no Tsukaima',
			'ゼロの使い魔',
			'The Familiar of Zero',
		],
		[ 7 ],
		'TV', 2, 2006, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tIsekai',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'4/72750',
		[
			'Plastic Memories',
			'プラスティック・メモリーズ',
		],
		[ 95 ],
		'TV', 1, 2015, 'Original', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1319/142188',
		[
			'Grisaia: Phantom Trigger',
			'グリザイア:ファントムトリガー',
		],
		[ 1722 ],
		'TV', 0, 2025, 'Visual novel', 1, 1,
		[
			'tAction',
			'tSchool',
		]
	),
	new Anime(
		'1730/108516',
		[
			'Grisaia: Phantom Trigger The Animation - Stargazer',
			'グリザイア：ファントムトリガー THE ANIMATION スターゲイザー',
		],
		[ 1722 ],
		'Movie', 3, 2020, 'Visual novel', 1, 1,
		[
			'tAction',
			'tSchool',
		]
	),
	new Anime(
		'1298/106867',
		[
			'Grisaia: Phantom Trigger The Animation',
			'グリザイア：ファントムトリガー THE ANIMATION',
		],
		[ 1722 ],
		'Movie', 0, 2019, 'Visual novel', 1, 1,
		[
			'tAction',
			'tSchool',
		]
	),
	new Anime(
		'2/75328',
		[
			'Grisaia no Meikyuu: Caprice no Mayu 0 - Takizono Basketball Club no Nama Cream Party!',
			'グリザイアの迷宮 カプリスの繭0 姫&バスケ部編「滝園バスケ部の生クリームパーティ! 」',
		],
		[ 441 ],
		'Special', 2, 2015, 'Visual novel', 2, 1,
		[
			'tEcchi',
		]
	),
	new Anime(
		'8/72855',
		[
			'Grisaia no Rakuen',
			'グリザイアの楽園',
			'The Eden of Grisaia',
		],
		[ 441 ],
		'TV', 1, 2015, 'Visual novel', 1, 1,
		[
			'tDrama',
			'tRomance',
			'tHarem',
			'tPsychological',
		]
	),
	new Anime(
		'1278/112633',
		[
			'Grisaia no Meikyuu: Caprice no Mayu 0',
			'グリザイアの迷宮 カプリスの繭0',
			'The Labyrinth of Grisaia: The Cocoon of Caprice 0',
		],
		[ 441 ],
		'Special', 1, 2015, 'Visual novel', 2, 1,
		[
			'tDrama',
		]
	),
	new Anime(
		'7/74609',
		[
			'Grisaia no Kajitsu Specials',
			'グリザイアの果実',
		],
		[ 441 ],
		'Special', 3, 2014, 'Visual novel', 2, 1,
		[
			'tEcchi',
		]
	),
	new Anime(
		'1645/112632',
		[
			'Grisaia no Kajitsu',
			'グリザイアの果実',
			'The Fruit of Grisaia',
		],
		[ 441 ],
		'TV', 3, 2014, 'Visual novel', 2, 1,
		[
			'tDrama',
			'tRomance',
			'tHarem',
			'tPsychological',
			'tSchool',
		]
	),
	new Anime(
		'12/89979',
		[
			'Ryuuou no Oshigoto!',
			'りゅうおうのおしごと！',
			"The Ryuo's Work is Never Done!",
		],
		[ 439 ],
		'TV', 0, 2018, 'Light novel', 0, 1,
		[
			'tComedy',
			'tStrategyGame',
		]
	),
	new Anime(
		'3/78858',
		[
			'Hundred',
			'ハンドレッド',
		],
		[ 1053 ],
		'TV', 1, 2016, 'Light novel', 0, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tMecha',
			'tSchool',
		]
	),
	new Anime(
		'6/88307',
		[
			'Tsuki ga Kirei Special',
			'月がきれい',
		],
		[ 91 ],
		'Special', 2, 2017, 'Original', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'2/85592',
		[
			'Tsuki ga Kirei',
			'月がきれい',
		],
		[ 91 ],
		'TV', 1, 2017, 'Original', 0, 1,
		[
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'1356/93469',
		[
			'Meiji Tokyo Renka',
			'明治東亰恋伽',
		],
		[ 73 ],
		'TV', 0, 2019, 'Visual novel', 0, 1,
		[
			'tRomance',
			'tSupernatural',
			'tHistorical',
			'tHarem',
			'tTimeTravel',
			'tJosei',
		]
	),
	new Anime(
		'8/83735',
		[
			'Fuuka',
			'風夏',
		],
		[ 51 ],
		'TV', 0, 2017, 'Manga', 2, 1,
		[
			'tDrama',
			'tRomance',
			'tEcchi',
			'tMusic',
			'tSchool',
			'tShounen',
			'tLovePolygon',
		]
	),
	new Anime(
		'1424/93855',
		[
			'Irozuku Sekai no Ashita kara',
			'色づく世界の明日から',
			'Iroduku: The World in Colors',
		],
		[ 132 ],
		'TV', 3, 2018, 'Original', 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tRomance',
			'tSchool',
			'tTimeTravel',
			'tLovePolygon',
			'tVisualArts',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1566/91061',
		[
			'ReLIFE: Kanketsu-hen',
			'ReLIFE 完結編',
			'ReLIFE: Final Arc',
		],
		[ 73 ],
		'Special', 0, 2018, 'Web manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/82149',
		[
			'ReLIFE',
		],
		[ 73 ],
		'TV', 2, 2016, 'Web manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1122/96012',
		[
			'Nil Admirari no Tenbin',
			'ニル・アドミラリの天秤',
			'Libra of Nil Admirari',
		],
		[ 1379 ],
		'TV', 1, 2018, 'Visual novel', 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tHistorical',
			'tHarem',
			'tJosei',
		]
	),
	new Anime(
		'4/85260',
		[
			'Shuumatsu Nani Shitemasu ka? Isogashii desu ka? Sukutte Moratte Ii desu ka?',
			'終末なにしてますか？忙しいですか？救ってもらっていいですか？',
			'WorldEnd: What do you do at the end of the world? Are you busy? Will you save us?',
		],
		[ 41, 605 ],
		'TV', 1, 2017, 'Light novel', 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1560/99904',
		[
			'High Score Girl II',
			'ハイスコアガール II',
			'Hi Score Girl II',
		],
		[ 7 ],
		'TV', 3, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tLovePolygon',
			'tLoveStatusQuo',
			'tSchool',
			'tVideoGame',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1057/111384',
		[
			'High Score Girl: Extra Stage',
			'ハイスコアガール EXTRA STAGE',
			'Hi Score Girl: Extra Stage',
		],
		[ 7 ],
		'OVA', 0, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tLovePolygon',
			'tLoveStatusQuo',
			'tSchool',
			'tVideoGame',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1668/91345',
		[
			'High Score Girl',
			'ハイスコアガール',
			'Hi Score Girl',
		],
		[ 7 ],
		'TV', 2, 2018, 'Manga', 0, 1,
		[
			'tComedy',
			'tLovePolygon',
			'tLoveStatusQuo',
			'tSchool',
			'tVideoGame',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1745/93307',
		[
			'Beatless Final Stage',
			'BEATLESS Final Stage',
		],
		[ 51 ],
		'TV', 2, 2018, 'Light novel', 0, 1,
		[
			'tAction',
			'tDrama',
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1986/90184',
		[
			'Beatless',
			'BEATLESS',
		],
		[ 51 ],
		'TV', 0, 2018, 'Light novel', 0, 1,
		[
			'tAction',
			'tDrama',
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'11/69085',
		[
			'Juuou Mujin no Fafnir',
			'銃皇無尽のファフニール',
			'Unlimited Fafnir',
		],
		[ 51 ],
		'TV', 0, 2015, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tAction',
		]
	),
	new Anime(
		'1395/95778',
		[
			'Shinmai Maou no Testament Departures',
			'新妹魔王の契約者 DEPARTURES',
			'The Testament of Sister New Devil Departures',
		],
		[ 1053 ],
		'OVA', 0, 2018, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tMythology',
		]
	),
	new Anime(
		'1151/94750',
		[
			'Shinmai Maou no Testament Burst',
			'新妹魔王の契約者 BURST',
			'The Testament of Sister New Devil: Burst',
		],
		[ 1053 ],
		'TV', 3, 2015, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tMythology',
		]
	),
	new Anime(
		'12/69911',
		[
			'Shinmai Maou no Testament: Toujou Basara no Hard Sweet na Nichijou',
			'新妹魔王の契約者〈テスタメント〉 第13話「東城刃更のハードスウィートな日常」',
			'The Testament of Sister New Devil OVA',
		],
		[ 1053 ],
		'OVA', 1, 2015, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tMythology',
		]
	),
	new Anime(
		'1815/109046',
		[
			'Shinmai Maou no Testament Specials',
			'新妹魔王の契約者〈テスタメント〉',
			'The Testament of Sister New Devil Specials',
		],
		[ 1053 ],
		'Special', 0, 2015, 'Light novel', 2, 1,
		[
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tMythology',
		]
	),
	new Anime(
		'1654/112033',
		[
			'Shinmai Maou no Testament',
			'新妹魔王の契約者〈テスタメント〉',
			'The Testament of Sister New Devil',
		],
		[ 1053 ],
		'TV', 0, 2015, 'Light novel', 2, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tMythology',
		]
	),
	new Anime(
		'1446/91841',
		[
			'Tada-kun wa Koi wo Shinai',
			'多田くんは恋をしない',
			'Tada Never Falls in Love',
		],
		[ 95 ],
		'TV', 1, 2018, 'Original', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tVisualArts',
		]
	),
	new Anime(
		'1342/122261',
		[
			'Koi to Uso: Isshou no Koi/Koi no Kimochi',
			'恋と嘘 一生の恋 / 恋の気持ち',
			'Love and Lies: Love of a Lifetime/Feelings of Love',
		],
		[ 839 ],
		'OVA', 3, 2018, 'Web manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'5/86663',
		[
			'Koi to Uso',
			'恋と嘘',
			'Love and Lies',
		],
		[ 839 ],
		'TV', 2, 2017, 'Web manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tLovePolygon',
		]
	),
	new Anime(
		'9/76493',
		[
			'Rakudai Kishi no Cavalry',
			'落第騎士の英雄譚《キャバルリィ》',
			'Chivalry of a Failed Knight',
		],
		[ 300, 852 ],
		'TV', 3, 2015, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tSchool',
		]
	),
	new Anime(
		'1284/106945',
		[
			'Arte',
			'アルテ',
		],
		[ 35 ],
		'TV', 1, 2020, 'Manga', 0, 1,
		[
			'tDrama',
			'tHistorical',
			'tSeinen',
			'tVisualArts',
		]
	),
	new Anime(
		'1919/107275',
		[
			'Yesterday wo Utatte: Haishin-ban Episode',
			'イエスタデイをうたって 配信版エピソード',
		],
		[ 95 ],
		'ONA', 1, 2020, 'Manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSeinen',
		]
	),
	new Anime(
		'1553/107721',
		[
			'Yesterday wo Utatte',
			'イエスタデイをうたって',
			'Sing "Yesterday" for Me',
		],
		[ 95 ],
		'TV', 1, 2020, 'Manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSeinen',
			'tAdultCast',
			'tLovePolygon',
		]
	),
	new Anime(
		'1874/111374',
		[
			'Ueno-san wa Bukiyou',
			'上野さんは不器用',
			'How clumsy you are, Miss Ueno',
		],
		[ 1829 ],
		'TV', 0, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tSeinen',
		]
	),
	new Anime(
		'1186/108864',
		[
			'Josee to Tora to Sakana-tachi',
			'ジョゼと虎と魚たち',
			'Josee, the Tiger and the Fish',
		],
		[ 4 ],
		'Movie', 3, 2020, 'Novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tAdultCast',
			'tVisualArts',
		]
	),
	new Anime(
		'1021/95670',
		[
			'Domestic na Kanojo',
			'ドメスティックな彼女',
			'Domestic Girlfriend',
		],
		[ 51 ],
		'TV', 0, 2019, 'Manga', 2, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tShounen',
			'tLovePolygon',
		]
	),
	new Anime(
		'1506/120097',
		[
			'Fruits Basket: Prelude',
			'フルーツバスケット -prelude-',
		],
		[ 73 ],
		'TV', 0, 2022, 'Manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tShoujo',
		]
	),
	new Anime(
		'1085/114792',
		[
			'Fruits Basket: The Final',
			'フルーツバスケット The Final',
			'Fruits Basket: The Final Season',
		],
		[ 73 ],
		'TV', 1, 2021, 'Manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tShoujo',
		]
	),
	new Anime(
		'1972/111635',
		[
			'Fruits Basket 2nd Season',
			'フルーツバスケット 2nd season',
		],
		[ 73 ],
		'TV', 1, 2020, 'Manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tShoujo',
		]
	),
	new Anime(
		'1447/99827',
		[
			'Fruits Basket 1st Season',
			'フルーツバスケット',
		],
		[ 73 ],
		'TV', 1, 2019, 'Manga', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tShoujo',
			'tLovePolygon',
		]
	),
	new Anime(
		'1237/113435',
		[
			'3D Kanojo: Real Girl 2nd Season',
			'3D彼女 リアルガール第2シーズン',
			'Real Girl Season 2',
		],
		[ 346 ],
		'TV', 0, 2019, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tOtakuCulture',
		]
	),
	new Anime(
		'1327/93616',
		[
			'3D Kanojo: Real Girl',
			'３Ｄ彼女　リアルガール',
			'Real Girl',
		],
		[ 346 ],
		'TV', 1, 2018, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tOtakuCulture',
		]
	),
	new Anime(
		'9/67077',
		[
			'D-Frag!*',
			'ディーふらぐ! ウォーター!!',
		],
		[ 112 ],
		'OVA', 2, 2014, 'Manga', 0, 1,
		[
			'tComedy',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1662/112108',
		[
			'D-Frag!',
			'ディーふらぐ！',
		],
		[ 112 ],
		'TV', 0, 2014, 'Manga', 0, 1,
		[
			'tComedy',
			'tSchool',
			'tStrategyGame',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1892/111383',
		[
			'Wotaku ni Koi wa Muzukashii OVA',
			'ヲタクに恋は難しい OAD',
			'Wotakoi: Love is Hard for Otaku OVA',
		],
		[ 56, 1828 ],
		'OVA', 0, 2019, 'Web manga', 0, 1,
		[
			'tRomance',
			'tWorkplace',
			'tOtakuCulture',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1864/93518',
		[
			'Wotaku ni Koi wa Muzukashii',
			'ヲタクに恋は難しい',
			'Wotakoi: Love is Hard for Otaku',
		],
		[ 56 ],
		'TV', 1, 2018, 'Web manga', 0, 1,
		[
			'tRomance',
			'tWorkplace',
			'tOtakuCulture',
			'tAdultCast',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1519/110527',
		[
			'Koi to Yobu ni wa Kimochi Warui',
			'恋と呼ぶには気持ち悪い',
			'Koikimo',
		],
		[ 70 ],
		'TV', 1, 2021, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'1490/126919',
		[
			'Isekai Meikyuu de Harem wo',
			'異世界迷宮でハーレムを',
			'Harem in the Labyrinth of Another World',
		],
		[ 911 ],
		'TV', 2, 2022, 'Light novel', 2, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tErotica',
			'tHarem',
			'tIsekai',
		]
	),
	new Anime(
		'1274/133807',
		[
			'Tokyo Mew Mew New ♡ 2nd Season',
			'東京ミュウミュウ にゅ～♡',
		],
		[ 96, 894 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tSciFi',
			'tShoujo',
			'tMahouShoujo',
		]
	),
	new Anime(
		'1001/116687',
		[
			'Tokyo Mew Mew New ♡',
			'東京ミュウミュウ にゅ～♡',
			'Tokyo Mew Mew New',
		],
		[ 96, 894 ],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tSciFi',
			'tShoujo',
			'tMahouShoujo',
		]
	),
	new Anime(
		'1077/136855',
		[
			'Seijo no Maryoku wa Bannou desu Season 2',
			'聖女の魔力は万能です Season2',
			"The Saint's Magic Power is Omnipotent Season 2",
		],
		[ 51 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tMedical',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1947/114235',
		[
			'Seijo no Maryoku wa Bannou desu',
			'聖女の魔力は万能です',
			"The Saint's Magic Power is Omnipotent",
		],
		[ 51 ],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tMedical',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1055/118890',
		[
			'Senpai ga Uzai Kouhai no Hanashi',
			'先輩がうざい後輩の話',
			'My Senpai is Annoying',
		],
		[ 95 ],
		'TV', 3, 2021, 'Web manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tWorkplace',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1179/119897',
		[
			'Sono Bisque Doll wa Koi wo Suru',
			'その着せ替え人形は恋をする',
			'My Dress-Up Darling',
		],
		[ 1835 ],
		'TV', 0, 2022, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tSeinen',
			'tOtakuCulture',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1539/128058',
		[
			'Uzaki-chan wa Asobitai! Double',
			'宇崎ちゃんは遊びたい！ω（だぶる）',
			'Uzaki-chan Wants to Hang Out! Season 2',
		],
		[ 1974 ],
		'TV', 3, 2022, 'Web manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tAdultCast',
		]
	),
	new Anime(
		'1540/108292',
		[
			'Uzaki-chan wa Asobitai!',
			'宇崎ちゃんは遊びたい！',
			'Uzaki-chan Wants to Hang Out!',
		],
		[ 1974 ],
		'TV', 2, 2020, 'Web manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tAdultCast',
		]
	),
	new Anime(
		'13/68705',
		[
			'Denki-gai no Honya-san',
			'デンキ街の本屋さん',
			'Denki-gai',
		],
		[ 247 ],
		'TV', 3, 2014, 'Manga', 0, 1,
		[
			'tComedy',
			'tWorkplace',
			'tSeinen',
			'tOtakuCulture',
		]
	),
	new Anime(
		'2/86786',
		[
			'No Game No Life: Zero',
			'ノーゲーム・ノーライフ ゼロ',
		],
		[ 11 ],
		'Movie', 2, 2017, 'Light novel', 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tRomance',
			'tIsekai',
		]
	),
	new Anime(
		'7/71783',
		[
			'No Game No Life Specials',
			'ノーゲーム・ノーライフ ミニ',
		],
		[ 11 ],
		'Special', 1, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1074/111944',
		[
			'No Game No Life',
			'ノーゲーム・ノーライフ',
			'No Game, No Life',
		],
		[ 11 ],
		'TV', 1, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tStrategyGame',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'9/72614',
		[
			"Kyoukai no Kanata Movie 2: I'll Be Here - Mirai-hen",
			"劇場版 境界の彼方 I'LL BE HERE 未来篇",
			"Beyond the Boundary: I'll Be Here - Future",
		],
		[ 2 ],
		'Movie', 1, 2015, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'6/73298',
		[
			"Kyoukai no Kanata Movie 1: I'll Be Here - Kako-hen",
			"劇場版 境界の彼方 I'LL BE HERE 過去篇",
			"Beyond the Boundary: I'll Be Here - Past",
		],
		[ 2 ],
		'Movie', 0, 2015, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/63205',
		[
			'Kyoukai no Kanata: Shinonome',
			'境界の彼方 ＃0「東雲」',
			'Beyond the Boundary: Daybreak',
		],
		[ 2 ],
		'Special', 2, 2014, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'10/72218',
		[
			'Kyoukai no Kanata: Mini Gekijou',
			'境界の彼方 ミニ劇場',
		],
		[ 2 ],
		'Special', 0, 2014, 'Light novel', 0, 1,
		[
			'tSliceofLife',
			'tSupernatural',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/85468',
		[
			'Kyoukai no Kanata',
			'境界の彼方',
			'Beyond the Boundary',
		],
		[ 2 ],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'9/69517',
		[
			'Ao Haru Ride OVA',
			'アオハライド OAD',
			'Blue Spring Ride OVA',
		],
		[ 10 ],
		'OVA', 2, 2014, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tLovePolygon',
		]
	),
	new Anime(
		'8/64813',
		[
			'Ao Haru Ride',
			'アオハライド',
			'Blue Spring Ride',
		],
		[ 10 ],
		'TV', 2, 2014, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tLovePolygon',
		]
	),
	new Anime(
		'4/68839',
		[
			'Absolute Duo',
			'アブソリュート・デュオ',
		],
		[ 441 ],
		'TV', 0, 2015, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'1376/123398',
		[
			'Karakai Jouzu no Takagi-san Movie',
			'からかい上手の高木さん',
			'Teasing Master Takagi-san: The Movie',
		],
		[ 247 ],
		'Movie', 1, 2022, 'Manga', 0, 1,
		[
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1861/120361',
		[
			'Karakai Jouzu no Takagi-san 3',
			'からかい上手の高木さん3',
			'Teasing Master Takagi-san 3',
		],
		[ 247 ],
		'TV', 0, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1393/107033',
		[
			'Karakai Jouzu no Takagi-san 2',
			'からかい上手の高木さん2',
			'Teasing Master Takagi-san 2',
		],
		[ 247 ],
		'TV', 2, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1128/99821',
		[
			'Karakai Jouzu no Takagi-san: Water Slide',
			'からかい上手の高木さん ウォータースライダー',
			'Teasing Master Takagi-san: Water Slide',
		],
		[ 247 ],
		'OVA', 2, 2018, 'Manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1591/95091',
		[
			'Karakai Jouzu no Takagi-san',
			'からかい上手の高木さん',
			'Teasing Master Takagi-san',
		],
		[ 247 ],
		'TV', 0, 2018, 'Manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'4/73475',
		[
			'Denpa Kyoushi',
			'電波教師',
			'Ultimate Otaku Teacher',
		],
		[ 56 ],
		'TV', 1, 2015, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tOtakuCulture',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'7/73735',
		[
			'Haiyore! Nyaruko-san F',
			'這いよれ！ニャル子さんF',
		],
		[ 27 ],
		'OVA', 1, 2015, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSciFi',
			'tParody',
		]
	),
	new Anime(
		'4/61789',
		[
			'Haiyore! Nyaruko-san W: W ni Sayonara/Kono Onsen ni Koi no Konton wo',
			'這いよれ！ニャル子さん W Wにさよなら / この温泉に恋の渾沌を',
		],
		[ 27 ],
		'OVA', 1, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tParody',
		]
	),
	new Anime(
		'10/47533',
		[
			'Haiyore! Nyaruko-san W',
			'這いよれ！ニャル子さん W',
			'Nyaruko: Crawling With Love! Second Season',
		],
		[ 27 ],
		'TV', 1, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tSciFi',
			'tParody',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'6/49081',
		[
			'Haiyore! Nyaruko-san',
			'這いよれ！ニャル子さん',
			'Nyaruko: Crawling With Love!',
		],
		[ 27 ],
		'TV', 1, 2012, 'Light novel', 0, 1,
		[
			'tComedy',
			'tSciFi',
			'tParody',
		]
	),
	new Anime(
		'13/85289',
		[
			'Kyoukai no Rinne 3rd Season',
			'境界のRINNE',
			'RIN-NE Season 3',
		],
		[ 112 ],
		'TV', 1, 2017, 'Manga', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'7/79665',
		[
			'Kyoukai no Rinne 2nd Season',
			'境界のRINNE',
			'RIN-NE Season 2',
		],
		[ 112 ],
		'TV', 1, 2016, 'Manga', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'13/73436',
		[
			'Kyoukai no Rinne',
			'境界のRINNE',
			'RIN-NE',
		],
		[ 112 ],
		'TV', 1, 2015, 'Manga', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'8/67047',
		[
			'Inou-Battle wa Nichijou-kei no Naka de',
			'異能バトルは日常系のなかで',
			'When Supernatural Battles Became Commonplace',
		],
		[ 803 ],
		'TV', 3, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tHarem',
			'tSchool',
			'tSuperPower',
		]
	),
	new Anime(
		'3/84417',
		[
			'Hajimete no Gal: Hajimete no Bunkasai',
			'はじめてのギャル はじめての文化祭',
			'My First Girlfriend is a Gal: My First Cultural Festival',
		],
		[ 951 ],
		'OVA', 3, 2017, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'9/86826',
		[
			'Hajimete no Gal',
			'はじめてのギャル',
			'My First Girlfriend is a Gal',
		],
		[ 951 ],
		'TV', 2, 2017, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1015/123541',
		[
			'Itsudatte Bokura no Koi wa 10 cm Datta.',
			'いつだって僕らの恋は10センチだった。',
			'Our love has always been 10 centimeters apart',
		],
		[ 1087 ],
		'TV', 3, 2017, 'Music', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tVisualArts',
		]
	),
	new Anime(
		'12/87065',
		[
			'Suki ni Naru Sono Shunkan wo. Kokuhaku Jikkou Iinkai',
			'好きになるその瞬間を。～告白実行委員会～',
			'The Moment You Fall in Love',
		],
		[ 1304 ],
		'Movie', 3, 2016, 'Music', 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'3/82121',
		[
			'Zutto Mae kara Suki deshita. Kokuhaku Jikkou Iinkai',
			'ずっと前から好きでした。～告白実行委員会～',
			"I've Always Liked You",
		],
		[ 1304 ],
		'Movie', 1, 2016, 'Music', 0, 1,
		[
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'1902/129579',
		[
			'Ijiranaide, Nagatoro-san 2nd Attack',
			'イジらないで、長瀞さん 2nd Attack',
			"Don't Toy with Me, Miss Nagatoro 2nd Attack",
		],
		[ 28 ],
		'TV', 0, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
		]
	),
	new Anime(
		'1900/110097',
		[
			'Ijiranaide, Nagatoro-san',
			'イジらないで、長瀞さん',
			"Don't Toy with Me, Miss Nagatoro",
		],
		[ 28 ],
		'TV', 1, 2021, 'Web manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
		]
	),
	new Anime(
		'1716/104880',
		[
			'Nekopara',
			'ネコぱら',
		],
		[ 1440 ],
		'TV', 0, 2020, 'Visual novel', 0, 1,
		[
			'tComedy',
			'tSliceofLife',
			'tAnthropomorphic',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1102/103268',
		[
			'Nekopara: Koneko no Hi no Yakusoku',
			'ネコぱら 仔ネコの日の約束',
		],
		[ 1440 ],
		'ONA', 2, 2018, 'Visual novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'7/89829',
		[
			'Nekopara OVA',
			'ネコぱらOVA',
		],
		[ 1440 ],
		'OVA', 3, 2017, 'Visual novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'4/86790',
		[
			'New Game!!',
			'NEW GAME!!',
		],
		[ 95 ],
		'TV', 2, 2017, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tCGDCT',
			'tOtakuCulture',
			'tWorkplace',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'10/86507',
		[
			'New Game! Watashi, Shain Ryokou tte Hajimete nanode...',
			'NEW GAME! 私、社員旅行って初めてなので…',
		],
		[ 95 ],
		'OVA', 1, 2017, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tCGDCT',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'9/80417',
		[
			'New Game!',
			'NEW GAME!',
		],
		[ 95 ],
		'TV', 2, 2016, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tCGDCT',
			'tOtakuCulture',
			'tWorkplace',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1301/110433',
		[
			'Munou na Nana',
			'無能なナナ',
			'Talentless Nana',
		],
		[ 397 ],
		'TV', 3, 2020, 'Manga', 1, 1,
		[
			'tSupernatural',
			'tPsychological',
			'tSuperPower',
			'tShounen',
			'tSuspense',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'12/86676',
		[
			'Tsurezure Children',
			'徒然チルドレン',
			'Tsuredure Children',
		],
		[ 418 ],
		'TV', 2, 2017, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'11/79107',
		[
			'Gakusen Toshi Asterisk 2nd Season',
			'学戦都市アスタリスク',
			'The Asterisk War Season 2',
		],
		[ 56 ],
		'TV', 1, 2016, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'5/76034',
		[
			'Gakusen Toshi Asterisk',
			'学戦都市アスタリスク',
			'The Asterisk War',
		],
		[ 56 ],
		'TV', 3, 2015, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'7/90115',
		[
			'Net-juu no Susume Special',
			'ネト充のススメ',
			'Recovery of an MMO Junkie Special',
		],
		[ 1278 ],
		'Special', 3, 2017, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tVideoGame',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/87463',
		[
			'Net-juu no Susume',
			'ネト充のススメ',
			'Recovery of an MMO Junkie',
		],
		[ 1278 ],
		'TV', 3, 2017, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tVideoGame',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1642/100344',
		[
			'Ore ga Suki nano wa Imouto dakedo Imouto ja Nai Specials',
			'俺が好きなのは妹だけど妹じゃない俺が好きなのは妹だけど妹じゃない新規短編アニメーション',
		],
		[ 951, 1860 ],
		'Special', 0, 2019, 'Light novel', 2, 1,
		[
			'tComedy',
			'tEcchi',
			'tHarem',
		]
	),
	new Anime(
		'1359/96152',
		[
			'Ore ga Suki nano wa Imouto dakedo Imouto ja Nai',
			'俺が好きなのは妹だけど妹じゃない',
			'My Sister, My Writer',
		],
		[ 951, 1860 ],
		'TV', 3, 2018, 'Light novel', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
		]
	),
	new Anime(
		'1786/118533',
		[
			'Isuca: Gokuraku',
			'ISUCA 第拾壱話「極楽」',
		],
		[ 38 ],
		'OVA', 2, 2015, 'Manga', 2, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tMythology',
			'tSchool',
			'tSeinen',
		]
	),
	new Anime(
		'3/71767',
		[
			'Isuca',
			'ISUCA [イスカ]',
		],
		[ 38 ],
		'TV', 0, 2015, 'Manga', 2, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tMythology',
			'tSchool',
			'tSeinen',
		]
	),
	new Anime(
		'1080/136409',
		[
			'Seishun Buta Yarou wa Randoseru Girl no Yume wo Minai',
			'青春ブタ野郎はランドセルガールの夢を見ない',
			'Rascal Does Not Dream of a Knapsack Kid',
		],
		[ 1835 ],
		'Movie', 3, 2023, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1374/131616',
		[
			'Seishun Buta Yarou wa Odekake Sister no Yume wo Minai',
			'青春ブタ野郎はおでかけシスターの夢を見ない',
			'Rascal Does Not Dream of a Sister Venturing Out',
		],
		[ 1835 ],
		'Movie', 1, 2023, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1774/111679',
		[
			'Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai',
			'青春ブタ野郎はゆめみる少女の夢を見ない',
			'Rascal Does Not Dream of a Dreaming Girl',
		],
		[ 1835 ],
		'Movie', 1, 2019, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1301/93586',
		[
			'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai',
			'青春ブタ野郎はバニーガール先輩の夢を見ない',
			'Rascal Does Not Dream of Bunny Girl Senpai',
		],
		[ 1835 ],
		'TV', 3, 2018, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1063/137100',
		[
			'Kanojo mo Kanojo Season 2',
			'カノジョも彼女 Season 2',
			'Girlfriend, Girlfriend Season 2',
		],
		[ 118 ],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1713/117119',
		[
			'Kanojo mo Kanojo',
			'カノジョも彼女',
			'Girlfriend, Girlfriend',
		],
		[ 200 ],
		'TV', 2, 2021, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1034/112435',
		[
			'Boku no Kanojo ga Majimesugiru Sho-bitch na Ken OVA',
			'僕の彼女がマジメ過ぎるしょびっちな件 OVA',
			'My Girlfriend is Shobitch OVA',
		],
		[ 51, 478 ],
		'OVA', 0, 2018, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
		]
	),
	new Anime(
		'12/87623',
		[
			'Boku no Kanojo ga Majimesugiru Sho-bitch na Ken',
			'僕の彼女がマジメ過ぎるしょびっちな件',
			'My Girlfriend is Shobitch',
		],
		[ 51, 478 ],
		'TV', 3, 2017, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'1622/111483',
		[
			'Araburu Kisetsu no Otome-domo yo.',
			'荒ぶる季節の乙女どもよ。',
			'O Maidens in Your Savage Season',
		],
		[ 1087 ],
		'TV', 2, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1687/123304',
		[
			'B-gata H-kei',
			'B型H系',
			"Yamada's First Time: B Gata H Kei",
		],
		[ 34 ],
		'TV', 1, 2010, '4-koma manga', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tSeinen',
		]
	),
	new Anime(
		'3/79414',
		[
			'Netoge no Yome wa Onnanoko ja Nai to Omotta?',
			'ネトゲの嫁は女の子じゃないと思った？',
			'And you thought there is never a girl online?',
		],
		[ 439 ],
		'TV', 1, 2016, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tVideoGame',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1024/93549',
		[
			'Akkun to Kanojo',
			'あっくんとカノジョ',
			'My Sweet Tyrant',
		],
		[ 96 ],
		'TV', 1, 2018, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tJosei',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'9/89848',
		[
			'Imouto sae Ireba Ii. Special',
			'妹さえいればいい。',
		],
		[ 300 ],
		'Special', 0, 2018, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'10/88472',
		[
			'Imouto sae Ireba Ii.',
			'妹さえいればいい。',
			"A Sister's All You Need",
		],
		[ 300 ],
		'TV', 3, 2017, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'10/23635',
		[
			'Mayoi Neko Overrun! Specials',
			'迷い猫ねこねこ劇場',
		],
		[ 48 ],
		'Special', 1, 2010, 'Light novel', 2, 1,
		[
			'tComedy',
			'tEcchi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'10/23770',
		[
			'Mayoi Neko Overrun!',
			'迷い猫オーバーラン!',
			'Stray Cats Overrun!',
		],
		[ 48 ],
		'TV', 1, 2010, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'9/75240',
		[
			'Ookami-san to Shichinin no Nakama-tachi',
			'オオカミさんと七人の仲間たち',
			'Okami-San and Her Seven Companions',
		],
		[ 7 ],
		'TV', 2, 2010, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tParody',
		]
	),
	new Anime(
		'6/25892',
		[
			'Fortune Arterial: Akai Yakusoku - Tadoritsuita Basho',
			'FORTUNE ARTERIAL 赤い約束 たどり着いた場所',
		],
		[ 91, 218 ],
		'OVA', 0, 2011, 'Visual novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tVampire',
		]
	),
	new Anime(
		'11/26876',
		[
			'Fortune Arterial: Akai Yakusoku',
			'FORTUNE ARTERIAL 赤い約束',
		],
		[ 91, 218 ],
		'TV', 3, 2010, 'Visual novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tVampire',
		]
	),
	new Anime(
		'2/29138',
		[
			'Hidan no Aria: Butei ga Kitarite Onsen Kenshuu',
			'緋弾のアリア 武偵が来たりて温泉研修',
			'Aria the Scarlet Ammo Special',
		],
		[ 7 ],
		'Special', 3, 2011, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tMystery',
			'tRomance',
		]
	),
	new Anime(
		'9/30095',
		[
			'Hidan no Aria',
			'緋弾のアリア',
			'Aria the Scarlet Ammo',
		],
		[ 7 ],
		'TV', 1, 2011, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSchool',
			'tEcchi',
		]
	),
	new Anime(
		'5/30175',
		[
			'R-15: R15 Shounen Hyouryuuki',
			'あーるじゅうご R15少年漂流記',
		],
		[ 48 ],
		'OVA', 3, 2011, 'Light novel', 2, 1,
		[
			'tAdventure',
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tParody',
		]
	),
	new Anime(
		'9/33029',
		[
			'R-15',
			'あーるじゅうご',
		],
		[ 48 ],
		'TV', 2, 2011, 'Light novel', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'13/29971',
		[
			'Mayo Chiki!',
			'まよチキ!',
		],
		[ 91 ],
		'TV', 2, 2011, 'Light novel', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tCrossdressing',
		]
	),
	new Anime(
		'8/63597',
		[
			'Baka to Test to Shoukanjuu Ni!: Mahou Hideyoshi Hideyoshi',
			'バカとテストと召喚獣にっ！ 『魔法秀吉ひでよし』',
			'Baka and Test - Summon the Beasts: Magical Hideyoshi Hideyoshi',
		],
		[ 300 ],
		'Special', 3, 2011, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/28992',
		[
			'Baka to Test to Shoukanjuu Ni!',
			'バカとテストと召喚獣 にっ！',
			'Baka & Test – Summon the Beasts 2',
		],
		[ 300 ],
		'TV', 2, 2011, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSuperPower',
			'tLovePolygon',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/67303',
		[
			'Baka to Test to Shoukanjuu: Matsuri',
			'バカとテストと召喚獣 ～祭～',
			'Baka & Test - Summon the Beasts OVA',
		],
		[ 300 ],
		'OVA', 0, 2011, 'Light novel', 0, 1,
		[
			'tComedy',
			'tSchool',
			'tSuperPower',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/67315',
		[
			'Baka to Test to Shoukanjuu Specials',
			'バカとテストと召喚獣 映像特典',
		],
		[ 300 ],
		'Special', 1, 2010, 'Light novel', 0, 1,
		[
			'tComedy',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/50389',
		[
			'Baka to Test to Shoukanjuu',
			'バカとテストと召喚獣',
			'Baka & Test - Summon the Beasts',
		],
		[ 300 ],
		'TV', 0, 2010, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'11/30853',
		[
			'Astarotte no Omocha! EX',
			'アスタロッテのおもちゃ! EX',
			"Astarotte's Toy EX",
		],
		[ 51 ],
		'OVA', 2, 2011, 'Manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tSeinen',
		]
	),
	new Anime(
		'3/75562',
		[
			'Astarotte no Omocha!',
			'アスタロッテのおもちゃ！',
			"Astarotte's Toy",
		],
		[ 51 ],
		'TV', 1, 2011, 'Manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tIsekai',
			'tSeinen',
			'tHarem',
		]
	),
	new Anime(
		'6/59825',
		[
			'Itsuka Tenma no Kuro Usagi: Kokoro Utsuri no Toukoubi - School Attendance Day',
			'いつか天魔の黒ウサギ 心移りの登校日 ~すくーる·あてんだんす·でぃ~',
		],
		[ 218 ],
		'OVA', 3, 2011, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tVampire',
		]
	),
	new Anime(
		'5/75197',
		[
			'Itsuka Tenma no Kuro Usagi',
			'いつか天魔の黒ウサギ',
			'A Dark Rabbit has Seven Lives',
		],
		[ 218 ],
		'TV', 2, 2011, 'Light novel', 2, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tVampire',
		]
	),
	new Anime(
		'10/30839',
		[
			'Hoshizora e Kakaru Hashi: Kakaru ka? Gakuensai ni Koi no Hashi',
			'星空へ架かる橋　架かるか？学園祭に恋の橋',
		],
		[ 95 ],
		'Special', 3, 2011, 'Visual novel', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
		]
	),
	new Anime(
		'3/73521',
		[
			'Hoshizora e Kakaru Hashi',
			'星空へ架かる橋',
			'A Bridge to the Starry Skies',
		],
		[ 95 ],
		'TV', 1, 2011, 'Visual novel', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'11/51565',
		[
			'Dakara Boku wa, H ga Dekinai. Mie Sugi! Mizugi Contest',
			'だから僕は、Ｈができない 。 見えすぎ! 水着コンテスト',
			"So, I Can't Play H! Episode 13",
		],
		[ 91 ],
		'OVA', 0, 2013, 'Light novel', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
		]
	),
	new Anime(
		'4/75102',
		[
			'Dakara Boku wa, H ga Dekinai.',
			'だから僕は、Hができない。',
			"So, I Can't Play H!",
		],
		[ 91 ],
		'TV', 2, 2012, 'Light novel', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
		]
	),
	new Anime(
		'6/47627',
		[
			'Papa no Iukoto wo Kikinasai! OVA',
			'パパのいうことを聞きなさい！OVA',
		],
		[ 91 ],
		'OVA', 1, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
		]
	),
	new Anime(
		'12/78213',
		[
			'Papa no Iukoto wo Kikinasai!: Pokkapoka',
			'パパのいうことを聞きなさい！ぽっかぽか',
		],
		[ 91 ],
		'Special', 2, 2012, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tChildcare',
		]
	),
	new Anime(
		'2/35039',
		[
			'Papa no Iukoto wo Kikinasai!',
			'パパのいうことを聞きなさい！',
			'Listen to Me, Girls. I Am Your Father!',
		],
		[ 91 ],
		'TV', 0, 2012, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tChildcare',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'12/43823',
		[
			'Acchi Kocchi: Place=Princess',
			'あっちこっち 第13話(未放送)「PLACE=PRINCESS」',
		],
		[ 48 ],
		'Special', 3, 2012, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tGagHumor',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'5/46489',
		[
			'Acchi Kocchi',
			'あっちこっち',
			'Place to Place',
		],
		[ 48 ],
		'TV', 1, 2012, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tGagHumor',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'11/51459',
		[
			'Kono Naka ni Hitori, Imouto ga Iru!: Ani, Imouto, Koibito',
			'この中に1人、妹がいる！兄、妹、恋人',
		],
		[ 418 ],
		'OVA', 0, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'5/75534',
		[
			'Kono Naka ni Hitori, Imouto ga Iru!',
			'この中に1人、妹がいる！',
			'NAKAIMO - My Little Sister Is Among Them!',
		],
		[ 418 ],
		'TV', 2, 2012, 'Light novel', 2, 1,
		[
			'tComedy',
			'tMystery',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'6/46981',
		[
			'Oniichan dakedo Ai sae Areba Kankeinai yo ne! Specials',
			'お兄ちゃんだけど愛さえあれば関係ないよねっ',
			'OniAi Specials',
		],
		[ 300 ],
		'Special', 3, 2012, 'Light novel', 2, 1,
		[
			'tComedy',
			'tEcchi',
		]
	),
	new Anime(
		'6/42111',
		[
			'Oniichan dakedo Ai sae Areba Kankeinai yo ne!',
			'お兄ちゃんだけど愛さえあれば関係ないよねっ',
			'OniAi',
		],
		[ 300 ],
		'TV', 3, 2012, 'Light novel', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'10/41927',
		[
			'Inu x Boku SS: Miketsukami-kun Henka/Switch/Omamagoto',
			'妖狐×僕SS 御狐神くん変化 / スイッチ / おままごと',
			'Inu X Boku Secret Service Episode 13',
		],
		[ 287 ],
		'Special', 2, 2012, 'Manga', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tShounen',
		]
	),
	new Anime(
		'1760/98794',
		[
			'Inu x Boku SS',
			'妖狐×僕SS',
			'Inu X Boku Secret Service',
		],
		[ 287 ],
		'TV', 0, 2012, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tMythology',
			'tShounen',
		]
	),
	new Anime(
		'1318/92768',
		[
			'Tokyo Ravens',
			'東京レイヴンズ',
		],
		[ 441 ],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'7/75235',
		[
			'Magical☆Star Kanon 100%',
			'マジカル☆スター　かのん100％',
			'Magical Star Kanon 100%!',
		],
		[ 32 ],
		'OVA', 1, 2013, 'Manga', 0, 1,
		[
			'tMusic',
			'tShounen',
			'tMahouShoujo',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'6/51949',
		[
			'Kami nomi zo Shiru Sekai: Megami-hen',
			'神のみぞ知るセカイ 女神篇',
			'The World God Only Knows: Goddesses',
		],
		[ 32 ],
		'TV', 2, 2013, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tShounen',
			'tOtakuCulture',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'11/43359',
		[
			'Kami nomi zo Shiru Sekai: Tenri-hen',
			'神のみぞ知るセカイ 天理篇',
			'The World God Only Knows: Tenri Arc',
		],
		[ 32 ],
		'OVA', 3, 2012, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'12/32297',
		[
			'Kami nomi zo Shiru Sekai: 4-nin to Idol',
			'神のみぞ知るセカイ　４人とアイドル',
			'The World God Only Knows: Four Girls and an Idol',
		],
		[ 32 ],
		'OVA', 2, 2011, 'Manga', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tMusic',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'11/30030',
		[
			'Kami nomi zo Shiru Sekai II',
			'神のみぞ知るセカイ II',
			'The World God Only Knows II',
		],
		[ 32 ],
		'TV', 1, 2011, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tShounen',
			'tOtakuCulture',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/43361',
		[
			'Kami nomi zo Shiru Sekai',
			'神のみぞ知るセカイ',
			'The World God Only Knows',
		],
		[ 32 ],
		'TV', 3, 2010, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tShounen',
			'tOtakuCulture',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'10/75585',
		[
			'Kotoura-san',
			'琴浦さん',
			'The Troubled Life of Miss Kotoura',
		],
		[ 1306 ],
		'TV', 0, 2013, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'3/75788',
		[
			'Hentai Ouji to Warawanai Neko.',
			'変態王子と笑わない猫。',
			'The "Hentai" Prince and the Stony Cat',
		],
		[ 7 ],
		'TV', 1, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tSchool',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'13/44187',
		[
			'Ore no Kanojo to Osananajimi ga Shuraba Sugiru',
			'俺の彼女と幼なじみが修羅場すぎる',
			'Oreshura',
		],
		[ 56 ],
		'TV', 0, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1314/129575',
		[
			'Ore no Imouto ga Konnani Kawaii Wake ga Nai. Specials',
			'俺の妹がこんなに可愛いわけがない。',
			'OreImo 2 Specials',
		],
		[ 56 ],
		'ONA', 2, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/45769',
		[
			'Ore no Imouto ga Konnani Kawaii Wake ga Nai.',
			'俺の妹がこんなに可愛いわけがない。',
			'Oreimo 2',
		],
		[ 56 ],
		'TV', 1, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tOtakuCulture',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/29734',
		[
			'Ore no Imouto ga Konnani Kawaii Wake ga Nai Specials',
			'俺の妹がこんなに可愛いわけがない',
			'OreImo Specials',
		],
		[ 436 ],
		'ONA', 0, 2011, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tOtakuCulture',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'10/28240',
		[
			'Ore no Imouto ga Konnani Kawaii Wake ga Nai',
			'俺の妹がこんなに可愛いわけがない',
			'OreImo',
		],
		[ 436 ],
		'TV', 3, 2010, 'Light novel', 0, 1,
		[
			'tComedy',
			'tOtakuCulture',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1624/112109',
		[
			'Yuusha ni Narenakatta Ore wa Shibushibu Shuushoku wo Ketsui Shimashita. OVA',
			'勇者になれなかった俺はしぶしぶ就職を決意しました。OVA',
			"Yusibu: I couldn't become a hero, so I reluctantly decided to get a job. OVA",
		],
		[ 163 ],
		'OVA', 0, 2014, 'Light novel', 2, 1,
		[
			'tComedy',
			'tFantasy',
			'tEcchi',
		]
	),
	new Anime(
		'13/54389',
		[
			'Yuusha ni Narenakatta Ore wa Shibushibu Shuushoku wo Ketsui Shimashita.',
			'勇者になれなかった俺はしぶしぶ就職を決意しました。',
			'I Couldn`t Become a Hero, So I Reluctantly Decided to Get a Job',
		],
		[ 163 ],
		'TV', 3, 2013, 'Light novel', 2, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
		]
	),
	new Anime(
		'12/52091',
		[
			'Golden Time',
			'ゴールデンタイム',
		],
		[ 7 ],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tAdultCast',
			'tLovePolygon',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/44724',
		[
			'Boku wa Tomodachi ga Sukunai Next',
			'僕は友達が少ないNEXT',
			"Haganai: I don't have many friends NEXT",
		],
		[ 436 ],
		'TV', 0, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'3/39215',
		[
			'Boku wa Tomodachi ga Sukunai: Relay Shousetsu wa Ketsumatsu ga Hanpanai',
			'僕は友達が少ない リレー小説は結末が半端ないL(゜□゜)」',
			"Haganai: A Round-Robin Story's Ending Is Way Extreme",
		],
		[ 436 ],
		'OVA', 2, 2012, 'Light novel', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tLovePolygon',
		]
	),
	new Anime(
		'8/32873',
		[
			'Boku wa Tomodachi ga Sukunai',
			'僕は友達が少ない',
			"Haganai: I don't have many friends",
		],
		[ 436 ],
		'TV', 3, 2011, 'Light novel', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'1215/100764',
		[
			'Trinity Seven Movie 2: Heavens Library to Crimson Lord',
			'劇場版 トリニティセブン -天空図書館〈ヘブンズライブラリー〉と真紅の魔王〈クリムゾンロード〉',
		],
		[ 1569 ],
		'Movie', 0, 2019, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1031/112821',
		[
			'Trinity Seven Movie 1: Eternity Library to Alchemic Girl',
			'劇場版 トリニティセブン －悠久図書館〈エターニティライブラリー〉と錬金術少女〈アルケミックガール〉－',
			'Trinity Seven: Eternity Library & Alchemic Girl',
		],
		[ 1569 ],
		'Movie', 0, 2017, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'3/74066',
		[
			'Trinity Seven: Nanatsu no Taizai to Nana Madoushi',
			'トリニティセブン 七つの大罪と七魔道士',
			'Trinity Seven: The Seven Deadly Sins and The Seven Mages',
		],
		[ 1569 ],
		'OVA', 0, 2015, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'12/67795',
		[
			'Trinity Seven',
			'トリニティセブン',
		],
		[ 1569 ],
		'TV', 3, 2014, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'13/64061',
		[
			'Saikin, Imouto no Yousu ga Chotto Okashiinda ga. OVA',
			'最近、妹のようすがちょっとおかしいんだが。 OVA',
		],
		[ 439 ],
		'OVA', 1, 2014, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tShounen',
		]
	),
	new Anime(
		'3/56589',
		[
			'Saikin, Imouto no Yousu ga Chotto Okashiinda ga.',
			'最近、妹のようすがちょっとおかしいんだが。',
			'Recently, my sister is unusual',
		],
		[ 439 ],
		'TV', 0, 2014, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tShounen',
		]
	),
	new Anime(
		'6/57563',
		[
			'Nourin',
			'のうりん',
			'No-Rin',
		],
		[ 300 ],
		'TV', 0, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tParody',
			'tSchool',
		]
	),
	new Anime(
		'3/69591',
		[
			'Kanojo ga Flag wo Oraretara: Christmas? Sonna Mono ga Boku ni Tsuuyou Suru to Omou no ka?',
			'彼女がフラグをおられたら クリスマス? そんな物が僕に通用すると思うのか?',
		],
		[ 346 ],
		'OVA', 3, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'11/63363',
		[
			'Kanojo ga Flag wo Oraretara',
			'彼女がフラグをおられたら',
			'If Her Flag Breaks',
		],
		[ 346 ],
		'TV', 1, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'7/60095',
		[
			'Mikakunin de Shinkoukei: Kamoniku tte Midori-ppoi Aji ga Suru no ne.',
			'未確認で進行形 「鴨肉って緑っぽい味がするのね。」',
		],
		[ 95 ],
		'OVA', 0, 2014, '4-koma	manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/64481',
		[
			'Mikakunin de Shinkoukei: Mite. Are ga Watashitachi no Tomatteiru Ryokan yo.',
			'未確認で進行形 「見て。あれが私たちの泊まっている旅館よ。」',
		],
		[ 95 ],
		'Special', 0, 2014, '4-koma	manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'10/75249',
		[
			'Mikakunin de Shinkoukei',
			'未確認で進行形',
			'Engaged to the Unidentified',
		],
		[ 95 ],
		'TV', 0, 2014, '4-koma	manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/89974',
		[
			'Chuunibyou demo Koi ga Shitai! Movie: Take On Me',
			'映画 中二病でも恋がしたい！-Take On Me-',
			'Love, Chunibyo & Other Delusions!: Take On Me',
		],
		[ 2 ],
		'Movie', 0, 2018, 'Light novel', 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/66827',
		[
			'Chuunibyou demo Koi ga Shitai! Ren: The Rikka Wars',
			' 中二病でも恋がしたい！戀 再生の･･･邪王真眼黙示録（The Rikka Wars）',
			'Love, Chunibyo & Other Delusions!: Heart Throb - The Rikka Wars',
		],
		[ 2 ],
		'Special', 2, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'13/60351',
		[
			'Chuunibyou demo Koi ga Shitai! Ren Specials',
			'中二病でも恋がしたい！戀 未放送ショートムービー',
			'Love, Chunibyo & Other Delusions: Heart Throb Specials',
		],
		[ 2 ],
		'Special', 0, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'7/56643',
		[
			'Chuunibyou demo Koi ga Shitai! Ren',
			'中二病でも恋がしたい！戀',
			'Love, Chunibyo & Other Delusions!: Heart Throb',
		],
		[ 2 ],
		'TV', 0, 2014, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'7/45512',
		[
			'Chuunibyou demo Koi ga Shitai! Kirameki no... Slapstick Noel',
			'中二病でも恋がしたい! 煌めきの... 聖爆誕祭（スラップステック・ノエル）',
			'Love, Chunibyo & Other Delusions!: Sparkling... Slapstick Noel',
		],
		[ 2 ],
		'Special', 1, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'9/43245',
		[
			'Chuunibyou demo Koi ga Shitai! Depth of Field: Ai to Nikushimi Gekijou',
			'中二病でも恋がしたい！DEPTH OF FIELD ～ 愛と憎しみ劇場',
			'Love, Chunibyo & Other Delusions! Depth of Field: Love and Hate Theater',
		],
		[ 2 ],
		'Special', 3, 2012, 'Light novel', 0, 1,
		[
			'tAction',
			'tMecha',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'12/46931',
		[
			'Chuunibyou demo Koi ga Shitai!',
			'中二病でも恋がしたい!',
			'Love, Chunibyo & Other Delusions!',
		],
		[ 2 ],
		'TV', 3, 2012, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'5/42655',
		[
			'Chuunibyou demo Koi ga Shitai! Lite',
			'中二病でも恋がしたい！Lite',
			'Love, Chunibyo & Other Delusions!: Chuni-Shorts',
		],
		[ 2 ],
		'ONA', 2, 2012, 'Light novel', 0, 1,
		[
			'tComedy',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/72479',
		[
			'Hitsugi no Chaika: Nerawareta Hitsugi/Yomigaeru Iseki',
			'棺姫のチャイカ ねらわれた棺 / 蘇る遺跡',
		],
		[ 4 ],
		'OVA', 0, 2015, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/67797',
		[
			'Hitsugi no Chaika: Avenging Battle',
			'棺姫のチャイカ AVENGING BATTLE',
			'Chaika -The Coffin Princess- Avenging Battle',
		],
		[ 4 ],
		'TV', 3, 2014, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'4/61781',
		[
			'Hitsugi no Chaika',
			'棺姫のチャイカ',
			'Chaika -The Coffin Princess-',
		],
		[ 4 ],
		'TV', 1, 2014, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1901/131653',
		[
			'Kyokou Suiri Season 2',
			'虚構推理 Season2',
			'In/Spectre 2',
		],
		[ 112 ],
		'TV', 0, 2023, 'Manga', 1, 1,
		[
			'tMystery',
			'tRomance',
			'tSupernatural',
			'tMythology',
			'tShounen',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1310/117188',
		[
			'Kyokou Suiri',
			'虚構推理',
			'In/Spectre',
		],
		[ 112 ],
		'TV', 0, 2020, 'Manga', 1, 1,
		[
			'tMystery',
			'tRomance',
			'tSupernatural',
			'tMythology',
			'tShounen',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'4/72173',
		[
			'Seireitsukai no Blade Dance Specials',
			'精霊使いの剣舞〈ブレイドダンス〉ミニOVA',
		],
		[ 120 ],
		'Special', 3, 2014, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tSchool',
		]
	),
	new Anime(
		'7/63031',
		[
			'Seireitsukai no Blade Dance',
			'精霊使いの剣舞〈ブレイドダンス〉',
			'Blade Dance of the Elementalers',
		],
		[ 120 ],
		'TV', 2, 2014, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'6/76840',
		[
			'Nagato Yuki-chan no Shoushitsu: Owarenai Natsuyasumi',
			'長門有希ちゃんの消失 第17話「終われない夏休み」',
			'The Disappearance of Nagato Yuki-chan: I Cannot Let Summer Break End',
		],
		[ 41 ],
		'OVA', 3, 2015, 'Manga', 0, 1,
		[
			'tComedy',
			'tSeinen',
		]
	),
	new Anime(
		'3/73527',
		[
			'Nagato Yuki-chan no Shoushitsu',
			'長門有希ちゃんの消失',
			'The Disappearance of Nagato Yuki-chan',
		],
		[ 41 ],
		'TV', 1, 2015, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSeinen',
		]
	),
	new Anime(
		'1764/142001',
		[
			'Romantic Killer',
			'ロマンティック・キラー',
		],
		[ 1380 ],
		'ONA', 3, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tParody',
			'tHarem',
			'tShounen',
		]
	),
	new Anime(
		'9/76542',
		[
			'Ore ga Ojousama Gakkou ni "Shomin Sample" Toshite Gets♥Sareta Ken',
			'俺がお嬢様学校に「庶民サンプル」としてゲッツされた件',
			'Shomin Sample',
		],
		[ 300 ],
		'TV', 3, 2015, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'1702/97867',
		[
			'Saenai Heroine no Sodatekata Fine',
			'冴えない彼女の育てかた Fine',
			'Saekano the Movie: Finale',
		],
		[ 1835 ],
		'Movie', 3, 2019, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tOtakuCulture',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/84797',
		[
			'Saenai Heroine no Sodatekata ♭',
			'冴えない彼女〈ヒロイン〉の育てかた♭',
			'Saekano: How to Raise a Boring Girlfriend .flat',
		],
		[ 56 ],
		'TV', 1, 2017, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tOtakuCulture',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'5/86672',
		[
			'Saenai Heroine no Sodatekata ♭: Koi to Junjou no Service-kai',
			'冴えない彼女〈ヒロイン〉の育てかた♭ #0 「恋と純情のサービス回」',
			'Saekano: How to Raise a Boring Girlfriend .flat - Fan Service of Love and Pure heart',
		],
		[ 56 ],
		'Special', 1, 2017, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'7/68783',
		[
			'Saenai Heroine no Sodatekata',
			'冴えない彼女〈ヒロイン〉の育てかた',
			'Saekano: How to Raise a Boring Girlfriend',
		],
		[ 56 ],
		'TV', 0, 2015, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tOtakuCulture',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'6/70493',
		[
			'Saenai Heroine no Sodatekata: Ai to Seishun no Service-kai',
			'冴えない彼女の育てかた #0 「愛と青春のサービス回」',
			'Saekano: Fan Service of Love and Youth',
		],
		[ 56 ],
		'Special', 0, 2015, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/73700',
		[
			'Yamada-kun to 7-nin no Majo',
			'山田くんと7人の魔女',
			'Yamada-kun and the Seven Witches',
		],
		[ 839 ],
		'TV', 1, 2015, 'Manga', 0, 1,
		[
			'tComedy',
			'tMystery',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1079/104630',
		[
			'Yamada-kun to 7-nin no Majo: Mou Hitotsu no Suzaku-sai',
			'山田くんと7人の魔女 OAD',
		],
		[ 839 ],
		'OVA', 3, 2014, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'13/72626',
		[
			'Nisekoi:',
			'ニセコイ',
			'Nisekoi: False Love',
		],
		[ 44 ],
		'TV', 1, 2015, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1992/112119',
		[
			'Nisekoi: OVA',
			'ニセコイ OAD',
		],
		[ 44 ],
		'OVA', 0, 2016, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/71754',
		[
			'Nisekoi OVA',
			'ニセコイ OAD',
		],
		[ 44 ],
		'OVA', 3, 2014, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'13/75587',
		[
			'Nisekoi',
			'ニセコイ',
			'Nisekoi: False Love',
		],
		[ 44 ],
		'TV', 0, 2014, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1979/106698',
		[
			'Momokuri',
			'ももくり',
		],
		[ 41 ],
		'ONA', 3, 2015, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/80688',
		[
			'Kono Bijutsu-bu ni wa Mondai ga Aru!',
			'この美術部には問題がある！',
			'This Art Club Has a Problem!',
		],
		[ 91 ],
		'TV', 2, 2016, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tVisualArts',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'13/83930',
		[
			'Rewrite 2nd Season',
			'Rewrite 2ndシーズン',
			'Rewrite: Moon and Terra',
		],
		[ 441 ],
		'TV', 0, 2017, 'Visual novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1827/92122',
		[
			'Rewrite',
			'リライト',
		],
		[ 441 ],
		'TV', 2, 2016, 'Visual novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/82409',
		[
			'Okusama ga Seitokaichou!+!',
			'おくさまが生徒会長!＋!',
			'My Wife is the Student Council President!+',
		],
		[ 541 ],
		'TV', 3, 2016, 'Manga', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'12/78265',
		[
			'Okusama ga Seitokaichou! Seitokaichou to Ofuro Asobi',
			'おくさまが生徒会長！ 生徒会長とお風呂遊び',
			'My Wife is the Student Council President OVA',
		],
		[ 541 ],
		'OVA', 0, 2016, 'Manga', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tShounen',
		]
	),
	new Anime(
		'9/76157',
		[
			'Okusama ga Seitokaichou!',
			'おくさまが生徒会長！',
			'My Wife is the Student Council President!',
		],
		[ 541 ],
		'TV', 2, 2015, 'Manga', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1619/106323',
		[
			'Dokyuu Hentai HxEros OVA',
			'ド級編隊エグゼロス',
		],
		[ 439 ],
		'OVA', 3, 2020, 'Manga', 2, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tSciFi',
			'tEcchi',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1342/108321',
		[
			'Dokyuu Hentai HxEros',
			'ド級編隊エグゼロス',
			'SUPER HXEROS',
		],
		[ 439 ],
		'TV', 2, 2020, 'Manga', 2, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tSciFi',
			'tEcchi',
			'tSchool',
			'tSuperPower',
			'tShounen',
		]
	),
	new Anime(
		'9/84266',
		[
			'Renai Boukun',
			'恋愛暴君',
			'Love Tyrant',
		],
		[ 1264 ],
		'TV', 1, 2017, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'1833/95350',
		[
			'Osake wa Fuufu ni Natte kara: Yuzu Atsukan',
			'お酒は夫婦になってから 14杯め「ゆず熱燗',
		],
		[ 1195 ],
		'ONA', 3, 2018, 'Web manga', 0, 1,
		[
			'tComedy',
			'tGourmet',
			'tRomance',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1554/116612',
		[
			'Osake wa Fuufu ni Natte kara',
			'お酒は夫婦になってから',
			'Love is Like a Cocktail',
		],
		[ 1195 ],
		'TV', 3, 2017, 'Web manga', 0, 1,
		[
			'tComedy',
			'tGourmet',
			'tRomance',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1582/96343',
		[
			'Eromanga-sensei OVA',
			'エロマンガ先生 OVA',
			'Eromanga Sensei OVA',
		],
		[ 56 ],
		'OVA', 0, 2019, 'Light novel', 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tEcchi',
			'tOtakuCulture',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/86468',
		[
			'Eromanga-sensei',
			'エロマンガ先生',
			'Eromanga Sensei',
		],
		[ 56 ],
		'TV', 1, 2017, 'Light novel', 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tEcchi',
			'tOtakuCulture',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/89469',
		[
			'Yuragi-sou no Yuuna-san OVA',
			'ゆらぎ荘の幽奈さん',
		],
		[ 27, 1278 ],
		'OVA', 2, 2018, 'Manga', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1462/98802',
		[
			'Yuragi-sou no Yuuna-san',
			'ゆらぎ荘の幽奈さん',
			'Yuuna and the Haunted Hot Springs',
		],
		[ 27 ],
		'TV', 2, 2018, 'Manga', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1908/93416',
		[
			'Kishuku Gakkou no Juliet',
			'寄宿学校のジュリエット',
			'Boarding School Juliet',
		],
		[ 839 ],
		'TV', 3, 2018, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1577/111404',
		[
			'Val x Love',
			'戦×恋（ヴァルラヴ）',
		],
		[ 346 ],
		'TV', 3, 2019, 'Manga', 1, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1448/127956',
		[
			'Bocchi the Rock!',
			'ぼっち・ざ・ろっく！',
		],
		[ 1835 ],
		'TV', 3, 2022, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tMusic',
			'tCGDCT',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1334/132921',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan: Dakara, Shishunki wa Owarazu ni, Seishun wa Tsuzuiteiku.',
			'やはり俺の青春ラブコメはまちがっている。結',
			'My Teen Romantic Comedy SNAFU Climax! OVA',
		],
		[ 91 ],
		'OVA', 1, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1958/107912',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan',
			'やはり俺の青春ラブコメはまちがっている。完',
			'My Teen Romantic Comedy SNAFU Climax!',
		],
		[ 91 ],
		'TV', 2, 2020, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'13/84052',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku OVA',
			'やはり俺の青春ラブコメはまちがっている. 続 きっと, 女の子はお砂糖とスパイスと素敵な何かでできている。',
			'My Teen Romantic Comedy SNAFU TOO! OVA',
		],
		[ 91 ],
		'OVA', 3, 2016, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'11/75376',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku',
			'やはり俺の青春ラブコメはまちがっている。続',
			'My Teen Romantic Comedy SNAFU TOO!',
		],
		[ 91 ],
		'TV', 1, 2015, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'9/54831',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru. OVA',
			'やはり俺の青春ラブコメはまちがっている。OVA「こちらとしても彼ら彼女らの行く末に幸多からんことを願わざるを得ない。」',
			'My Teen Romantic Comedy SNAFU OVA',
		],
		[ 112 ],
		'OVA', 2, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'11/49459',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru.',
			'やはり俺の青春ラブコメはまちがっている。',
			'My Teen Romantic Comedy SNAFU',
		],
		[ 112 ],
		'TV', 1, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1448/108514',
		[
			'Maoujou de Oyasumi',
			'魔王城でおやすみ',
			'Sleepy Princess in the Demon Castle',
		],
		[ 95 ],
		'TV', 3, 2020, 'Manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tMythology',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1299/106117',
		[
			'Hatena☆Illusion',
			'はてな☆イリュージョン',
			'Hatena Illusion',
		],
		[ 1407 ],
		'TV', 0, 2020, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
		]
	),
	new Anime(
		'1662/118849',
		[
			'Taishou Otome Otogibanashi',
			'大正処女御伽話',
			'Taisho Otome Fairy Tale',
		],
		[ 118 ],
		'TV', 3, 2021, 'Manga', 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tHistorical',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1843/115815',
		[
			'Tantei wa Mou, Shindeiru.',
			'探偵はもう、死んでいる。',
			'The Detective Is Already Dead',
		],
		[ 1974 ],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			'tComedy',
			'tMystery',
			'tRomance',
		]
	),
	new Anime(
		'1996/118848',
		[
			'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta... OVA',
			'乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった… OAD',
			'My Next Life as a Villainess: All Routes Lead to Doom! X: I Met My Destined One...',
		],
		[ 300 ],
		'OVA', 2, 2021, 'Light novel', 0, 1,
		[
			'tComedy',
			'tDrama',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tReincarnation',
			'tHarem',
			'tSchool',
			'tShoujo',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1088/116439',
		[
			'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta... X',
			'乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…X',
			'My Next Life as a Villainess: All Routes Lead to Doom! X',
		],
		[ 300 ],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tReincarnation',
			'tHarem',
			'tSchool',
			'tShoujo',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1483/107061',
		[
			'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta...',
			'乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…',
			'My Next Life as a Villainess: All Routes Lead to Doom!',
		],
		[ 300 ],
		'TV', 1, 2020, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tReincarnation',
			'tHarem',
			'tSchool',
			'tShoujo',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1447/121183',
		[
			'RPG Fudousan',
			'RPG不動産',
			'RPG Real Estate',
		],
		[ 95 ],
		'TV', 1, 2022, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tCGDCT',
		]
	),
	new Anime(
		'1347/120593',
		[
			'Koi wa Sekai Seifuku no Ato de',
			'恋は世界征服のあとで',
			'Love After World Domination',
		],
		[ 439 ],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tParody',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1670/130060',
		[
			'Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai',
			'かぐや様は告らせたい -ファーストキッスは終わらない-',
			'Kaguya-sama: Love is War - The First Kiss That Never Ends',
		],
		[ 56 ],
		'Movie', 3, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1160/122627',
		[
			'Kaguya-sama wa Kokurasetai: Ultra Romantic',
			'かぐや様は告らせたい-ウルトラロマンティック-',
			'Kaguya-sama: Love is War - Ultra Romantic',
		],
		[ 56 ],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1027/115055',
		[
			'Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen OVA',
			'かぐや様は告らせたい？ ～天才たちの恋愛頭脳戦～ OVA',
			'Kaguya-sama: Love is War OVA',
		],
		[ 56 ],
		'OVA', 1, 2021, 'Manga', 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tLoveStatusQuo',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1764/106659',
		[
			'Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen',
			'かぐや様は告らせたい？～天才たちの恋愛頭脳戦～',
			'Kaguya-sama: Love is War Season 2',
		],
		[ 56 ],
		'TV', 1, 2020, 'Manga', 0, 1,
		[
			'tComedy',
			'tPsychological',
			'tLoveStatusQuo',
			'tSchool',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1295/106551',
		[
			'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
			'かぐや様は告らせたい～天才たちの恋愛頭脳戦～',
			'Kaguya-sama: Love is War',
		],
		[ 56 ],
		'TV', 0, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tPsychological',
			'tLoveStatusQuo',
			'tSchool',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1814/99677',
		[
			'Sewayaki Kitsune no Senko-san',
			'世話やきキツネの仙狐さん',
			'The Helpful Fox Senko-san',
		],
		[ 95 ],
		'TV', 1, 2019, 'Web manga', 0, 1,
		[
			'tSliceofLife',
			'tSupernatural',
			'tIyashikei',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1557/137227',
		[
			'Kobayashi-san Chi no Maid Dragon S: Nippon no Omotenashi - Attend wa Dragon desu',
			'小林さんちのメイドラゴンＳ ニッポンのおもてなし（アテンドはドラゴンです）',
			"Miss Kobayashi's Dragon Maid S: Japanese HospitalityThe Attendant is a Dragon",
		],
		[ 2 ],
		'Special', 0, 2022, 'Manga', 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1252/115539',
		[
			'Kobayashi-san Chi no Maid Dragon S',
			'小林さんちのメイドラゴンS',
			"Miss Kobayashi's Dragon Maid S",
		],
		[ 2 ],
		'TV', 2, 2021, 'Manga', 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'5/88486',
		[
			'Kobayashi-san Chi no Maid Dragon: Valentine, Soshite Onsen! - Amari Kitai Shinaide Kudasai',
			'小林さんちのメイドラゴン バレンタイン, そして温泉! (あまり期待しないでください)',
			"Miss Kobayashi's Dragon Maid: Valentine's, and Then Hot Springs! (Please Don't Get Your Hopes Up)",
		],
		[ 2 ],
		'Special', 2, 2017, 'Manga', 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'5/85434',
		[
			'Kobayashi-san Chi no Maid Dragon',
			'小林さんちのメイドラゴン',
			"Miss Kobayashi's Dragon Maid",
		],
		[ 2 ],
		'TV', 0, 2017, 'Manga', 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1062/114363',
		[
			'Clockwork Planet',
			'クロックワーク・プラネット',
		],
		[ 27 ],
		'TV', 1, 2017, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tSciFi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/85593',
		[
			'Rokudenashi Majutsu Koushi to Akashic Records',
			'ロクでなし魔術講師と禁忌教典',
			'Akashic Records of Bastard Magic Instructor',
		],
		[ 839 ],
		'TV', 1, 2017, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1956/94914',
		[
			'Shichisei no Subaru',
			'七星のスバル',
			"Seven Senses of the Re'Union",
		],
		[ 456 ],
		'TV', 2, 2018, 'Light novel', 0, 1,
		[
			'tAction',
			'tDrama',
			'tFantasy',
			'tVideoGame',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1100/138338',
		[
			'Goblin Slayer II',
			'ゴブリンスレイヤーⅡ',
		],
		[ 839 ],
		'TV', 3, 2023, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tGore',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1129/111477',
		[
			"Goblin Slayer: Goblin's Crown",
			"ゴブリンスレイヤー -GOBLIN'S CROWN-",
		],
		[ 314 ],
		'Movie', 0, 2020, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tGore',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1719/95621',
		[
			'Goblin Slayer',
			'ゴブリンスレイヤー',
		],
		[ 314 ],
		'TV', 3, 2018, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tGore',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1827/95738',
		[
			'Beelzebub-jou no Okinimesu mama.',
			'ベルゼブブ嬢のお気に召すまま。',
			'As Miss Beelzebub Likes.',
		],
		[ 839 ],
		'TV', 3, 2018, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tMythology',
			'tWorkplace',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1317/139802',
		[
			'Tate no Yuusha no Nariagari Season 3',
			'盾の勇者の成り上がり Season 3',
			'The Rising of the Shield Hero Season 3',
		],
		[ 290 ],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1189/124642',
		[
			'Tate no Yuusha no Nariagari Season 2',
			'盾の勇者の成り上がり Season2',
			'The Rising of the Shield Hero Season 2',
		],
		[ 290, 1575 ],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1490/101365',
		[
			'Tate no Yuusha no Nariagari',
			'盾の勇者の成り上がり',
			'The Rising of the Shield Hero',
		],
		[ 290 ],
		'TV', 0, 2019, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1568/101203',
		[
			'Uchi no Ko no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirenai.',
			'うちの娘の為ならば、俺はもしかしたら魔王も倒せるかもしれない。',
			"If It's for My Daughter, I'd Even Defeat a Demon Lord",
		],
		[ 1978 ],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tChildcare',
		]
	),
	new Anime(
		'1693/111618',
		[
			'Assassins Pride',
			'アサシンズプライド',
		],
		[ 1264 ],
		'TV', 3, 2019, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1169/95381',
		[
			'Toaru Kagaku no Accelerator',
			'とある科学の一方通行〈アクセラレータ〉',
			'A Certain Scientific Accelerator',
		],
		[ 7 ],
		'TV', 2, 2019, 'Manga', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tSciFi',
			'tSuperPower',
		]
	),
	new Anime(
		'1024/108413',
		[
			'Assault Lily: Bouquet',
			'アサルトリリィ Bouquet',
		],
		[ 44 ],
		'TV', 3, 2020, 'Mixed media', 0, 1,
		[
			'tAction',
			'tFantasy',
		]
	),
	new Anime(
		'1885/109122',
		[
			"King's Raid: Ishi wo Tsugumono-tachi",
			'キングスレイド 意志を継ぐものたち',
			"King's Raid: Successors of the Will",
		],
		[ 28, 2004 ],
		'TV', 3, 2020, 'Game', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1399/141651',
		[
			'Maou Gakuin no Futekigousha II: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou Part 2',
			'魔王学院の不適合者 II ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～ 第2クール',
			'The Misfit of Demon King Academy II Part 2',
		],
		[ 300 ],
		'TV', 1, 2024, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tReincarnation',
			'tSchool',
		]
	),
	new Anime(
		'1475/137152',
		[
			'Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II',
			'魔王学院の不適合者 ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～ II',
			'The Misfit of Demon King Academy Ⅱ',
		],
		[ 300 ],
		'TV', 0, 2023, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tReincarnation',
			'tSchool',
		]
	),
	new Anime(
		'1126/108573',
		[
			'Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou',
			'魔王学院の不適合者 ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～',
			'The Misfit of Demon King Academy',
		],
		[ 300 ],
		'TV', 2, 2020, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tReincarnation',
			'tSchool',
		]
	),
	new Anime(
		'1660/143460',
		[
			'Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen Season II',
			'キミと僕の最後の戦場、あるいは世界が始まる聖戦 Season Ⅱ',
			'Our Last Crusade or the Rise of a New World Season 2',
		],
		[ 300, 2201 ],
		'TV', 2, 2024, 'Light novel', 0, 0,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tMilitary',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1100/109044',
		[
			'Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen',
			'キミと僕の最後の戦場、あるいは世界が始まる聖戦',
			'Our Last Crusade or the Rise of a New World',
		],
		[ 300 ],
		'TV', 3, 2020, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tMilitary',
		]
	),
	new Anime(
		'1044/106309',
		[
			'Shachou, Battle no Jikan desu!',
			'社長, バトルの時間です!',
			"Shachibato! President, It's Time for Battle!",
		],
		[ 605 ],
		'TV', 1, 2020, 'Game', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1100/142255',
		[
			'Mahouka Koukou no Rettousei 3rd Season',
			'魔法科高校の劣等生 第3シーズン',
			'The Irregular at Magic High School Season 3',
		],
		[ 441 ],
		'TV', 1, 2024, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tRomance',
			'tSciFi',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1847/120234',
		[
			'Mahouka Koukou no Rettousei: Tsuioku-hen',
			'魔法科高校の劣等生 追憶編',
			'The Irregular at Magic High School: Reminiscence Arc',
		],
		[ 441 ],
		'Special', 3, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tSciFi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1719/116262',
		[
			'Mahouka Koukou no Yuutousei',
			'魔法科高校の優等生',
			'The Honor Student at Magic High School',
		],
		[ 957 ],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tUrbanFantasy',
			'tSciFi',
			'tSchool',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1629/109556',
		[
			'Mahouka Koukou no Rettousei: Raihousha-hen',
			'魔法科高校の劣等生 来訪者編',
			'The Irregular at Magic High School: Visitor Arc',
		],
		[ 441 ],
		'TV', 3, 2020, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tRomance',
			'tSciFi',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1690/114330',
		[
			'Mahouka Koukou no Rettousei Movie: Hoshi wo Yobu Shoujo',
			'劇場版 魔法科高校の劣等生 星を呼ぶ少女',
			'The Irregular at Magic High School The Movie - The Girl Who Summons The Stars',
		],
		[ 441 ],
		'Movie', 1, 2017, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tSciFi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'11/61039',
		[
			'Mahouka Koukou no Rettousei',
			'魔法科高校の劣等生',
			'The Irregular at Magic High School',
		],
		[ 11 ],
		'TV', 1, 2014, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tRomance',
			'tSciFi',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1620/130589',
		[
			'Renai Flops',
			'恋愛フロップス',
			'Love Flops',
		],
		[ 911 ],
		'TV', 3, 2022, 'Original', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'1013/108558',
		[
			'Tatoeba Last Dungeon Mae no Mura no Shounen ga Joban no Machi de Kurasu Youna Monogatari',
			'たとえばラストダンジョン前の村の少年が序盤の街で暮らすような物語',
			'Suppose a Kid from the Last Dungeon Boonies Moved to a Starter Town?',
		],
		[ 839 ],
		'TV', 0, 2021, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1079/114017',
		[
			'Seven Knights Revolution: Eiyuu no Keishousha',
			'セブンナイツ レボリューション -英雄の継承者-',
			'Seven Knights Revolution: Hero Successor',
		],
		[ 839, 1380 ],
		'TV', 1, 2021, 'Game', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1444/115118',
		[
			'Sentouin, Hakenshimasu!',
			'戦闘員、派遣します！',
			'Combatants Will Be Dispatched!',
		],
		[ 7 ],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tSciFi',
			'tIsekai',
		]
	),
	new Anime(
		'1873/139792',
		[
			'Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita 2nd',
			'真の仲間じゃないと勇者のパーティーを追い出されたので、辺境でスローライフすることにしました 2nd',
			"Banished From The Hero's Party, I Decided To Live A Quiet Life In The Countryside Season 2",
		],
		[ 1693 ],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1723/117854',
		[
			'Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita',
			'真の仲間じゃないと勇者のパーティーを追い出されたので、辺境でスローライフすることにしました',
			"Banished From The Hero's Party, I Decided To Live A Quiet Life In The Countryside",
		],
		[ 1693, 2052 ],
		'TV', 3, 2021, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1093/121114',
		[
			'Mahoutsukai Reimeiki',
			'魔法使い黎明期',
			'The Dawn of the Witch',
		],
		[ 200 ],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tAnthropomorphic',
		]
	),
	new Anime(
		'1263/119511',
		[
			'Tensai Ouji no Akaji Kokka Saisei Jutsu',
			'天才王子の赤字国家再生術',
			"The Genius Prince's Guide to Raising a Nation Out of Debt",
		],
		[ 1687 ],
		'TV', 0, 2022, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
		]
	),
	new Anime(
		'1369/123738',
		[
			'Yuusha, Yamemasu: Kenshuu Ryokou wa Mokuteki wo Miushinau na',
			'勇者、辞めます「研修旅行は目的を見失うな」',
			"I'm Quitting Heroing: Remember, the Work Trip is First and Foremost a Learning Opportunity",
		],
		[ 1264 ],
		'Special', 1, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
		]
	),
	new Anime(
		'1934/122301',
		[
			'Yuusha, Yamemasu',
			'勇者、辞めます',
			"I'm Quitting Heroing",
		],
		[ 1264 ],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
		]
	),
	new Anime(
		'1713/126442',
		[
			'Fuufu Ijou, Koibito Miman.',
			'夫婦以上、恋人未満。',
			'More than a married couple, but not lovers.',
		],
		[ 2246 ],
		'TV', 3, 2022, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tSeinen',
			'tLovePolygon',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1387/127598',
		[
			'Kuro no Shoukanshi',
			'黒の召喚士',
			'Black Summoner',
		],
		[ 41 ],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'5/87145',
		[
			'Accel World: Infinite∞Burst',
			'アクセル・ワールド INFINITE∞BURST（インフィニット・バースト）',
		],
		[ 14 ],
		'Movie', 2, 2016, 'Light novel', 0, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tSchool',
			'tVideoGame',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1451/127575',
		[
			'Accel World EX',
			'アクセル・ワールド EX',
		],
		[ 14 ],
		'OVA', 2, 2012, 'Light novel', 0, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tSchool',
			'tVideoGame',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/38155',
		[
			'Accel World',
			'アクセル・ワールド',
		],
		[ 14 ],
		'TV', 1, 2012, 'Light novel', 0, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tSchool',
			'tVideoGame',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/44618',
		[
			'Mondaiji-tachi ga Isekai kara Kuru Sou desu yo?: Onsen Manyuuki',
			'問題児たちが異世界から来るそうですよ? 〜温泉漫遊記〜',
			"Problem Children Are Coming from Another World, Aren't They? OVA",
		],
		[ 51 ],
		'OVA', 2, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tIsekai',
		]
	),
	new Anime(
		'12/43369',
		[
			'Mondaiji-tachi ga Isekai kara Kuru Sou desu yo?',
			'問題児たちが異世界から来るそうですよ?',
			"Problem Children Are Coming from Another World, Aren't They?",
		],
		[ 51 ],
		'TV', 0, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tIsekai',
		]
	),
	new Anime(
		'7/54343',
		[
			'Outbreak Company',
			'アウトブレイク・カンパニー',
		],
		[ 91 ],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tParody',
			'tOtakuCulture',
		]
	),
	new Anime(
		'11/78160',
		[
			'Hai to Gensou no Grimgar: Furoagari no Kabe ni Kaketa Seishun - One More Centimeter',
			'灰と幻想のグリムガル 「風呂上りの壁にかけた青春―one more センチメートル」',
			'Grimgar: Staking Our Youths on the Bath Wall - One More Centimeter',
		],
		[ 56 ],
		'Special', 0, 2016, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'13/77976',
		[
			'Hai to Gensou no Grimgar',
			'灰と幻想のグリムガル',
			'Grimgar: Ashes and Illusions',
		],
		[ 56 ],
		'TV', 0, 2016, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1758/141268',
		[
			'Kono Subarashii Sekai ni Shukufuku wo! 3',
			'この素晴らしい世界に祝福を！3',
			"KonoSuba: God's Blessing on This Wonderful World! 3",
		],
		[ 1967 ],
		'TV', 1, 2024, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1626/135844',
		[
			'Kono Subarashii Sekai ni Bakuen wo!',
			'この素晴らしい世界に爆焔を！',
			'KonoSuba: An Explosion on This Wonderful World!',
		],
		[ 1967 ],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1129/117109',
		[
			'Kono Subarashii Sekai ni Shukufuku wo! Movie: Kurenai Densetsu',
			'映画 この素晴らしい世界に祝福を！紅伝説',
			"KonoSuba: God's Blessing on This Wonderful World! - Legend of Crimson",
		],
		[ 7 ],
		'Movie', 2, 2019, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1115/98517',
		[
			'Kono Subarashii Sekai ni Shukufuku wo! 2: Kono Subarashii Geijutsu ni Shukufuku wo!',
			'この素晴らしい世界に祝福を！2 この素晴らしい芸術に祝福を！',
			"KonoSuba: God's Blessing on This Wonderful World! 2 - God's Blessing on This Wonderful Art!",
		],
		[ 37 ],
		'OVA', 2, 2017, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/83188',
		[
			'Kono Subarashii Sekai ni Shukufuku wo! 2',
			'この素晴らしい世界に祝福を！2',
			"KonoSuba: God's Blessing on This Wonderful World! 2",
		],
		[ 37 ],
		'TV', 0, 2017, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1649/98516',
		[
			'Kono Subarashii Sekai ni Shukufuku wo! Kono Subarashii Choker ni Shukufuku wo!',
			'この素晴らしい世界に祝福を！ 第11話 この素晴らしいチヨーカーに祝福を！',
			"KonoSuba: God's Blessing on This Wonderful World! - God's Blessing on This Wonderful Choker!",
		],
		[ 37 ],
		'OVA', 1, 2016, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'8/77831',
		[
			'Kono Subarashii Sekai ni Shukufuku wo!',
			'この素晴らしい世界に祝福を！',
			"KonoSuba: God's Blessing on This Wonderful World!",
		],
		[ 37 ],
		'TV', 0, 2016, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1648/126110',
		[
			'Akuyaku Reijou nano de Last Boss wo Kattemimashita',
			'悪役令嬢なのでラスボスを飼ってみました',
			"I'm the Villainess, So I'm Taming the Final Boss",
		],
		[ 1978 ],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tReincarnation',
			'tShoujo',
		]
	),
	new Anime(
		'1585/95225',
		[
			'Hyakuren no Haou to Seiyaku no Valkyria',
			'百錬の覇王と聖約の戦乙女〈ヴァルキュリア〉',
			'The Master of Ragnarok & Blesser of Einherjar',
		],
		[ 1264 ],
		'TV', 2, 2018, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tMilitary',
		]
	),
	new Anime(
		'4/88911',
		[
			'Death March kara Hajimaru Isekai Kyousoukyoku',
			'デスマーチからはじまる異世界狂想曲',
			'Death March to the Parallel World Rhapsody',
		],
		[ 300, 957 ],
		'TV', 0, 2018, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1261/100452',
		[
			'Kenja no Mago',
			'賢者の孫',
			"Wise Man's Grandchild",
		],
		[ 300 ],
		'TV', 1, 2019, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tReincarnation',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1325/129603',
		[
			'Akiba Meido Sensou',
			'アキバ冥途戦争',
			'Akiba Maid War',
		],
		[ 132 ],
		'TV', 3, 2022, 'Original', 1, 1,
		[
			'tAction',
			'tComedy',
			'tOrganizedCrime',
		]
	),
	new Anime(
		'1736/103512',
		[
			'Hataage! Kemono Michi',
			'旗揚! けものみち',
			'Kemono Michi: Rise Up',
		],
		[ 1974 ],
		'TV', 3, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tShounen',
		]
	),
	new Anime(
		'1651/128718',
		[
			'Futoku no Guild',
			'不徳のギルド',
			'Immoral Guild',
		],
		[ 120 ],
		'TV', 3, 2022, 'Manga', 2, 1,
		[
			'tComedy',
			'tFantasy',
			'tErotica',
			'tHarem',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1824/99611',
		[
			'Isekai Cheat Magician: Yoiboshi no Matsuri to Majutsushi',
			'異世界チート魔術師 第13話「宵星の祭りと魔術師」',
		],
		[ 354 ],
		'Special', 2, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1282/102248',
		[
			'Isekai Cheat Magician',
			'異世界チート魔術師〈マジシャン〉',
		],
		[ 354 ],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1132/111619',
		[
			'Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!',
			'超人高校生たちは異世界でも余裕で生き抜くようです！',
			'CHOYOYU!: High School Prodigies Have It Easy Even in Another World!',
		],
		[ 439 ],
		'TV', 3, 2019, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tAction',
			'tAdventure',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1205/111403',
		[
			'Watashi, Nouryoku wa Heikinchi de tte Itta yo ne!',
			'私、能力は平均値でって言ったよね!',
			"Didn't I Say to Make My Abilities Average in the Next Life?!",
		],
		[ 439 ],
		'TV', 3, 2019, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		]
	),
	new Anime(
		'1667/145393',
		[
			'Maou-sama, Retry! R',
			'魔王様、リトライ! R',
			'Demon Lord, Retry! R',
		],
		[ 2554 ],
		'TV', 3, 2024, 'Web manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		]
	),
	new Anime(
		'1754/113897',
		[
			'Maou-sama, Retry!',
			'魔王様、リトライ！',
			'Demon Lord, Retry!',
		],
		[ 1794 ],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		]
	),
	new Anime(
		'1715/103419',
		[
			'Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru',
			'慎重勇者 ～この勇者が俺TUEEEくせに慎重すぎる～',
			'Cautious Hero: The Hero Is Overpowered but Overly Cautious',
		],
		[ 314 ],
		'TV', 3, 2019, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
		]
	),
	new Anime(
		'1622/139331',
		[
			'Kage no Jitsuryokusha ni Naritakute! 2nd Season',
			'陰の実力者になりたくて！ 2nd Season',
			'The Eminence in Shadow Season 2',
		],
		[ 852 ],
		'TV', 3, 2023, 'Light novel', 1, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteOPSong',
			'tFavoriteEDSong_2',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1091/128729',
		[
			'Kage no Jitsuryokusha ni Naritakute!',
			'陰の実力者になりたくて！',
			'The Eminence in Shadow',
		],
		[ 852 ],
		'TV', 3, 2022, 'Light novel', 1, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1976/122302',
		[
			'Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 3rd Season',
			'本好きの下剋上 ～司書になるためには手段を選んでいられません～ 第3期',
			'Ascendance of a Bookworm Season 3',
		],
		[ 30 ],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1464/107998',
		[
			'Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season',
			'本好きの下剋上 ～司書になるためには手段を選んでいられません～ 第2期',
			'Ascendance of a Bookworm Season 2',
		],
		[ 30 ],
		'TV', 1, 2020, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1931/114311',
		[
			'Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen OVA',
			'本好きの下剋上 ～司書になるためには手段を選んでいられません～ OVA',
			'Ascendance of a Bookworm: Side Story',
		],
		[ 30 ],
		'OVA', 0, 2020, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1582/101697',
		[
			'Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen',
			'本好きの下剋上 ～司書になるためには手段を選んでいられません～',
			'Ascendance of a Bookworm',
		],
		[ 30 ],
		'TV', 3, 2019, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1476/125643',
		[
			'Shinobi no Ittoki',
			'忍の一時',
		],
		[ 1103 ],
		'TV', 3, 2022, 'Original', 0, 1,
		[
			'tAction',
			'tSchool',
		]
	),
	new Anime(
		'1553/145597',
		[
			'Arifureta Shokugyou de Sekai Saikyou Season 3',
			'ありふれた職業で世界最強 season 3',
			"Arifureta: From Commonplace to World's Strongest Season 3",
		],
		[ 163 ],
		'TV', 3, 2024, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
		]
	),
	new Anime(
		'1068/124244',
		[
			'Arifureta Shokugyou de Sekai Saikyou: Maboroshi no Bouken to Kiseki no Kaigou',
			'ありふれた職業で世界最強 「幻の冒険と奇跡の邂逅」',
			'Arifureta: Phantom Adventure and Miraculous Encounter',
		],
		[ 163, 2246 ],
		'OVA', 2, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1780/119657',
		[
			'Arifureta Shokugyou de Sekai Saikyou: Arifureta Yorimichi de Sekai Saikyou',
			'ありふれた職業で世界最強 ありふれた寄り道で世界最強',
			"Arifureta: From a Detour to the World's Strongest",
		],
		[ 163, 2246 ],
		'Special', 0, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1877/119668',
		[
			'Arifureta Shokugyou de Sekai Saikyou 2nd Season',
			'ありふれた職業で世界最強 2nd Season',
			"Arifureta: From Commonplace to World's Strongest Season 2",
		],
		[ 163, 2246 ],
		'TV', 0, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1634/102577',
		[
			'Arifureta Shokugyou de Sekai Saikyou Specials',
			'ありふれた職業で世界最強',
			"Arifureta: From Commonplace to World's Strongest Specials",
		],
		[ 163, 314 ],
		'Special', 3, 2019, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1776/97682',
		[
			'Arifureta Shokugyou de Sekai Saikyou',
			'ありふれた職業で世界最強',
			"Arifureta: From Commonplace to World's Strongest",
		],
		[ 163, 314 ],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1877/145819',
		[
			'Kami no Tou: Koubou-sen',
			'神之塔 -Tower of God- 工房戦',
			'Tower of God Season 2: Workshop Battle',
		],
		[ 229 ],
		'TV', 3, 2024, 'Web manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tMystery',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1107/143536',
		[
			'Kami no Tou: Ouji no Kikan',
			'神之塔 -Tower of God- 王子の帰還',
			'Tower of God: Return of the Prince',
		],
		[ 229 ],
		'TV', 2, 2024, 'Web manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tMystery',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1269/110115',
		[
			'Kami no Tou',
			'神之塔 -Tower of God-',
			'Tower of God',
		],
		[ 94 ],
		'TV', 1, 2020, 'Web manga', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tMystery',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1963/128728',
		[
			'Shinmai Renkinjutsushi no Tenpo Keiei',
			'新米錬金術師の店舗経営',
			'Management of a Novice Alchemist',
		],
		[ 1974 ],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tSliceofLife',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1834/110718',
		[
			'Hachi-nan tte, Sore wa Nai deshou!',
			'八男って、それはないでしょう！',
			'The 8th son? Are you kidding me?',
		],
		[ 118, 247 ],
		'TV', 1, 2020, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		]
	),
	new Anime(
		'1132/134608',
		[
			'Kuma Kuma Kuma Bear Punch!',
			'くまクマ熊ベアーぱーんち！',
		],
		[ 1264 ],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1062/107803',
		[
			'Kuma Kuma Kuma Bear',
			'くま クマ 熊 ベアー',
		],
		[ 1264 ],
		'TV', 3, 2020, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1854/114772',
		[
			'Infinite Dendrogram',
			'<Infinite Dendrogram>-インフィニット・デンドログラム-',
		],
		[ 951 ],
		'TV', 0, 2020, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tVideoGame',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1521/131469',
		[
			'Kami-tachi ni Hirowareta Otoko 2nd Season',
			'神達に拾われた男',
			'By the Grace of the Gods 2',
		],
		[ 1978 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tIsekai',
			'tIyashikei',
			'tReincarnation',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1654/108801',
		[
			'Kami-tachi ni Hirowareta Otoko',
			'神達に拾われた男',
			'By the Grace of the Gods',
		],
		[ 1978 ],
		'TV', 3, 2020, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tIsekai',
			'tIyashikei',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1782/128859',
		[
			'Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu. 2',
			'痛いのは嫌なので防御力に極振りしたいと思います。2',
			"BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense. Season 2",
		],
		[ 300 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tVideoGame',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1579/113812',
		[
			'Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu.',
			'痛いのは嫌なので防御力に極振りしたいと思います。',
			"BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.",
		],
		[ 300 ],
		'TV', 0, 2020, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tVideoGame',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1084/126652',
		[
			'Yuusha Party wo Tsuihou sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau',
			'勇者パーティーを追放されたビーストテイマー、最強種の猫耳少女と出会う',
			'Beast Tamer',
		],
		[ 1264 ],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tHarem',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1211/143476',
		[
			'Tensei shitara Slime Datta Ken 3rd Season',
			'転生したらスライムだった件 第3期',
			'That Time I Got Reincarnated as a Slime Season 3',
		],
		[ 441 ],
		'TV', 1, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
		]
	),
	new Anime(
		'1092/142426',
		[
			'Tensei shitara Slime Datta Ken 3rd Season: Kanwa - Diablo Nikki',
			'転生したらスライムだった件 閑話: ディアブロ日記',
			"That Time I Got Reincarnated as a Slime Season 3: Digression - Diablo's Journal",
		],
		[ 441 ],
		'Special', 0, 2024, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1570/135813',
		[
			'Tensei shitara Slime Datta Ken: Coleus no Yume',
			'転生したらスライムだった件 コリウスの夢',
			'That Time I Got Reincarnated as a Slime: Visions of Coleus',
		],
		[ 441 ],
		'OVA', 3, 2023, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tShounen',
			'tAdventure',
			'tReincarnation',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1745/128238',
		[
			'Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen',
			'劇場版 転生したらスライムだった件 紅蓮の絆編',
			'That Time I Got Reincarnated as a Slime: The Movie - Scarlet Bond',
		],
		[ 441 ],
		'Movie', 3, 2022, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tShounen',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1033/118296',
		[
			'Tensei shitara Slime Datta Ken 2nd Season Part 2',
			'転生したらスライムだった件',
			'That Time I Got Reincarnated as a Slime Season 2 Part 2',
		],
		[ 441 ],
		'TV', 2, 2021, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1458/117607',
		[
			'Tensura Nikki: Tensei shitara Slime Datta Ken',
			'転スラ日記 転生したらスライムだった件',
			'The Slime Diaries',
		],
		[ 441 ],
		'TV', 1, 2021, 'Manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1530/106442',
		[
			'Tensei shitara Slime Datta Ken 2nd Season',
			'転生したらスライムだった件',
			'That Time I Got Reincarnated as a Slime Season 2',
		],
		[ 441 ],
		'TV', 0, 2021, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tShounen',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1116/104615',
		[
			'Tensei shitara Slime Datta Ken OVA',
			'転生したらスライムだった件 OVA',
			'That Time I Got Reincarnated as a Slime OAD',
		],
		[ 441 ],
		'OVA', 2, 2019, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1069/123309',
		[
			'Tensei shitara Slime Datta Ken',
			'転生したらスライムだった件',
			'That Time I Got Reincarnated as a Slime',
		],
		[ 441 ],
		'TV', 3, 2018, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1384/127328',
		[
			'Noumin Kanren no Skill bakka Agetetara Nazeka Tsuyoku Natta.',
			'農民関連のスキルばっか上げてたら何故か強くなった。',
			"I've Somehow Gotten Stronger When I Improved My Farm-Related Skills",
		],
		[ 1209 ],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		]
	),
	new Anime(
		'1794/142621',
		[
			'Tsuki ga Michibiku Isekai Douchuu 2nd Season',
			'月が導く異世界道中 第二幕',
			'Tsukimichi -Moonlit Fantasy- Season 2',
		],
		[ 7 ],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
			'tFavoriteEDSong_1',
		]
	),
	new Anime(
		'1950/116474',
		[
			'Tsuki ga Michibiku Isekai Douchuu',
			'月が導く異世界道中',
			'Tsukimichi -Moonlit Fantasy-',
		],
		[ 605 ],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1928/117620',
		[
			'Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru',
			'世界最高の暗殺者、異世界貴族に転生する',
			"The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
		],
		[ 300, 2201 ],
		'TV', 3, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tDrama',
			'tFantasy',
			'tMystery',
			'tRomance',
			'tIsekai',
			'tReincarnation',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1862/128297',
		[
			'Shin Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei',
			'真・進化の実～知らないうちに勝ち組人生～',
			'The Fruit of Evolution: Before I Knew It, My Life Had It Made Season 2',
		],
		[ 723 ],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
		]
	),
	new Anime(
		'1537/117590',
		[
			'Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei',
			'進化の実～知らないうちに勝ち組人生～',
			'The Fruit of Evolution: Before I Knew It, My Life Had It Made',
		],
		[ 723 ],
		'TV', 3, 2021, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
		]
	),
	new Anime(
		'1087/144583',
		[
			'Seirei Gensouki 2',
			'精霊幻想記2',
			'Seirei Gensouki: Spirit Chronicles Season 2',
		],
		[ 73 ],
		'TV', 3, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1836/116060',
		[
			'Seirei Gensouki',
			'精霊幻想記',
			'Seirei Gensouki: Spirit Chronicles',
		],
		[ 73 ],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tReincarnation',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1593/113724',
		[
			'Kumo desu ga, Nani ka?',
			'蜘蛛ですが、なにか？',
			"So I'm a Spider, So What?",
		],
		[ 1237 ],
		'TV', 0, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tMystery',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1777/117885',
		[
			'Isekai Shokudou 2',
			'異世界食堂 2',
			'Restaurant to Another World 2',
		],
		[ 28 ],
		'TV', 3, 2021, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tGourmet',
			'tSliceofLife',
			'tIsekai',
			'tIyashikei',
			'tWorkplace',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'3/86666',
		[
			'Isekai Shokudou',
			'異世界食堂',
			'Restaurant to Another World',
		],
		[ 300 ],
		'TV', 2, 2017, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tGourmet',
			'tSliceofLife',
			'tIsekai',
			'tIyashikei',
			'tWorkplace',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1191/127909',
		[
			'Tensei shitara Ken deshita',
			'転生したら剣でした',
			'Reincarnated as a Sword',
		],
		[ 605 ],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1598/143084',
		[
			'Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2',
			'無職転生 II ～異世界行ったら本気だす～ (第2クール)',
			'Mushoku Tensei: Jobless Reincarnation Season 2 Part 2',
		],
		[ 1993 ],
		'TV', 1, 2024, 'Light novel', 1, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1898/138005',
		[
			'Mushoku Tensei II: Isekai Ittara Honki Dasu',
			'無職転生 II ～異世界行ったら本気だす～',
			'Mushoku Tensei: Jobless Reincarnation Season 2',
		],
		[ 1993 ],
		'TV', 2, 2023, 'Light novel', 1, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tReincarnation',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1627/136934',
		[
			'Mushoku Tensei II: Isekai Ittara Honki Dasu - Shugo Jutsushi Fitz',
			'無職転生Ⅱ ～異世界行ったら本気だす～ 第0話「守護術師フィッツ」',
		],
		[ 1993 ],
		'Special', 2, 2023, 'Light novel', 1, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1094/120148',
		[
			'Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu',
			'無職転生 ～異世界行ったら本気だす～ エリスのゴブリン討伐',
			'Mushoku Tensei: Jobless Reincarnation - Eris the Goblin Slayer',
		],
		[ 1993 ],
		'Special', 0, 2022, 'Light novel', 1, 1,
		[
			'tDrama',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1028/117777',
		[
			'Mushoku Tensei: Isekai Ittara Honki Dasu Part 2',
			'無職転生 ～異世界行ったら本気だす～ 第2クール',
			'Mushoku Tensei: Jobless Reincarnation Part 2',
		],
		[ 1993 ],
		'TV', 3, 2021, 'Light novel', 1, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1530/117776',
		[
			'Mushoku Tensei: Isekai Ittara Honki Dasu',
			'無職転生 ～異世界行ったら本気だす～',
			'Mushoku Tensei: Jobless Reincarnation',
		],
		[ 1993 ],
		'TV', 0, 2021, 'Light novel', 1, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1510/108026',
		[
			'Log Horizon: Entaku Houkai',
			'ログ・ホライズン 円卓崩壊',
			'Log Horizon: Destruction of the Round Table',
		],
		[ 37 ],
		'TV', 0, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tVideoGame',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'5/68097',
		[
			'Log Horizon 2nd Season',
			'ログ・ホライズン 第2シリーズ',
			'Log Horizon 2',
		],
		[ 37 ],
		'TV', 3, 2014, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tVideoGame',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'5/84004',
		[
			'Log Horizon',
			'ログ・ホライズン',
		],
		[ 41 ],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tVideoGame',
			'tAdultCast',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1088/120068',
		[
			'Genjitsu Shugi Yuusha no Oukoku Saikenki Part 2',
			'現実主義勇者の王国再建記',
			'How a Realist Hero Rebuilt the Kingdom Part 2',
		],
		[ 7 ],
		'TV', 0, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tMilitary',
		]
	),
	new Anime(
		'1297/118764',
		[
			'Genjitsu Shugi Yuusha no Oukoku Saikenki',
			'現実主義勇者の王国再建記',
			'How a Realist Hero Rebuilt the Kingdom',
		],
		[ 7 ],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tMilitary',
		]
	),
	new Anime(
		'1357/113277',
		[
			'Kyuukyoku Shinka shita Full Dive RPG ga Genjitsu yori mo Kusoge Dattara',
			'究極進化したフルダイブRPGが現実よりもクソゲーだったら',
			'Full Dive: The Ultimate Next-Gen Full Dive RPG Is Even Shittier than Real Life!',
		],
		[ 1974 ],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tVideoGame',
		]
	),
	new Anime(
		'1787/115817',
		[
			'Cheat Kusushi no Slow Life: Isekai ni Tsukurou Drugstore',
			'チート薬師のスローライフ～異世界に作ろうドラッグストア～',
			'Drug Store in Another World: The Slow Life of a Cheat Pharmacist',
		],
		[ 1264 ],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1161/121462',
		[
			'Otome Game Sekai wa Mob ni Kibishii Sekai desu',
			'乙女ゲー世界はモブに厳しい世界です',
			'Trapped in a Dating Sim: The World of Otome Games is Tough for Mobs',
		],
		[ 1974 ],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tMecha',
			'tReincarnation',
			'tSchool',
		]
	),
	new Anime(
		'1361/120706',
		[
			'Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu',
			'骸骨騎士様、只今異世界へお出掛け中',
			'Skeleton Knight in Another World',
		],
		[ 1997, 2097 ],
		'TV', 1, 2022, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1743/125204',
		[
			'Isekai Ojisan',
			'異世界おじさん',
			'Uncle from Another World',
		],
		[ 2298 ],
		'TV', 2, 2022, 'Web manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tAdultCast',
			'tIsekai',
			'tOtakuCulture',
			'tParody',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1583/119223',
		[
			'Kenja no Deshi wo Nanoru Kenja',
			'賢者の弟子を名乗る賢者',
			'She Professed Herself Pupil of the Wise Man',
		],
		[ 1209 ],
		'TV', 0, 2022, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tGenben',
		]
	),
	new Anime(
		'1430/120065',
		[
			'Fantasy Bishoujo Juniku Ojisan to',
			'異世界美少女受肉おじさんと',
			'Life with an Ordinary Guy who Reincarnated into a Total Fantasy Knockout',
		],
		[ 28 ],
		'TV', 0, 2022, 'Web manga', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tGenben',
			'tParody',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1388/147970',
		[
			'Princess Connect! Michibiki no Hatsuhana: Fiore Storia',
			'プリンセスコネクト！ 導きの初花 - Fiore Storia -',
		],
		[ 1837 ],
		'ONA', 0, 2025, 'Game', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1906/117145',
		[
			'Princess Connect! Re:Dive Season 2',
			'プリンセスコネクト! Re:Dive Season 2',
		],
		[ 1893 ],
		'TV', 0, 2022, 'Game', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tGourmet',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1810/106070',
		[
			'Princess Connect! Re:Dive',
			'プリンセスコネクト！Re:Dive',
		],
		[ 1893 ],
		'TV', 1, 2020, 'Game', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tGourmet',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1904/120095',
		[
			'Shijou Saikyou no Daimaou, Murabito A ni Tensei suru',
			'史上最強の大魔王、村人Aに転生する',
			'The Greatest Demon Lord Is Reborn as a Typical Nobody',
		],
		[ 300, 1547 ],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tHarem',
			'tReincarnation',
			'tSchool',
		]
	),
	new Anime(
		'1299/144738',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka V: Houjou no Megami-hen',
			'ダンジョンに出会いを求めるのは間違っているだろうかV 豊穣の女神篇',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? V',
		],
		[ 7 ],
		'TV', 3, 2024, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1226/131884',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen',
			'ダンジョンに出会いを求めるのは間違っているだろうかⅣ深章 厄災篇',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? IV Part 2',
		],
		[ 7 ],
		'TV', 0, 2023, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1318/126474',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou - Meikyuu-hen',
			'ダンジョンに出会いを求めるのは間違っているだろうかⅣ 新章 迷宮篇',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? IV',
		],
		[ 7 ],
		'TV', 2, 2022, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1767/110800',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III OVA',
			'ダンジョンに出会いを求めるのは間違っているだろうかⅢ OVA',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? III: Is It Wrong to Try to Find a Hot Spring in Orario?',
		],
		[ 7 ],
		'OVA', 1, 2021, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1523/108380',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III',
			'ダンジョンに出会いを求めるのは間違っているだろうかIII',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? III',
		],
		[ 7 ],
		'TV', 3, 2020, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1360/111696',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II OVA',
			'ダンジョンに出会いを求めるのは間違っているだろうか 2期 OVA',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? II: Is It Wrong to go Searching for Herbs on a Deserted Island?',
		],
		[ 7 ],
		'OVA', 0, 2020, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1730/101329',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II',
			'ダンジョンに出会いを求めるのは間違っているだろうかII',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? II',
		],
		[ 7 ],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1239/96949',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Movie: Orion no Ya',
			'劇場版 ダンジョンに出会いを求めるのは間違っているだろうか -オリオンの矢-',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon?: Arrow of the Orion',
		],
		[ 7 ],
		'Movie', 0, 2019, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1181/123312',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Gaiden: Sword Oratoria',
			'ダンジョンに出会いを求めるのは間違っているだろうか外伝 ソード・オラトリア',
			'Sword Oratoria: Is It Wrong to Try to Pick Up Girls in a Dungeon? On the Side',
		],
		[ 7 ],
		'TV', 1, 2017, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'9/81432',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka OVA',
			'ダンジョンに出会いを求めるのは間違っているだろうか OVA「ダンジョンに温泉を求めるのは 間違っているだろうか」',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon?: Is It Wrong to Expect a Hot Spring in a Dungeon?',
		],
		[ 7 ],
		'OVA', 3, 2016, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'2/70187',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka',
			'ダンジョンに出会いを求めるのは間違っているだろうか',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon?',
		],
		[ 7 ],
		'TV', 1, 2015, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1011/113703',
		[
			'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω',
			'異世界魔王と召喚少女の奴隷魔術Ω',
			'How Not to Summon a Demon Lord Ω',
		],
		[ 200, 2037 ],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tIsekai',
		]
	),
	new Anime(
		'1649/93412',
		[
			'Isekai Maou to Shoukan Shoujo no Dorei Majutsu',
			'異世界魔王と召喚少女の奴隷魔術',
			'How Not to Summon a Demon Lord',
		],
		[ 30 ],
		'TV', 2, 2018, 'Light novel', 0, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tIsekai',
		]
	),
	new Anime(
		'1436/116410',
		[
			'Megami-ryou no Ryoubo-kun.',
			'女神寮の寮母くん。',
			"Mother of the Goddess' Dormitory",
		],
		[ 163 ],
		'TV', 2, 2021, 'Manga', 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tShounen',
		]
	),
	new Anime(
		'1424/117718',
		[
			'100-man no Inochi no Ue ni Ore wa Tatteiru 2nd Season',
			'100万の命の上に俺は立っている',
			'I’m Standing on a Million Lives Season 2',
		],
		[ 1978 ],
		'TV', 2, 2021, 'Manga', 0, 1,
		[
			'tAction',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tSurvival',
			'tShounen',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1506/117717',
		[
			'100-man no Inochi no Ue ni Ore wa Tatteiru',
			'100万の命の上に俺は立っている',
			"I'm Standing on a Million Lives",
		],
		[ 1978 ],
		'TV', 3, 2020, 'Manga', 0, 1,
		[
			'tAction',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tSurvival',
			'tShounen',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1932/131464',
		[
			'Isekai wa Smartphone to Tomo ni. 2',
			'異世界はスマートフォンとともに。',
			'In Another World With My Smartphone 2',
		],
		[ 7 ],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'7/86794',
		[
			'Isekai wa Smartphone to Tomo ni.',
			'異世界はスマートフォンとともに。',
			'In Another World With My Smartphone',
		],
		[ 196 ],
		'TV', 2, 2017, 'Light novel', 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1561/125302',
		[
			'Kinsou no Vermeil: Gakeppuchi Majutsushi wa Saikyou no Yakusai to Mahou Sekai wo Tsukisusumu',
			'金装のヴェルメイユ ～崖っぷち魔術師は最強の厄災と魔法世界を突き進む～',
			'Vermeil in Gold',
		],
		[ 2405 ],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			'tFantasy',
			'tEcchi',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1436/124788',
		[
			'Tensei Kenja no Isekai Life: Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita',
			'転生賢者の異世界ライフ ～第二の職業を得て、世界最強になりました～',
			'My Isekai Life: I Gained a Second Character Class and Became the Strongest Sage in the World',
		],
		[ 1692 ],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1549/125495',
		[
			'Engage Kiss',
		],
		[ 56 ],
		'TV', 2, 2022, 'Original', 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
		]
	),
	new Anime(
		'1392/136670',
		[
			'Hataraku Maou-sama!! 2nd Season',
			'はたらく魔王さま！！',
			'The Devil is a Part-Timer! Season 2 (Sequel)',
		],
		[ 1127 ],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tMythology',
			'tLoveStatusQuo',
			'tWorkplace',
		]
	),
	new Anime(
		'1502/124354',
		[
			'Hataraku Maou-sama!!',
			'はたらく魔王さま！！',
			'The Devil is a Part-Timer! Season 2',
		],
		[ 1127 ],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tMythology',
			'tLoveStatusQuo',
			'tWorkplace',
		]
	),
	new Anime(
		'3/50177',
		[
			'Hataraku Maou-sama!',
			'はたらく魔王さま!',
			'The Devil is a Part-Timer!',
		],
		[ 314 ],
		'TV', 1, 2013, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tMythology',
			'tLoveStatusQuo',
			'tWorkplace',
		]
	),
	new Anime(
		'1022/123845',
		[
			'Saikin Yatotta Maid ga Ayashii',
			'最近雇ったメイドが怪しい',
			'The Maid I Hired Recently Is Mysterious',
		],
		[ 300, 1547 ],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tShounen',
		]
	),
	new Anime(
		'1120/124644',
		[
			'Isekai Yakkyoku',
			'異世界薬局',
			'Parallel World Pharmacy',
		],
		[ 51 ],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tMedical',
			'tReincarnation',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1261/127311',
		[
			'Lycoris Recoil',
			'リコリス・リコイル',
		],
		[ 56 ],
		'TV', 2, 2022, 'Original', 0, 1,
		[
			'tAction',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1132/120388',
		[
			'Shikkakumon no Saikyou Kenja',
			'失格紋の最強賢者',
			'The Strongest Sage with the Weakest Crest',
		],
		[ 7 ],
		'TV', 0, 2022, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tReincarnation',
		]
	),
	new Anime(
		'1988/115708',
		[
			'Ore dake Haireru Kakushi Dungeon',
			'俺だけ入れる隠しダンジョン',
			'The Hidden Dungeon Only I Can Enter',
		],
		[ 2037 ],
		'TV', 0, 2021, 'Light novel', 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tEcchi',
			'tHarem',
		]
	),
	new Anime(
		'1109/118948',
		[
			'Rikei ga Koi ni Ochita no de Shoumei shitemita. Heart',
			'理系が恋に落ちたので証明してみた。r=1-sinθ（ハート）',
			'Science Fell in Love, So I Tried to Prove It r=1-sinθ',
		],
		[ 1379 ],
		'TV', 1, 2022, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAdultCast',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1432/103533',
		[
			'Rikei ga Koi ni Ochita no de Shoumei shitemita.',
			'理系が恋に落ちたので証明してみた。',
			'Science Fell in Love, So I Tried to Prove It',
		],
		[ 1379 ],
		'TV', 0, 2020, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAdultCast',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1696/136634',
		[
			'Kanojo, Okarishimasu 3rd Season',
			'彼女、お借りします',
			'Rent-a-Girlfriend Season 3',
		],
		[ 73 ],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tAdultCast',
			'tHarem',
		]
	),
	new Anime(
		'1070/124592',
		[
			'Kanojo, Okarishimasu 2nd Season',
			'彼女、お借りします',
			'Rent-a-Girlfriend Season 2',
		],
		[ 73 ],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tAdultCast',
			'tHarem',
		]
	),
	new Anime(
		'1902/128382',
		[
			'Kanojo, Okarishimasu',
			'彼女、お借りします',
			'Rent-a-Girlfriend',
		],
		[ 73 ],
		'TV', 2, 2020, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
		]
	),
	new Anime(
		'1396/109465',
		[
			'Kamisama ni Natta Hi',
			'神様になった日',
			'The Day I Became a God',
		],
		[ 132 ],
		'TV', 3, 2020, 'Original', 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1871/118309',
		[
			'Bokutachi no Remake',
			'ぼくたちのリメイク',
			'Remake Our Life!',
		],
		[ 91 ],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tTimeTravel',
			'tAdultCast',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1007/136277',
		[
			'Horimiya: Piece',
			'ホリミヤ -piece-',
			'Horimiya: The Missing Pieces',
		],
		[ 1835 ],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1695/111486',
		[
			'Horimiya',
			'ホリミヤ',
		],
		[ 1835 ],
		'TV', 0, 2021, 'Manga', 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1146/113477',
		[
			'Hige wo Soru. Soshite Joshikousei wo Hirou.',
			'ひげを剃る。そして女子高生を拾う。',
			'Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway',
		],
		[ 439 ],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
		]
	),
	new Anime(
		'1143/140807',
		[
			'Jaku-Chara Tomozaki-kun 2nd Stage',
			'弱キャラ友崎くん 2nd STAGE',
			'Bottom-Tier Character Tomozaki 2nd Stage',
		],
		[ 439 ],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1892/114853',
		[
			'Jaku-Chara Tomozaki-kun Specials',
			'弱キャラ友崎くん',
			'Bottom-Tier Character Tomozaki Specials',
		],
		[ 439 ],
		'Special', 1, 2021, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1120/109232',
		[
			'Jaku-Chara Tomozaki-kun',
			'弱キャラ友崎くん',
			'Bottom-Tier Character Tomozaki',
		],
		[ 439 ],
		'TV', 0, 2021, 'Light novel', 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1430/102439',
		[
			'Kawaikereba Hentai demo Suki ni Natte Kuremasu ka?',
			'可愛ければ変態でも好きになってくれますか？',
			"Hensuki: Are you willing to Fall in Love with a Pervert, as long as she's a Cutie?",
		],
		[ 1857 ],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'1155/106799',
		[
			'Ore wo Suki nano wa Omae dake ka yo: Oretachi no Game Set',
			'俺を好きなのはお前だけかよ ～俺たちのゲームセット～',
			'ORESUKI Are you the only one who loves me? - Our Playball / Our End Run / Our Game',
		],
		[ 957 ],
		'OVA', 2, 2020, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
		]
	),
	new Anime(
		'1348/102797',
		[
			'Ore wo Suki nano wa Omae dake ka yo',
			'俺を好きなのはお前だけかよ',
			'ORESUKI Are you the only one who loves me?',
		],
		[ 957 ],
		'TV', 3, 2019, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
		]
	),
	new Anime(
		'9/66871',
		[
			'Gekkan Shoujo Nozaki-kun Specials',
			'月刊少女野崎くん ミニOVA',
			"Monthly Girls' Nozaki-kun Specials",
		],
		[ 95 ],
		'Special', 2, 2014, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'5/66083',
		[
			'Gekkan Shoujo Nozaki-kun',
			'月刊少女野崎くん',
			"Monthly Girls' Nozaki-kun",
		],
		[ 95 ],
		'TV', 2, 2014, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tOtakuCulture',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1111/113327',
		[
			'Osananajimi ga Zettai ni Makenai Love Comedy',
			'幼なじみが絶対に負けないラブコメ',
			"Osamake: Romcom Where The Childhood Friend Won't Lose",
		],
		[ 95 ],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1995/121695',
		[
			'Kawaii dake ja Nai Shikimori-san',
			'可愛いだけじゃない式守さん',
			"Shikimori's Not Just a Cutie",
		],
		[ 95 ],
		'TV', 1, 2022, 'Web manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'4/86828',
		[
			'Gamers!',
			'ゲーマーズ！',
		],
		[ 1295 ],
		'TV', 2, 2017, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tVideoGame',
			'tOtakuCulture',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1285/120529',
		[
			'Kakkou no Iinazuke',
			'カッコウの許嫁',
			'A Couple of Cuckoos',
		],
		[ 118, 247 ],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1045/123711',
		[
			'Yofukashi no Uta',
			'よふかしのうた',
			'Call of the Night',
		],
		[ 839 ],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			'tRomance',
			'tSupernatural',
			'tShounen',
			'tVampire',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		]
	),
	new Anime(
		'1332/139318',
		[
			'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season',
			'ようこそ実力至上主義の教室へ 3rd Season',
			'Classroom of the Elite III',
		],
		[ 456 ],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			'tDrama',
			'tPsychological',
			'tSchool',
			'tSuspense',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1010/124180',
		[
			'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 2nd Season',
			'ようこそ実力至上主義の教室へ 2nd Season',
			'Classroom of the Elite II',
		],
		[ 456 ],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			'tDrama',
			'tPsychological',
			'tSchool',
			'tSuspense',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'5/86830',
		[
			'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e',
			'ようこそ実力至上主義の教室へ',
			'Classroom of the Elite',
		],
		[ 456 ],
		'TV', 2, 2017, 'Light novel', 0, 1,
		[
			'tDrama',
			'tPsychological',
			'tSchool',
			'tSuspense',
		]
	),
	new Anime(
		'2/76368',
		[
			'Danchigai: Juusan Goutou Sentou Ikitai!!',
			'だんちがい 十三号棟 銭湯行きたいー!!',
		],
		[ 1195 ],
		'Special', 2, 2015, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tSliceofLife',
		]
	),
	new Anime(
		'7/74879',
		[
			'Danchigai',
			'だんちがい',
		],
		[ 1195 ],
		'TV', 2, 2015, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tSliceofLife',
			'tIyashikei',
		]
	),
	new Anime(
		'1667/135587',
		[
			'Masamune-kun no Revenge R',
			'政宗くんのリベンジR',
			"Masamune-kun's Revenge R",
		],
		[ 300 ],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1348/92408',
		[
			'Masamune-kun no Revenge: Uchi no Mama ni Kagitte/Tsunade Shima, Futatabi./12-Ji wo Sugita Cinderella',
			'政宗くんのリベンジ OVA',
			"Masamune-kun's Revenge OVA",
		],
		[ 300 ],
		'OVA', 2, 2018, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'12/83709',
		[
			'Masamune-kun no Revenge',
			'政宗くんのリベンジ',
			"Masamune-kun's Revenge",
		],
		[ 300 ],
		'TV', 0, 2017, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
		]
	),
	new Anime(
		'1922/136453',
		[
			'Tonikaku Kawaii: Joshikou-hen',
			'トニカクカワイイ 女子高編',
			'TONIKAWA: Over The Moon For You - High School Days',
		],
		[ 35 ],
		'ONA', 2, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1996/133361',
		[
			'Tonikaku Kawaii 2nd Season',
			'トニカクカワイイ',
			'TONIKAWA: Over The Moon For You Season 2',
		],
		[ 35 ],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1085/126580',
		[
			'Tonikaku Kawaii: Seifuku',
			'トニカクカワイイ ~制服~',
			'Tonikawa: Over the Moon for You - Uniform',
		],
		[ 35 ],
		'Special', 3, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1765/122768',
		[
			'Tonikaku Kawaii: SNS',
			'トニカクカワイイ 〜SNS〜',
			'TONIKAWA: Over The Moon For You - SNS',
		],
		[ 35 ],
		'OVA', 2, 2021, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1613/108722',
		[
			'Tonikaku Kawaii',
			'トニカクカワイイ',
			'TONIKAWA: Over The Moon For You',
		],
		[ 35 ],
		'TV', 3, 2020, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1751/98216',
		[
			'Senryuu Shoujo',
			'川柳少女',
			'Senryu Girl',
		],
		[ 957 ],
		'TV', 1, 2019, '4-koma manga', 0, 1,
		[
			'tComedy',
			'tSliceofLife',
			'tSchool',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1915/145336',
		[
			'5-toubun no Hanayome*',
			'五等分の花嫁*',
			'The Quintessential Quintuplets*',
		],
		[ 1722 ],
		'Special', 3, 2024, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1567/135752',
		[
			'5-toubun no Hanayome∽',
			'五等分の花嫁∽',
			'The Quintessential Quintuplets~',
		],
		[ 44 ],
		'Special', 2, 2023, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1506/113668',
		[
			'5-toubun no Hanayome Movie',
			'映画 五等分の花嫁',
			'The Quintessential Quintuplets Movie',
		],
		[ 1722 ],
		'Movie', 1, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1775/109514',
		[
			'5-toubun no Hanayome ∬',
			'五等分の花嫁∬',
			'The Quintessential Quintuplets 2',
		],
		[ 1722 ],
		'TV', 0, 2021, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteOPVisual',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1819/97947',
		[
			'5-toubun no Hanayome',
			'五等分の花嫁',
			'The Quintessential Quintuplets',
		],
		[ 200 ],
		'TV', 0, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1917/108615',
		[
			'Bokutachi wa Benkyou ga Dekinai! Chapel no Kane wa [X] wo Shukufuku Suru',
			'ぼくたちは勉強ができない！「チャペルの鐘は[X]を祝福する」',
		],
		[ 1873, 1874 ],
		'OVA', 1, 2020, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1530/102782',
		[
			'Bokutachi wa Benkyou ga Dekinai: Nagisa ni Usemono Arite Senjin wa Enzen to [X] Suru',
			'ぼくたちは勉強ができない「渚に失せものありて先人は艶然と[X]する」',
		],
		[ 1873, 1874 ],
		'OVA', 3, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1974/102960',
		[
			'Bokutachi wa Benkyou ga Dekinai!',
			'ぼくたちは勉強ができない！',
			'We Never Learn!: BOKUBEN Season 2',
		],
		[ 1873, 1874 ],
		'TV', 3, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1602/100510',
		[
			'Bokutachi wa Benkyou ga Dekinai',
			'ぼくたちは勉強ができない',
			'We Never Learn: BOKUBEN',
		],
		[ 1873, 1874 ],
		'TV', 1, 2019, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1108/121157',
		[
			'Komi-san wa, Comyushou desu. 2nd Season',
			'古見さんは、コミュ症です。 2',
			"Komi Can't Communicate Season 2",
		],
		[ 28 ],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1899/117237',
		[
			'Komi-san wa, Comyushou desu.',
			'古見さんは、コミュ症です。',
			"Komi Can't Communicate",
		],
		[ 28 ],
		'TV', 3, 2021, 'Manga', 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1501/148355',
		[
			'Aharen-san wa Hakarenai Season 2',
			'阿波連さんははかれない season2',
			'Aharen Is Indecipherable 2nd Season',
		],
		[ 1440 ],
		'TV', 1, 2025, 'Manga', 0, 0,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tLoveStatusQuo',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1612/120636',
		[
			'Aharen-san wa Hakarenai',
			'阿波連さんははかれない',
			'Aharen Is Indecipherable',
		],
		[ 1440 ],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tLoveStatusQuo',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1454/122063',
		[
			'Kumichou Musume to Sewagakari',
			'組長娘と世話係',
			"The Yakuza's Guide to Babysitting",
		],
		[ 91, 1314 ],
		'TV', 2, 2022, 'Web manga', 0, 1,
		[
			'tSliceofLife',
			'tChildcare',
			'tOrganizedCrime',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1708/123281',
		[
			'Mamahaha no Tsurego ga Motokano datta',
			'継母の連れ子が元カノだった',
			"My Stepmom's Daughter Is My Ex",
		],
		[ 439 ],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			'tComedy',
			'tRomance',
		]
	),
	new Anime(
		'1945/126130',
		[
			'Soredemo Ayumu wa Yosetekuru',
			'それでも歩は寄せてくる',
			'When Will Ayumu Make His Move?',
		],
		[ 300 ],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1530/120110',
		[
			'Overlord IV',
			'オーバーロード IV',
		],
		[ 11 ],
		'TV', 2, 2022, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
		]
	),
	new Anime(
		'1511/93473',
		[
			'Overlord III',
			'オーバーロードⅢ',
		],
		[ 11 ],
		'TV', 2, 2018, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		]
	),
	new Anime(
		'1212/113415',
		[
			'Overlord II',
			'オーバーロードⅡ',
		],
		[ 11 ],
		'TV', 0, 2018, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		]
	),
	new Anime(
		'5/87758',
		[
			'Overlord Movie 2: Shikkoku no Eiyuu',
			'【後編】劇場版総集編 オーバーロード 漆黒の英雄',
			'Overlord: The Dark Hero',
		],
		[ 11 ],
		'Movie', 0, 2017, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tVideoGame',
		]
	),
	new Anime(
		'1495/121641',
		[
			'Overlord Movie 1: Fushisha no Ou',
			'【前編】劇場版総集編 オーバーロード 不死者の王',
			'Overlord: The Undead King',
		],
		[ 11 ],
		'Movie', 0, 2017, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tVideoGame',
		]
	),
	new Anime(
		'7/88019',
		[
			'Overlord',
			'オーバーロード',
		],
		[ 11 ],
		'TV', 2, 2015, 'Light novel', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		]
	),
	new Anime(
		'1426/139388',
		[
			'Spy x Family Movie: Code: White',
			'SPY×FAMILY CODE: White',
			'Spy x Family Code: White',
		],
		[ 858, 1835 ],
		'Movie', 3, 2023, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tChildcare',
			'tShounen',
			'tSuperPower',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		]
	),
	new Anime(
		'1506/138982',
		[
			'Spy x Family Season 2',
		],
		[ 858, 1835 ],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tShounen',
			'tChildcare',
			'tSuperPower',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1111/127508',
		[
			'Spy x Family Part 2',
		],
		[ 858, 1835 ],
		'TV', 3, 2022, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tShounen',
			'tChildcare',
			'tSuperPower',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1441/122795',
		[
			'Spy x Family',
		],
		[ 858, 1835 ],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			'tAction',
			'tComedy',
			'tShounen',
			'tChildcare',
			'tSuperPower',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1659/141438',
		[
			'Date A Live V',
			'デート・ア・ライブⅤ',
		],
		[ 1857 ],
		'TV', 1, 2024, 'Light novel', 1, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tRomance',
			'tSciFi',
			'tHarem',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1368/121281',
		[
			'Date A Live IV',
			'デート・ア・ライブⅣ',
		],
		[ 1857 ],
		'TV', 1, 2022, 'Light novel', 1, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tHarem',
			'tFantasy',
			'tUrbanFantasy',
			'tSchool',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1002/108424',
		[
			'Date A Bullet: Nightmare or Queen',
			'デート・ア・バレット ナイトメア・オア・クイーン',
		],
		[ 1857 ],
		'Movie', 3, 2020, 'Light novel', 1, 1,
		[
			'tAction',
			'tSciFi',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1984/108425',
		[
			'Date A Bullet: Dead or Bullet',
			'デート・ア・バレット デッド・オア・バレット',
		],
		[ 1857 ],
		'Movie', 2, 2020, 'Light novel', 1, 1,
		[
			'tAction',
			'tSciFi',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1055/100468',
		[
			'Date A Live III',
			'デート・ア・ライブⅢ',
		],
		[ 7 ],
		'TV', 0, 2019, 'Light novel', 1, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tHarem',
			'tFantasy',
			'tUrbanFantasy',
			'tSchool',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'9/75466',
		[
			'Date A Live Movie: Mayuri Judgment',
			'劇場版 デート・ア・ライブ 万由里ジャッジメント',
			'Date A Live Movie: Mayuri Judgement',
		],
		[ 7 ],
		'Movie', 2, 2015, 'Light novel', 0, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tHarem',
			'tFantasy',
			'tUrbanFantasy',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1759/131412',
		[
			'Date A Live II: Kurumi Star Festival',
			'デート・ア・ライブII 狂三スターフェスティバル',
		],
		[ 1053 ],
		'OVA', 3, 2014, 'Light novel', 1, 1,
		[
			'tRomance',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1703/135124',
		[
			'Date A Live II',
			'デート・ア・ライブⅡ',
		],
		[ 7 ],
		'TV', 1, 2014, 'Light novel', 1, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tHarem',
			'tFantasy',
			'tUrbanFantasy',
			'tSchool',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1629/112503',
		[
			'Date A Live: Date to Date',
			'デート・ア・ライブ DATE TO DATE',
		],
		[ 292 ],
		'OVA', 3, 2013, 'Light novel', 0, 1,
		[
			'tRomance',
			'tSciFi',
			'tHarem',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'13/44844',
		[
			'Date A Live',
			'デート・ア・ライブ',
		],
		[ 292 ],
		'TV', 1, 2013, 'Light novel', 1, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tHarem',
			'tFantasy',
			'tUrbanFantasy',
			'tSchool',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1465/140538',
		[
			'Paripi Koumei: Road to Summer Sonia',
			'パリピ孔明 Road to Summer Sonia',
		],
		[ 132 ],
		'TV', 0, 2024, 'Web manga', 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tMusic',
			'tReincarnation',
			'tShowbiz',
			'tSupernatural',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1970/122297',
		[
			'Paripi Koumei',
			'パリピ孔明',
			'Ya Boy Kongming!',
		],
		[ 132 ],
		'TV', 1, 2022, 'Web manga', 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tMusic',
			'tReincarnation',
			'tShowbiz',
			'tSupernatural',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1321/132900',
		[
			'Aggressive Retsuko 5th Season',
			'グレッシブ烈子第5期',
			'Aggretsuko 5th Season',
		],
		[ 866 ],
		'ONA', 0, 2023, 'Other', 0, 1,
		[
			'tComedy',
			'tWorkplace',
			'tAnthropomorphic',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1228/118066',
		[
			'Aggressive Retsuko 4th Season',
			'アグレッシブ烈子第4期',
			'Aggretsuko 4th Season',
		],
		[ 866 ],
		'ONA', 3, 2021, 'Other', 0, 1,
		[
			'tComedy',
			'tWorkplace',
			'tAnthropomorphic',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1049/108692',
		[
			'Aggressive Retsuko 3rd Season',
			'アグレッシブ烈子第3期',
			'Aggretsuko 3rd Season',
		],
		[ 866 ],
		'ONA', 2, 2020, 'Other', 0, 1,
		[
			'tComedy',
			'tWorkplace',
			'tAnthropomorphic',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1739/101117',
		[
			'Aggressive Retsuko 2nd Season',
			'アグレッシブ烈子第2期',
			'Aggretsuko 2nd Season',
		],
		[ 866 ],
		'ONA', 1, 2019, 'Other', 0, 1,
		[
			'tComedy',
			'tWorkplace',
			'tAnthropomorphic',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1435/97291',
		[
			'Aggressive Retsuko: We Wish You a Metal Christmas',
			'アグレッシブ烈子: We Wish You a Metal Christmas',
			'Aggretsuko: We Wish You a Metal Christmas',
		],
		[ 866 ],
		'ONA', 3, 2018, 'Other', 0, 1,
		[
			'tComedy',
			'tAnthropomorphic',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1566/129181',
		[
			'Aggressive Retsuko',
			'アグレッシブ烈子',
			'Aggretsuko',
		],
		[ 866 ],
		'ONA', 1, 2018, 'Other', 0, 1,
		[
			'tComedy',
			'tWorkplace',
			'tAnthropomorphic',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1618/103829',
		[
			'One Punch Man 2nd Season Specials',
			'ワンパンマン SEASON 2 OVA 2',
			'One Punch Man Season 2 Specials',
		],
		[ 7 ],
		'Special', 3, 2019, 'Web manga', 1, 1,
		[
			'tAction',
			'tComedy',
			'tParody',
			'tSuperPower',
			'tSeinen',
			'tAdultCast',
		]
	),
	new Anime(
		'1247/122044',
		[
			'One Punch Man 2nd Season',
			'ワンパンマン',
			'One Punch Man Season 2',
		],
		[ 7 ],
		'TV', 1, 2019, 'Web manga', 1, 1,
		[
			'tAction',
			'tComedy',
			'tParody',
			'tSuperPower',
			'tSeinen',
			'tAdultCast',
		]
	),
	new Anime(
		'1452/97840',
		[
			'One Punch Man Specials',
			'ワンパンマン',
		],
		[ 7 ],
		'Special', 3, 2015, 'Web manga', 1, 1,
		[
			'tAction',
			'tComedy',
			'tParody',
			'tSuperPower',
			'tSeinen',
			'tAdultCast',
		]
	),
	new Anime(
		'1802/124744',
		[
			'One Punch Man: Road to Hero',
			'ワンパンマン OVA「ロード・トゥ・ヒーロー」',
		],
		[ 7 ],
		'OVA', 3, 2015, 'Web manga', 1, 1,
		[
			'tAction',
			'tComedy',
			'tParody',
			'tSuperPower',
			'tSeinen',
		]
	),
	new Anime(
		'12/76049',
		[
			'One Punch Man',
			'ワンパンマン',
		],
		[ 11 ],
		'TV', 3, 2015, 'Web manga', 1, 1,
		[
			'tAction',
			'tComedy',
			'tParody',
			'tSuperPower',
			'tSeinen',
			'tAdultCast',
		]
	),
	new Anime(
		'1233/128920',
		[
			'JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 3',
			'ジョジョの奇妙な冒険 ストーンオーシャン',
			"JoJo's Bizarre Adventure: Stone Ocean Part 3",
		],
		[ 287 ],
		'ONA', 3, 2022, 'Manga', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSupernatural',
			'tShounen',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1051/121959',
		[
			'JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 2',
			'ジョジョの奇妙な冒険 ストーンオーシャン',
			"JoJo's Bizarre Adventure: Stone Ocean Part 2",
		],
		[ 287 ],
		'ONA', 2, 2022, 'Manga', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSupernatural',
			'tShounen',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1896/119844',
		[
			'JoJo no Kimyou na Bouken Part 6: Stone Ocean',
			'ジョジョの奇妙な冒険 ストーンオーシャン',
			"JoJo's Bizarre Adventure: Stone Ocean",
		],
		[ 287 ],
		'ONA', 3, 2021, 'Manga', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSupernatural',
			'tShounen',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1249/99809',
		[
			'JoJo no Kimyou na Bouken Part 5: Ougon no Kaze',
			'ジョジョの奇妙な冒険 黄金の風',
			"JoJo's Bizarre Adventure: Golden Wind",
		],
		[ 287 ],
		'TV', 3, 2018, 'Manga', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSupernatural',
			'tShounen',
			'tOrganizedCrime',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1716/103072',
		[
			'Kishibe Rohan wa Ugokanai',
			'岸辺露伴は動かない',
			'Thus Spoke Kishibe Rohan',
		],
		[ 287 ],
		'OVA', 2, 2017, 'Manga', 1, 1,
		[
			'tAction',
			'tMystery',
			'tSupernatural',
			'tShounen',
		]
	),
	new Anime(
		'3/79156',
		[
			'JoJo no Kimyou na Bouken Part 4: Diamond wa Kudakenai',
			'ジョジョの奇妙な冒険 ダイヤモンドは砕けない',
			"JoJo's Bizarre Adventure: Diamond is Unbreakable",
		],
		[ 287 ],
		'TV', 1, 2016, 'Manga', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSupernatural',
			'tShounen',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'11/75045',
		[
			'JoJo no Kimyou na Bouken Part 3: Stardust Crusaders 2nd Season',
			'ジョジョの奇妙な冒険 スターダストクルセイダース エジプト編',
			"JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
		],
		[ 287 ],
		'TV', 0, 2015, 'Manga', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSupernatural',
			'tShounen',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'11/55267',
		[
			'JoJo no Kimyou na Bouken Part 3: Stardust Crusaders',
			'ジョジョの奇妙な冒険 スターダストクルセイダース',
			"JoJo's Bizarre Adventure: Stardust Crusaders",
		],
		[ 287 ],
		'TV', 1, 2014, 'Manga', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSupernatural',
			'tShounen',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'3/40409',
		[
			'JoJo no Kimyou na Bouken',
			'ジョジョの奇妙な冒険',
			"JoJo's Bizarre Adventure",
		],
		[ 287 ],
		'TV', 3, 2012, 'Manga', 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSupernatural',
			'tShounen',
			'tHistorical',
			'tVampire',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		]
	),
	new Anime(
		'1136/141839',
		[
			'Shinigami Bocchan to Kuro Maid 3rd Season',
			'死神坊ちゃんと黒メイド 第3期',
			'The Duke of Death and His Maid Season 3',
		],
		[ 7 ],
		'TV', 1, 2024, 'Web manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tSupernatural',
			'tLoveStatusQuo',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1078/136947',
		[
			'Shinigami Bocchan to Kuro Maid 2nd Season',
			'死神坊ちゃんと黒メイド',
			'The Duke of Death and His Maid Season 2',
		],
		[ 7 ],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tSupernatural',
			'tLoveStatusQuo',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1471/115593',
		[
			'Shinigami Bocchan to Kuro Maid',
			'死神坊ちゃんと黒メイド',
			'The Duke of Death and His Maid',
		],
		[ 7 ],
		'TV', 2, 2021, 'Web manga', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tSupernatural',
			'tLoveStatusQuo',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1074/147339',
		[
			'Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita: Sono Ni',
			'スライム倒して300年、知らないうちにレベルMAXになってました ～そのに～',
			"I've Been Killing Slimes for 300 Years and Maxed Out My Level Season 2",
		],
		[ 2909 ],
		'TV', 1, 2025, 'Light novel', 0, 0,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tCGDCT',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1888/133089',
		[
			'Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita',
			'スライム倒して300年、知らないうちにレベルMAXになってました',
			"I've Been Killing Slimes for 300 Years and Maxed Out My Level",
		],
		[ 1692 ],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tCGDCT',
			'tFavoriteAnime',
		]
	)
]
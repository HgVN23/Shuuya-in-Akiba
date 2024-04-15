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
			''
		],
		[
			s
		],
		'TV', 1, 2024, '', 0, 0,
		[
			t
		]
	),*/
	new Anime(
		'1898/141857',
		[
			'The New Gate'
		],
		[
			sYokohamaAnimationLab,
			sCloudHearts
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai
		]
	),
	new Anime(
		'1670/141688',
		[
			'Kaii to Otome to Kamikakushi',
			'怪異と乙女と神隠し',
			'Mysterious Disappearances'
		],
		[
			sZeroG
		],
		'TV', 1, 2024, 'Web manga', 0, 0,
		[
			tMystery,
			tSupernatural
		]
	),
	new Anime(
		'1253/141796',
		[
			'Seiyuu Radio no Uraomote',
			'声優ラジオのウラオモテ',
			'The Many Sides of Voice Actor Radio'
		],
		[
			sConnect
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tComedy,
			tYuri,
			tSchool
		]
	),
	new Anime(
		'1183/141489',
		[
			'Sentai Daishikkaku',
			'戦隊大失格',
			'Go! Go! Loser Ranger!'
		],
		[
			sYostarPictures
		],
		'TV', 1, 2024, 'Manga', 0, 0,
		[
			tAction,
			tSciFi,
			tShounen,
			tFavoriteAnime,
			tFavoriteOPSong,
			tFavoriteOPVisual
		]
	),
	new Anime(
		'1375/141863',
		[
			'Vampire Dormitory',
			'ヴァンパイア男子寮'
		],
		[
			sStudioBlanc
		],
		'TV', 1, 2024, 'Manga', 0, 0,
		[
			tRomance,
			tSupernatural,
			tCrossdressing,
			tVampire,
			tShoujo
		]
	),
	new Anime(
		'1739/140995',
		[
			'Blue Archive the Animation',
			'ブルーアーカイブ The Animation'
		],
		[
			sYostarPictures,
			sStudioCANDYBOX
		],
		'TV', 1, 2024, 'Game', 0, 0,
		[
			tAction,
			tFantasy,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1676/141714',
		[
			'Jiisan Baasan Wakagaeru',
			'じいさんばあさん若返る',
			'Grandpa and Grandma Turn Young Again'
		],
		[
			sGekkou
		],
		'TV', 1, 2024, 'Web manga', 0, 0,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tFavoriteAnime
		]
	),
	new Anime(
		'1346/141783',
		[
			'Yozakura-san Chi no Daisakusen',
			'夜桜さんちの大作戦',
			'Mission: Yozakura Family'
		],
		[
			sSILVERLINK
		],
		'TV', 1, 2024, 'Manga', 0, 0,
		[
			tAction,
			tComedy,
			tShounen,
			tFavoriteAnime,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'1058/141559',
		[
			'Tonari no Youkai-san',
			'となりの妖怪さん'
		],
		[
			sLIDENFILMS
		],
		'TV', 1, 2024, 'Web manga', 0, 0,
		[
			tSliceOfLife,
			tSupernatural,
			tMythology
		]
	),
	new Anime(
		'1834/141827',
		[
			'Yoru no Kurage wa Oyogenai',
			'夜のクラゲは泳げない',
			"Jellyfish Can't Swim in the Night"
		],
		[
			sDogaKobo
		],
		'TV', 1, 2024, 'Original', 0, 0,
		[
			tFavoriteAnime
		]
	),
	new Anime(
		'1646/141411',
		[
			'Hananoi-kun to Koi no Yamai',
			'花野井くんと恋の病',
			'A Condition Called Love'
		],
		[
			sEastFishStudio
		],
		'TV', 1, 2024, 'Manga', 0, 0,
		[
			tRomance,
			tSchool,
			tShoujo,
			tFavoriteOPSong,
			tFavoriteEDSong
		]
	),
	new Anime(
		'1861/141482',
		[
			'Henjin no Salad Bowl',
			'変人のサラダボウル',
			'A Salad Bowl of Eccentrics'
		],
		[
			sSynergySP,
			sStudioComet
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tComedy,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'1346/141203',
		[
			'Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?',
			'魔王の俺が奴隷エルフを嫁にしたんだが、どう愛でればいい？',
			"An Archdemon's Dilemma: How to Love Your Elf Bride"
		],
		[
			sBrainsBase
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tAction,
			tFantasy,
			tRomance,
			tFavoriteAnime,
			tFavoriteEDSong
		]
	),
	new Anime(
		'1246/141999',
		[
			'Lv2 kara Cheat datta Motoyuusha Kouho no Mattari Isekai Life',
			'Lv2からチートだった元勇者候補のまったり異世界ライフ',
			"Chillin' in Another World with Level 2 Super Cheat Powers"
		],
		[
			sJCStaff
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tAdventure,
			tFantasy,
			tRomance,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1143/142439',
		[
			'Unnamed Memory'
		],
		[
			sENGI
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tAdventure,
			tFantasy,
			tRomance,
			tFavoriteAnime
		]
	),
	new Anime(
		'1154/141872',
		[
			'Bartender: Kami no Glass',
			'バーテンダー 神のグラス',
			'Bartender: Glass of God'
		],
		[
			sLiber
		],
		'TV', 1, 2024, 'Manga', 0, 0,
		[
			tDrama,
			tGourmet,
			tAdultCast,
			tWorkplace,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1763/139538',
		[
			'Tensei Kizoku, Kantei Skill de Nariagaru',
			'転生貴族、鑑定スキルで成り上がる',
			"As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World"
		],
		[
			sStudioMOTHER
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tAdventure,
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1372/141859',
		[
			'Astro Note',
			'アストロノオト'
		],
		[
			sTelecomAnimationFilm
		],
		'TV', 1, 2024, 'Original', 0, 0,
		[
			tComedy,
			tRomance,
			tSciFi
		]
	),
	new Anime(
		'1224/137451',
		[
			'Shuumatsu Train Doko e Iku?',
			'終末トレインどこへいく？',
			'Train to the End of the World'
		],
		[
			sEMTSquared
		],
		'TV', 1, 2024, 'Original', 0, 0,
		[
			tAdventure,
			tFavoriteAnime,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'1580/141243',
		[
			'Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu',
			'転生したら第七王子だったので、気ままに魔術を極めます',
			'I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability'
		],
		[
			sTsumugiAkitaAnimationLab
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tAdventure,
			tFantasy,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1059/142414',
		[
			'Ookami to Koushinryou: Merchant Meets the Wise Wolf',
			'狼と香辛料 MERCHANT MEETS THE WISE WOLF',
			'Spice and Wolf: Merchant Meets the Wise Wolf'
		],
		[
			sPassione
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tAdventure,
			tDrama,
			tFantasy,
			tRomance,
			tAdultCast,
			tFavoriteAnime,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'1523/141680',
		[
			'Re:Monster'
		],
		[
			sStudioDeen
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1578/141782',
		[
			'Kami wa Game ni Ueteiru.',
			'神は遊戯に飢えている。',
			"Gods' Game We Play"
		],
		[
			sLIDENFILMS
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tFantasy,
			tSuspense,
			tEcchi,
			tHighStakesGame,
			tStrategyGame
		]
	),
	new Anime(
		'1158/141710',
		[
			'Dekisokonai to Yobareta Motoeiyuu wa Jikka kara Tsuihou sareta node Sukikatte ni Ikiru Koto ni Shita',
			'出来損ないと呼ばれた元英雄は、実家から追放されたので好き勝手に生きることにした',
			'The Banished Former Hero Lives as He Pleases'
		],
		[
			sStudioDeen,
			sMarvyJack
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tAction,
			tAdventure,
			tFantasy,
			tFavoriteEDSong
		]
	),
	new Anime(
		'1833/141321',
		[
			'One Room, Hiatari Futsuu, Tenshi-tsuki.',
			'ワンルーム、日当たり普通、天使つき。',
			'Studio Apartment, Good Lighting, Angel Included'
		],
		[
			sOkurutoNoboru
		],
		'TV', 1, 2024, 'Manga', 0, 0,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tHarem,
			tMythology,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1390/120708',
		[
			'Odd Taxi Movie: In the Woods',
			'映画 ODD TAXI イン・ザ・ウッズ'
		],
		[
			sOLM,
			sPICS
		],
		'Movie', 1, 2022, 'Original', 0, 1,
		[
			tDrama,
			tMystery,
			tSuspense,
			tAdultCast,
			tAnthropomorphic,
			tOrganizedCrime
		]
	),
	new Anime(
		'1981/113348',
		[
			'Odd Taxi',
			'オッドタクシー'
		],
		[
			sOLM,
			sPICS
		],
		'TV', 1, 2021, 'Original', 0, 1,
		[
			tDrama,
			tMystery,
			tSuspense,
			tAdultCast,
			tAnthropomorphic,
			tOrganizedCrime
		]
	),
	new Anime(
		'1525/139345',
		[
			'Mahou Shoujo ni Akogarete',
			'魔法少女にあこがれて',
			'Gushing over Magical Girls'
		],
		[
			sAsahiProduction
		],
		'TV', 0, 2024, 'Web manga', 2, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tYuri,
			tEcchi,
			tMahouShoujo
		]
	),
	new Anime(
		'1502/139926',
		[
			'Meitou "Isekai no Yu" Kaitakuki: Around 40 Onsen Mania no Tensei Saki wa, Nonbiri Onsen Tengoku deshita',
			'名湯『異世界の湯』開拓記 ～アラフォー温泉マニアの転生先は、のんびり温泉天国でした～',
			'Isekai Onsen Paradise'
		],
		[
			sWolfsbane,
			sBloomZ
		],
		'TV', 0, 2024, 'Light novel', 2, 0,
		[
			tFantasy,
			tIsekai,
			tEcchi
		]
	),
	new Anime(
		'1280/138474',
		[
			'Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita.',
			'最弱テイマーはゴミ拾いの旅を始めました。',
			'The Weakest Tamer Began a Journey to Pick Up Trash'
		],
		[
			sStudioMassket	
		],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy,
			tIsekai,
			tReincarnation,
			tCrossdressing,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1449/140344',
		[
			'Gekai Elise',
			'外科医エリーゼ',
			'Doctor Elise: The Royal Lady with the Lamp'
		],
		[
			sMahoFilm
		],
		'TV', 0, 2024, 'Web manga', 0, 1,
		[
			tFantasy,
			tRomance,
			tMedical,
			tReincarnation
		]
	),
	new Anime(
		'1645/140627',
		[
			'Sengoku Youko',
			'戦国妖狐'
		],
		[
			sWhiteFox
		],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			tAction,
			tAdventure,
			tDrama,
			tFantasy,
			tMythology,
			tShounen
		]
	),
	new Anime(
		'1150/140028',
		[
			'Akuyaku Reijou Level 99: Watashi wa Ura-Boss desu ga Maou dewa Arimasen',
			'悪役令嬢レベル99 ～私は裏ボスですが魔王ではありません～',
			"Villainess Level 99: I May Be the Hidden Boss but I'm Not the Demon Lord"
		],
		[
			sJumondo
		],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tReincarnation,
			tSchool,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1671/120628',
		[
			'Leadale no Daichi nite',
			'リアデイルの大地にて',
			'In the Land of Leadale'
		],
		[
			sMahoFilm
		],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy,
			tIsekai,
			tReincarnation
		]
	),
	new Anime(
		'1937/136906',
		[
			'Dosanko Gal wa Namara Menkoi',
			'道産子ギャルはなまらめんこい',
			'Hokkaido Gals Are Super Adorable!'
		],
		[
			sSILVERLINK,
			sBlade
		],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tSchool,
			tShounen,
			tFavoriteOPSong
		]
	),
	new Anime(
		'1056/139398',
		[
			'Himesama "Goumon" no Jikan desu',
			'姫様“拷問”の時間です',
			`'Tis Time for "Torture," Princess`
		],
		[
			sPINEJAM
		],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tGourmet,
			tMythology,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1902/139271',
		[
			'Oroka na Tenshi wa Akuma to Odoru',
			'愚かな天使は悪魔と踊る',
			'The Foolish Angel Dances with the Devil'
		],
		[
			sChildrensPlaygroundEntertainment
		],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tMythology,
			tRomanticSubtext,
			tSchool,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1124/138750',
		[
			'Kyuujitsu no Warumono-san',
			'休日のわるものさん',
			"Mr. Villain's Day Off"
		],
		[
			sSynergySP,
			sShinEiAnimation
		],
		'TV', 0, 2024, 'Web manga', 0, 1,
		[
			tFantasy,
			tSliceOfLife,
			tIyashikei
		]
	),
	new Anime(
		'1533/140617',
		[
			'Loop 7-kaime no Akuyaku Reijou wa, Moto Tekikoku de Jiyuu Kimama na Hanayome Seikatsu wo Mankitsu suru',
			'ループ7回目の悪役令嬢は、元敵国で自由気ままな花嫁生活を満喫する',
			'7th Time Loop: The Villainess Enjoys a Carefree Life Married to Her Worst Enemy!'
		],
		[
			sStudioKai,
			sHORNETS
		],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			tFantasy,
			tRomance,
			tTimeTravel
		]
	),
	new Anime(
		'1319/140093',
		[
			'Saikyou Tank no Meikyuu Kouryaku: Tairyoku 9999 no Rare Skill-mochi Tank, Yuusha Party wo Tsuihou sareru',
			'最強タンクの迷宮攻略 ～体力9999のレアスキル持ちタンク、勇者パーティーを追放される～',
			"The Strongest Tank's Labyrinth Raids"
		],
		[
			sStudioPolon
		],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy
		]
	),
	new Anime(
		'1801/142390',
		[
			'Ore dake Level Up na Ken',
			'俺だけレベルアップな件',
			'Solo Leveling'
		],
		[
			sA1Pictures
		],
		'TV', 0, 2024, 'Web manga', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tAdultCast,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1188/139825',
		[
			'Yubisaki to Renren',
			'ゆびさきと恋々',
			'A Sign of Affection'
		],
		[
			sAjiado
		],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			tRomance,
			tAdultCast,
			tShoujo
		]
	),
	new Anime(
		'1452/139991',
		[
			'Kekkon Yubiwa Monogatari',
			'結婚指輪物語',
			'Tales of Wedding Rings'
		],
		[
			sStapleEntertainment
		],
		'TV', 0, 2024, 'Manga', 2, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tIsekai,
			tSeinen,
			tFavoriteOPSong,
			tFavoriteOPVisual
		]
	),
	new Anime(
		'1207/140800',
		[
			'Momochi-san Chi no Ayakashi Ouji',
			'百千さん家のあやかし王子',
			'The Demon Prince of Momochi House'
		],
		[
			sDrive
		],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			tFantasy,
			tRomance,
			tMythology,
			tShoujo
		]
	),
	new Anime(
		'1733/140802',
		[
			'Chiyu Mahou no Machigatta Tsukaikata',
			'治癒魔法の間違った使い方',
			'The Wrong Way to Use Healing Magic'
		],
		[
			sShinEiAnimation,
			sStudioAdd
		],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1008/140287',
		[
			'Nozomanu Fushi no Boukensha',
			'望まぬ不死の冒険者',
			'The Unwanted Undead Adventurer'
		],
		[
			sConnect
		],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tFavoriteOPSong,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1624/139672',
		[
			'Sasaki to Pii-chan',
			'佐々木とピーちゃん',
			'Sasaki and Peeps'
		],
		[
			sSILVERLINK
		],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1734/139673',
		[
			'Sokushi Cheat ga Saikyou sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga.',
			'即死チートが最強すぎて、異世界のやつらがまるで相手にならないんですが。',
			'My Instant Death Ability is So Overpowered, No One in This Other World Stands a Chance Against Me!'
		],
		[
			sOkurutoNoboru
		],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tParody
		]
	),
	new Anime(
		'1114/140805',
		[
			'Mato Seihei no Slave',
			'魔都精兵のスレイブ',
			'Chained Soldier'
		],
		[
			sSevenArcs
		],
		'TV', 0, 2024, 'Manga', 2, 1,
		[
			tAction,
			tFantasy,
			tEcchi,
			tHarem,
			tShounen
		]
	),
	new Anime(
		'1573/142329',
		[
			'Dungeon Meshi',
			'ダンジョン飯',
			'Delicious in Dungeon'
		],
		[
			sTrigger
		],
		'TV', 0, 2024, 'Manga', 0, 0,
		[
			tComedy,
			tFantasy,
			tGourmet,
			tSeinen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1426/140122',
		[
			'Ishura',
			'異修羅'
		],
		[
			sPassione
		],
		'TV', 0, 2024, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tGore,
			tIsekai
		]
	),
	new Anime(
		'1925/139564',
		[
			'Isekai de Mofumofu Nadenade suru Tame ni Ganbattemasu.',
			'異世界でもふもふなでなでするためにがんばってます。',
			'Fluffy Paradise'
		],
		[
			sEMTSquared
		],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy,
			tIsekai,
			tReincarnation
		]
	),
	new Anime(
		'1985/132227',
		[
			'Gokushufudou Season 2',
			'極主夫道',
			'The Way of the Househusband Season 2'
		],
		[
			sJCStaff
		],
		'ONA', 0, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tAdultCast,
			tGagHumor,
			tOrganizedCrime,
			tFavoriteAnime
		]
	),
	new Anime(
		'1942/120785',
		[
			'Gokushufudou Part 2',
			'極主夫道',
			'The Way of the Househusband Part 2'
		],
		[
			sJCStaff
		],
		'ONA', 3, 2021, 'Web manga', 0, 1,
		[
			tComedy,
			tAdultCast,
			tGagHumor,
			tOrganizedCrime,
			tFavoriteAnime
		]
	),
	new Anime(
		'1535/117726',
		[
			'Gokushufudou',
			'極主夫道',
			'The Way of the Househusband'
		],
		[
			sJCStaff
		],
		'ONA', 1, 2021, 'Web manga', 0, 1,
		[
			tComedy,
			tAdultCast,
			tGagHumor,
			tOrganizedCrime,
			tFavoriteAnime
		]
	),
	new Anime(
		'1802/108501',
		[
			'Majo no Tabitabi',
			'魔女の旅々',
			'Wandering Witch: The Journey of Elaina'
		],
		[
			sC2C
		],
		'TV', 3, 2020, 'Light novel', 1, 1,
		[
			tAdventure,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'1330/137476',
		[
			'Good Night World',
			'グッド・ナイト・ワールド'
		],
		[
			sNAZ
		],
		'ONA', 3, 2023, 'Web manga', 1, 1,
		[
			tDrama,
			tFantasy,
			tPsychological,
			tVideoGame
		]
	),
	new Anime(
		'1708/138033',
		[
			'Kusuriya no Hitorigoto',
			'薬屋のひとりごと',
			'The Apothecary Diaries'
		],
		[
			sOLM,
			sTOHOanimationSTUDIO
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tDrama,
			tMystery,
			tHistorical,
			tMedical,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1136/138410',
		[
			'Undead Unluck',
			'アンデッドアンラック'
		],
		[
			sDavidProduction
		],
		'TV', 3, 2023, 'Manga', 1, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tSuperPower,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1020/139134',
		[
			'Hoshikuzu Telepath',
			'星屑テレパス',
			'Stardust Telepath'
		],
		[
			sStudioGokumi
		],
		'TV', 3, 2023, '4-koma manga', 0, 1,
		[
			tComedy,
			tYuri,
			tSupernatural,
			tSchool,
			tCGDCT,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1812/136764',
		[
			'Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo',
			'君のことが大大大大大好きな100人の彼女',
			'The 100 Girlfriends Who Really, Really, Really, Really, Really Love You'
		],
		[
			sBiburyAnimationStudios
		],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tParody,
			tSchool,
			tSeinen,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1160/138465',
		[
			'Bokura no Ame-iro Protocol',
			'僕らの雨いろプロトコル',
			'Protocol: Rain'
		],
		[
			sQuad
		],
		'TV', 3, 2023, 'Original', 0, 1,
		[
			tAction,
			tVideoGame
		]
	),
	new Anime(
		'1182/138184',
		[
			'Potion-danomi de Ikinobimasu!',
			'ポーション頼みで生き延びます!',
			'I Shall Survive Using Potions!'
		],
		[
			sJumondo
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tReincarnation,
			tAdventure
		]
	),
	new Anime(
		'1051/136302',
		[
			'Tearmoon Teikoku Monogatari: Dantoudai kara Hajimaru, Hime no Tensei Gyakuten Story',
			'ティアムーン帝国物語～断頭台から始まる、姫の転生逆転ストーリー～',
			'Tearmoon Empire'
		],
		[
			sSILVERLINK
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tTimeTravel,
			tFavoriteAnime
		]
	),
	new Anime(
		'1319/140965',
		[
			'Buta no Liver wa Kanetsu Shiro',
			'豚のレバーは加熱しろ',
			'Butareba -The Story of a Man Who Turned into a Pig-'
		],
		[
			sProjectNo9
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai
		]
	),
	new Anime(
		'1363/139744',
		[
			'Kikansha no Mahou wa Tokubetsu desu',
			'帰還者の魔法は特別です',
			"A Returner's Magic Should Be Special"
		],
		[
			sArvoAnimation
		],
		'TV', 3, 2023, 'Web manga', 0, 1,
		[
			tAction,
			tFantasy,
			tSchool,
			tTimeTravel
		]
	),
	new Anime(
		'1032/137893',
		[
			'Hikikomari Kyuuketsuki no Monmon',
			'ひきこまり吸血姫の悶々',
			'The Vexations of a Shut-In Vampire Princess'
		],
		[
			sProjectNo9
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tVampire,
			tYuri,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1610/138189',
		[
			'Hametsu no Oukoku',
			'はめつのおうこく',
			'The Kingdoms of Ruin'
		],
		[
			sYokohamaAnimationLab
		],
		'TV', 3, 2023, 'Manga', 1, 1,
		[
			tAction,
			tDrama,
			tFantasy,
			tGore,
			tShounen,
			tSciFi
		]
	),
	new Anime(
		'1848/140019',
		[
			'Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi.',
			'経験済みなキミと、 経験ゼロなオレが、 お付き合いする話。',
			'Our Dating Story: The Experienced You and The Inexperienced Me'
		],
		[
			sENGI
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tRomance,
			tSchool
		]
	),
	new Anime(
		'1194/138253',
		[
			'Yuzuki-san Chi no Yonkyoudai.',
			'柚木さんちの四兄弟。',
			"The Yuzuki Family's Four Sons"
		],
		[
			sShuka
		],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			tSliceOfLife,
			tSchool,
			tShoujo
		]
	),
	new Anime(
		'1588/138395',
		[
			'16bit Sensation: Another Layer',
			'16bitセンセーション ANOTHER LAYER'
		],
		[
			sSilver
		],
		'TV', 3, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tAdultCast,
			tOtakuCulture,
			tTimeTravel,
			tWorkplace,
			tSupernatural,
			tSciFi,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1720/139131',
		[
			'Konyaku Haki sareta Reijou wo Hirotta Ore ga, Ikenai Koto wo Oshiekomu',
			'婚約破棄された令嬢を拾った俺が、イケナイことを教え込む',
			"I'm Giving the Disgraced Noble Lady I Rescued a Crash Course in Naughtiness"
		],
		[
			sZeroG,
			sDigitalNetworkAnimation
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1531/137711',
		[
			'Watashi no Oshi wa Akuyaku Reijou.',
			'私の推しは悪役令嬢。',
			"I'm in Love with the Villainess"
		],
		[
			sPlatinumVision
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tYuri,
			tIsekai,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1506/138529',
		[
			'Seiken Gakuin no Makentsukai',
			'聖剣学院の魔剣使い',
			'The Demon Sword Master of Excalibur Academy'
		],
		[
			sPassione
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tHarem,
			tReincarnation,
			tSchool
		]
	),
	new Anime(
		'1233/138531',
		[
			'Toaru Ossan no VRMMO Katsudouki',
			'とあるおっさんのVRMMO活動記',
			"A Playthrough of a Certain Dude's VRMMO Life"
		],
		[
			sMahoFilm
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tVideoGame,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1114/136742',
		[
			'Shy',
			'シャイ'
		],
		[
			s8bit
		],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			tAction,
			tDrama,
			tSuperPower,
			tShounen,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1951/138462',
		[
			'Boushoku no Berserk',
			'暴食のベルセルク',
			'Berserk of Gluttony'
		],
		[
			sACGT
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy
		]
	),
	new Anime(
		'1918/138185',
		[
			'Dekoboko Majo no Oyako Jijou',
			'でこぼこ魔女の親子事情',
			'The Family Circumstances of the Irregular Witch'
		],
		[
			sAReal
		],
		'TV', 3, 2023, '4-koma manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tGagHumor,
			tFavoriteAnime
		]
	),
	new Anime(
		'1500/139931',
		[
			'Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su',
			'シャングリラ・フロンティア～クソゲーハンター、神ゲーに挑まんとす～',
			'Shangri-La Frontier'
		],
		[
			sC2C
		],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tVideoGame,
			tShounen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1763/140359',
		[
			'Ragna Crimson',
			'ラグナクリムゾン'
		],
		[
			sSILVERLINK
		],
		'TV', 3, 2023, 'Manga', 1, 1,
		[
			tAction,
			tFantasy,
			tShounen
		]
	),
	new Anime(
		'1036/140549',
		[
			'Sousou no Frieren',
			'葬送のフリーレン',
			"Frieren: Beyond Journey's End"
		],
		[
			sMadhouse
		],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			tAdventure,
			tDrama,
			tFantasy,
			tShounen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1833/138479',
		[
			'Ojou to Banken-kun',
			'お嬢と番犬くん',
			'A Girl & Her Guard Dog'
		],
		[
			sProjectNo9
		],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			tRomance,
			tSchool,
			tShoujo,
			tFavoriteOPSong
		]
	),
	new Anime(
		'1271/137727',
		[
			'Boukensha ni Naritai to Miyako ni Deteitta Musume ga S-Rank ni Natteta',
			'冒険者になりたいと都に出て行った娘がSランクになってた',
			'My Daughter Left the Nest and Returned an S-Rank Adventurer'
		],
		[
			sTyphoonGraphics
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy
		]
	),
	new Anime(
		'1329/135096',
		[
			'Shiro Seijo to Kuro Bokushi',
			'白聖女と黒牧師',
			'Saint Cecilia and Pastor Lawrence'
		],
		[
			sDogaKobo
		],
		'TV', 2, 2023, '4-koma manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tShounen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1002/138524',
		[
			'Helck',
			'ヘルク'
		],
		[
			sSatelight
		],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			tAction,
			tFantasy
		]
	),
	new Anime(
		'1346/138731',
		[
			'Dark Gathering',
			'ダークギャザリング'
		],
		[
			sOLM
		],
		'TV', 2, 2023, 'Manga', 1, 1,
		[
			tHorror,
			tSupernatural,
			tShounen
		]
	),
	new Anime(
		'1179/136000',
		[
			'Eiyuu Kyoushitsu',
			'英雄教室',
			'Classroom for Heroes'
		],
		[
			sActas
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tEcchi,
			tHarem,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1384/136408',
		[
			'Zom 100: Zombie ni Naru made ni Shitai 100 no Koto',
			'ゾン100～ゾンビになるまでにしたい100のこと～',
			'Zom 100: Bucket List of the Dead'
		],
		[
			sBUGFILMS
		],
		'TV', 2, 2023, 'Manga', 1, 1,
		[
			tAction,
			tComedy,
			tHorror,
			tSupernatural,
			tAdultCast,
			tSurvival,
			tSeinen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1927/138733',
		[
			'Temple Specials',
			'てんぷる',
			'TenPuru: No One Can Live on Loneliness Specials'
		],
		[
			sGekkou
		],
		'TV', 3, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tFavoriteAnime
		]
	),
	new Anime(
		'1879/136896',
		[
			'Temple',
			'てんぷる',
			'TenPuru: No One Can Live on Loneliness'
		],
		[
			sGekkou
		],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tFavoriteAnime
		]
	),
	new Anime(
		'1571/134525',
		[
			'Liar Liar',
			'ライアー・ライアー'
		],
		[
			sGeekToys
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tSuspense,
			tPsychological,
			tSchool,
			tStrategyGame,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'1579/136295',
		[
			'Level 1 dakedo Unique Skill de Saikyou desu',
			'レベル1だけどユニークスキルで最強です',
			'My Unique Skill Makes Me OP Even at Level 1'
		],
		[
			sMahoFilm
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tFantasy,
			tHarem,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1074/136720',
		[
			'Dekiru Neko wa Kyou mo Yuuutsu',
			'デキる猫は今日も憂鬱',
			'The Masterful Cat Is Depressed Again Today'
		],
		[
			sGoHands
		],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tAdultCast,
			tAnthropomorphic,
			tFavoriteAnime
		]
	),
	new Anime(
		'1706/136176',
		[
			'AI no Idenshi',
			'AIの遺電子',
			'The Gene of AI'
		],
		[
			sMadhouse
		],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			tDrama,
			tSciFi,
			tSuspense,
			tPsychological,
			tShounen,
			tFavoriteOPSong,
			tFavoriteOPVisual
		]
	),
	new Anime(
		'1396/136273',
		[
			'Nanatsu no Maken ga Shihai suru',
			'七つの魔剣が支配する',
			'Reign of the Seven Spellblades'
		],
		[
			sJCStaff
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tSchool
		]
	),
	new Anime(
		'1490/137816',
		[
			'Seija Musou: Salaryman, Isekai de Ikinokoru Tame ni Ayumu Michi',
			'聖者無双',
			'The Great Cleric'
		],
		[
			sYokohamaAnimationLab,
			sCloudHearts
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1722/135542',
		[
			'Higeki no Genkyou to Naru Saikyou Gedou Last Boss Joou wa Tami no Tame ni Tsukushimasu.',
			'悲劇の元凶となる最強外道ラスボス女王は民の為に尽くします。',
			'The Most Heretical Last Boss Queen: From Villainess to Savior'
		],
		[
			sOLMTeamYoshioka
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tReincarnation,
			tJosei
		]
	),
	new Anime(
		'1946/136661',
		[
			'Undead Girl Murder Farce',
			'アンデッドガール・マーダーファルス',
			'Undead Murder Farce'
		],
		[
			sLapinTrack
		],
		'TV', 2, 2023, 'Novel', 1, 1,
		[
			tFantasy,
			tMystery,
			tDetective,
			tHistorical,
			tVampire,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'1653/136097',
		[
			'Jidou Hanbaiki ni Umarekawatta Ore wa Meikyuu wo Samayou',
			'自動販売機に生まれ変わった俺は迷宮を彷徨う',
			'Reborn as a Vending Machine, Now I Wander the Dungeon'
		],
		[
			sStudioGokumi,
			sAXsiZ
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation
		]
	),
	new Anime(
		'1147/122444',
		[
			'Watashi no Shiawase na Kekkon',
			'わたしの幸せな結婚',
			'My Happy Marriage'
		],
		[
			sKinemaCitrus
		],
		'TV', 2, 2023, 'Novel', 0, 1,
		[
			tDrama,
			tFantasy,
			tRomance,
			tAdultCast,
			tHistorical
		]
	),
	new Anime(
		'1582/136325',
		[
			'Suki na Ko ga Megane wo Wasureta',
			'好きな子がめがねを忘れた',
			'The Girl I Like Forgot Her Glasses'
		],
		[
			sGoHands
		],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1239/134810',
		[
			'Yumemiru Danshi wa Genjitsushugisha',
			'夢見る男子は現実主義者',
			'The Dreaming Boy is a Realist'
		],
		[
			sStudioGokumi,
			sAXsiZ
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'1251/136232',
		[
			'Okashi na Tensei',
			'おかしな転生',
			'Sweet Reincarnation'
		],
		[
			sSynergySP
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteEDSong
		]
	),
	new Anime(
		'1879/136721',
		[
			'Lv1 Maou to One Room Yuusha',
			'Lv1魔王とワンルーム勇者',
			'Level 1 Demon Lord and One Room Hero'
		],
		[
			sSILVERLINK,
			sBlade
		],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tFantasy
		]
	),
	new Anime(
		'1079/136949',
		[
			'Ryza no Atelier: Tokoyami no Joou to Himitsu no Kakurega',
			'ライザのアトリエ ~常闇の女王と秘密の隠れ家~',
			'Atelier Ryza: Ever Darkness & the Secret Hideout The Animation'
		],
		[
			sLIDENFILMS
		],
		'TV', 2, 2023, 'Game', 0, 1,
		[
			tAdventure,
			tFantasy
		]
	),
	new Anime(
		'1984/136274',
		[
			'Uchi no Kaisha no Chiisai Senpai no Hanashi',
			'うちの会社の小さい先輩の話',
			'My Tiny Senpai'
		],
		[
			sProjectNo9
		],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tAdultCast,
			tWorkplace,
			tFavoriteAnime
		]
	),
	new Anime(
		'1406/136367',
		[
			'Ayaka',
			'AYAKA ‐あやか‐',
			'Ayaka: A Story of Bonds and Wounds'
		],
		[
			sStudioBlanc
		],
		'TV', 2, 2023, 'Original', 0, 1,
		[
			tFantasy,
			tMythology
		]
	),
	new Anime(
		'1496/136558',
		[
			'Jitsu wa Ore, Saikyou deshita?',
			'実は俺、最強でした?',
			'Am I Actually the Strongest?'
		],
		[
			sStapleEntertainment
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy,
			tIsekai,
			tReincarnation
		]
	),
	new Anime(
		'1208/133335',
		[
			'Genjitsu no Yohane: Sunshine in the Mirror',
			'幻日のヨハネ -SUNSHINE in the MIRROR-',
			'Yohane the Parhelion: Sunshine in the Mirror'
		],
		[
			sSunrise
		],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			tFantasy,
			tFavoriteOPSong,
			tFavoriteOPVisual
		]
	),
	new Anime(
		'5/85435',
		[
			'Amagi Brilliant Park',
			'甘城ブリリアントパーク'
		],
		[
			sKyotoAnimation
		],
		'TV', 3, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tWorkplace,
		]
	),
	new Anime(
		'9/39303',
		[
			'Mashiro-iro Symphony: The Color of Lovers',
			'ましろ色シンフォニー -The color of lovers-',
			'Mashiroiro Symphony: The Color of Lovers'
		],
		[
			sManglobe
		],
		'TV', 3, 2011, 'Visual novel', 2, 1,
		[
			tDrama,
			tHarem,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'1997/127227',
		[
			'Niehime to Kemono no Ou',
			'贄姫と獣の王',
			'Sacrificial Princess and the King of Beasts'
		],
		[
			sJCStaff
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tFantasy,
			tRomance,
			tAnthropomorphic,
			tShoujo
		]
	),
	new Anime(
		'1832/133754',
		[
			'Ao no Orchestra',
			'青のオーケストラ',
			'The Blue Orchestra'
		],
		[
			sNipponAnimation
		],
		'TV', 1, 2023, 'Web manga', 0, 1,
		[
			tDrama,
			tMusic,
			tPerformingArts,
			tSchool,
			tFavoriteOPSong,
			tFavoriteOPVisual
		]
	),
	new Anime(
		'1812/134736',
		[
			'Oshi no Ko',
			'【推しの子】'
		],
		[
			sDogaKobo
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tDrama,
			tSupernatural,
			tReincarnation,
			tShowbiz,
			tSeinen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1005/139809',
		[
			'Dead Mount Death Play Part 2',
			'デッドマウント・デスプレイ'
		],
		[
			sGeekToys
		],
		'TV', 3, 2023, 'Manga', 1, 1,
		[
			tAction,
			tFantasy,
			tReincarnation,
			tSeinen,
			tSupernatural
		]
	),
	new Anime(
		'1930/133758',
		[
			'Dead Mount Death Play',
			'デッドマウント・デスプレイ'
		],
		[
			sGeekToys
		],
		'TV', 1, 2023, 'Manga', 1, 1,
		[
			tAction,
			tFantasy,
			tReincarnation,
			tSeinen,
			tSupernatural
		]
	),
	new Anime(
		'1109/130452',
		[
			'Kanojo ga Koushaku-tei ni Itta Riyuu',
			'彼女が公爵邸に行った理由',
			"The Reason Why Raeliana Ended up at the Duke's Mansion"
		],
		[
			sTyphoonGraphics
		],
		'TV', 1, 2023, 'Web manga', 0, 1,
		[
			tFantasy,
			tIsekai,
			tReincarnation,
			tRomance
		]
	),
	new Anime(
		'1402/134007',
		[
			'Kimi wa Houkago Insomnia',
			'君は放課後インソムニア',
			'Insomniacs After School'
		],
		[
			sLIDENFILMS
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tRomance,
			tSchool,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1387/134151',
		[
			'Isekai Shoukan wa Nidome desu',
			'異世界召喚は二度目です',
			'Summoned to Another World for a Second Time'
		],
		[
			sStudioElle
		],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tHarem,
			tIsekai,
			tRomance
		]
	),
	new Anime(
		'1091/135041',
		[
			'Otonari ni Ginga',
			'おとなりに銀河',
			'A Galaxy Next Door'
		],
		[
			sAsahiProduction
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tRomance,
			tSupernatural,
			tChildcare,
			tOtakuCulture,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1332/134658',
		[
			'Kawaisugi Crisis',
			'カワイスギクライシス',
			'Too Cute Crisis'
		],
		[
			sSynergySP
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tSciFi,
			tPets,
			tShounen
		]
	),
	new Anime(
		'1963/136050',
		[
			'Megami no Café Terrace',
			'女神のカフェテラス',
			'The Café Terrace and Its Goddesses'
		],
		[
			sTezukaProductions
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tEcchi,
			tHarem,
			tRomance,
			tShounen
		]
	),
	new Anime(
		'1171/133777',
		[
			'Edomae Elf',
			'江戸前エルフ',
			'Otaku Elf'
		],
		[
			sC2C
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tShounen,
			tSupernatural,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1708/133360',
		[
			'Watashi no Yuri wa Oshigoto desu!',
			'私の百合はお仕事です！',
			'Yuri is My Job!'
		],
		[
			sPassione,
			sStudioLings
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tWorkplace,
			tYuri
		]
	),
	new Anime(
		'1250/135256',
		[
			'Isekai One Turn Kill Neesan: Ane Douhan no Isekai Seikatsu Hajimemashita',
			'異世界ワンターンキル姉さん ～姉同伴の異世界生活はじめました～',
			'My One-Hit Kill Sister'
		],
		[
			sGekkou
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai,
			tSeinen
		]
	),
	new Anime(
		'1846/140458',
		[
			'Mashle: Shinkakusha Kouho Senbatsu Shiken-hen',
			'マッシュル-MASHLE- 神覚者候補選抜試験編',
			'Mashle: Magic and Muscles - The Divine Visionary Candidate Exam Arc'
		],
		[
			sA1Pictures
		],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tGagHumor,
			tParody,
			tSchool,
			tShounen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1218/135107',
		[
			'Mashle',
			'マッシュル-MASHLE-',
			'Mashle: Magic and Muscles'
		],
		[
			sA1Pictures
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tGagHumor,
			tParody,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1868/133866',
		[
			'Yuusha ga Shinda!',
			'勇者が死んだ！',
			'The Legendary Hero Is Dead!'
		],
		[
			sLIDENFILMS
		],
		'TV', 1, 2023, 'Web manga', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tEcchi,
			tHarem,
			tParody,
			tFavoriteOPSong,
			tFavoriteOPVisual
		]
	),
	new Anime(
		'1794/135148',
		[
			'Kaminaki Sekai no Kamisama Katsudou',
			'神無き世界のカミサマ活動',
			'KamiKatsu: Working for God in a Godless World'
		],
		[
			sStudioPalette
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tEcchi,
			tFantasy,
			tIsekai,
			tReincarnation,
			tSeinen
		]
	),
	new Anime(
		'1518/138730',
		[
			'Skip to Loafer',
			'スキップとローファー',
			'Skip and Loafer'
		],
		[
			sPAWorks
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tDrama,
			tSchool,
			tSeinen,
			tFavoriteOPSong,
			tFavoriteOPVisual
		]
	),
	new Anime(
		'1316/134327',
		[
			'Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta',
			'異世界でチート能力を手にした俺は、現実世界をも無双する ～レベルアップは人生を変えた～',
			'I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too'
		],
		[
			sMillepensee
		],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai,
			tSchool
		]
	),
	new Anime(
		'1350/133642',
		[
			'Jijou wo Shiranai Tenkousei ga Guigui Kuru.',
			'事情を知らない転校生がグイグイくる。',
			'My Clueless First Friend'
		],
		[
			sStudioSignpost
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tSchool,
			tShounen,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1071/135255',
		[
			'Tensei Kizoku no Isekai Boukenroku: Jichou wo Shiranai Kamigami no Shito',
			'転生貴族の異世界冒険録～自重を知らない神々の使徒～',
			"The Aristocrat's Otherworldly Adventure: Serving Gods Who Go Too Far"
		],
		[
			sMagicBus,
			sEMTSquared
		],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tHarem,
			tIsekai,
			tReincarnation,
			tRomance
		]
	),
	new Anime(
		'1121/133132',
		[
			'Tengoku Daimakyou',
			'天国大魔境',
			'Heavenly Delusion'
		],
		[
			sProductionIG
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tAdventure,
			tMystery,
			tSciFi,
			tSurvival,
			tSeinen
		]
	),
	new Anime(
		'1643/138581',
		[
			'Boku no Kokoro no Yabai Yatsu Season 2',
			'僕の心のヤバイやつ 第2期',
			'The Dangers in My Heart Season 2'
		],
		[
			sShinEiAnimation
		],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1710/135998',
		[
			'Boku no Kokoro no Yabai Yatsu: Twi-Yaba',
			'僕の心のヤバイやつ ツイヤバ'
		],
		[
			sShinEiAnimation
		],
		'ONA', 3, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1545/133887',
		[
			'Boku no Kokoro no Yabai Yatsu',
			'僕の心のヤバイやつ',
			'The Dangers in My Heart'
		],
		[
			sShinEiAnimation
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1298/134178',
		[
			'Yamada-kun to Lv999 no Koi wo Suru',
			'山田くんとLv999の恋をする',
			'My Love Story with Yamada-kun at Lv999'
		],
		[
			sMadhouse
		],
		'TV', 1, 2023, 'Web manga', 0, 1,
		[
			tRomance,
			tVideoGame,
			tFavoriteAnime
		]
	),
	new Anime(
		'1673/117409',
		[
			'Deatte 5-byou de Battle',
			'出会って5秒でバトル',
			'Battle Game in 5 Seconds'
		],
		[
			sSynergySP,
			sVegaEntertainment
		],
		'TV', 2, 2021, 'Web manga', 1, 1,
		[
			tSupernatural,
			tSuspense,
			tHighStakesGame,
			tStrategyGame,
			tSuperPower,
			tSurvival,
			tFavoriteAnime
		]
	),
	new Anime(
		'1429/95946',
		[
			'Akame ga Kill!',
			'アカメが斬る！'
		],
		[
			sWhiteFox
		],
		'TV', 2, 2014, 'Manga', 1, 1,
		[
			tAction,
			tFantasy,
			tShounen,
			tSuperPower,
			tGore
		]
	),
	new Anime(
		'7/86665',
		[
			'Aho Girl',
			'アホガール'
		],
		[
			sDiomedéa
		],
		'TV', 2, 2017, '4-koma manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1472/93813',
		[
			"Knight's & Magic",
			'ナイツ&マジック'
		],
		[
			s8bit
		],
		'TV', 2, 2017, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tIsekai,
			tMecha,
			tReincarnation,
			tSchool
		]
	),
	new Anime(
		'1951/95080',
		[
			'Island'
		],
		[
			sFeel
		],
		'TV', 2, 2018, 'Visual novel', 0, 1,
		[
			tDrama,
			tRomance,
			tSciFi,
			tHarem,
			tTimeTravel,
			tFavoriteAnime
		]
	),
	new Anime(
		'1709/98068',
		[
			'Charlotte: Tsuyoimono-tachi',
			'Charlotte（シャーロット）特別篇 強い者たち',
			'Charlotte: The Strong Ones'
		],
		[
			sPAWorks
		],
		'Special', 0, 2016, 'Original', 0, 1,
		[
			tDrama,
			tSchool,
			tSuperPower,
			tFavoriteAnime
		]
	),
	new Anime(
		'12/74683',
		[
			'Charlotte',
			'Charlotte（シャーロット）'
		],
		[
			sPAWorks
		],
		'TV', 2, 2015, 'Original', 0, 1,
		[
			tDrama,
			tSchool,
			tSuperPower,
			tFavoriteAnime
		]
	),
	new Anime(
		'1724/117421',
		[
			'Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2',
			'Re:ゼロから始める異世界生活',
			'Re:ZERO -Starting Life in Another World- Season 2 Part 2'
		],
		[
			sWhiteFox
		],
		'TV', 0, 2021, 'Light novel', 1, 1,
		[
			tDrama,
			tFantasy,
			tSuspense,
			tIsekai,
			tPsychological,
			tTimeTravel,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1444/108005',
		[
			'Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season',
			'Re:ゼロから始める異世界生活',
			'Re:ZERO -Starting Life in Another World- Season 2'
		],
		[
			sWhiteFox
		],
		'TV', 2, 2020, 'Light novel', 1, 1,
		[
			tDrama,
			tFantasy,
			tSuspense,
			tIsekai,
			tPsychological,
			tTimeTravel,
			tFavoriteAnime
		]
	),
	new Anime(
		'1238/104023',
		[
			'Re:Zero kara Hajimeru Isekai Seikatsu - Hyouketsu no Kizuna',
			'Re:ゼロから始める異世界生活『氷結の絆',
			'Re:ZERO -Starting Life in Another World- The Frozen Bond'
		],
		[
			sWhiteFox
		],
		'Movie', 3, 2019, 'Light novel', 0, 1,
		[
			tDrama,
			tFantasy,
			tSuspense,
			tPsychological,
			tFavoriteAnime
		]
	),
	new Anime(
		'1773/109444',
		[
			'Re:Zero kara Hajimeru Isekai Seikatsu - Memory Snow',
			'Re:ゼロから始める異世界生活 Memory Snow',
			'Re:ZERO -Starting Life in Another World- Memory Snow'
		],
		[
			sWhiteFox
		],
		'Movie', 3, 2018, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1522/128039',
		[
			'Re:Zero kara Hajimeru Isekai Seikatsu',
			'Re:ゼロから始める異世界生活',
			'Re:ZERO -Starting Life in Another World'
		],
		[
			sWhiteFox
		],
		'TV', 1, 2016, 'Light novel', 1, 1,
		[
			tDrama,
			tFantasy,
			tSuspense,
			tIsekai,
			tPsychological,
			tTimeTravel,
			tFavoriteAnime
		]
	),
	new Anime(
		'6/89687',
		[
			'Busou Shoujo Machiavellianism: Doki! "Goken-darake" no Ian Ryokou',
			'武装少女マキャヴェリズム ドキッ！「五剣だらけ」の慰安旅行'
		],
		[
			sSILVERLINK,
			sConnect
		],
		'OVA', 3, 2017, 'Manga', 0, 1,
		[
			tAction,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'3/83995',
		[
			'Busou Shoujo Machiavellianism',
			'武装少女マキャヴェリズム',
			"Armed Girl's Machiavellism"
		],
		[
			sSILVERLINK,
			sConnect
		],
		'TV', 1, 2017, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tMartialArts,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1880/101146',
		[
			'Tenki no Ko',
			'天気の子',
			'Weathering with You'
		],
		[
			sCoMixWaveFilms
		],
		'Movie', 2, 2019, 'Original', 0, 1,
		[
			tDrama,
			tFantasy,
			tRomance,
			tFavoriteAnime
		]
	),
	new Anime(
		'1078/131921',
		[
			'Ayakashi Triangle',
			'あやかしトライアングル'
		],
		[
			sConnect
		],
		'TV', 0, 2023, 'Manga', 2, 1,
		[
			tAction,
			tComedy,
			tEcchi,
			tGenben,
			tMythology,
			tRomance,
			tShounen,
			tSupernatural,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1818/132330',
		[
			'Kubo-san wa Mob wo Yurusanai',
			'久保さんは僕を許さない',
			"Kubo Won't Let Me Be Invisible"
		],
		[
			sPINEJAM
		],
		'TV', 0, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1661/131889',
		[
			'Tondemo Skill de Isekai Hourou Meshi',
			'とんでもスキルで異世界放浪メシ',
			'Campfire Cooking in Another World with My Absurd Skill'
		],
		[
			sMappa
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tGourmet,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1111/135927',
		[
			'Mononogatari 2nd Season',
			'もののがたり 第二章'
		],
		[
			sBandaiNamcoPictures
		],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			tAction,
			tFantasy,
			tAdultCast,
			tMythology,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1173/131830',
		[
			'Mononogatari',
			'もののがたり',
			'Malevolent Spirits: Mononogatari'
		],
		[
			sBandaiNamcoPictures
		],
		'TV', 0, 2023, 'Manga', 0, 1,
		[
			tAction,
			tFantasy,
			tAdultCast,
			tMythology,
			tSeinen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1087/129002',
		[
			'Nokemono-tachi no Yoru',
			'ノケモノたちの夜',
			'The Tale of Outcasts'
		],
		[
			sAshiProductions
		],
		'TV', 0, 2023, 'Manga', 0, 1,
		[
			tAction,
			tFantasy,
			tAnthropomorphic,
			tHistorical,
			tShounen
		]
	),
	new Anime(
		'1044/129594',
		[
			'Eiyuuou, Bu wo Kiwameru Tame Tenseisu: Soshite, Sekai Saikyou no Minarai Kishi♀',
			'英雄王、武を極めるため転生す ～そして、世界最強の見習い騎士♀～',
			'Reborn to Master the Blade: From Hero-King to Extraordinary Squire ♀'
		],
		[
			sStudioComet
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tGenben,
			tReincarnation
		]
	),
	new Anime(
		'1122/96435',
		[
			'Koe no Katachi',
			'聲の形',
			'A Silent Voice'
		],
		[
			sKyotoAnimation
		],
		'Movie', 2, 2016, 'Manga', 0, 1,
		[
			tDrama,
			tRomanticSubtext,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1417/112991',
		[
			'Byousoku 5 Centimeter',
			'秒速５センチメートル',
			'5 Centimeters Per Second'
		],
		[
			sCoMixWaveFilms
		],
		'Movie', 0, 2007, 'Original', 0, 1,
		[
			tDrama,
			tRomance
		]
	),
	new Anime(
		'1805/132335',
		[
			'Benriya Saitou-san, Isekai ni Iku',
			'便利屋斎藤さん、異世界に行く',
			'Handyman Saitou in Another World'
		],
		[
			sC2C
		],
		'TV', 0, 2023, 'Web manga', 1, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1890/131473',
		[
			'Rougo ni Sonaete Isekai de 8-manmai no Kinka wo Tamemasu',
			'老後に備えて異世界で８万枚の金貨を貯めます',
			'Saving 80,000 Gold in Another World for My Retirement'
		],
		[
			sFelixFilm
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai
		]
	),
	new Anime(
		'1547/125900',
		[
			'Saikyou Onmyouji no Isekai Tenseiki',
			'最強陰陽師の異世界転生記',
			'The Reincarnation of the Strongest Exorcist in Another World'
		],
		[
			sStudioBlanc
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai,
			tReincarnation
		]
	),
	new Anime(
		'12/73984',
		[
			'Ben-To',
			'ベン・トー'
		],
		[
			sDavidProduction
		],
		'TV', 3, 2011, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tGourmet,
			tMartialArts
		]
	),
	new Anime(
		'1240/133638',
		[
			'Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken',
			'お隣の天使様にいつの間にか駄目人間にされていた件',
			'The Angel Next Door Spoils Me Rotten'
		],
		[
			sProjectNo9
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tRomance,
			tSchool,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1553/133767',
		[
			'Buddy Daddies'
		],
		[
			sPAWorks
		],
		'TV', 0, 2023, 'Original', 0, 1,
		[
			tAction,
			tComedy,
			tChildcare,
			tOrganizedCrime,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1866/133949',
		[
			'Ars no Kyojuu',
			'アルスの巨獣',
			'Giant Beasts of Ars'
		],
		[
			sAsahiProduction
		],
		'TV', 0, 2023, 'Original', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy
		]
	),
	new Anime(
		'1997/131327',
		[
			'Tsundere Akuyaku Reijou Liselotte to Jikkyou no Endou-kun to Kaisetsu no Kobayashi-san',
			'ツンデレ悪役令嬢リーゼロッテと実況の遠藤くんと解説の小林さん',
			'Endo and Kobayashi Live! The Latest on Tsundere Villainess Lieselotte'
		],
		[
			sTezukaProductions
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tVideoGame,
			tRomance
		]
	),
	new Anime(
		'1884/131748',
		[
			'Revenger',
			'リベンジャー'
		],
		[
			sAjiado
		],
		'TV', 0, 2023, 'Original', 1, 1,
		[
			tAction,
			tDrama,
			tMystery,
			tAdultCast,
			tHistorical,
			tOrganizedCrime,
			tSamurai
		]
	),
	new Anime(
		'1693/138042',
		[
			'Sugar Apple Fairy Tale Part 2',
			'シュガーアップル・フェアリーテイル'
		],
		[
			sJCStaff
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tAdventure,
			tDrama,
			tFantasy,
			tRomance,
			tVisualArts,
			tShoujo
		]
	),
	new Anime(
		'1897/131300',
		[
			'Sugar Apple Fairy Tale',
			'シュガーアップル・フェアリーテイル'
		],
		[
			sJCStaff
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tAdventure,
			tDrama,
			tFantasy,
			tRomance,
			tVisualArts,
			tShoujo
		]
	),
	new Anime(
		'1983/132329',
		[
			'Isekai Nonbiri Nouka',
			'異世界のんびり農家',
			'Farming Life in Another World'
		],
		[
			sZeroG
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tSliceOfLife,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1058/131632',
		[
			'Oniichan wa Oshimai!',
			'お兄ちゃんはおしまい！',
			"Onimai: I'm Now Your Sister!"
		],
		[
			sStudioBind
		],
		'TV', 0, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tCGDCT,
			tGenben,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1049/131580',
		[
			'Hyouken no Majutsushi ga Sekai wo Suberu',
			'冰剣の魔術師が世界を統べる',
			'The Iceblade Sorcerer Shall Rule the World'
		],
		[
			sCloudHearts
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tSchool
		]
	),
	new Anime(
		'1317/136666',
		[
			'Spy Kyoushitsu 2nd Season',
			'スパイ教室',
			'Spy Classroom Season 2'
		],
		[
			sFeel
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tMystery,
			tFavoriteAnime
		]
	),
	new Anime(
		'1491/132864',
		[
			'Spy Kyoushitsu',
			'スパイ教室',
			'Spy Classroom'
		],
		[
			sFeel
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tMystery,
			tFavoriteOPSong,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1444/131828',
		[
			'Tomo-chan wa Onnanoko!',
			'トモちゃんは女の子！',
			'Tomo-chan Is a Girl!'
		],
		[
			sLayduce
		],
		'TV', 0, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1189/111994',
		[
			'Tanaka-kun wa Itsumo Kedaruge',
			'田中くんはいつもけだるげ',
			'Tanaka-kun is Always Listless'
		],
		[
			sSILVERLINK
		],
		'TV', 1, 2016, 'Web manga', 0, 1,
		[
			tIyashikei,
			tSchool,
			tSliceOfLife,
			tFavoriteAnime
		]
	),
	new Anime(
		'1453/132695',
		[
			'Inu ni Nattara Suki na Hito ni Hirowareta. Specials',
			'犬になったら好きな人に拾われた。OVA'
		],
		[
			sQuad
		],
		'Special', 0, 2023, 'Web manga', 2, 1,
		[
			tComedy,
			tEcchi
		]
	),
	new Anime(
		'1832/132333',
		[
			'Inu ni Nattara Suki na Hito ni Hirowareta.',
			'犬になったら好きな人に拾われた。',
			"My Life as Inukai-san's Dog"
		],
		[
			sQuad
		],
		'TV', 0, 2023, 'Web manga', 2, 1,
		[
			tComedy,
			tEcchi
		]
	),
	new Anime(
		'1927/132758',
		[
			'Koori Zokusei Danshi to Cool na Douryou Joshi',
			'氷属性男子とクールな同僚女子',
			'The Ice Guy and His Cool Female Colleague'
		],
		[
			sZeroG,
			sLiber
		],
		'TV', 0, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tAdultCast,
			tMythology,
			tWorkplace,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1053/129004',
		[
			'Tensei Oujo to Tensai Reijou no Mahou Kakumei',
			'転生王女と天才令嬢の魔法革命',
			'The Magical Revolution of the Reincarnated Princess and the Genius Young Lady'
		],
		[
			sDiomedéa
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tReincarnation,
			tYuri,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1446/131578',
		[
			'Ningen Fushin no Boukensha-tachi ga Sekai wo Sukuu you desu',
			'人間不信の冒険者たちが世界を救うようです',
			"Ningen Fushin: Adventurers Who Don't Believe in Humanity Will Save the World"
		],
		[
			sGeekToys
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'10/89671',
		[
			'Himouto! Umaru-chan R',
			'干物妹！うまるちゃんR'
		],
		[
			sDogaKobo
		],
		'TV', 3, 2017, 'Manga', 0, 1,
		[
			tComedy,
			tOtakuCulture,
			tSchool,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'7/76826',
		[
			'Himouto! Umaru-chan OVA',
			'干物妹！うまるちゃん OVA'
		],
		[
			sDogaKobo
		],
		'OVA', 3, 2015, 'Manga', 0, 1,
		[
			tComedy,
			tOtakuCulture,
			tSchool,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'12/75086',
		[
			'Himouto! Umaru-chan',
			'干物妹！うまるちゃん'
		],
		[
			sDogaKobo
		],
		'TV', 2, 2015, 'Manga', 0, 1,
		[
			tComedy,
			tOtakuCulture,
			tSchool,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1854/121605',
		[
			'Isekai Quartet Movie: Another World',
			'劇場版 異世界かるてっと ～あなざーわーるど～'
		],
		[
			sStudioPuYUKAI
		],
		'Movie', 1, 2022, 'Original', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai,
			tParody,
			tFavoriteAnime
		]
	),
	new Anime(
		'1030/103383',
		[
			'Isekai Quartet 2',
			'異世界かるてっと2'
		],
		[
			sStudioPuYUKAI
		],
		'TV', 0, 2020, 'Original', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai,
			tParody,
			tFavoriteAnime
		]
	),
	new Anime(
		'1965/99667',
		[
			'Isekai Quartet',
			'異世界かるてっと'
		],
		[
			sStudioPuYUKAI
		],
		'TV', 1, 2019, 'Original', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai,
			tParody,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/84858',
		[
			'Hinako Note',
			'ひなこのーと'
		],
		[
			sPassione
		],
		'TV', 1, 2017, '4-koma	manga', 0, 1,
		[
			tComedy,
			tSliceOfLife,
			tCGDCT,
			tPerformingArts
		]
	),
	new Anime(
		'6/74156',
		[
			'Shigatsu wa Kimi no Uso: Moments',
			'四月は君の嘘 MOMENTS',
			'Your Lie in April: Moments'
		],
		[
			sA1Pictures
		],
		'OVA', 1, 2015, 'Manga', 0, 1,
		[
			tMusic,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/72831',
		[
			'Shigatsu wa Kimi no Uso',
			'四月は君の嘘',
			'Your Lie in April'
		],
		[
			sA1Pictures
		],
		'TV', 3, 2014, 'Manga', 0, 1,
		[
			tDrama,
			tRomance,
			tLovePolygon,
			tMusic,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/89690',
		[
			'Gabriel DropOut Specials',
			'ガヴリールドロップアウトOVA'
		],
		[
			sDogaKobo
		],
		'Special', 0, 2017, 'Manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tCGDCT,
			tMythology,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'9/82590',
		[
			'Gabriel DropOut',
			'ガヴリールドロップアウト'
		],
		[
			sDogaKobo
		],
		'TV', 0, 2017, 'Manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tCGDCT,
			tMythology,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'6/88286',
		[
			'Blend S',
			'ブレンド・S',
			'BLEND-S'
		],
		[
			sA1Pictures
		],
		'TV', 3, 2017, '4-koma manga', 0, 1,
		[
			tComedy,
			tOtakuCulture,
			tRomanticSubtext,
			tWorkplace,
			tFavoriteAnime
		]
	),
	new Anime(
		'1302/94882',
		[
			'Grand Blue',
			'ぐらんぶる',
			'Grand Blue Dreaming'
		],
		[
			sZeroG
		],
		'TV', 2, 2018, 'Manga', 0, 1,
		[
			tComedy,
			tAdultCast,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1755/98075',
		[
			'Kokoro Connect: Michi Random',
			'ココロコネクト ミチランダム',
			'Kokoro Connect OVA'
		],
		[
			sSILVERLINK
		],
		'Special', 3, 2012, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tSupernatural,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/39665',
		[
			'Kokoro Connect',
			'ココロコネクト'
		],
		[
			sSILVERLINK
		],
		'TV', 2, 2012, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tSupernatural,
			tLovePolygon,
			tFavoriteAnime
		]
	),
	new Anime(
		'4/77837',
		[
			'Shoujo-tachi wa Kouya wo Mezasu: Iubeki Monokashira',
			'少女たちは荒野を目指す 言うべきものかしら'
		],
		[
			sBarnumStudio,
			sProjectNo9
		],
		'OVA', 0, 2016, 'Visual novel', 0, 1,
		[
			tSchool,
			tOtakuCulture
		]
	),
	new Anime(
		'4/77837',
		[
			'Shoujo-tachi wa Kouya wo Mezasu',
			'少女たちは荒野を目指す',
			'Girls Beyond the Wasteland'
		],
		[
			sProjectNo9
		],
		'TV', 0, 2016, 'Visual novel', 0, 1,
		[
			tSchool,
			tOtakuCulture
		]
	),
	new Anime(
		'3/83000',
		[
			'Koi to Senkyo to Chocolate: Koi Imouto!',
			'恋と選挙とチョコレート 第13話「恋妹！」'
		],
		[
			sAICBuild
		],
		'Special', 0, 2013, 'Visual novel', 0, 1,
		[
			tDrama,
			tHarem,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'4/42015',
		[
			'Koi to Senkyo to Chocolate',
			'恋と選挙とチョコレート',
			'Love, Election and Chocolate'
		],
		[
			sAICBuild
		],
		'TV', 2, 2012, 'Visual novel', 0, 1,
		[
			tDrama,
			tHarem,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'5/56525',
		[
			'Machine-Doll wa Kizutsukanai Specials',
			'機巧少女は傷つかない',
			'Unbreakable Machine-Doll Special'
		],
		[
			sLerche
		],
		'Special', 3, 2013, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tEcchi,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'7/52801',
		[
			'Machine-Doll wa Kizutsukanai',
			'機巧少女〈マシンドール〉は傷つかない',
			'Unbreakable Machine-Doll'
		],
		[
			sLerche
		],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tEcchi,
			tSchool,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1464/112501',
		[
			'Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru OVA',
			'俺の脳内選択肢が、学園ラブコメを全力で邪魔している OAD',
			'My Mental Choices Are Completely Interfering With My School Romantic Comedy OVA'
		],
		[
			sDiomedéa
		],
		'OVA', 1, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tHarem,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'9/55831',
		[
			'Ore no Nounai Sentakushi ga, Gakuen Love Comedy wo Zenryoku de Jama Shiteiru',
			'俺の脳内選択肢が、学園ラブコメを全力で邪魔している',
			'My Mental Choices Are Completely Interfering With My School Romantic Comedy'
		],
		[
			sDiomedéa
		],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tHarem,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'12/74014',
		[
			'Nogizaka Haruka no Himitsu Finale ♪',
			'乃木坂春香の秘密 ふぃな～れ♪',
			"Haruka Nogizaka's Secret Finale"
		],
		[
			sDiomedéa
		],
		'OVA', 2, 2012, 'Light novel', 0, 1,
		[
			tComedy,
			tSchool
		]
	),
	new Anime(
		'10/74013',
		[
			'Nogizaka Haruka no Himitsu Purezza ♪',
			'乃木坂春香の秘密ぴゃあれっつぁ♪',
			"Haruka Nogizaka's Secret Purezza"
		],
		[
			sDiomedéa
		],
		'TV', 3, 2009, 'Light novel', 0, 1,
		[
			tComedy,
			tSchool
		]
	),
	new Anime(
		'11/56965',
		[
			'Nogizaka Haruka no Himitsu',
			'乃木坂春香の秘密',
			"Haruka Nogizaka's Secret"
		],
		[
			sDiomedéa
		],
		'TV', 2, 2008, 'Light novel', 0, 1,
		[
			tComedy,
			tSchool
		]
	),
	new Anime(
		'1756/104652',
		[
			'Toradora!: Bentou no Gokui',
			'とらドラ！ 弁当の極意',
			'Toradora!: Bento Battle'
		],
		[
			sJCStaff
		],
		'Special', 3, 2011, 'Light novel', 0, 1,
		[
			tComedy,
			tGourmet,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1242/123508',
		[
			'Toradora!: SOS! Kuishinbou Banbanzai',
			'とらドラ! SOS! 食いしん坊万々歳',
			'Toradora!: SOS! Hurray for Gourmands'
		],
		[
			sJCStaff
		],
		'Special', 0, 2009, 'Light novel', 0, 1,
		[
			tComedy,
			tGourmet,
			tFavoriteAnime
		]
	),
	new Anime(
		'13/22128',
		[
			'Toradora!',
			'とらドラ！'
		],
		[
			sJCStaff
		],
		'TV', 3, 2008, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tLovePolygon,
			tFavoriteAnime
		]
	),
	new Anime(
		'4/43643',
		[
			'Sakura-sou no Pet na Kanojo',
			'さくら荘のペットな彼女',
			'The Pet Girl of Sakurasou'
		],
		[
			sJCStaff
		],
		'TV', 3, 2012, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tVisualArts,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1934/128719',
		[
			'4-nin wa Sorezore Uso wo Tsuku',
			'４人はそれぞれウソをつく',
			'The Little Lies We All Tell'
		],
		[
			sStudioFlad
		],
		'TV', 3, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tSchool,
			tShounen,
			tSupernatural,
			tSuperPower,
			tGagHumor
		]
	),
	new Anime(
		'1423/122029',
		[
			'Shokei Shoujo no Virgin Road',
			'処刑少女の生きる道〈バージンロード〉',
			'The Executioner and Her Way of Life'
		],
		[
			sJCStaff
		],
		'TV', 1, 2022, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai
		]
	),
	new Anime(
		'3/84603',
		[
			'Mangaka-san to Assistant-san to The Animation Specials',
			'マンガ家さんとアシスタントさんと THE ANIMATION'
		],
		[
			sZexcs
		],
		'TV', 1, 2014, '4-koma manga', 0, 1,
		[
			tComedy,
			tEcchi,
			tHarem,
			tSeinen
		]
	),
	new Anime(
		'11/62219',
		[
			'Mangaka-san to Assistant-san to The Animation',
			'マンガ家さんとアシスタントさんと THE ANIMATION',
			'The Comic Artist and His Assistants'
		],
		[
			sZexcs
		],
		'TV', 1, 2014, '4-koma manga', 0, 1,
		[
			tComedy,
			tEcchi,
			tHarem,
			tSeinen
		]
	),
	new Anime(
		'1256/128714',
		[
			'Mushikaburi-hime',
			'虫かぶり姫',
			'Bibliophile Princess'
		],
		[
			sMadhouse
		],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			tDrama,
			tFantasy,
			tJosei,
			tRomance
		]
	),
	new Anime(
		'1614/90408',
		[
			'Darling in the FranXX',
			'ダーリン・イン・ザ・フランキス'
		],
		[
			sA1Pictures,
			sTrigger,
			sCloverWorks
		],
		'TV', 0, 2018, 'Original', 0, 1,
		[
			tAction,
			tDrama,
			tRomance,
			tSciFi,
			tMecha,
			tFavoriteAnime
		]
	),
	new Anime(
		'1208/120085',
		[
			'Strike the Blood Final',
			'ストライク・ザ・ブラッドFINAL'
		],
		[
			sConnect
		],
		'OVA', 0, 2022, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tSupernatural,
			tEcchi,
			tHarem,
			tVampire
		]
	),
	new Anime(
		'1692/116875',
		[
			'Strike the Blood IV',
			'ストライク・ザ・ブラッド IV'
		],
		[
			sConnect
		],
		'OVA', 1, 2020, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tSupernatural,
			tEcchi,
			tHarem,
			tVampire
		]
	),
	new Anime(
		'1918/103377',
		[
			'Strike the Blood: Kieta Seisou-hen',
			'ストライク・ザ・ブラッド 消えた聖槍篇'
		],
		[
			sConnect
		],
		'OVA', 0, 2020, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tSupernatural,
			tEcchi,
			tHarem,
			tVampire
		]
	),
	new Anime(
		'1768/111676',
		[
			'Strike the Blood III',
			'ストライク・ザ・ブラッドⅢ'
		],
		[
			sConnect
		],
		'OVA', 3, 2018, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tSupernatural,
			tEcchi,
			tHarem,
			tVampire
		]
	),
	new Anime(
		'1600/111675',
		[
			'Strike the Blood II',
			'ストライク・ザ・ブラッドⅡ',
			'Strike the Blood Second'
		],
		[
			sSILVERLINK,
			sConnect
		],
		'OVA', 3, 2016, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tSupernatural,
			tEcchi,
			tHarem,
			tVampire
		]
	),
	new Anime(
		'12/77275',
		[
			'Strike the Blood: Valkyria no Oukoku-hen',
			'ストライク・ザ・ブラッド　ヴァルキュリアの王国篇',
			'Strike the Blood: Kingdom of the Valkyria'
		],
		[
			sBarnumStudio,
			sSILVERLINK,
			sConnect
		],
		'TV', 3, 2015, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tSupernatural,
			tEcchi,
			tHarem,
			tVampire
		]
	),
	new Anime(
		'5/56163',
		[
			'Strike the Blood',
			'ストライク・ザ・ブラッド'
		],
		[
			sSILVERLINK,
			sConnect
		],
		'TV', 3, 2013, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tSupernatural,
			tEcchi,
			tHarem,
			tSchool,
			tVampire
		]
	),
	new Anime(
		'8/56413',
		[
			'Freezing Vibration Specials',
			'震えちゃう❤フリージング ヴァイブレーションOVA'
		],
		[
			sACGT
		],
		'Special', 3, 2013, 'Light novel', 2, 1,
		[
			tAction,
			tComedy,
			tSciFi,
			tEcchi,
			tHarem,
			tMilitary
		]
	),
	new Anime(
		'3/68195',
		[
			'Freezing Vibration',
			'フリージング ヴァイブレーション'
		],
		[
			sACGT
		],
		'TV', 3, 2013, 'Manga', 2, 1,
		[
			tAction,
			tDrama,
			tRomance,
			tSciFi,
			tEcchi,
			tHarem,
			tMilitary,
			tSuperPower,
			tSeinen
		]
	),
	new Anime(
		'2/28086',
		[
			'Freezing Specials',
			'はじけちゃう! ドキドキトラブルフリージング'
		],
		[
			sACGT
		],
		'Special', 0, 2011, 'Manga', 2, 1,
		[
			tAction,
			tComedy,
			tEcchi
		]
	),
	new Anime(
		'10/28535',
		[
			'Freezing',
			'フリージング'
		],
		[
			sACGT
		],
		'TV', 0, 2011, 'Manga', 2, 1,
		[
			tAction,
			tDrama,
			tRomance,
			tSciFi,
			tEcchi,
			tHarem,
			tMilitary,
			tSuperPower,
			tSeinen
		]
	),
	new Anime(
		'11/22525',
		[
			'Omamori Himari',
			'おまもりひまり'
		],
		[
			sZexcs
		],
		'TV', 0, 2010, 'Manga', 2, 1,
		[
			tAction,
			tComedy,
			tRomance,
			tSupernatural,
			tEcchi,
			tHarem,
			tMythology,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1271/90136',
		[
			'Koi wa Ameagari no You ni',
			'恋は雨上がりのように',
			'After the Rain'
		],
		[
			sWitStudio
		],
		'TV', 0, 2018, 'Manga', 0, 1,
		[
			tDrama,
			tRomance,
			tWorkplace,
			tSeinen
		]
	),
	new Anime(
		'5/76216',
		[
			'Yosuga no Sora: In Solitude, Where We Are Least Alone.',
			'ヨスガノソラ In solitude, where we are least alone.',
			'Yosuga no Sora'
		],
		[
			sFeel
		],
		'TV', 3, 2010, 'Visual novel', 2, 1,
		[
			tDrama,
			tRomance,
			tHarem,
			tErotica
		]
	),
	new Anime(
		'3/64911',
		[
			'Madan no Ou to Vanadis',
			'魔弾の王と戦姫 (ヴァナディース)',
			'Lord Marksman and Vanadis'
		],
		[
			sSatelight
		],
		'TV', 3, 2014, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tHarem,
			tMilitary
		]
	),
	new Anime(
		'7/71769',
		[
			'Seiken Tsukai no World Break',
			'聖剣使いの禁呪詠唱〈ワールドブレイク〉',
			'World Break: Aria of Curse for a Holy Swordsman'
		],
		[
			sDiomedéa
		],
		'TV', 0, 2015, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tHarem,
			tReincarnation,
			tSchool
		]
	),
	new Anime(
		'6/76211',
		[
			'Taimadou Gakuen 35 Shiken Shoutai',
			'対魔導学園35試験小隊',
			'AntiMagic Academy 35th Test Platoon'
		],
		[
			sSILVERLINK
		],
		'TV', 3, 2015, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tHarem,
			tMilitary
		]
	),
	new Anime(
		'12/76664',
		[
			'Saijaku Muhai no Bahamut',
			'最弱無敗の神装機竜《バハムート》',
			'Undefeated Bahamut Chronicle'
		],
		[
			sLerche
		],
		'TV', 0, 2016, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tMecha,
			tSchool
		]
	),
	new Anime(
		'1718/98214',
		[
			'Midara na Ao-chan wa Benkyou ga Dekinai',
			'淫らな青ちゃんは勉強ができない',
			"Ao-chan Can't Study!"
		],
		[
			sSILVERLINK
		],
		'TV', 1, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1849/95019',
		[
			'Conception',
			'CONCEPTION（コンセプション）'
		],
		[
			sGonzo
		],
		'TV', 3, 2018, 'Game', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tHarem,
			tIsekai,
			tParody
		]
	),
	new Anime(
		'1465/121561',
		[
			'Seiren',
			'セイレン'
		],
		[
			sStudioGokumi,
			sAXsiZ
		],
		'TV', 0, 2017, 'Original', 0, 1,
		[
			tRomance,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'10/88234',
		[
			'Just Because!'
		],
		[
			sPINEJAM
		],
		'TV', 3, 2017, 'Original', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tLovePolygon
		]
	),
	new Anime(
		'1471/93329',
		[
			'Devils Line: Anytime Anywhere',
			'デビルズライン エニタイム エニウェア'
		],
		[
			sPlatinumVision
		],
		'OVA', 2, 2018, 'Manga', 1, 1,
		[
			tAction,
			tDrama,
			tRomance,
			tSupernatural,
			tAdultCast,
			tVampire,
			tSeinen
		]
	),
	new Anime(
		'1053/98838',
		[
			'Devils Line',
			'デビルズライン',
			"Devils' Line"
		],
		[
			sPlatinumVision
		],
		'TV', 1, 2018, 'Manga', 1, 1,
		[
			tAction,
			tDrama,
			tRomance,
			tSupernatural,
			tAdultCast,
			tVampire,
			tSeinen
		]
	),
	new Anime(
		'6/21655',
		[
			'Ladies versus Butlers! Specials',
			'れでぃ×ばと!'
		],
		[
			sXebec
		],
		'Special', 0, 2010, 'Light novel', 2, 1,
		[
			tEcchi
		]
	),
	new Anime(
		'7/75252',
		[
			'Ladies versus Butlers!',
			'れでぃ×ばと!'
		],
		[
			sXebec
		],
		'TV', 0, 2010, 'Light novel', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'13/75662',
		[
			'Campione! Matsurowanu Kamigami to Kamigoroshi no Maou',
			'カンピオーネ！ ～まつろわぬ神々と神殺しの魔王～',
			'Campione!'
		],
		[
			sDiomedéa
		],
		'TV', 2, 2012, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tMythology
		]
	),
	new Anime(
		'7/62209',
		[
			'Maken-Ki! Two Specials',
			'マケン姫っ！通 Ｐ～私事'
		],
		[
			sXebec
		],
		'Special', 0, 2014, 'Manga', 2, 1,
		[
			tEcchi,
			tShounen
		]
	),
	new Anime(
		'10/58191',
		[
			'Maken-Ki! Two',
			'マケン姫っ！通'
		],
		[
			sXebec
		],
		'TV', 0, 2014, 'Manga', 2, 1,
		[
			tAction,
			tEcchi,
			tHarem,
			tMartialArts,
			tSchool,
			tSuperPower,
			tShounen
		]
	),
	new Anime(
		'7/36929',
		[
			'Maken-Ki! OVA',
			'マケン姫っ！ OVA'
		],
		[
			sAICSpirits
		],
		'OVA', 0, 2012, 'Manga', 2, 1,
		[
			tAction,
			tEcchi,
			tHarem,
			tMartialArts,
			tSchool,
			tSuperPower
		]
	),
	new Anime(
		'1832/121753',
		[
			'Maken-Ki! Specials',
			'マケン姫っ！ ドキドキッ！',
			'Maken-Ki! Secret Training'
		],
		[
			sAICSpirits
		],
		'Special', 3, 2011, 'Manga', 2, 1,
		[
			tSports,
			tEcchi,
			tShounen
		]
	),
	new Anime(
		'1215/123362',
		[
			'Maken-Ki!',
			'マケン姫っ！'
		],
		[
			sAICSpirits
		],
		'TV', 3, 2011, 'Manga', 2, 1,
		[
			tAction,
			tEcchi,
			tHarem,
			tMartialArts,
			tSchool,
			tSuperPower,
			tShounen
		]
	),
	new Anime(
		'4/43515',
		[
			'Kore wa Zombie desu ka? of the Dead: Hai, Minotake ni Attemasu',
			'これはゾンビですか? OF THE DEAD 「はい、身の丈に合ってます」',
			'Is This a Zombie? Of the Dead OVA'
		],
		[
			sStudioDeen
		],
		'OVA', 3, 2012, 'Light novel', 1, 1,
		[
			tAction,
			tComedy,
			tSupernatural,
			tEcchi,
			tHarem,
			tVampire
		]
	),
	new Anime(
		'4/37451',
		[
			'Kore wa Zombie desu ka? of the Dead',
			'これはゾンビですか? OF THE DEAD',
			'Is this A Zombie? of the Dead'
		],
		[
			sStudioDeen
		],
		'TV', 1, 2012, 'Light novel', 1, 1,
		[
			tAction,
			tComedy,
			tSupernatural,
			tEcchi,
			tHarem,
			tVampire
		]
	),
	new Anime(
		'2/38589',
		[
			'Kore wa Zombie desu ka? OVA',
			'これはゾンビですか? OVA',
			'Is This a Zombie? OVA'
		],
		[
			sStudioDeen
		],
		'OVA', 1, 2011, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tSupernatural,
			tEcchi,
			tHarem,
			tVampire
		]
	),
	new Anime(
		'13/75521',
		[
			'Kore wa Zombie desu ka?',
			'これはゾンビですか?',
			'Is This a Zombie?'
		],
		[
			sStudioDeen
		],
		'TV', 0, 2011, 'Light novel', 1, 1,
		[
			tAction,
			tComedy,
			tSupernatural,
			tEcchi,
			tHarem,
			tVampire
		]
	),
	new Anime(
		'9/62845',
		[
			'Seitokai no Ichizon Lv.2: Watasu Seitokai',
			'生徒会の一存 Lv.2 渡す生徒会'
		],
		[
			sAIC
		],
		'OVA', 2, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tHarem,
			tParody,
			tSchool
		]
	),
	new Anime(
		'13/75645',
		[
			'Seitokai no Ichizon Lv.2',
			'生徒会の一存 Lv.2',
			"Student Council's Discretion Level 2"
		],
		[
			sAIC
		],
		'ONA', 3, 2012, 'Light novel', 0, 1,
		[
			tComedy,
			tHarem,
			tParody,
			tSchool
		]
	),
	new Anime(
		'7/19646',
		[
			'Seitokai no Ichizon',
			'生徒会の一存',
			"Student Council's Discretion"
		],
		[
			sStudioDeen
		],
		'TV', 3, 2009, 'Light novel', 0, 1,
		[
			tComedy,
			tHarem,
			tParody,
			tSchool
		]
	),
	new Anime(
		'2/62655',
		[
			'Rokujouma no Shinryakusha!?',
			'六畳間の侵略者！？',
			'Invaders of the Rokujyoma!?'
		],
		[
			sSILVERLINK
		],
		'TV', 2, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tSupernatural,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'1660/121553',
		[
			'Kiss x Sis',
			'キスシス'
		],
		[
			sFeel
		],
		'TV', 1, 2010, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tErotica,
			tHarem,
			tSchool,
			tSeinen
		]
	),
	new Anime(
		'1323/108709',
		[
			'IS: Infinite Stratos 2 - Infinite Wedding',
			'IS〈インフィニット・ストラトス〉2 インフィニット・ウエディング'
		],
		[
			s8bit
		],
		'Special', 1, 2016, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem
		]
	),
	new Anime(
		'9/67545',
		[
			'IS: Infinite Stratos 2 - World Purge-hen',
			'IS〈インフィニット・ストラトス〉2　ワールド・パージ編'
		],
		[
			s8bit
		],
		'OVA', 3, 2014, 'Light novel', 2, 1,
		[
			tAction,
			tComedy,
			tSciFi,
			tEcchi,
			tHarem,
			tMecha
		]
	),
	new Anime(
		'7/56159',
		[
			'IS: Infinite Stratos 2 - Hitonatsu no Omoide',
			'IS 〈インフィニット・ストラトス〉2 ロングバケーション 一夏（ひとなつ）の想いで'
		],
		[
			s8bit
		],
		'OVA', 3, 2013, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tSciFi,
			tHarem,
			tMecha
		]
	),
	new Anime(
		'2/54925',
		[
			'IS: Infinite Stratos 2',
			'IS〈インフィニット・ストラトス〉2',
			'Infinite Stratos 2'
		],
		[
			s8bit
		],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tSciFi,
			tEcchi,
			tHarem,
			tMecha
		]
	),
	new Anime(
		'10/33627',
		[
			'IS: Infinite Stratos Encore - Koi ni Kogareru Rokujuusou',
			'IS 〈インフィニット・ストラトス〉 アンコール『恋に焦がれる六重奏』'
		],
		[
			s8bit
		],
		'OVA', 3, 2011, 'Light novel', 2, 1,
		[
			tAction,
			tComedy,
			tSciFi,
			tEcchi,
			tHarem,
			tMecha
		]
	),
	new Anime(
		'3/74045',
		[
			'IS: Infinite Stratos',
			'IS 〈インフィニット・ストラトス〉',
			'Infinite Stratos'
		],
		[
			s8bit
		],
		'TV', 0, 2011, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tSciFi,
			tEcchi,
			tHarem,
			tMecha
		]
	),
	new Anime(
		'1311/120270',
		[
			'Heroine Tarumono! Kiraware Heroine to Naisho no Oshigoto',
			'ヒロインたるもの！〜嫌われヒロインと内緒のお仕事〜',
			'Heroines Run the Show: The Unpopular Girl and the Secret Task'
		],
		[
			sLayduce
		],
		'TV', 1, 2022, 'Music', 0, 1,
		[
			tIdol,
			tSchool
		]
	),
	new Anime(
		'1185/117548',
		[
			'Ganbare Douki-chan: Kakusa Shakai ni Nayamu Kaisha no Douki',
			'がんばれ同期ちゃん 格差社会に悩む会社の同期',
			'Ganbare Douki-chan: The Coworker is Suffering from Social Inequality'
		],
		[
			sAtelierPontdarc
		],
		'Special', 3, 2021, 'Web manga', 0, 1,
		[
			tComedy,
			tEcchi,
			tAdultCast,
			tRomanticSubtext,
			tWorkplace
		]
	),
	new Anime(
		'1185/117548',
		[
			'Ganbare Douki-chan',
			'がんばれ同期ちゃん'
		],
		[
			sAtelierPontdarc
		],
		'ONA', 2, 2021, 'Web manga', 0, 1,
		[
			tComedy,
			tEcchi,
			tAdultCast,
			tRomanticSubtext,
			tWorkplace
		]
	),
	new Anime(
		'1485/119329',
		[
			'Koroshi Ai',
			'殺し愛',
			'Love of Kill'
		],
		[
			sPlatinumVision
		],
		'TV', 0, 2022, 'Manga', 1, 1,
		[
			tAction,
			tRomance,
			tAdultCast,
			tOrganizedCrime,
			tJosei
		]
	),
	new Anime(
		'4/86243',
		[
			'Konbini Kareshi',
			'コンビニカレシ',
			'Convenience Store Boy Friends'
		],
		[
			sPierrot
		],
		'TV', 2, 2017, 'Mixed media', 0, 1,
		[
			tRomance
		]
	),
	new Anime(
		'1399/131410',
		[
			'Angel Beats! Another Epilogue',
			'エンジェルビーツ! アナザーエピローグ'
		],
		[
			sPAWorks
		],
		'Special', 3, 2010, 'Original', 0, 1,
		[
			tSupernatural,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'4/25073',
		[
			'Angel Beats! Specials',
			'エンジェルビーツ'
		],
		[
			sPAWorks
		],
		'Special', 3, 2010, 'Original', 0, 1,
		[
			tComedy,
			tSupernatural,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'10/22061',
		[
			'Angel Beats!',
			'Angel Beats!（エンジェルビーツ!）'
		],
		[
			sPAWorks
		],
		'TV', 1, 2010, 'Original', 0, 1,
		[
			tDrama,
			tSupernatural,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/75559',
		[
			'Zero no Tsukaima F',
			'ゼロの使い魔F',
			'The Familiar of Zero F'
		],
		[
			sJCStaff
		],
		'TV', 0, 2012, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tIsekai,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'6/12370',
		[
			'Zero no Tsukaima: Princesses no Rondo - Yuuwaku no Sunahama',
			'ゼロの使い魔 ～三美姫（プリンセッセ）の輪舞（ロンド）～ 誘惑の砂浜',
			'The Familiar of Zero: Rondo of the Princesses OVA'
		],
		[
			sJCStaff
		],
		'Special', 3, 2008, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tEcchi,
			tHarem,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'6/10256',
		[
			'Zero no Tsukaima: Princesses no Rondo',
			'ゼロの使い魔 ～三美姫（プリンセッセ）の輪舞（ロンド）～',
			'The Familiar of Zero: Rondo of Princesses'
		],
		[
			sJCStaff
		],
		'TV', 2, 2008, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tIsekai,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/22740',
		[
			'Zero no Tsukaima: Futatsuki no Kishi',
			'ゼロの使い魔 ～双月の騎士～',
			'The Familiar of Zero: Knight of the Twin Moons'
		],
		[
			sJCStaff
		],
		'TV', 2, 2007, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tIsekai,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/20680',
		[
			'Zero no Tsukaima',
			'ゼロの使い魔',
			'The Familiar of Zero'
		],
		[
			sJCStaff
		],
		'TV', 2, 2006, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tIsekai,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'4/72750',
		[
			'Plastic Memories',
			'プラスティック・メモリーズ'
		],
		[
			sDogaKobo
		],
		'TV', 1, 2015, 'Original', 0, 1,
		[
			tDrama,
			tRomance,
			tSciFi,
			tFavoriteAnime
		]
	),
	new Anime(
		'1730/108516',
		[
			'Grisaia: Phantom Trigger The Animation - Stargazer',
			'グリザイア：ファントムトリガー THE ANIMATION スターゲイザー'
		],
		[
			sBiburyAnimationStudios
		],
		'Movie', 3, 2020, 'Visual novel', 1, 1,
		[
			tAction,
			tSchool
		]
	),
	new Anime(
		'1298/106867',
		[
			'Grisaia: Phantom Trigger The Animation',
			'グリザイア：ファントムトリガー THE ANIMATION'
		],
		[
			sBiburyAnimationStudios
		],
		'Movie', 0, 2019, 'Visual novel', 1, 1,
		[
			tAction,
			tSchool
		]
	),
	new Anime(
		'2/75328',
		[
			'Grisaia no Meikyuu: Caprice no Mayu 0 - Takizono Basketball Club no Nama Cream Party!',
			'グリザイアの迷宮 カプリスの繭0 姫&バスケ部編「滝園バスケ部の生クリームパーティ! 」'
		],
		[
			s8bit
		],
		'Special', 2, 2015, 'Visual novel', 2, 1,
		[
			tEcchi
		]
	),
	new Anime(
		'8/72855',
		[
			'Grisaia no Rakuen',
			'グリザイアの楽園',
			'The Eden of Grisaia'
		],
		[
			s8bit
		],
		'TV', 1, 2015, 'Visual novel', 1, 1,
		[
			tDrama,
			tRomance,
			tHarem,
			tPsychological
		]
	),
	new Anime(
		'1278/112633',
		[
			'Grisaia no Meikyuu: Caprice no Mayu 0',
			'グリザイアの迷宮 カプリスの繭0',
			'The Labyrinth of Grisaia: The Cocoon of Caprice 0'
		],
		[
			s8bit
		],
		'Special', 1, 2015, 'Visual novel', 2, 1,
		[
			tDrama
		]
	),
	new Anime(
		'7/74609',
		[
			'Grisaia no Kajitsu Specials',
			'グリザイアの果実'
		],
		[
			s8bit
		],
		'Special', 3, 2014, 'Visual novel', 2, 1,
		[
			tEcchi
		]
	),
	new Anime(
		'1645/112632',
		[
			'Grisaia no Kajitsu',
			'グリザイアの果実',
			'The Fruit of Grisaia'
		],
		[
			s8bit
		],
		'TV', 3, 2014, 'Visual novel', 2, 1,
		[
			tDrama,
			tRomance,
			tHarem,
			tPsychological,
			tSchool
		]
	),
	new Anime(
		'12/89979',
		[
			'Ryuuou no Oshigoto!',
			'りゅうおうのおしごと！',
			"The Ryuo's Work is Never Done!"
		],
		[
			sProjectNo9
		],
		'TV', 0, 2018, 'Light novel', 0, 1,
		[
			tComedy,
			tStrategyGame
		]
	),
	new Anime(
		'3/78858',
		[
			'Hundred',
			'ハンドレッド'
		],
		[
			sProductionIMS
		],
		'TV', 1, 2016, 'Light novel', 0, 1,
		[
			tAction,
			tRomance,
			tSciFi,
			tEcchi,
			tHarem,
			tMecha,
			tSchool
		]
	),
	new Anime(
		'6/88307',
		[
			'Tsuki ga Kirei Special',
			'月がきれい'
		],
		[
			sFeel
		],
		'Special', 2, 2017, 'Original', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'2/85592',
		[
			'Tsuki ga Kirei',
			'月がきれい'
		],
		[
			sFeel
		],
		'TV', 1, 2017, 'Original', 0, 1,
		[
			tRomance,
			tSchool
		]
	),
	new Anime(
		'1356/93469',
		[
			'Meiji Tokyo Renka',
			'明治東亰恋伽'
		],
		[
			sTMSEntertainment
		],
		'TV', 0, 2019, 'Visual novel', 0, 1,
		[
			tRomance,
			tSupernatural,
			tHistorical,
			tHarem,
			tTimeTravel,
			tJosei
		]
	),
	new Anime(
		'8/83735',
		[
			'Fuuka',
			'風夏'
		],
		[
			sDiomedéa
		],
		'TV', 0, 2017, 'Manga', 2, 1,
		[
			tDrama,
			tRomance,
			tEcchi,
			tMusic,
			tSchool,
			tShounen,
			tLovePolygon
		]
	),
	new Anime(
		'1424/93855',
		[
			'Irozuku Sekai no Ashita kara',
			'色づく世界の明日から',
			'Iroduku: The World in Colors'
		],
		[
			sPAWorks
		],
		'TV', 3, 2018, 'Original', 0, 1,
		[
			tDrama,
			tFantasy,
			tRomance,
			tSchool,
			tTimeTravel,
			tLovePolygon,
			tVisualArts,
			tFavoriteAnime
		]
	),
	new Anime(
		'1566/91061',
		[
			'ReLIFE: Kanketsu-hen',
			'ReLIFE 完結編',
			'ReLIFE: Final Arc'
		],
		[
			sTMSEntertainment
		],
		'Special', 0, 2018, 'Web manga', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/82149',
		[
			'ReLIFE'
		],
		[
			sTMSEntertainment
		],
		'TV', 2, 2016, 'Web manga', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1122/96012',
		[
			'Nil Admirari no Tenbin',
			'ニル・アドミラリの天秤',
			'Libra of Nil Admirari'
		],
		[
			sZeroG
		],
		'TV', 1, 2018, 'Visual novel', 0, 1,
		[
			tFantasy,
			tRomance,
			tHistorical,
			tHarem,
			tJosei
		]
	),
	new Anime(
		'4/85260',
		[
			'Shuumatsu Nani Shitemasu ka? Isogashii desu ka? Sukutte Moratte Ii desu ka?',
			'終末なにしてますか？忙しいですか？救ってもらっていいですか？',
			'WorldEnd: What do you do at the end of the world? Are you busy? Will you save us?'
		],
		[
			sSatelight,
			sC2C
		],
		'TV', 1, 2017, 'Light novel', 0, 1,
		[
			tDrama,
			tFantasy,
			tRomance,
			tSciFi,
			tFavoriteAnime
		]
	),
	new Anime(
		'1560/99904',
		[
			'High Score Girl II',
			'ハイスコアガール II',
			'Hi Score Girl II'
		],
		[
			sJCStaff
		],
		'TV', 3, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tLovePolygon,
			tRomanticSubtext,
			tSchool,
			tVideoGame,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1057/111384',
		[
			'High Score Girl: Extra Stage',
			'ハイスコアガール EXTRA STAGE',
			'Hi Score Girl: Extra Stage'
		],
		[
			sJCStaff
		],
		'OVA', 0, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tLovePolygon,
			tRomanticSubtext,
			tSchool,
			tVideoGame,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1668/91345',
		[
			'High Score Girl',
			'ハイスコアガール',
			'Hi Score Girl'
		],
		[
			sJCStaff
		],
		'TV', 2, 2018, 'Manga', 0, 1,
		[
			tComedy,
			tLovePolygon,
			tRomanticSubtext,
			tSchool,
			tVideoGame,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1745/93307',
		[
			'Beatless Final Stage',
			'BEATLESS Final Stage'
		],
		[
			sDiomedéa
		],
		'TV', 2, 2018, 'Light novel', 0, 1,
		[
			tAction,
			tDrama,
			tRomance,
			tSciFi,
			tFavoriteAnime
		]
	),
	new Anime(
		'1986/90184',
		[
			'Beatless',
			'BEATLESS'
		],
		[
			sDiomedéa
		],
		'TV', 0, 2018, 'Light novel', 0, 1,
		[
			tAction,
			tDrama,
			tRomance,
			tSciFi,
			tFavoriteAnime
		]
	),
	new Anime(
		'11/69085',
		[
			'Juuou Mujin no Fafnir',
			'銃皇無尽のファフニール',
			'Unlimited Fafnir'
		],
		[
			sDiomedéa
		],
		'TV', 0, 2015, 'Light novel', 0, 1,
		[
			tFantasy,
			tRomance,
			tHarem,
			tSchool,
			tAction
		]
	),
	new Anime(
		'1395/95778',
		[
			'Shinmai Maou no Testament Departures',
			'新妹魔王の契約者 DEPARTURES',
			'The Testament of Sister New Devil Departures'
		],
		[
			sProductionIMS
		],
		'OVA', 0, 2018, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tMythology
		]
	),
	new Anime(
		'1151/94750',
		[
			'Shinmai Maou no Testament Burst',
			'新妹魔王の契約者 BURST',
			'The Testament of Sister New Devil: Burst'
		],
		[
			sProductionIMS
		],
		'TV', 3, 2015, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tMythology
		]
	),
	new Anime(
		'12/69911',
		[
			'Shinmai Maou no Testament: Toujou Basara no Hard Sweet na Nichijou',
			'新妹魔王の契約者〈テスタメント〉 第13話「東城刃更のハードスウィートな日常」',
			'The Testament of Sister New Devil OVA'
		],
		[
			sProductionIMS
		],
		'OVA', 1, 2015, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tMythology
		]
	),
	new Anime(
		'1815/109046',
		[
			'Shinmai Maou no Testament Specials',
			'新妹魔王の契約者〈テスタメント〉',
			'The Testament of Sister New Devil Specials'
		],
		[
			sProductionIMS
		],
		'Special', 0, 2015, 'Light novel', 2, 1,
		[
			tComedy,
			tFantasy,
			tEcchi,
			tMythology
		]
	),
	new Anime(
		'1654/112033',
		[
			'Shinmai Maou no Testament',
			'新妹魔王の契約者〈テスタメント〉',
			'The Testament of Sister New Devil'
		],
		[
			sProductionIMS
		],
		'TV', 0, 2015, 'Light novel', 2, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tMythology
		]
	),
	new Anime(
		'1446/91841',
		[
			'Tada-kun wa Koi wo Shinai',
			'多田くんは恋をしない',
			'Tada Never Falls in Love'
		],
		[
			sDogaKobo
		],
		'TV', 1, 2018, 'Original', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tVisualArts
		]
	),
	new Anime(
		'1342/122261',
		[
			'Koi to Uso: Isshou no Koi/Koi no Kimochi',
			'恋と嘘 一生の恋 / 恋の気持ち',
			'Love and Lies: Love of a Lifetime/Feelings of Love'
		],
		[
			sLIDENFILMS
		],
		'OVA', 3, 2018, 'Web manga', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'5/86663',
		[
			'Koi to Uso',
			'恋と嘘',
			'Love and Lies'
		],
		[
			sLIDENFILMS
		],
		'TV', 2, 2017, 'Web manga', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tLovePolygon
		]
	),
	new Anime(
		'9/76493',
		[
			'Rakudai Kishi no Cavalry',
			'落第騎士の英雄譚《キャバルリィ》',
			'Chivalry of a Failed Knight'
		],
		[
			sSILVERLINK,
			sNexus
		],
		'TV', 3, 2015, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tEcchi,
			tSchool
		]
	),
	new Anime(
		'1284/106945',
		[
			'Arte',
			'アルテ'
		],
		[
			sSevenArcs
		],
		'TV', 1, 2020, 'Manga', 0, 1,
		[
			tDrama,
			tHistorical,
			tSeinen,
			tVisualArts
		]
	),
	new Anime(
		'1919/107275',
		[
			'Yesterday wo Utatte: Haishin-ban Episode',
			'イエスタデイをうたって 配信版エピソード'
		],
		[
			sDogaKobo
		],
		'ONA', 1, 2020, 'Manga', 0, 1,
		[
			tDrama,
			tRomance,
			tSeinen
		]
	),
	new Anime(
		'1553/107721',
		[
			'Yesterday wo Utatte',
			'イエスタデイをうたって',
			'Sing "Yesterday" for Me'
		],
		[
			sDogaKobo
		],
		'TV', 1, 2020, 'Manga', 0, 1,
		[
			tDrama,
			tRomance,
			tSeinen,
			tAdultCast,
			tLovePolygon
		]
	),
	new Anime(
		'1874/111374',
		[
			'Ueno-san wa Bukiyou',
			'上野さんは不器用',
			'How clumsy you are, Miss Ueno'
		],
		[
			sLesprit
		],
		'TV', 0, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tSchool,
			tSeinen
		]
	),
	new Anime(
		'1186/108864',
		[
			'Josee to Tora to Sakana-tachi',
			'ジョゼと虎と魚たち',
			'Josee, the Tiger and the Fish'
		],
		[
			sBones
		],
		'Movie', 3, 2020, 'Novel', 0, 1,
		[
			tDrama,
			tRomance,
			tAdultCast,
			tVisualArts
		]
	),
	new Anime(
		'1021/95670',
		[
			'Domestic na Kanojo',
			'ドメスティックな彼女',
			'Domestic Girlfriend'
		],
		[
			sDiomedéa
		],
		'TV', 0, 2019, 'Manga', 2, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tShounen,
			tLovePolygon
		]
	),
	new Anime(
		'1506/120097',
		[
			'Fruits Basket: Prelude',
			'フルーツバスケット -prelude-'
		],
		[
			sTMSEntertainment
		],
		'TV', 0, 2022, 'Manga', 0, 1,
		[
			tDrama,
			tRomance,
			tShoujo
		]
	),
	new Anime(
		'1085/114792',
		[
			'Fruits Basket: The Final',
			'フルーツバスケット The Final',
			'Fruits Basket: The Final Season'
		],
		[
			sTMSEntertainment
		],
		'TV', 1, 2021, 'Manga', 0, 1,
		[
			tDrama,
			tRomance,
			tSupernatural,
			tShoujo
		]
	),
	new Anime(
		'1972/111635',
		[
			'Fruits Basket 2nd Season',
			'フルーツバスケット 2nd season'
		],
		[
			sTMSEntertainment
		],
		'TV', 1, 2020, 'Manga', 0, 1,
		[
			tDrama,
			tRomance,
			tSupernatural,
			tSchool,
			tShoujo
		]
	),
	new Anime(
		'1447/99827',
		[
			'Fruits Basket 1st Season',
			'フルーツバスケット'
		],
		[
			sTMSEntertainment
		],
		'TV', 1, 2019, 'Manga', 0, 1,
		[
			tDrama,
			tRomance,
			tSupernatural,
			tSchool,
			tShoujo,
			tLovePolygon
		]
	),
	new Anime(
		'1237/113435',
		[
			'3D Kanojo: Real Girl 2nd Season',
			'3D彼女 リアルガール第2シーズン',
			'Real Girl Season 2'
		],
		[
			sHoodsEntertainment
		],
		'TV', 0, 2019, 'Manga', 0, 1,
		[
			tRomance,
			tSchool,
			tShoujo,
			tOtakuCulture
		]
	),
	new Anime(
		'1327/93616',
		[
			'3D Kanojo: Real Girl',
			'３Ｄ彼女　リアルガール',
			'Real Girl'
		],
		[
			sHoodsEntertainment
		],
		'TV', 1, 2018, 'Manga', 0, 1,
		[
			tRomance,
			tSchool,
			tShoujo,
			tOtakuCulture
		]
	),
	new Anime(
		'9/67077',
		[
			'D-Frag!*',
			'ディーふらぐ! ウォーター!!'
		],
		[
			sBrainsBase
		],
		'OVA', 2, 2014, 'Manga', 0, 1,
		[
			tComedy,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1662/112108',
		[
			'D-Frag!',
			'ディーふらぐ！'
		],
		[
			sBrainsBase
		],
		'TV', 0, 2014, 'Manga', 0, 1,
		[
			tComedy,
			tSchool,
			tStrategyGame,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1892/111383',
		[
			'Wotaku ni Koi wa Muzukashii OVA',
			'ヲタクに恋は難しい OAD',
			'Wotakoi: Love is Hard for Otaku OVA'
		],
		[
			sA1Pictures,
			sLapinTrack
		],
		'OVA', 0, 2019, 'Web manga', 0, 1,
		[
			tRomance,
			tWorkplace,
			tOtakuCulture,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'1864/93518',
		[
			'Wotaku ni Koi wa Muzukashii',
			'ヲタクに恋は難しい',
			'Wotakoi: Love is Hard for Otaku'
		],
		[
			sA1Pictures
		],
		'TV', 1, 2018, 'Web manga', 0, 1,
		[
			tRomance,
			tWorkplace,
			tOtakuCulture,
			tAdultCast,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1519/110527',
		[
			'Koi to Yobu ni wa Kimochi Warui',
			'恋と呼ぶには気持ち悪い',
			'Koikimo'
		],
		[
			sNomad
		],
		'TV', 1, 2021, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'1490/126919',
		[
			'Isekai Meikyuu de Harem wo',
			'異世界迷宮でハーレムを',
			'Harem in the Labyrinth of Another World'
		],
		[
			sPassione
		],
		'TV', 2, 2022, 'Light novel', 2, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tRomance,
			tErotica,
			tHarem,
			tIsekai
		]
	),
	new Anime(
		'1274/133807',
		[
			'Tokyo Mew Mew New ♡ 2nd Season',
			'東京ミュウミュウ にゅ～♡'
		],
		[
			sYumetaCompany,
			sGraphinica
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tFantasy,
			tRomance,
			tSciFi,
			tShoujo,
			tMahouShoujo
		]
	),
	new Anime(
		'1001/116687',
		[
			'Tokyo Mew Mew New ♡',
			'東京ミュウミュウ にゅ～♡',
			'Tokyo Mew Mew New'
		],
		[
			sYumetaCompany,
			sGraphinica
		],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			tFantasy,
			tRomance,
			tSciFi,
			tShoujo,
			tMahouShoujo
		]
	),
	new Anime(
		'1077/136855',
		[
			'Seijo no Maryoku wa Bannou desu Season 2',
			'聖女の魔力は万能です Season2',
			"The Saint's Magic Power is Omnipotent Season 2"
		],
		[
			sDiomedéa
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tFantasy,
			tRomance,
			tIsekai,
			tMedical,
			tFavoriteAnime
		]
	),
	new Anime(
		'1947/114235',
		[
			'Seijo no Maryoku wa Bannou desu',
			'聖女の魔力は万能です',
			"The Saint's Magic Power is Omnipotent"
		],
		[
			sDiomedéa
		],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			tFantasy,
			tRomance,
			tIsekai,
			tMedical,
			tFavoriteAnime
		]
	),
	new Anime(
		'1055/118890',
		[
			'Senpai ga Uzai Kouhai no Hanashi',
			'先輩がうざい後輩の話',
			'My Senpai is Annoying'
		],
		[
			sDogaKobo
		],
		'TV', 3, 2021, 'Web manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tWorkplace,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'1179/119897',
		[
			'Sono Bisque Doll wa Koi wo Suru',
			'その着せ替え人形は恋をする',
			'My Dress-Up Darling'
		],
		[
			sCloverWorks
		],
		'TV', 0, 2022, 'Manga', 0, 1,
		[
			tRomance,
			tSchool,
			tSeinen,
			tOtakuCulture,
			tFavoriteAnime
		]
	),
	new Anime(
		'1539/128058',
		[
			'Uzaki-chan wa Asobitai! Double',
			'宇崎ちゃんは遊びたい！ω（だぶる）',
			'Uzaki-chan Wants to Hang Out! Season 2'
		],
		[
			sENGI
		],
		'TV', 3, 2022, 'Web manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tAdultCast
		]
	),
	new Anime(
		'1540/108292',
		[
			'Uzaki-chan wa Asobitai!',
			'宇崎ちゃんは遊びたい！',
			'Uzaki-chan Wants to Hang Out!'
		],
		[
			sENGI
		],
		'TV', 2, 2020, 'Web manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tAdultCast
		]
	),
	new Anime(
		'13/68705',
		[
			'Denki-gai no Honya-san',
			'デンキ街の本屋さん',
			'Denki-gai'
		],
		[
			sShinEiAnimation
		],
		'TV', 3, 2014, 'Manga', 0, 1,
		[
			tComedy,
			tWorkplace,
			tSeinen,
			tOtakuCulture
		]
	),
	new Anime(
		'2/86786',
		[
			'No Game No Life: Zero',
			'ノーゲーム・ノーライフ ゼロ'
		],
		[
			sMadhouse
		],
		'Movie', 2, 2017, 'Light novel', 0, 1,
		[
			tDrama,
			tFantasy,
			tRomance,
			tIsekai
		]
	),
	new Anime(
		'7/71783',
		[
			'No Game No Life Specials',
			'ノーゲーム・ノーライフ ミニ'
		],
		[
			sMadhouse
		],
		'Special', 1, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tEcchi,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1074/111944',
		[
			'No Game No Life',
			'ノーゲーム・ノーライフ',
			'No Game, No Life'
		],
		[
			sMadhouse
		],
		'TV', 1, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tEcchi,
			tIsekai,
			tStrategyGame,
			tFavoriteAnime
		]
	),
	new Anime(
		'9/72614',
		[
			"Kyoukai no Kanata Movie 2: I'll Be Here - Mirai-hen",
			"劇場版 境界の彼方 I'LL BE HERE 未来篇",
			"Beyond the Boundary: I'll Be Here - Future"
		],
		[
			sKyotoAnimation
		],
		'Movie', 1, 2015, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'6/73298',
		[
			"Kyoukai no Kanata Movie 1: I'll Be Here - Kako-hen",
			"劇場版 境界の彼方 I'LL BE HERE 過去篇",
			"Beyond the Boundary: I'll Be Here - Past"
		],
		[
			sKyotoAnimation
		],
		'Movie', 0, 2015, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/63205',
		[
			'Kyoukai no Kanata: Shinonome',
			'境界の彼方 ＃0「東雲」',
			'Beyond the Boundary: Daybreak'
		],
		[
			sKyotoAnimation
		],
		'Special', 2, 2014, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'10/72218',
		[
			'Kyoukai no Kanata: Mini Gekijou',
			'境界の彼方 ミニ劇場'
		],
		[
			sKyotoAnimation
		],
		'Special', 0, 2014, 'Light novel', 0, 1,
		[
			tSliceOfLife,
			tSupernatural,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/85468',
		[
			'Kyoukai no Kanata',
			'境界の彼方',
			'Beyond the Boundary'
		],
		[
			sKyotoAnimation
		],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'9/69517',
		[
			'Ao Haru Ride OVA',
			'アオハライド OAD',
			'Blue Spring Ride OVA'
		],
		[
			sProductionIG
		],
		'OVA', 2, 2014, 'Manga', 0, 1,
		[
			tRomance,
			tSchool,
			tShoujo,
			tLovePolygon
		]
	),
	new Anime(
		'8/64813',
		[
			'Ao Haru Ride',
			'アオハライド',
			'Blue Spring Ride'
		],
		[
			sProductionIG
		],
		'TV', 2, 2014, 'Manga', 0, 1,
		[
			tRomance,
			tSchool,
			tShoujo,
			tLovePolygon
		]
	),
	new Anime(
		'4/68839',
		[
			'Absolute Duo',
			'アブソリュート・デュオ'
		],
		[
			s8bit
		],
		'TV', 0, 2015, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'1376/123398',
		[
			'Karakai Jouzu no Takagi-san Movie',
			'からかい上手の高木さん',
			'Teasing Master Takagi-san: The Movie'
		],
		[
			sShinEiAnimation
		],
		'Movie', 1, 2022, 'Manga', 0, 1,
		[
			tRomanticSubtext,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1861/120361',
		[
			'Karakai Jouzu no Takagi-san 3',
			'からかい上手の高木さん3',
			'Teasing Master Takagi-san 3'
		],
		[
			sShinEiAnimation
		],
		'TV', 0, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1393/107033',
		[
			'Karakai Jouzu no Takagi-san 2',
			'からかい上手の高木さん2',
			'Teasing Master Takagi-san 2'
		],
		[
			sShinEiAnimation
		],
		'TV', 2, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1128/99821',
		[
			'Karakai Jouzu no Takagi-san: Water Slide',
			'からかい上手の高木さん ウォータースライダー',
			'Teasing Master Takagi-san: Water Slide'
		],
		[
			sShinEiAnimation
		],
		'OVA', 2, 2018, 'Manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1591/95091',
		[
			'Karakai Jouzu no Takagi-san',
			'からかい上手の高木さん',
			'Teasing Master Takagi-san'
		],
		[
			sShinEiAnimation
		],
		'TV', 0, 2018, 'Manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'4/73475',
		[
			'Denpa Kyoushi',
			'電波教師',
			'Ultimate Otaku Teacher'
		],
		[
			sA1Pictures
		],
		'TV', 1, 2015, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tShounen,
			tOtakuCulture,
			tFavoriteAnime
		]
	),
	new Anime(
		'7/73735',
		[
			'Haiyore! Nyaruko-san F',
			'這いよれ！ニャル子さんF'
		],
		[
			sXebec
		],
		'OVA', 1, 2015, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSciFi,
			tParody
		]
	),
	new Anime(
		'4/61789',
		[
			'Haiyore! Nyaruko-san W: W ni Sayonara/Kono Onsen ni Koi no Konton wo',
			'這いよれ！ニャル子さん W Wにさよなら / この温泉に恋の渾沌を'
		],
		[
			sXebec
		],
		'OVA', 1, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tEcchi,
			tParody
		]
	),
	new Anime(
		'10/47533',
		[
			'Haiyore! Nyaruko-san W',
			'這いよれ！ニャル子さん W',
			'Nyaruko: Crawling With Love! Second Season'
		],
		[
			sXebec
		],
		'TV', 1, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tSciFi,
			tParody,
			tFavoriteEDSong
		]
	),
	new Anime(
		'6/49081',
		[
			'Haiyore! Nyaruko-san',
			'這いよれ！ニャル子さん',
			'Nyaruko: Crawling With Love!'
		],
		[
			sXebec
		],
		'TV', 1, 2012, 'Light novel', 0, 1,
		[
			tComedy,
			tSciFi,
			tParody
		]
	),
	new Anime(
		'13/85289',
		[
			'Kyoukai no Rinne 3rd Season',
			'境界のRINNE',
			'RIN-NE Season 3'
		],
		[
			sBrainsBase
		],
		'TV', 1, 2017, 'Manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'7/79665',
		[
			'Kyoukai no Rinne 2nd Season',
			'境界のRINNE',
			'RIN-NE Season 2'
		],
		[
			sBrainsBase
		],
		'TV', 1, 2016, 'Manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'13/73436',
		[
			'Kyoukai no Rinne',
			'境界のRINNE',
			'RIN-NE'
		],
		[
			sBrainsBase
		],
		'TV', 1, 2015, 'Manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'8/67047',
		[
			'Inou-Battle wa Nichijou-kei no Naka de',
			'異能バトルは日常系のなかで',
			'When Supernatural Battles Became Commonplace'
		],
		[
			sTrigger
		],
		'TV', 3, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tSupernatural,
			tHarem,
			tSchool,
			tSuperPower
		]
	),
	new Anime(
		'3/84417',
		[
			'Hajimete no Gal: Hajimete no Bunkasai',
			'はじめてのギャル はじめての文化祭',
			'My First Girlfriend is a Gal: My First Cultural Festival'
		],
		[
			sNAZ
		],
		'OVA', 3, 2017, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'9/86826',
		[
			'Hajimete no Gal',
			'はじめてのギャル',
			'My First Girlfriend is a Gal'
		],
		[
			sNAZ
		],
		'TV', 2, 2017, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1015/123541',
		[
			'Itsudatte Bokura no Koi wa 10 cm Datta.',
			'いつだって僕らの恋は10センチだった。',
			'Our love has always been 10 centimeters apart'
		],
		[
			sLayduce
		],
		'TV', 3, 2017, 'Music', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tVisualArts
		]
	),
	new Anime(
		'12/87065',
		[
			'Suki ni Naru Sono Shunkan wo. Kokuhaku Jikkou Iinkai',
			'好きになるその瞬間を。～告白実行委員会～',
			'The Moment You Fall in Love'
		],
		[
			sQualiaAnimation
		],
		'Movie', 3, 2016, 'Music', 0, 1,
		[
			tComedy,
			tDrama,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'3/82121',
		[
			'Zutto Mae kara Suki deshita. Kokuhaku Jikkou Iinkai',
			'ずっと前から好きでした。～告白実行委員会～',
			"I've Always Liked You"
		],
		[
			sQualiaAnimation
		],
		'Movie', 1, 2016, 'Music', 0, 1,
		[
			tRomance,
			tSchool
		]
	),
	new Anime(
		'1902/129579',
		[
			'Ijiranaide, Nagatoro-san 2nd Attack',
			'イジらないで、長瀞さん 2nd Attack',
			"Don't Toy with Me, Miss Nagatoro 2nd Attack"
		],
		[
			sOLM
		],
		'TV', 0, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tSchool
		]
	),
	new Anime(
		'1900/110097',
		[
			'Ijiranaide, Nagatoro-san',
			'イジらないで、長瀞さん',
			"Don't Toy with Me, Miss Nagatoro"
		],
		[
			sOLM
		],
		'TV', 1, 2021, 'Web manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tSchool
		]
	),
	new Anime(
		'1716/104880',
		[
			'Nekopara',
			'ネコぱら'
		],
		[
			sFelixFilm
		],
		'TV', 0, 2020, 'Visual novel', 0, 1,
		[
			tComedy,
			tSliceOfLife,
			tAnthropomorphic,
			tFavoriteAnime
		]
	),
	new Anime(
		'1102/103268',
		[
			'Nekopara: Koneko no Hi no Yakusoku',
			'ネコぱら 仔ネコの日の約束'
		],
		[
			sFelixFilm
		],
		'ONA', 2, 2018, 'Visual novel', 0, 1,
		[
			tComedy,
			tRomance,
			tFavoriteAnime
		]
	),
	new Anime(
		'7/89829',
		[
			'Nekopara OVA',
			'ネコぱらOVA'
		],
		[
			sFelixFilm
		],
		'OVA', 3, 2017, 'Visual novel', 0, 1,
		[
			tComedy,
			tRomance,
			tFavoriteAnime
		]
	),
	new Anime(
		'4/86790',
		[
			'New Game!!',
			'NEW GAME!!'
		],
		[
			sDogaKobo
		],
		'TV', 2, 2017, '4-koma manga', 0, 1,
		[
			tComedy,
			tAdultCast,
			tCGDCT,
			tOtakuCulture,
			tWorkplace,
			tFavoriteAnime
		]
	),
	new Anime(
		'10/86507',
		[
			'New Game! Watashi, Shain Ryokou tte Hajimete nanode...',
			'NEW GAME! 私、社員旅行って初めてなので…'
		],
		[
			sDogaKobo
		],
		'OVA', 1, 2017, '4-koma manga', 0, 1,
		[
			tComedy,
			tAdultCast,
			tCGDCT,
			tFavoriteAnime
		]
	),
	new Anime(
		'9/80417',
		[
			'New Game!',
			'NEW GAME!'
		],
		[
			sDogaKobo
		],
		'TV', 2, 2016, '4-koma manga', 0, 1,
		[
			tComedy,
			tAdultCast,
			tCGDCT,
			tOtakuCulture,
			tWorkplace,
			tFavoriteAnime
		]
	),
	new Anime(
		'1301/110433',
		[
			'Munou na Nana',
			'無能なナナ',
			'Talentless Nana'
		],
		[
			sBridge
		],
		'TV', 3, 2020, 'Manga', 1, 1,
		[
			tSupernatural,
			tPsychological,
			tSuperPower,
			tShounen,
			tSuspense,
			tFavoriteAnime
		]
	),
	new Anime(
		'12/86676',
		[
			'Tsurezure Children',
			'徒然チルドレン',
			'Tsuredure Children'
		],
		[
			sStudioGokumi
		],
		'TV', 2, 2017, '4-koma manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'11/79107',
		[
			'Gakusen Toshi Asterisk 2nd Season',
			'学戦都市アスタリスク',
			'The Asterisk War Season 2'
		],
		[
			sA1Pictures
		],
		'TV', 1, 2016, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tSciFi,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'5/76034',
		[
			'Gakusen Toshi Asterisk',
			'学戦都市アスタリスク',
			'The Asterisk War'
		],
		[
			sA1Pictures
		],
		'TV', 3, 2015, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tSciFi,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'7/90115',
		[
			'Net-juu no Susume Special',
			'ネト充のススメ',
			'Recovery of an MMO Junkie Special'
		],
		[
			sSignalMD
		],
		'Special', 3, 2017, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tVideoGame,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/87463',
		[
			'Net-juu no Susume',
			'ネト充のススメ',
			'Recovery of an MMO Junkie'
		],
		[
			sSignalMD
		],
		'TV', 3, 2017, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tVideoGame,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'1642/100344',
		[
			'Ore ga Suki nano wa Imouto dakedo Imouto ja Nai Specials',
			'俺が好きなのは妹だけど妹じゃない俺が好きなのは妹だけど妹じゃない新規短編アニメーション'
		],
		[
			sNAZ,
			sMagiaDoraglier
		],
		'Special', 0, 2019, 'Light novel', 2, 1,
		[
			tComedy,
			tEcchi,
			tHarem
		]
	),
	new Anime(
		'1359/96152',
		[
			'Ore ga Suki nano wa Imouto dakedo Imouto ja Nai',
			'俺が好きなのは妹だけど妹じゃない',
			'My Sister, My Writer'
		],
		[
			sNAZ,
			sMagiaDoraglier
		],
		'TV', 3, 2018, 'Light novel', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi
		]
	),
	new Anime(
		'1786/118533',
		[
			'Isuca: Gokuraku',
			'ISUCA 第拾壱話「極楽」'
		],
		[
			sArms
		],
		'OVA', 2, 2015, 'Manga', 2, 1,
		[
			tAction,
			tComedy,
			tRomance,
			tSupernatural,
			tEcchi,
			tHarem,
			tMythology,
			tSchool,
			tSeinen
		]
	),
	new Anime(
		'3/71767',
		[
			'Isuca',
			'ISUCA [イスカ]'
		],
		[
			sArms
		],
		'TV', 0, 2015, 'Manga', 2, 1,
		[
			tAction,
			tComedy,
			tRomance,
			tSupernatural,
			tEcchi,
			tHarem,
			tMythology,
			tSchool,
			tSeinen
		]
	),
	new Anime(
		'1374/131616',
		[
			'Seishun Buta Yarou wa Odekake Sister no Yume wo Minai',
			'青春ブタ野郎はおでかけシスターの夢を見ない',
			'Rascal Does Not Dream of a Sister Venturing Out'
		],
		[
			sCloverWorks
		],
		'Movie', 1, 2023, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tSupernatural,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1774/111679',
		[
			'Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai',
			'青春ブタ野郎はゆめみる少女の夢を見ない',
			'Rascal Does Not Dream of a Dreaming Girl'
		],
		[
			sCloverWorks
		],
		'Movie', 1, 2019, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tSupernatural,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1301/93586',
		[
			'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai',
			'青春ブタ野郎はバニーガール先輩の夢を見ない',
			'Rascal Does Not Dream of Bunny Girl Senpai'
		],
		[
			sCloverWorks
		],
		'TV', 3, 2018, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tSupernatural,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1063/137100',
		[
			'Kanojo mo Kanojo Season 2',
			'カノジョも彼女 Season 2',
			'Girlfriend, Girlfriend Season 2'
		],
		[
			sSynergySP
		],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1713/117119',
		[
			'Kanojo mo Kanojo',
			'カノジョも彼女',
			'Girlfriend, Girlfriend'
		],
		[
			sTezukaProductions
		],
		'TV', 2, 2021, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1034/112435',
		[
			'Boku no Kanojo ga Majimesugiru Sho-bitch na Ken OVA',
			'僕の彼女がマジメ過ぎるしょびっちな件 OVA',
			'My Girlfriend is Shobitch OVA'
		],
		[
			sDiomedéa,
			sStudioBlanc
		],
		'OVA', 0, 2018, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tSchool
		]
	),
	new Anime(
		'12/87623',
		[
			'Boku no Kanojo ga Majimesugiru Sho-bitch na Ken',
			'僕の彼女がマジメ過ぎるしょびっちな件',
			'My Girlfriend is Shobitch'
		],
		[
			sDiomedéa,
			sStudioBlanc
		],
		'TV', 3, 2017, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'1622/111483',
		[
			'Araburu Kisetsu no Otome-domo yo.',
			'荒ぶる季節の乙女どもよ。',
			'O Maidens in Your Savage Season'
		],
		[
			sLayduce
		],
		'TV', 2, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tDrama,
			tRomance,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1687/123304',
		[
			'B-gata H-kei',
			'B型H系',
			"Yamada's First Time: B Gata H Kei"
		],
		[
			sHalFilmMaker
		],
		'TV', 1, 2010, '4-koma manga', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tSchool,
			tSeinen
		]
	),
	new Anime(
		'3/79414',
		[
			'Netoge no Yome wa Onnanoko ja Nai to Omotta?',
			'ネトゲの嫁は女の子じゃないと思った？',
			'And you thought there is never a girl online?'
		],
		[
			sProjectNo9
		],
		'TV', 1, 2016, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tSchool,
			tVideoGame,
			tFavoriteAnime
		]
	),
	new Anime(
		'1024/93549',
		[
			'Akkun to Kanojo',
			'あっくんとカノジョ',
			'My Sweet Tyrant'
		],
		[
			sYumetaCompany
		],
		'TV', 1, 2018, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tJosei,
			tFavoriteAnime
		]
	),
	new Anime(
		'9/89848',
		[
			'Imouto sae Ireba Ii. Special',
			'妹さえいればいい。'
		],
		[
			sSILVERLINK
		],
		'Special', 0, 2018, 'Light novel', 0, 1,
		[
			tComedy,
			tFavoriteAnime
		]
	),
	new Anime(
		'10/88472',
		[
			'Imouto sae Ireba Ii.',
			'妹さえいればいい。',
			"A Sister's All You Need"
		],
		[
			sSILVERLINK
		],
		'TV', 3, 2017, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'10/23635',
		[
			'Mayoi Neko Overrun! Specials',
			'迷い猫ねこねこ劇場'
		],
		[
			sAIC
		],
		'Special', 1, 2010, 'Light novel', 2, 1,
		[
			tComedy,
			tEcchi,
			tFavoriteAnime
		]
	),
	new Anime(
		'10/23770',
		[
			'Mayoi Neko Overrun!',
			'迷い猫オーバーラン!',
			'Stray Cats Overrun!'
		],
		[
			sAIC
		],
		'TV', 1, 2010, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tFavoriteAnime
		]
	),
	new Anime(
		'9/75240',
		[
			'Ookami-san to Shichinin no Nakama-tachi',
			'オオカミさんと七人の仲間たち',
			'Okami-San and Her Seven Companions'
		],
		[
			sJCStaff
		],
		'TV', 2, 2010, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tParody
		]
	),
	new Anime(
		'6/25892',
		[
			'Fortune Arterial: Akai Yakusoku - Tadoritsuita Basho',
			'FORTUNE ARTERIAL 赤い約束 たどり着いた場所'
		],
		[
			sFeel,
			sZexcs
		],
		'OVA', 0, 2011, 'Visual novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tHarem,
			tVampire
		]
	),
	new Anime(
		'11/26876',
		[
			'Fortune Arterial: Akai Yakusoku',
			'FORTUNE ARTERIAL 赤い約束'
		],
		[
			sFeel,
			sZexcs
		],
		'TV', 3, 2010, 'Visual novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tSchool,
			tVampire
		]
	),
	new Anime(
		'2/29138',
		[
			'Hidan no Aria: Butei ga Kitarite Onsen Kenshuu',
			'緋弾のアリア 武偵が来たりて温泉研修',
			'Aria the Scarlet Ammo Special'
		],
		[
			sJCStaff
		],
		'Special', 3, 2011, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tMystery,
			tRomance
		]
	),
	new Anime(
		'9/30095',
		[
			'Hidan no Aria',
			'緋弾のアリア',
			'Aria the Scarlet Ammo'
		],
		[
			sJCStaff
		],
		'TV', 1, 2011, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tRomance,
			tSchool,
			tEcchi
		]
	),
	new Anime(
		'5/30175',
		[
			'R-15: R15 Shounen Hyouryuuki',
			'あーるじゅうご R15少年漂流記'
		],
		[
			sAIC
		],
		'OVA', 3, 2011, 'Light novel', 2, 1,
		[
			tAdventure,
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tParody
		]
	),
	new Anime(
		'9/33029',
		[
			'R-15',
			'あーるじゅうご'
		],
		[
			sAIC
		],
		'TV', 2, 2011, 'Light novel', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'13/29971',
		[
			'Mayo Chiki!',
			'まよチキ!'
		],
		[
			sFeel
		],
		'TV', 2, 2011, 'Light novel', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool,
			tCrossdressing
		]
	),
	new Anime(
		'8/63597',
		[
			'Baka to Test to Shoukanjuu Ni!: Mahou Hideyoshi Hideyoshi',
			'バカとテストと召喚獣にっ！ 『魔法秀吉ひでよし』',
			'Baka and Test - Summon the Beasts: Magical Hideyoshi Hideyoshi'
		],
		[
			sSILVERLINK
		],
		'Special', 3, 2011, 'Light novel', 0, 1,
		[
			tComedy,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/28992',
		[
			'Baka to Test to Shoukanjuu Ni!',
			'バカとテストと召喚獣 にっ！',
			'Baka & Test – Summon the Beasts 2'
		],
		[
			sSILVERLINK
		],
		'TV', 2, 2011, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tSuperPower,
			tLovePolygon,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/67303',
		[
			'Baka to Test to Shoukanjuu: Matsuri',
			'バカとテストと召喚獣 ～祭～',
			'Baka & Test - Summon the Beasts OVA'
		],
		[
			sSILVERLINK
		],
		'OVA', 0, 2011, 'Light novel', 0, 1,
		[
			tComedy,
			tSchool,
			tSuperPower,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/67315',
		[
			'Baka to Test to Shoukanjuu Specials',
			'バカとテストと召喚獣 映像特典'
		],
		[
			sSILVERLINK
		],
		'Special', 1, 2010, 'Light novel', 0, 1,
		[
			tComedy,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/50389',
		[
			'Baka to Test to Shoukanjuu',
			'バカとテストと召喚獣',
			'Baka & Test - Summon the Beasts'
		],
		[
			sSILVERLINK
		],
		'TV', 0, 2010, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tLovePolygon,
			tFavoriteAnime
		]
	),
	new Anime(
		'11/30853',
		[
			'Astarotte no Omocha! EX',
			'アスタロッテのおもちゃ! EX',
			"Astarotte's Toy EX"
		],
		[
			sDiomedéa
		],
		'OVA', 2, 2011, 'Manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tIsekai,
			tSeinen
		]
	),
	new Anime(
		'3/75562',
		[
			'Astarotte no Omocha!',
			'アスタロッテのおもちゃ！',
			"Astarotte's Toy"
		],
		[
			sDiomedéa
		],
		'TV', 1, 2011, 'Manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tIsekai,
			tSeinen,
			tHarem
		]
	),
	new Anime(
		'6/59825',
		[
			'Itsuka Tenma no Kuro Usagi: Kokoro Utsuri no Toukoubi - School Attendance Day',
			'いつか天魔の黒ウサギ 心移りの登校日 ~すくーる·あてんだんす·でぃ~'
		],
		[
			sZexcs
		],
		'OVA', 3, 2011, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tSchool,
			tVampire
		]
	),
	new Anime(
		'5/75197',
		[
			'Itsuka Tenma no Kuro Usagi',
			'いつか天魔の黒ウサギ',
			'A Dark Rabbit has Seven Lives'
		],
		[
			sZexcs
		],
		'TV', 2, 2011, 'Light novel', 2, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tSchool,
			tVampire
		]
	),
	new Anime(
		'10/30839',
		[
			'Hoshizora e Kakaru Hashi: Kakaru ka? Gakuensai ni Koi no Hashi',
			'星空へ架かる橋　架かるか？学園祭に恋の橋'
		],
		[
			sDogaKobo
		],
		'Special', 3, 2011, 'Visual novel', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tSchool
		]
	),
	new Anime(
		'3/73521',
		[
			'Hoshizora e Kakaru Hashi',
			'星空へ架かる橋',
			'A Bridge to the Starry Skies'
		],
		[
			sDogaKobo
		],
		'TV', 1, 2011, 'Visual novel', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'11/51565',
		[
			'Dakara Boku wa, H ga Dekinai. Mie Sugi! Mizugi Contest',
			'だから僕は、Ｈができない 。 見えすぎ! 水着コンテスト',
			"So, I Can't Play H! Episode 13"
		],
		[
			sFeel
		],
		'OVA', 0, 2013, 'Light novel', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi
		]
	),
	new Anime(
		'4/75102',
		[
			'Dakara Boku wa, H ga Dekinai.',
			'だから僕は、Hができない。',
			"So, I Can't Play H!"
		],
		[
			sFeel
		],
		'TV', 2, 2012, 'Light novel', 2, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tEcchi
		]
	),
	new Anime(
		'6/47627',
		[
			'Papa no Iukoto wo Kikinasai! OVA',
			'パパのいうことを聞きなさい！OVA'
		],
		[
			sFeel
		],
		'OVA', 1, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance
		]
	),
	new Anime(
		'12/78213',
		[
			'Papa no Iukoto wo Kikinasai!: Pokkapoka',
			'パパのいうことを聞きなさい！ぽっかぽか'
		],
		[
			sFeel
		],
		'Special', 2, 2012, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tChildcare
		]
	),
	new Anime(
		'2/35039',
		[
			'Papa no Iukoto wo Kikinasai!',
			'パパのいうことを聞きなさい！',
			'Listen to Me, Girls. I Am Your Father!'
		],
		[
			sFeel
		],
		'TV', 0, 2012, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tChildcare,
			tFavoriteEDSong,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'12/43823',
		[
			'Acchi Kocchi: Place=Princess',
			'あっちこっち 第13話(未放送)「PLACE=PRINCESS」'
		],
		[
			sAIC
		],
		'Special', 3, 2012, '4-koma manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tGagHumor,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'5/46489',
		[
			'Acchi Kocchi',
			'あっちこっち',
			'Place to Place'
		],
		[
			sAIC
		],
		'TV', 1, 2012, '4-koma manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tGagHumor,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'11/51459',
		[
			'Kono Naka ni Hitori, Imouto ga Iru!: Ani, Imouto, Koibito',
			'この中に1人、妹がいる！兄、妹、恋人'
		],
		[
			sStudioGokumi
		],
		'OVA', 0, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'5/75534',
		[
			'Kono Naka ni Hitori, Imouto ga Iru!',
			'この中に1人、妹がいる！',
			'NAKAIMO - My Little Sister Is Among Them!'
		],
		[
			sStudioGokumi
		],
		'TV', 2, 2012, 'Light novel', 2, 1,
		[
			tComedy,
			tMystery,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'6/46981',
		[
			'Oniichan dakedo Ai sae Areba Kankeinai yo ne! Specials',
			'お兄ちゃんだけど愛さえあれば関係ないよねっ',
			'OniAi Specials'
		],
		[
			sSILVERLINK
		],
		'Special', 3, 2012, 'Light novel', 2, 1,
		[
			tComedy,
			tEcchi
		]
	),
	new Anime(
		'6/42111',
		[
			'Oniichan dakedo Ai sae Areba Kankeinai yo ne!',
			'お兄ちゃんだけど愛さえあれば関係ないよねっ',
			'OniAi'
		],
		[
			sSILVERLINK
		],
		'TV', 3, 2012, 'Light novel', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'10/41927',
		[
			'Inu x Boku SS: Miketsukami-kun Henka/Switch/Omamagoto',
			'妖狐×僕SS 御狐神くん変化 / スイッチ / おままごと',
			'Inu X Boku Secret Service Episode 13'
		],
		[
			sDavidProduction
		],
		'Special', 2, 2012, 'Manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tShounen
		]
	),
	new Anime(
		'1760/98794',
		[
			'Inu x Boku SS',
			'妖狐×僕SS',
			'Inu X Boku Secret Service'
		],
		[
			sDavidProduction
		],
		'TV', 0, 2012, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tMythology,
			tShounen
		]
	),
	new Anime(
		'1318/92768',
		[
			'Tokyo Ravens',
			'東京レイヴンズ'
		],
		[
			s8bit
		],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'7/75235',
		[
			'Magical☆Star Kanon 100%',
			'マジカル☆スター　かのん100％',
			'Magical Star Kanon 100%!'
		],
		[
			sManglobe
		],
		'OVA', 1, 2013, 'Manga', 0, 1,
		[
			tMusic,
			tShounen,
			tMahouShoujo,
			tFavoriteAnime
		]
	),
	new Anime(
		'6/51949',
		[
			'Kami nomi zo Shiru Sekai: Megami-hen',
			'神のみぞ知るセカイ 女神篇',
			'The World God Only Knows: Goddesses'
		],
		[
			sManglobe
		],
		'TV', 2, 2013, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tHarem,
			tShounen,
			tOtakuCulture,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'11/43359',
		[
			'Kami nomi zo Shiru Sekai: Tenri-hen',
			'神のみぞ知るセカイ 天理篇',
			'The World God Only Knows: Tenri Arc'
		],
		[
			sManglobe
		],
		'OVA', 3, 2012, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tHarem,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'12/32297',
		[
			'Kami nomi zo Shiru Sekai: 4-nin to Idol',
			'神のみぞ知るセカイ　４人とアイドル',
			'The World God Only Knows: Four Girls and an Idol'
		],
		[
			sManglobe
		],
		'OVA', 2, 2011, 'Manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tMusic,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'11/30030',
		[
			'Kami nomi zo Shiru Sekai II',
			'神のみぞ知るセカイ II',
			'The World God Only Knows II'
		],
		[
			sManglobe
		],
		'TV', 1, 2011, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tHarem,
			tShounen,
			tOtakuCulture,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/43361',
		[
			'Kami nomi zo Shiru Sekai',
			'神のみぞ知るセカイ',
			'The World God Only Knows'
		],
		[
			sManglobe
		],
		'TV', 3, 2010, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tHarem,
			tShounen,
			tOtakuCulture,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'10/75585',
		[
			'Kotoura-san',
			'琴浦さん',
			'The Troubled Life of Miss Kotoura'
		],
		[
			sAICClassic
		],
		'TV', 0, 2013, '4-koma manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'3/75788',
		[
			'Hentai Ouji to Warawanai Neko.',
			'変態王子と笑わない猫。',
			'The "Hentai" Prince and the Stony Cat'
		],
		[
			sJCStaff
		],
		'TV', 1, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tHarem,
			tSchool,
			tFavoriteOPSong
		]
	),
	new Anime(
		'13/44187',
		[
			'Ore no Kanojo to Osananajimi ga Shuraba Sugiru',
			'俺の彼女と幼なじみが修羅場すぎる',
			'Oreshura'
		],
		[
			sA1Pictures
		],
		'TV', 0, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1314/129575',
		[
			'Ore no Imouto ga Konnani Kawaii Wake ga Nai. Specials',
			'俺の妹がこんなに可愛いわけがない。',
			'OreImo 2 Specials'
		],
		[
			sA1Pictures
		],
		'ONA', 2, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/45769',
		[
			'Ore no Imouto ga Konnani Kawaii Wake ga Nai.',
			'俺の妹がこんなに可愛いわけがない。',
			'Oreimo 2'
		],
		[
			sA1Pictures
		],
		'TV', 1, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tOtakuCulture,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/29734',
		[
			'Ore no Imouto ga Konnani Kawaii Wake ga Nai Specials',
			'俺の妹がこんなに可愛いわけがない',
			'OreImo Specials'
		],
		[
			sAICBuild
		],
		'ONA', 0, 2011, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tOtakuCulture,
			tFavoriteAnime
		]
	),
	new Anime(
		'10/28240',
		[
			'Ore no Imouto ga Konnani Kawaii Wake ga Nai',
			'俺の妹がこんなに可愛いわけがない',
			'OreImo'
		],
		[
			sAICBuild
		],
		'TV', 3, 2010, 'Light novel', 0, 1,
		[
			tComedy,
			tOtakuCulture,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1624/112109',
		[
			'Yuusha ni Narenakatta Ore wa Shibushibu Shuushoku wo Ketsui Shimashita. OVA',
			'勇者になれなかった俺はしぶしぶ就職を決意しました。OVA',
			"Yusibu: I couldn't become a hero, so I reluctantly decided to get a job. OVA"
		],
		[
			sAsread
		],
		'OVA', 0, 2014, 'Light novel', 2, 1,
		[
			tComedy,
			tFantasy,
			tEcchi
		]
	),
	new Anime(
		'13/54389',
		[
			'Yuusha ni Narenakatta Ore wa Shibushibu Shuushoku wo Ketsui Shimashita.',
			'勇者になれなかった俺はしぶしぶ就職を決意しました。',
			'I Couldn`t Become a Hero, So I Reluctantly Decided to Get a Job'
		],
		[
			sAsread
		],
		'TV', 3, 2013, 'Light novel', 2, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tEcchi
		]
	),
	new Anime(
		'12/52091',
		[
			'Golden Time',
			'ゴールデンタイム'
		],
		[
			sJCStaff
		],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tAdultCast,
			tLovePolygon,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/44724',
		[
			'Boku wa Tomodachi ga Sukunai Next',
			'僕は友達が少ないNEXT',
			"Haganai: I don't have many friends NEXT"
		],
		[
			sAICBuild
		],
		'TV', 0, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'3/39215',
		[
			'Boku wa Tomodachi ga Sukunai: Relay Shousetsu wa Ketsumatsu ga Hanpanai',
			'僕は友達が少ない リレー小説は結末が半端ないL(゜□゜)」',
			"Haganai: A Round-Robin Story's Ending Is Way Extreme"
		],
		[
			sAICBuild
		],
		'OVA', 2, 2012, 'Light novel', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tSchool,
			tLovePolygon
		]
	),
	new Anime(
		'8/32873',
		[
			'Boku wa Tomodachi ga Sukunai',
			'僕は友達が少ない',
			"Haganai: I don't have many friends"
		],
		[
			sAICBuild
		],
		'TV', 3, 2011, 'Light novel', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'1215/100764',
		[
			'Trinity Seven Movie 2: Heavens Library to Crimson Lord',
			'劇場版 トリニティセブン -天空図書館〈ヘブンズライブラリー〉と真紅の魔王〈クリムゾンロード〉'
		],
		[
			sSevenArcsPictures
		],
		'Movie', 0, 2019, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1031/112821',
		[
			'Trinity Seven Movie 1: Eternity Library to Alchemic Girl',
			'劇場版 トリニティセブン －悠久図書館〈エターニティライブラリー〉と錬金術少女〈アルケミックガール〉－',
			'Trinity Seven: Eternity Library & Alchemic Girl'
		],
		[
			sSevenArcsPictures
		],
		'Movie', 0, 2017, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'3/74066',
		[
			'Trinity Seven: Nanatsu no Taizai to Nana Madoushi',
			'トリニティセブン 七つの大罪と七魔道士',
			'Trinity Seven: The Seven Deadly Sins and The Seven Mages'
		],
		[
			sSevenArcsPictures
		],
		'OVA', 0, 2015, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'12/67795',
		[
			'Trinity Seven',
			'トリニティセブン'
		],
		[
			sSevenArcsPictures
		],
		'TV', 3, 2014, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'13/64061',
		[
			'Saikin, Imouto no Yousu ga Chotto Okashiinda ga. OVA',
			'最近、妹のようすがちょっとおかしいんだが。 OVA'
		],
		[
			sProjectNo9
		],
		'OVA', 1, 2014, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tEcchi,
			tShounen
		]
	),
	new Anime(
		'3/56589',
		[
			'Saikin, Imouto no Yousu ga Chotto Okashiinda ga.',
			'最近、妹のようすがちょっとおかしいんだが。',
			'Recently, my sister is unusual'
		],
		[
			sProjectNo9
		],
		'TV', 0, 2014, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tEcchi,
			tShounen
		]
	),
	new Anime(
		'6/57563',
		[
			'Nourin',
			'のうりん',
			'No-Rin'
		],
		[
			sSILVERLINK
		],
		'TV', 0, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tParody,
			tSchool
		]
	),
	new Anime(
		'3/69591',
		[
			'Kanojo ga Flag wo Oraretara: Christmas? Sonna Mono ga Boku ni Tsuuyou Suru to Omou no ka?',
			'彼女がフラグをおられたら クリスマス? そんな物が僕に通用すると思うのか?'
		],
		[
			sHoodsEntertainment
		],
		'OVA', 3, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'11/63363',
		[
			'Kanojo ga Flag wo Oraretara',
			'彼女がフラグをおられたら',
			'If Her Flag Breaks'
		],
		[
			sHoodsEntertainment
		],
		'TV', 1, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'7/60095',
		[
			'Mikakunin de Shinkoukei: Kamoniku tte Midori-ppoi Aji ga Suru no ne.',
			'未確認で進行形 「鴨肉って緑っぽい味がするのね。」'
		],
		[
			sDogaKobo
		],
		'OVA', 0, 2014, '4-koma	manga', 0, 1,
		[
			tComedy,
			tRomance,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/64481',
		[
			'Mikakunin de Shinkoukei: Mite. Are ga Watashitachi no Tomatteiru Ryokan yo.',
			'未確認で進行形 「見て。あれが私たちの泊まっている旅館よ。」'
		],
		[
			sDogaKobo
		],
		'Special', 0, 2014, '4-koma	manga', 0, 1,
		[
			tComedy,
			tRomance,
			tFavoriteAnime
		]
	),
	new Anime(
		'10/75249',
		[
			'Mikakunin de Shinkoukei',
			'未確認で進行形',
			'Engaged to the Unidentified'
		],
		[
			sDogaKobo
		],
		'TV', 0, 2014, '4-koma	manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/89974',
		[
			'Chuunibyou demo Koi ga Shitai! Movie: Take On Me',
			'映画 中二病でも恋がしたい！-Take On Me-',
			'Love, Chunibyo & Other Delusions!: Take On Me'
		],
		[
			sKyotoAnimation
		],
		'Movie', 0, 2018, 'Light novel', 0, 1,
		[
			tComedy,
			tDrama,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/66827',
		[
			'Chuunibyou demo Koi ga Shitai! Ren: The Rikka Wars',
			' 中二病でも恋がしたい！戀 再生の･･･邪王真眼黙示録（The Rikka Wars）',
			'Love, Chunibyo & Other Delusions!: Heart Throb - The Rikka Wars'
		],
		[
			sKyotoAnimation
		],
		'Special', 2, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tDrama,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'13/60351',
		[
			'Chuunibyou demo Koi ga Shitai! Ren Specials',
			'中二病でも恋がしたい！戀 未放送ショートムービー',
			'Love, Chunibyo & Other Delusions: Heart Throb Specials'
		],
		[
			sKyotoAnimation
		],
		'Special', 0, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tFavoriteAnime
		]
	),
	new Anime(
		'7/56643',
		[
			'Chuunibyou demo Koi ga Shitai! Ren',
			'中二病でも恋がしたい！戀',
			'Love, Chunibyo & Other Delusions!: Heart Throb'
		],
		[
			sKyotoAnimation
		],
		'TV', 0, 2014, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'7/45512',
		[
			'Chuunibyou demo Koi ga Shitai! Kirameki no... Slapstick Noel',
			'中二病でも恋がしたい! 煌めきの... 聖爆誕祭（スラップステック・ノエル）',
			'Love, Chunibyo & Other Delusions!: Sparkling... Slapstick Noel'
		],
		[
			sKyotoAnimation
		],
		'Special', 1, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'9/43245',
		[
			'Chuunibyou demo Koi ga Shitai! Depth of Field: Ai to Nikushimi Gekijou',
			'中二病でも恋がしたい！DEPTH OF FIELD ～ 愛と憎しみ劇場',
			'Love, Chunibyo & Other Delusions! Depth of Field: Love and Hate Theater'
		],
		[
			sKyotoAnimation
		],
		'Special', 3, 2012, 'Light novel', 0, 1,
		[
			tAction,
			tMecha,
			tFavoriteAnime
		]
	),
	new Anime(
		'12/46931',
		[
			'Chuunibyou demo Koi ga Shitai!',
			'中二病でも恋がしたい!',
			'Love, Chunibyo & Other Delusions!'
		],
		[
			sKyotoAnimation
		],
		'TV', 3, 2012, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'5/42655',
		[
			'Chuunibyou demo Koi ga Shitai! Lite',
			'中二病でも恋がしたい！Lite',
			'Love, Chunibyo & Other Delusions!: Chuni-Shorts'
		],
		[
			sKyotoAnimation
		],
		'ONA', 2, 2012, 'Light novel', 0, 1,
		[
			tComedy,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/72479',
		[
			'Hitsugi no Chaika: Nerawareta Hitsugi/Yomigaeru Iseki',
			'棺姫のチャイカ ねらわれた棺 / 蘇る遺跡'
		],
		[
			sBones
		],
		'OVA', 0, 2015, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tRomance,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/67797',
		[
			'Hitsugi no Chaika: Avenging Battle',
			'棺姫のチャイカ AVENGING BATTLE',
			'Chaika -The Coffin Princess- Avenging Battle'
		],
		[
			sBones
		],
		'TV', 3, 2014, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tRomance,
			tFavoriteAnime
		]
	),
	new Anime(
		'4/61781',
		[
			'Hitsugi no Chaika',
			'棺姫のチャイカ',
			'Chaika -The Coffin Princess-'
		],
		[
			sBones
		],
		'TV', 1, 2014, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tRomance,
			tFavoriteAnime
		]
	),
	new Anime(
		'1901/131653',
		[
			'Kyokou Suiri Season 2',
			'虚構推理 Season2',
			'In/Spectre 2'
		],
		[
			sBrainsBase
		],
		'TV', 0, 2023, 'Manga', 1, 1,
		[
			tMystery,
			tRomance,
			tSupernatural,
			tMythology,
			tShounen,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'1310/117188',
		[
			'Kyokou Suiri',
			'虚構推理',
			'In/Spectre'
		],
		[
			sBrainsBase
		],
		'TV', 0, 2020, 'Manga', 1, 1,
		[
			tMystery,
			tRomance,
			tSupernatural,
			tMythology,
			tShounen,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'4/72173',
		[
			'Seireitsukai no Blade Dance Specials',
			'精霊使いの剣舞〈ブレイドダンス〉ミニOVA'
		],
		[
			sTNK
		],
		'Special', 3, 2014, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tEcchi,
			tSchool
		]
	),
	new Anime(
		'7/63031',
		[
			'Seireitsukai no Blade Dance',
			'精霊使いの剣舞〈ブレイドダンス〉',
			'Blade Dance of the Elementalers'
		],
		[
			sTNK
		],
		'TV', 2, 2014, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'6/76840',
		[
			'Nagato Yuki-chan no Shoushitsu: Owarenai Natsuyasumi',
			'長門有希ちゃんの消失 第17話「終われない夏休み」',
			'The Disappearance of Nagato Yuki-chan: I Cannot Let Summer Break End'
		],
		[
			sSatelight
		],
		'OVA', 3, 2015, 'Manga', 0, 1,
		[
			tComedy,
			tSeinen
		]
	),
	new Anime(
		'3/73527',
		[
			'Nagato Yuki-chan no Shoushitsu',
			'長門有希ちゃんの消失',
			'The Disappearance of Nagato Yuki-chan'
		],
		[
			sSatelight
		],
		'TV', 1, 2015, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tSeinen
		]
	),
	new Anime(
		'1676/128173',
		[
			'Romantic Killer',
			'ロマンティック・キラー'
		],
		[
			sDomerica
		],
		'ONA', 3, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tParody,
			tHarem,
			tShounen
		]
	),
	new Anime(
		'9/76542',
		[
			'Ore ga Ojousama Gakkou ni "Shomin Sample" Toshite Gets♥Sareta Ken',
			'俺がお嬢様学校に「庶民サンプル」としてゲッツされた件',
			'Shomin Sample'
		],
		[
			sSILVERLINK
		],
		'TV', 3, 2015, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'1702/97867',
		[
			'Saenai Heroine no Sodatekata Fine',
			'冴えない彼女の育てかた Fine',
			'Saekano the Movie: Finale'
		],
		[
			sCloverWorks
		],
		'Movie', 3, 2019, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tOtakuCulture,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/84797',
		[
			'Saenai Heroine no Sodatekata ♭',
			'冴えない彼女〈ヒロイン〉の育てかた♭',
			'Saekano: How to Raise a Boring Girlfriend .flat'
		],
		[
			sA1Pictures
		],
		'TV', 1, 2017, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool,
			tOtakuCulture,
			tFavoriteAnime
		]
	),
	new Anime(
		'5/86672',
		[
			'Saenai Heroine no Sodatekata ♭: Koi to Junjou no Service-kai',
			'冴えない彼女〈ヒロイン〉の育てかた♭ #0 「恋と純情のサービス回」',
			'Saekano: How to Raise a Boring Girlfriend .flat - Fan Service of Love and Pure heart'
		],
		[
			sA1Pictures
		],
		'Special', 1, 2017, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'7/68783',
		[
			'Saenai Heroine no Sodatekata',
			'冴えない彼女〈ヒロイン〉の育てかた',
			'Saekano: How to Raise a Boring Girlfriend'
		],
		[
			sA1Pictures
		],
		'TV', 0, 2015, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool,
			tOtakuCulture,
			tFavoriteAnime
		]
	),
	new Anime(
		'6/70493',
		[
			'Saenai Heroine no Sodatekata: Ai to Seishun no Service-kai',
			'冴えない彼女の育てかた #0 「愛と青春のサービス回」',
			'Saekano: Fan Service of Love and Youth'
		],
		[
			sA1Pictures
		],
		'Special', 0, 2015, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/73700',
		[
			'Yamada-kun to 7-nin no Majo',
			'山田くんと7人の魔女',
			'Yamada-kun and the Seven Witches'
		],
		[
			sLIDENFILMS
		],
		'TV', 1, 2015, 'Manga', 0, 1,
		[
			tComedy,
			tMystery,
			tRomance,
			tSupernatural,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1079/104630',
		[
			'Yamada-kun to 7-nin no Majo: Mou Hitotsu no Suzaku-sai',
			'山田くんと7人の魔女 OAD'
		],
		[
			sLIDENFILMS
		],
		'OVA', 3, 2014, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'13/72626',
		[
			'Nisekoi:',
			'ニセコイ',
			'Nisekoi: False Love'
		],
		[
			sShaft
		],
		'TV', 1, 2015, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1992/112119',
		[
			'Nisekoi: OVA',
			'ニセコイ OAD'
		],
		[
			sShaft
		],
		'OVA', 0, 2016, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/71754',
		[
			'Nisekoi OVA',
			'ニセコイ OAD'
		],
		[
			sShaft
		],
		'OVA', 3, 2014, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'13/75587',
		[
			'Nisekoi',
			'ニセコイ',
			'Nisekoi: False Love'
		],
		[
			sShaft
		],
		'TV', 0, 2014, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1979/106698',
		[
			'Momokuri',
			'ももくり'
		],
		[
			sSatelight
		],
		'ONA', 3, 2015, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/80688',
		[
			'Kono Bijutsu-bu ni wa Mondai ga Aru!',
			'この美術部には問題がある！',
			'This Art Club Has a Problem!'
		],
		[
			sFeel
		],
		'TV', 2, 2016, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tSeinen,
			tVisualArts,
			tFavoriteAnime
		]
	),
	new Anime(
		'13/83930',
		[
			'Rewrite 2nd Season',
			'Rewrite 2ndシーズン',
			'Rewrite: Moon and Terra'
		],
		[
			s8bit
		],
		'TV', 0, 2017, 'Visual novel', 0, 1,
		[
			tAction,
			tComedy,
			tRomance,
			tSupernatural,
			tFavoriteAnime
		]
	),
	new Anime(
		'1827/92122',
		[
			'Rewrite',
			'リライト'
		],
		[
			s8bit
		],
		'TV', 2, 2016, 'Visual novel', 0, 1,
		[
			tAction,
			tComedy,
			tRomance,
			tSupernatural,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/82409',
		[
			'Okusama ga Seitokaichou!+!',
			'おくさまが生徒会長!＋!',
			'My Wife is the Student Council President!+'
		],
		[
			sSeven
		],
		'TV', 3, 2016, 'Manga', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'12/78265',
		[
			'Okusama ga Seitokaichou! Seitokaichou to Ofuro Asobi',
			'おくさまが生徒会長！ 生徒会長とお風呂遊び',
			'My Wife is the Student Council President OVA'
		],
		[
			sSeven
		],
		'OVA', 0, 2016, 'Manga', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tShounen
		]
	),
	new Anime(
		'9/76157',
		[
			'Okusama ga Seitokaichou!',
			'おくさまが生徒会長！',
			'My Wife is the Student Council President!'
		],
		[
			sSeven
		],
		'TV', 2, 2015, 'Manga', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1619/106323',
		[
			'Dokyuu Hentai HxEros OVA',
			'ド級編隊エグゼロス'
		],
		[
			sProjectNo9
		],
		'OVA', 3, 2020, 'Manga', 2, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tSciFi,
			tEcchi,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1342/108321',
		[
			'Dokyuu Hentai HxEros',
			'ド級編隊エグゼロス',
			'SUPER HXEROS'
		],
		[
			sProjectNo9
		],
		'TV', 2, 2020, 'Manga', 2, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tSciFi,
			tEcchi,
			tSchool,
			tSuperPower,
			tShounen
		]
	),
	new Anime(
		'9/84266',
		[
			'Renai Boukun',
			'恋愛暴君',
			'Love Tyrant'
		],
		[
			sEMTSquared
		],
		'TV', 1, 2017, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'1833/95350',
		[
			'Osake wa Fuufu ni Natte kara: Yuzu Atsukan',
			'お酒は夫婦になってから 14杯め「ゆず熱燗'
		],
		[
			sCreatorsinPack
		],
		'ONA', 3, 2018, 'Web manga', 0, 1,
		[
			tComedy,
			tGourmet,
			tRomance,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'1554/116612',
		[
			'Osake wa Fuufu ni Natte kara',
			'お酒は夫婦になってから',
			'Love is Like a Cocktail'
		],
		[
			sCreatorsinPack
		],
		'TV', 3, 2017, 'Web manga', 0, 1,
		[
			tComedy,
			tGourmet,
			tRomance,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'1582/96343',
		[
			'Eromanga-sensei OVA',
			'エロマンガ先生 OVA',
			'Eromanga Sensei OVA'
		],
		[
			sA1Pictures
		],
		'OVA', 0, 2019, 'Light novel', 0, 1,
		[
			tComedy,
			tDrama,
			tRomance,
			tEcchi,
			tOtakuCulture,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/86468',
		[
			'Eromanga-sensei',
			'エロマンガ先生',
			'Eromanga Sensei'
		],
		[
			sA1Pictures
		],
		'TV', 1, 2017, 'Light novel', 0, 1,
		[
			tComedy,
			tDrama,
			tRomance,
			tEcchi,
			tOtakuCulture,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/89469',
		[
			'Yuragi-sou no Yuuna-san OVA',
			'ゆらぎ荘の幽奈さん'
		],
		[
			sXebec,
			sSignalMD
		],
		'OVA', 2, 2018, 'Manga', 2, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tEcchi,
			tHarem,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1462/98802',
		[
			'Yuragi-sou no Yuuna-san',
			'ゆらぎ荘の幽奈さん',
			'Yuuna and the Haunted Hot Springs'
		],
		[
			sXebec
		],
		'TV', 2, 2018, 'Manga', 2, 1,
		[
			tComedy,
			tRomance,
			tSupernatural,
			tEcchi,
			tHarem,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1908/93416',
		[
			'Kishuku Gakkou no Juliet',
			'寄宿学校のジュリエット',
			'Boarding School Juliet'
		],
		[
			sLIDENFILMS
		],
		'TV', 3, 2018, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tRomance,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1577/111404',
		[
			'Val x Love',
			'戦×恋（ヴァルラヴ）'
		],
		[
			sHoodsEntertainment
		],
		'TV', 3, 2019, 'Manga', 1, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1448/127956',
		[
			'Bocchi the Rock!',
			'ぼっち・ざ・ろっく！'
		],
		[
			sCloverWorks
		],
		'TV', 3, 2022, '4-koma manga', 0, 1,
		[
			tComedy,
			tMusic,
			tCGDCT,
			tFavoriteAnime
		]
	),
	new Anime(
		'1334/132921',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan: Dakara, Shishunki wa Owarazu ni, Seishun wa Tsuzuiteiku.',
			'やはり俺の青春ラブコメはまちがっている。結',
			'My Teen Romantic Comedy SNAFU Climax! OVA'
		],
		[
			sFeel
		],
		'OVA', 1, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tLovePolygon,
			tFavoriteAnime
		]
	),
	new Anime(
		'1958/107912',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan',
			'やはり俺の青春ラブコメはまちがっている。完',
			'My Teen Romantic Comedy SNAFU Climax!'
		],
		[
			sFeel
		],
		'TV', 2, 2020, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tLovePolygon,
			tFavoriteAnime
		]
	),
	new Anime(
		'13/84052',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku OVA',
			'やはり俺の青春ラブコメはまちがっている. 続 きっと, 女の子はお砂糖とスパイスと素敵な何かでできている。',
			'My Teen Romantic Comedy SNAFU TOO! OVA'
		],
		[
			sFeel
		],
		'OVA', 3, 2016, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tLovePolygon,
			tFavoriteAnime
		]
	),
	new Anime(
		'11/75376',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku',
			'やはり俺の青春ラブコメはまちがっている。続',
			'My Teen Romantic Comedy SNAFU TOO!'
		],
		[
			sFeel
		],
		'TV', 1, 2015, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tLovePolygon,
			tFavoriteAnime
		]
	),
	new Anime(
		'9/54831',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru. OVA',
			'やはり俺の青春ラブコメはまちがっている。OVA「こちらとしても彼ら彼女らの行く末に幸多からんことを願わざるを得ない。」',
			'My Teen Romantic Comedy SNAFU OVA'
		],
		[
			sBrainsBase
		],
		'OVA', 2, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tLovePolygon,
			tFavoriteAnime
		]
	),
	new Anime(
		'11/49459',
		[
			'Yahari Ore no Seishun Love Comedy wa Machigatteiru.',
			'やはり俺の青春ラブコメはまちがっている。',
			'My Teen Romantic Comedy SNAFU'
		],
		[
			sBrainsBase
		],
		'TV', 1, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tLovePolygon,
			tFavoriteAnime
		]
	),
	new Anime(
		'1448/108514',
		[
			'Maoujou de Oyasumi',
			'魔王城でおやすみ',
			'Sleepy Princess in the Demon Castle'
		],
		[
			sDogaKobo
		],
		'TV', 3, 2020, 'Manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tMythology,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1299/106117',
		[
			'Hatena☆Illusion',
			'はてな☆イリュージョン',
			'Hatena Illusion'
		],
		[
			sChildrensPlaygroundEntertainment
		],
		'TV', 0, 2020, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSupernatural
		]
	),
	new Anime(
		'1662/118849',
		[
			'Taishou Otome Otogibanashi',
			'大正処女御伽話',
			'Taisho Otome Fairy Tale'
		],
		[
			sSynergySP
		],
		'TV', 3, 2021, 'Manga', 0, 1,
		[
			tComedy,
			tDrama,
			tRomance,
			tHistorical,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1843/115815',
		[
			'Tantei wa Mou, Shindeiru.',
			'探偵はもう、死んでいる。',
			'The Detective Is Already Dead'
		],
		[
			sENGI
		],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			tComedy,
			tMystery,
			tRomance
		]
	),
	new Anime(
		'1996/118848',
		[
			'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta... OVA',
			'乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった… OAD',
			'My Next Life as a Villainess: All Routes Lead to Doom! X: I Met My Destined One...'
		],
		[
			sSILVERLINK
		],
		'OVA', 2, 2021, 'Light novel', 0, 1,
		[
			tComedy,
			tDrama,
			tFantasy,
			tRomance,
			tIsekai,
			tReincarnation,
			tHarem,
			tSchool,
			tShoujo,
			tFavoriteAnime
		]
	),
	new Anime(
		'1088/116439',
		[
			'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta... X',
			'乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…X',
			'My Next Life as a Villainess: All Routes Lead to Doom! X'
		],
		[
			sSILVERLINK
		],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tIsekai,
			tReincarnation,
			tHarem,
			tSchool,
			tShoujo,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1483/107061',
		[
			'Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta...',
			'乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…',
			'My Next Life as a Villainess: All Routes Lead to Doom!'
		],
		[
			sSILVERLINK
		],
		'TV', 1, 2020, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tIsekai,
			tReincarnation,
			tHarem,
			tSchool,
			tShoujo,
			tFavoriteAnime
		]
	),
	new Anime(
		'1447/121183',
		[
			'RPG Fudousan',
			'RPG不動産',
			'RPG Real Estate'
		],
		[
			sDogaKobo
		],
		'TV', 1, 2022, '4-koma manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tCGDCT
		]
	),
	new Anime(
		'1347/120593',
		[
			'Koi wa Sekai Seifuku no Ato de',
			'恋は世界征服のあとで',
			'Love After World Domination'
		],
		[
			sProjectNo9
		],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tRomance,
			tParody,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1670/130060',
		[
			'Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai',
			'かぐや様は告らせたい -ファーストキッスは終わらない-',
			'Kaguya-sama: Love is War - The First Kiss That Never Ends'
		],
		[
			sA1Pictures
		],
		'Movie', 3, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tDrama,
			tRomance,
			tSchool,
			tSeinen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1160/122627',
		[
			'Kaguya-sama wa Kokurasetai: Ultra Romantic',
			'かぐや様は告らせたい-ウルトラロマンティック-',
			'Kaguya-sama: Love is War - Ultra Romantic'
		],
		[
			sA1Pictures
		],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tSeinen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1027/115055',
		[
			'Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen OVA',
			'かぐや様は告らせたい？ ～天才たちの恋愛頭脳戦～ OVA',
			'Kaguya-sama: Love is War OVA'
		],
		[
			sA1Pictures
		],
		'OVA', 1, 2021, 'Manga', 0, 1,
		[
			tComedy,
			tEcchi,
			tRomanticSubtext,
			tSchool,
			tSeinen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1764/106659',
		[
			'Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen',
			'かぐや様は告らせたい？～天才たちの恋愛頭脳戦～',
			'Kaguya-sama: Love is War Season 2'
		],
		[
			sA1Pictures
		],
		'TV', 1, 2020, 'Manga', 0, 1,
		[
			tComedy,
			tPsychological,
			tRomanticSubtext,
			tSchool,
			tSeinen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1295/106551',
		[
			'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
			'かぐや様は告らせたい～天才たちの恋愛頭脳戦～',
			'Kaguya-sama: Love is War'
		],
		[
			sA1Pictures
		],
		'TV', 0, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tPsychological,
			tRomanticSubtext,
			tSchool,
			tSeinen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1814/99677',
		[
			'Sewayaki Kitsune no Senko-san',
			'世話やきキツネの仙狐さん',
			'The Helpful Fox Senko-san'
		],
		[
			sDogaKobo
		],
		'TV', 1, 2019, 'Web manga', 0, 1,
		[
			tSliceOfLife,
			tSupernatural,
			tIyashikei,
			tFavoriteAnime
		]
	),
	new Anime(
		'1557/137227',
		[
			'Kobayashi-san Chi no Maid Dragon S: Nippon no Omotenashi - Attend wa Dragon desu',
			'小林さんちのメイドラゴンＳ ニッポンのおもてなし（アテンドはドラゴンです）',
			"Miss Kobayashi's Dragon Maid S: Japanese HospitalityThe Attendant is a Dragon"
		],
		[
			sKyotoAnimation
		],
		'Special', 0, 2022, 'Manga', 0, 1,
		[
			tFantasy,
			tSliceOfLife,
			tFavoriteAnime
		]
	),
	new Anime(
		'1252/115539',
		[
			'Kobayashi-san Chi no Maid Dragon S',
			'小林さんちのメイドラゴンS',
			"Miss Kobayashi's Dragon Maid S"
		],
		[
			sKyotoAnimation
		],
		'TV', 2, 2021, 'Manga', 0, 1,
		[
			tFantasy,
			tSliceOfLife,
			tFavoriteAnime
		]
	),
	new Anime(
		'5/88486',
		[
			'Kobayashi-san Chi no Maid Dragon: Valentine, Soshite Onsen! - Amari Kitai Shinaide Kudasai',
			'小林さんちのメイドラゴン バレンタイン, そして温泉! (あまり期待しないでください)',
			"Miss Kobayashi's Dragon Maid: Valentine's, and Then Hot Springs! (Please Don't Get Your Hopes Up)"
		],
		[
			sKyotoAnimation
		],
		'Special', 2, 2017, 'Manga', 0, 1,
		[
			tFantasy,
			tSliceOfLife,
			tFavoriteAnime
		]
	),
	new Anime(
		'5/85434',
		[
			'Kobayashi-san Chi no Maid Dragon',
			'小林さんちのメイドラゴン',
			"Miss Kobayashi's Dragon Maid"
		],
		[
			sKyotoAnimation
		],
		'TV', 0, 2017, 'Manga', 0, 1,
		[
			tFantasy,
			tSliceOfLife,
			tFavoriteAnime
		]
	),
	new Anime(
		'1062/114363',
		[
			'Clockwork Planet',
			'クロックワーク・プラネット'
		],
		[
			sXebec
		],
		'TV', 1, 2017, 'Light novel', 0, 1,
		[
			tFantasy,
			tSciFi,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/85593',
		[
			'Rokudenashi Majutsu Koushi to Akashic Records',
			'ロクでなし魔術講師と禁忌教典',
			'Akashic Records of Bastard Magic Instructor'
		],
		[
			sLIDENFILMS
		],
		'TV', 1, 2017, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1956/94914',
		[
			'Shichisei no Subaru',
			'七星のスバル',
			"Seven Senses of the Re'Union"
		],
		[
			sLerche
		],
		'TV', 2, 2018, 'Light novel', 0, 1,
		[
			tAction,
			tDrama,
			tFantasy,
			tVideoGame,
			tFavoriteAnime
		]
	),
	new Anime(
		'1100/138338',
		[
			'Goblin Slayer II',
			'ゴブリンスレイヤーⅡ'
		],
		[
			sLIDENFILMS
		],
		'TV', 3, 2023, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tGore,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1129/111477',
		[
			"Goblin Slayer: Goblin's Crown",
			"ゴブリンスレイヤー -GOBLIN'S CROWN-"
		],
		[
			sWhiteFox
		],
		'Movie', 0, 2020, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tGore,
			tFavoriteAnime
		]
	),
	new Anime(
		'1719/95621',
		[
			'Goblin Slayer',
			'ゴブリンスレイヤー'
		],
		[
			sWhiteFox
		],
		'TV', 3, 2018, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tGore,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1827/95738',
		[
			'Beelzebub-jou no Okinimesu mama.',
			'ベルゼブブ嬢のお気に召すまま。',
			'As Miss Beelzebub Likes.'
		],
		[
			sLIDENFILMS
		],
		'TV', 3, 2018, '4-koma manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tMythology,
			tWorkplace,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1317/139802',
		[
			'Tate no Yuusha no Nariagari Season 3',
			'盾の勇者の成り上がり Season 3',
			'The Rising of the Shield Hero Season 3'
		],
		[
			sKinemaCitrus
		],
		'TV', 3, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tDrama,
			tFantasy,
			tIsekai,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1189/124642',
		[
			'Tate no Yuusha no Nariagari Season 2',
			'盾の勇者の成り上がり Season2',
			'The Rising of the Shield Hero Season 2'
		],
		[
			sKinemaCitrus,
			sDRMovie
		],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tDrama,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1490/101365',
		[
			'Tate no Yuusha no Nariagari',
			'盾の勇者の成り上がり',
			'The Rising of the Shield Hero'
		],
		[
			sKinemaCitrus
		],
		'TV', 0, 2019, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tDrama,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1568/101203',
		[
			'Uchi no Ko no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirenai.',
			'うちの娘の為ならば、俺はもしかしたら魔王も倒せるかもしれない。',
			"If It's for My Daughter, I'd Even Defeat a Demon Lord"
		],
		[
			sMahoFilm
		],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			tFantasy,
			tSliceOfLife,
			tChildcare
		]
	),
	new Anime(
		'1693/111618',
		[
			'Assassins Pride',
			'アサシンズプライド'
		],
		[
			sEMTSquared
		],
		'TV', 3, 2019, 'Light novel', 0, 1,
		[
			tFantasy,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1169/95381',
		[
			'Toaru Kagaku no Accelerator',
			'とある科学の一方通行〈アクセラレータ〉',
			'A Certain Scientific Accelerator'
		],
		[
			sJCStaff
		],
		'TV', 2, 2019, 'Manga', 1, 1,
		[
			tAction,
			tFantasy,
			tSciFi,
			tSuperPower
		]
	),
	new Anime(
		'1024/108413',
		[
			'Assault Lily: Bouquet',
			'アサルトリリィ Bouquet'
		],
		[
			sShaft
		],
		'TV', 3, 2020, 'Mixed media', 0, 1,
		[
			tAction,
			tFantasy
		]
	),
	new Anime(
		'1885/109122',
		[
			"King's Raid: Ishi wo Tsugumono-tachi",
			'キングスレイド 意志を継ぐものたち',
			"King's Raid: Successors of the Will"
		],
		[
			sOLM,
			sSunriseBeyond
		],
		'TV', 3, 2020, 'Game', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy
		]
	),
	new Anime(
		'1399/141651',
		[
			'Maou Gakuin no Futekigousha II: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou Part 2',
			'魔王学院の不適合者 II ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～ 第2クール',
			'The Misfit of Demon King Academy II Part 2'
		],
		[
			sSILVERLINK
		],
		'TV', 1, 2024, 'Light novel', 1, 0,
		[
			tAction,
			tFantasy,
			tMythology,
			tReincarnation,
			tSchool
		]
	),
	new Anime(
		'1475/137152',
		[
			'Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II',
			'魔王学院の不適合者 ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～ II',
			'The Misfit of Demon King Academy Ⅱ'
		],
		[
			sSILVERLINK
		],
		'TV', 0, 2023, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tMythology,
			tReincarnation,
			tSchool
		]
	),
	new Anime(
		'1126/108573',
		[
			'Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou',
			'魔王学院の不適合者 ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～',
			'The Misfit of Demon King Academy'
		],
		[
			sSILVERLINK
		],
		'TV', 2, 2020, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tMythology,
			tReincarnation,
			tSchool
		]
	),
	new Anime(
		'1100/109044',
		[
			'Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen',
			'キミと僕の最後の戦場、あるいは世界が始まる聖戦',
			'Our Last Crusade or the Rise of a New World'
		],
		[
			sSILVERLINK
		],
		'TV', 3, 2020, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tMilitary
		]
	),
	new Anime(
		'1044/106309',
		[
			'Shachou, Battle no Jikan desu!',
			'社長, バトルの時間です!',
			"Shachibato! President, It's Time for Battle!"
		],
		[
			sC2C
		],
		'TV', 1, 2020, 'Game', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy
		]
	),
	new Anime(
		'1100/142255',
		[
			'Mahouka Koukou no Rettousei 3rd Season',
			'魔法科高校の劣等生 第3シーズン',
			'The Irregular at Magic High School Season 3'
		],
		[
			s8bit
		],
		'TV', 1, 2024, 'Light novel', 1, 0,
		[
			tAction,
			tFantasy,
			tRomance,
			tSciFi,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1847/120234',
		[
			'Mahouka Koukou no Rettousei: Tsuioku-hen',
			'魔法科高校の劣等生 追憶編',
			'The Irregular at Magic High School: Reminiscence Arc'
		],
		[
			s8bit
		],
		'Special', 3, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tSciFi,
			tFavoriteAnime
		]
	),
	new Anime(
		'1719/116262',
		[
			'Mahouka Koukou no Yuutousei',
			'魔法科高校の優等生',
			'The Honor Student at Magic High School'
		],
		[
			sConnect
		],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			tFantasy,
			tSciFi,
			tSchool,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1629/109556',
		[
			'Mahouka Koukou no Rettousei: Raihousha-hen',
			'魔法科高校の劣等生 来訪者編',
			'The Irregular at Magic High School: Visitor Arc'
		],
		[
			s8bit
		],
		'TV', 3, 2020, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tSciFi,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1690/114330',
		[
			'Mahouka Koukou no Rettousei Movie: Hoshi wo Yobu Shoujo',
			'劇場版 魔法科高校の劣等生 星を呼ぶ少女',
			'The Irregular at Magic High School The Movie - The Girl Who Summons The Stars'
		],
		[
			s8bit
		],
		'Movie', 1, 2017, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tSciFi,
			tFavoriteAnime
		]
	),
	new Anime(
		'11/61039',
		[
			'Mahouka Koukou no Rettousei',
			'魔法科高校の劣等生',
			'The Irregular at Magic High School'
		],
		[
			sMadhouse
		],
		'TV', 1, 2014, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tSciFi,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1620/130589',
		[
			'Renai Flops',
			'恋愛フロップス',
			'Love Flops'
		],
		[
			sPassione
		],
		'TV', 3, 2022, 'Original', 2, 1,
		[
			tComedy,
			tRomance,
			tSciFi,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'1013/108558',
		[
			'Tatoeba Last Dungeon Mae no Mura no Shounen ga Joban no Machi de Kurasu Youna Monogatari',
			'たとえばラストダンジョン前の村の少年が序盤の街で暮らすような物語',
			'Suppose a Kid from the Last Dungeon Boonies Moved to a Starter Town?'
		],
		[
			sLIDENFILMS
		],
		'TV', 0, 2021, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy
		]
	),
	new Anime(
		'1079/114017',
		[
			'Seven Knights Revolution: Eiyuu no Keishousha',
			'セブンナイツ レボリューション -英雄の継承者-',
			'Seven Knights Revolution: Hero Successor'
		],
		[
			sLIDENFILMS,
			sDomerica
		],
		'TV', 1, 2021, 'Game', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy
		]
	),
	new Anime(
		'1444/115118',
		[
			'Sentouin, Hakenshimasu!',
			'戦闘員、派遣します！',
			'Combatants Will Be Dispatched!'
		],
		[
			sJCStaff
		],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tSciFi,
			tIsekai
		]
	),
	new Anime(
		'1873/139792',
		[
			'Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita 2nd',
			'真の仲間じゃないと勇者のパーティーを追い出されたので、辺境でスローライフすることにしました 2nd',
			"Banished From The Hero's Party, I Decided To Live A Quiet Life In The Countryside Season 2"
		],
		[
			sStudioFlad
		],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy,
			tRomance
		]
	),
	new Anime(
		'1723/117854',
		[
			'Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node, Henkyou de Slow Life suru Koto ni Shimashita',
			'真の仲間じゃないと勇者のパーティーを追い出されたので、辺境でスローライフすることにしました',
			"Banished From The Hero's Party, I Decided To Live A Quiet Life In The Countryside"
		],
		[
			sStudioFlad,
			sWolfsbane
		],
		'TV', 3, 2021, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy,
			tRomance
		]
	),
	new Anime(
		'1093/121114',
		[
			'Mahoutsukai Reimeiki',
			'魔法使い黎明期',
			'The Dawn of the Witch'
		],
		[
			sTezukaProductions
		],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tAnthropomorphic
		]
	),
	new Anime(
		'1263/119511',
		[
			'Tensai Ouji no Akaji Kokka Saisei Jutsu',
			'天才王子の赤字国家再生術',
			"The Genius Prince's Guide to Raising a Nation Out of Debt"
		],
		[
			sYokohamaAnimationLab
		],
		'TV', 0, 2022, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy
		]
	),
	new Anime(
		'1369/123738',
		[
			'Yuusha, Yamemasu: Kenshuu Ryokou wa Mokuteki wo Miushinau na',
			'勇者、辞めます「研修旅行は目的を見失うな」',
			"I'm Quitting Heroing: Remember, the Work Trip is First and Foremost a Learning Opportunity"
		],
		[
			sEMTSquared
		],
		'Special', 1, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy
		]
	),
	new Anime(
		'1934/122301',
		[
			'Yuusha, Yamemasu',
			'勇者、辞めます',
			"I'm Quitting Heroing"
		],
		[
			sEMTSquared
		],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy
		]
	),
	new Anime(
		'1713/126442',
		[
			'Fuufu Ijou, Koibito Miman.',
			'夫婦以上、恋人未満。',
			'More than a married couple, but not lovers.'
		],
		[
			sStudioMOTHER
		],
		'TV', 3, 2022, 'Manga', 0, 1,
		[
			tRomance,
			tSchool,
			tSeinen,
			tLovePolygon,
			tFavoriteEDSong,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'1387/127598',
		[
			'Kuro no Shoukanshi',
			'黒の召喚士',
			'Black Summoner'
		],
		[
			sSatelight
		],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'5/87145',
		[
			'Accel World: Infinite∞Burst',
			'アクセル・ワールド INFINITE∞BURST（インフィニット・バースト）'
		],
		[
			sSunrise
		],
		'Movie', 2, 2016, 'Light novel', 0, 1,
		[
			tAction,
			tRomance,
			tSciFi,
			tSchool,
			tVideoGame,
			tFavoriteAnime
		]
	),
	new Anime(
		'1451/127575',
		[
			'Accel World EX',
			'アクセル・ワールド EX'
		],
		[
			sSunrise
		],
		'OVA', 2, 2012, 'Light novel', 0, 1,
		[
			tAction,
			tRomance,
			tSciFi,
			tSchool,
			tVideoGame,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/38155',
		[
			'Accel World',
			'アクセル・ワールド'
		],
		[
			sSunrise
		],
		'TV', 1, 2012, 'Light novel', 0, 1,
		[
			tAction,
			tRomance,
			tSciFi,
			tSchool,
			tVideoGame,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/44618',
		[
			'Mondaiji-tachi ga Isekai kara Kuru Sou desu yo?: Onsen Manyuuki',
			'問題児たちが異世界から来るそうですよ? 〜温泉漫遊記〜',
			"Problem Children Are Coming from Another World, Aren't They? OVA"
		],
		[
			sDiomedéa
		],
		'OVA', 2, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tEcchi,
			tIsekai
		]
	),
	new Anime(
		'12/43369',
		[
			'Mondaiji-tachi ga Isekai kara Kuru Sou desu yo?',
			'問題児たちが異世界から来るそうですよ?',
			"Problem Children Are Coming from Another World, Aren't They?"
		],
		[
			sDiomedéa
		],
		'TV', 0, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tEcchi,
			tIsekai
		]
	),
	new Anime(
		'7/54343',
		[
			'Outbreak Company',
			'アウトブレイク・カンパニー'
		],
		[
			sFeel
		],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tHarem,
			tIsekai,
			tParody,
			tOtakuCulture
		]
	),
	new Anime(
		'11/78160',
		[
			'Hai to Gensou no Grimgar: Furoagari no Kabe ni Kaketa Seishun - One More Centimeter',
			'灰と幻想のグリムガル 「風呂上りの壁にかけた青春―one more センチメートル」',
			'Grimgar: Staking Our Youths on the Bath Wall - One More Centimeter'
		],
		[
			sA1Pictures
		],
		'Special', 0, 2016, 'Light novel', 0, 1,
		[
			tComedy,
			tFavoriteAnime
		]
	),
	new Anime(
		'13/77976',
		[
			'Hai to Gensou no Grimgar',
			'灰と幻想のグリムガル',
			'Grimgar: Ashes and Illusions'
		],
		[
			sA1Pictures
		],
		'TV', 0, 2016, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tDrama,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1758/141268',
		[
			'Kono Subarashii Sekai ni Shukufuku wo! 3',
			'この素晴らしい世界に祝福を！3',
			"KonoSuba: God's Blessing on This Wonderful World! 3"
		],
		[
			sDrive
		],
		'TV', 1, 2024, 'Light novel', 0, 0,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tParody,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1626/135844',
		[
			'Kono Subarashii Sekai ni Bakuen wo!',
			'この素晴らしい世界に爆焔を！',
			'KonoSuba: An Explosion on This Wonderful World!'
		],
		[
			sDrive
		],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'1129/117109',
		[
			'Kono Subarashii Sekai ni Shukufuku wo! Movie: Kurenai Densetsu',
			'映画 この素晴らしい世界に祝福を！紅伝説',
			"KonoSuba: God's Blessing on This Wonderful World! - Legend of Crimson"
		],
		[
			sJCStaff
		],
		'Movie', 2, 2019, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tParody,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1115/98517',
		[
			'Kono Subarashii Sekai ni Shukufuku wo! 2: Kono Subarashii Geijutsu ni Shukufuku wo!',
			'この素晴らしい世界に祝福を！2 この素晴らしい芸術に祝福を！',
			"KonoSuba: God's Blessing on This Wonderful World! 2 - God's Blessing on This Wonderful Art!"
		],
		[
			sStudioDeen
		],
		'OVA', 2, 2017, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tParody,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/83188',
		[
			'Kono Subarashii Sekai ni Shukufuku wo! 2',
			'この素晴らしい世界に祝福を！2',
			"KonoSuba: God's Blessing on This Wonderful World! 2"
		],
		[
			sStudioDeen
		],
		'TV', 0, 2017, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tParody,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1649/98516',
		[
			'Kono Subarashii Sekai ni Shukufuku wo! Kono Subarashii Choker ni Shukufuku wo!',
			'この素晴らしい世界に祝福を！ 第11話 この素晴らしいチヨーカーに祝福を！',
			"KonoSuba: God's Blessing on This Wonderful World! - God's Blessing on This Wonderful Choker!"
		],
		[
			sStudioDeen
		],
		'OVA', 1, 2016, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai,
			tParody,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'8/77831',
		[
			'Kono Subarashii Sekai ni Shukufuku wo!',
			'この素晴らしい世界に祝福を！',
			"KonoSuba: God's Blessing on This Wonderful World!"
		],
		[
			sStudioDeen
		],
		'TV', 0, 2016, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tParody,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1648/126110',
		[
			'Akuyaku Reijou nano de Last Boss wo Kattemimashita',
			'悪役令嬢なのでラスボスを飼ってみました',
			"I'm the Villainess, So I'm Taming the Final Boss"
		],
		[
			sMahoFilm
		],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tRomance,
			tIsekai,
			tReincarnation,
			tShoujo
		]
	),
	new Anime(
		'1585/95225',
		[
			'Hyakuren no Haou to Seiyaku no Valkyria',
			'百錬の覇王と聖約の戦乙女〈ヴァルキュリア〉',
			'The Master of Ragnarok & Blesser of Einherjar'
		],
		[
			sEMTSquared
		],
		'TV', 2, 2018, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tRomance,
			tHarem,
			tIsekai,
			tMilitary
		]
	),
	new Anime(
		'4/88911',
		[
			'Death March kara Hajimaru Isekai Kyousoukyoku',
			'デスマーチからはじまる異世界狂想曲',
			'Death March to the Parallel World Rhapsody'
		],
		[
			sSILVERLINK,
			sConnect
		],
		'TV', 0, 2018, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy,
			tHarem,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1261/100452',
		[
			'Kenja no Mago',
			'賢者の孫',
			"Wise Man's Grandchild"
		],
		[
			sSILVERLINK
		],
		'TV', 1, 2019, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tRomance,
			tIsekai,
			tReincarnation,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1325/129603',
		[
			'Akiba Meido Sensou',
			'アキバ冥途戦争',
			'Akiba Maid War'
		],
		[
			sPAWorks
		],
		'TV', 3, 2022, 'Original', 1, 1,
		[
			tAction,
			tComedy,
			tOrganizedCrime
		]
	),
	new Anime(
		'1736/103512',
		[
			'Hataage! Kemono Michi',
			'旗揚! けものみち',
			'Kemono Michi: Rise Up'
		],
		[
			sENGI
		],
		'TV', 3, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai,
			tShounen
		]
	),
	new Anime(
		'1651/128718',
		[
			'Futoku no Guild',
			'不徳のギルド',
			'Immoral Guild'
		],
		[
			sTNK
		],
		'TV', 3, 2022, 'Manga', 2, 1,
		[
			tComedy,
			tFantasy,
			tErotica,
			tHarem,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1824/99611',
		[
			'Isekai Cheat Magician: Yoiboshi no Matsuri to Majutsushi',
			'異世界チート魔術師 第13話「宵星の祭りと魔術師」'
		],
		[
			sEncourageFilms
		],
		'Special', 2, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1282/102248',
		[
			'Isekai Cheat Magician',
			'異世界チート魔術師〈マジシャン〉'
		],
		[
			sEncourageFilms
		],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1132/111619',
		[
			'Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!',
			'超人高校生たちは異世界でも余裕で生き抜くようです！',
			'CHOYOYU!: High School Prodigies Have It Easy Even in Another World!'
		],
		[
			sProjectNo9
		],
		'TV', 3, 2019, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tAction,
			tAdventure,
			tFavoriteAnime
		]
	),
	new Anime(
		'1205/111403',
		[
			'Watashi, Nouryoku wa Heikinchi de tte Itta yo ne!',
			'私、能力は平均値でって言ったよね!',
			"Didn't I Say to Make My Abilities Average in the Next Life?!"
		],
		[
			sProjectNo9
		],
		'TV', 3, 2019, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation
		]
	),
	new Anime(
		'1754/113897',
		[
			'Maou-sama, Retry!',
			'魔王様、リトライ！',
			'Demon Lord, Retry!'
		],
		[
			sEKACHIEPILKA
		],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai
		]
	),
	new Anime(
		'1715/103419',
		[
			'Shinchou Yuusha: Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru',
			'慎重勇者 ～この勇者が俺TUEEEくせに慎重すぎる～',
			'Cautious Hero: The Hero Is Overpowered but Overly Cautious'
		],
		[
			sWhiteFox
		],
		'TV', 3, 2019, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tParody
		]
	),
	new Anime(
		'1622/139331',
		[
			'Kage no Jitsuryokusha ni Naritakute! 2nd Season',
			'陰の実力者になりたくて！ 2nd Season',
			'The Eminence in Shadow Season 2'
		],
		[
			sNexus
		],
		'TV', 3, 2023, 'Light novel', 1, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1091/128729',
		[
			'Kage no Jitsuryokusha ni Naritakute!',
			'陰の実力者になりたくて！',
			'The Eminence in Shadow'
		],
		[
			sNexus
		],
		'TV', 3, 2022, 'Light novel', 1, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1976/122302',
		[
			'Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 3rd Season',
			'本好きの下剋上 ～司書になるためには手段を選んでいられません～ 第3期',
			'Ascendance of a Bookworm Season 3'
		],
		[
			sAjiado
		],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1464/107998',
		[
			'Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season',
			'本好きの下剋上 ～司書になるためには手段を選んでいられません～ 第2期',
			'Ascendance of a Bookworm Season 2'
		],
		[
			sAjiado
		],
		'TV', 1, 2020, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1931/114311',
		[
			'Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen OVA',
			'本好きの下剋上 ～司書になるためには手段を選んでいられません～ OVA',
			'Ascendance of a Bookworm: Side Story'
		],
		[
			sAjiado
		],
		'OVA', 0, 2020, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1582/101697',
		[
			'Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen',
			'本好きの下剋上 ～司書になるためには手段を選んでいられません～',
			'Ascendance of a Bookworm'
		],
		[
			sAjiado
		],
		'TV', 3, 2019, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1476/125643',
		[
			'Shinobi no Ittoki',
			'忍の一時'
		],
		[
			sTROYCA
		],
		'TV', 3, 2022, 'Original', 0, 1,
		[
			tAction,
			tSchool
		]
	),
	new Anime(
		'1068/124244',
		[
			'Arifureta Shokugyou de Sekai Saikyou: Maboroshi no Bouken to Kiseki no Kaigou',
			'ありふれた職業で世界最強 「幻の冒険と奇跡の邂逅」',
			'Arifureta: Phantom Adventure and Miraculous Encounter'
		],
		[
			sAsread,
			sStudioMOTHER
		],
		'OVA', 2, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tHarem,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1780/119657',
		[
			'Arifureta Shokugyou de Sekai Saikyou: Arifureta Yorimichi de Sekai Saikyou',
			'ありふれた職業で世界最強 ありふれた寄り道で世界最強',
			"Arifureta: From a Detour to the World's Strongest"
		],
		[
			sAsread,
			sStudioMOTHER
		],
		'Special', 0, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tHarem,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1877/119668',
		[
			'Arifureta Shokugyou de Sekai Saikyou 2nd Season',
			'ありふれた職業で世界最強 2nd Season',
			"Arifureta: From Commonplace to World's Strongest Season 2"
		],
		[
			sAsread,
			sStudioMOTHER
		],
		'TV', 0, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tHarem,
			tIsekai,
			tFavoriteOPSong,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1634/102577',
		[
			'Arifureta Shokugyou de Sekai Saikyou Specials',
			'ありふれた職業で世界最強',
			"Arifureta: From Commonplace to World's Strongest Specials"
		],
		[
			sAsread,
			sWhiteFox
		],
		'Special', 3, 2019, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tHarem,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1776/97682',
		[
			'Arifureta Shokugyou de Sekai Saikyou',
			'ありふれた職業で世界最強',
			"Arifureta: From Commonplace to World's Strongest"
		],
		[
			sAsread,
			sWhiteFox
		],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tHarem,
			tIsekai,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1269/110115',
		[
			'Kami no Tou',
			'神之塔 -Tower of God-',
			'Tower of God'
		],
		[
			sTelecomAnimationFilm
		],
		'TV', 1, 2020, 'Web manga', 0, 1,
		[
			tAction,
			tAdventure,
			tDrama,
			tFantasy,
			tMystery,
			tFavoriteOPSong,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1963/128728',
		[
			'Shinmai Renkinjutsushi no Tenpo Keiei',
			'新米錬金術師の店舗経営',
			'Management of a Novice Alchemist'
		],
		[
			sENGI
		],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy,
			tSliceOfLife,
			tFavoriteAnime
		]
	),
	new Anime(
		'1834/110718',
		[
			'Hachi-nan tte, Sore wa Nai deshou!',
			'八男って、それはないでしょう！',
			'The 8th son? Are you kidding me?'
		],
		[
			sSynergySP,
			sShinEiAnimation
		],
		'TV', 1, 2020, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tIsekai,
			tReincarnation
		]
	),
	new Anime(
		'1132/134608',
		[
			'Kuma Kuma Kuma Bear Punch!',
			'くまクマ熊ベアーぱーんち！'
		],
		[
			sEMTSquared
		],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1062/107803',
		[
			'Kuma Kuma Kuma Bear',
			'くま クマ 熊 ベアー'
		],
		[
			sEMTSquared
		],
		'TV', 3, 2020, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1854/114772',
		[
			'Infinite Dendrogram',
			'<Infinite Dendrogram>-インフィニット・デンドログラム-'
		],
		[
			sNAZ
		],
		'TV', 0, 2020, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tVideoGame,
			tFavoriteAnime
		]
	),
	new Anime(
		'1521/131469',
		[
			'Kami-tachi ni Hirowareta Otoko 2nd Season',
			'神達に拾われた男',
			'By the Grace of the Gods 2'
		],
		[
			sMahoFilm
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tFantasy,
			tSliceOfLife,
			tIsekai,
			tIyashikei,
			tReincarnation,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1654/108801',
		[
			'Kami-tachi ni Hirowareta Otoko',
			'神達に拾われた男',
			'By the Grace of the Gods'
		],
		[
			sMahoFilm
		],
		'TV', 3, 2020, 'Light novel', 0, 1,
		[
			tFantasy,
			tSliceOfLife,
			tIsekai,
			tIyashikei,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1782/128859',
		[
			'Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu. 2',
			'痛いのは嫌なので防御力に極振りしたいと思います。2',
			"BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense. Season 2"
		],
		[
			sSILVERLINK
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tVideoGame,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1579/113812',
		[
			'Itai no wa Iya nanode Bougyoryoku ni Kyokufuri Shitai to Omoimasu.',
			'痛いのは嫌なので防御力に極振りしたいと思います。',
			"BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense."
		],
		[
			sSILVERLINK
		],
		'TV', 0, 2020, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tVideoGame,
			tFavoriteAnime
		]
	),
	new Anime(
		'1084/126652',
		[
			'Yuusha Party wo Tsuihou sareta Beast Tamer, Saikyoushu no Nekomimi Shoujo to Deau',
			'勇者パーティーを追放されたビーストテイマー、最強種の猫耳少女と出会う',
			'Beast Tamer'
		],
		[
			sEMTSquared
		],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tHarem,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1587/141789',
		[
			'Tensei shitara Slime Datta Ken 3rd Season',
			'転生したらスライムだった件 第3期',
			'That Time I Got Reincarnated as a Slime Season 3'
		],
		[
			s8bit
		],
		'TV', 1, 2024, 'Manga', 0, 0,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation,
			tShounen,
			tFavoriteAnime,
			tFavoriteOPSong
		]
	),
	new Anime(
		'1092/142426',
		[
			'Tensei shitara Slime Datta Ken 3rd Season: Kanwa - Diablo Nikki',
			'転生したらスライムだった件 閑話: ディアブロ日記',
			"That Time I Got Reincarnated as a Slime Season 3: Digression - Diablo's Journal"
		],
		[
			s8bit
		],
		'TV', 0, 2024, 'Manga', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1570/135813',
		[
			'Tensei shitara Slime Datta Ken: Coleus no Yume',
			'転生したらスライムだった件 コリウスの夢',
			'That Time I Got Reincarnated as a Slime: Visions of Coleus'
		],
		[
			s8bit
		],
		'OVA', 3, 2023, 'Manga', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tShounen,
			tReincarnation,
			tFavoriteOPSong,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1745/128238',
		[
			'Tensei shitara Slime Datta Ken Movie: Guren no Kizuna-hen',
			'劇場版 転生したらスライムだった件 紅蓮の絆編',
			'That Time I Got Reincarnated as a Slime: The Movie - Scarlet Bond'
		],
		[
			s8bit
		],
		'Movie', 3, 2022, 'Manga', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tShounen,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1033/118296',
		[
			'Tensei shitara Slime Datta Ken 2nd Season Part 2',
			'転生したらスライムだった件',
			'That Time I Got Reincarnated as a Slime Season 2 Part 2'
		],
		[
			s8bit
		],
		'TV', 2, 2021, 'Manga', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1458/117607',
		[
			'Tensura Nikki: Tensei shitara Slime Datta Ken',
			'転スラ日記 転生したらスライムだった件',
			'The Slime Diaries'
		],
		[
			s8bit
		],
		'TV', 1, 2021, 'Manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1530/106442',
		[
			'Tensei shitara Slime Datta Ken 2nd Season',
			'転生したらスライムだった件',
			'That Time I Got Reincarnated as a Slime Season 2'
		],
		[
			s8bit
		],
		'TV', 0, 2021, 'Manga', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation,
			tShounen,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1116/104615',
		[
			'Tensei shitara Slime Datta Ken OVA',
			'転生したらスライムだった件 OVA',
			'That Time I Got Reincarnated as a Slime OAD'
		],
		[
			s8bit
		],
		'OVA', 2, 2019, 'Manga', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1069/123309',
		[
			'Tensei shitara Slime Datta Ken',
			'転生したらスライムだった件',
			'That Time I Got Reincarnated as a Slime'
		],
		[
			s8bit
		],
		'TV', 3, 2018, 'Manga', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1384/127328',
		[
			'Noumin Kanren no Skill bakka Agetetara Nazeka Tsuyoku Natta.',
			'農民関連のスキルばっか上げてたら何故か強くなった。',
			"I've Somehow Gotten Stronger When I Improved My Farm-Related Skills"
		],
		[
			sStudioACAT
		],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy
		]
	),
	new Anime(
		'1752/139314',
		[
			'Tsuki ga Michibiku Isekai Douchuu 2nd Season',
			'月が導く異世界道中 第二幕',
			'Tsukimichi -Moonlit Fantasy- Season 2'
		],
		[
			sJCStaff
		],
		'TV', 0, 2024, 'Light novel', 0, 0,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tFavoriteAnime,
			tFavoriteOPSong,
			tFavoriteEDSong
		]
	),
	new Anime(
		'1950/116474',
		[
			'Tsuki ga Michibiku Isekai Douchuu',
			'月が導く異世界道中',
			'Tsukimichi -Moonlit Fantasy-'
		],
		[
			sC2C
		],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1928/117620',
		[
			'Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru',
			'世界最高の暗殺者、異世界貴族に転生する',
			"The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat"
		],
		[
			sSILVERLINK,
			sStudioPalette
		],
		'TV', 3, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tDrama,
			tFantasy,
			tMystery,
			tRomance,
			tIsekai,
			tReincarnation,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1862/128297',
		[
			'Shin Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei',
			'真・進化の実～知らないうちに勝ち組人生～',
			'The Fruit of Evolution: Before I Knew It, My Life Had It Made Season 2'
		],
		[
			sHotline
		],
		'TV', 0, 2023, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy,
			tRomance,
			tHarem,
			tIsekai
		]
	),
	new Anime(
		'1537/117590',
		[
			'Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei',
			'進化の実～知らないうちに勝ち組人生～',
			'The Fruit of Evolution: Before I Knew It, My Life Had It Made'
		],
		[
			sHotline
		],
		'TV', 3, 2021, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy,
			tRomance,
			tHarem,
			tIsekai
		]
	),
	new Anime(
		'1836/116060',
		[
			'Seirei Gensouki',
			'精霊幻想記',
			'Seirei Gensouki: Spirit Chronicles'
		],
		[
			sTMSEntertainment
		],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tRomance,
			tHarem,
			tIsekai,
			tReincarnation,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1593/113724',
		[
			'Kumo desu ga, Nani ka?',
			'蜘蛛ですが、なにか？',
			"So I'm a Spider, So What?"
		],
		[
			sMillepensee
		],
		'TV', 0, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tComedy,
			tFantasy,
			tMystery,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1777/117885',
		[
			'Isekai Shokudou 2',
			'異世界食堂 2',
			'Restaurant to Another World 2'
		],
		[
			sOLM
		],
		'TV', 3, 2021, 'Light novel', 0, 1,
		[
			tFantasy,
			tGourmet,
			tSliceOfLife,
			tIsekai,
			tIyashikei,
			tWorkplace,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'3/86666',
		[
			'Isekai Shokudou',
			'異世界食堂',
			'Restaurant to Another World'
		],
		[
			sSILVERLINK
		],
		'TV', 2, 2017, 'Light novel', 0, 1,
		[
			tFantasy,
			tGourmet,
			tSliceOfLife,
			tIsekai,
			tIyashikei,
			tWorkplace,
			tFavoriteAnime
		]
	),
	new Anime(
		'1191/127909',
		[
			'Tensei shitara Ken deshita',
			'転生したら剣でした',
			'Reincarnated as a Sword'
		],
		[
			sC2C
		],
		'TV', 3, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1876/141251',
		[
			'Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2',
			'無職転生 II ～異世界行ったら本気だす～ (第2クール)',
			'Mushoku Tensei: Jobless Reincarnation Season 2 Part 2'
		],
		[
			sStudioBind
		],
		'TV', 1, 2024, 'Light novel', 1, 0,
		[
			tAdventure,
			tDrama,
			tFantasy,
			tEcchi,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1898/138005',
		[
			'Mushoku Tensei II: Isekai Ittara Honki Dasu',
			'無職転生 II ～異世界行ったら本気だす～',
			'Mushoku Tensei: Jobless Reincarnation Season 2'
		],
		[
			sStudioBind
		],
		'TV', 2, 2023, 'Light novel', 1, 1,
		[
			tAdventure,
			tDrama,
			tFantasy,
			tEcchi,
			tIsekai,
			tReincarnation,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1627/136934',
		[
			'Mushoku Tensei II: Isekai Ittara Honki Dasu - Shugo Jutsushi Fitz',
			'無職転生Ⅱ ～異世界行ったら本気だす～ 第0話「守護術師フィッツ」'
		],
		[
			sStudioBind
		],
		'Special', 2, 2023, 'Light novel', 1, 1,
		[
			tAdventure,
			tDrama,
			tFantasy,
			tEcchi,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1094/120148',
		[
			'Mushoku Tensei: Isekai Ittara Honki Dasu - Eris no Goblin Toubatsu',
			'無職転生 ～異世界行ったら本気だす～ エリスのゴブリン討伐',
			'Mushoku Tensei: Jobless Reincarnation - Eris the Goblin Slayer'
		],
		[
			sStudioBind
		],
		'Special', 0, 2022, 'Light novel', 1, 1,
		[
			tDrama,
			tFantasy,
			tEcchi,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1028/117777',
		[
			'Mushoku Tensei: Isekai Ittara Honki Dasu Part 2',
			'無職転生 ～異世界行ったら本気だす～ 第2クール',
			'Mushoku Tensei: Jobless Reincarnation Part 2'
		],
		[
			sStudioBind
		],
		'TV', 3, 2021, 'Light novel', 1, 1,
		[
			tAdventure,
			tDrama,
			tFantasy,
			tEcchi,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1530/117776',
		[
			'Mushoku Tensei: Isekai Ittara Honki Dasu',
			'無職転生 ～異世界行ったら本気だす～',
			'Mushoku Tensei: Jobless Reincarnation'
		],
		[
			sStudioBind
		],
		'TV', 0, 2021, 'Light novel', 1, 1,
		[
			tAdventure,
			tDrama,
			tFantasy,
			tEcchi,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1510/108026',
		[
			'Log Horizon: Entaku Houkai',
			'ログ・ホライズン 円卓崩壊',
			'Log Horizon: Destruction of the Round Table'
		],
		[
			sStudioDeen
		],
		'TV', 0, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tVideoGame,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'5/68097',
		[
			'Log Horizon 2nd Season',
			'ログ・ホライズン 第2シリーズ',
			'Log Horizon 2'
		],
		[
			sStudioDeen
		],
		'TV', 3, 2014, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tVideoGame,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'5/84004',
		[
			'Log Horizon',
			'ログ・ホライズン'
		],
		[
			sSatelight
		],
		'TV', 3, 2013, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tVideoGame,
			tAdultCast,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1088/120068',
		[
			'Genjitsu Shugi Yuusha no Oukoku Saikenki Part 2',
			'現実主義勇者の王国再建記',
			'How a Realist Hero Rebuilt the Kingdom Part 2'
		],
		[
			sJCStaff
		],
		'TV', 0, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tHarem,
			tIsekai,
			tMilitary
		]
	),
	new Anime(
		'1297/118764',
		[
			'Genjitsu Shugi Yuusha no Oukoku Saikenki',
			'現実主義勇者の王国再建記',
			'How a Realist Hero Rebuilt the Kingdom'
		],
		[
			sJCStaff
		],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tHarem,
			tIsekai,
			tMilitary
		]
	),
	new Anime(
		'1357/113277',
		[
			'Kyuukyoku Shinka shita Full Dive RPG ga Genjitsu yori mo Kusoge Dattara',
			'究極進化したフルダイブRPGが現実よりもクソゲーだったら',
			'Full Dive: The Ultimate Next-Gen Full Dive RPG Is Even Shittier than Real Life!'
		],
		[
			sENGI
		],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tComedy,
			tFantasy,
			tVideoGame
		]
	),
	new Anime(
		'1787/115817',
		[
			'Cheat Kusushi no Slow Life: Isekai ni Tsukurou Drugstore',
			'チート薬師のスローライフ～異世界に作ろうドラッグストア～',
			'Drug Store in Another World: The Slow Life of a Cheat Pharmacist'
		],
		[
			sEMTSquared
		],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tHarem,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1161/121462',
		[
			'Otome Game Sekai wa Mob ni Kibishii Sekai desu',
			'乙女ゲー世界はモブに厳しい世界です',
			'Trapped in a Dating Sim: The World of Otome Games is Tough for Mobs'
		],
		[
			sENGI
		],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tRomance,
			tHarem,
			tIsekai,
			tMecha,
			tReincarnation,
			tSchool
		]
	),
	new Anime(
		'1361/120706',
		[
			'Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu',
			'骸骨騎士様、只今異世界へお出掛け中',
			'Skeleton Knight in Another World'
		],
		[
			sStudioKai,
			sHORNETS
		],
		'TV', 1, 2022, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tIsekai,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1743/125204',
		[
			'Isekai Ojisan',
			'異世界おじさん',
			'Uncle from Another World'
		],
		[
			sAtelierPontdarc
		],
		'TV', 2, 2022, 'Web manga', 0, 1,
		[
			tComedy,
			tFantasy,
			tAdultCast,
			tIsekai,
			tOtakuCulture,
			tParody,
			tFavoriteAnime
		]
	),
	new Anime(
		'1583/119223',
		[
			'Kenja no Deshi wo Nanoru Kenja',
			'賢者の弟子を名乗る賢者',
			'She Professed Herself Pupil of the Wise Man'
		],
		[
			sStudioACAT
		],
		'TV', 0, 2022, 'Light novel', 0, 1,
		[
			tAdventure,
			tFantasy,
			tIsekai,
			tGenben
		]
	),
	new Anime(
		'1430/120065',
		[
			'Fantasy Bishoujo Juniku Ojisan to',
			'異世界美少女受肉おじさんと',
			'Life with an Ordinary Guy who Reincarnated into a Total Fantasy Knockout'
		],
		[
			sOLMTeamYoshioka
		],
		'TV', 0, 2022, 'Web manga', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tIsekai,
			tGenben,
			tParody,
			tFavoriteAnime
		]
	),
	new Anime(
		'1906/117145',
		[
			'Princess Connect! Re:Dive Season 2',
			'プリンセスコネクト! Re:Dive Season 2'
		],
		[
			sCygamesPictures
		],
		'TV', 0, 2022, 'Game', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tGourmet,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1810/106070',
		[
			'Princess Connect! Re:Dive',
			'プリンセスコネクト！Re:Dive'
		],
		[
			sCygamesPictures
		],
		'TV', 1, 2020, 'Game', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tGourmet,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1904/120095',
		[
			'Shijou Saikyou no Daimaou, Murabito A ni Tensei suru',
			'史上最強の大魔王、村人Aに転生する',
			'The Greatest Demon Lord Is Reborn as a Typical Nobody'
		],
		[
			sSILVERLINK,
			sBlade
		],
		'TV', 1, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tHarem,
			tReincarnation,
			tSchool
		]
	),
	new Anime(
		'1226/131884',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen',
			'ダンジョンに出会いを求めるのは間違っているだろうかⅣ深章 厄災篇',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? IV Part 2'
		],
		[
			sJCStaff
		],
		'TV', 0, 2023, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'1318/126474',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou - Meikyuu-hen',
			'ダンジョンに出会いを求めるのは間違っているだろうかⅣ 新章 迷宮篇',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? IV'
		],
		[
			sJCStaff
		],
		'TV', 2, 2022, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'1767/110800',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III OVA',
			'ダンジョンに出会いを求めるのは間違っているだろうかⅢ OVA',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? III: Is It Wrong to Try to Find a Hot Spring in Orario?'
		],
		[
			sJCStaff
		],
		'OVA', 1, 2021, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tEcchi,
			tFavoriteAnime
		]
	),
	new Anime(
		'1523/108380',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III',
			'ダンジョンに出会いを求めるのは間違っているだろうかIII',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? III'
		],
		[
			sJCStaff
		],
		'TV', 3, 2020, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'1360/111696',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II OVA',
			'ダンジョンに出会いを求めるのは間違っているだろうか 2期 OVA',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? II: Is It Wrong to go Searching for Herbs on a Deserted Island?'
		],
		[
			sJCStaff
		],
		'OVA', 0, 2020, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tEcchi,
			tFavoriteAnime
		]
	),
	new Anime(
		'1730/101329',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II',
			'ダンジョンに出会いを求めるのは間違っているだろうかII',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? II'
		],
		[
			sJCStaff
		],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'1239/96949',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Movie: Orion no Ya',
			'劇場版 ダンジョンに出会いを求めるのは間違っているだろうか -オリオンの矢-',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon?: Arrow of the Orion'
		],
		[
			sJCStaff
		],
		'Movie', 0, 2019, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'1181/123312',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Gaiden: Sword Oratoria',
			'ダンジョンに出会いを求めるのは間違っているだろうか外伝 ソード・オラトリア',
			'Sword Oratoria: Is It Wrong to Try to Pick Up Girls in a Dungeon? On the Side'
		],
		[
			sJCStaff
		],
		'TV', 1, 2017, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'9/81432',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka OVA',
			'ダンジョンに出会いを求めるのは間違っているだろうか OVA「ダンジョンに温泉を求めるのは 間違っているだろうか」',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon?: Is It Wrong to Expect a Hot Spring in a Dungeon?'
		],
		[
			sJCStaff
		],
		'OVA', 3, 2016, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tEcchi,
			tFavoriteAnime
		]
	),
	new Anime(
		'2/70187',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka',
			'ダンジョンに出会いを求めるのは間違っているだろうか',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon?'
		],
		[
			sJCStaff
		],
		'TV', 1, 2015, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'1011/113703',
		[
			'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Ω',
			'異世界魔王と召喚少女の奴隷魔術Ω',
			'How Not to Summon a Demon Lord Ω'
		],
		[
			sTezukaProductions,
			sOkurutoNoboru
		],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tEcchi,
			tHarem,
			tIsekai
		]
	),
	new Anime(
		'1649/93412',
		[
			'Isekai Maou to Shoukan Shoujo no Dorei Majutsu',
			'異世界魔王と召喚少女の奴隷魔術',
			'How Not to Summon a Demon Lord'
		],
		[
			sAjiado
		],
		'TV', 2, 2018, 'Light novel', 0, 1,
		[
			tAction,
			tFantasy,
			tEcchi,
			tHarem,
			tIsekai
		]
	),
	new Anime(
		'1436/116410',
		[
			'Megami-ryou no Ryoubo-kun.',
			'女神寮の寮母くん。',
			"Mother of the Goddess' Dormitory"
		],
		[
			sAsread
		],
		'TV', 2, 2021, 'Manga', 2, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tShounen
		]
	),
	new Anime(
		'1424/117718',
		[
			'100-man no Inochi no Ue ni Ore wa Tatteiru 2nd Season',
			'100万の命の上に俺は立っている',
			'I’m Standing on a Million Lives Season 2'
		],
		[
			sMahoFilm
		],
		'TV', 2, 2021, 'Manga', 0, 1,
		[
			tAction,
			tDrama,
			tFantasy,
			tIsekai,
			tSurvival,
			tShounen,
			tFavoriteEDSong
		]
	),
	new Anime(
		'1506/117717',
		[
			'100-man no Inochi no Ue ni Ore wa Tatteiru',
			'100万の命の上に俺は立っている',
			"I'm Standing on a Million Lives"
		],
		[
			sMahoFilm
		],
		'TV', 3, 2020, 'Manga', 0, 1,
		[
			tAction,
			tDrama,
			tFantasy,
			tIsekai,
			tSurvival,
			tShounen,
			tFavoriteEDSong
		]
	),
	new Anime(
		'1932/131464',
		[
			'Isekai wa Smartphone to Tomo ni. 2',
			'異世界はスマートフォンとともに。',
			'In Another World With My Smartphone 2'
		],
		[
			sJCStaff
		],
		'TV', 1, 2023, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tRomance,
			tHarem,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'7/86794',
		[
			'Isekai wa Smartphone to Tomo ni.',
			'異世界はスマートフォンとともに。',
			'In Another World With My Smartphone'
		],
		[
			sProductionReed
		],
		'TV', 2, 2017, 'Light novel', 0, 1,
		[
			tAdventure,
			tComedy,
			tFantasy,
			tRomance,
			tHarem,
			tIsekai,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1561/125302',
		[
			'Kinsou no Vermeil: Gakeppuchi Majutsushi wa Saikyou no Yakusai to Mahou Sekai wo Tsukisusumu',
			'金装のヴェルメイユ ～崖っぷち魔術師は最強の厄災と魔法世界を突き進む～',
			'Vermeil in Gold'
		],
		[
			sStapleEntertainment
		],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			tFantasy,
			tEcchi,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1436/124788',
		[
			'Tensei Kenja no Isekai Life: Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita',
			'転生賢者の異世界ライフ ～第二の職業を得て、世界最強になりました～',
			'My Isekai Life: I Gained a Second Character Class and Became the Strongest Sage in the World'
		],
		[
			sRevoroot
		],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1549/125495',
		[
			'Engage Kiss'
		],
		[
			sA1Pictures
		],
		'TV', 2, 2022, 'Original', 0, 1,
		[
			tAction,
			tComedy,
			tRomance
		]
	),
	new Anime(
		'1392/136670',
		[
			'Hataraku Maou-sama!! 2nd Season',
			'はたらく魔王さま！！',
			'The Devil is a Part-Timer! Season 2 (Sequel)'
		],
		[
			sStudio3Hz
		],
		'TV', 2, 2023, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tMythology,
			tRomanticSubtext,
			tWorkplace
		]
	),
	new Anime(
		'1502/124354',
		[
			'Hataraku Maou-sama!!',
			'はたらく魔王さま！！',
			'The Devil is a Part-Timer! Season 2'
		],
		[
			sStudio3Hz
		],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tMythology,
			tRomanticSubtext,
			tWorkplace
		]
	),
	new Anime(
		'3/50177',
		[
			'Hataraku Maou-sama!',
			'はたらく魔王さま!',
			'The Devil is a Part-Timer!'
		],
		[
			sWhiteFox
		],
		'TV', 1, 2013, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tMythology,
			tRomanticSubtext,
			tWorkplace
		]
	),
	new Anime(
		'1022/123845',
		[
			'Saikin Yatotta Maid ga Ayashii',
			'最近雇ったメイドが怪しい',
			'The Maid I Hired Recently Is Mysterious'
		],
		[
			sSILVERLINK,
			sBlade
		],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tShounen
		]
	),
	new Anime(
		'1120/124644',
		[
			'Isekai Yakkyoku',
			'異世界薬局',
			'Parallel World Pharmacy'
		],
		[
			sDiomedéa
		],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			tFantasy,
			tIsekai,
			tMedical,
			tReincarnation,
			tFavoriteAnime
		]
	),
	new Anime(
		'1261/127311',
		[
			'Lycoris Recoil',
			'リコリス・リコイル'
		],
		[
			sA1Pictures
		],
		'TV', 2, 2022, 'Original', 0, 1,
		[
			tAction,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1132/120388',
		[
			'Shikkakumon no Saikyou Kenja',
			'失格紋の最強賢者',
			'The Strongest Sage with the Weakest Crest'
		],
		[
			sJCStaff
		],
		'TV', 0, 2022, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tReincarnation
		]
	),
	new Anime(
		'1988/115708',
		[
			'Ore dake Haireru Kakushi Dungeon',
			'俺だけ入れる隠しダンジョン',
			'The Hidden Dungeon Only I Can Enter'
		],
		[
			sOkurutoNoboru
		],
		'TV', 0, 2021, 'Light novel', 0, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tEcchi,
			tHarem
		]
	),
	new Anime(
		'1109/118948',
		[
			'Rikei ga Koi ni Ochita no de Shoumei shitemita. Heart',
			'理系が恋に落ちたので証明してみた。r=1-sinθ（ハート）',
			'Science Fell in Love, So I Tried to Prove It r=1-sinθ'
		],
		[
			sZeroG
		],
		'TV', 1, 2022, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tAdultCast,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1432/103533',
		[
			'Rikei ga Koi ni Ochita no de Shoumei shitemita.',
			'理系が恋に落ちたので証明してみた。',
			'Science Fell in Love, So I Tried to Prove It'
		],
		[
			sZeroG
		],
		'TV', 0, 2020, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tAdultCast,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1696/136634',
		[
			'Kanojo, Okarishimasu 3rd Season',
			'彼女、お借りします',
			'Rent-a-Girlfriend Season 3'
		],
		[
			sTMSEntertainment
		],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tShounen,
			tAdultCast,
			tHarem
		]
	),
	new Anime(
		'1070/124592',
		[
			'Kanojo, Okarishimasu 2nd Season',
			'彼女、お借りします',
			'Rent-a-Girlfriend Season 2'
		],
		[
			sTMSEntertainment
		],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tShounen,
			tAdultCast,
			tHarem
		]
	),
	new Anime(
		'1902/128382',
		[
			'Kanojo, Okarishimasu',
			'彼女、お借りします',
			'Rent-a-Girlfriend'
		],
		[
			sTMSEntertainment
		],
		'TV', 2, 2020, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tShounen
		]
	),
	new Anime(
		'1396/109465',
		[
			'Kamisama ni Natta Hi',
			'神様になった日',
			'The Day I Became a God'
		],
		[
			sPAWorks
		],
		'TV', 3, 2020, 'Original', 0, 1,
		[
			tDrama,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'1871/118309',
		[
			'Bokutachi no Remake',
			'ぼくたちのリメイク',
			'Remake Our Life!'
		],
		[
			sFeel
		],
		'TV', 2, 2021, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tTimeTravel,
			tAdultCast,
			tFavoriteAnime
		]
	),
	new Anime(
		'1007/136277',
		[
			'Horimiya: Piece',
			'ホリミヤ -piece-',
			'Horimiya: The Missing Pieces'
		],
		[
			sCloverWorks
		],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			tRomance,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1695/111486',
		[
			'Horimiya',
			'ホリミヤ'
		],
		[
			sCloverWorks
		],
		'TV', 0, 2021, 'Manga', 0, 1,
		[
			tRomance,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1146/113477',
		[
			'Hige wo Soru. Soshite Joshikousei wo Hirou.',
			'ひげを剃る。そして女子高生を拾う。',
			'Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway'
		],
		[
			sProjectNo9
		],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance
		]
	),
	new Anime(
		'1143/140807',
		[
			'Jaku-Chara Tomozaki-kun 2nd Stage',
			'弱キャラ友崎くん 2nd STAGE',
			'Bottom-Tier Character Tomozaki 2nd Stage'
		],
		[
			sProjectNo9
		],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tFavoriteOPSong,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1892/114853',
		[
			'Jaku-Chara Tomozaki-kun Specials',
			'弱キャラ友崎くん',
			'Bottom-Tier Character Tomozaki Specials'
		],
		[
			sProjectNo9
		],
		'Special', 1, 2021, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'1120/109232',
		[
			'Jaku-Chara Tomozaki-kun',
			'弱キャラ友崎くん',
			'Bottom-Tier Character Tomozaki'
		],
		[
			sProjectNo9
		],
		'TV', 0, 2021, 'Light novel', 0, 1,
		[
			tDrama,
			tRomance,
			tSchool,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1430/102439',
		[
			'Kawaikereba Hentai demo Suki ni Natte Kuremasu ka?',
			'可愛ければ変態でも好きになってくれますか？',
			"Hensuki: Are you willing to Fall in Love with a Pervert, as long as she's a Cutie?"
		],
		[
			sGeekToys
		],
		'TV', 2, 2019, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tEcchi,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'1155/106799',
		[
			'Ore wo Suki nano wa Omae dake ka yo: Oretachi no Game Set',
			'俺を好きなのはお前だけかよ ～俺たちのゲームセット～',
			'ORESUKI Are you the only one who loves me? - Our Playball / Our End Run / Our Game'
		],
		[
			sConnect
		],
		'OVA', 2, 2020, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool
		]
	),
	new Anime(
		'1348/102797',
		[
			'Ore wo Suki nano wa Omae dake ka yo',
			'俺を好きなのはお前だけかよ',
			'ORESUKI Are you the only one who loves me?'
		],
		[
			sConnect
		],
		'TV', 3, 2019, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool
		]
	),
	new Anime(
		'9/66871',
		[
			'Gekkan Shoujo Nozaki-kun Specials',
			'月刊少女野崎くん ミニOVA',
			"Monthly Girls' Nozaki-kun Specials"
		],
		[
			sDogaKobo
		],
		'Special', 2, 2014, '4-koma manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'5/66083',
		[
			'Gekkan Shoujo Nozaki-kun',
			'月刊少女野崎くん',
			"Monthly Girls' Nozaki-kun"
		],
		[
			sDogaKobo
		],
		'TV', 2, 2014, '4-koma manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tOtakuCulture,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1111/113327',
		[
			'Osananajimi ga Zettai ni Makenai Love Comedy',
			'幼なじみが絶対に負けないラブコメ',
			"Osamake: Romcom Where The Childhood Friend Won't Lose"
		],
		[
			sDogaKobo
		],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1995/121695',
		[
			'Kawaii dake ja Nai Shikimori-san',
			'可愛いだけじゃない式守さん',
			"Shikimori's Not Just a Cutie"
		],
		[
			sDogaKobo
		],
		'TV', 1, 2022, 'Web manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'4/86828',
		[
			'Gamers!',
			'ゲーマーズ！'
		],
		[
			sPINEJAM
		],
		'TV', 2, 2017, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tVideoGame,
			tOtakuCulture,
			tFavoriteAnime
		]
	),
	new Anime(
		'1285/120529',
		[
			'Kakkou no Iinazuke',
			'カッコウの許嫁',
			'A Couple of Cuckoos'
		],
		[
			sSynergySP,
			sShinEiAnimation
		],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tShounen,
			tFavoriteOPSong,
			tFavoriteEDSong
		]
	),
	new Anime(
		'1045/123711',
		[
			'Yofukashi no Uta',
			'よふかしのうた',
			'Call of the Night'
		],
		[
			sLIDENFILMS
		],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			tRomance,
			tSupernatural,
			tShounen,
			tVampire,
			tFavoriteOPSong,
			tFavoriteOPVisual
		]
	),
	new Anime(
		'1332/139318',
		[
			'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season',
			'ようこそ実力至上主義の教室へ 3rd Season',
			'Classroom of the Elite III'
		],
		[
			sLerche
		],
		'TV', 0, 2024, 'Light novel', 0, 1,
		[
			tDrama,
			tPsychological,
			tSchool,
			tSuspense,
			tFavoriteEDSong
		]
	),
	new Anime(
		'1010/124180',
		[
			'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 2nd Season',
			'ようこそ実力至上主義の教室へ 2nd Season',
			'Classroom of the Elite II'
		],
		[
			sLerche
		],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			tDrama,
			tPsychological,
			tSchool,
			tSuspense,
			tFavoriteEDSong
		]
	),
	new Anime(
		'5/86830',
		[
			'Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e',
			'ようこそ実力至上主義の教室へ',
			'Classroom of the Elite'
		],
		[
			sLerche
		],
		'TV', 2, 2017, 'Light novel', 0, 1,
		[
			tDrama,
			tPsychological,
			tSchool,
			tSuspense
		]
	),
	new Anime(
		'2/76368',
		[
			'Danchigai: Juusan Goutou Sentou Ikitai!!',
			'だんちがい 十三号棟 銭湯行きたいー!!'
		],
		[
			sCreatorsinPack
		],
		'Special', 2, 2015, '4-koma manga', 0, 1,
		[
			tComedy,
			tSliceOfLife
		]
	),
	new Anime(
		'7/74879',
		[
			'Danchigai',
			'だんちがい'
		],
		[
			sCreatorsinPack
		],
		'TV', 2, 2015, '4-koma manga', 0, 1,
		[
			tComedy,
			tSliceOfLife,
			tIyashikei
		]
	),
	new Anime(
		'1667/135587',
		[
			'Masamune-kun no Revenge R',
			'政宗くんのリベンジR',
			"Masamune-kun's Revenge R"
		],
		[
			sSILVERLINK
		],
		'TV', 2, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1348/92408',
		[
			'Masamune-kun no Revenge: Uchi no Mama ni Kagitte/Tsunade Shima, Futatabi./12-Ji wo Sugita Cinderella',
			'政宗くんのリベンジ OVA',
			"Masamune-kun's Revenge OVA"
		],
		[
			sSILVERLINK
		],
		'OVA', 2, 2018, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'12/83709',
		[
			'Masamune-kun no Revenge',
			'政宗くんのリベンジ',
			"Masamune-kun's Revenge"
		],
		[
			sSILVERLINK
		],
		'TV', 0, 2017, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen
		]
	),
	new Anime(
		'1922/136453',
		[
			'Tonikaku Kawaii: Joshikou-hen',
			'トニカクカワイイ 女子高編',
			'TONIKAWA: Over The Moon For You - High School Days'
		],
		[
			sSevenArcs
		],
		'ONA', 2, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tShounen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1996/133361',
		[
			'Tonikaku Kawaii 2nd Season',
			'トニカクカワイイ',
			'TONIKAWA: Over The Moon For You Season 2'
		],
		[
			sSevenArcs
		],
		'TV', 1, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tShounen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1085/126580',
		[
			'Tonikaku Kawaii: Seifuku',
			'トニカクカワイイ ~制服~',
			'Tonikawa: Over the Moon for You - Uniform'
		],
		[
			sSevenArcs
		],
		'Special', 3, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1765/122768',
		[
			'Tonikaku Kawaii: SNS',
			'トニカクカワイイ 〜SNS〜',
			'TONIKAWA: Over The Moon For You - SNS'
		],
		[
			sSevenArcs
		],
		'OVA', 2, 2021, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1613/108722',
		[
			'Tonikaku Kawaii',
			'トニカクカワイイ',
			'TONIKAWA: Over The Moon For You'
		],
		[
			sSevenArcs
		],
		'TV', 3, 2020, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tShounen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1751/98216',
		[
			'Senryuu Shoujo',
			'川柳少女',
			'Senryu Girl'
		],
		[
			sConnect
		],
		'TV', 1, 2019, '4-koma manga', 0, 1,
		[
			tComedy,
			tSliceOfLife,
			tSchool,
			tShounen,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1567/135752',
		[
			'5-toubun no Hanayome∽',
			'五等分の花嫁∽',
			'The Quintessential Quintuplets~'
		],
		[
			sShaft
		],
		'Special', 2, 2023, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1506/113668',
		[
			'5-toubun no Hanayome Movie',
			'映画 五等分の花嫁',
			'The Quintessential Quintuplets Movie'
		],
		[
			sBiburyAnimationStudios
		],
		'Movie', 1, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1775/109514',
		[
			'5-toubun no Hanayome ∬',
			'五等分の花嫁∬',
			'The Quintessential Quintuplets 2'
		],
		[
			sBiburyAnimationStudios
		],
		'TV', 0, 2021, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteOPVisual,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1819/97947',
		[
			'5-toubun no Hanayome',
			'五等分の花嫁',
			'The Quintessential Quintuplets'
		],
		[
			sTezukaProductions
		],
		'TV', 0, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1917/108615',
		[
			'Bokutachi wa Benkyou ga Dekinai! Chapel no Kane wa [X] wo Shukufuku Suru',
			'ぼくたちは勉強ができない！「チャペルの鐘は[X]を祝福する」'
		],
		[
			sSilver,
			sArvoAnimation
		],
		'OVA', 1, 2020, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1530/102782',
		[
			'Bokutachi wa Benkyou ga Dekinai: Nagisa ni Usemono Arite Senjin wa Enzen to [X] Suru',
			'ぼくたちは勉強ができない「渚に失せものありて先人は艶然と[X]する」'
		],
		[
			sSilver,
			sArvoAnimation
		],
		'OVA', 3, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1974/102960',
		[
			'Bokutachi wa Benkyou ga Dekinai!',
			'ぼくたちは勉強ができない！',
			'We Never Learn!: BOKUBEN Season 2'
		],
		[
			sSilver,
			sArvoAnimation
		],
		'TV', 3, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1602/100510',
		[
			'Bokutachi wa Benkyou ga Dekinai',
			'ぼくたちは勉強ができない',
			'We Never Learn: BOKUBEN'
		],
		[
			sSilver,
			sArvoAnimation
		],
		'TV', 1, 2019, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tHarem,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1108/121157',
		[
			'Komi-san wa, Comyushou desu. 2nd Season',
			'古見さんは、コミュ症です。 2',
			"Komi Can't Communicate Season 2"
		],
		[
			sOLM
		],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tSchool,
			tShounen,
			tFavoriteAnime
		]
	),
	new Anime(
		'1899/117237',
		[
			'Komi-san wa, Comyushou desu.',
			'古見さんは、コミュ症です。',
			"Komi Can't Communicate"
		],
		[
			sOLM
		],
		'TV', 3, 2021, 'Manga', 0, 1,
		[
			tComedy,
			tRomanticSubtext,
			tSchool,
			tShounen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1612/120636',
		[
			'Aharen-san wa Hakarenai',
			'阿波連さんははかれない',
			'Aharen Is Indecipherable'
		],
		[
			sFelixFilm
		],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tShounen,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1454/122063',
		[
			'Kumichou Musume to Sewagakari',
			'組長娘と世話係',
			"The Yakuza's Guide to Babysitting"
		],
		[
			sFeel,
			sGaina
		],
		'TV', 2, 2022, 'Web manga', 0, 1,
		[
			tSliceOfLife,
			tChildcare,
			tOrganizedCrime,
			tFavoriteAnime
		]
	),
	new Anime(
		'1708/123281',
		[
			'Mamahaha no Tsurego ga Motokano datta',
			'継母の連れ子が元カノだった',
			"My Stepmom's Daughter Is My Ex"
		],
		[
			sProjectNo9
		],
		'TV', 2, 2022, 'Light novel', 0, 1,
		[
			tComedy,
			tRomance
		]
	),
	new Anime(
		'1945/126130',
		[
			'Soredemo Ayumu wa Yosetekuru',
			'それでも歩は寄せてくる',
			'When Will Ayumu Make His Move?'
		],
		[
			sSILVERLINK
		],
		'TV', 2, 2022, 'Manga', 0, 1,
		[
			tComedy,
			tRomance,
			tSchool,
			tShounen,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1530/120110',
		[
			'Overlord IV',
			'オーバーロード IV'
		],
		[
			sMadhouse
		],
		'TV', 2, 2022, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tIsekai
		]
	),
	new Anime(
		'1511/93473',
		[
			'Overlord III',
			'オーバーロードⅢ'
		],
		[
			sMadhouse
		],
		'TV', 2, 2018, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai
		]
	),
	new Anime(
		'1212/113415',
		[
			'Overlord II',
			'オーバーロードⅡ'
		],
		[
			sMadhouse
		],
		'TV', 0, 2018, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai
		]
	),
	new Anime(
		'5/87758',
		[
			'Overlord Movie 2: Shikkoku no Eiyuu',
			'【後編】劇場版総集編 オーバーロード 漆黒の英雄',
			'Overlord: The Dark Hero'
		],
		[
			sMadhouse
		],
		'Movie', 0, 2017, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tIsekai,
			tVideoGame
		]
	),
	new Anime(
		'1495/121641',
		[
			'Overlord Movie 1: Fushisha no Ou',
			'【前編】劇場版総集編 オーバーロード 不死者の王',
			'Overlord: The Undead King'
		],
		[
			sMadhouse
		],
		'Movie', 0, 2017, 'Light novel', 1, 1,
		[
			tAction,
			tFantasy,
			tIsekai,
			tVideoGame
		]
	),
	new Anime(
		'7/88019',
		[
			'Overlord',
			'オーバーロード'
		],
		[
			sMadhouse
		],
		'TV', 2, 2015, 'Light novel', 1, 1,
		[
			tAction,
			tAdventure,
			tFantasy,
			tIsekai
		]
	),
	new Anime(
		'1506/138982',
		[
			'Spy x Family Season 2'
		],
		[
			sWitStudio,
			sCloverWorks
		],
		'TV', 3, 2023, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tShounen,
			tChildcare,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1111/127508',
		[
			'Spy x Family Part 2'
		],
		[
			sWitStudio,
			sCloverWorks
		],
		'TV', 3, 2022, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tShounen,
			tChildcare,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1441/122795',
		[
			'Spy x Family'
		],
		[
			sWitStudio,
			sCloverWorks
		],
		'TV', 1, 2022, 'Manga', 0, 1,
		[
			tAction,
			tComedy,
			tShounen,
			tChildcare,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteEDSong,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1659/141438',
		[
			'Date A Live V',
			'デート・ア・ライブⅤ'
		],
		[
			sGeekToys
		],
		'TV', 1, 2024, 'Light novel', 1, 0,
		[
			tAction,
			tFantasy,
			tRomance,
			tSciFi,
			tHarem,
			tSchool,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1368/121281',
		[
			'Date A Live IV',
			'デート・ア・ライブⅣ'
		],
		[
			sGeekToys
		],
		'TV', 1, 2022, 'Light novel', 1, 1,
		[
			tAction,
			tRomance,
			tSciFi,
			tHarem,
			tFantasy,
			tSchool,
			tFavoriteOPSong,
			tFavoriteEDSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1002/108424',
		[
			'Date A Bullet: Nightmare or Queen',
			'デート・ア・バレット ナイトメア・オア・クイーン'
		],
		[
			sGeekToys
		],
		'Movie', 3, 2020, 'Light novel', 1, 1,
		[
			tAction,
			tSciFi,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1984/108425',
		[
			'Date A Bullet: Dead or Bullet',
			'デート・ア・バレット デッド・オア・バレット'
		],
		[
			sGeekToys
		],
		'Movie', 2, 2020, 'Light novel', 1, 1,
		[
			tAction,
			tSciFi,
			tIsekai,
			tFavoriteAnime
		]
	),
	new Anime(
		'1055/100468',
		[
			'Date A Live III',
			'デート・ア・ライブⅢ'
		],
		[
			sJCStaff
		],
		'TV', 0, 2019, 'Light novel', 1, 1,
		[
			tAction,
			tRomance,
			tSciFi,
			tHarem,
			tFantasy,
			tSchool,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'9/75466',
		[
			'Date A Live Movie: Mayuri Judgment',
			'劇場版 デート・ア・ライブ 万由里ジャッジメント',
			'Date A Live Movie: Mayuri Judgement'
		],
		[
			sJCStaff
		],
		'Movie', 2, 2015, 'Light novel', 0, 1,
		[
			tAction,
			tRomance,
			tSciFi,
			tHarem,
			tFantasy,
			tFavoriteAnime
		]
	),
	new Anime(
		'1759/131412',
		[
			'Date A Live II: Kurumi Star Festival',
			'デート・ア・ライブII 狂三スターフェスティバル'
		],
		[
			sProductionIMS
		],
		'OVA', 3, 2014, 'Light novel', 1, 1,
		[
			tRomance,
			tFavoriteAnime
		]
	),
	new Anime(
		'1703/135124',
		[
			'Date A Live II',
			'デート・ア・ライブⅡ'
		],
		[
			sJCStaff
		],
		'TV', 1, 2014, 'Light novel', 1, 1,
		[
			tAction,
			tRomance,
			tSciFi,
			tHarem,
			tFantasy,
			tSchool,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1629/112503',
		[
			'Date A Live: Date to Date',
			'デート・ア・ライブ DATE TO DATE'
		],
		[
			sAICPLUS
		],
		'OVA', 3, 2013, 'Light novel', 0, 1,
		[
			tRomance,
			tSciFi,
			tHarem,
			tSchool,
			tFavoriteAnime
		]
	),
	new Anime(
		'13/44844',
		[
			'Date A Live',
			'デート・ア・ライブ'
		],
		[
			sAICPLUS
		],
		'TV', 1, 2013, 'Light novel', 1, 1,
		[
			tAction,
			tRomance,
			tSciFi,
			tHarem,
			tFantasy,
			tSchool,
			tFavoriteOPSong,
			tFavoriteAnime
		]
	),
	new Anime(
		'1970/122297',
		[
			'Paripi Koumei',
			'パリピ孔明',
			'Ya Boy Kongming!'
		],
		[
			sPAWorks
		],
		'TV', 1, 2022, 'Web manga', 0, 1,
		[
			tComedy,
			tAdultCast,
			tMusic,
			tReincarnation,
			tShowbiz,
			tFavoriteOPSong,
			tFavoriteOPVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1321/132900',
		[
			'Aggressive Retsuko 5th Season',
			'グレッシブ烈子第5期',
			'Aggretsuko 5th Season'
		],
		[
			sFanworks
		],
		'ONA', 0, 2023, 'Other', 0, 1,
		[
			tComedy,
			tWorkplace,
			tAnthropomorphic,
			tFavoriteAnime
		]
	),
	new Anime(
		'1228/118066',
		[
			'Aggressive Retsuko 4th Season',
			'アグレッシブ烈子第4期',
			'Aggretsuko 4th Season'
		],
		[
			sFanworks
		],
		'ONA', 3, 2021, 'Other', 0, 1,
		[
			tComedy,
			tWorkplace,
			tAnthropomorphic,
			tFavoriteAnime
		]
	),
	new Anime(
		'1049/108692',
		[
			'Aggressive Retsuko 3rd Season',
			'アグレッシブ烈子第3期',
			'Aggretsuko 3rd Season'
		],
		[
			sFanworks
		],
		'ONA', 2, 2020, 'Other', 0, 1,
		[
			tComedy,
			tWorkplace,
			tAnthropomorphic,
			tFavoriteAnime
		]
	),
	new Anime(
		'1739/101117',
		[
			'Aggressive Retsuko 2nd Season',
			'アグレッシブ烈子第2期',
			'Aggretsuko 2nd Season'
		],
		[
			sFanworks
		],
		'ONA', 1, 2019, 'Other', 0, 1,
		[
			tComedy,
			tWorkplace,
			tAnthropomorphic,
			tFavoriteAnime
		]
	),
	new Anime(
		'1435/97291',
		[
			'Aggressive Retsuko: We Wish You a Metal Christmas',
			'アグレッシブ烈子: We Wish You a Metal Christmas',
			'Aggretsuko: We Wish You a Metal Christmas'
		],
		[
			sFanworks
		],
		'ONA', 3, 2018, 'Other', 0, 1,
		[
			tComedy,
			tAnthropomorphic,
			tFavoriteAnime
		]
	),
	new Anime(
		'1566/129181',
		[
			'Aggressive Retsuko',
			'アグレッシブ烈子',
			'Aggretsuko'
		],
		[
			sFanworks
		],
		'ONA', 1, 2018, 'Other', 0, 1,
		[
			tComedy,
			tWorkplace,
			tAnthropomorphic,
			tFavoriteAnime
		]
	),
	new Anime(
		'1618/103829',
		[
			'One Punch Man 2nd Season Specials',
			'ワンパンマン SEASON 2 OVA 2',
			'One Punch Man Season 2 Specials'
		],
		[
			sJCStaff
		],
		'Special', 3, 2019, 'Web manga', 1, 1,
		[
			tAction,
			tComedy,
			tParody,
			tSuperPower,
			tSeinen,
			tAdultCast
		]
	),
	new Anime(
		'1247/122044',
		[
			'One Punch Man 2nd Season',
			'ワンパンマン',
			'One Punch Man Season 2'
		],
		[
			sJCStaff
		],
		'TV', 1, 2019, 'Web manga', 1, 1,
		[
			tAction,
			tComedy,
			tParody,
			tSuperPower,
			tSeinen,
			tAdultCast
		]
	),
	new Anime(
		'1452/97840',
		[
			'One Punch Man Specials',
			'ワンパンマン'
		],
		[
			sJCStaff
		],
		'Special', 3, 2015, 'Web manga', 1, 1,
		[
			tAction,
			tComedy,
			tParody,
			tSuperPower,
			tSeinen,
			tAdultCast
		]
	),
	new Anime(
		'1802/124744',
		[
			'One Punch Man: Road to Hero',
			'ワンパンマン OVA「ロード・トゥ・ヒーロー」'
		],
		[
			sJCStaff
		],
		'OVA', 3, 2015, 'Web manga', 1, 1,
		[
			tAction,
			tComedy,
			tParody,
			tSuperPower,
			tSeinen
		]
	),
	new Anime(
		'12/76049',
		[
			'One Punch Man',
			'ワンパンマン'
		],
		[
			sMadhouse
		],
		'TV', 3, 2015, 'Web manga', 1, 1,
		[
			tAction,
			tComedy,
			tParody,
			tSuperPower,
			tSeinen,
			tAdultCast
		]
	),
	new Anime(
		'1233/128920',
		[
			'JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 3',
			'ジョジョの奇妙な冒険 ストーンオーシャン',
			"JoJo's Bizarre Adventure: Stone Ocean Part 3"
		],
		[
			sDavidProduction
		],
		'ONA', 3, 2022, 'Manga', 1, 1,
		[
			tAction,
			tAdventure,
			tSupernatural,
			tShounen,
			tFavoriteOPVisual,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'1051/121959',
		[
			'JoJo no Kimyou na Bouken Part 6: Stone Ocean Part 2',
			'ジョジョの奇妙な冒険 ストーンオーシャン',
			"JoJo's Bizarre Adventure: Stone Ocean Part 2"
		],
		[
			sDavidProduction
		],
		'ONA', 2, 2022, 'Manga', 1, 1,
		[
			tAction,
			tAdventure,
			tSupernatural,
			tShounen,
			tFavoriteOPVisual,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'1896/119844',
		[
			'JoJo no Kimyou na Bouken Part 6: Stone Ocean',
			'ジョジョの奇妙な冒険 ストーンオーシャン',
			"JoJo's Bizarre Adventure: Stone Ocean"
		],
		[
			sDavidProduction
		],
		'ONA', 3, 2021, 'Manga', 1, 1,
		[
			tAction,
			tAdventure,
			tSupernatural,
			tShounen,
			tFavoriteOPVisual,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'1249/99809',
		[
			'JoJo no Kimyou na Bouken Part 5: Ougon no Kaze',
			'ジョジョの奇妙な冒険 黄金の風',
			"JoJo's Bizarre Adventure: Golden Wind"
		],
		[
			sDavidProduction
		],
		'TV', 3, 2018, 'Manga', 1, 1,
		[
			tAction,
			tAdventure,
			tSupernatural,
			tShounen,
			tOrganizedCrime,
			tFavoriteOPVisual,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'1716/103072',
		[
			'Kishibe Rohan wa Ugokanai',
			'岸辺露伴は動かない',
			'Thus Spoke Kishibe Rohan'
		],
		[
			sDavidProduction
		],
		'OVA', 2, 2017, 'Manga', 1, 1,
		[
			tAction,
			tMystery,
			tSupernatural,
			tShounen
		]
	),
	new Anime(
		'3/79156',
		[
			'JoJo no Kimyou na Bouken Part 4: Diamond wa Kudakenai',
			'ジョジョの奇妙な冒険 ダイヤモンドは砕けない',
			"JoJo's Bizarre Adventure: Diamond is Unbreakable"
		],
		[
			sDavidProduction
		],
		'TV', 1, 2016, 'Manga', 1, 1,
		[
			tAction,
			tAdventure,
			tSupernatural,
			tShounen,
			tFavoriteOPVisual,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'11/75045',
		[
			'JoJo no Kimyou na Bouken Part 3: Stardust Crusaders 2nd Season',
			'ジョジョの奇妙な冒険 スターダストクルセイダース エジプト編',
			"JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt"
		],
		[
			sDavidProduction
		],
		'TV', 0, 2015, 'Manga', 1, 1,
		[
			tAction,
			tAdventure,
			tSupernatural,
			tShounen,
			tFavoriteOPVisual,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'11/55267',
		[
			'JoJo no Kimyou na Bouken Part 3: Stardust Crusaders',
			'ジョジョの奇妙な冒険 スターダストクルセイダース',
			"JoJo's Bizarre Adventure: Stardust Crusaders"
		],
		[
			sDavidProduction
		],
		'TV', 1, 2014, 'Manga', 1, 1,
		[
			tAction,
			tAdventure,
			tSupernatural,
			tShounen,
			tFavoriteOPVisual,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'3/40409',
		[
			'JoJo no Kimyou na Bouken',
			'ジョジョの奇妙な冒険',
			"JoJo's Bizarre Adventure"
		],
		[
			sDavidProduction
		],
		'TV', 3, 2012, 'Manga', 1, 1,
		[
			tAction,
			tAdventure,
			tSupernatural,
			tShounen,
			tHistorical,
			tVampire,
			tFavoriteOPVisual,
			tFavoriteEDVisual
		]
	),
	new Anime(
		'1136/141839',
		[
			'Shinigami Bocchan to Kuro Maid 3rd Season',
			'死神坊ちゃんと黒メイド 第3期',
			'The Duke of Death and His Maid Season 3'
		],
		[
			sJCStaff
		],
		'TV', 1, 2024, 'Web manga', 0, 0,
		[
			tComedy,
			tSupernatural,
			tRomanticSubtext,
			tFavoriteAnime
		]
	),
	new Anime(
		'1078/136947',
		[
			'Shinigami Bocchan to Kuro Maid 2nd Season',
			'死神坊ちゃんと黒メイド',
			'The Duke of Death and His Maid Season 2'
		],
		[
			sJCStaff
		],
		'TV', 2, 2023, 'Web manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tRomanticSubtext,
			tFavoriteOPVisual,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1471/115593',
		[
			'Shinigami Bocchan to Kuro Maid',
			'死神坊ちゃんと黒メイド',
			'The Duke of Death and His Maid'
		],
		[
			sJCStaff
		],
		'TV', 2, 2021, 'Web manga', 0, 1,
		[
			tComedy,
			tSupernatural,
			tRomanticSubtext,
			tFavoriteOPVisual,
			tFavoriteEDVisual,
			tFavoriteAnime
		]
	),
	new Anime(
		'1888/133089',
		[
			'Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita',
			'スライム倒して300年、知らないうちにレベルMAXになってました',
			"I've Been Killing Slimes for 300 Years and Maxed Out My Level"
		],
		[
			sRevoroot
		],
		'TV', 1, 2021, 'Light novel', 0, 1,
		[
			tComedy,
			tFantasy,
			tIsekai,
			tReincarnation,
			tCGDCT,
			tFavoriteAnime
		]
	)
]
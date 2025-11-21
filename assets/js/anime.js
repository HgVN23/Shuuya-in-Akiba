class Anime {
	constructor(img, title, studio, type, season, year, source, rating, status, tag, video = [ null ]) {
		this.img = img;
		this.title = title;
		this.studio = studio;
		this.type = type;
		this.season = season;
		this.year = year;
		this.source = source;
		this.rating = rating;
		this.status = status;
		this.tag = tag;
		this.video = video;
	}
}

const animeList = [
	/*new Anime(
		'',
		[
			'',
			'',
			'',
		],
		[  ],
		0, 3, 2025, 1, 0, 0,
		[
			't',
		]
	),*/
	new Anime(
		'1864/151837',
		[
			'Fujimoto Tatsuki 17-26',
			'藤本タツキ17-26',
			'Tatsuki Fujimoto 17-26',
		],
		[ 2696, 1828, 132, 3192, 2205, 218 ],
		3, 3, 2025, 0, 2, 1,
		[
			'tAction',
			'tComedy',
			'tDrama',
			'tRomance',
			'tSchool',
			'tShounen',
			'tSupernatural',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1883/144526',
		[
			'Project Sekai Movie: Kowareta Sekai to Utaenai Miku',
			'劇場版プロジェクトセカイ 壊れたセカイと歌えないミク',
			"Colorful Stage! The Movie: A Miku Who Can't Sing",
		],
		[ 132 ],
		4, 0, 2025, 8, 0, 1,
		[
			'tMusic',
			'tFavoriteAnime',
		],
		[
			'ProjectSekaiKowaretaSekaiToUtaenaiMiku-OP1',
			'ProjectSekaiKowaretaSekaiToUtaenaiMiku-ED1',
		]
	),
	new Anime(
		'1334/151773',
		[
			'Kimi to Koete Koi ni Naru',
			'キミと越えて恋になる',
			'With You, Our Love Will Make It Through',
		],
		[ 1237 ],
		0, 3, 2025, 2, 0, 0,
		[
			'tAnthropomorphic',
			'tFantasy',
			'tRomance',
			'tSchool',
			'tUrbanFantasy',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'KimiToKoeteKoiNiNaru-OP1',
			'KimiToKoeteKoiNiNaru-ED1',
		]
	),
	new Anime(
		'1888/151887',
		[
			'Chanto Suenai Kyuuketsuki-chan',
			'ちゃんと吸えない吸血鬼ちゃん',
			"Li'l Miss Vampire Can't Suck Right",
		],
		[ 91 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tComedy',
			'tSchool',
			'tShounen',
			'tSupernatural',
			'tVampire',
			'tFavoriteAnime',
		],
		[
			'ChantoSuenaiKyuuketsukiChan-OP1',
			'ChantoSuenaiKyuuketsukiChan-ED1',
		]
	),
	new Anime(
		'1257/152352',
		[
			'Gnosia',
			'グノーシア',
		],
		[ 1380 ],
		0, 3, 2025, 8, 0, 0,
		[
			'tSciFi',
			'tSurvival',
			'tSuspense',
			'tTimeTravel',
		]
	),
	new Anime(
		'1889/151926',
		[
			'Heika Watashi wo Wasurete Kudasai',
			'陛下わたしを忘れてください',
			'Forget That Night, Your Majesty',
		],
		[ 2983, 2844 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tFantasy',
			'tRomance',
		],
		[
			'HeikaWatashiWoWasureteKudasai-ED1',
		]
	),
	new Anime(
		'1347/150603',
		[
			'Tensei Akujo no Kuro Rekishi',
			'転生悪女の黒歴史',
			'The Dark History of the Reincarnated Villainess',
		],
		[ 37 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tComedy',
			'tIsekai',
			'tRomance',
			'tShoujo',
			'tVillainess',
			'tFavoriteAnime',
		],
		[
			'TenseiAkujoNoKuroRekishi-OP1',
			'TenseiAkujoNoKuroRekishi-ED1',
		]
	),
	new Anime(
		'1104/151524',
		[
			'Wandance',
			'ワンダンス',
		],
		[ 1099, 11 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tPerformingArts',
			'tSchool',
			'tSeinen',
			'tSports',
		],
		[
			'WanDance-OP1',
			'WanDance-ED1',
		]
	),
	new Anime(
		'1617/151874',
		[
			'Egao no Taenai Shokuba desu.',
			'笑顔のたえない職場です。',
			"A Mangaka's Weirdly Wonderful Workplace",
		],
		[ 2698 ],
		0, 3, 2025, 2, 0, 0,
		[
			'tAdultCast',
			'tCGDCT',
			'tComedy',
			'tOtakuCulture',
			'tWorkplace',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'EgaoNoTaenaiShokubaDesu-OP1',
			'EgaoNoTaenaiShokubaDesu-ED1',
		]
	),
	new Anime(
		'1015/151233',
		[
			'Chitose-kun wa Ramune Bin no Naka',
			'千歳くんはラムネ瓶のなか',
			'Chitose Is in the Ramune Bottle',
		],
		[ 91 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tComedy',
			'tHarem',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'Chiramune-OP1',
			'Chiramune-ED1',
		]
	),
	new Anime(
		'1276/151118',
		[
			'Ansatsusha de Aru Ore no Status ga Yuusha yori mo Akiraka ni Tsuyoi no da ga',
			'暗殺者である俺のステータスが勇者よりも明らかに強いのだが',
			"My Status as an Assassin Obviously Exceeds the Hero's",
		],
		[ 14 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'Sutetsuyo-OP1',
			'Sutetsuyo-ED1',
		]
	),
	new Anime(
		'1025/150482',
		[
			'Sawaranaide Kotesashi-kun',
			'さわらないで小手指くん',
			'Hands Off: Sawaranaide Kotesashi-kun',
		],
		[ 2314 ],
		0, 3, 2025, 2, 0, 0,
		[
			'tEcchi',
			'tHarem',
			'tSchool',
			'tSports',
		],
		[
			'SawaranaideKotesashiKun-OP1',
			'SawaranaideKotesashiKun-ED1',
		]
	),
	new Anime(
		'1631/153644',
		[
			'Alma-chan wa Kazoku ni Naritai',
			'アルマちゃんは家族になりたい',
			'Alma-chan Wants to Be a Family!',
		],
		[ 1693 ],
		0, 3, 2025, 2, 0, 0,
		[
			'tChildcare',
			'tComedy',
			'tLoveStatusQuo',
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
		],
		[
			'AlmaChanWaKazokuNiNaritai-OP1',
			'AlmaChanWaKazokuNiNaritai-ED1',
		]
	),
	new Anime(
		'1811/151799',
		[
			'Chichi wa Eiyuu, Haha wa Seirei, Musume no Watashi wa Tenseisha.',
			'父は英雄、母は精霊、娘の私は転生者。',
			"Dad is a Hero, Mom is a Spirit, I'm a Reincarnator",
		],
		[ 7 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'Hahanoha-OP1',
			'Hahanoha-ED1',
		]
	),
	new Anime(
		'1618/151138',
		[
			'Kikaijikake no Marie',
			'機械じかけのマリー',
			'Mechanical Marie',
		],
		[ 2527, 1379 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tComedy',
			'tRomance',
			'tShoujo',
			'tFavoriteAnime',
		],
		[
			'KikaijikakeNoMarie-OP1',
			'KikaijikakeNoMarie-ED1',
			'KikaijikakeNoMarie-ED2',
		]
	),
	new Anime(
		'1455/152139',
		[
			'Toujima Tanzaburou wa Kamen Rider ni Naritai',
			'東島丹三郎は仮面ライダーになりたい',
			'Tojima Wants to Be a Kamen Rider',
		],
		[ 839 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tAction',
			'tAdultCast',
			'tComedy',
			'tSeinen',
			'tSuperPower',
			'tFavoriteAnime',
		],
		[
			'TojimaRider-OP1',
			'TojimaRider-ED1',
		]
	),
	new Anime(
		'1681/151599',
		[
			'Shuumatsu Touring',
			'終末ツーリング',
			'Touring After the Apocalypse',
		],
		[ 852 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tAdventure',
			'tSciFi',
			'tSeinen',
			'tSliceofLife',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		],
		[
			'ShuumatsuTouring-OP1',
			'ShuumatsuTouring-ED1',
		]
	),
	new Anime(
		'1699/151694',
		[
			'Tomodachi no Imouto ga Ore ni dake Uzai',
			'友達の妹が俺にだけウザい',
			"My Friend's Little Sister Has It In for Me!",
		],
		[ 1547 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tComedy',
			'tFavoriteAnime',
			'tRomance',
			'tSchool',
		],
		[
			'Imouza-OP1',
			'Imouza-ED1',
		]
	),
	new Anime(
		'1362/151636',
		[
			'Mikata ga Yowasugite Hojo Mahou ni Tesshiteita Kyuutei Mahoushi, Tsuihou sarete Saikyou wo Mezashimasu',
			'味方が弱すぎて補助魔法に徹していた宮廷魔法師、追放されて最強を目指す',
			'The Banished Court Magician Aims to Become the Strongest',
		],
		[ 2554 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'Hojomaho-OP1',
			'Hojomaho-ED1',
		]
	),
	new Anime(
		'1363/151886',
		[
			'Kao ni Denai Kashiwada-san to Kao ni Deru Oota-kun',
			'顔に出ない柏田さんと顔に出る太田君',
			'Inexpressive Kashiwada and Expressive Oota',
		],
		[ 2828 ],
		0, 3, 2025, 2, 0, 0,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'KashiwadaSanToOotaKun-OP1',
			'KashiwadaSanToOotaKun-ED1',
		]
	),
	new Anime(
		'1364/151767',
		[
			'Sanda',
		],
		[ 1591 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tAction',
			'tMystery',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'Sanda-OP1',
			'Sanda-ED1',
		]
	),
	new Anime(
		'1736/152179',
		[
			'Shabake',
			'しゃばけ',
		],
		[ 1258 ],
		0, 3, 2025, 7, 0, 0,
		[
			'tHistorical',
			'tMystery',
			'tMythology',
			'tSupernatural',
			'tFavoriteOPSong',
		],
		[
			'Shabake-OP1',
			'Shabake-ED1',
		]
	),
	new Anime(
		'1190/151754',
		[
			'Saigo ni Hitotsu dake Onegai shitemo Yoroshii deshou ka',
			'最後にひとつだけお願いしてもよろしいでしょうか',
			'May I Ask for One Final Thing?',
		],
		[ 839 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tVillainess',
			'tFavoriteAnime',
		],
		[
			'Saihito-OP1',
			'Saihito-ED1',
		]
	),
	new Anime(
		'1163/151246',
		[
			'Shinjiteita Nakama-tachi ni Dungeon Okuchi de Korosarekaketa ga Gift "Mugen Gacha" de Level 9999 no Nakama-tachi wo Te ni Irete Moto Party Member to Sekai ni Fukushuu &amp; "Zamaa!" Shimasu!',
			'信じていた仲間達にダンジョン奥地で殺されかけたがギフト『無限ガチャ』でレベル9999の仲間達を手に入れて元パーティーメンバーと世界に復讐＆『ざまぁ！』します!',
			"My Gift Lvl 9999 Unlimited Gacha: Backstabbed in a Backwater Dungeon, I'm Out for Revenge!",
		],
		[ 7 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tAction',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'MugenGacha-OP1',
			'MugenGacha-ED1',
		]
	),
	new Anime(
		'1257/152233',
		[
			'Bukiyou na Senpai.',
			'不器用な先輩。',
			'My Awkward Senpai',
		],
		[ 1521 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tAdultCast',
			'tComedy',
			'tRomance',
			'tSeinen',
			'tWorkplace',
			'tFavoriteAnime',
		],
		[
			'BukiyouNaSenpai-OP1',
			'BukiyouNaSenpai-ED1',
		]
	),
	new Anime(
		'1475/152176',
		[
			'Taiyou yori mo Mabushii Hoshi',
			'太陽よりも眩しい星',
			'A Star Brighter Than the Sun',
		],
		[ 1997 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tFavoriteAnime',
		],
		[
			'Tamahoshi-OP1',
			'Tamahoshi-ED1',
		]
	),
	new Anime(
		'1311/151227',
		[
			'Potion, Wagami wo Tasukeru',
			'ポーション、わが身を助ける',
		],
		[ 2983, 2844 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tFantasy',
			'tIsekai',
		],
		[
			'PotionWagamiWoTasukeru-OP1',
			'PotionWagamiWoTasukeru-ED1',
		]
	),
	new Anime(
		'1264/152012',
		[
			'Akujiki Reijou to Kyouketsu Koushaku',
			'悪食令嬢と狂血公爵',
			'Pass the Monster Meat, Milady!',
		],
		[ 406 ],
		0, 3, 2025, 2, 0, 0,
		[
			'tFantasy',
			'tGourmet',
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'AkujikiReijou-OP1',
			'AkujikiReijou-ED1',
		]
	),
	new Anime(
		'1191/152368',
		[
			'Watashi wo Tabetai, Hitodenashi',
			'私を喰べたい、ひとでなし',
			'This Monster Wants to Eat Me',
		],
		[ 1813 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tDrama',
			'tSeinen',
			'tSupernatural',
			'tYuri',
			'tFavoriteAnime',
		],
		[
			'Watatabe-OP1',
			'Watatabe-ED1',
			'Watatabe-ED2',
		]
	),
	new Anime(
		'1148/150376',
		[
			"Let's Play: Quest-darake no My Life",
			"Let's Play クエストだらけのマイライフ",
			"Let's Play",
		],
		[ 28 ],
		0, 3, 2025, 11, 0, 0,
		[
			'tAdultCast',
			'tComedy',
			'tRomance',
		],
		[
			'LetsPlayQuestDarakeNoMyLife-OP1',
			'LetsPlayQuestDarakeNoMyLife-ED1',
		]
	),
	new Anime(
		'1388/152332',
		[
			'Yano-kun no Futsuu no Hibi',
			'矢野くんの普通の日々',
			"Yano-kun's Ordinary Days",
		],
		[ 30 ],
		0, 3, 2025, 2, 0, 0,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'YanoKun-OP1',
			'YanoKun-ED1',
		]
	),
	new Anime(
		'1289/151136',
		[
			'Sozai Saishuka no Isekai Ryokouki',
			'素材採取家の異世界旅行記',
			"A Gatherer's Adventure in Isekai",
		],
		[ 118, 103 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
		],
		[
			'SozaiSaishuka-OP1',
			'SozaiSaishuka-ED1',
		]
	),
	new Anime(
		'1830/145051',
		[
			'Yasei no Last Boss ga Arawareta!',
			'野生のラスボスが現れた！',
			'A Wild Last Boss Appeared!',
		],
		[ 318 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'LastBoss-OP1',
			'LastBoss-ED1',
		]
	),
	new Anime(
		'1294/151734',
		[
			'Towa no Yuugure',
			'永久のユウグレ',
			'Dusk Beyond the End of the World',
		],
		[ 132 ],
		0, 3, 2025, 4, 0, 0,
		[
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'TowaNoYuugure-OP1',
			'TowaNoYuugure-ED2',
		]
	),
	new Anime(
		'1711/151735',
		[
			'Towa no Yuugure: Asa wo Kokoro ni, Ichi, Ni to Kazoe yo',
			'永久のユウグレ「朝をこころに、一、二と数えよ」',
			'Dusk Beyond the End of the World: Think Morning, Count Two',
		],
		[ 132 ],
		2, 3, 2025, 4, 0, 1,
		[
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
		],
		[
			'TowaNoYuugure-ED1',
		]
	),
	new Anime(
		'1721/151097',
		[
			'Mushoku no Eiyuu: Betsu ni Skill Nanka Iranakatta n da ga',
			'無職の英雄 別にスキルなんか要らなかったんだが',
			'Hero Without a Class: Who Even Needs Skills?!',
		],
		[ 1209 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'MushokuNoEiyuu-OP1',
			'MushokuNoEiyuu-ED1',
		]
	),
	new Anime(
		'1879/150911',
		[
			'Bâan: Otona no Kyoukai',
			'bâan - 大人の彊界',
			'Bâan: The Boundary of Adulthood',
		],
		[ 2240 ],
		4, 2, 2025, 4, 0, 1,
		[
			'tFantasy',
			'tFavoriteAnime',
			'tIsekai',
		]
	),
	new Anime(
		'1303/90909',
		[
			'Isekai Izakaya: Koto Aitheria no Izakaya Nobu',
			'異世界居酒屋～古都アイテーリアの居酒屋のぶ～',
			'Isekai Izakaya: Japanese Food From Another World',
		],
		[ 14 ],
		3, 1, 2018, 1, 0, 1,
		[
			'tAdultCast',
			'tFavoriteAnime',
			'tGourmet',
			'tIsekai',
			'tWorkplace',
		],
		[
			'IsekaiIzakaya-ED1',
		]
	),
	new Anime(
		'9/68045',
		[
			'Gokukoku no Brynhildr: Kara Sawagi',
			'極黒のブリュンヒルデ 第11.5話 から騒ぎ',
			'Brynhildr in the Darkness Special',
		],
		[ 38 ],
		2, 2, 2014, 0, 2, 1,
		[
			'tComedy',
			'tEcchi',
			'tHarem',
			'tSciFi',
			'tSeinen',
		]
	),
	new Anime(
		'5/61433',
		[
			'Gokukoku no Brynhildr',
			'極黒のブリュンヒルデ',
			'Brynhildr in the Darkness',
		],
		[ 38 ],
		0, 1, 2014, 0, 2, 1,
		[
			'tDrama',
			'tGore',
			'tHarem',
			'tMystery',
			'tSciFi',
			'tSeinen',
			'tSuperPower',
		],
		[
			'GokukokuNoBrynhildr-OP1',
			'GokukokuNoBrynhildr-OP2',
			'GokukokuNoBrynhildr-ED1',
			'GokukokuNoBrynhildr-ED1v2',
			'GokukokuNoBrynhildr-ED1v3',
		]
	),
	new Anime(
		'1685/104697',
		[
			'Nanbaka: Shusseki Bangou no Tsuita Baka-tachi!',
			'ナンバカ 出席番号のついたバカたち!',
			'Nanbaka: Idiots with Student Numbers!',
		],
		[ 41 ],
		2, 1, 2017, 2, 0, 1,
		[
			'tAction',
			'tComedy',
			'tSchool',
		]
	),
	new Anime(
		'1294/127370',
		[
			'Nanbaka 2',
			'ナンバカ 2期',
			'Nanbaka Season 2',
		],
		[ 41 ],
		3, 0, 2017, 2, 0, 1,
		[
			'tAction',
			'tComedy',
			'tDrama',
		],
		[
			'NanbakaS2-OP1',
			'Nanbaka-ED1',
		]
	),
	new Anime(
		'2/81399',
		[
			'Nanbaka',
			'ナンバカ',
		],
		[ 41 ],
		0, 3, 2016, 2, 0, 1,
		[
			'tAction',
			'tComedy',
			'tDrama',
		],
		[
			'Nanbaka-OP1',
			'Nanbaka-ED1',
		]
	),
	new Anime(
		'1580/93526',
		[
			'Hinamatsuri',
			'ヒナまつり',
		],
		[ 91 ],
		0, 1, 2018, 0, 0, 1,
		[
			'tChildcare',
			'tComedy',
			'tOrganizedCrime',
			'tSeinen',
			'tSuperPower',
		],
		[
			'Hinamatsuri-OP1',
			'Hinamatsuri-OP1v2',
			'Hinamatsuri-OP1v3',
			'Hinamatsuri-OP1v4',
			'Hinamatsuri-OP1v5',
			'Hinamatsuri-OP1v6',
			'Hinamatsuri-ED1',
			'Hinamatsuri-ED1v2',
			'Hinamatsuri-ED1v3',
			'Hinamatsuri-ED1v4',
			'Hinamatsuri-ED1v5',
			'Hinamatsuri-ED2',
			'Hinamatsuri-ED3',
		]
	),
	new Anime(
		'1469/146852',
		[
			'Senpai wa Otokonoko Movie: Ame Nochi Hare',
			'映画 先輩はおとこのこ あめのち晴れ',
			'Senpai is an Otokonoko Movie: Sunshine After the Rain',
		],
		[ 439 ],
		4, 0, 2025, 5, 0, 1,
		[
			'tCrossdressing',
			'tDrama',
			'tLovePolygon',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1546/145782',
		[
			'Kizu darake Seijo yori Houfuku wo Komete',
			'傷だらけ聖女より報復をこめて',
			'With Vengeance, Sincerely, Your Broken Saintess',
		],
		[ 2983, 2844 ],
		0, 2, 2025, 2, 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tFavoriteOPSong',
		],
		[
			'KizuDarakeSeijo-OP1',
			'KizuDarakeSeijo-ED1',
		]
	),
	new Anime(
		'1359/150668',
		[
			'Muchuu sa, Kimi ni.',
			'夢中さ、きみに。',
			'Captivated, By You',
		],
		[ 95 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tSchool',
			'tSliceofLife',
		],
		[
			'Muchusa-OP1',
			'Muchusa-ED1',
		]
	),
	new Anime(
		'1801/150665',
		[
			'Karaoke Iko!',
			'カラオケ行こ!',
			"Let's Go Karaoke!",
		],
		[ 95 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tComedy',
			'tMusic',
			'tOrganizedCrime',
		],
		[
			'KaraokeIko-OP1',
		]
	),
	new Anime(
		'1587/149982',
		[
			'Nukitashi the Animation',
			'ぬきたし THE ANIMATION',
		],
		[ 911 ],
		0, 2, 2025, 6, 2, 1,
		[
			'tErotica',
			'tSchool',
			'tComedy',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'NukitashiTheAnimation-OP1',
			'NukitashiTheAnimation-ED1',
		]
	),
	new Anime(
		'1977/150952',
		[
			'Turkey!',
			'Turkey! Time to Strike',
		],
		[ 1984 ],
		0, 2, 2025, 4, 0, 1,
		[
			'tHistorical',
			'tSports',
			'tTimeTravel',
			'tFavoriteOPSong_1',
		],
		[
			'Turkey-OP1',
			'Turkey-OP2',
			'Turkey-ED1',
			'Turkey-ED2',
			'Turkey-ED3',
			'Turkey-ED4',
			'Turkey-ED5',
		]
	),
	new Anime(
		'1474/150666',
		[
			'Tougen Anki',
			'桃源暗鬼',
		],
		[ 101 ],
		0, 2, 2025, 0, 1, 0,
		[
			'tAction',
			'tFantasy',
			'tMythology',
			'tShounen',
		],
		[
			'TougenAnki-OP1',
			'TougenAnki-OP2',
			'TougenAnki-ED1',
			'TougenAnki-ED2',
		]
	),
	new Anime(
		'1904/150649',
		[
			'Futari Solo Camp',
			'ふたりソロキャンプ',
			'Solo Camping for Two',
		],
		[ 118 ],
		0, 2, 2025, 0, 0, 0,
		[
			'tAdultCast',
			'tSeinen',
			'tSliceofLife',
			'tFavoriteEDSong',
		],
		[
			'FutariSoloCamp-OP1',
			'FutariSoloCamp-OP2',
			'FutariSoloCamp-ED1',
		]
	),
	new Anime(
		'1949/150965',
		[
			'Mikadono Sanshimai wa Angai, Choroi.',
			'帝乃三姉妹は案外、チョロい。',
			'Dealing with Mikadono Sisters Is a Breeze',
		],
		[ 132 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tSchool',
			'tHarem',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'Mikadono-OP1',
			'Mikadono-ED1',
		]
	),
	new Anime(
		'1887/150496',
		[
			'Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?)',
			'わたしが恋人になれるわけないじゃん、ムリムリ! (※ムリじゃなかった!?)',
			"There's No Freaking Way I'll be Your Lover! Unless...",
		],
		[ 2246 ],
		0, 2, 2025, 1, 0, 1,
		[
			'tComedy',
			'tSchool',
			'tYuri',
			'tHarem',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		],
		[
			'Watanare-OP1',
			'Watanare-ED1',
		]
	),
	new Anime(
		'1662/150797',
		[
			'City The Animation',
		],
		[ 2 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tComedy',
			'tGagHumor',
			'tSeinen',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
		],
		[
			'CityTheAnimation-OP1',
			'CityTheAnimation-OP1v2',
			'CityTheAnimation-ED1',
			'CityTheAnimation-ED2',
			'CityTheAnimation-ED3',
			'CityTheAnimation-ED4',
		]
	),
	new Anime(
		'1039/150572',
		[
			'Food Court de, Mata Ashita.',
			'フードコートで、また明日。',
			'See You Tomorrow at the Food Court',
		],
		[ 2298 ],
		0, 2, 2025, 2, 0, 1,
		[
			'tSliceofLife',
			'tFavoriteAnime',
		],
		[
			'FoodCourt-OP1',
			'FoodCourt-ED1',
		]
	),
	new Anime(
		'1411/150445',
		[
			'Nyaight of the Living Cat',
			'ニャイト・オブ・ザ・リビングキャット',
		],
		[ 28 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tAction',
			'tHorror',
			'tShounen',
			'tSurvival',
			'tSuspense',
			'tFavoriteAnime',
		],
		[
			'Nyailivi-OP1',
			'Nyailivi-ED1',
		]
	),
	new Anime(
		'1154/149311',
		[
			'Dekin no Mogura',
			'出禁のモグラ',
			'Dekin no Mogura: The Earthbound Mole',
		],
		[ 112 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tComedy',
			'tMystery',
			'tSeinen',
			'tSupernatural',
		],
		[
			'DekinNoMogura-OP1',
			'DekinNoMogura-ED1',
		]
	),
	new Anime(
		'1682/150432',
		[
			'Gachiakuta',
			'ガチアクタ',
		],
		[ 3045 ],
		0, 2, 2025, 0, 0, 0,
		[
			'tAction',
			'tFantasy',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteEDSong_1',
		],
		[
			'Gachiakuta-OP1',
			'Gachiakuta-OP2',
			'Gachiakuta-ED1',
			'Gachiakuta-ED2',
		]
	),
	new Anime(
		'1900/150443',
		[
			'Hotel Inhumans',
			'ホテル・インヒューマンズ',
		],
		[ 397 ],
		0, 2, 2025, 2, 0, 1,
		[
			'tAction',
			'tDrama',
			'tOrganizedCrime',
			'tFavoriteAnime',
		],
		[
			'HotelInhumans-OP1',
			'HotelInhumans-ED1',
		]
	),
	new Anime(
		'1431/148742',
		[
			'Ruri no Houseki',
			'瑠璃の宝石',
			'Ruri Rocks',
		],
		[ 1993 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tCGDCT',
			'tSeinen',
			'tSliceofLife',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
		],
		[
			'RuriNoHouseki-OP1',
			'RuriNoHouseki-ED1',
			'RuriNoHouseki-ED2',
		]
	),
	new Anime(
		'1454/150515',
		[
			'Busamen Gachi Fighter',
			'ブサメンガチファイター',
			'Uglymug, Epicfighter',
		],
		[ 314 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'BusamenGachiFighter-OP1',
			'BusamenGachiFighter-ED1',
		]
	),
	new Anime(
		'1943/149719',
		[
			'Game Center Shoujo to Ibunka Kouryuu',
			'ゲーセン少女と異文化交流',
			'Cultural Exchange With a Game Centre Girl',
		],
		[ 70 ],
		0, 2, 2025, 2, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'GameCenterShoujo-OP1',
			'GameCenterShoujo-OP1v2',
			'GameCenterShoujo-ED1',
		]
	),
	new Anime(
		'1782/150383',
		[
			'Isekai Mokushiroku Mynoghra: Hametsu no Bunmei de Hajimeru Sekai Seifuku',
			'異世界黙示録マイノグーラ ～破滅の文明で始める世界征服～',
			'Apocalypse Bringer Mynoghra: World Conquest Starts with the Civilization of Ruin',
		],
		[ 1978 ],
		0, 2, 2025, 1, 1, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'IsekaiMokushirokuMynoghra-OP1',
			'IsekaiMokushirokuMynoghra-ED1',
		]
	),
	new Anime(
		'1154/145364',
		[
			"9-nine- Ruler's Crown",
			"9: Ruler's Crown",
		],
		[ 753 ],
		0, 2, 2025, 6, 0, 1,
		[
			'tSuperPower',
			'tMystery',
			'tRomance',
			'tSchool',
		],
		[
			'9NineRulersCrown-OP1',
			'9NineRulersCrown-ED1',
		]
	),
	new Anime(
		'1502/150545',
		[
			'Watari-kun no xx ga Houkai Sunzen',
			'渡くんの××が崩壊寸前',
			"Watari-kun's ****** Is about to Collapse",
		],
		[ 2405 ],
		0, 2, 2025, 0, 0, 0,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tSchool',
			'tSeinen',
		],
		[
			'WatariKunNoxxGaHoukaiSunzen-OP1',
			'WatariKunNoxxGaHoukaiSunzen-OP2',
			'WatariKunNoxxGaHoukaiSunzen-ED1',
			'WatariKunNoxxGaHoukaiSunzen-ED2',
		]
	),
	new Anime(
		'1104/148614',
		[
			'Hikaru ga Shinda Natsu',
			'光が死んだ夏',
			'The Summer Hikaru Died',
		],
		[ 1893 ],
		0, 2, 2025, 2, 1, 1,
		[
			'tHorror',
			'tMystery',
			'tSupernatural',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'Hikanatsu-OP1',
			'Hikanatsu-ED1',
		]
	),
	new Anime(
		'1329/150512',
		[
			'Ame to Kimi to',
			'雨と君と',
			'With You and the Rain',
		],
		[ 1829 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tAdultCast',
			'tPets',
			'tSeinen',
			'tSliceofLife',
			'tFavoriteAnime',
		],
		[
			'AmeToKimiTo-OP1',
			'AmeToKimiTo-ED1',
		]
	),
	new Anime(
		'1744/150433',
		[
			'Kaoru Hana wa Rin to Saku',
			'薫る花は凛と咲く',
			'The Fragrant Flower Blooms with Dignity',
		],
		[ 1835 ],
		0, 2, 2025, 2, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual_1',
			'tFavoriteEDVisual_2',
		],
		[
			'KaoruHana-OP1',
			'KaoruHana-ED1',
			'KaoruHana-ED2',
		]
	),
	new Anime(
		'1672/148848',
		[
			'Bad Girl',
			'ばっどがーる',
		],
		[ 397 ],
		0, 2, 2025, 3, 0, 1,
		[
			'tCGDCT',
			'tComedy',
			'tSchool',
			'tYuri',
		],
		[
			'BadGirl-OP1',
			'BadGirl-ED1',
			'BadGirl-ED2',
		]
	),
	new Anime(
		'1104/150590',
		[
			'Fermat no Ryouri',
			'フェルマーの料理',
			"Fermat's Cuisine",
		],
		[ 1380 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tGourmet',
			'tShounen',
			'tDrama',
			'tWorkplace',
		],
		[
			'FermatNoRyouri-OP1',
			'FermatNoRyouri-ED1',
		]
	),
	new Anime(
		'1072/149889',
		[
			'Yuusha Party wo Tsuihou sareta Shiromadoushi, S-Rank Boukensha ni Hirowareru: Kono Shiromadoushi ga Kikakugai Sugiru',
			'勇者パーティーを追放された白魔導師、Sランク冒険者に拾われる ～この白魔導師が規格外すぎる～',
			'Scooped Up by an S-Ranked Adventurer',
		],
		[ 1440 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tAdventure',
			'tFantasy',
		],
		[
			'TsuihouShiroMadoushi-OP1',
			'TsuihouShiroMadoushi-ED1',
		]
	),
	new Anime(
		'1777/150455',
		[
			'Kizetsu Yuusha to Ansatsu Hime',
			'気絶勇者と暗殺姫',
			'The Shy Hero and the Assassin Princesses',
		],
		[ 957 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'KizetsuYuusha-OP1',
			'KizetsuYuusha-ED1',
		]
	),
	new Anime(
		'1518/149900',
		[
			'Zutaboro Reijou wa Ane no Moto Konyakusha ni Dekiai sareru',
			'ずたぼろ令嬢は姉の元婚約者に溺愛される',
			"Betrothed to My Sister's Ex",
		],
		[ 563 ],
		0, 2, 2025, 1, 0, 1,
		[
			'tDrama',
			'tJosei',
			'tRomance',
		],
		[
			'Zutaboro-OP1',
			'Zutaboro-ED1',
		]
	),
	new Anime(
		'1672/148193',
		[
			'Busu ni Hanataba wo.',
			'ブスに花束を。',
			'April Showers Bring May Flowers',
		],
		[ 300 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'BusuNiHanatabaWo-OP1',
			'BusuNiHanatabaWo-ED1',
		]
	),
	new Anime(
		'1669/149732',
		[
			'Silent Witch: Chinmoku no Majo no Kakushigoto',
			'サイレント・ウィッチ 沈黙の魔女の隠しごと',
			'Secrets of the Silent Witch',
		],
		[ 418 ],
		0, 2, 2025, 1, 0, 1,
		[
			'tFantasy',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
		],
		[
			'SilentWitch-OP1',
			'SilentWitch-ED1',
		]
	),
	new Anime(
		'1383/151072',
		[
			'Mizu Zokusei no Mahoutsukai',
			'水属性の魔法使い',
			'The Water Magician',
		],
		[ 1340, 3060 ],
		0, 2, 2025, 1, 0, 1,
		[
			'tAdventure',
			'tAdultCast',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'Mizuzoku-OP1',
			'Mizuzoku-ED1',
		]
	),
	new Anime(
		'1933/150503',
		[
			'Onmyou Kaiten Re:Birth',
			'陰陽廻天 Re:バース',
			'Onmyo Kaiten Re:Birth Verse',
		],
		[ 287 ],
		0, 2, 2025, 4, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tSciFi',
		],
		[
			'OnmyoKaitenReVerse-OP1',
			'OnmyouKaitenReBirth-ED1',
		]
	),
	new Anime(
		'1313/149355',
		[
			'Tsuihousha Shokudou e Youkoso!',
			'追放者食堂へようこそ!',
			"Welcome to the Outcast's Restaurant!",
		],
		[ 28 ],
		0, 2, 2025, 1, 0, 1,
		[
			'tFantasy',
			'tGourmet',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'Tsuishoku-OP1',
			'Tsuishoku-ED1',
		]
	),
	new Anime(
		'1170/147753',
		[
			'Tsuyokute New Saga',
			'強くてニューサーガ',
			'New Saga',
		],
		[ 64, 3070 ],
		0, 2, 2025, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tTimeTravel',
		],
		[
			'TsuyokuteNewSaga-OP1',
			'TsuyokuteNewSaga-ED1',
		]
	),
	new Anime(
		'1255/150593',
		[
			'Clevatess: Majuu no Ou to Akago to Shikabane no Yuusha',
			'クレバテス-魔獣の王と赤子と屍の勇者-',
			'Clevatess',
		],
		[ 1087 ],
		0, 2, 2025, 2, 1, 1,
		[
			'tAction',
			'tFantasy',
		],
		[
			'Clevatess-OP1',
			'Clevatess-ED1',
		]
	),
	new Anime(
		'1845/150343',
		[
			'Necronomico no Cosmic Horror Show',
			'ネクロノミ子のコズミックホラーショウ',
			'Necronomico and the Cosmic Horror Show',
		],
		[ 418 ],
		0, 2, 2025, 4, 0, 1,
		[
			'tVideoGame',
		],
		[
			'Necronomico-OP1',
			'Necronomico-ED1',
		]
	),
	new Anime(
		'1323/149460',
		[
			'Mattaku Saikin no Tantei to Kitara',
			'まったく最近の探偵ときたら',
			'Detectives These Days Are Crazy!',
		],
		[ 839 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tComedy',
			'tDetective',
			'tFavoriteAnime',
			'tMystery',
			'tSeinen',
		],
		[
			'Mattan-OP1',
			'Mattan-ED1',
		]
	),
	new Anime(
		'1445/150685',
		[
			'Koujo Denka no Kateikyoushi',
			'公女殿下の家庭教師',
			"Private Tutor to the Duke's Daughter",
		],
		[ 478 ],
		0, 2, 2025, 1, 0, 1,
		[
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'KoujoDenkaNoKateiKyoushi-OP1',
			'KoujoDenkaNoKateiKyoushi-ED1',
		]
	),
	new Anime(
		'1182/149879',
		[
			'Takopii no Genzai',
			'タコピーの原罪',
			"Takopi's Original Sin",
		],
		[ 1991 ],
		3, 2, 2025, 0, 1, 1,
		[
			'tDrama',
			'tPsychological',
			'tSciFi',
			'tShounen',
			'tTimeTravel',
			'tFavoriteAnime',
		],
		[
			'TakopiiNoGenzai-OP1',
			'TakopiiNoGenzai-ED1',
		]
	),
	new Anime(
		'1221/148863',
		[
			'Hibi wa Sugiredo Meshi Umashi',
			'日々は過ぎれど飯うまし',
			'Food for the Soul',
		],
		[ 132 ],
		0, 1, 2025, 4, 0, 1,
		[
			'tGourmet',
			'tCGDCT',
			'tAdultCast',
			'tFavoriteAnime',
			'tFavoriteEDVisual',
		],
		[
			'Hibimeshi-OP1',
			'Hibimeshi-ED1',
			'Hibimeshi-ED1v2',
			'Hibimeshi-ED1v3',
		]
	),
	new Anime(
		'1066/148358',
		[
			'Teogonia',
		],
		[ 406 ],
		0, 1, 2025, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'Teogonia-OP1',
			'Teogonia-ED1',
			'Teogonia-ED1v2',
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
		0, 1, 2025, 2, 2, 1,
		[
			'tComedy',
			'tSupernatural',
			'tEcchi',
		],
		[
			'Aimodarkelf-OP1',
			'Aimodarkelf-ED1',
			'Aimodarkelf-ED1v2',
			'Aimodarkelf-ED1v3',
		]
	),
	new Anime(
		'1511/148642',
		[
			'Apocalypse Hotel',
			'アポカリプスホテル',
		],
		[ 1893 ],
		0, 1, 2025, 4, 0, 1,
		[
			'tSciFi',
			'tComedy',
			'tFavoriteAnime',
		],
		[
			'ApocalypseHotel-OP1',
			'ApocalypseHotel-ED1',
			'ApocalypseHotel-ED2',
		]
	),
	new Anime(
		'1677/148603',
		[
			'Mono',
		],
		[ 2917 ],
		0, 1, 2025, 3, 0, 1,
		[
			'tComedy',
			'tCGDCT',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
		],
		[
			'Mono-OP1',
			'Mono-ED1',
			'Mono-ED1v2',
			'Mono-ED1v3',
			'Mono-ED1v4',
			'Mono-ED1v5',
			'Mono-ED1v6',
			'Mono-ED1v7',
			'Mono-ED1v8',
			'Mono-ED1v9',
			'Mono-ED1v10',
		]
	),
	new Anime(
		'1979/148096',
		[
			'Uchuujin MuuMuu',
			'宇宙人ムームー',
		],
		[ 28 ],
		0, 1, 2025, 0, 0, 1,
		[
			'tComedy',
			'tSciFi',
			'tSeinen',
			'tFavoriteOPSong_2',
		],
		[
			'UchuujinMuuMuu-OP1',
			'UchuujinMuuMuu-OP2',
			'UchuujinMuuMuu-ED1',
			'UchuujinMuuMuu-ED2',
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
		0, 1, 2025, 0, 0, 1,
		[
			'tSliceofLife',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'NinKoro-OP1',
			'NinKoro-OP1v2',
			'NinKoro-ED1',
			'NinKoro-ED1v2',
			'NinKoro-ED1v3',
			'NinKoro-ED1v4',
			'NinKoro-ED1v5',
			'NinKoro-ED1v6',
			'NinKoro-ED1v7',
			'NinKoro-ED1v8',
			'NinKoro-ED1v9',
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
		0, 1, 2025, 1, 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'Kanpekiseijo-OP1',
			'Kanpekiseijo-ED1',
			'Kanpekiseijo-ED1v2',
			'Kanpekiseijo-ED1v3',
			'Kanpekiseijo-ED1v4',
		]
	),
	new Anime(
		'1691/148602',
		[
			'Summer Pockets',
		],
		[ 91 ],
		0, 1, 2025, 6, 0, 1,
		[
			'tRomance',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPVisual_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_2',
		],
		[
			'SummerPockets-OP1',
			'SummerPockets-OP1v2',
			'SummerPockets-OP1v3',
			'SummerPockets-OP1v4',
			'SummerPockets-OP1v5',
			'SummerPockets-OP2',
			'SummerPockets-OP2v2',
			'SummerPockets-OP2v3',
			'SummerPockets-OP2v4',
			'SummerPockets-OP2v5',
			'SummerPockets-OP2v6',
			'SummerPockets-ED1',
			'SummerPockets-ED1v2',
			'SummerPockets-ED1v3',
			'SummerPockets-ED2',
			'SummerPockets-ED3',
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
		0, 1, 2025, 0, 0, 1,
		[
			'tMystery',
			'tSupernatural',
			'tHistorical',
			'tSchool',
			'tShounen',
		],
		[
			'ChuuzenjiSensei-OP1',
			'ChuuzenjiSensei-ED1',
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
		0, 1, 2025, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLovePolygon',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'ShiunjiKeNoKodomotachi-OP1',
			'ShiunjiKeNoKodomotachi-ED1',
		]
	),
	new Anime(
		'1944/148218',
		[
			"Zatsu Tabi: That's Journey",
			"ざつ旅 -That's Journey-",
		],
		[ 2622 ],
		0, 1, 2025, 0, 0, 1,
		[
			'tAdventure',
			'tSliceofLife',
			'tSeinen',
			'tIyashikei',
			'tFavoriteAnime',
		],
		[
			'ZatsuTabi-OP1',
			'ZatsuTabi-ED1',
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
		0, 1, 2025, 0, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tSchool',
		],
		[
			'MakinaSan-OP1',
			'MakinaSan-ED1',
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
		0, 1, 2025, 2, 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tComedy',
			'tSchool',
		],
		[
			'GorillaNoKami-OP1',
			'GorillaNoKami-ED1',
		]
	),
	new Anime(
		'1526/150689',
		[
			'Witch Watch',
			'ウィッチウォッチ',
		],
		[ 1722 ],
		0, 1, 2025, 0, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tUrbanFantasy',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPVisual_1',
		],
		[
			'WitchWatch-OP1',
			'WitchWatch-OP1v2',
			'WitchWatch-OP2',
			'WitchWatch-OP3',
			'WitchWatch-ED1',
			'WitchWatch-ED2',
			'WitchWatch-ED3',
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
		0, 1, 2025, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
		],
		[
			'OssanKensei-OP1',
			'OssanKensei-ED1',
		]
	),
	new Anime(
		'1719/150050',
		[
			'Kowloon Generic Romance',
			'九龍ジェネリックロマンス',
		],
		[ 1874 ],
		0, 1, 2025, 0, 0, 1,
		[
			'tRomance',
			'tSciFi',
			'tAdultCast',
			'tWorkplace',
			'tSeinen',
			'tMystery',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'KowloonGenericRomance-OP1',
			'KowloonGenericRomance-ED1',
			'KowloonGenericRomance-ED2',
			'KowloonGenericRomance-ED3',
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
		0, 1, 2025, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'Danjoru-OP1',
			'Danjoru-OP1v2',
			'Danjoru-OP1v3',
			'Danjoru-ED1',
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
		0, 1, 2025, 0, 2, 2,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tShounen',
		],
		[
			'TakamineSan-OP1',
			'TakamineSan-ED1',
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
		0, 1, 2025, 0, 0, 1,
		[
			'tComedy',
			'tMusic',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'RockLady-OP1',
			'RockLady-ED1',
		]
	),
	new Anime(
		'1577/147967',
		[
			'Your Forma',
			'ユア・フォルマ',
		],
		[ 1393 ],
		0, 1, 2025, 1, 1, 1,
		[
			'tAdultCast',
			'tMystery',
			'tSciFi',
			'tDetective',
			'tFavoriteAnime',
		],
		[
			'YourForma-OP1',
			'YourForma-ED1',
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
		0, 1, 2025, 1, 0, 1,
		[
			'tFantasy',
			'tMedical',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'YamiHealer-OP1',
			'YamiHealer-OP1v2',
			'YamiHealer-ED1',
			'YamiHealer-ED1v2',
			'YamiHealer-ED1v3',
			'YamiHealer-ED1v4',
			'YamiHealer-ED1v5',
			'YamiHealer-ED1v6',
			'YamiHealer-ED1v7',
			'YamiHealer-ED1v8',
			'YamiHealer-ED1v9',
			'YamiHealer-ED1v10',
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
		0, 1, 2025, 11, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		],
		[
			'TheBeginningAfterTheEnd-OP1',
			'TheBeginningAfterTheEnd-ED1',
			'TheBeginningAfterTheEnd-ED1v2',
			'TheBeginningAfterTheEnd-ED1v3',
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
		0, 1, 2025, 0, 0, 1,
		[
			'tSliceofLife',
			'tSports',
			'tAdultCast',
			'tSeinen',
		],
		[
			'Ballpark-OP1',
			'Ballpark-ED1',
			'Ballpark-ED2',
			'Ballpark-ED3',
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
		0, 1, 2025, 1, 0, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'AruMajo-OP1',
			'AruMajo-OP1v2',
			'AruMajo-ED1',
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
		0, 1, 2025, 7, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHistorical',
		],
		[
			'KijinGentoushou-OP1',
			'KijinGentoushou-OP2',
			'KijinGentoushou-ED1',
			'KijinGentoushou-ED2',
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
		0, 1, 2025, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'KanchigaiNoAtelierMeister-OP1',
			'KanchigaiNoAtelierMeister-OP1v2',
			'KanchigaiNoAtelierMeister-OP1v3',
			'KanchigaiNoAtelierMeister-OP1v4',
			'KanchigaiNoAtelierMeister-OP1v5',
			'KanchigaiNoAtelierMeister-ED1',
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
		0, 1, 2025, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSciFi',
			'tHarem',
			'tIsekai',
			'tMecha',
			'tMilitary',
			'tReincarnation',
			'tSpace',
			'tFavoriteAnime',
		],
		[
			'OreAku-OP1',
			'OreAku-ED1',
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
		0, 0, 2025, 0, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tShounen',
			'tFavoriteOPVisual',
		],
		[
			'IsekaiRed-OP1',
			'IsekaiRed-ED1',
		]
	),
	new Anime(
		'1897/149800',
		[
			'A-Rank Party wo Ridatsu shita Ore wa, Moto Oshiego-tachi to Meikyuu Shinbu wo Mezasu.',
			'Aランクパーティを離脱した俺は、元教え子たちと迷宮深部を目指す。',
			'I Left My A-Rank Party to Help My Former Students Reach the Dungeon Depths!',
		],
		[ 1258 ],
		0, 0, 2025, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong_1',
			'tFavoriteEDSong_2',
			'tFavoriteEDSong_3',
			'tFavoriteEDVisual_1',
			'tFavoriteEDVisual_2',
			'tFavoriteEDVisual_3',
		],
		[
			'Aparida-OP1',
			'Aparida-OP1v2',
			'Aparida-OP1v3',
			'Aparida-ED1',
			'Aparida-ED2',
			'Aparida-ED3',
		]
	),
	new Anime(
		'1758/148719',
		[
			'Sakamoto Days Part 2',
			'SAKAMOTO DAYS 第２クール',
		],
		[ 73 ],
		0, 2, 2025, 0, 1, 1,
		[
			'tAction',
			'tAdultCast',
			'tComedy',
			'tOrganizedCrime',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'SakamotoDaysPart2-OP1',
			'SakamotoDaysPart2-ED1',
		]
	),
	new Anime(
		'1026/146459',
		[
			'Sakamoto Days',
		],
		[ 73 ],
		0, 0, 2025, 0, 1, 1,
		[
			'tAction',
			'tComedy',
			'tAdultCast',
			'tOrganizedCrime',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'SakamotoDays-OP1',
			'SakamotoDays-ED1',
			'SakamotoDays-ED2',
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
		0, 0, 2025, 0, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tSeinen',
		],
		[
			'UbelBlatt-OP1',
			'UbelBlatt-ED1',
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
		0, 0, 2025, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'WelcomeElfSan-OP1',
			'WelcomeElfSan-ED1',
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
		0, 0, 2025, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteEDVisual',
		],
		[
			'Girumasu-OP1',
			'Girumasu-ED1',
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
		0, 0, 2025, 0, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tSchool',
			'tSeinen',
			'tVillainess',
			'tFavoriteAnime',
		],
		[
			'TenseiOjisan-OP1',
			'TenseiOjisan-ED1',
			'TenseiOjisan-ED2',
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
		0, 0, 2025, 0, 0, 2,
		[
			'tDrama',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShoujo',
		],
		[
			'Koishima-OP1',
			'Koishima-ED1',
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
		0, 0, 2025, 0, 0, 1,
		[
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tShounen',
		],
		[
			'ArafoTsuhan-OP1',
			'ArafoTsuhan-ED1',
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
		0, 0, 2025, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteEDSong',
		],
		[
			'Fugukan-OP1',
			'Fugukan-ED1',
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
		0, 0, 2025, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
		],
		[
			'BotsurakuKizoku-OP1',
			'BotsurakuKizoku-OP1v2',
			'BotsurakuKizoku-ED1',
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
		0, 0, 2025, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'MagicMaker-OP1',
			'MagicMaker-ED1',
		]
	),
	new Anime(
		'1382/144602',
		[
			'Honey Lemon Soda',
			'ハニーレモンソーダ',
		],
		[ 7 ],
		0, 0, 2025, 0, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
		],
		[
			'HoneyLemonSoda-OP1',
			'HoneyLemonSoda-ED1',
			'HoneyLemonSoda-ED1v2',
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
		0, 0, 2025, 0, 0, 1,
		[
			'tDrama',
			'tSchool',
			'tSeinen',
		],
		[
			'Hanashura-OP1',
			'Hanashura-ED1',
			'Hanashura-ED1v2',
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
		0, 0, 2025, 8, 0, 2,
		[
			'tFantasy',
			'tIsekai',
			'tFavoriteOPSong',
		],
		[
			'MahoutsukaiNoYakusoku-OP1',
			'MahoutsukaiNoYakusoku-ED1',
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
		0, 0, 2025, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tLoveStatusQuo',
		],
		[
			'Medakawa-OP1',
			'Medakawa-ED1',
			'Medakawa-ED2',
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
		0, 0, 2025, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAdultCast',
			'tWorkplace',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'KonoSuki-OP1',
			'KonoSuki-ED1',
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
		0, 0, 2025, 4, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'Zenshuu-OP1',
			'Zenshuu-ED1',
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
		0, 0, 2025, 0, 0, 2,
		[
			'tComedy',
			'tRomance',
		],
		[
			'KisakiKyouiku-OP1',
			'KisakiKyouiku-ED1',
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
		0, 0, 2025, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLovePolygon',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'Okitsura-OP1',
			'Okitsura-ED1',
			'Okitsura-ED2',
			'Okitsura-ED3',
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
		0, 0, 2025, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tFavoriteAnime',
		],
		[
			'NEETKunoichi-OP1',
			'NEETKunoichi-OP1v2',
			'NEETKunoichi-ED1',
			'NEETKunoichi-ED2',
			'NEETKunoichi-ED3',
			'NEETKunoichi-ED4',
		]
	),
	new Anime(
		'1974/147269',
		[
			'Tasokare Hotel',
			'誰ソ彼ホテル',
		],
		[ 753 ],
		0, 0, 2025, 8, 0, 1,
		[
			'tFantasy',
			'tMystery',
		],
		[
			'TasokareHotel-OP1',
			'TasokareHotel-ED1',
			'TasokareHotel-ED2',
		]
	),
	new Anime(
		'1909/146787',
		[
			'Sorairo Utility (TV)',
			'空色ユーティリティ',
		],
		[ 2009 ],
		0, 0, 2025, 4, 0, 1,
		[
			'tSports',
			'tCGDCT',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'SorairoUtilityTV-OP1',
			'SorairoUtilityTV-ED1',
			'SorairoUtilityTV-ED2',
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
		0, 0, 2025, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'Kurakon-OP1',
			'Kurakon-OP1v2',
			'Kurakon-ED1',
			'Kurakon-ED2',
			'Kurakon-ED3',
			'Kurakon-ED4',
			'Kurakon-ED5',
			'Kurakon-ED6',
		]
	),
	new Anime(
		'1107/143656',
		[
			'Momentary Lily',
			'もめんたりー・リリィ',
		],
		[ 309 ],
		0, 0, 2025, 4, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSciFi',
		],
		[
			'MomentaryLily-OP1',
			'MomentaryLily-OP1v2',
			'MomentaryLily-ED1',
			'MomentaryLily-ED1v2',
			'MomentaryLily-ED1v3',
			'MomentaryLily-ED1v4',
			'MomentaryLily-ED1v5',
			'MomentaryLily-ED1v6',
			'MomentaryLily-ED1v7',
			'MomentaryLily-ED1v8',
			'MomentaryLily-ED1v9',
			'MomentaryLily-ED1v10',
			'MomentaryLily-ED1v11',
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
		0, 0, 2025, 7, 0, 1,
		[
			'tMystery',
			'tAdultCast',
			'tMedical',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'AmekuTakaoNoSuiriKarte-OP1',
			'AmekuTakaoNoSuiriKarte-ED1',
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
		0, 0, 2025, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
		],
		[
			'IzureSaikyou-OP1',
			'IzureSaikyou-OP1v2',
			'IzureSaikyou-ED1',
			'IzureSaikyou-ED1v2',
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
		0, 0, 2025, 2, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
		],
		[
			'SalarymanBig4-OP1',
			'SalarymanBig4-ED1',
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
		0, 0, 2025, 0, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tAdventure',
		],
		[
			'KinomiMaster-OP1',
			'KinomiMaster-ED1',
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
		0, 0, 2025, 0, 2, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tReincarnation',
			'tSeinen',
		],
		[
			'Beheneko-OP1',
			'Beheneko-OP1v2',
			'Beheneko-OP1v3',
			'Beheneko-ED1',
			'Beheneko-ED1v2',
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
		0, 1, 2022, 0, 1, 1,
		[
			'tMystery',
			'tSupernatural',
			'tSuspense',
			'tTimeTravel',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_2',
		],
		[
			'SummertimeRender-OP1',
			'SummertimeRender-OP2',
			'SummertimeRender-ED1',
			'SummertimeRender-ED2',
			'SummertimeRender-ED3',
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
		0, 3, 2024, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tSciFi',
			'tFavoriteAnime',
		],
		[
			'Maou2099-OP1',
			'Maou2099-OP1v2',
			'Maou2099-ED1',
		]
	),
	new Anime(
		'1713/144761',
		[
			'Hamidashi Creative',
			'ハミダシクリエイティブ',
		],
		[ 2370 ],
		0, 3, 2024, 6, 0, 1,
		[
			'tRomance',
			'tSchool',
		],
		[
			'HamidashiCreative-ED1',
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
		0, 3, 2024, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tTimeTravel',
			'tShoujo',
		],
		[
			'Yarinaoshi-OP1',
			'Yarinaoshi-ED1',
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
		0, 3, 2024, 0, 0, 1,
		[
			'tRomance',
			'tJosei',
		],
		[
			'HoshiNina-OP1',
			'HoshiNina-ED1',
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
		0, 3, 2024, 0, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tGagHumor',
			'tMythology',
			'tSchool',
			'tWorkplace',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'Yohaji-OP1',
			'Yohaji-OP2',
			'Yohaji-ED1',
			'Yohaji-ED2',
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
		0, 3, 2024, 4, 0, 1,
		[
			'tAction',
			'tSciFi',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'MechaUde-OP1',
			'MechaUde-ED1',
			'MechaUde-ED2',
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
		0, 3, 2024, 0, 0, 1,
		[
			'tRomance',
			'tOrganizedCrime',
			'tSeinen',
		],
		[
			'RaiseTanin-OP1',
			'RaiseTanin-ED1',
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
		0, 3, 2024, 0, 0, 1,
		[
			'tComedy',
			'tAnthropomorphic',
			'tGagHumor',
			'tSchool',
		],
		[
			'Puniru-OP1',
			'Puniru-ED1',
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
		0, 3, 2024, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tReincarnation',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'TsumaSho-OP1',
			'TsumaSho-ED1',
			'TsumaSho-ED1v2',
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
		0, 3, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'SonoChiyushi-OP1',
			'SonoChiyushi-ED1',
			'SonoChiyushi-ED1v2',
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
		0, 3, 2024, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		],
		[
			'KimiWaMeidoSama-OP1',
			'KimiWaMeidoSama-ED1',
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
		0, 3, 2024, 7, 0, 1,
		[
			'tFantasy',
			'tSchool',
		],
		[
			'Mahonare-OP1',
			'Mahonare-OP1v2',
			'Mahonare-OP1v3',
			'Mahonare-ED1',
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
		0, 3, 2024, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAdultCast',
			'tCrossdressing',
			'tFavoriteAnime',
		],
		[
			'GoukonNiIttara-OP1',
			'GoukonNiIttara-ED1',
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
		0, 3, 2024, 0, 0, 1,
		[
			'tAction',
			'tAdultCast',
			'tMahouShoujo',
			'tWorkplace',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'KabushikigaishaMagiLumiere-OP1',
			'KabushikigaishaMagiLumiere-ED1',
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
		0, 3, 2024, 0, 0, 1,
		[
			'tSliceofLife',
			'tAdultCast',
			'tPets',
			'tSeinen',
			'tSupernatural',
		],
		[
			'KinokuInu-OP1',
			'KinokuInu-OP1v2',
			'KinokuInu-OP1v3',
			'KinokuInu-ED1',
			'KinokuInu-ED1v2',
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
		0, 3, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tReincarnation',
		],
		[
			'SayonaraRyuuseiKonnichiwaJinsei-OP1',
			'SayonaraRyuuseiKonnichiwaJinsei-ED1',
		]
	),
	new Anime(
		'1969/145469',
		[
			'Kekkon suru tte, Hontou desu ka',
			'結婚するって、本当ですか 365 Days To The Wedding',
			'365 Days to the Wedding',
		],
		[ 242 ],
		0, 3, 2024, 0, 0, 1,
		[
			'tRomance',
			'tAdultCast',
			'tWorkplace',
			'tSeinen',
			'tFavoriteAnime',
			'tFavoriteEDVisual',
		],
		[
			'Kekkon365DaysWedding-OP1',
			'Kekkon365DaysWedding-ED1',
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
		0, 3, 2024, 0, 0, 1,
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
		],
		[
			'AoNoHako-OP1',
			'AoNoHako-OP2',
			'AoNoHako-ED1',
			'AoNoHako-ED2',
		]
	),
	new Anime(
		'1721/149001',
		[
			'Dandadan 2nd Season',
			'ダンダダン 第2期',
			'Dan Da Dan Season 2',
		],
		[ 1591 ],
		0, 2, 2025, 0, 1, 1,
		[
			'tAction',
			'tComedy',
			'tShounen',
			'tSupernatural',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'DandadanS2-OP1',
			'DandadanS2-ED1',
		]
	),
	new Anime(
		'1584/143719',
		[
			'Dandadan',
			'ダンダダン',
			'Dan Da Dan',
		],
		[ 1591 ],
		0, 3, 2024, 0, 1, 1,
		[
			'tAction',
			'tComedy',
			'tSupernatural',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'Dandadan-OP1',
			'Dandadan-ED1',
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
		0, 3, 2024, 4, 0, 1,
		[
			'tAdultCast',
			'tSliceofLife',
		],
		[
			'NegaPosiAngler-OP1',
			'NegaPosiAngler-ED1',
			'NegaPosiAngler-ED1v2',
		]
	),
	new Anime(
		'1397/145153',
		[
			'Acro Trip',
			'アクロトリップ',
		],
		[ 2698 ],
		0, 3, 2024, 0, 0, 1,
		[
			'tComedy',
			'tParody',
			'tMahouShoujo',
			'tShoujo',
		],
		[
			'AcroTrip-OP1',
			'AcroTrip-ED1',
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
		0, 3, 2024, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tShoujo',
			'tVillainess',
			'tFavoriteAnime',
		],
		[
			'Rekiaku-OP1',
			'Rekiaku-ED1',
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
		0, 3, 2024, 0, 0, 1,
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
		],
		[
			'AmagamiSanChiNoEnmusubi-OP1',
			'AmagamiSanChiNoEnmusubi-OP2',
			'AmagamiSanChiNoEnmusubi-ED1',
			'AmagamiSanChiNoEnmusubi-ED2',
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
		0, 3, 2024, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'Wajutsushi-OP1',
			'Wajutsushi-ED1',
		]
	),
	new Anime(
		'1651/152063',
		[
			'Nageki no Bourei wa Intai shitai Part 2',
			'嘆きの亡霊は引退したい 第2クール',
			'Let This Grieving Soul Retire Cour 2',
		],
		[ 1379 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'NagekiNoBoureiPart2-OP1',
			'NagekiNoBoureiPart2-ED1',
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
		0, 3, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'NagekiNoBourei-OP1',
			'NagekiNoBourei-ED1',
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
		0, 3, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
		],
		[
			'HitoribocchiNoIsekaiKouryaku-OP1',
			'HitoribocchiNoIsekaiKouryaku-ED1',
			'HitoribocchiNoIsekaiKouryaku-ED1v2',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSciFi',
		],
		[
			'NazeBoku-OP1',
			'NazeBoku-OP1v2',
			'NazeBoku-ED1',
			'NazeBoku-ED2',
			'NazeBoku-ED3',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual_2',
			'tFavoriteEDVisual_3',
		],
		[
			'Makeine-OP1',
			'Makeine-ED1',
			'Makeine-ED1v2',
			'Makeine-ED1v3',
			'Makeine-ED1v4',
			'Makeine-ED2',
			'Makeine-ED3',
			'Makeine-ED3v2',
			'Makeine-ED4',
		]
	),
	new Anime(
		'1104/145564',
		[
			'Bye Bye, Earth',
			'ばいばい、アース',
		],
		[ 839 ],
		0, 2, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tAnthropomorphic',
		],
		[
			'ByeByeEarth-OP1',
			'ByeByeEarth-ED1',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLovePolygon',
			'tSchool',
		],
		[
			'KoiWaFutagoDeWarikirenai-OP1',
			'KoiWaFutagoDeWarikirenai-ED1',
			'KoiWaFutagoDeWarikirenai-ED2',
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
		0, 2, 2024, 0, 0, 1,
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
		],
		[
			'MahoAku-OP1',
			'MahoAku-ED1',
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
		0, 2, 2024, 4, 0, 1,
		[
			'tSports',
			'tDrama',
			'tCGDCT',
		],
		[
			'NaNareHanaNare-OP1',
			'NaNareHanaNare-ED1',
			'NaNareHanaNare-ED2',
			'NaNareHanaNare-ED3',
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
		0, 2, 2024, 4, 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tVampire',
			'tFavoriteAnime',
		],
		[
			'MayonakaPunch-OP1',
			'MayonakaPunch-ED1',
			'MayonakaPunch-ED2',
			'MayonakaPunch-ED3',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tSliceofLife',
			'tChildcare',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'Iseyuru-OP1',
			'Iseyuru-ED1',
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
		0, 2, 2024, 2, 2, 2,
		[
			'tComedy',
			'tFantasy',
			'tEcchi',
		],
		[
			'ElfSanWaYaserarenai-OP1',
			'ElfSanWaYaserarenai-OP1v2',
			'ElfSanWaYaserarenai-OP1v3',
			'ElfSanWaYaserarenai-OP1v4',
			'ElfSanWaYaserarenai-OP1v5',
			'ElfSanWaYaserarenai-OP1v6',
			'ElfSanWaYaserarenai-ED1',
			'ElfSanWaYaserarenai-ED2',
			'ElfSanWaYaserarenai-ED3',
			'ElfSanWaYaserarenai-ED4',
			'ElfSanWaYaserarenai-ED5',
			'ElfSanWaYaserarenai-ED6',
			'ElfSanWaYaserarenai-ED7',
			'ElfSanWaYaserarenai-ED8',
			'ElfSanWaYaserarenai-ED8v2',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tComedy',
			'tOtakuCulture',
			'tAdultCast',
			'tFavoriteAnime',
		],
		[
			'Vden-OP1',
			'Vden-ED1',
			'Vden-ED2',
			'Vden-ED3',
			'Vden-ED4',
			'Vden-ED5',
			'Vden-ED6',
			'Vden-ED7',
			'Vden-ED8',
			'Vden-ED9',
			'Vden-ED10',
			'Vden-ED11',
			'Vden-ED12',
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
		0, 2, 2024, 0, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'Wistoria-OP1',
			'Wistoria-ED1',
			'Wistoria-ED1v2',
			'Wistoria-ED1v3',
			'Wistoria-ED1v4',
			'Wistoria-ED2',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'Dahliya-OP1',
			'Dahliya-ED1',
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
		0, 1, 2025, 7, 0, 1,
		[
			'tMystery',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'ShoushiminSeriesS2-OP1',
			'ShoushiminSeriesS2-OP1v2',
			'ShoushiminSeriesS2-ED1',
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
		0, 2, 2024, 7, 0, 1,
		[
			'tMystery',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'ShoushiminSeries-OP1',
			'ShoushiminSeries-ED1',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'Mobkara-OP1',
			'Mobkara-ED1',
			'Mobkara-ED2',
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
		0, 2, 2024, 2, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'DungeonNoNakaNoHito-OP1',
			'DungeonNoNakaNoHito-ED1',
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
		0, 2, 2024, 2, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tVideoGame',
			'tFavoriteAnime',
		],
		[
			'Konofuka-OP1',
			'Konofuka-ED1',
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
		0, 2, 2024, 0, 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tHarem',
			'tOtakuCulture',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'25JigenNoRirisa-OP1',
			'25JigenNoRirisa-OP2',
			'25JigenNoRirisa-OP2v2',
			'25JigenNoRirisa-ED1',
			'25JigenNoRirisa-ED2',
		]
	),
	new Anime(
		'1805/142211',
		[
			'Ramen Akaneko',
			'ラーメン赤猫',
		],
		[ 2642 ],
		0, 2, 2024, 0, 0, 1,
		[
			'tComedy',
			'tAnthropomorphic',
			'tWorkplace',
			'tShounen',
		],
		[
			'RamenAkaneko-OP1',
			'RamenAkaneko-ED1',
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
		0, 2, 2024, 6, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'Atri-OP1',
			'Atri-ED1',
			'Atri-ED2',
			'Atri-ED3',
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
		0, 2, 2024, 2, 0, 1,
		[
			'tRomance',
			'tCrossdressing',
			'tLovePolygon',
			'tSchool',
			'tDrama',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'SenpaiWaOtokonoko-OP1',
			'SenpaiWaOtokonoko-OP1v2',
			'SenpaiWaOtokonoko-OP1v3',
			'SenpaiWaOtokonoko-OP1v4',
			'SenpaiWaOtokonoko-ED1',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		],
		[
			'Hazurewaku-OP1',
			'Hazurewaku-ED1',
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
		0, 2, 2024, 0, 0, 1,
		[
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tComedy',
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'GijiHarem-OP1',
			'GijiHarem-ED1',
			'GijiHarem-ED2',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
		],
		[
			'Parry-OP1',
			'Parry-ED1',
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
		0, 2, 2024, 0, 0, 1,
		[
			'tComedy',
			'tGagHumor',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'Shikanoko-OP1',
			'Shikanoko-ED1',
			'Shikanoko-ED2',
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
		0, 2, 2024, 2, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'IsekaiShikkaku-OP1',
			'IsekaiShikkaku-ED1',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
		],
		[
			'Roshidere-OP1',
			'Roshidere-ED1',
			'Roshidere-ED2',
			'Roshidere-ED3',
			'Roshidere-ED4',
			'Roshidere-ED5',
			'Roshidere-ED6',
			'Roshidere-ED7',
			'Roshidere-ED8',
			'Roshidere-ED9',
			'Roshidere-ED10',
			'Roshidere-ED11',
			'Roshidere-ED12',
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
		0, 2, 2024, 2, 0, 1,
		[
			'tAction',
			'tDrama',
			'tSuspense',
			'tHighStakesGame',
			'tPsychological',
			'tFavoriteOPSong_2',
		],
		[
			'Tasuuketsu-OP1',
			'Tasuuketsu-OP2',
			'Tasuuketsu-ED1',
			'Tasuuketsu-ED2',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'ShinmaiOssan-OP1',
			'ShinmaiOssan-OP1v2-NCBD1080',
			'ShinmaiOssan-ED1',
			'ShinmaiOssan-ED1v2-NCBD1080',
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
		0, 2, 2024, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSciFi',
			'tSeinen',
		],
		[
			'BokuTsuma-OP1',
			'BokuTsuma-ED1',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'GimaiSeikatsu-OP1',
			'GimaiSeikatsu-OP1v2',
			'GimaiSeikatsu-OP1v3',
			'GimaiSeikatsu-ED1',
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
		0, 2, 2024, 0, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		],
		[
			'Maougun-OP1',
			'Maougun-ED1',
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
		3, 1, 2024, 0, 0, 2,
		[
			'tDrama',
			'tSciFi',
			'tSchool',
			'tSeinen',
		],
		[
			'DedededeONA-OP1',
			'DedededeONA-ED1',
			'DedededeONA-ED2',
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
		3, 1, 2024, 0, 0, 1,
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
		0, 0, 2016, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tMilitary',
		],
		[
			'GateS2-OP1',
			'GateS2-ED1',
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
		0, 2, 2015, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tMilitary',
		],
		[
			'Gate-OP1',
			'Gate-ED1',
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
		0, 1, 2024, 0, 0, 1,
		[
			'tYuri',
			'tMusic',
			'tSchool',
			'tDrama',
		],
		[
			'Sasakoi-OP1',
			'Sasakoi-ED1',
			'Sasakoi-ED2',
		]
	),
	new Anime(
		'1177/150344',
		[
			'Kaijuu 8-gou 2nd Season',
			'怪獣8号 第2期',
			'Kaiju No. 8 Season 2',
		],
		[ 10 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tAction',
			'tAdultCast',
			'tFantasy',
			'tMilitary',
			'tSciFi',
			'tShounen',
			'tUrbanFantasy',
			'tFavoriteEDSong',
		],
		[
			'Kaijuu8GouS2-OP1',
			'Kaijuu8GouS2-ED1',
		]
	),
	new Anime(
		'1262/146724',
		[
			'Kaijuu 8-gou: Hoshina no Kyuujitsu',
			'怪獣8号 保科の休日',
			"Hoshina's Day Off",
		],
		[ 10 ],
		2, 0, 2025, 0, 0, 1,
		[
			'tAdultCast',
			'tShounen',
			'tSliceofLife',
		],
		[
			'Kaijuu8GouHoshinaNoKyuujitsu-ED1',
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
		0, 1, 2024, 0, 0, 1,
		[
			'tAction',
			'tAdultCast',
			'tFantasy',
			'tMilitary',
			'tSciFi',
			'tShounen',
			'tUrbanFantasy',
			'tFavoriteEDSong',
		],
		[
			'Kaijuu8Gou-OP1',
			'Kaijuu8Gou-ED1',
		]
	),
	new Anime(
		'1898/141857',
		[
			'The New Gate',
		],
		[ 1687, 2600 ],
		0, 1, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		],
		[
			'TheNewGate-OP1',
			'TheNewGate-ED1',
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
		0, 1, 2024, 2, 0, 1,
		[
			'tMystery',
			'tSupernatural',
			'tEcchi',
		],
		[
			'Totokami-OP1',
			'Totokami-ED1',
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
		0, 1, 2024, 1, 0, 1,
		[
			'tComedy',
			'tYuri',
			'tSchool',
			'tDrama',
			'tShowbiz',
		],
		[
			'SeiyuuRadio-OP1',
			'SeiyuuRadio-OP1v2',
			'SeiyuuRadio-ED1',
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
		0, 1, 2025, 0, 0, 1,
		[
			'tAction',
			'tShounen',
			'tFantasy',
			'tUrbanFantasy',
			'tFavoriteAnime',
		],
		[
			'SentaiDaishikkakuS2-OP1',
			'SentaiDaishikkakuS2-ED1',
			'SentaiDaishikkakuS2-ED2',
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
		0, 1, 2024, 0, 0, 1,
		[
			'tAction',
			'tShounen',
			'tFantasy',
			'tUrbanFantasy',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'SentaiDaishikkaku-OP1',
			'SentaiDaishikkaku-ED1',
		]
	),
	new Anime(
		'1375/141863',
		[
			'Vampire Dormitory',
			'ヴァンパイア男子寮',
		],
		[ 478 ],
		0, 1, 2024, 0, 0, 1,
		[
			'tRomance',
			'tSupernatural',
			'tCrossdressing',
			'tVampire',
			'tShoujo',
			'tLovePolygon',
		],
		[
			'VampireDormitory-OP1',
			'VampireDormitory-ED1',
		]
	),
	new Anime(
		'1739/140995',
		[
			'Blue Archive the Animation',
			'ブルーアーカイブ The Animation',
		],
		[ 2009, 2134 ],
		0, 1, 2024, 8, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'BlueArchive-OP1',
			'BlueArchive-ED1',
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
		0, 1, 2024, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tFavoriteAnime',
		],
		[
			'JiisanBaasanWakagaeru-OP1',
			'JiisanBaasanWakagaeru-ED1',
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
		0, 1, 2024, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPVisual_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_2',
		],
		[
			'YozakuraSanChiNoDaisakusen-OP1',
			'YozakuraSanChiNoDaisakusen-OP2',
			'YozakuraSanChiNoDaisakusen-ED1',
			'YozakuraSanChiNoDaisakusen-ED2',
		]
	),
	new Anime(
		'1058/141559',
		[
			'Tonari no Youkai-san',
			'となりの妖怪さん',
		],
		[ 839 ],
		0, 1, 2024, 2, 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tMythology',
			'tUrbanFantasy',
		],
		[
			'TonariNoYoukaiSan-OP1',
			'TonariNoYoukaiSan-ED1',
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
		0, 1, 2024, 4, 0, 1,
		[
			'tMusic',
			'tDrama',
			'tFavoriteAnime',
			'tFavoriteEDSong_2',
		],
		[
			'YoruKura-OP1',
			'YoruKura-ED1',
			'YoruKura-ED2',
			'YoruKura-ED3',
			'YoruKura-ED4',
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
		0, 1, 2024, 0, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
		],
		[
			'HananoiKun-OP1',
			'HananoiKun-OP1v2',
			'HananoiKun-ED1',
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
		0, 1, 2024, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tUrbanFantasy',
			'tFavoriteAnime',
		],
		[
			'HenjinNoSaladBowl-OP1',
			'HenjinNoSaladBowl-ED1',
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
		0, 1, 2024, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'Madome-OP1',
			'Madome-ED1',
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
		0, 1, 2024, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tIsekai',
		],
		[
			'Lv2Cheat-OP1',
			'Lv2Cheat-ED1',
		]
	),
	new Anime(
		'1137/147179',
		[
			'Unnamed Memory Act.2',
			'Unnamed Memory Season 2',
		],
		[ 1974 ],
		0, 0, 2025, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tRomance',
		],
		[
			'UnnamedMemoryS2-OP1',
			'UnnamedMemoryS2-ED1',
		]
	),
	new Anime(
		'1143/142439',
		[
			'Unnamed Memory',
		],
		[ 1974 ],
		0, 1, 2024, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tFavoriteOPSong',
		],
		[
			'UnnamedMemory-OP1',
			'UnnamedMemory-ED1',
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
		0, 1, 2024, 0, 0, 1,
		[
			'tDrama',
			'tGourmet',
			'tAdultCast',
			'tWorkplace',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'BartenderKamiNoGlass-OP1',
			'BartenderKamiNoGlass-ED1',
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
		0, 3, 2024, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
			'tFavoriteEDVisual',
		],
		[
			'KanteiSkillS2-OP1',
			'KanteiSkillS2-ED1',
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
		0, 1, 2024, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'KanteiSkill-OP1',
			'KanteiSkill-ED1',
		]
	),
	new Anime(
		'1372/141859',
		[
			'Astro Note',
			'アストロノオト',
		],
		[ 94 ],
		0, 1, 2024, 4, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSciFi',
		],
		[
			'AstroNote-OP1',
			'AstroNote-ED1',
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
		0, 1, 2024, 4, 0, 1,
		[
			'tAdventure',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'ShuumatsuTrain-OP1',
			'ShuumatsuTrain-ED1',
		]
	),
	new Anime(
		'1154/149614',
		[
			'Tensei shitara Dainana Ouji Datta node, Kimama ni Majutsu wo Kiwamemasu 2nd Season',
			'転生したら第七王子だったので、気ままに魔術を極めます 第2期',
			'I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability Season 2',
		],
		[ 2212 ],
		0, 2, 2025, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tReincarnation',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'DainanaojiS2-OP1',
			'DainanaojiS2-ED1',
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
		0, 1, 2024, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'Dainanaoji-OP1',
			'Dainanaoji-ED1',
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
		0, 1, 2024, 1, 0, 1,
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
		],
		[
			'OokamiToKoushinryou2024-OP1',
			'OokamiToKoushinryou2024-OP2',
			'OokamiToKoushinryou2024-ED1',
			'OokamiToKoushinryou2024-ED2',
		]
	),
	new Anime(
		'1523/141680',
		[
			'Re:Monster',
		],
		[ 37 ],
		0, 1, 2024, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'ReMonster-OP1',
			'ReMonster-ED1',
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
		0, 1, 2024, 1, 0, 1,
		[
			'tFantasy',
			'tSuspense',
			'tUrbanFantasy',
			'tHighStakesGame',
			'tStrategyGame',
		],
		[
			'KamiWaGameNiUeteiru-OP1',
			'KamiWaGameNiUeteiru-ED1',
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
		0, 1, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteEDSong',
		],
		[
			'Dekisoko-OP1',
			'Dekisoko-ED1',
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
		0, 1, 2024, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tMythology',
			'tShounen',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'TenshiTsuki-OP1',
			'TenshiTsuki-ED1',
		]
	),
	new Anime(
		'1390/120708',
		[
			'Odd Taxi Movie: In the Woods',
			'映画 ODD TAXI イン・ザ・ウッズ',
		],
		[ 28, 1872 ],
		4, 1, 2022, 4, 0, 1,
		[
			'tDrama',
			'tMystery',
			'tSuspense',
			'tAdultCast',
			'tAnthropomorphic',
			'tOrganizedCrime',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1981/113348',
		[
			'Odd Taxi',
			'オッドタクシー',
		],
		[ 28, 1872 ],
		0, 1, 2021, 4, 0, 1,
		[
			'tDrama',
			'tMystery',
			'tSuspense',
			'tAdultCast',
			'tAnthropomorphic',
			'tOrganizedCrime',
			'tFavoriteAnime',
		],
		[
			'OddTaxi-OP1',
			'OddTaxi-ED1',
			'OddTaxi-ED2',
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
		0, 0, 2024, 2, 2, 1,
		[
			'tAction',
			'tComedy',
			'tYuri',
			'tEcchi',
			'tMahouShoujo',
		],
		[
			'MahouShoujoNiAkogarete-OP1',
			'MahouShoujoNiAkogarete-ED1',
			'MahouShoujoNiAkogarete-ED2',
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
		0, 0, 2024, 1, 2, 1,
		[
			'tFantasy',
			'tIsekai',
			'tEcchi',
		],
		[
			'IsekaiNoYu-OP1',
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
		0, 0, 2024, 1, 0, 1,
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
		],
		[
			'SaijakuTamer-OP1',
			'SaijakuTamer-ED1',
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
		0, 0, 2024, 2, 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tMedical',
			'tReincarnation',
		],
		[
			'GekaiElise-OP1',
			'GekaiElise-ED1',
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
		0, 2, 2024, 0, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHistorical',
			'tMythology',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'SengokuYoukoSenmaKontonHen-OP1',
			'SengokuYoukoSenmaKontonHen-ED1',
			'SengokuYoukoSenmaKontonHen-ED2',
			'SengokuYoukoSenmaKontonHen-ED3',
		]
	),
	new Anime(
		'1645/140627',
		[
			'Sengoku Youko',
			'戦国妖狐',
		],
		[ 314 ],
		0, 0, 2024, 0, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tHistorical',
			'tFantasy',
			'tMythology',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'SengokuYouko-OP1',
			'SengokuYouko-ED1',
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
		0, 0, 2024, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tSchool',
			'tVillainess',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_2',
			'tFavoriteAnime',
		],
		[
			'AkuyakuLv99-OP1',
			'AkuyakuLv99-OP2',
			'AkuyakuLv99-ED1',
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
		0, 0, 2022, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tComedy',
		],
		[
			'Leadale-OP1',
			'Leadale-ED1',
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
		0, 0, 2024, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tFavoriteOPSong',
		],
		[
			'DosankoGal-OP1',
			'DosankoGal-ED1',
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
		0, 0, 2024, 0, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tGourmet',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'HimesamaGoumon-OP1',
			'HimesamaGoumon-ED1',
			'HimesamaGoumon-ED1v2',
			'HimesamaGoumon-ED1v3',
			'HimesamaGoumon-ED1v4',
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
		0, 0, 2024, 0, 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tMythology',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'OrokaNaTenshi-OP1',
			'OrokaNaTenshi-ED1',
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
		0, 0, 2024, 2, 0, 1,
		[
			'tFantasy',
			'tUrbanFantasy',
			'tSliceofLife',
			'tIyashikei',
		],
		[
			'KyuujitsuNoWarumonoSan-OP1',
			'KyuujitsuNoWarumonoSan-ED1',
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
		0, 0, 2024, 1, 0, 1,
		[
			'tTimeTravel',
			'tRomance',
			'tTimeTravel',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		],
		[
			'7thTimeLoop-OP1',
			'7thTimeLoop-ED1',
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
		0, 0, 2024, 0, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'SaikyouTank-OP1',
			'SaikyouTank-ED1',
			'SaikyouTank-ED1v2',
			'SaikyouTank-ED1v3',
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
		0, 0, 2025, 2, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tAdultCast',
			'tUrbanFantasy',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'SoloLevelingS2-OP1',
			'SoloLevelingS2-ED1',
			'SoloLevelingS2-ED2',
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
		0, 0, 2024, 2, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tAdultCast',
			'tUrbanFantasy',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'SoloLeveling-OP1',
			'SoloLeveling-ED1',
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
		0, 0, 2024, 0, 0, 1,
		[
			'tRomance',
			'tAdultCast',
			'tShoujo',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'YubisakiToRenren-OP1',
			'YubisakiToRenren-ED1',
		]
	),
	new Anime(
		'1478/151722',
		[
			'Kekkon Yubiwa Monogatari II',
			'結婚指輪物語Ⅱ',
			'Tales of Wedding Rings Season 2',
		],
		[ 2405 ],
		0, 3, 2025, 0, 2, 0,
		[
			'tAction',
			'tEcchi',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tRomance',
			'tSeinen',
			'tFavoriteOPSong',
		],
		[
			'KekkonYubiwaMonogatariS2-OP1',
			'KekkonYubiwaMonogatariS2-ED1',
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
		0, 0, 2024, 0, 2, 1,
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
		],
		[
			'KekkonYubiwaMonogatari-OP1',
			'KekkonYubiwaMonogatari-ED1',
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
		0, 0, 2024, 0, 0, 1,
		[
			'tSupernatural',
			'tRomance',
			'tMythology',
			'tShoujo',
		],
		[
			'MomochiSan-OP1',
			'MomochiSan-ED1',
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
		0, 0, 2024, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tAdventure',
			'tFavoriteAnime',
		],
		[
			'ChiyuMahou-OP1',
			'ChiyuMahou-ED1',
			'ChiyuMahou-ED1v2',
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
		0, 0, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'NozomanuFushi-OP1',
			'NozomanuFushi-ED1',
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
		0, 0, 2024, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'SasakiToPiiChan-OP1',
			'SasakiToPiiChan-ED1',
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
		0, 0, 2024, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
		],
		[
			'SokushiCheat-OP1',
			'SokushiCheat-ED1',
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
		0, 0, 2024, 0, 2, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tShounen',
		],
		[
			'Mabotai-OP1',
			'Mabotai-ED1',
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
		0, 0, 2024, 0, 1, 1,
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
		],
		[
			'DungeonMeshi-OP1',
			'DungeonMeshi-OP2',
			'DungeonMeshi-OP2v2',
			'DungeonMeshi-ED1',
			'DungeonMeshi-ED2',
			'DungeonMeshi-ED2v2',
		]
	),
	new Anime(
		'1699/146979',
		[
			'Ishura 2nd Season',
			'異修羅 第2期',
		],
		[ 911 ],
		0, 0, 2025, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tGore',
			'tIsekai',
		],
		[
			'IshuraS2-OP1',
			'IshuraS2-ED1',
		]
	),
	new Anime(
		'1426/140122',
		[
			'Ishura',
			'異修羅',
		],
		[ 911 ],
		0, 0, 2024, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tGore',
			'tIsekai',
		],
		[
			'Ishura-OP1',
			'Ishura-ED1',
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
		0, 0, 2024, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		],
		[
			'Mohunade-OP1',
			'Mohunade-ED1',
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
		3, 0, 2023, 2, 0, 1,
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
		3, 3, 2021, 2, 0, 1,
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
		3, 1, 2021, 2, 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tGagHumor',
			'tOrganizedCrime',
			'tFavoriteAnime',
		],
		[
			'Gokushufudou-OP1',
			'Gokushufudou-ED1',
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
		0, 3, 2020, 1, 1, 1,
		[
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		],
		[
			'MajoNoTabitabi-OP1',
			'MajoNoTabitabi-ED1',
		]
	),
	new Anime(
		'1330/137476',
		[
			'Good Night World',
			'グッド・ナイト・ワールド',
		],
		[ 951 ],
		3, 3, 2023, 2, 1, 1,
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
		0, 0, 2025, 1, 0, 1,
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
		],
		[
			'KusuriyaNoHitorigotoS2-OP1',
			'KusuriyaNoHitorigotoS2-OP2',
			'KusuriyaNoHitorigotoS2-ED1',
			'KusuriyaNoHitorigotoS2-ED2',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tDrama',
			'tMystery',
			'tHistorical',
			'tMedical',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_2',
			'tFavoriteAnime',
		],
		[
			'KusuriyaNoHitorigoto-OP1',
			'KusuriyaNoHitorigoto-OP2',
			'KusuriyaNoHitorigoto-ED1',
			'KusuriyaNoHitorigoto-ED2',
		]
	),
	new Anime(
		'1136/138410',
		[
			'Undead Unluck',
			'アンデッドアンラック',
		],
		[ 287 ],
		0, 3, 2023, 0, 1, 1,
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
		],
		[
			'UndeadUnluck-OP1',
			'UndeadUnluck-OP2',
			'UndeadUnluck-ED1',
			'UndeadUnluck-ED2',
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
		0, 3, 2023, 3, 0, 1,
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
		],
		[
			'HoshikuzuTelepath-OP1',
			'HoshikuzuTelepath-ED1',
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
		0, 0, 2025, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tParody',
			'tSchool',
			'tSeinen',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		],
		[
			'HyakkanoS2-OP1',
			'HyakkanoS2-OP1v2',
			'HyakkanoS2-ED1',
			'HyakkanoS2-ED2',
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
		0, 3, 2023, 0, 0, 1,
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
		],
		[
			'Hyakkano-OP1',
			'Hyakkano-ED1',
			'Hyakkano-ED2',
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
		0, 3, 2023, 4, 0, 1,
		[
			'tAction',
			'tVideoGame',
		],
		[
			'Bokuame-OP1',
			'Bokuame-ED1',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tAdventure',
		],
		[
			'PotionDanomi-OP1',
			'PotionDanomi-ED1',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tComedy',
			'tVillainess',
			'tTimeTravel',
			'tFavoriteAnime',
		],
		[
			'Tearmoon-OP1',
			'Tearmoon-ED1',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
		],
		[
			'Butaliver-OP1',
			'Butaliver-ED1',
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
		0, 3, 2023, 2, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
			'tTimeTravel',
		],
		[
			'KikanshaNoMahou-OP1',
			'KikanshaNoMahou-ED1',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tVampire',
			'tYuri',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'Hikikomari-OP1',
			'Hikikomari-ED1',
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
		0, 3, 2023, 0, 1, 1,
		[
			'tAction',
			'tDrama',
			'tFantasy',
			'tGore',
			'tShounen',
			'tSciFi',
		],
		[
			'HametsuNoOukoku-OP1',
			'HametsuNoOukoku-ED1',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tRomance',
			'tSchool',
		],
		[
			'Kimizero-OP1',
			'Kimizero-ED1',
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
		0, 3, 2023, 0, 0, 1,
		[
			'tSliceofLife',
			'tSchool',
			'tShoujo',
		],
		[
			'YuzukiSan-OP1',
			'YuzukiSan-ED1',
		]
	),
	new Anime(
		'1588/138395',
		[
			'16bit Sensation: Another Layer',
			'16bitセンセーション ANOTHER LAYER',
		],
		[ 1873 ],
		0, 3, 2023, 2, 0, 1,
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
		],
		[
			'16BitSensation-OP1',
			'16BitSensation-OP1v2',
			'16BitSensation-ED1',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'Ikenaikyo-OP1',
			'Ikenaikyo-ED1',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tYuri',
			'tIsekai',
			'tSchool',
			'tVillainess',
			'tFavoriteAnime',
		],
		[
			'Wataoshi-OP1',
			'Wataoshi-OP1v2',
			'Wataoshi-ED1',
			'Wataoshi-ED1v2',
			'Wataoshi-ED2',
			'Wataoshi-ED2v2',
			'Wataoshi-ED3',
			'Wataoshi-ED3v2',
			'Wataoshi-ED3v3',
			'Wataoshi-ED3v4',
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
		0, 3, 2023, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tHarem',
			'tReincarnation',
			'tSchool',
		],
		[
			'SeikenGakuin-OP1',
			'SeikenGakuin-ED1',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tVideoGame',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		],
		[
			'ToaruOssan-OP1',
			'ToaruOssan-ED1',
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
		0, 2, 2024, 0, 0, 1,
		[
			'tAction',
			'tDrama',
			'tSuperPower',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteEDSong_7',
		],
		[
			'ShyS2-OP1',
			'ShyS2-ED1',
			'ShyS2-ED1v2',
			'ShyS2-ED1v3',
			'ShyS2-ED1v4',
			'ShyS2-ED1v5',
			'ShyS2-ED1v6',
			'ShyS2-ED2',
			'ShyS2-ED3',
			'ShyS2-ED4',
			'ShyS2-ED5',
			'ShyS2-ED6',
			'ShyS2-ED7',
		]
	),
	new Anime(
		'1114/136742',
		[
			'Shy',
			'シャイ',
		],
		[ 441 ],
		0, 3, 2023, 0, 0, 1,
		[
			'tAction',
			'tDrama',
			'tSuperPower',
			'tShounen',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'Shy-OP1',
			'Shy-ED1',
			'Shy-ED1v2',
			'Shy-ED1v3',
			'Shy-ED1v4',
			'Shy-ED1v5',
			'Shy-ED1v6',
			'Shy-ED1v7',
			'Shy-ED1v8',
			'Shy-ED2',
			'Shy-ED3',
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
		0, 3, 2023, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
		],
		[
			'BoushokuNoBerserk-OP1',
			'BoushokuNoBerserk-ED1',
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
		0, 3, 2023, 3, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tGagHumor',
			'tFavoriteAnime',
		],
		[
			'Dekoboko-OP1',
			'Dekoboko-ED1',
			'Dekoboko-ED2',
			'Dekoboko-ED3',
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
		0, 3, 2024, 0, 0, 1,
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
		],
		[
			'ShangrilaFrontierS2-OP1',
			'ShangrilaFrontierS2-OP2',
			'ShangrilaFrontierS2-ED1',
			'ShangrilaFrontierS2-ED2',
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
		0, 3, 2023, 0, 0, 1,
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
		],
		[
			'ShangrilaFrontier-OP1',
			'ShangrilaFrontier-OP2',
			'ShangrilaFrontier-ED1',
			'ShangrilaFrontier-ED2',
		]
	),
	new Anime(
		'1763/140359',
		[
			'Ragna Crimson',
			'ラグナクリムゾン',
		],
		[ 300 ],
		0, 3, 2023, 0, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tShounen',
		],
		[
			'RagnaCrimson-OP1',
			'RagnaCrimson-OP2',
			'RagnaCrimson-ED1',
			'RagnaCrimson-ED2',
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
		0, 3, 2023, 0, 0, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tShounen',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
			'tFavoriteEDSong',
			'tFavoriteEDVisual_1',
			'tFavoriteEDVisual_2',
			'tFavoriteAnime',
		],
		[
			'SousouNoFrieren-OP1',
			'SousouNoFrieren-OP2',
			'SousouNoFrieren-ED1',
			'SousouNoFrieren-ED1v2',
			'SousouNoFrieren-ED1v3',
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
		0, 3, 2023, 0, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tOrganizedCrime',
			'tFavoriteOPSong',
		],
		[
			'OjouToBankenKun-OP1',
			'OjouToBankenKun-ED1',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'SRankMusume-OP1',
			'SRankMusume-ED1',
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
		0, 2, 2023, 3, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'ShiroSeijoToKuroBokushi-OP1',
			'ShiroSeijoToKuroBokushi-ED1',
		]
	),
	new Anime(
		'1002/138524',
		[
			'Helck',
			'ヘルク',
		],
		[ 41 ],
		0, 2, 2023, 2, 0, 1,
		[
			'tAction',
			'tFantasy',
		],
		[
			'Helck-OP1',
			'Helck-OP2',
			'Helck-ED1',
			'Helck-ED2',
		]
	),
	new Anime(
		'1346/138731',
		[
			'Dark Gathering',
			'ダークギャザリング',
		],
		[ 28 ],
		0, 2, 2023, 0, 1, 1,
		[
			'tHorror',
			'tSupernatural',
			'tShounen',
		],
		[
			'DarkGathering-OP1',
			'DarkGathering-OP1v2',
			'DarkGathering-ED1',
			'DarkGathering-ED2',
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
		0, 2, 2023, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'EiyuuKyoushitsu-OP1',
			'EiyuuKyoushitsu-ED1',
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
		0, 2, 2023, 0, 1, 1,
		[
			'tComedy',
			'tSuspense',
			'tAdultCast',
			'tSurvival',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'Zom100-OP1',
			'Zom100-ED1',
			'Zom100-ED1v2',
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
		2, 3, 2023, 2, 0, 1,
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
		0, 2, 2023, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tFavoriteAnime',
		],
		[
			'Temple-OP1',
			'Temple-ED1',
			'Temple-ED2',
			'Temple-ED3',
		]
	),
	new Anime(
		'1571/134525',
		[
			'Liar Liar',
			'ライアー・ライアー',
		],
		[ 1857 ],
		0, 2, 2023, 1, 0, 1,
		[
			'tSuspense',
			'tPsychological',
			'tSchool',
			'tStrategyGame',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
		],
		[
			'LiarLiar-OP1',
			'LiarLiar-ED1',
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
		0, 2, 2023, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'Level1-OP1',
			'Level1-ED1',
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
		0, 2, 2023, 2, 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tAnthropomorphic',
			'tFavoriteAnime',
		],
		[
			'Dekineko-OP1',
			'Dekineko-ED1',
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
		0, 2, 2023, 0, 0, 1,
		[
			'tDrama',
			'tSciFi',
			'tSuspense',
			'tMedical',
			'tPsychological',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'AiNoDenshi-OP1',
			'AiNoDenshi-ED1',
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
		0, 2, 2023, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'Nanatsuma-OP1',
			'Nanatsuma-OP1v2',
			'Nanatsuma-OP1v3',
			'Nanatsuma-ED2',
			'Nanatsuma-ED3',
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
		0, 2, 2023, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'SeijaMusou-OP1',
			'SeijaMusou-ED1',
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
		0, 2, 2023, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tVillainess',
			'tJosei',
			'tFavoriteAnime',
		],
		[
			'LasTame-OP1',
			'LasTame-ED1',
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
		0, 2, 2023, 7, 1, 1,
		[
			'tFantasy',
			'tMystery',
			'tAdultCast',
			'tDetective',
			'tHistorical',
			'tUrbanFantasy',
			'tVampire',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		],
		[
			'UndeadGirl-OP1',
			'UndeadGirl-ED1',
			'UndeadGirl-ED1v2',
			'UndeadGirl-ED1v3',
		]
	),
	new Anime(
		'1297/150516',
		[
			'Jidou Hanbaiki ni Umarekawatta Ore wa Meikyuu wo Samayou 2nd Season',
			'自動販売機に生まれ変わった俺は迷宮を彷徨う2nd season',
			'Reborn as a Vending Machine, I Now Wander the Dungeon Season 2',
		],
		[ 1299, 418 ],
		0, 2, 2025, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		],
		[
			'JihankiS2-OP1',
			'JihankiS2-ED1',
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
		0, 2, 2023, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		],
		[
			'Jihanki-OP1',
			'Jihanki-ED1',
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
		0, 0, 2025, 7, 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tRomance',
			'tAdultCast',
			'tHistorical',
		],
		[
			'WatashiNoShiawaseS2-OP1',
			'WatashiNoShiawaseS2-ED1',
		]
	),
	new Anime(
		'1435/150176',
		[
			'Watashi no Shiawase na Kekkon: Watashi no Shiawase na Katachi',
			'わたしの幸せな結婚 わたしの 幸せのかたち',
			'My Happy Marriage: The Shape of My Happiness',
		],
		[ 290 ],
		1, 0, 2024, 7, 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tAdultCast',
			'tHistorical',
		],
		[
			'WatashiNoShiawase-OP1',
			'WatashiNoShiawase-ED1',
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
		0, 2, 2023, 7, 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tRomance',
			'tAdultCast',
			'tHistorical',
		],
		[
			'WatashiNoShiawase-OP1',
			'WatashiNoShiawase-ED1',
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
		0, 2, 2023, 0, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'SukiNaKo-OP1',
			'SukiNaKo-ED1',
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
		0, 2, 2023, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
		],
		[
			'YumemiruDanshi-OP1',
			'YumemiruDanshi-ED1',
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
		0, 2, 2023, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteEDSong',
		],
		[
			'OkashiNaTensei-OP1',
			'OkashiNaTensei-ED1',
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
		0, 2, 2023, 2, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tUrbanFantasy',
		],
		[
			'Lv1Room-OP1',
			'Lv1Room-ED1',
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
		0, 2, 2023, 8, 0, 1,
		[
			'tAdventure',
			'tFantasy',
		],
		[
			'RyzaNoAtelier-OP1',
			'RyzaNoAtelier-ED1',
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
		0, 2, 2023, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAdultCast',
			'tWorkplace',
			'tFavoriteAnime',
		],
		[
			'UchiNoKaisha-OP1',
			'UchiNoKaisha-ED1',
			'UchiNoKaisha-ED1v2',
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
		0, 2, 2023, 4, 0, 1,
		[
			'tFantasy',
			'tMythology',
		],
		[
			'Ayaka-OP1',
			'Ayaka-ED1',
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
		0, 2, 2023, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		],
		[
			'JitsuOreSaikyo-OP1',
			'JitsuOreSaikyo-ED1',
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
		0, 2, 2023, 11, 0, 1,
		[
			'tFantasy',
			'tMusic',
			'tIdol',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'GenjitsuNoYohane-OP1',
			'GenjitsuNoYohane-ED1',
			'GenjitsuNoYohane-ED1v2',
		]
	),
	new Anime(
		'6/75700',
		[
			'Love Live! The School Idol Movie',
			'ラブライブ！The School Idol Movie',
		],
		[ 14 ],
		4, 0, 2015, 4, 0, 1,
		[
			'tIdol',
			'tMusic',
			'tSchool',
			'tSliceofLife',
		],
		[
			'LoveLiveMovie-ED1',
		]
	),
	new Anime(
		'10/59101',
		[
			'Love Live! School Idol Project 2nd Season',
			'ラブライブ! School idol project 2期',
			'Love Live! School Idol Project 2',
		],
		[ 14 ],
		0, 1, 2014, 11, 0, 1,
		[
			'tIdol',
			'tMusic',
			'tSchool',
			'tSliceofLife',
		],
		[
			'LoveLiveS2-OP1',
			'LoveLiveS2-ED1',
			'LoveLiveS2-ED2',
			'LoveLiveS2-ED2v2',
			'LoveLiveS2-ED3',
			'LoveLiveS2-ED4',
			'LoveLiveS2-ED5',
			'LoveLiveS2-ED6',
			'LoveLiveS2-ED7',
			'LoveLiveS2-ED8',
			'LoveLiveS2-ED9',
			'LoveLiveS2-ED10',
			'LoveLiveS2-ED11',
		]
	),
	new Anime(
		'11/56849',
		[
			'Love Live! School Idol Project',
			'ラブライブ! School idol project',
		],
		[ 14 ],
		0, 0, 2013, 11, 0, 1,
		[
			'tIdol',
			'tMusic',
			'tSchool',
			'tSliceofLife',
		],
		[
			'LoveLive-OP1',
			'LoveLive-ED1',
			'LoveLive-ED2',
			'LoveLive-ED3',
			'LoveLive-ED3v2',
			'LoveLive-ED4',
			'LoveLive-ED5',
			'LoveLive-ED6',
			'LoveLive-ED7',
			'LoveLive-ED8',
			'LoveLive-ED9',
		]
	),
	new Anime(
		'5/85435',
		[
			'Amagi Brilliant Park',
			'甘城ブリリアントパーク',
		],
		[ 2 ],
		0, 3, 2014, 1, 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tWorkplace',
		],
		[
			'Amaburi-OP1',
			'Amaburi-OP1v2',
			'Amaburi-OP1v3',
			'Amaburi-OP1v4',
			'Amaburi-ED1',
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
		0, 3, 2011, 6, 2, 1,
		[
			'tDrama',
			'tHarem',
			'tRomance',
			'tSchool',
		],
		[
			'MashiroiroSymphony-OP1',
			'MashiroiroSymphony-ED1',
		]
	),
	new Anime(
		'1397/133339',
		[
			'Niehime to Kemono no Ou',
			'贄姫と獣の王',
			'Sacrificial Princess and the King of Beasts',
		],
		[ 7 ],
		0, 1, 2023, 0, 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tAnthropomorphic',
			'tShoujo',
		],
		[
			'Niehime-OP1',
			'Niehime-OP2',
			'Niehime-ED1',
			'Niehime-ED2',
			'Niehime-ED2v2',
			'Niehime-ED3',
		]
	),
	new Anime(
		'1078/151796',
		[
			'Ao no Orchestra Season 2',
			'青のオーケストラ Season2',
			'The Blue Orchestra Season 2',
		],
		[ 22 ],
		0, 3, 2025, 2, 0, 0,
		[
			'tDrama',
			'tMusic',
			'tSchool',
		],
		[
			'AoNoOrchestraS2-OP1',
			'AoNoOrchestraS2-ED1',
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
		0, 1, 2023, 2, 0, 1,
		[
			'tDrama',
			'tMusic',
			'tSchool',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'AoNoOrchestra-OP1',
			'AoNoOrchestra-ED1',
		]
	),
	new Anime(
		'1006/143302',
		[
			'[Oshi no Ko] 2nd Season',
			'【推しの子】第2期',
		],
		[ 95 ],
		0, 2, 2024, 0, 0, 1,
		[
			'tDrama',
			'tReincarnation',
			'tShowbiz',
			'tSeinen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'OshiNoKoS2-OP1',
			'OshiNoKoS2-ED1',
			'OshiNoKoS2-ED1v2',
			'OshiNoKoS2-ED1v3',
		]
	),
	new Anime(
		'1812/134736',
		[
			'[Oshi no Ko]',
			'【推しの子】',
		],
		[ 95 ],
		0, 1, 2023, 0, 0, 1,
		[
			'tDrama',
			'tReincarnation',
			'tShowbiz',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'OshiNoKo-OP1',
			'OshiNoKo-ED1',
			'OshiNoKo-ED1v2',
		]
	),
	new Anime(
		'1005/139809',
		[
			'Dead Mount Death Play Part 2',
			'デッドマウント・デスプレイ',
		],
		[ 1857 ],
		0, 3, 2023, 0, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tReincarnation',
			'tSeinen',
			'tUrbanFantasy',
			'tFavoriteOPSong',
		],
		[
			'DeadMountDeathPlayPart2-OP1',
			'DeadMountDeathPlayPart2-OP1v2',
			'DeadMountDeathPlayPart2-ED1',
		]
	),
	new Anime(
		'1930/133758',
		[
			'Dead Mount Death Play',
			'デッドマウント・デスプレイ',
		],
		[ 1857 ],
		0, 1, 2023, 0, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tReincarnation',
			'tSeinen',
			'tUrbanFantasy',
		],
		[
			'DeadMountDeathPlay-OP1',
			'DeadMountDeathPlay-OP1v2',
			'DeadMountDeathPlay-OP1v3',
			'DeadMountDeathPlay-ED1',
			'DeadMountDeathPlay-ED1v2',
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
		0, 1, 2023, 2, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tRomance',
		],
		[
			'Koshakutei-OP1',
			'Koshakutei-ED1',
			'Koshakutei-ED2',
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
		0, 1, 2023, 0, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'Kimisomu-OP1',
			'Kimisomu-ED1',
			'Kimisomu-ED2',
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
		0, 1, 2023, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tRomance',
		],
		[
			'Isenido-OP1',
			'Isenido-ED1',
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
		0, 1, 2023, 0, 0, 1,
		[
			'tRomance',
			'tSupernatural',
			'tChildcare',
			'tOtakuCulture',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'OtonariNiGinga-OP1',
			'OtonariNiGinga-ED1',
			'OtonariNiGinga-ED1v2',
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
		0, 1, 2023, 0, 0, 1,
		[
			'tComedy',
			'tSciFi',
			'tPets',
			'tShounen',
		],
		[
			'KawaisugiCrisis-OP1',
			'KawaisugiCrisis-ED1',
			'KawaisugiCrisis-ED1v2',
			'KawaisugiCrisis-ED1v3',
			'KawaisugiCrisis-ED1v4',
			'KawaisugiCrisis-ED1v5',
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
		0, 2, 2024, 0, 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tHarem',
			'tRomance',
			'tShounen',
			'tAdultCast',
		],
		[
			'MegamiNoCafeTerraceS2-OP1',
			'MegamiNoCafeTerraceS2-OP1v2',
			'MegamiNoCafeTerraceS2-OP1v3',
			'MegamiNoCafeTerraceS2-ED1',
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
		0, 1, 2023, 0, 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tHarem',
			'tRomance',
			'tShounen',
			'tAdultCast',
		],
		[
			'MegamiNoCafeTerrace-OP1',
			'MegamiNoCafeTerrace-ED1',
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
		0, 1, 2023, 0, 0, 1,
		[
			'tComedy',
			'tShounen',
			'tSupernatural',
			'tOtakuCulture',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		],
		[
			'EdomaeElf-OP1',
			'EdomaeElf-ED1',
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
		0, 1, 2023, 0, 0, 1,
		[
			'tComedy',
			'tWorkplace',
			'tYuri',
		],
		[
			'Watayuri-OP1',
			'Watayuri-ED1',
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
		0, 1, 2023, 0, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tSeinen',
			'tFavoriteEDSong',
		],
		[
			'IsekaiOneTurnKillNeesan-OP1',
			'IsekaiOneTurnKillNeesan-OP2',
			'IsekaiOneTurnKillNeesan-ED1',
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
		0, 0, 2024, 0, 0, 1,
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
		],
		[
			'MashleS2-OP1',
			'MashleS2-OP1v2',
			'MashleS2-ED1',
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
		0, 1, 2023, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tGagHumor',
			'tParody',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'Mashle-OP1',
			'Mashle-OP1v2',
			'Mashle-ED1',
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
		0, 1, 2023, 2, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tParody',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'YuushaGaShinda-OP1',
			'YuushaGaShinda-OP1v2',
			'YuushaGaShinda-ED1',
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
		0, 1, 2023, 0, 1, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tSeinen',
		],
		[
			'Kamikatsu-OP1',
			'Kamikatsu-ED1',
			'Kamikatsu-ED1v2',
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
		0, 1, 2023, 0, 0, 1,
		[
			'tDrama',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'SkipToLoafer-OP1',
			'SkipToLoafer-ED1',
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
		0, 1, 2023, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tSchool',
		],
		[
			'Iseleve-OP1',
			'Iseleve-ED1',
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
		0, 1, 2023, 0, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tRomance',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		],
		[
			'GuiguiKuru-OP1',
			'GuiguiKuru-ED1',
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
		0, 1, 2023, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tReincarnation',
			'tRomance',
		],
		[
			'TenseiKizoku-OP1',
			'TenseiKizoku-ED1',
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
		0, 1, 2023, 0, 1, 1,
		[
			'tAdventure',
			'tMystery',
			'tSciFi',
			'tSeinen',
			'tFavoriteEDSong',
		],
		[
			'TengokuDaimakyou-OP1',
			'TengokuDaimakyou-ED1',
			'TengokuDaimakyou-ED1v2',
			'TengokuDaimakyou-ED2',
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
		0, 0, 2024, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'BokuyabaS2-OP1',
			'BokuyabaS2-ED1',
		]
	),
	new Anime(
		'1710/135998',
		[
			'Boku no Kokoro no Yabai Yatsu: Twi-Yaba',
			'僕の心のヤバイやつ ツイヤバ',
		],
		[ 247 ],
		3, 3, 2023, 2, 0, 1,
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
		0, 1, 2023, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'Bokuyaba-OP1',
			'Bokuyaba-ED1',
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
		0, 1, 2023, 2, 0, 1,
		[
			'tRomance',
			'tVideoGame',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'YamadaLv999-OP1',
			'YamadaLv999-OP1v2',
			'YamadaLv999-ED1',
			'YamadaLv999-ED1v2',
			'YamadaLv999-ED1v3',
			'YamadaLv999-ED1v4',
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
		0, 2, 2021, 2, 1, 1,
		[
			'tAction',
			'tSuspense',
			'tHighStakesGame',
			'tStrategyGame',
			'tSuperPower',
			'tSurvival',
			'tFavoriteAnime',
		],
		[
			'Deatte5ByouDeBattle-OP1',
			'Deatte5ByouDeBattle-ED1',
		]
	),
	new Anime(
		'1429/95946',
		[
			'Akame ga Kill!',
			'アカメが斬る！',
		],
		[ 314 ],
		0, 2, 2014, 0, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tShounen',
			'tGore',
		],
		[
			'AkameGaKill-OP1',
			'AkameGaKill-OP2',
			'AkameGaKill-ED1',
			'AkameGaKill-ED2',
		]
	),
	new Anime(
		'7/86665',
		[
			'Aho Girl',
			'アホガール',
		],
		[ 51 ],
		0, 2, 2017, 3, 0, 1,
		[
			'tComedy',
			'tGagHumor',
			'tSchool',
			'tShounen',
		],
		[
			'AhoGirl-OP1',
			'AhoGirl-OP1v2',
			'AhoGirl-OP1v3',
			'AhoGirl-OP1v4',
			'AhoGirl-OP1v5',
			'AhoGirl-OP1v6',
			'AhoGirl-OP1v7',
			'AhoGirl-OP1v8',
			'AhoGirl-OP1v9',
			'AhoGirl-OP1v10',
			'AhoGirl-OP1v11',
			'AhoGirl-ED1',
		]
	),
	new Anime(
		'1472/93813',
		[
			"Knight's & Magic",
			'ナイツ&マジック',
		],
		[ 441 ],
		0, 2, 2017, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tMecha',
			'tReincarnation',
			'tSchool',
		],
		[
			'KnightsAndMagic-OP1',
			'KnightsAndMagic-ED1',
		]
	),
	new Anime(
		'1951/95080',
		[
			'Island',
		],
		[ 91 ],
		0, 2, 2018, 6, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSciFi',
			'tTimeTravel',
			'tFavoriteAnime',
		],
		[
			'Island-OP1',
			'Island-OP1v2',
			'Island-OP2',
			'Island-ED1',
			'Island-ED1v2',
			'Island-ED2',
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
		2, 0, 2016, 4, 0, 1,
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
		0, 2, 2015, 4, 0, 1,
		[
			'tDrama',
			'tSchool',
			'tSuperPower',
			'tFavoriteAnime',
		],
		[
			'Charlotte-OP1',
			'Charlotte-ED1',
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
		0, 3, 2024, 1, 1, 1,
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
		],
		[
			'ReZeroS3-OP1',
			'ReZeroS3-OP1v2',
			'ReZeroS3-ED1',
			'ReZeroS3-ED2',
			'ReZeroS3-ED3',
			'ReZeroS3-ED4',
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
		0, 0, 2021, 1, 1, 1,
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
			'tFavoriteEDSong_1',
		],
		[
			'ReZeroS2Part2-OP1',
			'ReZeroS2-ED1',
			'ReZeroS2Part2-ED1',
			'ReZeroS2Part2-ED2',
			'ReZeroS2Part2-ED3',
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
		0, 2, 2020, 1, 1, 1,
		[
			'tDrama',
			'tFantasy',
			'tSuspense',
			'tIsekai',
			'tPsychological',
			'tTimeTravel',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		],
		[
			'ReZeroS2-OP1',
			'ReZeroS2-ED1',
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
		4, 3, 2019, 1, 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tSuspense',
			'tPsychological',
			'tFavoriteAnime',
		],
		[
			'ReZeroHyouketsuNoKizuna-ED1',
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
		4, 3, 2018, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'ReZeroMemorySnow-ED1',
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
		0, 1, 2016, 1, 1, 1,
		[
			'tDrama',
			'tFantasy',
			'tSuspense',
			'tIsekai',
			'tPsychological',
			'tTimeTravel',
			'tFavoriteAnime',
			'tFavoriteOPSong_2',
			'tFavoriteEDSong_1',
			'tFavoriteEDSong_3',
		],
		[
			'ReZero-OP1',
			'ReZero-OP2',
			'ReZero-ED1',
			'ReZero-ED1v2',
			'ReZero-ED1v3',
			'ReZero-ED2',
			'ReZero-ED3',
			'ReZero-ED3v2',
			'ReZero-ED4',
			'ReZero-ED5',
			'ReZero-ED6',
		]
	),
	new Anime(
		'6/89687',
		[
			'Busou Shoujo Machiavellianism: Doki! "Goken-darake" no Ian Ryokou',
			'武装少女マキャヴェリズム ドキッ！「五剣だらけ」の慰安旅行',
		],
		[ 300, 957 ],
		1, 3, 2017, 0, 0, 1,
		[
			'tAction',
			'tSchool',
			'tShounen',
			'tEcchi',
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
		0, 1, 2017, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tMartialArts',
			'tHarem',
			'tSchool',
			'tShounen',
			'tEcchi',
		],
		[
			'BusouShoujoMachiavellianism-OP1',
			'BusouShoujoMachiavellianism-OP1v2-NCBD1080',
			'BusouShoujoMachiavellianism-ED1',
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
		4, 2, 2019, 4, 0, 1,
		[
			'tDrama',
			'tSupernatural',
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'TenkiNoKo-ED1',
			'TenkiNoKo-ED2',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
		],
		[
			'AnkokuHeishi-OP1',
			'AnkokuHeishi-ED1',
		]
	),
	new Anime(
		'1078/131921',
		[
			'Ayakashi Triangle',
			'あやかしトライアングル',
		],
		[ 957 ],
		0, 0, 2023, 0, 2, 1,
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
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'AyakashiTriangle-OP1',
			'AyakashiTriangle-ED1',
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
		0, 0, 2023, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tLoveStatusQuo',
			'tFavoriteAnime',
		],
		[
			'KuboSanWaMobWoYurusenai-OP1',
			'KuboSanWaMobWoYurusenai-ED1',
		]
	),
	new Anime(
		'1206/151772',
		[
			'Tondemo Skill de Isekai Hourou Meshi 2',
			'とんでもスキルで異世界放浪メシ2',
			'Campfire Cooking in Another World with My Absurd Skill Season 2',
		],
		[ 569 ],
		0, 3, 2025, 1, 0, 0,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tGourmet',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'TonsukiS2-OP1',
			'TonsukiS2-ED1',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tGourmet',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'Tonsuki-OP1',
			'Tonsuki-ED1',
		]
	),
	new Anime(
		'1111/135927',
		[
			'Mononogatari 2nd Season',
			'もののがたり 第二章',
		],
		[ 1258 ],
		0, 2, 2023, 0, 0, 1,
		[
			'tAction',
			'tSupernatural',
			'tAdultCast',
			'tMythology',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'MononogatariS2-OP1',
			'MononogatariS2-ED1',
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
		0, 0, 2023, 0, 0, 1,
		[
			'tAction',
			'tSupernatural',
			'tAdultCast',
			'tMythology',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'Mononogatari-OP1',
			'Mononogatari-ED1',
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
		0, 0, 2023, 0, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tAnthropomorphic',
			'tHistorical',
			'tShounen',
			'tUrbanFantasy',
		],
		[
			'NokemonoTachiNoYoru-OP1',
			'NokemonoTachiNoYoru-ED1',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tGenben',
			'tReincarnation',
		],
		[
			'Auo-OP1',
			'Auo-ED1',
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
		4, 2, 2016, 0, 0, 1,
		[
			'tDrama',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'KoeNoKatachi-OP1',
			'KoeNoKatachi-ED1',
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
		4, 0, 2007, 4, 0, 1,
		[
			'tDrama',
			'tRomance',
		],
		[
			'Byousoku5Centimeter-ED1',
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
		0, 0, 2023, 2, 1, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'BenriyaSaitouSan-OP1',
			'BenriyaSaitouSan-OP1v2',
			'BenriyaSaitouSan-ED1',
			'BenriyaSaitouSan-ED1v2-NCBD1080',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'Roukin8-OP1',
			'Roukin8-ED1',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		],
		[
			'SaikyouOnmyouji-OP1',
			'SaikyouOnmyouji-OP1v2',
			'SaikyouOnmyouji-ED1',
			'SaikyouOnmyouji-ED2',
			'SaikyouOnmyouji-ED3',
			'SaikyouOnmyouji-ED4',
			'SaikyouOnmyouji-ED5',
			'SaikyouOnmyouji-ED6',
		]
	),
	new Anime(
		'12/73984',
		[
			'Ben-To',
			'ベン・トー',
		],
		[ 287 ],
		0, 3, 2011, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tGourmet',
			'tMartialArts',
		],
		[
			'Bento-OP1',
			'Bento-OP1v2',
			'Bento-OP2',
			'Bento-ED1',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		],
		[
			'OtonariNoTenshiSama-OP1',
			'OtonariNoTenshiSama-ED1',
			'OtonariNoTenshiSama-ED2',
			'OtonariNoTenshiSama-ED3',
		]
	),
	new Anime(
		'1553/133767',
		[
			'Buddy Daddies',
		],
		[ 132 ],
		0, 0, 2023, 4, 0, 1,
		[
			'tAction',
			'tComedy',
			'tChildcare',
			'tOrganizedCrime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'BuddyDaddies-OP1',
			'BuddyDaddies-OP1v2',
			'BuddyDaddies-ED1',
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
		0, 0, 2023, 4, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'ArsNoKyojuu-OP1',
			'ArsNoKyojuu-ED1',
			'ArsNoKyojuu-ED2',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tVideoGame',
			'tRomance',
			'tVillainess',
			'tFavoriteAnime',
		],
		[
			'Tsunlise-OP1',
			'Tsunlise-ED1',
		]
	),
	new Anime(
		'1884/131748',
		[
			'Revenger',
			'リベンジャー',
		],
		[ 30 ],
		0, 0, 2023, 4, 1, 1,
		[
			'tAction',
			'tDrama',
			'tMystery',
			'tAdultCast',
			'tHistorical',
			'tOrganizedCrime',
			'tSamurai',
		],
		[
			'Revenger-OP1',
			'Revenger-ED1',
		]
	),
	new Anime(
		'1693/138042',
		[
			'Sugar Apple Fairy Tale Part 2',
			'シュガーアップル・フェアリーテイル',
		],
		[ 7 ],
		0, 2, 2023, 1, 0, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tRomance',
			'tVisualArts',
			'tShoujo',
		],
		[
			'SugarAppleFairyTalePart2-OP1',
			'SugarAppleFairyTalePart2-ED1',
		]
	),
	new Anime(
		'1897/131300',
		[
			'Sugar Apple Fairy Tale',
			'シュガーアップル・フェアリーテイル',
		],
		[ 7 ],
		0, 0, 2023, 1, 0, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tRomance',
			'tVisualArts',
			'tShoujo',
		],
		[
			'SugarAppleFairyTale-OP1',
			'SugarAppleFairyTale-ED1',
			'SugarAppleFairyTale-ED2',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tSliceofLife',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		],
		[
			'IsekaiNonbiriNouka-OP1',
			'IsekaiNonbiriNouka-ED1',
			'IsekaiNonbiriNouka-ED1v2',
			'IsekaiNonbiriNouka-ED1v3',
			'IsekaiNonbiriNouka-ED1v4',
			'IsekaiNonbiriNouka-ED1v5',
			'IsekaiNonbiriNouka-ED1v6',
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
		0, 0, 2023, 0, 0, 1,
		[
			'tComedy',
			'tCGDCT',
			'tGenben',
			'tSchool',
			'tShounen',
		],
		[
			'Onimai-OP1',
			'Onimai-ED1',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'Hyouken-OP1',
			'Hyouken-ED1',
			'Hyouken-ED1v2',
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
		0, 2, 2023, 1, 0, 1,
		[
			'tAction',
			'tMystery',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'SpyKyoushitsuS2-OP1',
			'SpyKyoushitsuS2-ED1',
			'SpyKyoushitsuS2-ED2',
			'SpyKyoushitsuS2-ED3',
			'SpyKyoushitsuS2-ED4',
			'SpyKyoushitsuS2-ED5',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tAction',
			'tMystery',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		],
		[
			'SpyKyoushitsu-OP1',
			'SpyKyoushitsu-ED1',
			'SpyKyoushitsu-ED2',
			'SpyKyoushitsu-ED3',
			'SpyKyoushitsu-ED4',
			'SpyKyoushitsu-ED5',
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
		0, 0, 2023, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'TomoChanWaOnnanoko-OP1',
			'TomoChanWaOnnanoko-ED1',
			'TomoChanWaOnnanoko-ED2',
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
		0, 1, 2016, 2, 0, 1,
		[
			'tIyashikei',
			'tSchool',
			'tSliceofLife',
			'tFavoriteAnime',
		],
		[
			'TanakaKunWaItsumoKedaruge-OP1',
			'TanakaKunWaItsumoKedaruge-ED1',
			'TanakaKunWaItsumoKedaruge-ED2',
		]
	),
	new Anime(
		'1453/132695',
		[
			'Inu ni Nattara Suki na Hito ni Hirowareta. Specials',
			'犬になったら好きな人に拾われた。OVA',
		],
		[ 2314 ],
		2, 0, 2023, 2, 2, 1,
		[
			'tComedy',
			'tEcchi',
		],
		[
			'InuhiroOVA-OP1',
			'Inuhiro-ED1-NCBD1080',
			'Inuhiro-ED1v2-NCBD1080	',
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
		0, 0, 2023, 2, 2, 1,
		[
			'tComedy',
			'tEcchi',
		],
		[
			'Inuhiro-OP1',
			'Inuhiro-OP1v2',
			'Inuhiro-ED1',
			'Inuhiro-ED1v2',
			'Inuhiro-ED2',
			'Inuhiro-ED2v2',
			'Inuhiro-ED3',
			'Inuhiro-ED3v2',
			'Inuhiro-ED4',
			'Inuhiro-ED4v2',
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
		0, 0, 2023, 2, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tAdultCast',
			'tMythology',
			'tWorkplace',
			'tUrbanFantasy',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'KooriZokuseiDanshiToCoolNaDouryouJoshi-OP1',
			'KooriZokuseiDanshiToCoolNaDouryouJoshi-ED1',
			'KooriZokuseiDanshiToCoolNaDouryouJoshi-ED1v2',
			'KooriZokuseiDanshiToCoolNaDouryouJoshi-ED1v3',
			'KooriZokuseiDanshiToCoolNaDouryouJoshi-ED1v4',
			'KooriZokuseiDanshiToCoolNaDouryouJoshi-ED1v5',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tYuri',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'TentenKakumei-OP1',
			'TentenKakumei-ED1',
			'TentenKakumei-ED1v2',
			'TentenKakumei-ED1v3',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		],
		[
			'NingenFushin-OP1',
			'NingenFushin-ED1',
		]
	),
	new Anime(
		'10/89671',
		[
			'Himouto! Umaru-chan R',
			'干物妹！うまるちゃんR',
		],
		[ 95 ],
		0, 3, 2017, 0, 0, 1,
		[
			'tComedy',
			'tOtakuCulture',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'HimoutoUmaruChanR-OP1',
			'HimoutoUmaruChanR-ED1',
		]
	),
	new Anime(
		'7/76826',
		[
			'Himouto! Umaru-chan OVA',
			'干物妹！うまるちゃん OVA',
		],
		[ 95 ],
		1, 3, 2015, 0, 0, 1,
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
		0, 2, 2015, 0, 0, 1,
		[
			'tComedy',
			'tOtakuCulture',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'HimoutoUmaruChan-OP1',
			'HimoutoUmaruChan-ED1',
			'HimoutoUmaruChan-ED1v2',
		]
	),
	new Anime(
		'1044/152103',
		[
			'Isekai Quartet 3',
			'異世界かるてっと3',
		],
		[ 443 ],
		0, 3, 2025, 4, 0, 0,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'IsekaiQuartetS3-OP1',
			'IsekaiQuartetS3-ED1',
		]
	),
	new Anime(
		'1854/121605',
		[
			'Isekai Quartet Movie: Another World',
			'劇場版 異世界かるてっと ～あなざーわーるど～',
		],
		[ 443 ],
		4, 1, 2022, 4, 0, 1,
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
		0, 0, 2020, 4, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'IsekaiQuartetS2-OP1',
			'IsekaiQuartetS2-OP1v2',
			'IsekaiQuartetS2-ED1',
			'IsekaiQuartetS2-ED2',
		]
	),
	new Anime(
		'1965/99667',
		[
			'Isekai Quartet',
			'異世界かるてっと',
		],
		[ 443 ],
		0, 1, 2019, 4, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'IsekaiQuartet-OP1',
			'IsekaiQuartet-ED1',
			'IsekaiQuartet-ED2',
		]
	),
	new Anime(
		'2/84858',
		[
			'Hinako Note',
			'ひなこのーと',
		],
		[ 911 ],
		0, 1, 2017, '4-koma	manga', 0, 1,
		[
			'tSliceofLife',
			'tCGDCT',
			'tPerformingArts',
		],
		[
			'HinakoNote-OP1',
			'HinakoNote-ED1',
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
		1, 1, 2015, 0, 0, 1,
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
		0, 3, 2014, 0, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tLovePolygon',
			'tMusic',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
			'tFavoriteEDVisual_1',
			'tFavoriteEDVisual_2',
		],
		[
			'KimiUso-OP1',
			'KimiUso-OP2',
			'KimiUso-OP2v2',
			'KimiUso-ED1',
			'KimiUso-ED2',
			'KimiUso-ED3',
		]
	),
	new Anime(
		'8/89690',
		[
			'Gabriel DropOut Specials',
			'ガヴリールドロップアウトOVA',
		],
		[ 95 ],
		2, 0, 2017, 0, 0, 1,
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
		0, 0, 2017, 0, 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tCGDCT',
			'tMythology',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'GabrielDropout-OP1',
			'GabrielDropout-ED1',
			'GabrielDropout-ED2',
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
		0, 3, 2017, 3, 0, 1,
		[
			'tComedy',
			'tOtakuCulture',
			'tWorkplace',
			'tFavoriteAnime',
		],
		[
			'BlendS-OP1',
			'BlendS-ED1',
			'BlendS-ED1v2',
			'BlendS-ED1v3',
			'BlendS-ED1v4',
			'BlendS-ED1v5',
			'BlendS-ED1v6',
			'BlendS-ED2',
		]
	),
	new Anime(
		'1088/149903',
		[
			'Grand Blue Season 2',
			'ぐらんぶる Season 2',
			'Grand Blue Dreaming Season 2',
		],
		[ 2527, 1379 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tAdultCast',
			'tComedy',
			'tGagHumor',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'GrandBlueS2-OP1',
			'GrandBlueS2-ED1',
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
		0, 2, 2018, 0, 0, 1,
		[
			'tAdultCast',
			'tComedy',
			'tGagHumor',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'GrandBlue-OP1',
			'GrandBlue-ED1',
			'GrandBlue-ED2',
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
		2, 3, 2012, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tSupernatural',
			'tFavoriteAnime',
		],
		[
			'KokoroConnectMichiRandom-OP1',
			'KokoroConnectMichiRandom-ED1',
		]
	),
	new Anime(
		'2/39665',
		[
			'Kokoro Connect',
			'ココロコネクト',
		],
		[ 300 ],
		0, 2, 2012, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tSupernatural',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'KokoroConnect-OP1',
			'KokoroConnect-OP2',
			'KokoroConnect-ED1',
			'KokoroConnect-ED2',
			'KokoroConnect-ED3',
		]
	),
	new Anime(
		'1419/140614',
		[
			'Shoujo-tachi wa Kouya wo Mezasu: Iubeki Monokashira',
			'少女たちは荒野を目指す 言うべきものかしら',
		],
		[ 271, 439 ],
		1, 0, 2016, 6, 0, 1,
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
		0, 0, 2016, 6, 0, 1,
		[
			'tSchool',
			'tOtakuCulture',
		],
		[
			'Shokomeza-OP1',
			'Shokomeza-ED1',
			'Shokomeza-ED2',
		]
	),
	new Anime(
		'3/83000',
		[
			'Koi to Senkyo to Chocolate: Koi Imouto!',
			'恋と選挙とチョコレート 第13話「恋妹！」',
		],
		[ 436 ],
		2, 0, 2013, 6, 0, 1,
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
		0, 2, 2012, 6, 0, 1,
		[
			'tDrama',
			'tHarem',
			'tRomance',
			'tSchool',
		],
		[
			'KoiToSenkyoToChocolate-OP1',
			'KoiToSenkyoToChocolate-ED1',
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
		2, 3, 2013, 1, 2, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tSchool',
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
		0, 3, 2013, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tSchool',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'MachineDollWaKizutsukanai-OP1',
			'MachineDollWaKizutsukanai-ED1',
			'MachineDollWaKizutsukanai-ED1v2',
			'MachineDollWaKizutsukanai-ED1v3',
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
		1, 1, 2014, 1, 0, 1,
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
		0, 3, 2013, 1, 0, 1,
		[
			'tComedy',
			'tHarem',
			'tRomance',
			'tSchool',
		],
		[
			'NouCome-OP1',
			'NouCome-OP2',
			'NouCome-ED1',
			'NouCome-ED1v2',
			'NouCome-ED1v3',
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
		1, 2, 2012, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tOtakuCulture',
		],
		[
			'NogizakaFinale-OP1',
			'NogizakaFinale-ED1',
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
		0, 3, 2009, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tOtakuCulture',
		],
		[
			'NogizakaPurezza-OP1',
			'NogizakaPurezza-ED1',
			'NogizakaPurezza-ED1v2',
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
		0, 2, 2008, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tOtakuCulture',
		],
		[
			'NogizakaHarukaNoHimitsu-ED1',
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
		2, 3, 2011, 1, 0, 1,
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
		2, 0, 2009, 1, 0, 1,
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
		0, 3, 2008, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
		],
		[
			'Toradora-OP1',
			'Toradora-OP2',
			'Toradora-ED1',
			'Toradora-ED2',
			'Toradora-ED2v2',
			'Toradora-ED2v3',
			'Toradora-ED2v4',
			'Toradora-ED3',
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
		0, 3, 2012, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tVisualArts',
			'tFavoriteAnime',
		],
		[
			'Sakurasou-OP1',
			'Sakurasou-OP2',
			'Sakurasou-OP3',
			'Sakurasou-ED1',
			'Sakurasou-ED2',
			'Sakurasou-ED3',
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
		0, 3, 2022, 0, 0, 1,
		[
			'tComedy',
			'tSciFi',
			'tCrossdressing',
			'tGagHumor',
			'tSchool',
			'tSuperPower',
			'tShounen',
		],
		[
			'4Uso-OP1',
			'4Uso-OP1v2',
			'4Uso-ED1',
			'4Uso-ED1v2',
			'4Uso-ED1v3',
			'4Uso-ED1v4',
			'4Uso-ED1v5',
			'4Uso-ED1v6',
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
		0, 1, 2022, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		],
		[
			'ShokeiShoujoNoVirginRoad-OP1',
			'ShokeiShoujoNoVirginRoad-ED1',
		]
	),
	new Anime(
		'3/84603',
		[
			'Mangaka-san to Assistant-san to The Animation Specials',
			'マンガ家さんとアシスタントさんと THE ANIMATION',
		],
		[ 218 ],
		0, 1, 2014, 3, 0, 1,
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
		0, 1, 2014, 3, 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tHarem',
			'tSeinen',
		],
		[
			'MangakaSan-OP1',
			'MangakaSan-ED1',
			'MangakaSan-ED2',
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
		0, 3, 2022, 1, 0, 1,
		[
			'tDrama',
			'tJosei',
			'tRomance',
		],
		[
			'MushikaburiHime-OP1',
			'MushikaburiHime-ED1',
		]
	),
	new Anime(
		'1614/90408',
		[
			'Darling in the FranXX',
			'ダーリン・イン・ザ・フランキス',
		],
		[ 56, 803, 1835 ],
		0, 0, 2018, 4, 0, 1,
		[
			'tAction',
			'tDrama',
			'tRomance',
			'tSciFi',
			'tMecha',
			'tFavoriteAnime',
		],
		[
			'DarlingInTheFranXX-OP1',
			'DarlingInTheFranXX-OP1v2',
			'DarlingInTheFranXX-OP2',
			'DarlingInTheFranXX-ED1',
			'DarlingInTheFranXX-ED2',
			'DarlingInTheFranXX-ED3',
			'DarlingInTheFranXX-ED4',
			'DarlingInTheFranXX-ED5',
			'DarlingInTheFranXX-ED6',
		]
	),
	new Anime(
		'1208/120085',
		[
			'Strike the Blood Final',
			'ストライク・ザ・ブラッドFINAL',
		],
		[ 957 ],
		1, 0, 2022, 1, 2, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tUrbanFantasy',
			'tVampire',
		],
		[
			'StrikeTheBloodFinal-ED1',
		]
	),
	new Anime(
		'1692/116875',
		[
			'Strike the Blood IV',
			'ストライク・ザ・ブラッド IV',
		],
		[ 957 ],
		1, 1, 2020, 1, 2, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tUrbanFantasy',
			'tVampire',
		],
		[
			'StrikeTheBloodS4-OP1',
			'StrikeTheBloodS4-OP1v2',
			'StrikeTheBloodS4-ED1',
		]
	),
	new Anime(
		'1918/103377',
		[
			'Strike the Blood: Kieta Seisou-hen',
			'ストライク・ザ・ブラッド 消えた聖槍篇',
		],
		[ 957 ],
		1, 0, 2020, 1, 2, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tUrbanFantasy',
			'tVampire',
		],
		[
			'StrikeTheBloodOVA2-OP1',
			'StrikeTheBloodOVA2-ED1',
		]
	),
	new Anime(
		'1768/111676',
		[
			'Strike the Blood III',
			'ストライク・ザ・ブラッドⅢ',
		],
		[ 957 ],
		1, 3, 2018, 1, 2, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tUrbanFantasy',
			'tVampire',
		],
		[
			'StrikeTheBloodS3-OP1',
			'StrikeTheBloodS3-ED1',
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
		1, 3, 2016, 1, 2, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tUrbanFantasy',
			'tVampire',
		],
		[
			'StrikeTheBloodS2-OP1',
			'StrikeTheBloodS2-OP1v2',
			'StrikeTheBloodS2-OP1v3',
			'StrikeTheBloodS2-ED1',
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
		0, 3, 2015, 1, 2, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tUrbanFantasy',
			'tVampire',
		],
		[
			'StrikeTheBloodOVA-OP1',
			'StrikeTheBloodOVA-ED1',
		]
	),
	new Anime(
		'5/56163',
		[
			'Strike the Blood',
			'ストライク・ザ・ブラッド',
		],
		[ 300, 957 ],
		0, 3, 2013, 1, 2, 1,
		[
			'tAction',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tUrbanFantasy',
			'tVampire',
		],
		[
			'StrikeTheBlood-OP1',
			'StrikeTheBlood-OP2',
			'StrikeTheBlood-ED1',
			'StrikeTheBlood-ED2',
		]
	),
	new Anime(
		'8/56413',
		[
			'Freezing Vibration Specials',
			'震えちゃう❤フリージング ヴァイブレーションOVA',
		],
		[ 179 ],
		2, 3, 2013, 1, 2, 1,
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
		0, 3, 2013, 0, 2, 1,
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
		],
		[
			'FreezingVibration-OP1',
			'FreezingVibration-ED1',
		]
	),
	new Anime(
		'2/28086',
		[
			'Freezing Specials',
			'はじけちゃう! ドキドキトラブルフリージング',
		],
		[ 179 ],
		2, 0, 2011, 0, 2, 1,
		[
			'tAction',
			'tComedy',
			'tEcchi',
			'tSeinen',
		]
	),
	new Anime(
		'10/28535',
		[
			'Freezing',
			'フリージング',
		],
		[ 179 ],
		0, 0, 2011, 0, 2, 1,
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
		],
		[
			'Freezing-OP1',
			'Freezing-ED1',
		]
	),
	new Anime(
		'11/22525',
		[
			'Omamori Himari',
			'おまもりひまり',
		],
		[ 218 ],
		0, 0, 2010, 0, 2, 1,
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
		],
		[
			'OmamoriHimari-OP1',
			'OmamoriHimari-OP1v2',
			'OmamoriHimari-OP1v3',
			'OmamoriHimari-OP1v4',
			'OmamoriHimari-OP1v5',
			'OmamoriHimari-OP1v6',
			'OmamoriHimari-OP1v7',
			'OmamoriHimari-OP1v8',
			'OmamoriHimari-OP1v9',
			'OmamoriHimari-OP1v10',
			'OmamoriHimari-ED1',
			'OmamoriHimari-ED2v2',
			'OmamoriHimari-ED2v3',
			'OmamoriHimari-ED2v4',
			'OmamoriHimari-ED2v5',
			'OmamoriHimari-ED2v6',
			'OmamoriHimari-ED3',
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
		0, 0, 2018, 0, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tWorkplace',
			'tSeinen',
		],
		[
			'KoiWaAmeagariNoYouNi-OP1',
			'KoiWaAmeagariNoYouNi-ED1',
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
		0, 3, 2010, 6, 2, 1,
		[
			'tDrama',
			'tRomance',
			'tHarem',
			'tEcchi',
		],
		[
			'YosugaNoSora-OP1',
			'YosugaNoSora-ED1',
			'YosugaNoSora-ED2',
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
		0, 3, 2014, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tMilitary',
			'tEcchi',
		],
		[
			'MadanNoOuToVanadis-OP1',
			'MadanNoOuToVanadis-ED1',
			'MadanNoOuToVanadis-ED2',
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
		0, 0, 2015, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tReincarnation',
			'tSchool',
			'tUrbanFantasy',
		],
		[
			'SeikenTsukaiNoWorldBreak-OP1',
			'SeikenTsukaiNoWorldBreak-ED1',
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
		0, 3, 2015, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tMilitary',
			'tUrbanFantasy',
		],
		[
			'TaimadouGakuen35ShikenShoutai-OP1',
			'TaimadouGakuen35ShikenShoutai-ED1',
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
		0, 0, 2016, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'SaijakuMuhaiNoBahamut-OP1',
			'SaijakuMuhaiNoBahamut-ED1',
			'SaijakuMuhaiNoBahamut-ED1v2',
			'SaijakuMuhaiNoBahamut-ED1v3',
			'SaijakuMuhaiNoBahamut-ED1v4',
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
		0, 1, 2019, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tShounen',
		],
		[
			'MidaraNaAoChanWaBenkyouGaDekinai-OP1',
			'MidaraNaAoChanWaBenkyouGaDekinai-ED1',
		]
	),
	new Anime(
		'1849/95019',
		[
			'Conception',
			'CONCEPTION（コンセプション）',
		],
		[ 3 ],
		0, 3, 2018, 8, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tParody',
		],
		[
			'Conception-OP1',
			'Conception-OP1v2',
			'Conception-ED1',
			'Conception-ED2',
		]
	),
	new Anime(
		'1465/121561',
		[
			'Seiren',
			'セイレン',
		],
		[ 418, 1299 ],
		0, 0, 2017, 4, 0, 1,
		[
			'tRomance',
			'tHarem',
			'tSchool',
		],
		[
			'Seiren-OP1',
			'Seiren-OP1v2',
			'Seiren-OP1v3',
			'Seiren-ED1',
			'Seiren-ED2',
			'Seiren-ED3',
			'Seiren-ED4',
			'Seiren-ED5',
			'Seiren-ED6',
		]
	),
	new Anime(
		'10/88234',
		[
			'Just Because!',
		],
		[ 1295 ],
		0, 3, 2017, 4, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tLovePolygon',
		],
		[
			'JustBecause-OP1',
			'JustBecause-OP1v2',
			'JustBecause-ED1',
			'JustBecause-ED1v2',
			'JustBecause-ED1v3',
			'JustBecause-ED1v4',
			'JustBecause-ED1v5',
		]
	),
	new Anime(
		'1471/93329',
		[
			'Devils Line: Anytime Anywhere',
			'デビルズライン エニタイム エニウェア',
		],
		[ 1471 ],
		1, 2, 2018, 0, 1, 1,
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
		0, 1, 2018, 0, 1, 1,
		[
			'tAction',
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tAdultCast',
			'tVampire',
			'tSeinen',
		],
		[
			'DevilsLine-OP1',
			'DevilsLine-ED1',
		]
	),
	new Anime(
		'6/21655',
		[
			'Ladies versus Butlers! Specials',
			'れでぃ×ばと!',
		],
		[ 27 ],
		2, 0, 2010, 1, 2, 1,
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
		0, 0, 2010, 1, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'LadiesVersusButlers-OP1',
			'LadiesVersusButlers-ED1',
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
		0, 2, 2012, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tMythology',
		],
		[
			'Campione-OP1',
			'Campione-ED1',
		]
	),
	new Anime(
		'7/62209',
		[
			'Maken-Ki! Two Specials',
			'マケン姫っ！通 Ｐ～私事',
		],
		[ 27 ],
		2, 0, 2014, 0, 2, 1,
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
		0, 0, 2014, 0, 2, 1,
		[
			'tAction',
			'tEcchi',
			'tHarem',
			'tMartialArts',
			'tSchool',
			'tSuperPower',
			'tShounen',
		],
		[
			'MakenKiTwo-OP1',
			'MakenKiTwo-ED1',
		]
	),
	new Anime(
		'7/36929',
		[
			'Maken-Ki! OVA',
			'マケン姫っ！ OVA',
		],
		[ 83 ],
		1, 0, 2012, 0, 2, 1,
		[
			'tAction',
			'tEcchi',
			'tHarem',
			'tMartialArts',
			'tSchool',
			'tSuperPower',
		],
		[
			'MakenKi-OP1',
			'MakenKiOVA-ED1',
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
		2, 3, 2011, 0, 2, 1,
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
		0, 3, 2011, 0, 2, 1,
		[
			'tAction',
			'tEcchi',
			'tHarem',
			'tMartialArts',
			'tSchool',
			'tSuperPower',
			'tShounen',
		],
		[
			'MakenKi-OP1',
			'MakenKi-ED1',
			'MakenKi-ED2',
			'MakenKi-ED3',
			'MakenKi-ED4',
			'MakenKi-ED5',
			'MakenKi-ED6',
			'MakenKi-ED7',
			'MakenKi-ED8',
			'MakenKi-ED9',
			'MakenKi-ED10',
			'MakenKi-ED11',
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
		1, 3, 2012, 1, 2, 1,
		[
			'tAction',
			'tComedy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
			'tFantasy',
			'tUrbanFantasy',
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
		0, 1, 2012, 1, 2, 1,
		[
			'tAction',
			'tComedy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
			'tFantasy',
			'tUrbanFantasy',
		],
		[
			'KoreWaZombieDesuKaS2-OP1',
			'KoreWaZombieDesuKaS2-ED1',
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
		1, 1, 2011, 1, 0, 1,
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
		0, 0, 2011, 1, 1, 1,
		[
			'tAction',
			'tComedy',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tVampire',
		],
		[
			'KoreWaZombieDesuKa-OP1',
			'KoreWaZombieDesuKa-ED1',
		]
	),
	new Anime(
		'9/62845',
		[
			'Seitokai no Ichizon Lv.2: Watasu Seitokai',
			'生徒会の一存 Lv.2 渡す生徒会',
		],
		[ 48 ],
		1, 2, 2013, 1, 0, 1,
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
		3, 3, 2012, 1, 0, 1,
		[
			'tComedy',
			'tHarem',
			'tParody',
			'tSchool',
		],
		[
			'SeitokaiNoIchizonLv2-OP1',
			'SeitokaiNoIchizonLv2-ED1',
			'SeitokaiNoIchizonLv2-ED2',
			'SeitokaiNoIchizonLv2-ED3',
			'SeitokaiNoIchizonLv2-ED4',
			'SeitokaiNoIchizonLv2-ED5',
			'SeitokaiNoIchizonLv2-ED6',
			'SeitokaiNoIchizonLv2-ED7',
			'SeitokaiNoIchizonLv2-ED8',
			'SeitokaiNoIchizonLv2-ED9',
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
		0, 3, 2009, 1, 0, 1,
		[
			'tComedy',
			'tHarem',
			'tParody',
			'tSchool',
		],
		[
			'SeitokaiNoIchizon-OP1',
			'SeitokaiNoIchizon-ED1',
			'SeitokaiNoIchizon-ED2',
			'SeitokaiNoIchizon-ED3',
			'SeitokaiNoIchizon-ED4',
			'SeitokaiNoIchizon-ED5',
			'SeitokaiNoIchizon-ED6',
			'SeitokaiNoIchizon-ED7',
			'SeitokaiNoIchizon-ED8',
			'SeitokaiNoIchizon-ED9',
			'SeitokaiNoIchizon-ED10',
			'SeitokaiNoIchizon-ED11',
			'SeitokaiNoIchizon-ED12',
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
		0, 2, 2014, 1, 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tHarem',
			'tSchool',
			'tRomance',
		],
		[
			'RokujoumaNoShinryakusha-OP1',
			'RokujoumaNoShinryakusha-ED1',
		]
	),
	new Anime(
		'1660/121553',
		[
			'Kiss x Sis',
			'キスシス',
		],
		[ 91 ],
		0, 1, 2010, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tSeinen',
		],
		[
			'KissxSisTV-OP1',
			'KissxSisTV-ED1',
			'KissxSisTV-ED1v2',
			'KissxSisTV-ED2',
		]
	),
	new Anime(
		'1323/108709',
		[
			'IS: Infinite Stratos 2 - Infinite Wedding',
			'IS〈インフィニット・ストラトス〉2 インフィニット・ウエディング',
		],
		[ 441 ],
		2, 1, 2016, 1, 0, 1,
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
		1, 3, 2014, 1, 2, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'InfiniteStratosS2-OP1',
			'InfiniteStratosS2OVA-ED1',
		]
	),
	new Anime(
		'7/56159',
		[
			'IS: Infinite Stratos 2 - Hitonatsu no Omoide',
			'IS 〈インフィニット・ストラトス〉2 ロングバケーション 一夏（ひとなつ）の想いで',
		],
		[ 441 ],
		1, 3, 2013, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tSciFi',
			'tHarem',
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
		0, 3, 2013, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'InfiniteStratosS2-OP1',
			'InfiniteStratosS2-ED1',
			'InfiniteStratosS2-ED2',
			'InfiniteStratosS2-ED3',
			'InfiniteStratosS2-ED4',
			'InfiniteStratosS2-ED5',
			'InfiniteStratosS2-ED6',
			'InfiniteStratosS2-ED7',
			'InfiniteStratosS2-ED8',
			'InfiniteStratosS2-ED9',
			'InfiniteStratosS2-ED10',
			'InfiniteStratosS2-ED11',
			'InfiniteStratosS2-ED12',
		]
	),
	new Anime(
		'10/33627',
		[
			'IS: Infinite Stratos Encore - Koi ni Kogareru Rokujuusou',
			'IS 〈インフィニット・ストラトス〉 アンコール『恋に焦がれる六重奏』',
			'Infinite Stratos Encore: A Sextet Yearning for Love',
		],
		[ 441 ],
		1, 3, 2011, 1, 2, 1,
		[
			'tAction',
			'tComedy',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tMecha',
		],
		[
			'InfiniteStratosOVA-OP1',
			'InfiniteStratosOVA-ED1',
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
		0, 0, 2011, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'InfiniteStratos-OP1',
			'InfiniteStratos-OP1v2',
			'InfiniteStratos-ED1',
			'InfiniteStratos-ED2',
			'InfiniteStratos-ED3',
			'InfiniteStratos-ED4',
			'InfiniteStratos-ED5',
			'InfiniteStratos-ED6',
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
		0, 1, 2022, 9, 0, 1,
		[
			'tIdol',
			'tSchool',
		],
		[
			'HeroineTarumono-OP1',
			'HeroineTarumono-ED1',
			'HeroineTarumono-ED2',
			'HeroineTarumono-ED3',
			'HeroineTarumono-ED4',
			'HeroineTarumono-ED5',
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
		2, 3, 2021, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
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
		3, 2, 2021, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tAdultCast',
			'tLoveStatusQuo',
			'tWorkplace',
		],
		[
			'GanbareDoukiChan-ED1',
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
		0, 0, 2022, 0, 1, 1,
		[
			'tAction',
			'tRomance',
			'tAdultCast',
			'tOrganizedCrime',
			'tJosei',
		],
		[
			'KoroshiAi-OP1',
			'KoroshiAi-OP1v2',
			'KoroshiAi-ED1',
			'KoroshiAi-ED1v2',
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
		0, 2, 2017, 10, 0, 1,
		[
			'tRomance',
		],
		[
			'KonbiniKareshi-OP1',
			'KonbiniKareshi-ED1',
		]
	),
	new Anime(
		'1399/131410',
		[
			'Angel Beats! Another Epilogue',
			'エンジェルビーツ! アナザーエピローグ',
		],
		[ 132 ],
		2, 3, 2010, 4, 0, 1,
		[
			'tFantasy',
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
		2, 3, 2010, 4, 0, 1,
		[
			'tComedy',
			'tFantasy',
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
		0, 1, 2010, 4, 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
		],
		[
			'AngelBeats-OP1',
			'AngelBeats-OP2',
			'AngelBeats-ED1',
			'AngelBeats-ED2',
			'AngelBeats-ED3',
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
		0, 0, 2012, 1, 0, 1,
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
		],
		[
			'ZeroNoTsukaimaS4-OP1',
			'ZeroNoTsukaimaS4-ED1',
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
		2, 3, 2008, 1, 0, 1,
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
		0, 2, 2008, 1, 0, 1,
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
		],
		[
			'ZeroNoTsukaimaS3-OP1',
			'ZeroNoTsukaimaS3-ED1',
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
		0, 2, 2007, 1, 0, 1,
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
		],
		[
			'ZeroNoTsukaimaS2-OP1',
			'ZeroNoTsukaimaS2-ED1',
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
		0, 2, 2006, 1, 0, 1,
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
		],
		[
			'ZeroNoTsukaima-OP1',
			'ZeroNoTsukaima-ED1',
		]
	),
	new Anime(
		'4/72750',
		[
			'Plastic Memories',
			'プラスティック・メモリーズ',
		],
		[ 95 ],
		0, 1, 2015, 4, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'PlasticMemories-OP1',
			'PlasticMemories-ED1',
		]
	),
	new Anime(
		'1319/142188',
		[
			'Grisaia: Phantom Trigger',
			'グリザイア:ファントムトリガー',
		],
		[ 1722 ],
		0, 0, 2025, 6, 1, 1,
		[
			'tAction',
			'tSchool',
			'tFavoriteOPSong',
		],
		[
			'GrisaiaPhantomTriggerTV-OP1',
			'GrisaiaPhantomTriggerTV-OP1v2',
			'GrisaiaPhantomTriggerTV-ED1',
			'GrisaiaPhantomTriggerTV-ED1v2',
			'GrisaiaPhantomTriggerTV-ED1v3',
			'GrisaiaPhantomTriggerTV-ED2',
		]
	),
	new Anime(
		'1730/108516',
		[
			'Grisaia: Phantom Trigger The Animation - Stargazer',
			'グリザイア：ファントムトリガー THE ANIMATION スターゲイザー',
		],
		[ 1722 ],
		4, 3, 2020, 6, 1, 1,
		[
			'tAction',
			'tSchool',
		],
		[
			'GrisaiaPhantomTrigger-OP1',
			'GrisaiaPhantomTrigger-ED1',
		]
	),
	new Anime(
		'1298/106867',
		[
			'Grisaia: Phantom Trigger The Animation',
			'グリザイア：ファントムトリガー THE ANIMATION',
		],
		[ 1722 ],
		4, 0, 2019, 6, 1, 1,
		[
			'tAction',
			'tSchool',
		],
		[
			'GrisaiaPhantomTrigger-OP1',
			'GrisaiaPhantomTrigger-ED1',
		]
	),
	new Anime(
		'2/75328',
		[
			'Grisaia no Meikyuu: Caprice no Mayu 0 - Takizono Basketball Club no Nama Cream Party!',
			'グリザイアの迷宮 カプリスの繭0 姫&バスケ部編「滝園バスケ部の生クリームパーティ! 」',
		],
		[ 441 ],
		2, 2, 2015, 6, 2, 1,
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
		0, 1, 2015, 6, 1, 1,
		[
			'tDrama',
			'tRomance',
			'tHarem',
			'tPsychological',
			'tSuspense',
		],
		[
			'GrisaiaNoRakuen-OP1',
			'GrisaiaNoRakuen-OP1v2',
			'GrisaiaNoRakuen-ED1',
			'GrisaiaNoRakuen-ED2',
			'GrisaiaNoRakuen-ED3',
			'GrisaiaNoRakuen-ED4',
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
		2, 1, 2015, 6, 2, 1,
		[
			'tDrama',
		],
		[
			'GrisaiaNoMeikyuu-ED1',
		]
	),
	new Anime(
		'7/74609',
		[
			'Grisaia no Kajitsu Specials',
			'グリザイアの果実',
		],
		[ 441 ],
		2, 3, 2014, 6, 2, 1,
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
		0, 3, 2014, 6, 2, 1,
		[
			'tDrama',
			'tRomance',
			'tHarem',
			'tPsychological',
			'tSchool',
			'tSuspense',
		],
		[
			'GrisaiaNoKajitsu-OP1',
			'GrisaiaNoKajitsu-ED1',
			'GrisaiaNoKajitsu-ED2',
			'GrisaiaNoKajitsu-ED3',
			'GrisaiaNoKajitsu-ED4',
			'GrisaiaNoKajitsu-ED5',
			'GrisaiaNoKajitsu-ED6',
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
		0, 0, 2018, 1, 0, 1,
		[
			'tComedy',
			'tStrategyGame',
		],
		[
			'RyuuouNoOshigoto-OP1',
			'RyuuouNoOshigoto-ED1',
			'RyuuouNoOshigoto-ED1v2',
			'RyuuouNoOshigoto-ED1v3',
			'RyuuouNoOshigoto-ED1v4',
			'RyuuouNoOshigoto-ED1v5',
			'RyuuouNoOshigoto-ED2',
		]
	),
	new Anime(
		'3/78858',
		[
			'Hundred',
			'ハンドレッド',
		],
		[ 1053 ],
		0, 1, 2016, 1, 0, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'Hundred-OP1',
			'Hundred-ED1',
			'Hundred-ED2',
			'Hundred-ED3',
			'Hundred-ED4',
		]
	),
	new Anime(
		'6/88307',
		[
			'Tsuki ga Kirei Special',
			'月がきれい',
		],
		[ 91 ],
		2, 2, 2017, 4, 0, 1,
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
		0, 1, 2017, 4, 0, 1,
		[
			'tRomance',
			'tSchool',
		],
		[
			'TsukiGaKirei-OP1',
			'TsukiGaKirei-ED1',
			'TsukiGaKirei-ED1v2',
		]
	),
	new Anime(
		'1356/93469',
		[
			'Meiji Tokyo Renka',
			'明治東亰恋伽',
		],
		[ 73 ],
		0, 0, 2019, 6, 0, 1,
		[
			'tRomance',
			'tSupernatural',
			'tHistorical',
			'tHarem',
			'tTime Travel',
			'tJosei',
		],
		[
			'MeijiTokyoRenka-OP1',
			'MeijiTokyoRenka-ED1',
			'MeijiTokyoRenka-ED2',
			'MeijiTokyoRenka-ED3',
			'MeijiTokyoRenka-ED4',
			'MeijiTokyoRenka-ED5',
		]
	),
	new Anime(
		'8/83735',
		[
			'Fuuka',
			'風夏',
		],
		[ 51 ],
		0, 0, 2017, 0, 2, 1,
		[
			'tDrama',
			'tRomance',
			'tEcchi',
			'tMusic',
			'tSchool',
			'tShounen',
			'tLovePolygon',
		],
		[
			'Fuuka-OP1',
			'Fuuka-OP1v2',
			'Fuuka-ED1',
			'Fuuka-ED2',
			'Fuuka-ED3',
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
		0, 3, 2018, 4, 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tRomance',
			'tSchool',
			'tTimeTravel',
			'tLovePolygon',
			'tVisualArts',
			'tUrbanFantasy',
			'tFavoriteAnime',
		],
		[
			'Iroduku-OP1',
			'Iroduku-ED1',
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
		2, 0, 2018, 2, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'ReLIFE-OP1',
			'ReLIFEKanketsuHen-ED1',
			'ReLIFEKanketsuHen-ED2',
			'ReLIFEKanketsuHen-ED3',
			'ReLIFEKanketsuHen-ED4',
		]
	),
	new Anime(
		'3/82149',
		[
			'ReLIFE',
		],
		[ 73 ],
		0, 2, 2016, 2, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'ReLIFE-OP1',
			'ReLIFE-ED1',
			'ReLIFE-ED2',
			'ReLIFE-ED3',
			'ReLIFE-ED4',
			'ReLIFE-ED5',
			'ReLIFE-ED6',
			'ReLIFE-ED7',
			'ReLIFE-ED8',
			'ReLIFE-ED9',
			'ReLIFE-ED10',
			'ReLIFE-ED11',
			'ReLIFE-ED12',
			'ReLIFE-ED13',
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
		0, 1, 2018, 6, 0, 1,
		[
			'tRomance',
			'tSupernatural',
			'tHistorical',
			'tHarem',
			'tJosei',
		],
		[
			'NilAdmirariNoTenbin-OP1',
			'NilAdmirariNoTenbin-ED1',
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
		0, 1, 2017, 1, 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
		],
		[
			'SukaSuka-OP1',
			'SukaSuka-OP2',
			'SukaSuka-ED1',
			'SukaSuka-ED2',
			'SukaSuka-ED3',
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
		0, 3, 2019, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLovePolygon',
			'tSchool',
			'tVideoGame',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'HighScoreGirlS2-OP1',
			'HighScoreGirlS2-ED1',
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
		1, 0, 2019, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLovePolygon',
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
		0, 2, 2018, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLovePolygon',
			'tSchool',
			'tVideoGame',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'HighScoreGirl-OP1',
			'HighScoreGirl-ED1',
		]
	),
	new Anime(
		'1745/93307',
		[
			'Beatless Final Stage',
			'BEATLESS Final Stage',
		],
		[ 51 ],
		0, 2, 2018, 1, 0, 1,
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
		0, 0, 2018, 1, 0, 1,
		[
			'tAction',
			'tDrama',
			'tRomance',
			'tSciFi',
			'tFavoriteAnime',
		],
		[
			'Beatless-OP1',
			'Beatless-OP2',
			'Beatless-ED1',
			'Beatless-ED2',
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
		0, 0, 2015, 1, 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tAction',
		],
		[
			'JuuouMujinNoFafnir-OP1',
			'JuuouMujinNoFafnir-ED1',
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
		1, 0, 2018, 1, 2, 1,
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
		0, 3, 2015, 1, 2, 1,
		[
			'tAction',
			'tEcchi',
			'tHarem',
			'tSupernatural',
		],
		[
			'ShinmaiMaouNoTestamentS2-OP1',
			'ShinmaiMaouNoTestamentS2-OP2',
			'ShinmaiMaouNoTestamentS2-OP3',
			'ShinmaiMaouNoTestamentS2-OP3v2',
			'ShinmaiMaouNoTestamentS2-OP4',
			'ShinmaiMaouNoTestamentS2-ED1',
			'ShinmaiMaouNoTestamentS2-ED1v2',
			'ShinmaiMaouNoTestamentS2-ED1v3',
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
		1, 1, 2015, 1, 2, 1,
		[
			'tAction',
			'tEcchi',
			'tHarem',
			'tSupernatural',
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
		2, 0, 2015, 1, 2, 1,
		[
			'tComedy',
			'tEcchi',
			'tSupernatural',
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
		0, 0, 2015, 1, 2, 1,
		[
			'tAction',
			'tEcchi',
			'tHarem',
			'tSupernatural',
		],
		[
			'ShinmaiMaouNoTestament-OP1',
			'ShinmaiMaouNoTestament-ED1',
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
		0, 1, 2018, 4, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tVisualArts',
		],
		[
			'Tadakoi-OP1',
			'Tadakoi-ED1',
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
		1, 3, 2018, 2, 0, 1,
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
		0, 2, 2017, 2, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteOPSong',
		],
		[
			'KoiToUso-OP1',
			'KoiToUso-ED1',
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
		0, 3, 2015, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tUrbanFantasy',
			'tFavoriteOPVisual',
		],
		[
			'RakudaiKishiNoCavalry-OP1',
			'RakudaiKishiNoCavalry-OP1v2',
			'RakudaiKishiNoCavalry-OP1v3',
			'RakudaiKishiNoCavalry-ED1',
		]
	),
	new Anime(
		'1284/106945',
		[
			'Arte',
			'アルテ',
		],
		[ 35 ],
		0, 1, 2020, 0, 0, 1,
		[
			'tDrama',
			'tHistorical',
			'tSeinen',
			'tVisualArts',
		],
		[
			'Arte-OP1',
			'Arte-ED1',
		]
	),
	new Anime(
		'1919/107275',
		[
			'Yesterday wo Utatte: Haishin-ban Episode',
			'イエスタデイをうたって 配信版エピソード',
			'Sing "Yesterday" for Me Extras',
		],
		[ 95 ],
		3, 1, 2020, 0, 0, 1,
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
		0, 1, 2020, 0, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSeinen',
			'tAdultCast',
			'tLovePolygon',
		],
		[
			'YesterdayWoUtatte-ED1',
			'YesterdayWoUtatte-ED2',
			'YesterdayWoUtatte-ED3',
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
		0, 0, 2019, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLoveStatusQuo',
			'tSchool',
			'tSeinen',
		],
		[
			'UenoSanWaBukiyou-OP1',
			'UenoSanWaBukiyou-OP1v2',
			'UenoSanWaBukiyou-ED1',
			'UenoSanWaBukiyou-ED2',
			'UenoSanWaBukiyou-ED3',
			'UenoSanWaBukiyou-ED4',
			'UenoSanWaBukiyou-ED5',
			'UenoSanWaBukiyou-ED6',
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
		4, 3, 2020, 7, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tAdultCast',
			'tVisualArts',
		],
		[
			'JoseeToToraToSakanatachi-OP1',
			'JoseeToToraToSakanatachi-ED1',
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
		0, 0, 2019, 0, 2, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tShounen',
			'tLovePolygon',
		],
		[
			'DomesticNaKanojo-OP1',
			'DomesticNaKanojo-ED1',
			'DomesticNaKanojo-ED2',
		]
	),
	new Anime(
		'1506/120097',
		[
			'Fruits Basket: Prelude',
			'フルーツバスケット -prelude-',
		],
		[ 73 ],
		0, 0, 2022, 0, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tShoujo',
		],
		[
			'FruitsBasketPrelude-ED1',
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
		0, 1, 2021, 0, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tShoujo',
		],
		[
			'FruitsBasketS3-OP1',
			'FruitsBasketS3-ED1',
		]
	),
	new Anime(
		'1972/111635',
		[
			'Fruits Basket 2nd Season',
			'フルーツバスケット 2nd season',
		],
		[ 73 ],
		0, 1, 2020, 0, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tShoujo',
		],
		[
			'FruitsBasketS2-OP1',
			'FruitsBasketS2-OP1v2',
			'FruitsBasketS2-OP2',
			'FruitsBasketS2-ED1',
			'FruitsBasketS2-ED2',
			'FruitsBasketS2-ED3',
		]
	),
	new Anime(
		'1447/99827',
		[
			'Fruits Basket 1st Season',
			'フルーツバスケット',
		],
		[ 73 ],
		0, 1, 2019, 0, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tShoujo',
		],
		[
			'FruitsBasket-OP1',
			'FruitsBasket-OP2',
			'FruitsBasket-ED1',
			'FruitsBasket-ED1v2',
			'FruitsBasket-ED1v3',
			'FruitsBasket-ED1v4',
			'FruitsBasket-ED2',
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
		0, 0, 2019, 0, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tOtakuCulture',
		],
		[
			'3DKanojoS2-OP1',
			'3DKanojoS2-ED1',
			'3DKanojoS2-ED1v2',
			'3DKanojoS2-ED2',
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
		0, 1, 2018, 0, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tOtakuCulture',
		],
		[
			'3DKanojo-OP1',
			'3DKanojo-ED1',
		]
	),
	new Anime(
		'9/67077',
		[
			'D-Frag!*',
			'ディーふらぐ! ウォーター!!',
		],
		[ 112 ],
		1, 2, 2014, 0, 0, 1,
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
		0, 0, 2014, 0, 0, 1,
		[
			'tComedy',
			'tSchool',
			'tStrategyGame',
			'tSeinen',
			'tFavoriteAnime',
		],
		[
			'DFrag-OP1',
			'DFrag-ED1',
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
		1, 0, 2019, 2, 0, 1,
		[
			'tRomance',
			'tWorkplace',
			'tOtakuCulture',
			'tAdultCast',
			'tFavoriteAnime',
		],
		[
			'WotaKoi-OP1v3',
			'WotaKoi-ED1-NCBD1080',
			'WotaKoiOVA-ED1',
			'WotaKoiOVA-ED1v2',
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
		0, 1, 2018, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tWorkplace',
			'tOtakuCulture',
			'tAdultCast',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'WotaKoi-OP1',
			'WotaKoi-OP1v2',
			'WotaKoi-OP1v3',
			'WotaKoi-ED1',
			'WotaKoi-ED2',
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
		0, 1, 2021, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
		],
		[
			'Koikimo-OP1',
			'Koikimo-ED1',
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
		0, 2, 2022, 1, 2, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tErotica',
			'tHarem',
			'tIsekai',
		],
		[
			'IsekaiHarem-OP1',
			'IsekaiHarem-ED1',
		]
	),
	new Anime(
		'1274/133807',
		[
			'Tokyo Mew Mew New ♡ 2nd Season',
			'東京ミュウミュウ にゅ～♡',
		],
		[ 96, 894 ],
		0, 1, 2023, 0, 0, 1,
		[
			'tRomance',
			'tSciFi',
			'tShoujo',
			'tMahouShoujo',
		],
		[
			'TokyoMewMewNewS2-OP1',
			'TokyoMewMewNewS2-ED1',
			'TokyoMewMewNewS2-ED2',
			'TokyoMewMewNewS2-ED3',
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
		0, 2, 2022, 0, 0, 1,
		[
			'tRomance',
			'tSciFi',
			'tShoujo',
			'tMahouShoujo',
		],
		[
			'TokyoMewMewNew-OP1',
			'TokyoMewMewNew-ED1',
			'TokyoMewMewNew-ED2',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tMedical',
			'tFavoriteAnime',
		],
		[
			'SeijoNoMaryokuS2-OP1',
			'SeijoNoMaryokuS2-ED1',
			'SeijoNoMaryokuS2-ED2',
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
		0, 1, 2021, 1, 0, 1,
		[
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tMedical',
			'tFavoriteAnime',
		],
		[
			'SeijoNoMaryoku-OP1',
			'SeijoNoMaryoku-ED1',
			'SeijoNoMaryoku-ED2',
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
		0, 3, 2021, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLoveStatusQuo',
			'tWorkplace',
			'tAdultCast',
			'tFavoriteAnime',
		],
		[
			'SenpaiGaUzaiKouhaiNoHanashi-OP1',
			'SenpaiGaUzaiKouhaiNoHanashi-ED1',
		]
	),
	new Anime(
		'1024/150787',
		[
			'Sono Bisque Doll wa Koi wo Suru Season 2',
			'その着せ替え人形は恋をする Season 2',
			'My Dress-Up Darling Season 2',
		],
		[ 1835 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tOtakuCulture',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'BisqueDollS2-OP1',
			'BisqueDollS2-ED1',
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
		0, 0, 2022, 0, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tSeinen',
			'tOtakuCulture',
			'tFavoriteAnime',
		],
		[
			'BisqueDoll-OP1',
			'BisqueDoll-ED1',
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
		0, 3, 2022, 2, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tAdultCast',
			'tRomance',
		],
		[
			'UzakiChanWaAsobitaiS2-OP1',
			'UzakiChanWaAsobitaiS2-ED1',
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
		0, 2, 2020, 2, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tAdultCast',
			'tRomance',
		],
		[
			'UzakiChanWaAsobitai-OP1',
			'UzakiChanWaAsobitai-ED1',
			'UzakiChanWaAsobitai-ED1v2',
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
		0, 3, 2014, 0, 0, 1,
		[
			'tComedy',
			'tWorkplace',
			'tSeinen',
			'tOtakuCulture',
		],
		[
			'DenkiGai-OP1',
			'DenkiGai-ED1',
		]
	),
	new Anime(
		'2/86786',
		[
			'No Game No Life: Zero',
			'ノーゲーム・ノーライフ ゼロ',
		],
		[ 11 ],
		4, 2, 2017, 1, 0, 1,
		[
			'tDrama',
			'tFantasy',
			'tRomance',
			'tIsekai',
		],
		[
			'NoGameNoLifeZero-ED1',
		]
	),
	new Anime(
		'7/71783',
		[
			'No Game No Life Specials',
			'ノーゲーム・ノーライフ ミニ',
		],
		[ 11 ],
		2, 1, 2014, 1, 0, 1,
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
		0, 1, 2014, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tStrategyGame',
			'tFavoriteAnime',
		],
		[
			'NoGameNoLife-OP1',
			'NoGameNoLife-OP2',
			'NoGameNoLife-ED1',
			'NoGameNoLife-ED1v2',
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
		4, 1, 2015, 1, 0, 1,
		[
			'tAction',
			'tSupernatural',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'KyoukaiNoKanataMiraiHen-ED1',
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
		4, 0, 2015, 1, 0, 1,
		[
			'tAction',
			'tSupernatural',
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
		2, 2, 2014, 1, 0, 1,
		[
			'tAction',
			'tSupernatural',
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
		2, 0, 2014, 1, 0, 1,
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
		0, 3, 2013, 1, 0, 1,
		[
			'tAction',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		],
		[
			'KyoukaiNoKanata-OP1',
			'KyoukaiNoKanata-ED1',
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
		1, 2, 2014, 0, 0, 1,
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
		0, 2, 2014, 0, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShoujo',
			'tLovePolygon',
		],
		[
			'AoHaruRide-OP1',
			'AoHaruRide-ED1',
		]
	),
	new Anime(
		'4/68839',
		[
			'Absolute Duo',
			'アブソリュート・デュオ',
		],
		[ 441 ],
		0, 0, 2015, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tUrbanFantasy',
		],
		[
			'AbsoluteDuo-OP1',
			'AbsoluteDuo-ED1',
			'AbsoluteDuo-ED2',
			'AbsoluteDuo-ED3',
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
		4, 1, 2022, 0, 0, 1,
		[
			'tLoveStatusQuo',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'Takagi3Movie-OP1',
			'Takagi3Movie-ED1',
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
		0, 0, 2022, 0, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'Takagi3S3-OP1',
			'Takagi3S3-OP2',
			'Takagi3S3-ED1',
			'Takagi3S3-ED2',
			'Takagi3S3-ED3',
			'Takagi3S3-ED4',
			'Takagi3S3-ED5',
			'Takagi3S3-ED6',
			'Takagi3S3-ED7',
			'Takagi3S3-ED8',
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
		0, 2, 2019, 0, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'Takagi3S2-OP1',
			'Takagi3S2-ED1',
			'Takagi3S2-ED2',
			'Takagi3S2-ED3',
			'Takagi3S2-ED4',
			'Takagi3S2-ED5',
			'Takagi3S2-ED6',
			'Takagi3S2-ED7',
			'Takagi3S2-ED8',
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
		1, 2, 2018, 0, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tRomance',
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
		0, 0, 2018, 0, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'Takagi3-OP1',
			'Takagi3-ED1',
			'Takagi3-ED2',
			'Takagi3-ED3',
			'Takagi3-ED4',
			'Takagi3-ED5',
			'Takagi3-ED6',
			'Takagi3-ED7',
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
		0, 1, 2015, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tOtakuCulture',
			'tFavoriteAnime',
		],
		[
			'DenpaKyoushi-OP1',
			'DenpaKyoushi-OP2',
			'DenpaKyoushi-ED1',
			'DenpaKyoushi-ED2',
		]
	),
	new Anime(
		'7/73735',
		[
			'Haiyore! Nyaruko-san F',
			'這いよれ！ニャル子さんF',
		],
		[ 27 ],
		1, 1, 2015, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSciFi',
			'tParody',
		],
		[
			'HaiyoreNyarukoSanF-OP1',
			'HaiyoreNyarukoSanF-ED1',
		]
	),
	new Anime(
		'4/61789',
		[
			'Haiyore! Nyaruko-san W: W ni Sayonara/Kono Onsen ni Koi no Konton wo',
			'這いよれ！ニャル子さん W Wにさよなら / この温泉に恋の渾沌を',
		],
		[ 27 ],
		1, 1, 2014, 1, 0, 1,
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
		0, 1, 2013, 1, 0, 1,
		[
			'tComedy',
			'tSciFi',
			'tParody',
			'tFavoriteEDSong_4',
		],
		[
			'HaiyoreNyarukoSanW-OP1',
			'HaiyoreNyarukoSanW-ED1',
			'HaiyoreNyarukoSanW-ED2',
			'HaiyoreNyarukoSanW-ED3',
			'HaiyoreNyarukoSanW-ED4',
			'HaiyoreNyarukoSanW-ED5',
			'HaiyoreNyarukoSanW-ED6',
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
		0, 1, 2012, 1, 0, 1,
		[
			'tComedy',
			'tSciFi',
			'tParody',
		],
		[
			'HaiyoreNyarukoSan-OP1',
			'HaiyoreNyarukoSan-ED1',
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
		0, 1, 2017, 0, 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tSchool',
			'tShounen',
			'tMythology',
		],
		[
			'KyoukaiNoRinneS3-OP1',
			'KyoukaiNoRinneS3-OP2',
			'KyoukaiNoRinneS3-ED1',
			'KyoukaiNoRinneS3-ED2',
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
		0, 1, 2016, 0, 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tSchool',
			'tShounen',
			'tMythology',
		],
		[
			'KyoukaiNoRinneS2-OP1',
			'KyoukaiNoRinneS2-OP2',
			'KyoukaiNoRinneS2-ED1',
			'KyoukaiNoRinneS2-ED2',
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
		0, 1, 2015, 0, 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tSchool',
			'tShounen',
			'tMythology',
		],
		[
			'KyoukaiNoRinne-OP1',
			'KyoukaiNoRinne-OP2',
			'KyoukaiNoRinne-ED1',
			'KyoukaiNoRinne-ED2',
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
		0, 3, 2014, 1, 0, 1,
		[
			'tComedy',
			'tHarem',
			'tSchool',
			'tSuperPower',
			'tFavoriteAnime',
		],
		[
			'InouBattle-OP1',
			'InouBattle-ED1',
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
		1, 3, 2017, 0, 0, 1,
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
		0, 2, 2017, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		],
		[
			'HajimeteNoGal-OP1',
			'HajimeteNoGal-OP1v2',
			'HajimeteNoGal-OP1v3',
			'HajimeteNoGal-OP1v4',
			'HajimeteNoGal-ED1',
			'HajimeteNoGal-ED2',
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
		0, 3, 2017, 9, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tVisualArts',
		],
		[
			'ItsudatteBokuraNoKoiWa10cmDatta-OP1',
			'ItsudatteBokuraNoKoiWa10cmDatta-ED1',
			'ItsudatteBokuraNoKoiWa10cmDatta-ED2',
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
		4, 3, 2016, 9, 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tSchool',
		],
		[
			'SukiNiNaru-OP1',
			'SukiNiNaru-ED1',
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
		4, 1, 2016, 9, 0, 1,
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
		0, 0, 2023, 2, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tRomance',
		],
		[
			'IjiranaideNagatoroSanS2-OP1',
			'IjiranaideNagatoroSanS2-ED1',
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
		0, 1, 2021, 2, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tSchool',
			'tRomance',
		],
		[
			'IjiranaideNagatoroSan-OP1',
			'IjiranaideNagatoroSan-ED1',
			'IjiranaideNagatoroSan-ED2',
		]
	),
	new Anime(
		'1716/104880',
		[
			'Nekopara',
			'ネコぱら',
		],
		[ 1440 ],
		0, 0, 2020, 6, 0, 1,
		[
			'tSliceofLife',
			'tAnthropomorphic',
			'tFavoriteAnime',
		],
		[
			'Nekopara-OP1',
			'Nekopara-OP1v2',
			'Nekopara-ED1',
			'Nekopara-ED1v2',
			'Nekopara-ED2',
			'Nekopara-ED3',
		]
	),
	new Anime(
		'1102/103268',
		[
			'Nekopara: Koneko no Hi no Yakusoku',
			'ネコぱら 仔ネコの日の約束',
		],
		[ 1440 ],
		3, 2, 2018, 6, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAnthropomorphic',
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
		1, 3, 2017, 6, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAnthropomorphic',
			'tFavoriteAnime',
		],
		[
			'NekoparaOVA-OP1',
			'NekoparaOVA-ED1',
		]
	),
	new Anime(
		'4/86790',
		[
			'New Game!!',
		],
		[ 95 ],
		0, 2, 2017, 3, 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tCGDCT',
			'tOtakuCulture',
			'tWorkplace',
			'tFavoriteAnime',
		],
		[
			'NewGameS2-OP1',
			'NewGameS2-ED1',
			'NewGameS2-ED2',
		]
	),
	new Anime(
		'10/86507',
		[
			'New Game! Watashi, Shain Ryokou tte Hajimete nanode...',
			'NEW GAME! 私、社員旅行って初めてなので…',
		],
		[ 95 ],
		1, 1, 2017, 3, 0, 1,
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
		],
		[ 95 ],
		0, 2, 2016, 3, 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tCGDCT',
			'tOtakuCulture',
			'tWorkplace',
			'tFavoriteAnime',
		],
		[
			'NewGame-OP1',
			'NewGame-OP2',
			'NewGame-ED1',
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
		0, 3, 2020, 0, 1, 1,
		[
			'tPsychological',
			'tSuperPower',
			'tShounen',
			'tSuspense',
			'tFavoriteAnime',
		],
		[
			'MunouNaNana-OP1',
			'MunouNaNana-ED1',
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
		0, 2, 2017, 3, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'TsurezureChildren-OP1',
			'TsurezureChildren-ED1',
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
		0, 1, 2016, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tUrbanFantasy',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'GakuenToshiAsteriskS2-OP1',
			'GakuenToshiAsteriskS2-ED1',
			'GakuenToshiAsteriskS2-ED2',
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
		0, 3, 2015, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tUrbanFantasy',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'GakuenToshiAsterisk-OP1',
			'GakuenToshiAsterisk-ED1',
			'GakuenToshiAsterisk-ED1v2',
			'GakuenToshiAsterisk-ED1v3',
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
		2, 3, 2017, 2, 0, 1,
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
		0, 3, 2017, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tVideoGame',
			'tAdultCast',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'NetjuuNoSusume-OP1',
			'NetjuuNoSusume-ED1v2',
		]
	),
	new Anime(
		'1642/100344',
		[
			'Ore ga Suki nano wa Imouto dakedo Imouto ja Nai Specials',
			'俺が好きなのは妹だけど妹じゃない俺が好きなのは妹だけど妹じゃない新規短編アニメーション',
		],
		[ 951, 1860 ],
		2, 0, 2019, 1, 2, 1,
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
		0, 3, 2018, 1, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
		],
		[
			'ImoImo-OP1',
			'ImoImo-ED1',
		]
	),
	new Anime(
		'1786/118533',
		[
			'Isuca: Gokuraku',
			'ISUCA 第拾壱話「極楽」',
		],
		[ 38 ],
		1, 2, 2015, 0, 2, 1,
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
		0, 0, 2015, 0, 2, 1,
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
		],
		[
			'Isuca-OP1',
			'Isuca-ED1',
		]
	),
	new Anime(
		'1823/149858',
		[
			'Seishun Buta Yarou wa Santa Claus no Yume wo Minai',
			'青春ブタ野郎はサンタクロースの夢を見ない',
			'Rascal Does Not Dream of Santa Claus',
		],
		[ 1835 ],
		0, 2, 2025, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tSupernatural',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		],
		[
			'AobutaSantaClaus-OP1',
			'AobutaSantaClaus-ED1',
			'AobutaSantaClaus-ED2',
			'AobutaSantaClaus-ED3',
			'AobutaSantaClaus-ED4',
			'AobutaSantaClaus-ED5',
			'AobutaSantaClaus-ED6',
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
		4, 3, 2023, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		],
		[
			'AobutaMovie3-ED1',
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
		4, 1, 2023, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		],
		[
			'AobutaMovie2-ED1',
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
		4, 1, 2019, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		],
		[
			'AobutaMovie-ED1',
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
		0, 3, 2018, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		],
		[
			'Aobuta-OP1',
			'Aobuta-ED1',
			'Aobuta-ED1v2',
			'Aobuta-ED2',
			'Aobuta-ED3',
			'Aobuta-ED4',
			'Aobuta-ED5',
			'Aobuta-ED6',
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
		0, 3, 2023, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
		],
		[
			'KanojoMoKanojoS2-OP1',
			'KanojoMoKanojoS2-ED1',
			'KanojoMoKanojoS2-ED1v2',
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
		0, 2, 2021, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
		],
		[
			'KanojoMoKanojo-OP1',
			'KanojoMoKanojo-ED1',
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
		1, 0, 2018, 2, 0, 1,
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
		0, 3, 2017, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'Shobitch-OP1',
			'Shobitch-ED1',
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
		0, 2, 2019, 0, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tShounen',
		],
		[
			'Araoto-OP1',
			'Araoto-OP1v2',
			'Araoto-OP1v3',
			'Araoto-ED1',
			'Araoto-ED1v2',
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
		0, 1, 2010, 3, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tSeinen',
		],
		[
			'BGataHKei-OP1',
			'BGataHKei-ED1',
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
		0, 1, 2016, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tVideoGame',
			'tOtakuCulture',
			'tFavoriteAnime',
		],
		[
			'NetogeNoYome-OP1',
			'NetogeNoYome-ED1',
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
		0, 1, 2018, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tJosei',
			'tFavoriteAnime',
		],
		[
			'AkkunToKanojo-OP1',
			'AkkunToKanojo-ED1',
		]
	),
	new Anime(
		'9/89848',
		[
			'Imouto sae Ireba Ii. Special',
			'妹さえいればいい。',
		],
		[ 300 ],
		2, 0, 2018, 1, 0, 1,
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
		0, 3, 2017, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tAdultCast',
			'tOtakuCulture',
			'tWorkplace',
			'tFavoriteAnime',
		],
		[
			'ImoutoSae-OP1',
			'ImoutoSae-OP1v2-NCBD1080',
			'ImoutoSae-OP1v3-NCBD1080',
			'ImoutoSae-ED1',
			'ImoutoSae-ED1v2',
			'ImoutoSae-ED1v3',
			'ImoutoSae-ED1v4',
			'ImoutoSae-ED1v5',
			'ImoutoSae-ED1v6',
			'ImoutoSae-ED1v7',
			'ImoutoSae-ED1v8',
			'ImoutoSae-ED1v9',
			'ImoutoSae-ED1v10',
			'ImoutoSae-ED2',
			'ImoutoSae-ED3',
		]
	),
	new Anime(
		'10/23635',
		[
			'Mayoi Neko Overrun! Specials',
			'迷い猫ねこねこ劇場',
		],
		[ 48 ],
		2, 1, 2010, 1, 2, 1,
		[
			'tComedy',
			'tEcchi',
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
		0, 1, 2010, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
		],
		[
			'MayoiNekoOverrun-OP1',
			'MayoiNekoOverrun-OP2',
			'MayoiNekoOverrun-ED1',
			'MayoiNekoOverrun-ED1v2',
			'MayoiNekoOverrun-ED2',
			'MayoiNekoOverrun-ED3',
			'MayoiNekoOverrun-ED4',
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
		0, 2, 2010, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tParody',
		],
		[
			'OokamiSanToShichininNoNakamatachi-OP1',
			'OokamiSanToShichininNoNakamatachi-ED1',
			'OokamiSanToShichininNoNakamatachi-ED2',
		]
	),
	new Anime(
		'6/25892',
		[
			'Fortune Arterial: Akai Yakusoku - Tadoritsuita Basho',
			'FORTUNE ARTERIAL 赤い約束 たどり着いた場所',
		],
		[ 91, 218 ],
		1, 0, 2011, 6, 0, 1,
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
		0, 3, 2010, 6, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tVampire',
		],
		[
			'FortuneArterial-OP1',
			'FortuneArterial-ED1',
			'FortuneArterial-ED2',
			'FortuneArterial-ED3',
			'FortuneArterial-ED4',
			'FortuneArterial-ED5',
			'FortuneArterial-ED6',
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
		2, 3, 2011, 1, 0, 1,
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
		0, 1, 2011, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSchool',
			'tEcchi',
		],
		[
			'HidanNoAria-OP1',
			'HidanNoAria-OP1v2',
			'HidanNoAria-OP1v3',
			'HidanNoAria-OP1v4',
			'HidanNoAria-ED1',
		]
	),
	new Anime(
		'5/30175',
		[
			'R-15: R15 Shounen Hyouryuuki',
			'あーるじゅうご R15少年漂流記',
		],
		[ 48 ],
		1, 3, 2011, 1, 2, 1,
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
		0, 2, 2011, 1, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'R15-OP1',
			'R15-ED1',
		]
	),
	new Anime(
		'13/29971',
		[
			'Mayo Chiki!',
			'まよチキ!',
		],
		[ 91 ],
		0, 2, 2011, 1, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tCrossdressing',
		],
		[
			'MayoChiki-OP1',
			'MayoChiki-ED1',
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
		2, 3, 2011, 1, 0, 1,
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
		0, 2, 2011, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSuperPower',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'BakaTestS2-OP1',
			'BakaTestS2-ED1',
			'BakaTestS2-ED2',
			'BakaTestS2-ED3',
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
		1, 0, 2011, 1, 0, 1,
		[
			'tComedy',
			'tSchool',
			'tSuperPower',
			'tFavoriteAnime',
		],
		[
			'BakaTestOVA-OP1',
			'BakaTestOVA-ED1',
		]
	),
	new Anime(
		'8/67315',
		[
			'Baka to Test to Shoukanjuu Specials',
			'バカとテストと召喚獣 映像特典',
		],
		[ 300 ],
		2, 1, 2010, 1, 0, 1,
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
		0, 0, 2010, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'BakaTest-OP1',
			'BakaTest-OP1v2',
			'BakaTest-ED1',
			'BakaTest-ED1v2',
			'BakaTest-ED2',
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
		1, 2, 2011, 0, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
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
		0, 1, 2011, 0, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tIsekai',
			'tSeinen',
			'tHarem',
		],
		[
			'AstarotteNoOmocha-OP1',
			'AstarotteNoOmocha-ED1',
		]
	),
	new Anime(
		'6/59825',
		[
			'Itsuka Tenma no Kuro Usagi: Kokoro Utsuri no Toukoubi - School Attendance Day',
			'いつか天魔の黒ウサギ 心移りの登校日 ~すくーる·あてんだんす·でぃ~',
		],
		[ 218 ],
		1, 3, 2011, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tMythology',
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
		0, 2, 2011, 1, 2, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tMythology',
			'tSchool',
			'tVampire',
		],
		[
			'ItsukaTenmaNoKuroUsagi-OP1',
			'ItsukaTenmaNoKuroUsagi-ED1',
			'ItsukaTenmaNoKuroUsagi-ED2',
			'ItsukaTenmaNoKuroUsagi-ED3',
			'ItsukaTenmaNoKuroUsagi-ED3v2',
			'ItsukaTenmaNoKuroUsagi-ED4',
		]
	),
	new Anime(
		'10/30839',
		[
			'Hoshizora e Kakaru Hashi: Kakaru ka? Gakuensai ni Koi no Hashi',
			'星空へ架かる橋　架かるか？学園祭に恋の橋',
		],
		[ 95 ],
		2, 3, 2011, 6, 2, 1,
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
		0, 1, 2011, 6, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'HoshizoraEKakaruHashi-OP1',
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
		1, 0, 2013, 1, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSupernatural',
			'tHarem',
			'tSchool',
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
		0, 2, 2012, 1, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSupernatural',
			'tHarem',
			'tSchool',
		],
		[
			'DakaraBokuWaHGaDekinai-OP1',
			'DakaraBokuWaHGaDekinai-ED1',
		]
	),
	new Anime(
		'6/47627',
		[
			'Papa no Iukoto wo Kikinasai! OVA',
			'パパのいうことを聞きなさい！OVA',
		],
		[ 91 ],
		1, 1, 2013, 1, 0, 1,
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
		2, 2, 2012, 1, 0, 1,
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
		0, 0, 2012, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tChildcare',
		],
		[
			'PapaNoIukotoWoKikinasai-OP1',
			'PapaNoIukotoWoKikinasai-ED1',
		]
	),
	new Anime(
		'12/43823',
		[
			'Acchi Kocchi: Place=Princess',
			'あっちこっち 第13話(未放送)「PLACE=PRINCESS」',
		],
		[ 48 ],
		2, 3, 2012, 3, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tGagHumor',
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
		0, 1, 2012, 3, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tGagHumor',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
		],
		[
			'AcchiKocchi-OP1',
			'AcchiKocchi-ED1',
		]
	),
	new Anime(
		'11/51459',
		[
			'Kono Naka ni Hitori, Imouto ga Iru!: Ani, Imouto, Koibito',
			'この中に1人、妹がいる！兄、妹、恋人',
		],
		[ 418 ],
		1, 0, 2013, 1, 0, 1,
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
		0, 2, 2012, 1, 2, 1,
		[
			'tComedy',
			'tMystery',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'NakaImo-OP1',
			'NakaImo-ED1',
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
		2, 3, 2012, 1, 2, 1,
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
		0, 3, 2012, 1, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'OniAi-OP1',
			'OniAi-OP1v2',
			'OniAi-ED1',
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
		2, 2, 2012, 0, 0, 1,
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
		0, 0, 2012, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tMythology',
			'tShounen',
		],
		[
			'InuBokuSS-OP1',
			'InuBokuSS-ED1',
			'InuBokuSS-ED1v2',
			'InuBokuSS-ED2',
			'InuBokuSS-ED3',
			'InuBokuSS-ED4',
			'InuBokuSS-ED5',
			'InuBokuSS-ED6',
		]
	),
	new Anime(
		'1318/92768',
		[
			'Tokyo Ravens',
			'東京レイヴンズ',
		],
		[ 441 ],
		0, 3, 2013, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tSchool',
			'tUrbanFantasy',
		],
		[
			'TokyoRavens-OP1',
			'TokyoRavens-OP2',
			'TokyoRavens-ED1',
			'TokyoRavens-ED2',
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
		1, 1, 2013, 0, 0, 1,
		[
			'tMusic',
			'tShounen',
			'tMahouShoujo',
			'tFavoriteAnime',
		],
		[
			'KaninomiKanon-OP1',
			'KaninomiKanon-ED1',
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
		0, 2, 2013, 0, 0, 1,
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
		],
		[
			'KaminomiS3-OP1',
			'KaminomiS3-ED1',
			'KaminomiS3-ED2',
			'KaminomiS3-ED3',
			'KaminomiS3-ED4',
			'KaminomiS3-ED5',
			'KaminomiS3-ED6',
			'KaminomiS3-ED7',
			'KaminomiS3-ED8',
			'KaminomiS3-ED9',
			'KaminomiS3-ED10',
			'KaminomiS3-ED11',
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
		1, 3, 2012, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'KaminomiTenriHen-ED1',
			'KaminomiTenriHen-ED2',
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
		1, 2, 2011, 0, 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tMusic',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'KaminomiYoninToIdol-OP1',
			'KaminomiYoninToIdol-ED1',
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
		0, 1, 2011, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tShounen',
			'tOtakuCulture',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'KaminomiS2-OP1',
			'KaminomiS2-ED1',
			'KaminomiS2-ED1v2',
			'KaminomiS2-ED2',
			'KaminomiS2-ED3',
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
		0, 3, 2010, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tShounen',
			'tOtakuCulture',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'Kaminomi-OP1',
			'Kaminomi-ED1',
			'Kaminomi-ED2',
			'Kaminomi-ED3',
			'Kaminomi-ED4',
			'Kaminomi-ED5',
			'Kaminomi-ED6',
			'Kaminomi-ED7',
			'Kaminomi-ED8',
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
		0, 0, 2013, 3, 0, 1,
		[
			'tComedy',
			'tSupernatural',
			'tRomance',
			'tSchool',
		],
		[
			'KotouraSan-OP1',
			'KotouraSan-ED1',
			'KotouraSan-ED2',
			'KotouraSan-ED3',
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
		0, 1, 2013, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tSchool',
			'tFavoriteOPSong',
		],
		[
			'HentaiOujiToWarawanaiNeko-OP1',
			'HentaiOujiToWarawanaiNeko-ED1',
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
		0, 0, 2013, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'Oreshura-OP1',
			'Oreshura-ED1',
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
		3, 2, 2013, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tOtakuCulture',
			'tFavoriteAnime',
		],
		[
			'OreImoS2Specials-OP1',
			'OreImoS2Specials-OP1v2',
			'OreImoS2Specials-ED1',
			'OreImoS2Specials-ED2',
			'OreImoS2Specials-ED3',
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
		0, 1, 2013, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tOtakuCulture',
			'tFavoriteAnime',
		],
		[
			'OreImoS2-OP1',
			'OreImoS2-OP1v2',
			'OreImoS2-OP1v3',
			'OreImoS2-OP1v4',
			'OreImoS2-OP1v5',
			'OreImoS2-OP1v6',
			'OreImoS2-OP1v7',
			'OreImoS2-OP1v8',
			'OreImoS2-OP1v9',
			'OreImoS2-OP1v10',
			'OreImoS2-OP1v11',
			'OreImoS2-OP1v12',
			'OreImoS2-OP2',
			'OreImoS2-ED1',
			'OreImoS2-ED2',
			'OreImoS2-ED3',
			'OreImoS2-ED4',
			'OreImoS2-ED5',
			'OreImoS2-ED6',
			'OreImoS2-ED7',
			'OreImoS2-ED8',
			'OreImoS2-ED9',
			'OreImoS2-ED10',
			'OreImoS2-ED11',
			'OreImoS2-ED12',
			'OreImoS2-ED13',
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
		3, 0, 2011, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tOtakuCulture',
			'tFavoriteAnime',
		],
		[
			'OreImoSpecials-OP1',
			'OreImoSpecials-OP1v2',
			'OreImoSpecials-OP1v3',
			'OreImoSpecials-OP1v4',
			'OreImoSpecials-ED1',
			'OreImoSpecials-ED2',
			'OreImoSpecials-ED3',
			'OreImoSpecials-ED4',
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
		0, 3, 2010, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tOtakuCulture',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		],
		[
			'OreImo-OP1',
			'OreImo-OP1v2',
			'OreImo-OP1v3',
			'OreImo-OP1v4',
			'OreImo-OP1v5',
			'OreImo-OP1v6',
			'OreImo-OP1v7',
			'OreImo-OP1v8',
			'OreImo-OP1v9',
			'OreImo-OP1v10',
			'OreImo-OP1v11',
			'OreImo-OP1v12',
			'OreImo-ED1',
			'OreImo-ED2',
			'OreImo-ED3',
			'OreImo-ED4',
			'OreImo-ED5',
			'OreImo-ED6',
			'OreImo-ED7',
			'OreImo-ED8',
			'OreImo-ED9',
			'OreImo-ED10',
			'OreImo-ED11',
			'OreImo-ED12',
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
		1, 0, 2014, 1, 2, 1,
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
		0, 3, 2013, 1, 2, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
		],
		[
			'Yuushibu-OP1',
			'Yuushibu-ED1',
		]
	),
	new Anime(
		'12/52091',
		[
			'Golden Time',
			'ゴールデンタイム',
		],
		[ 7 ],
		0, 3, 2013, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tAdultCast',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'GoldenTime-OP1',
			'GoldenTime-OP2',
			'GoldenTime-ED1',
			'GoldenTime-ED2',
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
		0, 0, 2013, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'HaganaiNext-OP1',
			'HaganaiNext-ED1',
			'HaganaiNext-ED1v2',
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
		1, 2, 2012, 1, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tLovePolygon',
		],
		[
			'Haganai-OP1',
			'HaganaiOVA-ED1',
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
		0, 3, 2011, 1, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'Haganai-OP1',
			'Haganai-OP1v2',
			'Haganai-ED1',
		]
	),
	new Anime(
		'1215/100764',
		[
			'Trinity Seven Movie 2: Heavens Library to Crimson Lord',
			'劇場版 トリニティセブン -天空図書館〈ヘブンズライブラリー〉と真紅の魔王〈クリムゾンロード〉',
		],
		[ 1569 ],
		4, 0, 2019, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		],
		[
			'TrinitySevenMovie2-ED1',
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
		4, 0, 2017, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		],
		[
			'TrinitySevenMovie1-ED1',
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
		1, 0, 2015, 0, 0, 1,
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
		0, 3, 2014, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		],
		[
			'TrinitySeven-OP1',
			'TrinitySeven-ED1',
			'TrinitySeven-ED2',
			'TrinitySeven-ED3',
			'TrinitySeven-ED4',
		]
	),
	new Anime(
		'13/64061',
		[
			'Saikin, Imouto no Yousu ga Chotto Okashiinda ga. OVA',
			'最近、妹のようすがちょっとおかしいんだが。 OVA',
		],
		[ 439 ],
		1, 1, 2014, 0, 0, 1,
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
		0, 0, 2014, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tShounen',
		],
		[
			'ImoCho-OP1',
			'ImoCho-ED1',
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
		0, 0, 2014, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tParody',
			'tSchool',
		],
		[
			'Nourin-OP1',
			'Nourin-ED1',
			'Nourin-ED2',
			'Nourin-ED3',
			'Nourin-ED4',
			'Nourin-ED5',
		]
	),
	new Anime(
		'3/69591',
		[
			'Kanojo ga Flag wo Oraretara: Christmas? Sonna Mono ga Boku ni Tsuuyou Suru to Omou no ka?',
			'彼女がフラグをおられたら クリスマス? そんな物が僕に通用すると思うのか?',
		],
		[ 346 ],
		1, 3, 2014, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
		],
		[

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
		0, 1, 2014, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
		],
		[
			'KanojoGaFlagWoOreretara-OP1',
			'KanojoGaFlagWoOreretara-ED1',
			'KanojoGaFlagWoOreretara-ED1v2',
		]
	),
	new Anime(
		'7/60095',
		[
			'Mikakunin de Shinkoukei: Kamoniku tte Midori-ppoi Aji ga Suru no ne.',
			'未確認で進行形 「鴨肉って緑っぽい味がするのね。」',
		],
		[ 95 ],
		1, 0, 2014, '4-koma	manga', 0, 1,
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
		2, 0, 2014, '4-koma	manga', 0, 1,
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
		0, 0, 2014, '4-koma	manga', 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'MikakuninDeShinkoukei-OP1',
			'MikakuninDeShinkoukei-ED1',
			'MikakuninDeShinkoukei-ED2',
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
		4, 0, 2018, 1, 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'ChuunibyouTakeOnMe-OP1',
			'ChuunibyouTakeOnMe-ED1',
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
		2, 2, 2014, 1, 0, 1,
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
		2, 0, 2014, 1, 0, 1,
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
		0, 0, 2014, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'ChuunibyouS2-OP1',
			'ChuunibyouS2-ED1',
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
		2, 1, 2013, 1, 0, 1,
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
		2, 3, 2012, 1, 0, 1,
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
		0, 3, 2012, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'Chuunibyou-OP1',
			'Chuunibyou-ED1',
		]
	),
	new Anime(
		'8/72479',
		[
			'Hitsugi no Chaika: Nerawareta Hitsugi/Yomigaeru Iseki',
			'棺姫のチャイカ ねらわれた棺 / 蘇る遺跡',
		],
		[ 4 ],
		1, 0, 2015, 1, 1, 1,
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
		0, 3, 2014, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'HitsugiNoChaikaS2-OP1',
			'HitsugiNoChaikaS2-ED1',
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
		0, 1, 2014, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tFavoriteAnime',
		],
		[
			'HitsugiNoChaika-OP1',
			'HitsugiNoChaika-ED1',
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
		0, 0, 2023, 0, 1, 1,
		[
			'tMystery',
			'tRomance',
			'tSupernatural',
			'tMythology',
			'tShounen',
			'tAdultCast',
			'tFavoriteAnime',
		],
		[
			'KyokouSuiriS2-OP1',
			'KyokouSuiriS2-ED1',
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
		0, 0, 2020, 0, 1, 1,
		[
			'tMystery',
			'tRomance',
			'tSupernatural',
			'tMythology',
			'tShounen',
			'tAdultCast',
			'tFavoriteAnime',
		],
		[
			'KyokouSuiri-OP1',
			'KyokouSuiri-ED1',
		]
	),
	new Anime(
		'4/72173',
		[
			'Seireitsukai no Blade Dance Specials',
			'精霊使いの剣舞〈ブレイドダンス〉ミニOVA',
		],
		[ 120 ],
		2, 3, 2014, 1, 0, 1,
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
		0, 2, 2014, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'SeireiTsukaiNoBladeDance-OP1',
			'SeireiTsukaiNoBladeDance-ED1',
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
		1, 3, 2015, 0, 0, 1,
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
		0, 1, 2015, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSeinen',
		],
		[
			'NagatoYukiChanNoShoushitsu-OP1',
			'NagatoYukiChanNoShoushitsu-ED1',
			'NagatoYukiChanNoShoushitsu-ED1v2',
			'NagatoYukiChanNoShoushitsu-ED1v3',
			'NagatoYukiChanNoShoushitsu-ED1v4',
		]
	),
	new Anime(
		'1764/142001',
		[
			'Romantic Killer',
			'ロマンティック・キラー',
		],
		[ 1380 ],
		3, 3, 2022, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tParody',
			'tHarem',
			'tShounen',
		],
		[
			'RomanticKiller-OP1',
			'RomanticKiller-ED1',
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
		0, 3, 2015, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'ShominSample-OP1',
			'ShominSample-ED1',
			'ShominSample-ED1v2',
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
		4, 3, 2019, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tOtakuCulture',
			'tFavoriteAnime',
		],
		[
			'SaekanoMovie-OP1',
			'SaekanoMovie-ED1',
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
		0, 1, 2017, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tOtakuCulture',
			'tFavoriteAnime',
		],
		[
			'SaekanoS2-OP1',
			'SaekanoS2-ED1',
			'SaekanoS2-ED2',
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
		2, 1, 2017, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'SaekanoS2EpZero-OP1',
			'SaekanoS2EpZero-ED1',
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
		0, 0, 2015, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tOtakuCulture',
			'tFavoriteAnime',
		],
		[
			'Saekano-OP1',
			'Saekano-ED1',
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
		2, 0, 2015, 1, 0, 1,
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
		0, 1, 2015, 0, 0, 1,
		[
			'tComedy',
			'tMystery',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'YamadaKun-OP1',
			'YamadaKun-ED1',
		]
	),
	new Anime(
		'1079/104630',
		[
			'Yamada-kun to 7-nin no Majo: Mou Hitotsu no Suzaku-sai',
			'山田くんと7人の魔女 OAD',
		],
		[ 839 ],
		1, 3, 2014, 0, 0, 1,
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
		0, 1, 2015, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPVisual_1',
		],
		[
			'NisekoiS2-OP1',
			'NisekoiS2-OP2',
			'NisekoiS2-ED1',
			'NisekoiS2-ED2',
			'NisekoiS2-ED3',
			'NisekoiS2-ED4',
			'NisekoiS2-ED5',
			'NisekoiS2-ED6',
			'NisekoiS2-ED7',
		]
	),
	new Anime(
		'1992/112119',
		[
			'Nisekoi: OVA',
			'ニセコイ OAD',
		],
		[ 44 ],
		1, 0, 2016, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tParody',
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
		1, 3, 2014, 0, 0, 1,
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
		0, 0, 2014, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
		],
		[
			'Nisekoi-OP1',
			'Nisekoi-OP1v2',
			'Nisekoi-OP1v3',
			'Nisekoi-OP2',
			'Nisekoi-ED1',
			'Nisekoi-ED2',
			'Nisekoi-ED3',
			'Nisekoi-ED4',
			'Nisekoi-ED5',
			'Nisekoi-ED6',
			'Nisekoi-ED7',
			'Nisekoi-ED7v2',
			'Nisekoi-ED8',
		]
	),
	new Anime(
		'1979/106698',
		[
			'Momokuri',
			'ももくり',
		],
		[ 41 ],
		3, 3, 2015, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'Momokuri-OP1-TV',
			'Momokuri-ED1-TV',
			'Momokuri-ED1v2-TV',
			'Momokuri-ED1v3-TV',
			'Momokuri-ED1v4-TV',
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
		0, 2, 2016, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tVisualArts',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'Konobi-OP1',
			'Konobi-ED1',
			'Konobi-ED2',
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
		0, 0, 2017, 6, 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tFavoriteAnime',
		],
		[
			'RewriteS2-OP1',
			'RewriteS2-OP2',
			'RewriteS2-ED1',
			'RewriteS2-ED2',
			'RewriteS2-ED3',
			'RewriteS2-ED4',
			'RewriteS2-ED5',
		]
	),
	new Anime(
		'1827/92122',
		[
			'Rewrite',
			'リライト',
		],
		[ 441 ],
		0, 2, 2016, 6, 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'Rewrite-OP1',
			'Rewrite-OP2',
			'Rewrite-ED1',
			'Rewrite-ED2',
			'Rewrite-ED3',
			'Rewrite-ED4',
			'Rewrite-ED5',
			'Rewrite-ED6',
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
		0, 3, 2016, 0, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tShounen',
		],
		[
			'OkusamaGaSeitokaichouS2-OP1',
			'OkusamaGaSeitokaichouS2-ED1',
			'OkusamaGaSeitokaichouS2-ED2',
			'OkusamaGaSeitokaichouS2-ED3',
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
		1, 0, 2016, 0, 2, 1,
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
		0, 2, 2015, 0, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tSchool',
			'tShounen',
		],
		[
			'OkusamaGaSeitokaichou-OP1',
			'OkusamaGaSeitokaichou-OP1v2',
			'OkusamaGaSeitokaichou-OP1v3',
			'OkusamaGaSeitokaichou-OP1v4',
			'OkusamaGaSeitokaichou-OP1v5',
			'OkusamaGaSeitokaichou-OP1v6',
			'OkusamaGaSeitokaichou-OP1v7',
			'OkusamaGaSeitokaichou-ED1',
			'OkusamaGaSeitokaichou-ED1v2',
			'OkusamaGaSeitokaichou-ED1v3',
			'OkusamaGaSeitokaichou-ED1v4',
			'OkusamaGaSeitokaichou-ED1v5',
			'OkusamaGaSeitokaichou-ED2',
		]
	),
	new Anime(
		'1619/106323',
		[
			'Dokyuu Hentai HxEros OVA',
			'ド級編隊エグゼロス',
		],
		[ 439 ],
		1, 3, 2020, 0, 2, 1,
		[
			'tAction',
			'tComedy',
			'tSciFi',
			'tEcchi',
			'tHarem',
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
		0, 2, 2020, 0, 2, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tSchool',
			'tShounen',
		],
		[
			'DokyuuHentaiHxEros-OP1',
			'DokyuuHentaiHxEros-ED1',
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
		0, 1, 2017, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tHarem',
			'tSchool',
		],
		[
			'RenaiBoukun-OP1',
			'RenaiBoukun-ED1',
			'RenaiBoukun-ED2',
		]
	),
	new Anime(
		'1833/95350',
		[
			'Osake wa Fuufu ni Natte kara: Yuzu Atsukan',
			'お酒は夫婦になってから 14杯め「ゆず熱燗',
		],
		[ 1195 ],
		3, 3, 2018, 2, 0, 1,
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
		0, 3, 2017, 2, 0, 1,
		[
			'tComedy',
			'tGourmet',
			'tRomance',
			'tAdultCast',
			'tFavoriteAnime',
		],
		[
			'Osakefufu-ED1',
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
		1, 0, 2019, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tOtakuCulture',
			'tFavoriteAnime',
		],
		[
			'EromangaSensei-OP1v2',
			'EromangaSenseiOVA-ED1',
			'EromangaSenseiOVA-ED1v2',
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
		0, 1, 2017, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tOtakuCulture',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual_1',
		],
		[
			'EromangaSensei-OP1',
			'EromangaSensei-OP1v2',
			'EromangaSensei-ED1',
			'EromangaSensei-ED1v2',
			'EromangaSensei-ED1v3',
			'EromangaSensei-ED1v4',
			'EromangaSensei-ED1v5',
			'EromangaSensei-ED2',
		]
	),
	new Anime(
		'8/89469',
		[
			'Yuragi-sou no Yuuna-san OVA',
			'ゆらぎ荘の幽奈さん',
		],
		[ 27, 1278 ],
		1, 2, 2018, 0, 2, 1,
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
		0, 2, 2018, 0, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'YuragiSouNoYuunaSan-OP1',
			'YuragiSouNoYuunaSan-OP1v2',
			'YuragiSouNoYuunaSan-ED1',
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
		0, 3, 2018, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'KishukuGakkouNoJuliet-OP1',
			'KishukuGakkouNoJuliet-ED1',
		]
	),
	new Anime(
		'1577/111404',
		[
			'Val x Love',
			'戦×恋（ヴァルラヴ）',
		],
		[ 346 ],
		0, 3, 2019, 0, 1, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
			'tEcchi',
			'tHarem',
			'tMythology',
			'tSchool',
			'tShounen',
		],
		[
			'ValXLove-OP1',
			'ValXLove-OP1v2',
			'ValXLove-OP1v3',
			'ValXLove-ED1',
			'ValXLove-ED1v2',
			'ValXLove-ED2',
			'ValXLove-ED3',
		]
	),
	new Anime(
		'1256/142261',
		[
			'Bocchi the Rock! Movie',
			'ぼっち・ざ・ろっく！劇場総集編',
		],
		[ 1835 ],
		0, 1, 2024, 3, 0, 1,
		[
			'tCGDCT',
			'tComedy',
			'tFavoriteAnime',
			'tMusic',
		],
		[
			'BocchiTheRockRe-OP1',
			'BocchiTheRockReRe-OP1',
			'BocchiTheRockRe-ED1',
			'BocchiTheRockReRe-ED1',
		]
	),
	new Anime(
		'1448/127956',
		[
			'Bocchi the Rock!',
			'ぼっち・ざ・ろっく！',
		],
		[ 1835 ],
		0, 3, 2022, 3, 0, 1,
		[
			'tComedy',
			'tMusic',
			'tCGDCT',
			'tFavoriteAnime',
		],
		[
			'BocchiTheRock-OP1',
			'BocchiTheRock-ED1',
			'BocchiTheRock-ED2',
			'BocchiTheRock-ED3',
			'BocchiTheRock-ED4',
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
		1, 1, 2023, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'OreGairuS3-OP1v4',
			'OreGairuS3OVA-ED1',
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
		0, 2, 2020, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'OreGairuS3-OP1',
			'OreGairuS3-OP1v2',
			'OreGairuS3-OP1v3',
			'OreGairuS3-OP1v4',
			'OreGairuS3-ED1',
			'OreGairuS3-ED2',
			'OreGairuS3-ED3',
			'OreGairuS3-ED4',
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
		1, 3, 2016, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'OreGairuS2-OP1v2',
			'OreGairuS2-ED1',
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
		0, 1, 2015, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'OreGairuS2-OP1',
			'OreGairuS2-OP1v2',
			'OreGairuS2-ED1',
			'OreGairuS2-ED2',
			'OreGairuS2-ED3',
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
		1, 2, 2013, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'OreGairu-OP1',
			'OreGairu-ED1v2',
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
		0, 1, 2013, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'OreGairu-OP1',
			'OreGairu-ED1',
			'OreGairu-ED1v2',
			'OreGairu-ED2',
			'OreGairu-ED3',
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
		0, 3, 2020, 0, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tParody',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'MaouJouDeOyasumi-OP1',
			'MaouJouDeOyasumi-ED1',
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
		0, 0, 2020, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSupernatural',
		],
		[
			'HatenaIllusion-OP1',
			'HatenaIllusion-ED1',
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
		0, 3, 2021, 0, 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tHistorical',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'TaishouOtomeOtogibanashi-OP1',
			'TaishouOtomeOtogibanashi-ED1',
			'TaishouOtomeOtogibanashi-ED2',
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
		0, 2, 2021, 1, 0, 1,
		[
			'tComedy',
			'tMystery',
			'tRomance',
			'tDetective',
		],
		[
			'TanteiWaMouShindeiru-OP1',
			'TanteiWaMouShindeiru-ED1',
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
		1, 2, 2021, 1, 0, 1,
		[
			'tComedy',
			'tDrama',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tHarem',
			'tSchool',
			'tVillainess',
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
		0, 2, 2021, 1, 0, 1,
		[
			'tComedy',
			'tDrama',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tHarem',
			'tSchool',
			'tVillainess',
			'tShoujo',
			'tFavoriteAnime',
		],
		[
			'HamefuraS2-OP1',
			'HamefuraS2-ED1',
			'HamefuraS2-ED2',
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
		0, 1, 2020, 1, 0, 1,
		[
			'tComedy',
			'tDrama',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tHarem',
			'tSchool',
			'tVillainess',
			'tShoujo',
			'tFavoriteAnime',
		],
		[
			'Hamefura-OP1',
			'Hamefura-ED1',
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
		0, 1, 2022, 3, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tCGDCT',
		],
		[
			'RPGFudousan-OP1',
			'RPGFudousan-ED1',
			'RPGFudousan-ED2',
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
		0, 1, 2022, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tParody',
			'tUrbanFantasy',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'Koiseka-OP1',
			'Koiseka-OP1v2',
			'Koiseka-OP2',
			'Koiseka-ED1',
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
		4, 3, 2022, 0, 0, 1,
		[
			'tComedy',
			'tDrama',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'KaguyaSamaWaKokurasetaiMovie-OP1',
			'KaguyaSamaWaKokurasetaiMovie-ED1',
		]
	),
	new Anime(
		'1160/122627',
		[
			'Kaguya-sama wa Kokurasetai: Ultra Romantic',
			'かぐや様は告らせたい-ウルトラロマンティック-',
			'Kaguya-sama: Love is War -Ultra Romantic-',
		],
		[ 56 ],
		0, 1, 2022, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'KaguyaSamaWaKokurasetaiS3-OP1',
			'KaguyaSamaWaKokurasetaiS3-OP1v2',
			'KaguyaSamaWaKokurasetaiS3-ED1',
			'KaguyaSamaWaKokurasetaiS3-ED2',
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
		1, 1, 2021, 0, 0, 1,
		[
			'tComedy',
			'tEcchi',
			'tRomance',
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
			'Kaguya-sama: Love is War? Season 2',
		],
		[ 56 ],
		0, 1, 2020, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'KaguyaSamaWaKokurasetaiS2-OP1',
			'KaguyaSamaWaKokurasetaiS2-ED1',
			'KaguyaSamaWaKokurasetaiS2-ED1v2',
			'KaguyaSamaWaKokurasetaiS2-ED1v3',
			'KaguyaSamaWaKokurasetaiS2-ED1v4',
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
		0, 0, 2019, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tSeinen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'KaguyaSamaWaKokurasetai-OP1',
			'KaguyaSamaWaKokurasetai-ED1',
			'KaguyaSamaWaKokurasetai-ED2',
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
		0, 1, 2019, 2, 0, 1,
		[
			'tSliceofLife',
			'tSupernatural',
			'tIyashikei',
			'tFavoriteAnime',
		],
		[
			'SewayakiKitsuneNoSenkoSan-OP1',
			'SewayakiKitsuneNoSenkoSan-ED1',
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
		2, 0, 2022, 0, 0, 1,
		[
			'tSupernatural',
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
		0, 2, 2021, 0, 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tFavoriteAnime',
		],
		[
			'KobayashiSanChiNoMaidDragonS2-OP1',
			'KobayashiSanChiNoMaidDragonS2-ED1',
			'KobayashiSanChiNoMaidDragonS2-ED2',
			'KobayashiSanChiNoMaidDragonS2-ED3',
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
		2, 2, 2017, 0, 0, 1,
		[
			'tSupernatural',
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
		0, 0, 2017, 0, 0, 1,
		[
			'tSupernatural',
			'tSliceofLife',
			'tFavoriteAnime',
		],
		[
			'KobayashiSanChiNoMaidDragon-OP1',
			'KobayashiSanChiNoMaidDragon-ED1',
		]
	),
	new Anime(
		'1062/114363',
		[
			'Clockwork Planet',
			'クロックワーク・プラネット',
		],
		[ 27 ],
		0, 1, 2017, 1, 0, 1,
		[
			'tFantasy',
			'tSciFi',
			'tFavoriteAnime',
		],
		[
			'ClockworkPlanet-OP1',
			'ClockworkPlanet-OP1v2',
			'ClockworkPlanet-ED1',
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
		0, 1, 2017, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'AkashicRecords-OP1',
			'AkashicRecords-ED1',
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
		0, 2, 2018, 1, 0, 1,
		[
			'tAction',
			'tDrama',
			'tFantasy',
			'tVideoGame',
			'tFavoriteAnime',
		],
		[
			'ShichiseiNoSubaru-OP1',
			'ShichiseiNoSubaru-OP1v2',
			'ShichiseiNoSubaru-ED1',
			'ShichiseiNoSubaru-ED1v2',
		]
	),
	new Anime(
		'1100/138338',
		[
			'Goblin Slayer II',
			'ゴブリンスレイヤーⅡ',
		],
		[ 839 ],
		0, 3, 2023, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tGore',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'GoblinSlayerS2-OP1',
			'GoblinSlayerS2-ED1',
		]
	),
	new Anime(
		'1129/111477',
		[
			"Goblin Slayer: Goblin's Crown",
			"ゴブリンスレイヤー -GOBLIN'S CROWN-",
		],
		[ 314 ],
		4, 0, 2020, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tGore',
			'tFavoriteAnime',
		],
		[
			'GoblinSlayerMovie-ED1',
		]
	),
	new Anime(
		'1719/95621',
		[
			'Goblin Slayer',
			'ゴブリンスレイヤー',
		],
		[ 314 ],
		0, 3, 2018, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tGore',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		],
		[
			'GoblinSlayer-OP1',
			'GoblinSlayer-ED1',
			'GoblinSlayer-ED2',
			'GoblinSlayer-ED3',
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
		0, 3, 2018, 3, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tMythology',
			'tWorkplace',
			'tShounen',
			'tLoveStatusQuo',
			'tFavoriteAnime',
		],
		[
			'BeelzebubJouNoOkinimesuMama-OP1',
			'BeelzebubJouNoOkinimesuMama-ED1',
		]
	),
	new Anime(
		'1638/150592',
		[
			'Tate no Yuusha no Nariagari Season 4',
			'盾の勇者の成り上がり Season 4',
			'The Rising of the Shield Hero Season 4',
		],
		[ 290 ],
		0, 2, 2025, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'ShieldHeroS4-OP1',
			'ShieldHeroS4-ED1',
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
		0, 3, 2023, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'ShieldHeroS3-OP1',
			'ShieldHeroS3-ED1',
			'ShieldHeroS3-ED2',
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
		0, 1, 2022, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'ShieldHeroS2-OP1',
			'ShieldHeroS2-ED1',
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
		0, 0, 2019, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
		],
		[
			'ShieldHero-OP1',
			'ShieldHero-OP2',
			'ShieldHero-ED1',
			'ShieldHero-ED2',
			'ShieldHero-ED3',
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
		0, 2, 2019, 1, 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tChildcare',
		],
		[
			'Uchinoko-OP1',
			'Uchinoko-ED1',
			'Uchinoko-ED2',
		]
	),
	new Anime(
		'1693/111618',
		[
			'Assassins Pride',
			'アサシンズプライド',
		],
		[ 1264 ],
		0, 3, 2019, 1, 0, 1,
		[
			'tFantasy',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		],
		[
			'AssassinsPride-OP1',
			'AssassinsPride-ED1',
			'AssassinsPride-ED1v2',
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
		0, 2, 2019, 0, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tSciFi',
			'tSuperPower',
			'tUrbanFantasy',
		],
		[
			'ToaruKagakuNoAccelerator-OP1',
			'ToaruKagakuNoAccelerator-OP1v2',
			'ToaruKagakuNoAccelerator-OP1v3',
			'ToaruKagakuNoAccelerator-OP1v4',
			'ToaruKagakuNoAccelerator-ED1',
		]
	),
	new Anime(
		'1024/108413',
		[
			'Assault Lily: Bouquet',
			'アサルトリリィ Bouquet',
		],
		[ 44 ],
		0, 3, 2020, 10, 0, 1,
		[
			'tAction',
			'tFantasy',
		],
		[
			'AssaultLily-OP1',
			'AssaultLily-ED1',
			'AssaultLily-ED1v2',
			'AssaultLily-ED2',
			'AssaultLily-ED3',
			'AssaultLily-ED4',
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
		0, 3, 2020, 8, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'KingsRaid-OP1',
			'KingsRaid-OP2',
			'KingsRaid-ED1',
			'KingsRaid-ED2',
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
		0, 1, 2024, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tReincarnation',
			'tSchool',
		],
		[
			'MaouGakuinNoFutekigoushaS2Part2-OP1',
			'MaouGakuinNoFutekigoushaS2Part2-ED1',
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
		0, 0, 2023, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tReincarnation',
			'tSchool',
		],
		[
			'MaouGakuinNoFutekigoushaS2-OP1',
			'MaouGakuinNoFutekigoushaS2-ED1',
			'MaouGakuinNoFutekigoushaS2-ED1v2',
			'MaouGakuinNoFutekigoushaS2-ED2',
			'MaouGakuinNoFutekigoushaS2-ED3',
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
		0, 2, 2020, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tReincarnation',
			'tSchool',
		],
		[
			'MaouGakuinNoFutekigousha-OP1',
			'MaouGakuinNoFutekigousha-OP2',
			'MaouGakuinNoFutekigousha-ED1',
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
		0, 2, 2024, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tMilitary',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'KimiSenS2-OP1',
			'KimiSenS2-ED1',
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
		0, 3, 2020, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tMilitary',
		],
		[
			'KimiSen-OP1',
			'KimiSen-ED1',
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
		0, 1, 2020, 8, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'Shachibato-OP1',
			'Shachibato-OP1v2',
			'Shachibato-OP1v3',
			'Shachibato-OP1v4',
			'Shachibato-ED1',
			'Shachibato-ED1v2',
			'Shachibato-ED1v3',
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
		0, 1, 2024, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tRomance',
			'tSciFi',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'MahoukaKoukouNoRettouseiS3-OP1',
			'MahoukaKoukouNoRettouseiS3-OP1v2',
			'MahoukaKoukouNoRettouseiS3-OP1v3',
			'MahoukaKoukouNoRettouseiS3-ED1',
			'MahoukaKoukouNoRettouseiS3-ED2',
			'MahoukaKoukouNoRettouseiS3-ED3',
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
		2, 3, 2021, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tSciFi',
			'tFavoriteAnime',
		],
		[
			'MahoukaKoukouNoRettouseiTsuiokuHen-ED1',
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
		0, 2, 2021, 1, 0, 1,
		[
			'tFantasy',
			'tUrbanFantasy',
			'tSciFi',
			'tSchool',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'MahoukaKoukouNoYuutousei-OP1',
			'MahoukaKoukouNoYuutousei-ED1',
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
		0, 3, 2020, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tRomance',
			'tSciFi',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'MahoukaKoukouNoRettouseiS2-OP1',
			'MahoukaKoukouNoRettouseiS2-ED1',
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
		4, 1, 2017, 1, 1, 1,
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
		0, 1, 2014, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tUrbanFantasy',
			'tRomance',
			'tSciFi',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'MahoukaKoukouNoRettousei-OP1',
			'MahoukaKoukouNoRettousei-OP2',
			'MahoukaKoukouNoRettousei-ED1',
			'MahoukaKoukouNoRettousei-ED2',
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
		0, 3, 2022, 4, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tSciFi',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'RenaiFlops-OP1',
			'RenaiFlops-ED1',
			'RenaiFlops-ED2',
			'RenaiFlops-ED3',
			'RenaiFlops-ED4',
			'RenaiFlops-ED5',
			'RenaiFlops-ED6',
			'RenaiFlops-ED7',
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
		0, 0, 2021, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tComedy',
		],
		[
			'LasDan-OP1',
			'LasDan-ED1',
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
		0, 1, 2021, 8, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'SevenKnightsRevolution-OP1',
			'SevenKnightsRevolution-ED1',
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
		0, 1, 2021, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
		],
		[
			'SentouinHakenshimasu-OP1',
			'SentouinHakenshimasu-ED1',
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
		0, 0, 2024, 1, 0, 1,
		[
			'tFantasy',
			'tRomance',
		],
		[
			'ShinNoNakamaS2-OP1',
			'ShinNoNakamaS2-ED1',
			'ShinNoNakamaS2-ED2',
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
		0, 3, 2021, 1, 0, 1,
		[
			'tFantasy',
			'tRomance',
		],
		[
			'ShinNoNakamaS2-OP1',
			'ShinNoNakamaS2-ED1',
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
		0, 1, 2022, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tAnthropomorphic',
		],
		[
			'MahoutsukaiReimeiki-OP1',
			'MahoutsukaiReimeiki-ED1',
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
		0, 0, 2022, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
		],
		[
			'TensaiOuji-OP1',
			'TensaiOuji-ED1',
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
		2, 1, 2022, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
		],
		[
			'YuushaYamemasu-OP1',
			'YuushaYamemasu-ED1',
			'YuushaYamemasu-ED2',
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
		0, 1, 2022, 1, 0, 1,
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
		0, 3, 2022, 0, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tSeinen',
			'tLovePolygon',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'Fuukoi-OP1',
			'Fuukoi-ED1',
			'Fuukoi-ED1v2',
			'Fuukoi-ED2',
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
		0, 2, 2022, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'KuroNoShoukanshi-OP1',
			'KuroNoShoukanshi-OP1v2',
			'KuroNoShoukanshi-ED1',
			'KuroNoShoukanshi-ED2',
		]
	),
	new Anime(
		'5/87145',
		[
			'Accel World: Infinite∞Burst',
			'アクセル・ワールド INFINITE∞BURST（インフィニット・バースト）',
		],
		[ 14 ],
		4, 2, 2016, 1, 0, 1,
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
		1, 2, 2012, 1, 0, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tSchool',
			'tVideoGame',
			'tFavoriteAnime',
		],
		[
			'AccelWorldEX-OP1',
			'AccelWorld-OP2',
			'AccelWorldEX-ED1',
			'AccelWorld-ED2',
		]
	),
	new Anime(
		'8/38155',
		[
			'Accel World',
			'アクセル・ワールド',
		],
		[ 14 ],
		0, 1, 2012, 1, 0, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tSchool',
			'tVideoGame',
			'tFavoriteAnime',
		],
		[
			'AccelWorld-OP1',
			'AccelWorld-OP2',
			'AccelWorld-ED1',
			'AccelWorld-ED2',
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
		1, 2, 2013, 1, 0, 1,
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
		0, 0, 2013, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tMythology',
		],
		[
			'Mondaiji-OP1',
			'Mondaiji-ED1',
			'Mondaiji-ED2',
		]
	),
	new Anime(
		'7/54343',
		[
			'Outbreak Company',
			'アウトブレイク・カンパニー',
		],
		[ 91 ],
		0, 3, 2013, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tParody',
			'tOtakuCulture',
		],
		[
			'OutbreakCompany-OP1',
			'OutbreakCompany-ED1',
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
		2, 0, 2016, 1, 0, 1,
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
		0, 0, 2016, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'Grimgar-OP1',
			'Grimgar-OP1v2',
			'Grimgar-ED1',
			'Grimgar-ED1v2',
		]
	),
	new Anime(
		'1482/146928',
		[
			'Kono Subarashii Sekai ni Shukufuku wo! 3: Bonus Stage',
			'この素晴らしい世界に祝福を！３ーBONUS STAGEー',
			"KonoSuba: God's Blessing on This Wonderful World! 3 OVA",
		],
		[ 1967 ],
		1, 1, 2025, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'KonosubaS3-OP1',
			'KonosubaS3-ED1',
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
		0, 1, 2024, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'KonosubaS3-OP1',
			'KonosubaS3-ED1',
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
		0, 1, 2023, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'KonosubaBakuen-OP1',
			'KonosubaBakuen-OP1v2',
			'KonosubaBakuen-ED1',
			'KonosubaBakuen-ED1v2',
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
		4, 2, 2019, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'KonosubaKurenaiDensetsu-ED1',
			'KonosubaKurenaiDensetsu-ED2',
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
		1, 2, 2017, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'KonosubaS2-OP1',
			'KonosubaS2-ED1',
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
		0, 0, 2017, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'KonosubaS2-OP1',
			'KonosubaS2-ED1',
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
		1, 1, 2016, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'Konosuba-OP1',
			'Konosuba-ED1',
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
		0, 0, 2016, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'Konosuba-OP1',
			'Konosuba-ED1',
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
		0, 3, 2022, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tVillainess',
			'tShoujo',
		],
		[
			'Akulas-OP1',
			'Akulas-OP1v2',
			'Akulas-OP1v3',
			'Akulas-ED1',
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
		0, 2, 2018, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tMilitary',
		],
		[
			'Hyakuren-OP1',
			'Hyakuren-ED1',
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
		0, 0, 2018, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'DeathMa-OP1',
			'DeathMa-OP1v2',
			'DeathMa-ED1',
			'DeathMa-ED2',
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
		0, 1, 2019, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'KenjaNoMago-OP1',
			'KenjaNoMago-ED1',
			'KenjaNoMago-ED1v2',
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
		0, 3, 2022, 4, 1, 1,
		[
			'tAction',
			'tComedy',
			'tOrganizedCrime',
		],
		[
			'AkibaMaidSensou-OP1',
			'AkibaMaidSensou-OP1v2',
			'AkibaMaidSensou-ED1',
			'AkibaMaidSensou-ED1v2',
			'AkibaMaidSensou-ED2',
			'AkibaMaidSensou-ED3',
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
		0, 3, 2019, 0, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tShounen',
			'tAnthropomorphic',
		],
		[
			'HataageKemonoMichi-OP1',
			'HataageKemonoMichi-OP1v2',
			'HataageKemonoMichi-OP1v3',
			'HataageKemonoMichi-OP1v4',
			'HataageKemonoMichi-OP1v5',
			'HataageKemonoMichi-OP1v6',
			'HataageKemonoMichi-OP1v7',
			'HataageKemonoMichi-OP1v8',
			'HataageKemonoMichi-OP1v9',
			'HataageKemonoMichi-OP1v10',
			'HataageKemonoMichi-OP1v11',
			'HataageKemonoMichi-OP1v12',
			'HataageKemonoMichi-ED1',
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
		0, 3, 2022, 0, 2, 1,
		[
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tHarem',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'FutokuNoGuild-OP1',
			'FutokuNoGuild-ED1',
			'FutokuNoGuild-ED2',
		]
	),
	new Anime(
		'1824/99611',
		[
			'Isekai Cheat Magician: Yoiboshi no Matsuri to Majutsushi',
			'異世界チート魔術師 第13話「宵星の祭りと魔術師」',
		],
		[ 354 ],
		2, 2, 2021, 1, 0, 1,
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
		0, 2, 2019, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'IsekaiCheatMagician-OP1',
			'IsekaiCheatMagician-ED1',
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
		0, 3, 2019, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tAction',
			'tAdventure',
		],
		[
			'Choyoyu-OP1',
			'Choyoyu-ED1',
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
		0, 3, 2019, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		],
		[
			'Noukin-OP1',
			'Noukin-ED1',
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
		0, 3, 2024, 2, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		],
		[
			'MaouSamaRetryS2-OP1',
			'MaouSamaRetryS2-ED1',
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
		0, 2, 2019, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
		],
		[
			'MaouSamaRetry-OP1',
			'MaouSamaRetry-ED1',
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
		0, 3, 2019, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tParody',
		],
		[
			'ShinchouYuusha-OP1',
			'ShinchouYuusha-OP1v2',
			'ShinchouYuusha-OP1v3',
			'ShinchouYuusha-OP1v4',
			'ShinchouYuusha-ED1',
			'ShinchouYuusha-ED2',
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
		0, 3, 2023, 1, 1, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteOPSong',
			'tFavoriteEDSong_2',
			'tFavoriteAnime',
		],
		[
			'ShadowGardenS2-OP1',
			'ShadowGardenS2-OP1v2',
			'ShadowGardenS2-OP1v3',
			'ShadowGardenS2-ED1',
			'ShadowGardenS2-ED1v2',
			'ShadowGardenS2-ED2',
			'ShadowGardenS2-ED2v2',
			'ShadowGardenS2-ED3',
			'ShadowGardenS2-ED3v2',
			'ShadowGardenS2-ED4',
			'ShadowGardenS2-ED4v2',
			'ShadowGardenS2-ED5',
			'ShadowGardenS2-ED6',
			'ShadowGardenS2-ED7',
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
		0, 3, 2022, 1, 1, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'ShadowGarden-OP1',
			'ShadowGarden-OP1v2',
			'ShadowGarden-OP1v3',
			'ShadowGarden-OP1v4',
			'ShadowGarden-ED1',
			'ShadowGarden-ED1v2',
			'ShadowGarden-ED1v3',
			'ShadowGarden-ED2',
			'ShadowGarden-ED2v2',
			'ShadowGarden-ED3',
			'ShadowGarden-ED3v2',
			'ShadowGarden-ED4',
			'ShadowGarden-ED4v2',
			'ShadowGarden-ED4v3',
			'ShadowGarden-ED5',
			'ShadowGarden-ED5v2',
			'ShadowGarden-ED6',
			'ShadowGarden-ED6v2',
			'ShadowGarden-ED7',
			'ShadowGarden-ED7v2',
			'ShadowGarden-ED8',
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
		0, 1, 2022, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'HonzukiNoGekokujouS3-OP1',
			'HonzukiNoGekokujouS3-OP1v2',
			'HonzukiNoGekokujouS3-ED1',
			'HonzukiNoGekokujouS3-ED1v2',
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
		0, 1, 2020, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'HonzukiNoGekokujouS2-OP1',
			'HonzukiNoGekokujouS2-ED1',
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
		1, 0, 2020, 1, 0, 1,
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
		0, 3, 2019, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'HonzukiNoGekokujou-OP1',
			'HonzukiNoGekokujou-ED1',
		]
	),
	new Anime(
		'1476/125643',
		[
			'Shinobi no Ittoki',
			'忍の一時',
		],
		[ 1103 ],
		0, 3, 2022, 4, 0, 1,
		[
			'tAction',
			'tSchool',
		],
		[
			'ShinobiNoIttoki-OP1',
			'ShinobiNoIttoki-ED1',
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
		0, 3, 2024, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
		],
		[
			'ArifuretaS3-OP1',
			'ArifuretaS3-OP2',
			'ArifuretaS3-ED1',
			'ArifuretaS3-ED2',
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
		1, 2, 2022, 1, 0, 1,
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
		2, 0, 2022, 1, 0, 1,
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
		0, 0, 2022, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'ArifuretaS2-OP1',
			'ArifuretaS2-ED1',
			'ArifuretaS2-ED1v2',
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
		2, 3, 2019, 1, 0, 1,
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
		0, 2, 2019, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'Arifureta-OP1',
			'Arifureta-OP1v2',
			'Arifureta-ED1',
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
		0, 3, 2024, 2, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tMystery',
		],
		[
			'KamiNoTouS2KoubouSen-OP1',
			'KamiNoTouS2KoubouSen-ED1',
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
		0, 2, 2024, 2, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tMystery',
		],
		[
			'KamiNoTouS2-OP1',
			'KamiNoTouS2-ED1',
			'KamiNoTouS2-ED1v2',
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
		0, 1, 2020, 2, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tMystery',
		],
		[
			'KamiNoTou-OP1',
			'KamiNoTou-ED1',
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
		0, 3, 2022, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tSliceofLife',
			'tFavoriteAnime',
		],
		[
			'ShinmaiRenkin-OP1',
			'ShinmaiRenkin-ED1',
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
		0, 1, 2020, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
		],
		[
			'Hachinan-OP1',
			'Hachinan-ED1',
		]
	),
	new Anime(
		'1132/134608',
		[
			'Kuma Kuma Kuma Bear Punch!',
			'くまクマ熊ベアーぱーんち！',
		],
		[ 1264 ],
		0, 1, 2023, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'KumaKumaKumaBearS2-OP1',
			'KumaKumaKumaBearS2-ED1',
		]
	),
	new Anime(
		'1062/107803',
		[
			'Kuma Kuma Kuma Bear',
			'くま クマ 熊 ベアー',
		],
		[ 1264 ],
		0, 3, 2020, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'KumaKumaKumaBear-OP1',
			'KumaKumaKumaBear-ED1',
		]
	),
	new Anime(
		'1854/114772',
		[
			'Infinite Dendrogram',
			'<Infinite Dendrogram>-インフィニット・デンドログラム-',
		],
		[ 951 ],
		0, 0, 2020, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tVideoGame',
			'tAdventure',
			'tFavoriteAnime',
		],
		[
			'InfiniteDendrogram-OP1',
			'InfiniteDendrogram-OP1v2',
			'InfiniteDendrogram-ED1',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tIsekai',
			'tIyashikei',
			'tReincarnation',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'KamihiroS2-OP1',
			'KamihiroS2-ED1',
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
		0, 3, 2020, 1, 0, 1,
		[
			'tFantasy',
			'tSliceofLife',
			'tIsekai',
			'tIyashikei',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'Kamihiro-OP1',
			'Kamihiro-ED1',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tVideoGame',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		],
		[
			'Bofuri-OP1',
			'BofuriS2-OP2',
			'BofuriS2-ED1',
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
		0, 0, 2020, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tVideoGame',
			'tFavoriteAnime',
		],
		[
			'Bofuri-OP1',
			'Bofuri-ED1',
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
		0, 3, 2022, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tAdventure',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		],
		[
			'BeastTamer-OP1',
			'BeastTamer-ED1',
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
		0, 1, 2024, 0, 0, 1,
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
		],
		[
			'TensuraS3-OP1',
			'TensuraS3-OP2',
			'TensuraS3-ED1',
			'TensuraS3-ED1v2',
			'TensuraS3-ED2',
			'TensuraS3-ED3',
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
		2, 0, 2024, 0, 0, 1,
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
		1, 3, 2023, 0, 0, 1,
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
		],
		[
			'TensuraColeusNoYume-OP1',
			'TensuraColeusNoYume-ED1',
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
		4, 3, 2022, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tShounen',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'TensuraMovie-ED1',
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
		0, 2, 2021, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'TensuraS2Part2-OP1',
			'TensuraS2Part2-ED1',
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
		0, 1, 2021, 0, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'TensuraNikki-OP1',
			'TensuraNikki-ED1',
			'TensuraNikki-ED2',
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
		0, 0, 2021, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tShounen',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'TensuraS2-OP1',
			'TensuraS2-ED1',
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
		1, 2, 2019, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'Tensura-OP1',
			'Tensura-OP2',
			'Tensura-ED1',
			'Tensura-ED2',
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
		0, 3, 2018, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'Tensura-OP1',
			'Tensura-OP2',
			'Tensura-ED1',
			'Tensura-ED2',
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
		0, 3, 2022, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
		],
		[
			'NouminKanren-OP1',
			'NouminKanren-ED1',
			'NouminKanren-ED1v2',
			'NouminKanren-ED1v3',
			'NouminKanren-ED1v4',
			'NouminKanren-ED1v5',
			'NouminKanren-ED1v6',
			'NouminKanren-ED1v7',
			'NouminKanren-ED1v8',
			'NouminKanren-ED1v9',
			'NouminKanren-ED1v10',
			'NouminKanren-ED1v11',
			'NouminKanren-ED1v12',
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
		0, 0, 2024, 1, 0, 1,
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
		],
		[
			'TsukimichiS2-OP1',
			'TsukimichiS2-OP2',
			'TsukimichiS2-ED1',
			'TsukimichiS2-ED2',
			'TsukimichiS2-ED3',
			'TsukimichiS2-ED4',
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
		0, 2, 2021, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'Tsukimichi-OP1',
			'Tsukimichi-ED1',
			'Tsukimichi-ED2',
			'Tsukimichi-ED3',
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
		0, 3, 2021, 1, 0, 1,
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
		],
		[
			'AnsatsuKizoku-OP1',
			'AnsatsuKizoku-ED1',
			'AnsatsuKizoku-ED2',
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
		0, 0, 2023, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
		],
		[
			'ShinkaNoMiS2-OP1',
			'ShinkaNoMiS2-ED1',
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
		0, 3, 2021, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
		],
		[
			'ShinkaNoMi-OP1',
			'ShinkaNoMi-ED1',
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
		0, 3, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'SeireiGensoukiS2-OP1',
			'SeireiGensoukiS2-ED1',
			'SeireiGensoukiS2-ED1v2',
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
		0, 2, 2021, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'SeireiGensouki-OP1',
			'SeireiGensouki-ED1',
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
		0, 0, 2021, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'KumoDesuGaNaniKa-OP1',
			'KumoDesuGaNaniKa-OP2',
			'KumoDesuGaNaniKa-ED1',
			'KumoDesuGaNaniKa-ED2',
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
		0, 3, 2021, 1, 0, 1,
		[
			'tFantasy',
			'tGourmet',
			'tSliceofLife',
			'tIsekai',
			'tWorkplace',
			'tFavoriteAnime',
		],
		[
			'IsekaiShokudouS2-OP1',
			'IsekaiShokudouS2-ED1',
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
		0, 2, 2017, 1, 0, 1,
		[
			'tFantasy',
			'tGourmet',
			'tSliceofLife',
			'tIsekai',
			'tWorkplace',
			'tFavoriteAnime',
		],
		[
			'IsekaiShokudou-OP1',
			'IsekaiShokudou-ED1',
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
		0, 3, 2022, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'Tenken-OP1',
			'Tenken-OP1v2',
			'Tenken-ED1',
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
		0, 1, 2024, 1, 1, 1,
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
		],
		[
			'MushokuTenseiS2Part2-OP1',
			'MushokuTenseiS2Part2-ED1',
			'MushokuTenseiS2Part2-ED2',
			'MushokuTenseiS2Part2-ED3',
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
		0, 2, 2023, 1, 1, 1,
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
		],
		[
			'MushokuTenseiS2-OP1',
			'MushokuTenseiS2-ED1',
			'MushokuTenseiS2-ED2',
		]
	),
	new Anime(
		'1627/136934',
		[
			'Mushoku Tensei II: Isekai Ittara Honki Dasu - Shugo Jutsushi Fitz',
			'無職転生Ⅱ ～異世界行ったら本気だす～ 第0話「守護術師フィッツ」',
		],
		[ 1993 ],
		2, 2, 2023, 1, 1, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'MushokuTenseiS2E0-ED1',
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
		2, 0, 2022, 1, 1, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'MushokuTenseiPart2-OP3',
			'MushokuTenseiPart2-ED1',
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
		0, 3, 2021, 1, 1, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'MushokuTenseiPart2-OP1',
			'MushokuTenseiPart2-OP2',
			'MushokuTenseiPart2-OP3',
			'MushokuTenseiPart2-OP4',
			'MushokuTenseiPart2-OP5',
			'MushokuTenseiPart2-ED1',
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
		0, 0, 2021, 1, 1, 1,
		[
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tEcchi',
			'tIsekai',
			'tReincarnation',
			'tFavoriteAnime',
			'tFavoriteOPSong_1',
			'tFavoriteOPSong_2',
		],
		[
			'MushokuTensei-OP1',
			'MushokuTensei-OP2',
			'MushokuTensei-ED1',
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
		0, 0, 2021, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tVideoGame',
			'tAdultCast',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'LogHorizonS3-OP1',
			'LogHorizonS3-ED1',
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
		0, 3, 2014, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tVideoGame',
			'tAdultCast',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'LogHorizonS2-OP1',
			'LogHorizonS2-ED1',
		]
	),
	new Anime(
		'5/84004',
		[
			'Log Horizon',
			'ログ・ホライズン',
		],
		[ 41 ],
		0, 3, 2013, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tVideoGame',
			'tAdultCast',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
		],
		[
			'LogHorizon-OP1',
			'LogHorizon-ED1',
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
		0, 0, 2022, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tMilitary',
		],
		[
			'GenkokuS2-OP1',
			'GenkokuS2-ED1',
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
		0, 2, 2021, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tMilitary',
		],
		[
			'Genkoku-OP1',
			'Genkoku-ED1',
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
		0, 1, 2021, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tVideoGame',
		],
		[
			'FullDive-OP1',
			'FullDive-ED1',
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
		0, 2, 2021, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tMedical',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'IsekaiDrugstore-OP1',
			'IsekaiDrugstore-ED1',
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
		0, 1, 2022, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tMecha',
			'tReincarnation',
			'tSchool',
		],
		[
			'Mobseka-OP1',
			'Mobseka-ED1',
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
		0, 1, 2022, 1, 1, 1,
		[
			'tAction',
			'tFantasy',
			'tIsekai',
			'tAdventure',
			'tFavoriteEDSong',
			'tFavoriteEDVisual',
			'tFavoriteAnime',
		],
		[
			'GaikotsuKishi-OP1',
			'GaikotsuKishi-ED1',
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
		0, 2, 2022, 2, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tAdultCast',
			'tIsekai',
			'tOtakuCulture',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'IsekaiOjisan-OP1',
			'IsekaiOjisan-ED1',
			'IsekaiOjisan-ED1v2',
			'IsekaiOjisan-ED1v3',
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
		0, 0, 2022, 1, 0, 1,
		[
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tGenben',
		],
		[
			'Kendeshi-OP1',
			'Kendeshi-ED1',
			'Kendeshi-ED2',
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
		0, 0, 2022, 2, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tGenben',
			'tParody',
			'tFavoriteAnime',
		],
		[
			'Fabiniku-OP1',
			'Fabiniku-ED1',
		]
	),
	new Anime(
		'1388/147970',
		[
			'Princess Connect! Michibiki no Hatsuhana: Fiore Storia',
			'プリンセスコネクト！ 導きの初花 - Fiore Storia -',
		],
		[ 1837 ],
		3, 0, 2025, 8, 0, 1,
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
		0, 0, 2022, 8, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tGourmet',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'PrincessConnectReDiveS2-OP1',
			'PrincessConnectReDiveS2-ED1',
			'PrincessConnectReDiveS2-ED2',
		]
	),
	new Anime(
		'1810/106070',
		[
			'Princess Connect! Re:Dive',
			'プリンセスコネクト！Re:Dive',
		],
		[ 1893 ],
		0, 1, 2020, 8, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tGourmet',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'PrincessConnectReDive-OP1',
			'PrincessConnectReDive-ED1',
			'PrincessConnectReDive-ED2',
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
		0, 1, 2022, 1, 0, 1,
		[
			'tAction',
			'tFantasy',
			'tHarem',
			'tReincarnation',
			'tSchool',
		],
		[
			'MurabitoA-OP1',
			'MurabitoA-ED1',
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
		0, 3, 2024, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'DanMachiS5-OP1',
			'DanMachiS5-ED1',
		]
	),
	new Anime(
		'1226/131884',
		[
			'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou - Yakusai-hen',
			'ダンジョンに出会いを求めるのは間違っているだろうかⅣ深章 厄災篇',
			'Is It Wrong to Try to Pick Up Girls in a Dungeon? IV Part 2',
		],
		[ 7 ],
		0, 0, 2023, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'DanMachiS4Part2-OP1',
			'DanMachiS4Part2-ED1',
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
		0, 2, 2022, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'DanMachiS4-OP1',
			'DanMachiS4-ED1',
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
		1, 1, 2021, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tFavoriteAnime',
		],
		[
			'DanmachiS3OVA-ED1',
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
		0, 3, 2020, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'DanMachiS3-OP1',
			'DanMachiS3-ED1',
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
		1, 0, 2020, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tFavoriteAnime',
		],
		[
			'DanMachiS2OVA-ED1',
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
		0, 2, 2019, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'DanMachiS2-OP1',
			'DanMachiS2-ED1',
			'DanMachiS2-ED1v2',
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
		4, 0, 2019, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'DanMachiOrionNoYa-ED1',
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
		0, 1, 2017, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'DanMachiSwordOratoria-OP1',
			'DanMachiSwordOratoria-ED1',
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
		1, 3, 2016, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tEcchi',
			'tFavoriteAnime',
		],
		[
			'DanMachi-OP1',
			'DanMachiOVA-ED1',
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
		0, 1, 2015, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'DanMachi-OP1',
			'DanMachi-ED1',
			'DanMachi-ED1v2',
			'DanMachi-ED2',
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
		0, 1, 2021, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tIsekai',
		],
		[
			'IsekaiMaouS2-OP1',
			'IsekaiMaouS2-ED1',
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
		0, 2, 2018, 1, 0, 1,
		[
			'tAction',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tIsekai',
		],
		[
			'IsekaiMaou-OP1',
			'IsekaiMaou-OP1v2',
			'IsekaiMaou-ED1',
			'IsekaiMaou-ED1v2',
			'IsekaiMaou-ED1v3',
			'IsekaiMaou-ED1v4',
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
		0, 2, 2021, 0, 2, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tShounen',
		],
		[
			'MegamiRyouNoRyouboKun-OP1',
			'MegamiRyouNoRyouboKun-ED1',
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
		0, 2, 2021, 0, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'100ManS2-OP1',
			'100ManS2-ED1',
			'100ManS2-ED2',
		]
	),
	new Anime(
		'1506/117717',
		[
			'100-man no Inochi no Ue ni Ore wa Tatteiru',
			'100万の命の上に俺は立っている',
			'I’m Standing on a Million Lives',
		],
		[ 1978 ],
		0, 3, 2020, 0, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tDrama',
			'tFantasy',
			'tIsekai',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'100Man-OP1',
			'100Man-OP2',
			'100Man-ED1',
			'100Man-ED1v2',
			'100Man-ED1v3',
			'100Man-ED1v4',
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
		0, 1, 2023, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'IsekaiSmahoS2-OP1',
			'IsekaiSmahoS2-ED1',
			'IsekaiSmahoS2-ED2',
			'IsekaiSmahoS2-ED3',
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
		0, 2, 2017, 1, 0, 1,
		[
			'tAdventure',
			'tComedy',
			'tFantasy',
			'tRomance',
			'tHarem',
			'tIsekai',
			'tFavoriteAnime',
		],
		[
			'IsekaiSmaho-OP1',
			'IsekaiSmaho-ED1',
			'IsekaiSmaho-ED1v2',
			'IsekaiSmaho-ED1v3',
			'IsekaiSmaho-ED1v4',
			'IsekaiSmaho-ED1v5',
			'IsekaiSmaho-ED1v6',
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
		0, 2, 2022, 0, 0, 1,
		[
			'tFantasy',
			'tEcchi',
			'tSchool',
			'tShounen',
		],
		[
			'KinsouNoVermeil-OP1',
			'KinsouNoVermeil-ED1',
		]
	),
	new Anime(
		'1563/148868',
		[
			'Tensei Kenja no Isekai Life: Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita',
			'転生賢者の異世界ライフ ～第二の職業を得て、世界最強になりました～',
			'My Isekai Life: I Gained a Second Character Class and Became the Strongest Sage in the World',
		],
		[ 1692 ],
		0, 2, 2022, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'TenseiKenja-OP1',
			'TenseiKenja-OP1v2',
			'TenseiKenja-ED1',
		]
	),
	new Anime(
		'1549/125495',
		[
			'Engage Kiss',
		],
		[ 56 ],
		0, 2, 2022, 4, 0, 1,
		[
			'tAction',
			'tComedy',
			'tRomance',
			'tLovePolygon',
		],
		[
			'EngageKiss-OP1',
			'EngageKiss-OP1v2',
			'EngageKiss-ED1',
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
		0, 2, 2023, 1, 0, 1,
		[
			'tComedy',
			'tSupernatural',
		],
		[
			'HatarakuMaouSamaS2-OP1',
			'HatarakuMaouSamaS2-ED1',
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
		0, 2, 2022, 1, 0, 1,
		[
			'tComedy',
			'tSupernatural',
		],
		[
			'HatarakuMaouSamaPart2-OP1',
			'HatarakuMaouSamaPart2-ED1',
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
		0, 1, 2013, 1, 0, 1,
		[
			'tComedy',
			'tSupernatural',
		],
		[
			'HatarakuMaouSama-OP1',
			'HatarakuMaouSama-OP1v2',
			'HatarakuMaouSama-OP1v3',
			'HatarakuMaouSama-OP1v4',
			'HatarakuMaouSama-ED1',
			'HatarakuMaouSama-ED1v2',
			'HatarakuMaouSama-ED2',
			'HatarakuMaouSama-ED3',
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
		0, 2, 2022, 0, 0, 1,
		[
			'tComedy',
			'tLoveStatusQuo',
			'tShounen',
		],
		[
			'SaikinYatottaMaidGaAyashii-OP1',
			'SaikinYatottaMaidGaAyashii-ED1',
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
		0, 2, 2022, 1, 0, 1,
		[
			'tFantasy',
			'tIsekai',
			'tMedical',
			'tReincarnation',
			'tFavoriteAnime',
		],
		[
			'IsekaiYakkyoku-OP1',
			'IsekaiYakkyoku-ED1',
		]
	),
	new Anime(
		'1314/147593',
		[
			'Lycoris Recoil: Friends Are Thieves of Time.',
			'『リコリス・リコイル』Friends are thieves of time.',
		],
		[ 56 ],
		3, 1, 2025, 4, 0, 1,
		[
			'tSliceofLife',
			'tFavoriteAnime',
		],
		[
			'LycorisRecoilFriendsAreThievesOfTime-ED1',
		]
	),
	new Anime(
		'1261/127311',
		[
			'Lycoris Recoil',
			'リコリス・リコイル',
		],
		[ 56 ],
		0, 2, 2022, 4, 0, 1,
		[
			'tAction',
			'tFavoriteOPSong',
			'tFavoriteAnime',
		],
		[
			'LycorisRecoil-OP1',
			'LycorisRecoil-ED1',
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
		0, 0, 2022, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tReincarnation',
		],
		[
			'Shikkakumon-OP1',
			'Shikkakumon-ED1',
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
		0, 0, 2021, 1, 0, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tEcchi',
			'tHarem',
		],
		[
			'OreDakeHaireruKakushiDungeon-OP1',
			'OreDakeHaireruKakushiDungeon-ED1',
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
		0, 1, 2022, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAdultCast',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'RikeKoiS2-OP1',
			'RikeKoiS2-ED1',
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
		0, 0, 2020, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tAdultCast',
			'tFavoriteAnime',
		],
		[
			'RikeKoi-OP1',
			'RikeKoi-ED1',
		]
	),
	new Anime(
		'1071/150808',
		[
			'Kanojo, Okarishimasu 4th Season',
			'彼女、お借りします 第4期',
			'Rent-a-Girlfriend Season 4'
		],
		[ 73 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tAdultCast',
			'tComedy',
			'tHarem',
			'tRomance',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'KanokariS4-OP1',
			'KanokariS4-ED1',
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
		0, 2, 2023, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tAdultCast',
			'tHarem',
		],
		[
			'KanokariS3-OP1',
			'KanokariS3-ED1',
			'KanokariS3-ED2',
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
		0, 2, 2022, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tAdultCast',
			'tHarem',
		],
		[
			'KanokariS2-OP1',
			'KanokariS2-ED1',
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
		0, 2, 2020, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tAdultCast',
			'tHarem',
		],
		[
			'Kanokari-OP1',
			'Kanokari-ED1',
			'Kanokari-ED1v2',
			'Kanokari-ED1v3',
			'Kanokari-ED1v4',
			'Kanokari-ED2',
			'Kanokari-ED3',
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
		0, 3, 2020, 4, 0, 1,
		[
			'tDrama',
			'tSuperPower',
			'tFavoriteAnime',
		],
		[
			'KamiSamaNiNattaHi-OP1',
			'KamiSamaNiNattaHi-OP1v2',
			'KamiSamaNiNattaHi-ED1',
			'KamiSamaNiNattaHi-ED2',
			'KamiSamaNiNattaHi-ED2v2',
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
		0, 2, 2021, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tTimeTravel',
			'tAdultCast',
			'tFavoriteAnime',
		],
		[
			'BokutachiNoRemake-OP1',
			'BokutachiNoRemake-ED1',
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
		0, 2, 2023, 0, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'HorimiyaPiece-OP1',
			'HorimiyaPiece-ED1',
			'HorimiyaPiece-ED2',
		]
	),
	new Anime(
		'1695/111486',
		[
			'Horimiya',
			'ホリミヤ',
		],
		[ 1835 ],
		0, 0, 2021, 0, 0, 1,
		[
			'tRomance',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'Horimiya-OP1',
			'Horimiya-OP1v2',
			'Horimiya-ED1',
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
		0, 1, 2021, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
		],
		[
			'Higehiro-OP1',
			'Higehiro-ED1',
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
		0, 0, 2024, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'JakuCharaTomozakiKunS2-OP1',
			'JakuCharaTomozakiKunS2-OP1v2',
			'JakuCharaTomozakiKunS2-ED1',
			'JakuCharaTomozakiKunS2-ED1v2',
			'JakuCharaTomozakiKunS2-ED1v3',
			'JakuCharaTomozakiKunS2-ED2',
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
		2, 1, 2021, 1, 0, 1,
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
		0, 0, 2021, 1, 0, 1,
		[
			'tDrama',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'JakuCharaTomozakiKun-OP1',
			'JakuCharaTomozakiKun-ED1',
			'JakuCharaTomozakiKun-ED2',
			'JakuCharaTomozakiKun-ED3',
			'JakuCharaTomozakiKun-ED4',
			'JakuCharaTomozakiKun-ED5',
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
		0, 2, 2019, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tEcchi',
			'tHarem',
			'tSchool',
		],
		[
			'Hensuki-OP1',
			'Hensuki-ED1',
			'Hensuki-ED2',
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
		1, 2, 2020, 1, 0, 1,
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
		0, 3, 2019, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
		],
		[
			'Oresuki-OP1',
			'Oresuki-OP1v2',
			'Oresuki-ED1',
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
		2, 2, 2014, 3, 0, 1,
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
		0, 2, 2014, 3, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tOtakuCulture',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'NozakiKun-OP1',
			'NozakiKun-ED1',
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
		0, 1, 2021, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'Osamake-OP1',
			'Osamake-ED1',
			'Osamake-ED2',
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
		0, 1, 2022, 2, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tFavoriteAnime',
		],
		[
			'Shikimori-OP1',
			'Shikimori-ED1',
		]
	),
	new Anime(
		'4/86828',
		[
			'Gamers!',
			'ゲーマーズ！',
		],
		[ 1295 ],
		0, 2, 2017, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tVideoGame',
			'tOtakuCulture',
			'tLovePolygon',
			'tFavoriteAnime',
		],
		[
			'Gamers-OP1',
			'Gamers-ED1',
			'Gamers-ED1v2',
			'Gamers-ED2',
		]
	),
	new Anime(
		'1551/150517',
		[
			'Kakkou no Iinazuke Season 2',
			'カッコウの許嫁 Season2',
			'A Couple of Cuckoos Season 2',
		],
		[ 2037 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tComedy',
			'tHarem',
			'tRomance',
			'tShounen',
		],
		[
			'CuckoosS2-OP1',
			'CuckoosS2-ED1',
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
		0, 1, 2022, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tShounen',
			'tFavoriteOPSong_2',
			'tFavoriteEDSong_2',
		],
		[
			'Cuckoos-OP1',
			'Cuckoos-OP2',
			'Cuckoos-ED1',
			'Cuckoos-ED2',
		]
	),
	new Anime(
		'1509/148453',
		[
			'Yofukashi no Uta Season 2',
			'よふかしのうた Season2',
			'Call of the Night Season 2',
		],
		[ 839 ],
		0, 2, 2025, 0, 0, 1,
		[
			'tRomance',
			'tShounen',
			'tSupernatural',
			'tVampire',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'YofukashiNoUtaS2-OP1',
			'YofukashiNoUtaS2-ED1',
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
		0, 2, 2022, 0, 0, 1,
		[
			'tRomance',
			'tSupernatural',
			'tShounen',
			'tVampire',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
		],
		[
			'YofukashiNoUta-OP1',
			'YofukashiNoUta-ED1',
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
		0, 0, 2024, 1, 0, 1,
		[
			'tDrama',
			'tPsychological',
			'tSchool',
			'tSuspense',
			'tFavoriteEDSong',
		],
		[
			'YoukosoZitsuS3-OP1',
			'YoukosoZitsuS3-OP1v2',
			'YoukosoZitsuS3-ED1',
			'YoukosoZitsuS3-ED2',
			'YoukosoZitsuS3-ED2v2',
			'YoukosoZitsuS3-ED3',
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
		0, 2, 2022, 1, 0, 1,
		[
			'tDrama',
			'tPsychological',
			'tSchool',
			'tSuspense',
			'tFavoriteEDSong',
		],
		[
			'YoukosoZitsuS2-OP1',
			'YoukosoZitsuS2-ED1',
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
		0, 2, 2017, 1, 0, 1,
		[
			'tDrama',
			'tPsychological',
			'tSchool',
			'tSuspense',
		],
		[
			'YoukosoZitsu-OP1',
			'YoukosoZitsu-ED1',
			'YoukosoZitsu-ED1v2',
			'YoukosoZitsu-ED1v3',
			'YoukosoZitsu-ED1v4',
			'YoukosoZitsu-ED1v5',
			'YoukosoZitsu-ED1v6',
			'YoukosoZitsu-ED1v7',
			'YoukosoZitsu-ED1v8',
			'YoukosoZitsu-ED1v9',
			'YoukosoZitsu-ED1v10',
		]
	),
	new Anime(
		'2/76368',
		[
			'Danchigai: Juusan Goutou Sentou Ikitai!!',
			'だんちがい 十三号棟 銭湯行きたいー!!',
		],
		[ 1195 ],
		2, 2, 2015, 3, 0, 1,
		[
			'tSliceofLife',
			'tIyashikei',
		],
		[
			'Danchigai-ED4',
		]
	),
	new Anime(
		'7/74879',
		[
			'Danchigai',
			'だんちがい',
		],
		[ 1195 ],
		0, 2, 2015, 3, 0, 1,
		[
			'tSliceofLife',
			'tIyashikei',
		],
		[
			'Danchigai-ED1',
			'Danchigai-ED2',
			'Danchigai-ED3',
			'Danchigai-ED4',
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
		0, 2, 2023, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
		],
		[
			'MasamuneKunNoRevengeS2-OP1',
			'MasamuneKunNoRevengeS2-ED1',
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
		1, 2, 2018, 0, 0, 1,
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
		0, 0, 2017, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
		],
		[
			'MasamuneKunNoRevenge-OP1',
			'MasamuneKunNoRevenge-ED1',
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
		3, 2, 2023, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDSong',
			'tFavoriteAnime',
		],
		[
			'TonikawaJoshikouHen-OP1',
			'TonikawaJoshikouHen-ED1',
			'Tonikawa-ED1',
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
		0, 1, 2023, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'TonikawaS2-OP1',
			'TonikawaS2-OP1v2',
			'TonikawaS2-ED1',
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
		2, 3, 2022, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'TonikawaSeifuku-ED1',
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
		1, 2, 2021, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'Tonikawa-OP1v2',
			'Tonikawa-ED1',
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
		0, 3, 2020, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'Tonikawa-OP1',
			'Tonikawa-OP1v2',
			'Tonikawa-ED1',
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
		0, 1, 2019, 3, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLoveStatusQuo',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'SenryuuShoujo-OP1',
			'SenryuuShoujo-ED1',
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
		2, 3, 2024, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'GotoubunNoHanayomeSpecials2-OP1',
			'GotoubunNoHanayomeSpecials2-ED1',
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
		2, 2, 2023, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'GotoubunNoHanayomeSpecials-OP1',
			'GotoubunNoHanayomeSpecials-ED1',
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
		4, 1, 2022, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'EigaGotoubunNoHanayome-OP1',
			'EigaGotoubunNoHanayome-ED1',
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
		0, 0, 2021, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'GotoubunNoHanayomeS2-OP1',
			'GotoubunNoHanayomeS2-ED1',
			'GotoubunNoHanayomeS2-ED2',
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
		0, 0, 2019, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'GotoubunNoHanayome-OP1',
			'GotoubunNoHanayome-ED1',
		]
	),
	new Anime(
		'1917/108615',
		[
			'Bokutachi wa Benkyou ga Dekinai! Chapel no Kane wa [X] wo Shukufuku Suru',
			'ぼくたちは勉強ができない！「チャペルの鐘は[X]を祝福する」',
		],
		[ 1873, 1874 ],
		1, 1, 2020, 0, 0, 1,
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
		1, 3, 2019, 0, 0, 1,
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
		0, 3, 2019, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'BokuBenS2-OP1',
			'BokuBenS2-ED1',
			'BokuBenS2-ED2',
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
		0, 1, 2019, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tHarem',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'BokuBen-OP1',
			'BokuBen-ED1',
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
		0, 1, 2022, 0, 0, 1,
		[
			'tComedy',
			'tSchool',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'KomiSanWaKomyushouDesuS2-OP1',
			'KomiSanWaKomyushouDesuS2-ED1',
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
		0, 3, 2021, 0, 0, 1,
		[
			'tComedy',
			'tSchool',
			'tShounen',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'KomiSanWaKomyushouDesu-OP1',
			'KomiSanWaKomyushouDesu-ED1',
			'KomiSanWaKomyushouDesu-ED2',
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
		0, 1, 2025, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tLoveStatusQuo',
			'tFavoriteAnime',
		],
		[
			'AharenSanWaHakarenaiS2-OP1',
			'AharenSanWaHakarenaiS2-ED1',
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
		0, 1, 2022, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tSchool',
			'tShounen',
			'tLoveStatusQuo',
			'tFavoriteAnime',
		],
		[
			'AharenSanWaHakarenai-OP1',
			'AharenSanWaHakarenai-ED1',
			'AharenSanWaHakarenai-ED2',
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
		0, 2, 2022, 2, 0, 1,
		[
			'tSliceofLife',
			'tChildcare',
			'tOrganizedCrime',
			'tFavoriteAnime',
		],
		[
			'KumichouMusume-OP1',
			'KumichouMusume-ED1',
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
		0, 2, 2022, 1, 0, 1,
		[
			'tComedy',
			'tRomance',
		],
		[
			'Tsurekano-OP1',
			'Tsurekano-ED1',
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
		0, 2, 2022, 0, 0, 1,
		[
			'tComedy',
			'tRomance',
			'tLoveStatusQuo',
			'tSchool',
			'tStrategyGame',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'Soreayu-OP1',
			'Soreayu-ED1',
		]
	),
	new Anime(
		'1954/144101',
		[
			'Overlord Movie 3: Sei Oukoku-hen',
			'劇場版「オーバーロード」聖王国編',
			'Overlord: The Sacred Kingdom',
		],
		[ 11 ],
		4, 2, 2024, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteEDSong',
		]
	),
	new Anime(
		'1530/120110',
		[
			'Overlord IV',
			'オーバーロード IV',
		],
		[ 11 ],
		0, 2, 2022, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'OverlordS4-OP1',
			'OverlordS4-ED1',
		]
	),
	new Anime(
		'1511/93473',
		[
			'Overlord III',
			'オーバーロードⅢ',
		],
		[ 11 ],
		0, 2, 2018, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
		],
		[
			'OverlordS3-OP1',
			'OverlordS3-ED1',
		]
	),
	new Anime(
		'1212/113415',
		[
			'Overlord II',
			'オーバーロードⅡ',
		],
		[ 11 ],
		0, 0, 2018, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'OverlordS2-OP1',
			'OverlordS2-ED1',
			'OverlordS2-ED1v2',
			'OverlordS2-ED1v3',
			'OverlordS2-ED2',
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
		4, 0, 2017, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
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
		4, 0, 2017, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'7/88019',
		[
			'Overlord',
			'オーバーロード',
		],
		[ 11 ],
		0, 2, 2015, 1, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tFantasy',
			'tIsekai',
			'tFavoriteAnime',
			'tFavoriteOPSong',
		],
		[
			'Overlord-OP1',
			'Overlord-ED1',
		]
	),
	new Anime(
		'1697/151793',
		[
			'Spy x Family Season 3',
		],
		[ 1835, 858 ],
		0, 3, 2025, 0, 0, 0,
		[
			'tAction',
			'tChildcare',
			'tComedy',
			'tShounen',
			'tSuperPower',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
		],
		[
			'SpyXFamilyS3-OP1',
			'SpyXFamilyS3-ED1',
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
		4, 3, 2023, 0, 0, 1,
		[
			'tAction',
			'tComedy',
			'tChildcare',
			'tShounen',
			'tSuperPower',
			'tFavoriteAnime',
			'tFavoriteEDSong_2',
		],
		[
			'SpyXFamilyMovie-ED1',
			'SpyXFamilyMovie-ED2',
		]
	),
	new Anime(
		'1506/138982',
		[
			'Spy x Family Season 2',
		],
		[ 858, 1835 ],
		0, 3, 2023, 0, 0, 1,
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
		],
		[
			'SpyXFamilyS2-OP1',
			'SpyXFamilyS2-ED1',
		]
	),
	new Anime(
		'1111/127508',
		[
			'Spy x Family Part 2',
		],
		[ 858, 1835 ],
		0, 3, 2022, 0, 0, 1,
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
		],
		[
			'SpyXFamilyPart2-OP1',
			'SpyXFamilyPart2-ED1',
		]
	),
	new Anime(
		'1441/122795',
		[
			'Spy x Family',
		],
		[ 858, 1835 ],
		0, 1, 2022, 0, 0, 1,
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
		],
		[
			'SpyXFamily-OP1',
			'SpyXFamily-ED1',
		]
	),
	new Anime(
		'1659/141438',
		[
			'Date A Live V',
			'デート・ア・ライブⅤ',
		],
		[ 1857 ],
		0, 1, 2024, 1, 1, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tHarem',
			'tFantasy',
			'tUrbanFantasy',
			'tSchool',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteEDSong',
		],
		[
			'DateALiveS5-OP1',
			'DateALiveS5-ED1',
		]
	),
	new Anime(
		'1368/121281',
		[
			'Date A Live IV',
			'デート・ア・ライブⅣ',
		],
		[ 1857 ],
		0, 1, 2022, 1, 1, 1,
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
		],
		[
			'DateALiveS4-OP1',
			'DateALiveS4-ED1',
		]
	),
	new Anime(
		'1002/108424',
		[
			'Date A Bullet: Nightmare or Queen',
			'デート・ア・バレット ナイトメア・オア・クイーン',
		],
		[ 1857 ],
		4, 3, 2020, 1, 1, 1,
		[
			'tAction',
			'tSciFi',
			'tIsekai',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'DateABullet-OP1',
			'DateABullet-ED2',
		]
	),
	new Anime(
		'1984/108425',
		[
			'Date A Bullet: Dead or Bullet',
			'デート・ア・バレット デッド・オア・バレット',
		],
		[ 1857 ],
		4, 2, 2020, 1, 1, 1,
		[
			'tAction',
			'tSciFi',
			'tIsekai',
			'tFantasy',
			'tFavoriteAnime',
		],
		[
			'DateABullet-OP1',
			'DateABullet-ED1',
		]
	),
	new Anime(
		'1055/100468',
		[
			'Date A Live III',
			'デート・ア・ライブⅢ',
		],
		[ 7 ],
		0, 0, 2019, 1, 1, 1,
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
		],
		[
			'DateALiveS3-OP1',
			'DateALiveS3-OP1v2',
			'DateALiveS3-OP1v3',
			'DateALiveS3-OP1v4',
			'DateALiveS3-OP1v5',
			'DateALiveS3-ED1',
			'DateALiveS3-ED1v2',
			'DateALiveS3-ED1v3',
			'DateALiveS3-ED1v4',
			'DateALiveS3-ED1v5',
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
		4, 2, 2015, 1, 0, 1,
		[
			'tAction',
			'tRomance',
			'tSciFi',
			'tHarem',
			'tFantasy',
			'tUrbanFantasy',
			'tFavoriteAnime',
		],
		[
			'PlasticMemories-OP1',
			'PlasticMemories-ED1',
		]
	),
	new Anime(
		'1759/131412',
		[
			'Date A Live II: Kurumi Star Festival',
			'デート・ア・ライブII 狂三スターフェスティバル',
		],
		[ 1053 ],
		1, 3, 2014, 1, 1, 1,
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
		0, 1, 2014, 1, 1, 1,
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
		],
		[
			'DateALiveS2-OP1',
			'DateALiveS2-OP1v2',
			'DateALiveS2-OP1v3',
			'DateALiveS2-ED1',
		]
	),
	new Anime(
		'1629/112503',
		[
			'Date A Live: Date to Date',
			'デート・ア・ライブ DATE TO DATE',
		],
		[ 292 ],
		1, 3, 2013, 1, 0, 1,
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
		0, 1, 2013, 1, 1, 1,
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
		],
		[
			'DateALive-OP1',
			'DateALive-ED1',
			'DateALive-ED2',
			'DateALive-ED3',
			'DateALive-ED4',
		]
	),
	new Anime(
		'1465/140538',
		[
			'Paripi Koumei: Road to Summer Sonia',
			'パリピ孔明 Road to Summer Sonia',
		],
		[ 132 ],
		0, 0, 2024, 2, 0, 1,
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
		0, 1, 2022, 2, 0, 1,
		[
			'tComedy',
			'tAdultCast',
			'tMusic',
			'tReincarnation',
			'tShowbiz',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteAnime',
		],
		[
			'ParipiKoumei-OP1',
			'ParipiKoumei-ED1',
			'ParipiKoumei-ED2',
			'ParipiKoumei-ED3',
			'ParipiKoumei-ED4',
			'ParipiKoumei-ED4v2',
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
		3, 0, 2023, 11, 0, 1,
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
		3, 3, 2021, 11, 0, 1,
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
		3, 2, 2020, 11, 0, 1,
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
		3, 1, 2019, 11, 0, 1,
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
		3, 3, 2018, 11, 0, 1,
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
		3, 1, 2018, 11, 0, 1,
		[
			'tComedy',
			'tWorkplace',
			'tAnthropomorphic',
			'tFavoriteAnime',
		]
	),
	new Anime(
		'1168/148347',
		[
			'One Punch Man 3',
			'ワンパンマン 3',
			'One-Punch Man Season 3',
		],
		[ 7 ],
		0, 3, 2025, 2, 1, 0,
		[
			'tAction',
			'tAdultCast',
			'tComedy',
			'tParody',
			'tSeinen',
			'tSuperPower',
			'tFavoriteAnime',
		],
		[
			'OnePunchManS3-OP1',
			'OnePunchManS3-ED1',
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
		2, 3, 2019, 2, 1, 1,
		[
			'tAction',
			'tComedy',
			'tParody',
			'tSuperPower',
			'tSeinen',
			'tAdultCast',
			'tFavoriteAnime',
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
		0, 1, 2019, 2, 1, 1,
		[
			'tAction',
			'tComedy',
			'tParody',
			'tSuperPower',
			'tSeinen',
			'tAdultCast',
			'tFavoriteAnime',
		],
		[
			'OnePunchManS2-OP1',
			'OnePunchManS2-ED1',
		]
	),
	new Anime(
		'1452/97840',
		[
			'One Punch Man Specials',
			'ワンパンマン',
		],
		[ 7 ],
		2, 3, 2015, 2, 1, 1,
		[
			'tAction',
			'tComedy',
			'tParody',
			'tSuperPower',
			'tSeinen',
			'tAdultCast',
			'tFavoriteAnime',
		],
		[
			'OnePunchManSpecials-ED1',
			'OnePunchManSpecials-ED2',
			'OnePunchManSpecials-ED3',
		]
	),
	new Anime(
		'1802/124744',
		[
			'One Punch Man: Road to Hero',
			'ワンパンマン OVA「ロード・トゥ・ヒーロー」',
		],
		[ 7 ],
		1, 3, 2015, 2, 1, 1,
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
		0, 3, 2015, 2, 1, 1,
		[
			'tAction',
			'tComedy',
			'tParody',
			'tSuperPower',
			'tSeinen',
			'tAdultCast',
			'tFavoriteAnime',
		],
		[
			'OnePunchMan-OP1',
			'OnePunchMan-ED1',
			'OnePunchMan-ED2',
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
		3, 3, 2022, 0, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSuperPower',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual_2',
		],
		[
			'JojoNoKimyouNaBoukenS6-OP2',
			'JojoNoKimyouNaBoukenS6-OP2v2',
			'JojoNoKimyouNaBoukenS6-ED1v2',
			'JojoNoKimyouNaBoukenS6-ED2',
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
		3, 2, 2022, 0, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSuperPower',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
		],
		[
			'JojoNoKimyouNaBoukenS6-OP1v3',
			'JojoNoKimyouNaBoukenS6-ED1',
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
		3, 3, 2021, 0, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSuperPower',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		],
		[
			'JojoNoKimyouNaBoukenS6-OP1',
			'JojoNoKimyouNaBoukenS6-OP1v2',
			'JojoNoKimyouNaBoukenS6-ED1',
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
		0, 3, 2018, 0, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSuperPower',
			'tShounen',
			'tOrganizedCrime',
			'tFavoriteAnime',
			'tFavoriteOPSong_2',
			'tFavoriteOPVisual_2',
			'tFavoriteEDVisual',
		],
		[
			'JojoNoKimyouNaBoukenS5-OP1',
			'JojoNoKimyouNaBoukenS5-OP2',
			'JojoNoKimyouNaBoukenS5-OP2v2',
			'JojoNoKimyouNaBoukenS5-OP2v3',
			'JojoNoKimyouNaBoukenS5-OP2v4',
			'JojoNoKimyouNaBoukenS5-ED1',
			'JojoNoKimyouNaBoukenS5-ED1v2',
			'JojoNoKimyouNaBoukenS5-ED2',
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
		1, 2, 2017, 0, 1, 1,
		[
			'tAction',
			'tMystery',
			'tSuperPower',
			'tShounen',
			'tFavoriteAnime',
		],
		[
			'KishibeRohanWaUgokanai-OP1',
			'KishibeRohanWaUgokanai-ED1',
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
		0, 1, 2016, 0, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSuperPower',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPSong_4',
			'tFavoriteOPVisual_4',
		],
		[
			'JojoNoKimyouNaBoukenS4-OP1',
			'JojoNoKimyouNaBoukenS4-OP2',
			'JojoNoKimyouNaBoukenS4-OP3',
			'JojoNoKimyouNaBoukenS4-OP4',
			'JojoNoKimyouNaBoukenS4-OP4v2',
			'JojoNoKimyouNaBoukenS4-OP4v3',
			'JojoNoKimyouNaBoukenS4-ED1',
		]
	),
	new Anime(
		'11/75045',
		[
			'JoJo no Kimyou na Bouken Part 3: Stardust Crusaders - Egypt-hen',
			'ジョジョの奇妙な冒険 スターダストクルセイダース エジプト編',
			"JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
		],
		[ 287 ],
		0, 0, 2015, 0, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSuperPower',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
		],
		[
			'JojoNoKimyouNaBoukenS3-OP1',
			'JojoNoKimyouNaBoukenS3-OP1v2',
			'JojoNoKimyouNaBoukenS3-OP1v3',
			'JojoNoKimyouNaBoukenS3-ED1',
			'JojoNoKimyouNaBoukenS3-ED2',
			'JojoNoKimyouNaBoukenS3-ED3',
			'JojoNoKimyouNaBoukenS3-ED3v2',
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
		0, 1, 2014, 0, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSuperPower',
			'tShounen',
			'tFavoriteAnime',
			'tFavoriteOPVisual',
			'tFavoriteEDVisual',
		],
		[
			'JojoNoKimyouNaBoukenS2-OP1',
			'JojoNoKimyouNaBoukenS2-OP1v2',
			'JojoNoKimyouNaBoukenS2-ED1',
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
		0, 3, 2012, 0, 1, 1,
		[
			'tAction',
			'tAdventure',
			'tSupernatural',
			'tShounen',
			'tHistorical',
			'tVampire',
			'tFavoriteAnime',
			'tFavoriteOPVisual_1',
			'tFavoriteOPVisual_2',
		],
		[
			'JojoNoKimyouNaBouken-OP1',
			'JojoNoKimyouNaBouken-OP1v2',
			'JojoNoKimyouNaBouken-OP2',
			'JojoNoKimyouNaBouken-OP2v2',
			'JojoNoKimyouNaBouken-ED1',
			'JojoNoKimyouNaBouken-ED1v2',
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
		0, 1, 2024, 2, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tLoveStatusQuo',
			'tFavoriteAnime',
		],
		[
			'BocchanS3-OP1',
			'BocchanS3-ED1',
			'BocchanS3-ED2',
			'BocchanS3-ED3',
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
		0, 2, 2023, 2, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tLoveStatusQuo',
			'tFavoriteAnime',
		],
		[
			'BocchanS2-OP1',
			'BocchanS2-ED1',
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
		0, 2, 2021, 2, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tRomance',
			'tLoveStatusQuo',
			'tFavoriteAnime',
		],
		[
			'Bocchan-OP1',
			'Bocchan-ED1',
			'Bocchan-ED2',
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
		0, 1, 2025, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tCGDCT',
			'tFavoriteAnime',
		],
		[
			'Slime300S2-OP1',
			'Slime300S2-ED1',
			'Slime300S2-ED2',
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
		0, 1, 2021, 1, 0, 1,
		[
			'tComedy',
			'tFantasy',
			'tIsekai',
			'tCGDCT',
			'tFavoriteAnime',
		],
		[
			'Slime300-OP1',
			'Slime300-ED1',
		]
	),
	new Anime(
		'1453/145195',
		[
			'Inazuma Eleven: Aratanaru Eiyuu-tachi no Joshou',
			'劇場版 イナズマイレブン 新たなる英雄たちの序章',
			'Inazuma Eleven the Movie: Prologue to the New Heroes',
		],
		[ 569 ],
		4, 3, 2024, 8, 3, 1,
		[
			'tSports',
			'tSuperPower',
		]
	),
	new Anime(
		'1965/117638',
		[
			'Inazuma Eleven: Orion no Kokuin',
			'イナズマイレブン オリオンの刻印',
		],
		[ 28 ],
		0, 3, 2018, 8, 3, 1,
		[
			'tSports',
			'tSuperPower',
		],
		[
			'InazumaElevenOrionNoKokuin-OP1',
			'InazumaElevenOrionNoKokuin-OP2',
			'InazumaElevenOrionNoKokuin-ED1',
			'InazumaElevenOrionNoKokuin-ED2',
			'InazumaElevenOrionNoKokuin-ED3',
		]
	),
	new Anime(
		'1460/96891',
		[
			'Inazuma Eleven: Ares no Tenbin',
			'イナズマイレブン アレスの天秤',
			'Inazuma Eleven: Ares',
		],
		[ 28 ],
		0, 1, 2018, 8, 3, 1,
		[
			'tSports',
			'tSuperPower',
		],
		[
			'InazumaElevenAresNoTenbin-OP1',
			'InazumaElevenAresNoTenbin-ED1',
		]
	),
	new Anime(
		'1044/96960',
		[
			'Inazuma Eleven: Reloaded - Soccer no Henkaku',
			'イナズマイレブン リローデッド ～サッカーの変革へんかく～',
			'Inazuma Eleven: Reloaded - Reformation of Soccer',
		],
		[ 28 ],
		2, 0, 2018, 8, 3, 1,
		[
			'tSports',
			'tSuperPower',
		]
	),
	new Anime(
		'1956/104383',
		[
			'Inazuma Eleven: Outer Code',
			'イナズマイレブン アウターコード',
		],
		[ 28 ],
		3, 3, 2016, 8, 3, 1,
		[
			'tSports',
		]
	),
	new Anime(
		'3/62875',
		[
			'Inazuma Eleven: Chou Jigen Dream Match',
			'イナズマイレブンＧＯ ギャラクシー',
		],
		[ 28 ],
		4, 1, 2014, 8, 3, 1,
		[
			'tSports',
			'tSuperPower',
		]
	),
	new Anime(
		'2/49743',
		[
			'Inazuma Eleven Go: Galaxy',
			'イナズマイレブンＧＯ ギャラクシー',
		],
		[ 28 ],
		0, 1, 2013, 8, 3, 1,
		[
			'tSpace',
			'tSports',
			'tSuperPower',
		]
	),
	new Anime(
		'1102/146473',
		[
			'Inazuma Eleven Go vs. Danball Senki W Movie',
			'劇場版 イナズマイレブンGO vs ダンボール戦機W',
		],
		[ 28 ],
		4, 3, 2012, 8, 3, 1,
		[
			'tMecha',
			'tSciFi',
			'tSports',
		]
	),
	new Anime(
		'1619/94705',
		[
			'Inazuma Eleven Go: Chrono Stone',
			'イナズマイレブンGO クロノ・ストーン',
		],
		[ 28 ],
		0, 1, 2012, 8, 3, 1,
		[
			'tSports',
			'tSuperPower',
			'tTimeTravel',
		]
	),
	new Anime(
		'1944/146478',
		[
			'Inazuma Eleven Go: Kyuukyoku no Kizuna Gryphon',
			'劇場版イナズマイレブンGO 究極の絆 グリフォン',
			'Inazuma Eleven GO: The Ultimate Bond Griffon',
		],
		[ 28 ],
		4, 3, 2011, 8, 3, 1,
		[
			'tSciFi',
			'tSports',
			'tSuperPower',
		]
	),
	new Anime(
		'2/48959',
		[
			'Inazuma Eleven Go',
			'イナズマイレブン Go',
		],
		[ 28 ],
		0, 1, 2011, 8, 3, 1,
		[
			'tSports',
			'tSuperPower',
		]
	),
	new Anime(
		'12/31189',
		[
			'Inazuma Eleven: Saikyou Gundan Ogre Shuurai',
			'劇場版イナズマイレブン 最強軍団オーガ襲来',
		],
		[ 28 ],
		4, 3, 2010, 8, 3, 1,
		[
			'tSports',
			'tSuperPower',
		]
	),
	new Anime(
		'1854/94704',
		[
			'Inazuma Eleven',
			'イナズマイレブン',
		],
		[ 28 ],
		0, 3, 2008, 8, 3, 1,
		[
			'tSports',
			'tSuperPower',
		],
		[
			'InazumaEleven-OP1',
			'InazumaEleven-OP2',
			'InazumaEleven-OP3',
			'InazumaEleven-ED1',
			'InazumaEleven-ED2',
			'InazumaEleven-ED3',
		]
	),
]
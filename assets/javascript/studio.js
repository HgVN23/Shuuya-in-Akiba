class Studio {
	constructor(id, name, img) {
		this.id = id;
		this.name = name;
		this.img = img;
	}
}

const studioList = [
	new Studio(
		91, 'feel.',
		'659f1e81-50a4-47ea-9667-66da4ae1438b'
	),
	new Studio(
		441, '8bit',
		'e2df642a-7d83-4dc7-8867-b5b0ff119cb6'
	),
	new Studio(
		132, 'P.A. Works',
		'20be7c87-65ec-4db4-9754-4054c9a31293'
	),
	new Studio(
		314, 'White Fox',
		'40ba3310-9602-47fc-beb2-cc346adada09'
	),
	new Studio(
		300, 'SILVER LINK.',
		'1a9d42cc-7f3d-4a45-8d4d-137d2594e797'
	),
	new Studio(
		957, 'Connect',
		'0e046b20-034f-4054-9b6a-f96020dfb2c2'
	),
	new Studio(
		291, 'CoMix Wave Films',
		'7a3b5971-939c-456e-8d62-2e09bc8a414c'
	),
	new Studio(
		51, 'Diomedéa',
		'eb98e15d-2ad5-4c37-b7ca-afc241b85cc1'
	),
	new Studio(
		1295, 'PINE JAM',
		'eae8ab2b-40cb-430d-9ff9-a75976140471'
	),
	new Studio(
		569, 'MAPPA',
		'e3a5163d-3b09-4e98-922b-79180a75539f'
	),
	new Studio(
		1258, 'Bandai Namco Pictures',
		'0cae085b-c75f-443c-a997-976b354f8cae'
	),
	new Studio(
		242, 'Ashi Productions',
		'ee71a430-8345-422e-bf00-46240b75759f'
	),
	new Studio(
		126, 'Studio Comet',
		'aaa566d9-8a79-432c-a8e2-6ed761f9b9f7'
	),
	new Studio(
		2, 'Kyoto Animation',
		'b066ff17-81d3-40db-b1f2-2927de70c0e3'
	),
	new Studio(
		605, 'C2C',
		'16a0962f-7718-4824-9453-c0a314238a5c'
	),
	new Studio(
		1440, 'Felix Film',
		'fb8f8ef3-898d-4c36-b4f2-851d3e6748e0'
	),
	new Studio(
		478, 'Studio Blanc.',
		'6285f75d-2767-4973-826e-7a5db8101b0a'
	),
	new Studio(
		287, 'David Production',
		'35b70810-c616-495c-8bee-ad27fe52b273'
	),
	new Studio(
		439, 'Project No.9',
		'e103b47a-6028-4ea9-b45a-803b1f942171'
	),
	new Studio(
		354, 'Encourage Films',
		'42c5748a-b13f-4bf3-805c-a25ef60440c1'
	),
	new Studio(
		406, 'Asahi Production',
		'89476290-50d8-4494-b37c-15faeea1bf45'
	),
	new Studio(
		200, 'Tezuka Productions',
		'56f69115-1e62-4860-b2d5-52b64ee1a637'
	),
	new Studio(
		30, 'Ajia-do',
		'0e24f6c3-409f-4048-aec0-e3d19db52b01'
	),
	new Studio(
		7, 'J.C.Staff',
		'076ec06c-a090-41b5-971e-2fc2ae446f5e'
	),
	new Studio(
		1379, 'Zero-G',
		'5867f6e9-fadb-411e-887a-2aa10f18923b'
	),
	new Studio(
		1993, 'Studio Bind',
		'17557685-c55a-4aa3-9990-a13667e7c1b5'
	),
	new Studio(
		2600, 'Cloud Hearts',
		'6f334ae4-efb2-4123-ad16-8cd4f0bac1d9'
	),
	new Studio(
		1087, 'Lay-duce',
		'9bb3011a-69c9-4715-a8d3-4e28acc062cb'
	),
	new Studio(
		2314, 'Quad',
		''
	),
	new Studio(
		2527, 'Liber',
		''
	),
	new Studio(
		1857, 'Geek Toys',
		'32186dfd-9d88-40f0-8f63-657aca0c948d'
	),
	new Studio(
		95, 'Doga Kobo',
		'e820af66-29b6-48c2-bfba-43e9bd5d8c27'
	),
	new Studio(
		443, 'Studio PuYUKAI',
		'd7096d2a-266f-43f4-8a5e-192f458d69ee'
	),
	new Studio(
		911, 'Passione',
		'66b5651e-4cbd-4ccd-b183-01151cf4b1d5'
	),
	new Studio(
		56, 'A-1 Pictures',
		'4713c58b-833f-4c92-bf4a-0e2f7af8a461'
	),
	new Studio(
		118, 'SynergySP',
		'658e634e-161b-4e0d-8e7a-10a364a8ab96'
	),
	new Studio(
		136, 'Vega Entertainment',
		'7325d1cf-4591-4c65-85be-f328e9ed1994'
	),
	new Studio(
		271, 'Barnum Studio',
		'2183a581-e637-481e-a1a2-cd1b3bd2f434'
	),
	new Studio(
		436, 'AIC Build',
		'16814653-eae1-4dd6-9b52-ac8bdaeb8e55'
	),
	new Studio(
		456, 'Lerche',
		'b8b87c77-acfd-4b97-8838-de5dfdf1e92b'
	),
	new Studio(
		11, 'Madhouse',
		'e68488ab-f0a0-411f-850a-18fb3e21b96c'
	),
	new Studio(
		247, 'Shin-Ei Animation',
		'b197b47f-10f6-4310-a99b-d11e51663d62'
	),
	new Studio(
		10, 'Production I.G',
		'5b86997d-226e-4870-ae60-e353a78178a0'
	),
	new Studio(
		207, 'Magic Bus',
		'877399fc-3555-4ac2-aac3-c68fcc2645c4'
	),
	new Studio(
		1264, 'EMT Squared',
		'cb6ef9a9-eaf9-4cf8-8177-4f4dcb87697f'
	),
	new Studio(
		1998, 'Studio Signpost',
		'4a8f5425-ad12-4d54-bb08-6122f820736a'
	),
	new Studio(
		1237, 'Millepensee',
		'98b0d204-0859-4335-b143-8ac13867a6e3'
	),
	new Studio(
		96, 'Yumeta Company',
		'35f4c53e-67d8-498c-877d-44f6e02cad7c'
	),
	new Studio(
		894, 'Graphinica',
		'66292dc1-5c47-43bf-9054-2eea2c48d308'
	),
	new Studio(
		1967, 'Drive',
		'13a5bc7d-2c3b-4e30-b9e9-8993a0114c30'
	),
	new Studio(
		2201, 'Studio Palette',
		'85aa0db9-a299-409d-8ae8-8d9ff9aa7cf6'
	),
	new Studio(
		839, 'LIDENFILMS',
		'c7537634-ea2e-4e5b-acb3-53b4fadc8d51'
	),
	new Studio(
		35, 'Seven Arcs',
		'0a38dffe-383c-4802-9751-c1577f464ffd'
	),
	new Studio(
		2554, 'Gekkou',
		'bbc72ac4-1af5-4712-9b86-b5af80901169'
	),
	new Studio(
		1813, 'Studio Lings',
		'0ca5f6de-be4f-4dc5-8434-a0d6ef38b51c'
	),
	new Studio(
		1521, 'Studio Elle',
		'ff6544a9-3b32-447c-8b31-e8d444962159'
	),
	new Studio(
		1340, 'Typhoon Graphics',
		'a3808eaf-05b9-4395-b92e-bc97ef88f5a4'
	),
	new Studio(
		22, 'Nippon Animation',
		'63f3da75-f7bf-4185-9d85-46f21e13b778'
	),
	new Studio(
		32, 'Manglobe',
		'c69096fc-6a94-4cbc-8514-c674172ee122'
	),
	new Studio(
		14, 'Sunrise',
		'6a9279a7-1aeb-4a2b-bceb-4e7f24fae7b1'
	),
	new Studio(
		2405, 'Staple Entertainment',
		'bc83f99d-00f9-4883-afca-4ece89e8e0bb'
	),
	new Studio(
		1835, 'CloverWorks',
		'75875b81-17bb-4f7e-a06f-bb149d54687e'
	),
	new Studio(
		1547, 'Blade',
		'db884645-6626-4ff3-994b-11482c13758c'
	),
	new Studio(
		418, 'Studio Gokumi',
		'6c4cea3b-b993-46cb-9b07-22aedce7c8a3'
	),
	new Studio(
		1299, 'AXsiZ',
		'd3423e21-e3cd-4e79-8912-a02da7f0fa44'
	),
	new Studio(
		309, 'GoHands',
		'1a764473-755d-4537-90a1-7fd87881813f'
	),
	new Studio(
		290, 'Kinema Citrus',
		'720b6054-9637-436d-851b-da7a1740828e'
	),
	new Studio(
		1828, 'Lapin Track',
		'dc53432e-9634-4762-b6f0-cf42ddbc3cb0'
	),
	new Studio(
		1687, 'Yokohama Animation Lab',
		'5bee6ffd-6785-4794-8886-497c5c66b31d'
	),
	new Studio(
		73, 'TMS Entertainment',
		'be6fb172-8033-4f5c-a904-4ad4de90dbdd'
	),
	new Studio(
		1978, 'Maho Film',
		'7879474b-7cd9-422c-a13e-01e986639306'
	),
	new Studio(
		1693, 'Studio Flad',
		'b3b4f855-0fb3-49bb-b822-7ab2c38da683'
	),
	new Studio(
		218, 'Zexcs',
		'c2458b6a-a856-4dcb-87a8-2dd80d3751fb'
	),
	new Studio(
		803, 'Trigger',
		'bc3f892a-8581-45b1-8a95-81b6ac518f3d'
	),
	new Studio(
		179, 'A.C.G.T.',
		'728b7c78-b269-4434-95bb-f2eea1ae3f32'
	),
	new Studio(
		858, 'Wit Studio',
		'e7e64f9e-23f6-4c74-9813-cb4fcdb600cf'
	),
	new Studio(
		41, 'Satelight',
		'b4ec2f63-5dac-41d1-b47c-01353a2f4e3f'
	),
	new Studio(
		3, 'Gonzo',
		'8d25fb54-5111-4174-9bee-46298c25adbd'
	),
	new Studio(
		1471, 'Platinum Vision',
		'3a41482e-83c4-4aa2-b316-aa596c84f4e1'
	),
	new Studio(
		27, 'Xebec',
		'71f3fb20-a083-4fa3-9657-36877d608afe'
	),
	new Studio(
		2674, 'BUG FILMS',
		'd864dce6-2011-460e-899e-050d66aafa8b'
	),
	new Studio(
		60, 'Actas',
		'10619a5a-b806-4069-a62c-e74be5c6bdff'
	),
	new Studio(
		28, 'OLM',
		'4b41f888-3ec1-478e-aadd-882b78b4e3af'
	),
	new Studio(
		1127, 'Studio 3Hz',
		'4ade4ad0-d7ae-4bae-a6d4-a5dae3fa8146'
	),
	new Studio(
		83, 'AIC Spirits',
		'248e45ab-a9ad-45f6-bf38-f18285347a8d'
	),
	new Studio(
		37, 'Studio Deen',
		'77ec0b0b-f27d-4c2a-9952-ebfa895638e1'
	),
	new Studio(
		48, 'AIC',
		'4442ad00-d6f8-4915-b2ce-ebd2fe751f37'
	),
	new Studio(
		2298, 'AtelierPontdarc',
		'9e973474-c5e2-4c53-9eca-ff2e60252f1d'
	),
	new Studio(
		1, 'Pierrot',
		'b03509d0-0a9f-4f7e-a75f-6ad2649f4cdc'
	),
	new Studio(
		1722, 'Bibury Animation Studios',
		'c767bca4-8afb-4261-acf7-67cddbdc22dd'
	),
	new Studio(
		1053, 'Production IMS',
		'16e65560-f086-4d66-b13f-c5e168b8da7e'
	),
	new Studio(
		852, 'Nexus',
		'af804e48-b219-4541-801e-c7414f7659b3'
	),
	new Studio(
		1829, 'Lesprit',
		'af5b1a71-38f8-4366-b058-9c1c9cfdb83f'
	),
	new Studio(
		4, 'Bones',
		'969047f0-a8ec-475e-ad0d-6e0d5cd8e17f'
	),
	new Studio(
		346, 'Hoods Entertainment',
		'05864fc0-5a4e-47b0-8af7-05833f3ce308'
	),
	new Studio(
		112, "Brain's Base",
		'f5e7317b-f19c-4975-be95-8a357e31d4f0'
	),
	new Studio(
		70, 'Nomad',
		'28e2ca8e-58ad-44fe-9e39-e9c4d99c593b'
	),
	new Studio(
		1974, 'ENGI',
		'b744ce42-5dce-4a4f-9eb9-66a48be4fec3'
	),
	new Studio(
		951, 'NAZ',
		'7b82fa77-1abc-49a0-bb41-c5b853a85a52'
	),
	new Studio(
		1304, 'Qualia Animation',
		''
	),
	new Studio(
		397, 'Bridge',
		'76ea23c5-cf21-49d6-bf83-14ff85be4e7b'
	),
	new Studio(
		1278, 'Signal.MD',
		'8f777026-a21b-4054-b5f7-e7593a2ab725'
	),
	new Studio(
		1860, 'Magia Doraglier',
		''
	),
	new Studio(
		38, 'Arms',
		'7ea66047-7ad4-419d-ad7b-62d276d3389d'
	),
	new Studio(
		34, 'Hal Film Maker',
		'eeb148f5-9ac6-41cc-81c4-bbafd8ed104e'
	),
	new Studio(
		1306, 'AIC Classic',
		''
	),
	new Studio(
		163, 'asread.',
		'8e0262aa-2185-4463-a36d-ec662e56b1ab'
	),
	new Studio(
		1569, 'Seven Arcs Pictures',
		'28c51015-10a0-40c7-be1b-df2b651efb9d'
	),
	new Studio(
		120, 'TNK',
		'b2219a25-f5c6-4b96-94a4-5ea3f145bb41'
	),
	new Studio(
		1380, 'domerica',
		'516b6e7e-c02b-425d-a118-6e126db31767'
	),
	new Studio(
		44, 'Shaft',
		'6abfb420-5815-4a62-b978-cbbf9b868fa0'
	),
	new Studio(
		541, 'Seven',
		'9eba3d76-398f-4c7a-bc84-a877cefa2426'
	),
	new Studio(
		1195, 'Creators in Pack',
		'd088e903-ffe4-4cb8-a3fa-69761f90636c'
	),
	new Studio(
		1407, "Children's Playground Entertainment",
		'1681b4a6-5e1d-4741-9ac8-602caadc9a48'
	),
	new Studio(
		1575, 'DR Movie',
		'e33c2504-defc-4e24-9a0d-e1561fd7691d'
	),
	new Studio(
		2004, 'Sunrise Beyond',
		'f8ea055c-a280-4843-a520-c38b4bcb7816'
	),
	new Studio(
		2052, 'Wolfsbane',
		'261b4559-fa2f-4aea-81ef-4f98a29abddd'
	),
	new Studio(
		2246, 'studio MOTHER',
		'20a2a278-83af-431d-ae96-817da43ea200'
	),
	new Studio(
		1794, 'EKACHI EPILKA',
		'7c527760-eb8f-4a53-8008-b1f0cec11378'
	),
	new Studio(
		1103, 'TROYCA',
		'745cffb8-7566-4cfe-aab2-d89799d04d2b'
	),
	new Studio(
		94, 'Telecom Animation Film',
		'21fb8c8b-f416-454f-b7bc-90e57f9d7074'
	),
	new Studio(
		1209, 'Studio A-CAT',
		'04b5237a-4945-46d8-a5a5-9495f337e5d5'
	),
	new Studio(
		723, 'Hotline',
		''
	),
	new Studio(
		1997, 'Studio Kai',
		'0dd31a16-97e4-44af-9bd8-76c3ab8fc307'
	),
	new Studio(
		2097, 'HORNETS',
		'0b1fd16f-3e33-420f-a252-5ecf62125d33'
	),
	new Studio(
		1893, 'CygamesPictures',
		'119d1985-17a3-4e11-8409-d1512a5ec084'
	),
	new Studio(
		2037, 'Okuruto Noboru',
		'126e5cf4-6b4c-4bff-893f-c82725c7170a'
	),
	new Studio(
		196, 'Production Reed',
		'cb259e98-cbb9-446e-9b98-196c93dc4d5c'
	),
	new Studio(
		1692, 'Revoroot',
		'57005b94-b164-4c6d-9ebd-aab4389fcbf5'
	),
	new Studio(
		1873, 'Silver',
		'cb4c5390-cc47-41de-acba-0f97756e3fdc'
	),
	new Studio(
		1874, 'Arvo Animation',
		'f72d22d4-c30e-45ee-9c13-f6fab2748f35'
	),
	new Studio(
		1314, 'Gaina',
		'f12e73b5-72c2-436c-88c7-f51970828b43'
	),
	new Studio(
		292, 'AIC PLUS+',
		'5b0a3bfa-2608-4c7f-9bc8-24dc1596f80c'
	),
	new Studio(
		866, 'Fanworks',
		'afd0a3de-886b-494d-9ce5-32c19bcb8a95'
	),
	new Studio(
		1257, 'A-Real',
		''
	),
	new Studio(
		1796, 'Digital Network Animation',
		''
	),
	new Studio(
		1119, 'Shuka',
		'9116fb75-b878-41d9-9b2a-e64c00ff25ba'
	),
	new Studio(
		1119, 'Jumondo',
		'06fe7c43-a114-4378-acac-99c66213da12'
	),
	new Studio(
		2705, 'TOHO animation STUDIO',
		'd951115c-6e20-47fb-adeb-20c0318fdc49'
	),
	new Studio(
		2760, 'Studio Add',
		''
	),
	new Studio(
		2828, 'Studio Polon',
		''
	),
	new Studio(
		2411, 'Studio Massket',
		'89980345-5666-40b2-879b-741f086fae9a'
	),
	new Studio(
		2144, 'BloomZ',
		'bd57073f-b6f9-4cff-bed7-b3f733c6bafc'
	),
	new Studio(
		1872, 'P.I.C.S.',
		'4360928a-2890-43fb-9282-fa5b4f0eb68e'
	),
	new Studio(
		553, 'Marvy Jack',
		'27f5d351-6e3f-45dd-bdd1-1eab9470a6eb'
	),
	new Studio(
		2212, 'Tsumugi Akita Animation Lab',
		'36380625-bdb8-47bf-96ae-bd50dc0dfa17'
	),
	new Studio(
		2455, 'East Fish Studio',
		'1fb0a741-a46c-4e83-8221-237a528f679e'
	),
	new Studio(
		2009, 'Yostar Pictures',
		'02184d12-8c0d-422c-862d-6eaab2d25a2a'
	),
	new Studio(
		2134, 'Studio CANDY BOX',
		'fe533e22-43b7-491a-9642-45a6696f138f'
	),
	new Studio(
		2157, 'Production +h.',
		'75c8ea9b-6f16-4059-a98e-8091304c8af0'
	),
	new Studio(
		2642 , 'E&H Production',
		'083ce96c-ac4b-4a82-86a6-9cbab41b832b'
	),
	new Studio(
		2696 , '100studio',
		''
	),
	new Studio(
		2844 , 'Imagica Infos',
		''
	),
	/*new Studio(
		 , '',
		''
	),*/
]
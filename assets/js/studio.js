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
		'dc72518a-32a4-4b00-b1df-a8e57d193530'
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
		'5d962646-3a74-4b8f-b246-7bfcd21b7c08'
	),
	new Studio(
		2527, 'Liber',
		'fd43fe8e-f17f-4ab7-8a6d-d263014e8f72'
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
		'1ad3a161-1858-4226-81b9-5dee5d103dbe'
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
		'1619bb2e-1541-4736-9844-dc2eb8865d5b'
	),
	new Studio(
		723, 'Hotline',
		''
	),
	new Studio(
		1997, 'Studio KAI',
		'9fc568e4-15a4-4c9f-9f87-85411641d3cb'
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
		'02491e29-888c-47cf-9998-cb7fdbeec42d'
	),
	new Studio(
		1119, 'Shuka',
		'9116fb75-b878-41d9-9b2a-e64c00ff25ba'
	),
	new Studio(
		755, 'Jumondo',
		'06fe7c43-a114-4378-acac-99c66213da12'
	),
	new Studio(
		2705, 'TOHO animation STUDIO',
		'd951115c-6e20-47fb-adeb-20c0318fdc49'
	),
	new Studio(
		2760, 'Studio Add',
		'd0dcb4a0-b4bc-444b-b935-d55057fc98d6'
	),
	new Studio(
		2828, 'Studio Polon',
		'7580e2c7-40c6-494a-963c-8465f697e23d'
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
		2696, '100studio',
		'fd0f83c4-1f83-4615-aafc-05a5df43a1e9'
	),
	new Studio(
		2844, 'Imagica Infos',
		'858ebc1e-3645-4a0f-b8f9-386dbcef749d'
	),
	new Studio(
		2928, 'Elias',
		'fa03d227-8be0-453e-96d9-876c452f82e7'
	),
	new Studio(
		229, 'The Answer Studio',
		'b0ad506b-a784-4b9b-b48f-3dc3c95a4b00'
	),
	new Studio(
		2835, 'ROLL2',
		'12d6520a-f0ca-4588-8bab-0a9e95ee7f48'
	),
	new Studio(
		2370, 'Hayabusa Film',
		'1b652342-01f3-48b4-b19e-c96858c95a51'
	),
	new Studio(
		2387, 'Ga-Crew',
		''
	),
	new Studio(
		2698, 'Voil',
		'abdccb06-4c63-443b-8805-95ef1a3c063e'
	),
	new Studio(
		1567, 'Nut',
		'03530777-825a-414b-a320-21363dd0ed7b'
	),
	new Studio(
		1591, 'Science SARU',
		'4c810cc0-ae5b-4b4d-98e7-926c719275b9'
	),
	new Studio(
		1075, 'C-Station',
		'97a95374-f91f-4fe5-8f3d-9ba18b39a0c4'
	),
	new Studio(
		2855, 'Studio Moe',
		'b17ecf92-6f2c-48e4-aa88-c600c64c838c'
	),
	new Studio(
		1843, 'TriF Studio',
		'9c74374b-2d9c-4860-8d30-cc024b5a4f7e'
	),
	new Studio(
		2985, 'Saber Works',
		'c16bd865-493e-4024-a23e-5ee21d45ad9d'
	),
	new Studio(
		2725, 'CompTown',
		'09a6e4bf-b774-4f88-ab16-ef77e97749f4'
	),
	new Studio(
		753, 'PRA',
		'ca92bf2e-cf49-4c47-bff7-b12f2821d48e'
	),
	new Studio(
		1837, 'G-angle',
		'31e96d78-6e32-4a32-8866-b56b3a10038b'
	),
	new Studio(
		2622, 'Makaria',
		'531190d2-df06-4ff5-9de5-38f1a3b2b197'
	),
	new Studio(
		1393, 'Geno Studio',
		'fbc5104e-57c4-46cd-b0f6-53e36b543141'
	),
	new Studio(
		2909, 'Teddy',
		'8c497751-9767-49d1-a81a-0a1d02394b1d'
	),
	new Studio(
		3048, 'Kachigarasu',
		''
	),
	new Studio(
		2917, 'Soigne',
		'd472767b-4403-4e6d-b107-58da2ad461cb'
	),
	new Studio(
		1991, 'Enishiya',
		'0f34c9e5-b3e1-460d-9ee1-552b5bd08c60'
	),
	new Studio(
		64, 'Sotsu',
		'3d58ee82-52da-4281-9ea2-cbfe5eaa2a18'
	),
	new Studio(
		3070, 'Studio Clutch',
		'23cfca9d-2e78-4acf-b94e-0133f14944e8'
	),
	new Studio(
		3060, 'WonderLand',
		''
	),
	new Studio(
		563, 'LandQ studios',
		'2559d4da-e94b-4712-b5f2-8243baccab8d'
	),
	new Studio(
		3045, 'Bones Film',
		'2a76e6c4-fb18-4d0d-91c2-75e42adec27b'
	),
	new Studio(
		101, 'Studio Hibari',
		'3d832a92-b77d-47c9-aeb6-6df25664caa5'
	),
	new Studio(
		1984, 'Bakken Record',
		'428cae56-b153-4257-a989-0ce14e9a8f07'
	),
	new Studio(
		2983, 'Imageworks Studio',
		''
	),
	new Studio(
		2240, 'Studio Daisy',
		'8691ed05-6a5d-4820-9bb1-d483bd29271b'
	),
	new Studio(
		318, 'WAO World',
		'ba92d76b-5305-4b31-b6c8-21676f493720'
	),
	new Studio(
		103, 'Tatsunoko Production',
		'9ab38042-78ae-46c4-a22d-2a00274d0a48'
	),
	new Studio(
		1099, 'Cyclone Graphics',
		'35b2d3d9-b0ed-4655-9ed1-7feea2029316'
	),
	new Studio(
		2205, 'Studio Kafka',
		'ed59d2ed-4554-44d0-97b1-e0d2a569f478'
	),
	new Studio(
		3192, 'Studio Graph77',
		'28ef4279-d42d-49c3-9385-4f2fbba48ea8'
	),
	new Studio(
		3094, 'animation studio42',
		'a065636f-428c-440c-9da0-0bec5040fd32'
	),
	new Studio(
		2663, "Rock'n Roll Mountain",
		'220d403b-8308-4344-b817-399c9f83e217'
	),
	new Studio(
		3044, 'Bellnox Films',
		'0e7589df-6d29-4722-b631-e18cb50dab3b'
	),
	new Studio(
		2288, 'Qzil.la',
		'dc1b5945-4945-4b07-84b1-43778901de89'
	),
	new Studio(
		3273, 'Atelier Peuplier',
		'0a2fc12c-d58d-4cc9-8aba-693818a4158b'
	),
	new Studio(
		1033, 'Studio Colorido',
		'09812f1b-2c12-4a7d-b7fa-a5d9c23b6a9e'
	),
	new Studio(
		3226, 'Studio Chromato',
		'862ca789-9715-48d1-9d90-5adb8e1c46bf'
	),
	/*new Studio(
		, '',
		''
	),*/
].sort((a, b) => a.name.localeCompare(b.name));
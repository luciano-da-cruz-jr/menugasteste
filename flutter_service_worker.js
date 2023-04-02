'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8a8a79e11b10d75b04f021245309c21c",
".git/config": "9965cbed4f94437504f0e5cab8629c02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8292095cb68b60c018616338f62e1fd9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "981c0dbe15b4350191a49e6f590e6e10",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "88037ac7be54905990b5a0ae59226d00",
".git/logs/refs/heads/master": "88037ac7be54905990b5a0ae59226d00",
".git/logs/refs/remotes/origin/HEAD": "758378aac9fe7beabf58fe21b0a88483",
".git/logs/refs/remotes/origin/master": "bc9a3f6e23a72f8b0515a521943907b9",
".git/objects/00/aa873c3a04e0036d4e3cb19d5e30bdd188095a": "6e5eece4fbdcd06dfd4f81652d646129",
".git/objects/01/f54fbcb992141e8a0110529ab39b149f577c21": "ba8c7d55f6dc1a49dd75d00a8667f0b1",
".git/objects/03/01199b1c7afd146389937acc743177c56d8b4c": "64e8515cb1b3641fd79e7035f5b0912e",
".git/objects/06/9062be90fcfb43481d2197b39ff4095311edb1": "02950b6308892ce4b2e74d1c42714d12",
".git/objects/09/0a905fe5a222f62b88cabb5ced210c2875fbef": "9613855de037d0915da204dbec29fb13",
".git/objects/09/910588fa9ad9121451ce4a3a409c910d74b420": "42393c66ae4f7f9cc6652ac3f00930d6",
".git/objects/0b/1f01ba275fccc683465d11ce2dec85ef62e913": "22615b404291a618e4e8cfc4dd90d575",
".git/objects/0c/934fb530afb953324f26c9751faafd96fd6246": "607b18f484e528fdb9b9d8b0655f39fd",
".git/objects/18/39876e624076e5e661034bb6e67706e7ee654c": "0a1f450919b8d3de12b463558f460025",
".git/objects/19/80eb82efc03de10c45969cdb1cec3d41f1d144": "d8971213fafb558d11ccdf7e4eda3a5f",
".git/objects/27/a4c26a73c7570bacdfbe7082655fec867b23c3": "48cf386673f98ddc0d24ba859d33f535",
".git/objects/29/a81e13894db8cf7ab14c6c6f1d265edfe6eccf": "6382dfe9e57d8fbe4442daceb0b0cc57",
".git/objects/2d/d0b8a0bbd44fffe0f430a24a4653e9bc4e78de": "d88f595f0025600dc7ef2c25e616feb7",
".git/objects/2f/396c74cb778ed19f79377c844012ce951a96a7": "72d423526a6b40d4432a1abaf1d506ce",
".git/objects/31/cfc74f0ddfecbd4aec18b9eb271c85b98a3d38": "7cc77360a8a4b2b3052a5b0d954c9655",
".git/objects/36/b9a85090fd8a8207510d7da7a85e3cb2940551": "b83bfdb98e413b7e36dc47186e42b3a0",
".git/objects/39/a029516cab514b57d81ebc7f7c811272496dc2": "dc1883e1fbf0468a94cac9f16587fbdd",
".git/objects/3b/d5a8dc0b6a9b608c34b32a4ba89a66ae5832a0": "c58f3fbd2bbf48a5d80002ae2469ca99",
".git/objects/3d/eed8534fdd842744961ffcbc946945d868b024": "376ed1a0afb4c00998f27273dcf2eb70",
".git/objects/3e/e17e03306af48e1635a3a2126b25b480847bd2": "292764631281996fa3431cd9c9b4f1bc",
".git/objects/3f/bb0504cbf38d90e16d1e39e493ccd790f1027b": "3ffc046d867431d5d2b55fe22bfeef8c",
".git/objects/40/15a4d4ddd3f2612bad195deaad8e6e7058ec20": "1281cac7a5c472d741bcf49b80b1e59a",
".git/objects/42/0ef80094f42f0a6ba1404cc9f393ed91535cde": "ff9664dd3bc7a525b4fcf35e61451f3b",
".git/objects/44/1994279ceac8ae458f4bf28edbca146dd5842f": "98cefaff0e709c63c3007d2695bb9ded",
".git/objects/44/90fe0d169f4b55696278e09a379e1fd39731fc": "30dc3bff6c2aa2aa790d8c347fb4b227",
".git/objects/46/e381b41e5389e372541982c7efc7b7a703e1cb": "05ea4f5b37ef03b573861b6642298a1c",
".git/objects/4a/a0495cdbdb21606b9b3f6e71f601fdee49d5c8": "2d014586df97d3b044f0fe3dbc5c6cf3",
".git/objects/4b/bb0521d87d22b6dd2ca60a64bbba717b718670": "44fe639fe79df2e83552de6b61f61f95",
".git/objects/4b/f1ae0305c767faea4db6bd52d4e5d12f276057": "b43bd14decaeee2f7b336c9ff464f718",
".git/objects/4d/d2a21a488a68a0ede9247e6b69c8f151b35272": "b3d4e362d61e58c7446a55c67bde8728",
".git/objects/4e/33aefa6d0cbbc548ba075ee1ca6dc6542fa666": "e6759b9807628eb84ad71cb36f5331d6",
".git/objects/51/1596d3fb2e8824cb48384f04b676b0c7b1fbb3": "e5410714a2b7675546f7cf26b8ec8125",
".git/objects/53/f5cf94de003a72c858640f0f6b900808835468": "e7896bd6649b2b0d9480be39b3d85233",
".git/objects/54/7c16334c314d90a2db24349c8a7107cd1d6584": "3af75e479ac4d5dc119656703b7169fc",
".git/objects/55/81c774c81a0076e5183782f6651f56801f6f39": "cf398d9cbca0f7d23a279ed9316539d3",
".git/objects/55/b4c30a6b2aff59cb86837e7bae5b5f9b0f5c5e": "9c3cc6b8909e13a40f89413c635e4f63",
".git/objects/56/b51187bb9cec6dda0e33b9f9f84549cf1e5a79": "d4fe2edfced74e1225258b66012af0b9",
".git/objects/56/fc90d9740028766934f0320fd6cb125f3b055f": "a51c4f57089efbaa8f1937b447d0e97d",
".git/objects/5a/15978cc4b32f8cd3b5e5671101d51263a8b670": "7b18ea55e0ed6f9f1bdb166763e984c4",
".git/objects/5c/2a31535c9930033f72964a4347295194a2ca93": "587e103ea5f6e7e0e3b286342e6eab8a",
".git/objects/5c/3a5d4e533aca5bf83a2520e2e92b521a722f1f": "28eb5b50bf045e0ed8d189ca5c79fba1",
".git/objects/5d/5c615a30add6fbe81f37253b094edbc59a5fd1": "b65ce991d157d650707c85841c02df59",
".git/objects/5f/e75b564940cac21efe02619eae25afba96559e": "b138b9b7e6f6674dd4adeff80b1599ae",
".git/objects/64/cb20381e1c63df9eb7e5c6e8b8183280cdbadd": "f1cd5206822d5c9641223d625cdad9cf",
".git/objects/65/b8c5813ff09107af108b368ddb47c272718849": "172c4af7b091d3f13d41b8fcef174f72",
".git/objects/66/7f3859c86d5781e40fd4c6cdded766903e9faf": "10890365c40a6c55d545060de0bb4bcc",
".git/objects/66/c57d405ca10be28795641d68109b1b740e71af": "da2b485434f6f9c7a4a13ee1d252f2af",
".git/objects/67/b66d7335237e38f1e88488e2838a020374805a": "3d7451150bc3de1304bc1f2383599d29",
".git/objects/68/a45d8832ef514166f125e8f68a725e42dee141": "09efaf5be00286490ad7cf6d2e8564ac",
".git/objects/6b/3265360ffd44d1e2d921771b07d8a8066f1cae": "14db9fe38016b864616069a141bf06a0",
".git/objects/6b/5bcdf43dd61e540a75130c7192b1a1a86c1c63": "4e3c659dca2ac54d20fd6ed756761416",
".git/objects/6e/b3e32d034b6903a50f91f7e2808f4501d6483e": "53bb3554a64f4e0bbd016f9a82983707",
".git/objects/70/f00b39ef5ea47262df8c25119525ec2a7f07eb": "bad2d8a02f45f499c88fd60a1d1ceb24",
".git/objects/71/9b94276fdf44377a4c257b81dcbf317454cbc4": "32e7bf20b2b05f2ca901483e5c1558cc",
".git/objects/72/fa5627b1214cf756fbd41694a4bb62aa3d34fa": "c322315f11c23f609a6b89b7a2e12ba7",
".git/objects/75/7097aa2a3230d26c7bf6d1ea468f65f1d04d51": "3d6c687bc6d84a234bc45aafcbb1a35a",
".git/objects/76/bc3d647c8204223db8563c4c7d4b244fc1fb9c": "7d5e5659466755dfefde4f7ff2829e6f",
".git/objects/77/7599c29987cc541cb5192e708d3efe788f1f8c": "9d4749311742d20b41fd265c7ea943ec",
".git/objects/78/cc31d420d231735b4a96501d7cbad9d7267e87": "66d4167a28f7fed4b460fd03b71d084a",
".git/objects/7a/bdc1b69e65d6a541a3359b9baf89b851fb7d5c": "0a2b773d7fb5ae460607d31ec0a84477",
".git/objects/7e/359c7eba6b3b0ad22c6be158014c0d96da68e9": "bdbc9eb7030ea1ce74b3dc44942deeb6",
".git/objects/7f/c941441a6eaa3c76bccb8856fe097207adf297": "32ca6c2cee85a58758bfeea883ac26c2",
".git/objects/80/4a42e3cd2ae6c76c6ce77ddb716633173fe2eb": "f0427f3c8a9b2a2c2ba55c030d9f46c6",
".git/objects/80/5f26853bbd4108c4ea370c1723a4f9b4af5b30": "1e874e1e938a703747c1e356bbf74da7",
".git/objects/82/e7e83a5537cebb8a389155cd4095951c0bf65d": "75a9b52b16b5486a456665008930fb82",
".git/objects/88/d35a7e319350c47276e3f26d3e3c192d7dab81": "f9d6903e1d5706efa21cb0fb40b32ca5",
".git/objects/8a/b7f9d1d6a2d183f86c01d784121491960f4058": "236fe76ef32d78679d558da44e459fa8",
".git/objects/8b/5e45caabff5a40dfcfe36a8258e6a03cc0ef86": "4cca62e32ae805fbea4cbbeafd8f1144",
".git/objects/8c/091f0ed19bd7ad91d973799fdc04cfb5d08b96": "f9d6b88525696cebef722a0772c79e5a",
".git/objects/8c/1d8428d20e35317525a2ddeea05cdcfb691ecf": "06fc0b16a850a7a30eb258bcb26785e1",
".git/objects/8d/9f63f132e292b0867b96ef578c33053162ad95": "c42cccd3f2707818e146ce8a3e2f2ebe",
".git/objects/96/5b30b777dcb452ba5af8fac99ac71fa5163edf": "14f54b374b43d0f751d8e652bb0f988d",
".git/objects/96/908641de2b356154d08c8fa7e1c03fe0d9366a": "9ae8543eab0ab65ca53f803cd3b98e66",
".git/objects/97/875c1cb47317b80a67156b90df3ef2c0f75009": "21051923d4d298c99dadecca9e45c489",
".git/objects/9a/3fddec5ec10939f3de52c5565458d4e44c643f": "9fbdbdf3a4c1901c101a2863424bdbd3",
".git/objects/9a/e53fd1283d458ff61381cf7ad0ea9bcc47052e": "0a447a682b51ac30add434d4a88d09ca",
".git/objects/9b/c56e04fbb868e1692b43c66d159f635fc74590": "eb9e60801db54bfc9319a3adf90e531b",
".git/objects/9c/0f422ac46c2992978bb03537b6e18ac7649d67": "ad1726dfd682732134f4e7863e01d673",
".git/objects/a1/a8a0f433f87d997cbe8a52800f6d61774c6bba": "2c94db0bea6d27e5dbd2e425c05ac234",
".git/objects/a1/eb2574133afe5ce340b0921d2b979250eb7879": "5e616011efdb4abe52d8f72f1c6c6184",
".git/objects/a2/c713f2f626f31f89f4140a58f2d3afb0d06d8c": "876cb2a75f17b7c84c7920bfb3504e8e",
".git/objects/a5/31584479df7a904864924e97207a62051912ea": "0dc1da52c5b98381c46c76e0ef98703b",
".git/objects/a5/a8cb2c5a0b2440e45b1503946f95d3fca414c1": "0f58f627cd560f25021128973e507663",
".git/objects/a8/94659b59da51e95c306ef3fbe0bad04592cb23": "4e6e8ec19916080c783123b2ad2d5bf6",
".git/objects/a8/9cbaef38a0afbec8e0f91726cec0634666fe24": "0a9434f6b74f8fd6ed58b52cc25c0e38",
".git/objects/a9/e1c25d2811402c12b14b3f28ad7f110e07984e": "9b44b15f09e0d169ce725a4782790c66",
".git/objects/ad/77b4e8ca0630f9fac6227f3e99df54767d0b06": "2a6d407cbac778790407c03c569836dd",
".git/objects/af/ea099decb14dc9392e8ef27727be7c6fcd85b3": "e01b61b49d418bcf77823600e20054f4",
".git/objects/b0/4b2fec449032cea3130c721121406c4bdee09a": "ad419ea5f39b057b590115cf5507af63",
".git/objects/b5/faccdaa361e271e4d3c190652c1ae0bd359e4e": "7650b6b90e623551fc0c993634a8d6c3",
".git/objects/b6/319bcd8ab41f6b6496a58eb1dbbe97d8c77b01": "54517367316d846172c22d446599aca8",
".git/objects/b6/e4ba5d22676d3fe508feec635c7bec23349418": "5f776d4a5d95f9156b77aa4f6fa5433a",
".git/objects/bd/eeb66a8140529c6419423670cdfef4a8f410df": "1da90368d0a3da2ead84f08603e0e407",
".git/objects/bf/240441d5236b3ffaabf29166e01e355cae29e0": "fa276afffdbd1d80858a515c4d4222a5",
".git/objects/c1/e3b8c17a335832ac61cdeec27cbe6b0c644afd": "93f6c0bdb49f092e180953bcfd36f54c",
".git/objects/c6/bb9552dd702f42075ae4b9694043a238790efb": "6c60c63b591890bdcb60b55e6ba7d0b3",
".git/objects/cd/5d7c1bbf375536b5c47108d2c8d099b7995ad7": "b71cbe8db38290dab0b2be2884525bcf",
".git/objects/ce/2c3335446c9c9bb0d6652479aec58abc400e1d": "ec69828e7c1d5b5a815201aa5b8d0da3",
".git/objects/cf/a66d27530e862d3141c84cc14d377c96fe597b": "120290ae8e39455cccb81a8195701092",
".git/objects/d5/1aafe32de56979aa19ba0f3534971f231efedf": "7f527607f1a25a30aaeea4256900631c",
".git/objects/d6/896e465415e0282783eb4553a521336aa36447": "33ef9018d730cbbf3dc9da142671321f",
".git/objects/d7/eee7be29655f9c59575b69a1cbf1bfb33ac7b8": "1b906a867790633444171afa6156ce26",
".git/objects/dd/c108f8b7cc6778474825e9ab1efe88bf104818": "042853fa733b2e8cccf1bdd92a144fb0",
".git/objects/e0/16ce2656cd3045446cb75dd8397475daba44c3": "5f507557864b8e07855e5ba84fc92b9d",
".git/objects/e0/4f10ced889b9b8f08e95c664b8b95fd6b39fdf": "841a0b340551d8fe83cf21d2228c457c",
".git/objects/e0/87b406938162b5de860c40d520e425ece74b21": "12ce7068cd98ada502e3415b25ec6ebf",
".git/objects/e0/ef1356ea1ca548a71eb285561f077ba7cc163a": "b79593aed4a8019be5bf0343939a199e",
".git/objects/e0/efd1ce9bebf0df420b2ecd79dda507c7e566cb": "f1487158c04310dabf1075a073c65992",
".git/objects/e4/36e87d122ef47094e94f65c8adb9ef4e5b1e10": "25e9acf11a0d1198d5490506023a0132",
".git/objects/e5/c99306b3e9f7c6ca9a3a05fc1647a95efe8a30": "66dd279db205b12624ea70984c41cd73",
".git/objects/e6/c180ed60b6b2f5b1e066c36ad9fbdd9c59fffc": "8b6cc47758f7fe6e504556f6dbfaf079",
".git/objects/e7/78f426f6890337782711a0366d55b2688c2625": "e852428096ccdca2f0e48e71980efccb",
".git/objects/ef/7eeca6e310829cb30d2a7a3fe1dbec9e3b2eb0": "27cc24d021d35e363776ee896f69a042",
".git/objects/ef/eb227bb4cb86615cf1c27cc32dac0a5baabc7e": "d67845cb3e8a06d9f55fb7f15f428bd0",
".git/objects/f0/7834cb6650235f82243ca59c8cec265e7d9a21": "99d2a110021395493a1c1b9da760ccdb",
".git/objects/f2/bc331961a88a2f1b2c09e0cd15483aa5de70da": "24e2dcdc4a3c400dcfddbb9eb24351ac",
".git/objects/f2/fa7a833b2f7be5dd03afc8204734d3ec164a66": "e5dcd507f28ae2c11288833b00af379f",
".git/objects/f3/08baccafc2a46d12eac6a783ed72dbcba0d0ef": "d9fbac8d821f22a31f42056d0149ba6e",
".git/objects/f5/d90c9d5fc7d3cee6538371213149fbbc01d39d": "81af77e252001250af2882f87c9e0365",
".git/objects/f6/1bf490e4d93322fff54615764226361f0ef800": "670fedf122ba4b00089e184b9ddbec1d",
".git/objects/f6/da1d6ef1bf42227af3f3bcbb52a1745c875baf": "195d4463ba094a5531defa40e9bb05a4",
".git/objects/fa/29b2ba551b752f65fda5654fb97112c66f7ab2": "34653efee704580f8b0102502c1a0de7",
".git/objects/fb/6fa4c557e90e71eee16b364fdd7eb784a29972": "b7eb47c387803141167f34ebde248caa",
".git/objects/fb/756e46b35548fd9fe160090c6cf71667d03105": "3a9e1cdbc301463913442e8c2002adb8",
".git/objects/fe/4db8d203ef388546216cc3ee9a4bead9975ae2": "25b882c3378834a4dce3563326ebfc46",
".git/objects/ff/fb10f14edce94e56cb495e4fbd9b1b59b036b1": "64a48b6d3cc2dd14782bccddcec2e65e",
".git/objects/pack/pack-f2f2dd74b322db89584aea926b4fceaf1654d268.idx": "97a34b37bac5f2eb2698f0cfd9890a72",
".git/objects/pack/pack-f2f2dd74b322db89584aea926b4fceaf1654d268.pack": "338adf47a30a88a3395faef7186bde7f",
".git/ORIG_HEAD": "d4507caa89295ed3a80c308664028039",
".git/packed-refs": "277826c2bc43c328cb27fe2d24752d55",
".git/refs/heads/master": "c47e532d54b385c5cb93aeb572164be6",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "c47e532d54b385c5cb93aeb572164be6",
"assets/AssetManifest.json": "7fb634359e241cf2f388373860dce515",
"assets/assets/logo.png": "2c1fe3019122ee546ba90b2fd0a4d134",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/imagens/00teste.png": "a200e607d215b2bead43935c15506101",
"assets/imagens/01teste.png": "16bacbd70d6a3f1b4607f881b5767cd8",
"assets/imagens/_00menuapplogo.png": "8d8a96e2f713f0aa9c4aa64ecf902abd",
"assets/imagens/_01LOGOLARANJA.png": "591db9ba613fde3ab64aa713038962e2",
"assets/imagens/_02mapasMENUBRBUSCAR.png": "ec658d1b606dd83bcd79a1e7710a411f",
"assets/imagens/_03google-signin-button.png": "c9e3d9ec5f77cd618e2763256f9be97b",
"assets/imagens/_04bolinhatodaazul.png": "c1c257c77d95c5a6f673477c2d235777",
"assets/imagens/_05bolinhatodaazul.png": "6d99297941f95b49fde6ab06d78b8d7f",
"assets/imagens/_06UAUU.png": "ea80fe1cc6cb5094801a1f425cdb7c31",
"assets/imagens/_07Logo_pix.webp": "edb3f9334da84f3c05b7ee2068db4137",
"assets/imagens/_08LogoMoney.png": "2953cb3646263c215344e060ea56d820",
"assets/imagens/_09LogoCard.png": "54a8ffdde5ec0ccf4e1bed022f2a120e",
"assets/NOTICES": "143490f29b5d75136fe2e2793d8a1247",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "3711a1300dfae3a161efbc6b23decda9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "e1a46252354f92065394ef530c33d882",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f0357fd55040ffce929022bce2df75ca",
"/": "f0357fd55040ffce929022bce2df75ca",
"main.dart.js": "a6a4d6e54a2d8963ec3ee16563ae39c4",
"manifest.json": "7a0a451aaf11ba5159fc46f09f94eb3a",
"version.json": "3aa71dbbb25f71342e85c31002d77c84",
"_favicon.png": "5dcef449791fa27946b3d35ad8803796",
"__favicon.png": "2b251d3b46cb9f91a7cbe68ab199ae55"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

import React, { useState, useEffect } from "react";
import "./card.css";
import axios from "axios";

const Cards = () => {
  const [Images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data =
        {
          "status": "ok",
          "totalResults": 14901,
          "articles": [
            {
              "source": {
                "id": null,
                "name": "Thisiswhyimbroke.com"
              },
              "author": "staff",
              "title": "Tesla Cyberbeer",
              "description": "{{::og.description}}",
              "url": "https://www.thisiswhyimbroke.com/tesla-cyberbeer",
              "urlToImage": "{{::og.image}}",
              "publishedAt": "2024-02-01T09:05:00Z",
              "content": "We use cookies to ensure you get the best experience on our website. Learn more\r\nGOT IT!"
            },
            {
              "source": {
                "id": null,
                "name": "Auto-moto.com"
              },
              "author": "Sylvain Gauthier",
              "title": "Pirater une Tesla peut rapporter très gros, ces hackers le montrent",
              "description": "Des hackers ont engrangé pas moins de 450 000 dollars en piratant une Tesla. Ils ont notamment piraté le système d'info-divertissement ou les stations de recharge. Cela s'est produit au cours d'un événement spécial, Pwn2Own, organisé à Tokyo.",
              "url": "https://www.auto-moto.com/en-bref/pirater-une-tesla-peut-rapporter-tres-gros--ces-hackers-le-montrent-29591",
              "urlToImage": "https://photos.auto-moto.com/32/2024/02/photo_article/29591/158652/1200-L-pirater-une-tesla-peut-rapporter-trs-gros-des-hackers-le-montrent.webp",
              "publishedAt": "2024-02-01T09:05:00Z",
              "content": "De nos jours, les voitures connectées ouvrent la voie à un nouveau type de vols : ceux utilisant la technologie. Il ne s'agit désormais plus de fracturer une vitre et de tripatouiller les fils afin d… [+2118 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Fishki.net"
              },
              "author": "https://fishki.net/profile/1922441",
              "title": "В России запатентовали «Киберчетвёрку»",
              "description": "В открытой базе Роспатента появилась патентная заявка на промышленный образец автомобиля. Названия он не имеет, но на приложенных к заявке эскизах изображён универсал, который явно напоминает ВАЗ-2104, переосмысленный в стилистике Tesla Cybertruck.",
              "url": "https://fishki.net/auto/4574716-v-rossii-zapatentovali-kiberchetvyorku.html",
              "urlToImage": "https://cdn.fishki.net/upload/post/2023/03/20/4574716/gallery/tn/cyb1.jpg",
              "publishedAt": "2024-02-01T09:02:14Z",
              "content": ", . , , .«» , «» . , , Tesla Cybertruck 2019 .\r\n, , . 2023 , . , . , - ."
            },
            {
              "source": {
                "id": null,
                "name": "Business Today"
              },
              "author": "Business Today Desk",
              "title": "US raises fees for H-1B, other categories of non-immigrant visas",
              "description": "The H-1B visa, a non-immigrant visa, allows US companies to employ foreign workers in specialty occupations that require technical expertise.",
              "url": "https://www.businesstoday.in/latest/world/story/us-raises-fees-for-h-1b-other-categories-of-non-immigrant-visas-415793-2024-02-01",
              "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202402/65bb5de85a2a6-the-new-h-1b-application-visa-fee-has-been-increased-from-460-to-780-the-h-1b-registration-will-i-01012315-16x9.jpg",
              "publishedAt": "2024-02-01T09:01:48Z",
              "content": "The US has hiked fees for various categories of non-immigrant visas such as the H-1B, L-1, and EB-5, the most popular among Indians. The fee increase will come into force from April 1, 2024. \r\nThe H-… [+2157 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Frandroid"
              },
              "author": "Marie Lizak",
              "title": "La première voiture électrique sans lunette arrière arrive enfin en Europe et on connaît son prix",
              "description": "Dévoilée en début d'année dernière, la nouvelle Polestar 4 débute enfin sa commercialisation en Europe, à partir de 63 200 euros. Plusieurs versions seront proposées pour le SUV coupé sans lunette arrière, qui chasse sur les terres de la Tesla Model Y, mais p…",
              "url": "https://www.frandroid.com/marques/polestar/1928224_la-premiere-voiture-electrique-sans-lunette-arriere-arrive-enfin-en-europe-et-on-connait-son-prix",
              "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/04/polestar-4-frandroid-666122-20230418-polestar-4.jpg",
              "publishedAt": "2024-02-01T09:01:44Z",
              "content": "Dévoilée en début d'année dernière, la nouvelle Polestar 4 débute enfin sa commercialisation en Europe, à partir de 63 200 euros. Plusieurs versions seront proposées pour le SUV coupé sans lunette ar… [+5233 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Yahoo Entertainment"
              },
              "author": null,
              "title": "Voiding Elon Musk’s $56 billion Tesla pay is a 'wake-up call' for directors at all companies",
              "description": null,
              "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_189ec697-7a51-41de-b63b-74aa7a1f9ed9",
              "urlToImage": null,
              "publishedAt": "2024-02-01T09:00:26Z",
              "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Yahoo Entertainment"
              },
              "author": null,
              "title": "Voiding Elon Musk’s $56 billion Tesla pay plan is a 'wake-up call' for directors at all companies",
              "description": null,
              "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_933fa1c3-9d41-41b7-b520-ebfdea5780c2",
              "urlToImage": null,
              "publishedAt": "2024-02-01T09:00:26Z",
              "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Autobild.de"
              },
              "author": "AUTO BILD",
              "title": "Autohersteller unter Druck wegen Xinjiang-Aluminium",
              "description": "Zwischen Profit und Ethik: Der schwierige Stand internationaler Autohersteller zu Xinjiang",
              "url": "https://www.autobild.de/artikel/human-rights-watch-kritisiert-autohersteller-25144691.html",
              "urlToImage": "https://i.auto-bild.de/ir_img/3/5/3/4/7/5/7/Symbol_16_9-c1d4fe60618152e2.jpg?impolicy=og_images",
              "publishedAt": "2024-02-01T08:54:00Z",
              "content": "(dpa/AUTO BILD/KI) Internationale Autohersteller stehen laut der Menschenrechtsorganisation Human Rights Watch (HRW) in der Kritik, nicht ausreichend gegen die Verwendung von Zwangsarbeit in der chin… [+2095 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Iz.ru"
              },
              "author": "Валентина Пескова",
              "title": "Маск задумался о перерегистрации компании Tesla в Техас",
              "description": "Американский миллиардер и бизнесмен Илон Маск 1 февраля сообщил, что акционеры компании Tesla в ближайшее время проголосуют по вопросу перенесения регистрации компании в штат Техас.«Общественное голосование однозначно говорит в пользу Техаса! Tesla немедленно…",
              "url": "https://iz.ru/1643301/2024-02-01/mask-zadumalsia-o-pereregistratcii-kompanii-tesla-v-tekhas",
              "urlToImage": "http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2024-02/20140318_rua_r19_091%20copy.jpg?itok=3SSOYrWY",
              "publishedAt": "2024-02-01T08:49:27Z",
              "content": "1 , Tesla .\r\n« ! Tesla », X (. Twitter).\r\n , Tesla , - . (87,1%) «».\r\nCNBC, $56 , Tesla 2018 . , .\r\nThe New York Times , « » , , Tesla . , , , , .\r\n , 1 , Forbes , 10 $50 $1,32 . , , , , 14%, . Tesla… [+4 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Pulse Live Kenya"
              },
              "author": "Kwan Wei Kevin Tan",
              "title": "Hundreds of business execs just ranked Elon Musk America's most overrated CEO",
              "description": "Elon Musk has been judged by his peers, and the verdict will probably not make him very happy. A survey of hundreds of business executives conducted by Fortune just ranked Musk as Americas most overrated CEO.",
              "url": "https://www.pulselive.co.ke/business/international/hundreds-of-business-execs-just-ranked-elon-musk-americas-most-overrated-ceo/95z7fg1#article",
              "urlToImage": "https://ocdn.eu/pulscms-transforms/1/y4gktkuTURBXy9kNTAzMGU0NC04OWZlLTRkYTktOWVhMC00MjNhNDVmNTQ1NjcuanBlZ5GTBc0EsM0Cdg",
              "publishedAt": "2024-02-01T08:48:51Z",
              "content": "Fortune published the survey results on Wednesday after asking hundreds of CEOs to rank their most overrated and underrated peers. Fortune did not specify exactly how many CEOs had responded to the s… [+1147 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Les Numériques"
              },
              "author": "Aurélien Piot",
              "title": "Actualité : Automobile : Toyota reste n°1 mondial des ventes, mais avec moins de 1 % de voitures électriques",
              "description": "Le groupe Toyota reste le premier constructeur automobile mondial pour la quatrième année consécutive, avec plus de 11,2 millions de véhicules écoulés en 2023. La part des voitures électriques dans ce total est cependant inférieure à 1 %.",
              "url": "https://www.lesnumeriques.com/voiture/automobile-toyota-reste-n01-mondial-des-ventes-mais-avec-moins-de-1-de-voitures-electriques-n218201.html",
              "urlToImage": "https://cdn.lesnumeriques.com/optim/news/21/218201/f1188a69-toyota-reste-le-numero-des-ventes-mondiales-mais-avec-moins-de-1-de-voitures-electriques__1200_630__0-204-2160-1338_wtmk.jpg",
              "publishedAt": "2024-02-01T08:46:00Z",
              "content": "Si Toyota a cédé en 2023 le titre de la voiture la plus vendue au monde à Tesla, avec son Model Y, le groupe japonais reste le premier constructeur automobile mondial. Ainsi, le groupe Toyota a écoul… [+2878 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Naftemporiki.gr"
              },
              "author": "Ελίζα Καραγιώργη",
              "title": "Από τους Χούθι στον…Ερντογάν. Πόσο κινδυνεύουν οι θάλασσες της νότιας Ευρώπης",
              "description": "Τα προϊόντα από την Ασία δεν φτάνουν στην Ευρώπη ή φτάνουν πολύ αργά. Οι γραμμές παραγωγής στα εργοστάσια αυτοκινήτων έχουν σταματήσει και οι ανοιξιάτικες συλλογές που προορίζονται για ευρωπαϊκά πολυκαταστήματα…\nΑπό τους Χούθι στον…Ερντογάν. Πόσο κινδυνεύουν …",
              "url": "https://www.naftemporiki.gr/maritime/1580527/apo-toys-choythi-stonerntogan-poso-kindyneyoyn-oi-thalasses-tis-notias-eyropis/",
              "urlToImage": "https://www.naftemporiki.gr/wp-content/uploads/2024/01/erythra-thalassa-ploia.jpg",
              "publishedAt": "2024-02-01T08:43:37Z",
              "content": ". . , , .\r\n« , », «» . « , ».\r\n logistics Flexport, 2.400 , 6.800 .\r\n. , «Marks &amp; Spencer» , . 40% 50% , .\r\n ,   . Flexport, . « . , « ».\r\n . Volvo , . Tesla , , Suzuki .\r\n« » . , BCA Research, :… [+189 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hdmotori.it"
              },
              "author": "HDblog.it",
              "title": "Quello che non sapevo sul parabrezza (rotto della mia Tesla) e sulla tecnologia",
              "description": "Le curiosità sui parabrezza dall'intervista al Technical Manager di Carglass",
              "url": "https://www.hdmotori.it/tesla/speciali/n577907/parabrezza-tesla-riparazione-obd-carglass/",
              "urlToImage": "https://hd2.tudocdn.net/1139456?w=1920",
              "publishedAt": "2024-02-01T08:40:00Z",
              "content": "L'inverno è stato impietoso con il parabrezza della mia Model 3 che, come forse saprete, non disdegna di viaggiare a velocità sostenute e prevalentemente in autostrada, lo scenario dove detriti e pic… [+7560 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "finance.yahoo.com",
              "title": "2 Stocks That Deserve to Join the Magnificent 7",
              "description": "The Magnificent Seven group, which was crafted by Mad Money host Jim Cramer, is renowned for its impressive growth potential and its ability to roll with the economic punches. With shares of Tesla (NASDAQ:TSLA) now on the outside looking in (Cramer removed it…",
              "url": "https://biztoc.com/x/9e4301b23109d366",
              "urlToImage": "https://c.biztoc.com/p/9e4301b23109d366/s.webp",
              "publishedAt": "2024-02-01T08:38:06Z",
              "content": "The Magnificent Seven group, which was crafted by Mad Money host Jim Cramer, is renowned for its impressive growth potential and its ability to roll with the economic punches. With shares of Tesla (N… [+297 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "ETF Daily News"
              },
              "author": "MarketBeat News",
              "title": "Analysts Set Tesla, Inc. (NASDAQ:TSLA) Target Price at $224.00",
              "description": "Tesla, Inc. (NASDAQ:TSLA – Get Free Report) has been given a consensus rating of “Hold” by the thirty-four brokerages that are covering the firm, MarketBeat Ratings reports. Eight equities research analysts have rated the stock with a sell recommendation, six…",
              "url": "https://www.etfdailynews.com/2024/02/01/analysts-set-tesla-inc-nasdaqtsla-target-price-at-224-00/",
              "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
              "publishedAt": "2024-02-01T08:36:42Z",
              "content": "Tesla, Inc. (NASDAQ:TSLA – Get Free Report) has been given a consensus rating of “Hold” by the thirty-four brokerages that are covering the firm, MarketBeat Ratings reports. Eight equities research a… [+6041 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "newsweek.com",
              "title": "Elon Musk to move Tesla to Texas",
              "description": "Electric car company Tesla will begin the process of transferring where it is legally registered to Texas following an online poll, its CEO Elon Musk has announced. The company had been incorporated in Delaware, but on Wednesday, Musk asked users on X, former…",
              "url": "https://biztoc.com/x/505abb8d39cc5aa1",
              "urlToImage": "https://c.biztoc.com/p/505abb8d39cc5aa1/s.webp",
              "publishedAt": "2024-02-01T08:36:05Z",
              "content": "Electric car company Tesla will begin the process of transferring where it is legally registered to Texas following an online poll, its CEO Elon Musk has announced.The company had been incorporated i… [+295 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Slashdot.org"
              },
              "author": "feedfeeder",
              "title": "Tesla sued by 25 California counties for allegedly mishandling hazardous waste",
              "description": "Tesla is facing a lawsuit from 25 California counties accusing it of mishandling hazardous waste at facilities around the state, according to a complaint filed in San Joaquin County Superior Court. The lawsuit, which seeks civil penalties and an injunction fo…",
              "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172929124",
              "urlToImage": null,
              "publishedAt": "2024-02-01T08:33:28Z",
              "content": "Tesla is facing a lawsuit from 25 California counties accusing it of mishandling hazardous waste at facilities around the state, according to a complaint filed in San Joaquin County Superior Court. T… [+1705 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Marketscreener.com"
              },
              "author": null,
              "title": "Tesla to Hold Shareholder Vote to Incorporate in Texas, Elon Musk Says",
              "description": "(marketscreener.com) \n By Sherry Qin \n\n\n Tesla will hold a shareholder vote to decide whether to transfer its state of incorporation to Texas, Chief Executive Elon Musk said. \n\n Musk's decision comes after a Delaware court ordered him to give up a Tesla compe…",
              "url": "https://www.marketscreener.com/business-leaders/ELON-MUSK-1364/news/Tesla-to-Hold-Shareholder-Vote-to-Incorporate-in-Texas-Elon-Musk-Says-45861598/",
              "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
              "publishedAt": "2024-02-01T08:30:05Z",
              "content": "Mr. Elon R. Musk is a Chief Executive Officer at The Boring Co., a Technoking of Tesla at Tesla, Inc., a Chief Executive Officer &amp; Director at Space Exploration Technologies Corp., a Chief Execut… [+991 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "3dnews.ru"
              },
              "author": null,
              "title": "Маск проведёт голосование акционеров по переносу Tesla в Техас после проигранного суда на $56 млрд",
              "description": "Поскольку накануне суд в штате Делавэр, где изначально была зарегистрирована компания Tesla, признал избыточным назначенный генеральному директору Илону Маску (Elon Musk) компенсационный пакет на сумму около $56 млрд, миллиардер бросился защищать свои интерес…",
              "url": "https://3dnews.ru/1099646/ilon-mask-poobeshchal-vinesti-vopros-o-pereregistratsii-tesla-v-tehase-na-golosovanie-aktsionerov",
              "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/02/01/1099646/tesla_01.jpg",
              "publishedAt": "2024-02-01T08:29:00Z",
              "content": ", Tesla, (Elon Musk) $56 , . , Tesla , - , .\r\n: Tesla, X\r\n, Tesla, , , . 2020 - , . - Tesla , -.\r\n X Tesla . , . , Tesla ."
            },
            {
              "source": {
                "id": null,
                "name": "Www.is.fi"
              },
              "author": "Tommi Lempinen",
              "title": "Mitä maksaa ja paljonko dieseliä palaa, kun sähköauto ladataankin aggregaatilla?",
              "description": "Dieselkokeen testiautoina toimivat Tesla Model S P85D ja Volvo V40 D2.",
              "url": "https://www.is.fi/autot/art-2000010196409.html",
              "urlToImage": "https://is.mediadelivery.fi/img/some/default/a0da9417cb3f39a1d3037e0f578b964d.jpg",
              "publishedAt": "2024-02-01T08:28:00Z",
              "content": "Dieselkokeen testiautoina toimivat Tesla Model S P85D ja Volvo V40 D4.Jos Tesla Model S:n lataa dieselaggregaatilla, vastaa auton sadalla kilometrillä käyttämä sähköenergia 4,46 litraa dieseliä.\r\nTai… [+1535 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Mail.ru"
              },
              "author": "Авто Mail.ru",
              "title": "Звезду сериала «Зачарованные» раскритиковали из-за Porsche",
              "description": "Алиссу Милано недавно сфотографировали с ее новеньким электрическим Porsche Taycan 4S, после чего она попала под шквал критики в социальных сетях",
              "url": "https://auto.mail.ru/article/91255-zvezdu-seriala-zacharovannyie-raskritikovali-iz-za/",
              "urlToImage": "https://resizer.mail.ru/p/e2f6fb57-aab9-556c-acd7-28abadb1ca3a/AQABjgEL4r1CD1c129CiEhHKQXxxluvCexPma5JvBptmGlBU4HoaO1VCXGeBCRizWkakp09GRfvmyQrA94C2AO61akc.jpg",
              "publishedAt": "2024-02-01T08:27:35Z",
              "content": "Tesla   Volkswagen ID4.     Porsche Taycan 4S 2023 ."
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "wsj.com",
              "title": "Tesla to Hold Shareholder Vote to Incorporate in Texas",
              "description": "Tesla will hold a shareholder vote to decide whether to transfer its state of incorporation to Texas, Chief Executive Elon Musk said. #tesla #elonmusk",
              "url": "https://biztoc.com/x/957feba76b24fd23",
              "urlToImage": "https://c.biztoc.com/266/og.png",
              "publishedAt": "2024-02-01T08:26:06Z",
              "content": "Tesla will hold a shareholder vote to decide whether to transfer its state of incorporation to Texas, Chief Executive Elon Musk said.\r\n#tesla#elonmusk\r\nThis story appeared on wsj.com, 2024-02-01."
            },
            {
              "source": {
                "id": "next-big-future",
                "name": "Next Big Future"
              },
              "author": "Brian Wang",
              "title": "Elon Will Move Tesla Incorporation to Texas Then Get a New CEO Compensation Plan",
              "description": "Tesla will moves its state of incorporation from Delaware to Texas. This will be approved by shareholders. Corporate license fees accounted for 12.1 percent of Delaware’s state and local general revenue in 2021. The license fees are $1,814 per capita. 60% of …",
              "url": "https://www.nextbigfuture.com/2024/02/elon-will-move-tesla-incorporation-to-texas-then-get-a-new-ceo-compensation-plan.html",
              "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2024/02/Screen-Shot-2024-02-01-at-12.08.11-AM.jpg",
              "publishedAt": "2024-02-01T08:23:59Z",
              "content": "Tesla will moves its state of incorporation from Delaware to Texas. This will be approved by shareholders.\r\nCorporate license fees accounted for 12.1 percent of Delawares state and local general reve… [+3723 chars]"
            },
            {
              "source": {
                "id": "newsweek",
                "name": "Newsweek"
              },
              "author": "Aleks Phillips",
              "title": "Elon Musk To Move Tesla to Texas",
              "description": "The billionaire CEO announced the electric car company would be incorporated in the Lone Start State following an online poll.",
              "url": "https://www.newsweek.com/elon-musk-move-tesla-texas-incorporation-1865897",
              "urlToImage": "https://d.newsweek.com/en/full/2343309/elon-musk-texas.jpg",
              "publishedAt": "2024-02-01T08:23:41Z",
              "content": "Electric car company Tesla will begin the process of transferring where it is legally registered to Texas following an online poll, its CEO Elon Musk has announced.\r\nThe company had been incorporated… [+2065 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "The Boston Globe"
              },
              "author": "SIMINA MISTREANU",
              "title": "Major automakers may be using Chinese aluminum produced with Uyghur forced labor, rights group says",
              "description": "A new report says automakers including Tesla, General Motors, Volkswagen, and Toyota are failing to ensure they are not using forced labor as part of their China supply chains.",
              "url": "https://www.bostonglobe.com/2024/02/01/business/major-automakers-may-be-using-chinese-aluminum-produced-with-uyghur-forced-labor-rights-group-says/",
              "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/D4kIOR1g2D5XFf3Z5P0h3bmcVRw=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/X435RQXQCMKM7DW7VDGOX5BKA4.jpg",
              "publishedAt": "2024-02-01T08:20:55Z",
              "content": "A United Nations report in 2022 found China may have committed crimes against humanity in Xinjiang, where more than 1 million Uyghurs are estimated to have been arbitrarily detained as part of measur… [+4034 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "[Removed]"
              },
              "author": null,
              "title": "[Removed]",
              "description": "[Removed]",
              "url": "https://removed.com",
              "urlToImage": null,
              "publishedAt": "1970-01-01T00:00:00Z",
              "content": "[Removed]"
            },
            {
              "source": {
                "id": null,
                "name": "Yahoo Entertainment"
              },
              "author": "Steve Dent",
              "title": "Tesla sued by 25 California counties for allegedly mishandling hazardous waste",
              "description": "Tesla is facing a lawsuit from 25 California counties accusing it of mishandling hazardous waste at facilities around the state, according to a complaint filed in San Joaquin County Superior Court. The lawsuit, which seeks civil penalties and an injunction fo…",
              "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_60b31551-702a-4805-842b-bddc6b17e430",
              "urlToImage": null,
              "publishedAt": "2024-02-01T08:20:34Z",
              "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Yahoo Entertainment"
              },
              "author": null,
              "title": "Tesla sued by 25 California counties for allegedly mishandling hazardous waste",
              "description": null,
              "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_166775d5-c721-4532-9e18-b5a8c4f71e1f",
              "urlToImage": null,
              "publishedAt": "2024-02-01T08:20:34Z",
              "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "[Removed]"
              },
              "author": null,
              "title": "[Removed]",
              "description": "[Removed]",
              "url": "https://removed.com",
              "urlToImage": null,
              "publishedAt": "1970-01-01T00:00:00Z",
              "content": "[Removed]"
            },
            {
              "source": {
                "id": null,
                "name": "Hibridosyelectricos.com"
              },
              "author": "Javier Gómara",
              "title": "Un paso atrás para coger impulso: este fabricante se refugia en los híbridos como paso previo a los eléctricos",
              "description": "Como siempre decía el Coronel John \"Hannibal\" Smith del Equipo A, \"Me encanta que los planes salgan bien\". Sin embargo, la realidad nos dice que no todos los planes están saliendo como debían. Muchas marcas se han lanzado de cabeza a la piscina eléctrica sin …",
              "url": "https://www.hibridosyelectricos.com/coches/paso-atras-coger-impulso-este-fabricante-se-refugia-en-hibridos-como-paso-previo-electricos_72775_102.html",
              "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/61/75/01/cadillac-detalle_17_2000x1126.jpeg",
              "publishedAt": "2024-02-01T08:15:28Z",
              "content": "Como siempre decía el Coronel John Hannibal Smith del Equipo A, Me encanta que los planes salgan bien. Sin embargo, la realidad nos dice que no todos los planes están saliendo como debían. Muchas mar… [+3245 chars]"
            },
            {
              "source": {
                "id": "focus",
                "name": "Focus"
              },
              "author": "DPA",
              "title": "Zwangsarbeit - Menschenrechtler kritisieren Autobauer in China",
              "description": "Human Rights Watch kritisiert internationale Autohersteller für unzureichende Maßnahmen gegen Zwangsarbeit in Xinjiang und fordert dagegen vorzugehen.",
              "url": "https://www.focus.de/finanzen/news/zwangsarbeit-menschenrechtler-kritisieren-autobauer-in-china_id_259628807.html",
              "urlToImage": "https://p6.focus.de/img/finanzen/news/id_259628806/haben-hersteller-es-versaeumt-das-risiko-der-zwangsarbeit-in-ihren-aluminium-lieferketten-zu-minimieren-symbolbild-.jpg?im=Crop%3D%280%2C170%2C2048%2C1024%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=9abcfffb522accaface336ff1213b2da6ea078ce94dc8a049b904894ab69a342",
              "publishedAt": "2024-02-01T08:15:04Z",
              "content": "Internationale Autohersteller tun nach Ansicht der Menschenrechtsorganisation Human Rights Watch (HRW) zu wenig gegen Zwangsarbeit in der chinesischen Region Xinjiang.\r\n«Autofirmen kennen das Ausmaß … [+2097 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Globalsecurity.org"
              },
              "author": "John Pike",
              "title": "Press Briefing by Press Secretary Karine Jean-Pierre and NSC Coordinator for Strategic Communications John Kirby",
              "description": "No description",
              "url": "https://www.globalsecurity.org/military/library/news/2024/01/mil-240131-whitehouseb01.htm",
              "urlToImage": null,
              "publishedAt": "2024-02-01T08:12:24Z",
              "content": "January 31, 2024\r\n1:28 P.M. EST\r\nMS. JEAN-PIERRE: Good afternoon. Hello. \r\nHi. I have a few things at the top before we get started.\r\nAs the Presi- â as the President and his team continue working … [+65172 chars]"
            },
            {
              "source": {
                "id": "die-zeit",
                "name": "Die Zeit"
              },
              "author": "ZEIT ONLINE: News -",
              "title": "Zwangsarbeit: Menschenrechtler kritisieren Autobauer in China",
              "description": "Hier finden Sie Informationen zu dem Thema „Zwangsarbeit“. Lesen Sie jetzt „Menschenrechtler kritisieren Autobauer in China“.",
              "url": "https://www.zeit.de/news/2024-02/01/menschenrechtler-kritisieren-autobauer-in-china",
              "urlToImage": "https://img.zeit.de/news/2024-02/01/menschenrechtler-kritisieren-autobauer-in-china-image-group/wide__1300x731",
              "publishedAt": "2024-02-01T08:11:41Z",
              "content": "Internationale Autohersteller tun nach Ansicht der Menschenrechtsorganisation Human Rights Watch (HRW) zu wenig gegen Zwangsarbeit in der chinesischen Region Xinjiang.\r\nMehr Schlagzeilen\r\n«Autofirmen… [+3080 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "STERN.de"
              },
              "author": "STERN.de",
              "title": "Zwangsarbeit: Menschenrechtler kritisieren Autobauer in China",
              "description": "Human Rights Watch kritisiert internationale Autohersteller für unzureichende Maßnahmen gegen Zwangsarbeit in Xinjiang und fordert dagegen vorzugehen.",
              "url": "https://www.stern.de/wirtschaft/news/zwangsarbeit--menschenrechtler-kritisieren-autobauer-in-china-34418806.html",
              "urlToImage": "https://image.stern.de/34418808/t/PP/v1/w1440/r1.7778/-/01--urnnewsmldpacom2009010124020199830645v2w800h600l1084t720r3252b2161jpeg---fe7328fd916dd70b.jpg",
              "publishedAt": "2024-02-01T08:11:41Z",
              "content": "Human Rights Watch kritisiert internationale Autohersteller für unzureichende Maßnahmen gegen Zwangsarbeit in Xinjiang und fordert dagegen vorzugehen.\r\nInternationale Autohersteller tun nach Ansicht … [+2305 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Overclockers.ru"
              },
              "author": "Алексей Сычёв",
              "title": "Tesla рассмотрит вопрос о переносе регистрации компании в Техас после вердикта суда о взыскании с Маска $56 млрд",
              "description": "Вместе с гололедицей февраль приносит переносицу.",
              "url": "https://overclockers.ru/hardnews/show/131863/tesla-rassmotrit-vopros-o-perenose-registracii-kompanii-v-tehas-posle-verdikta-suda-o-vzyskanii-s-maska-56-mlrd",
              "urlToImage": "https://overclockers.ru/st/images/preview/MVOBRtID4MM6XRrS.jpg",
              "publishedAt": "2024-02-01T08:07:00Z",
              "content": ", (Elon Musk) $56 Tesla, . Bloomberg X , Tesla .\r\n , , . Tesla , . , , $56 . , , , ."
            },
            {
              "source": {
                "id": null,
                "name": "Hvg.hu"
              },
              "author": "hvg@hvg.hu",
              "title": "Úgy mutatta meg Elon Musk a Tesla emberszabású robotját, ahogy eddig sosem láthattuk – videó",
              "description": "A Tesla humanoid robotja, az Optimus eddig csak védőburkolattal jelent meg a nagyközönség előtt, Elon Musk azonban egy olyan videót tett közzé, melyen már anélkül sétálgat.",
              "url": "https://hvg.hu/tudomany/20240201_tesla_optimus_humanoid_robot_boritas_nelkul_video",
              "urlToImage": "https://api.hvg.hu/Img/7fcefbf8-ac48-4ee6-aef5-32203afa118c/65be0d7e-5864-468a-b39a-20b81cfc6c4e.jpg",
              "publishedAt": "2024-02-01T08:03:00Z",
              "content": "Rövid idn belül már a második videóval jelentkezik Elon Musk a Tesla humanoid robotjáról, Optimusról. Az X-en közzétett felvételen a szerkezet ezúttal semmilyen összetett feladatot nem végez el, csup… [+1439 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "taz.de"
              },
              "author": "taz. die tageszeitung",
              "title": "Zwangsarbeit in China: Vorwürfe gegen Autohersteller",
              "description": "Chinesische Aluminiumhersteller sollen Uiguren in Zwangsarbeit beschäftigen. Die Autokonzerne hätten das zu wenig im Blick, sagen Menschenrechtler.",
              "url": "https://taz.de/Zwangsarbeit-in-China/!5989678/",
              "urlToImage": "https://taz.de/picture/6800507/948/aluminium-1.jpeg",
              "publishedAt": "2024-02-01T08:02:00Z",
              "content": "Chinesische Aluminiumhersteller sollen Uiguren in Zwangsarbeit beschäftigen. Die Autokonzerne hätten das zu wenig im Blick, sagen Menschenrechtler.\r\n9 Prozent des weltweit angebotenen Aluminiums stam… [+2414 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "El Financiero"
              },
              "author": "Madlin Mekelburg/Bloomberg",
              "title": "¿Tesla se va a Texas? Elon Musk sugiere hacer la ‘mudanza’ tras rechazo a su bono salarial",
              "description": "Elon Musk amenaza con trasladar la incorporación de Tesla a Texas desde Delaware, después de que un juez anulara su paquete de compensación de 55 mil millones de dólares.",
              "url": "https://www.elfinanciero.com.mx/bloomberg/2024/02/01/tesla-se-va-a-texas-elon-musk-sugiere-hacer-la-mudanza-tras-rechazo-a-su-bono-salarial/",
              "urlToImage": "https://www.elfinanciero.com.mx/resizer/FbZ31DhTftNWJXCV8d8bHMPv_Dk=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/O65RAS3WMZEJBMXUPW4O2CY2SU.jpg",
              "publishedAt": "2024-02-01T08:01:00Z",
              "content": "Elon Muskquiere profundizar sus vínculos con Texas. Ya amplió un sitio de lanzamiento de SpaceX en el sur de este estado, trasladó la oficina central de Tesla Inc. a Austin desde Palo Alto, Californi… [+6289 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Blogdumoderateur.com"
              },
              "author": "Matthieu Eugène",
              "title": "Le futur de la tech : 10 tendances à surveiller en 2024",
              "description": "La dernière édition du rapport \"The Future 100\" dévoile les 100 tendances qui feront 2024, dont celles consacrées au secteur de la tech.",
              "url": "https://www.blogdumoderateur.com/tendances-tech-2024/",
              "urlToImage": "https://f.hellowork.com/blogdumoderateur/2024/01/The-Future-100-tendances-tech-1200x628.jpg",
              "publishedAt": "2024-02-01T08:00:21Z",
              "content": "La 10e édition du rapport « The Future 100 » a été dévoilée par VML Intelligence, nouvelle structure issue de l’association de l’agence de communication Wunderman Thompson et de VMLY&amp;R. Il offre … [+10724 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "El Financiero"
              },
              "author": "Bloomberg / Gabrielle Coppola y Ed Ludlow",
              "title": "¿Nueva planta de Tesla? Elon Musk abrirá una nueva ‘mini factory’ de baterías para autos eléctricos",
              "description": "Tesla está por construir una nueva fábrica de baterías para autos eléctricos en Nevada, Estados Unidos.",
              "url": "https://www.elfinanciero.com.mx/empresas/2024/02/01/tesla-nueva-mini-factory-baterias-en-nevada-para-autos-electricos-elon-musk/",
              "urlToImage": "https://www.elfinanciero.com.mx/resizer/VXIGbGj2MH5WS5JuW5CMRbuOh5A=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/XMXJTPVSIRHWJJEWC3KZO7WPZI.jpg",
              "publishedAt": "2024-02-01T07:57:30Z",
              "content": "Tesla Inc. ampliará la producción de baterías en Nevada, abriendo una pequeña instalación utilizando equipos inactivos de Contemporary Amperex Technology Co. de China, según personas familiarizadas c… [+3245 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "benzinga.com",
              "title": "Tesla Faces Lawsuit From 25 California Counties Over Alleged Improper Handling Of Hazardous Waste",
              "description": "Tesla Inc TSLA is now facing a lawsuit from 25 California counties over its alleged improper handling of hazardous waste materials at its facilities across the state. What Happened: The lawsuit, titled The People of California v. Tesla, was filed in a Califor…",
              "url": "https://biztoc.com/x/3682b2a18ea11249",
              "urlToImage": "https://c.biztoc.com/p/3682b2a18ea11249/s.webp",
              "publishedAt": "2024-02-01T07:56:06Z",
              "content": "Tesla Inc TSLA is now facing a lawsuit from 25 California counties over its alleged improper handling of hazardous waste materials at its facilities across the state.What Happened: The lawsuit, title… [+314 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Novinky.cz"
              },
              "author": "Ondřej Mára",
              "title": "Nová auta prodávaná v Evropě musí mít od července povinně černé skříňky",
              "description": "Nové automobily prodávané v zemích EU budou povinně vybaveny zařízením označovaným jako EDR, které bude mít podobnou funkci jako černé skříňky používané v letectví.",
              "url": "https://www.novinky.cz/clanek/auto-nova-auta-prodavana-v-evrope-musi-mit-od-cervence-povinne-cerne-skrinky-40459057",
              "urlToImage": "https://d15-a.sdn.cz/d_15/c_img_QL_1/HjCHc/mercedes-benz-mercedes-benz-eqa-eqs-suv-crash-narazovy-test.jpeg?fl=cro,0,180,1920,1080%7Cres,1200,,1%7Cwebp,75",
              "publishedAt": "2024-02-01T07:53:00Z",
              "content": "Zatímco letadla jsou ernými skíkami povinn vybavována od edesátých let, vechna nová auta prodávaná na území EU je budou muset mít od ervence 2024. \r\nV tu dobu toti vstoupí v platnost naízení, podle k… [+1617 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Martin Franz, mit Material der dpa",
              "title": "Human Rights Watch kritisiert Autoindustrie​: Zwangsarbeit in Xinjiang",
              "description": "Knapp 10 Prozent des weltweit hergestellten Aluminiums kommt aus Xinjiang. Dort gäbe es Zwangsarbeit, kritisiert Human Rights Watch.​",
              "url": "https://www.heise.de/news/Human-Rights-Watch-kritisiert-Autoindustrie-Zwangsarbeit-in-Xinjiang-9615068.html",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/5/2/9/0/09-91340625f9614107.jpg",
              "publishedAt": "2024-02-01T07:53:00Z",
              "content": "Erst im Dezember 2023 hatte ein Bericht Volkswagen zum Teil entlastet, doch die Kritik an den Arbeitsbedingungen in der chinesischen Region Xinjiang reißt nicht ab. Die Menschenrechtsorganisation Hum… [+3334 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Rg.ru"
              },
              "author": null,
              "title": "Акционеры Tesla срочно проголосуют о смене места регистрации и переезде компании",
              "description": "Производитель автомобилей Tesla в срочном порядке проведет голосование акционеров для изменения места регистрации компании с Делавэра на Техас. Об этом сообщил глава компании Илон Маск в соцсетях.",
              "url": "https://rg.ru/2024/02/01/akcionery-tesla-srochno-progolosuiut-o-smene-mesta-registracii-i-pereezde-kompanii.html",
              "urlToImage": "https://cdnstatic.rg.ru/uploads/images/2024/02/01/1_b93a4b4f_6a8.jpg",
              "publishedAt": "2024-02-01T07:43:04Z",
              "content": "31 Tesla 2018 55,8 . .\r\n\" , - X ( Twitter, ) . - , , \".\r\n , 87,1 ."
            },
            {
              "source": {
                "id": null,
                "name": "Autocar"
              },
              "author": "Nick Gibbs",
              "title": "The stock market has fallen out of love with electric cars",
              "description": "Renault cited \"current equity market conditions\" for cancelling its plan to list Ampere\n\n\nRenault's decision to cancel Ampere division's IPO is the latest in a long line of recent investor snubs\n\nRenault’s decision to cancel the stock market listing of its Am…",
              "url": "https://www.autocar.co.uk/car-news/business-corporate/stock-market-has-fallen-out-love-electric-cars",
              "urlToImage": "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/renault-5-concept-front-quarter.jpg",
              "publishedAt": "2024-02-01T07:41:42Z",
              "content": "Renaults decision to cancel the stock market listing of its Ampere division is the latest in a series of postponements, cancellations or for those that did float mistimed listings for EV-angled busin… [+523 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Slashdot.org"
              },
              "author": "feedfeeder",
              "title": "Winning lawyers in Elon Musk's $56bn pay dispute in line for fee bonanza - Financial Times",
              "description": "Winning lawyers in Elon Musk's $56bn pay dispute in line for fee bonanzaFinancial Times Who can rein in Elon Musk? Someone you’ve probably never heard ofCNN The Elon Musk pay dilemmaFinancial Times Elon Musk's $56 billion Tesla compensation voided by judge, s…",
              "url": "https://slashdot.org/firehose.pl?op=view&amp;id=172928468",
              "urlToImage": null,
              "publishedAt": "2024-02-01T07:32:42Z",
              "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "Reuters",
              "title": "Elon Musk seeks Tesla shareholder vote on moving incorporation to Texas",
              "description": "Tesla will hold a shareholder vote to transfer its state of incorporation to Texas from Delaware, days after a judge invalidated Elon Musk's $56 billion pay package. Musk, who shifted Tesla's headquarters to Austin, Texas in 2021, plans to move the company's …",
              "url": "https://economictimes.indiatimes.com/tech/technology/elon-musk-seeks-tesla-shareholder-vote-on-moving-incorporation-to-texas/articleshow/107318951.cms",
              "urlToImage": "https://img.etimg.com/thumb/msid-107318972,width-1200,height-630,imgsize-1348138,overlay-ettech/photo.jpg",
              "publishedAt": "2024-02-01T07:31:02Z",
              "content": "Tesla will hold a shareholder vote to transfer its state of incorporation to Texas from Delaware, CEO Elon Musk said on Thursday, days after a judge invalidated his $56 billion pay package at the ele… [+2925 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Gazeta.ru"
              },
              "author": "Газета.Ru",
              "title": "Акционеры Tesla проголосуют по вопросу перерегистрации компании",
              "description": "Американский автопроизводитель Tesla в срочном порядке проведет голосование акционеров по вопросу изменения места регистрации компании с Делавэра на Техас. Об этом сообщил генеральный директор компании Илон Маск в социальной сети X (бывшая Twitter).",
              "url": "https://www.gazeta.ru/business/news/2024/02/01/22238203.shtml",
              "urlToImage": "https://img.gazeta.ru/files3/621/17887621/AP23321513380639-pic_32ratio_900x600-900x600-52900.jpg",
              "publishedAt": "2024-02-01T07:28:23Z",
              "content": ": .Ru (Gazeta.Ru)\r\n: «.», 1067761730376, 7743625728\r\n : 125239, , , , 67\r\n:\r\n117105,\r\n. ,\r\n , .9, .1"
            },
            {
              "source": {
                "id": null,
                "name": "Portfolio.hu"
              },
              "author": "Portfolio.hu",
              "title": "Bedühödött Elon Musk, elköltöztetné a Teslát",
              "description": "Elon Musk Delaware államból Texasba költöztetné a Teslát, erről már csak a részvényeseket kell megkérdezni, írja a Reuters. Hasonló témákról szó lesz a Portfolio Investment Day 2024 rendezvényünkön, amire itt lehet regisztrálni.",
              "url": "https://www.portfolio.hu/uzlet/20240201/beduhodott-elon-musk-elkoltoztetne-a-teslat-666543",
              "urlToImage": "https://pcdn.hu/articles/images-xl/e/l/o/elon-musk-654301.jpg",
              "publishedAt": "2024-02-01T07:28:00Z",
              "content": "A Teslát Delaware államban jegyezték be, ott van fizikai központja is a cégnek, Elon Musk viszont azt szeretné, hogy egy másik államba, Texasba költözzön át a cég.\r\nErrl már meg is kérdezte a követit… [+1146 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Svethardware.cz"
              },
              "author": "Milan Šurkala",
              "title": "Soud zatrhl Muskovi odměnu 55 mld. USD, je prý nesmyslně vysoká",
              "description": "Odměny Elona Muska za vedení Tesly jsou navázány na předem stanovené cíle. Splnění všech cílů mělo vyústit v odměnu v hodnotě 55 miliard USD (1260 mld. Kč). Tu mu ale soud v Delawaru zatrhl.",
              "url": "https://www.svethardware.cz/soud-zatrhl-muskovi-odmenu-55-mld-usd-je-pry-nesmyslne-vysoka/60372",
              "urlToImage": "https://www.svethardware.cz/soud-zatrhl-muskovi-odmenu-55-mld-usd-je-pry-nesmyslne-vysoka/60372/img/elon-musk-tesla-800.webp",
              "publishedAt": "2024-02-01T07:27:17Z",
              "content": "Should Tesla change its state of incorporation to Texas, home of its physical headquarters?\r\n— Elon Musk (@elonmusk) January 31, 2024"
            },
            {
              "source": {
                "id": null,
                "name": "Yahoo Entertainment"
              },
              "author": null,
              "title": "Elon Musk vows to shift Tesla incorporation to Texas after judge blocks $56bn payout",
              "description": null,
              "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_08e85286-c843-4155-9a98-4f8a6598bbd3",
              "urlToImage": null,
              "publishedAt": "2024-02-01T07:27:09Z",
              "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Yahoo Entertainment"
              },
              "author": null,
              "title": "Tesla: Elon Musk moves to shift firm's legal home to Texas",
              "description": null,
              "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_a3c6af7e-d669-4c3f-a7d3-9aa89e342985",
              "urlToImage": null,
              "publishedAt": "2024-02-01T07:23:24Z",
              "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "BBC News"
              },
              "author": null,
              "title": "Tesla: Elon Musk moves to shift firm's legal home to Texas",
              "description": "The multi-billionaire says the electric car maker will move immediately to hold a shareholder vote on the matter.",
              "url": "https://www.bbc.com/news/business-68163184",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E859/production/_132518495_gettyimages-1963454334.jpg",
              "publishedAt": "2024-02-01T07:23:24Z",
              "content": "By Mariko OiBusiness reporter\r\nElon Musk says Tesla will move immediately to hold a shareholder vote on shifting the firm's legal home from the US state of Delaware to Texas.\r\nIt comes after a judge … [+1641 chars]"
            },
            {
              "source": {
                "id": "lenta",
                "name": "Lenta"
              },
              "author": "Вячеслав Агапов",
              "title": "Маск решил зарегистрировать Tesla в штате Техас",
              "description": "Tesla незамедлительно проведет голосование акционеров по вопросу изменения места регистрации компании с Делавэра на Техас.",
              "url": "https://lenta.ru/news/2024/02/01/mask-reshil-zaregistrirovat-tesla-v-shtate-tehas/",
              "urlToImage": "https://icdn.lenta.ru/images/2024/02/01/10/20240201101727256/share_4dcd3cd086a74e8e13f3dc613971edf6.jpg",
              "publishedAt": "2024-02-01T07:21:05Z",
              "content": ": Leon Neal / Pool / Reuters"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "bbc.co.uk",
              "title": "Tesla: Elon Musk moves to shift firm's legal home to Texas",
              "description": "Elon Musk says Tesla will move immediately to hold a shareholder vote on shifting the firm's legal home from the US state of Delaware to Texas. After the ruling, he posted on social media: \"Never incorporate your company in the state of Delaware.\" Many big fi…",
              "url": "https://biztoc.com/x/524d84778295cc39",
              "urlToImage": "https://c.biztoc.com/p/524d84778295cc39/s.webp",
              "publishedAt": "2024-02-01T07:20:06Z",
              "content": "Elon Musk says Tesla will move immediately to hold a shareholder vote on shifting the firm's legal home from the US state of Delaware to Texas.After the ruling, he posted on social media: \"Never inco… [+286 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Bankier.pl"
              },
              "author": "Michał Misiura",
              "title": "Sąd uznał, że wynagrodzenie Muska to przesada. Miliarder został bez premii",
              "description": "Sędzia ze stanu Delaware unieważnił pakiet wynagrodzeń Elona Muska za pracę na stanowisku dyrektora generalnego Tesli wynoszący 56 miliardów dolarów, stając po stronie akcjonariusza spółki, który zgłosił, że wypłata miliardera była nieuczciwie wysoka.",
              "url": "https://www.bankier.pl/wiadomosc/Sad-uznal-ze-wynagrodzenie-Muska-to-przesada-Miliarder-zostal-bez-premii-8688475.html",
              "urlToImage": "https://galeria.bankier.pl/p/8/4/09163179326026-948-568-0-89-2715-1628.jpg",
              "publishedAt": "2024-02-01T07:19:00Z",
              "content": "We wtorek 30 stycznia sdzia ze stanu Delaware uniewani pakiet wynagrodze Elona Muska za prac na stanowisku dyrektora generalnego Tesli wynoszcy 56 miliardów dolarów, stajc po stronie akcjonariusza, k… [+2812 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Securityaffairs.com"
              },
              "author": "Pierluigi Paganini",
              "title": "Police seized 50,000 Bitcoin from operator of the now-defunct piracy site movie2k",
              "description": "German police seized 50,000 Bitcoin from the former operator of the now-defunct piracy website movie2k.to. The police in Saxony, Germany, have seized 50,000 Bitcoin (more than $2.1 billion at the current exchange rate) from the former operator of the now-defu…",
              "url": "https://securityaffairs.com/158432/cyber-crime/piracy-site-movie2k-bitcoin.html",
              "urlToImage": "https://securityaffairs.com/wp-content/uploads/2020/09/bitcoin.jpg",
              "publishedAt": "2024-02-01T07:18:22Z",
              "content": "Police seized 50,000 Bitcoin from operator of the now-defunct piracy site movie2k\r\n | Crooks stole around $112 million worth of XRP from Ripples co-founder\r\n | CISA adds Apple improper authentication… [+41742 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MarketWatch"
              },
              "author": null,
              "title": "Tesla to offer discounts on selected variations of Model Y vehicles in China",
              "description": "By Sherry Qin Tesla will offer discounts on selected variations of its Model Y vehicles in China, only weeks after it slashed prices on a range of models as...",
              "url": "https://www.marketwatch.com/story/tesla-to-offer-discounts-on-selected-model-y-vehicles-in-china-4ef06d72",
              "urlToImage": "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
              "publishedAt": "2024-02-01T07:14:40Z",
              "content": "Tesla will offer discounts on selected variations of its Model Y vehicles in China, only weeks after it slashed prices on a range of models as it faces heightened competition from local rivals such a… [+971 chars]"
            },
            {
              "source": {
                "id": "next-big-future",
                "name": "Next Big Future"
              },
              "author": "Brian Wang",
              "title": "Wrinkled Graphite Using Scotch Tape Production Method",
              "description": "Nextbigfuture has covered the LK99, PCPOSOS (aka LK99 with Sulfur) and the wrinkled graphite room temperature and room pressure superconductors or possible room temperature and room pressure superconductors. Alex Kaplan reviewed the wrinkled graphite paper. H…",
              "url": "https://www.nextbigfuture.com/2024/01/wrinkled-graphite-using-scotch-tape-production-method.html",
              "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2024/01/scotchtapegraphiteroomtempsuperconductor.jpg",
              "publishedAt": "2024-02-01T07:14:39Z",
              "content": "Nextbigfuture has covered the LK99, PCPOSOS (aka LK99 with Sulfur) and the wrinkled graphite room temperature and room pressure superconductors or possible room temperature and room pressure supercon… [+2321 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "ft.com",
              "title": "Tesla shareholders to vote ‘immediately’ on moving incorporation to Texas, says Musk",
              "description": "Move comes after billionaire chief executive’s record pay package was voided by a Delaware judge #delaware",
              "url": "https://biztoc.com/x/9472af12a7772475",
              "urlToImage": "https://c.biztoc.com/p/9472af12a7772475/s.webp",
              "publishedAt": "2024-02-01T07:14:08Z",
              "content": "Move comes after billionaire chief executives record pay package was voided by a Delaware judge\r\n#delaware\r\nThis story appeared on ft.com, ."
            },
            {
              "source": {
                "id": null,
                "name": "OilPrice.com"
              },
              "author": "Charles Kennedy",
              "title": "Musk Says Tesla Will Hold Shareholder Vote Over Texas Incorporation",
              "description": "A poll on X, launched by Tesla CEO Elon Musk, suggested that the company should move to be incorporated in Texas, where the company headquarters are. The poll was prompted by a Delaware court decision that voided Musk’s Tesla compensation package of a sizeabl…",
              "url": "https://oilprice.com/Latest-Energy-News/World-News/Musk-Says-Tesla-Will-Hold-Shareholder-Vote-Over-Texas-Incorporation.html",
              "urlToImage": "https://d32r1sh890xpii.cloudfront.net/news/718x300/2024-02-01_w1yacrtqsp.jpg",
              "publishedAt": "2024-02-01T07:13:00Z",
              "content": "Kazakhstan is facing deepening electricity…\r\nThe total rig count rose…\r\nBy Charles Kennedy - Feb 01, 2024, 1:13 AM CSTA poll on X, launched by Tesla CEO Elon Musk, suggested that the company should m… [+2023 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Corriere.it"
              },
              "author": "Andrea Paoletti",
              "title": "Il Tesla Cybertruck arriverà in Europa? Ecco perché per alcuni sarebbe fuorilegge",
              "description": "Nonostante Tesla non abbia mai dichiarato esplicitamente di voler esportare il suo pickup, l’interesse è alto anche in Europa, ma potrebbe essere molto difficile omologarlo ed immatricolarlo.",
              "url": "https://www.corriere.it/motori/news/24_febbraio_01/tesla-cybertruck-arrivera-europa-ecco-perche-alcuni-sarebbe-fuorilegge-e0c8418c-b222-11ee-9299-5cd622bffa26.shtml",
              "urlToImage": "https://images2.corriereobjects.it/methode_image/2024/01/13/Motori/Foto-Motori-Trattate/759096ec7b7a49d2a2b1730691771fb1-kNvB--526x284@Corriere-Web-Sezioni.jpg",
              "publishedAt": "2024-02-01T07:13:00Z",
              "content": "di Andrea Paoletti Nonostante Tesla non abbia mai dichiarato esplicitamente di voler esportare il suo pickup, l’interesse è alto anche in Europa, ma potrebbe essere molto difficile omologarlo ed imma… [+3032 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Mediafax.ro"
              },
              "author": "Ştefan Stan",
              "title": "Acţionarii Tesla vor vota „imediat” pentru mutarea sediului social în Texas",
              "description": "Tesla va organiza „imediat” un vot al acţionarilor cu privire la mutarea înregistrării corporative a companiei din Delaware în Texas, a scris Elon Musk într-o postare pe platforma sa de socializare X miercuri seară, potrivit Ziarului Financiar.",
              "url": "https://www.mediafax.ro/economic/actionarii-tesla-vor-vota-imediat-pentru-mutarea-sediului-social-in-texas-22245796",
              "urlToImage": "https://storage0.dms.mpinteractiv.ro/media/1/1/1686/22245796/1/7885202-ap-mediafax-foto-ap-david-zalubowski.jpg?width=640",
              "publishedAt": "2024-02-01T07:10:49Z",
              "content": "Omul de afaceri miliardar a citat un sondaj anterior pe care l-a postat pe X în care întreba: Ar trebui ca Tesla s îi schimbe statul de înregistrare în Texas, unde se afl sediul su fizic?. Rezultatul… [+1346 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "theguardian.com",
              "title": "Carmakers may be using aluminium made by Uyghur forced labour, NGO investigation finds",
              "description": "Car manufacturers Toyota, Volkswagen, Tesla, General Motors and BYD may be using aluminium made by Uyghur forced labour in their supply chains and could do more to minimise that risk, Human Rights Watch says. An investigation conducted by HRW has alleged that…",
              "url": "https://biztoc.com/x/34d303805d15dc5f",
              "urlToImage": "https://c.biztoc.com/p/34d303805d15dc5f/s.webp",
              "publishedAt": "2024-02-01T07:10:07Z",
              "content": "Car manufacturers Toyota, Volkswagen, Tesla, General Motors and BYD may be using aluminium made by Uyghur forced labour in their supply chains and could do more to minimise that risk, Human Rights Wa… [+290 chars]"
            },
            {
              "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
              },
              "author": "ET Online",
              "title": "BudgET 2024: FM launches new schemes for biomanufacturing and biofoundry to promote green growth",
              "description": "As Elon Musk looks all set to enter the burgeoning Indian electric vehicle (EV) market with his Tesla vehicles this year, the government on Thursday said it will expand and strengthen the EV ecosystem by supporting the manufacturing and charging infrastructur…",
              "url": "https://economictimes.indiatimes.com/news/india/budget-2024-fm-launches-new-schemes-for-biomanufacturing-and-biofoundry-to-promote-green-growth/videoshow/107318116.cms",
              "urlToImage": "https://img.etimg.com/thumb/msid-107318116,width-1070,height-580,overlay-economictimes/photo.jpg",
              "publishedAt": "2024-02-01T07:09:22Z",
              "content": "As Elon Musk looks all set to enter the burgeoning Indian electric vehicle (EV) market with his Tesla vehicles this year, the government on Thursday said it will expand and strengthen the EV ecosyste… [+366 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Marketscreener.com"
              },
              "author": null,
              "title": "Tesla to Offer Discounts on Selected Model Y Vehicles in China",
              "description": "(marketscreener.com) \n By Sherry Qin \n\n\n Tesla will offer discounts on selected variations of its Model Y vehicles in China, only weeks after it slashed prices on a range of models as it faces heightened competition from local rivals such as BYD and uncertain…",
              "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Tesla-to-Offer-Discounts-on-Selected-Model-Y-Vehicles-in-China-45859522/",
              "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
              "publishedAt": "2024-02-01T07:08:11Z",
              "content": "By Sherry Qin \r\nTesla will offer discounts on selected variations of its Model Y vehicles in China, only weeks after it slashed prices on a range of models as it faces heightened competition from loc… [+1039 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "aol.com",
              "title": "Elon Musk says the people have spoken, and he'll make moves to shift Tesla to be incorporated in Texas",
              "description": "None Elon Musk is done with the state of Delaware. • None Musk says he's going to call a shareholder vote to transfer Tesla's incorporation to Texas. • None The decision comes after a Delaware judge voided his $55 billion compensation package at Tesla. Tesla …",
              "url": "https://biztoc.com/x/cb6dc19c13b667d7",
              "urlToImage": "https://c.biztoc.com/p/cb6dc19c13b667d7/s.webp",
              "publishedAt": "2024-02-01T07:06:07Z",
              "content": "None Elon Musk is done with the state of Delaware.None Musk says he's going to call a shareholder vote to transfer Tesla's incorporation to Texas.None The decision comes after a Delaware judge voided… [+250 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "aol.com",
              "title": "Elon Musk says the people have spoken, and he'll make moves to shift Tesla to be incorporated in Texas",
              "description": "None Elon Musk is done with the state of Delaware. • None Musk says he's going to call a shareholder vote to transfer Tesla's incorporation to Texas. • None The decision comes after a Delaware judge voided his $55 billion compensation package at Tesla. Tesla …",
              "url": "https://biztoc.com/x/cb6dc19c13b667d7",
              "urlToImage": "https://c.biztoc.com/p/cb6dc19c13b667d7/s.webp",
              "publishedAt": "2024-02-01T07:06:07Z",
              "content": "None Elon Musk is done with the state of Delaware.None Musk says he's going to call a shareholder vote to transfer Tesla's incorporation to Texas.None The decision comes after a Delaware judge voided… [+250 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "cnbc.com",
              "title": "Elon Musk says Tesla will hold a shareholder vote to incorporate in Texas after Delaware pay snub",
              "description": "and Tesla CEO Elon Musk speaks during live interview with Ben Shapiro at the symposium on fighting antisemitism on January 22, 2024 in Krakow, Poland. Elon Musk said late Wednesday that Tesla will hold a shareholder vote on whether to transfer the electric ca…",
              "url": "https://biztoc.com/x/5382339c799d2b67",
              "urlToImage": "https://c.biztoc.com/p/5382339c799d2b67/s.webp",
              "publishedAt": "2024-02-01T07:06:06Z",
              "content": ", and Tesla CEO Elon Musk speaks during live interview with Ben Shapiro at the symposium on fighting antisemitism on January 22, 2024 in Krakow, Poland.Elon Musk said late Wednesday that Tesla will h… [+288 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Yahoo Entertainment"
              },
              "author": null,
              "title": "Tesla: Elon Musk moves to shift firm's legal home to Texas",
              "description": null,
              "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_dfc9c0e5-0c2b-482f-b3a2-449ef3a5c407",
              "urlToImage": null,
              "publishedAt": "2024-02-01T07:05:40Z",
              "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "finance.yahoo.com",
              "title": "Why Tesla stock has been on a wild, wild ride",
              "description": "If you’re looking for a screwball company that has a screwball chief executive officer and a screwball stock price, I can tell you just where to go: Tesla, Inc. The screwball CEO, of course, is Elon Musk, who three years ago also crowned himself Tesla’s (TSLA…",
              "url": "https://biztoc.com/x/d12c1d4ee7b0de88",
              "urlToImage": "https://c.biztoc.com/p/d12c1d4ee7b0de88/s.webp",
              "publishedAt": "2024-02-01T07:00:06Z",
              "content": "If youre looking for a screwball company that has a screwball chief executive officer and a screwball stock price, I can tell you just where to go: Tesla, Inc.The screwball CEO, of course, is Elon Mu… [+302 chars]"
            },
            {
              "source": {
                "id": "bbc-news",
                "name": "BBC News"
              },
              "author": "https://www.facebook.com/bbcnews",
              "title": "Tesla: Elon Musk moves to shift Tesla legal home to Texas",
              "description": "The multi-billionaire says the electric car maker will move immediately to hold a shareholder vote on the matter.",
              "url": "https://www.bbc.co.uk/news/business-68163184",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E859/production/_132518495_gettyimages-1963454334.jpg",
              "publishedAt": "2024-02-01T07:00:02Z",
              "content": "Elon Musk says Tesla will move immediately to hold a shareholder vote on shifting the firm's legal home from the US state of Delaware to Texas.\r\nIt comes after a judge in Delaware annulled Mr Musk's … [+1610 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Auto-moto.com"
              },
              "author": "Hugo Dupont",
              "title": "Les voitures électriques en difficulté ? L'exemple de la Norvège",
              "description": "Paradis des modèles zéro émission, le royaume de Norvège pourrait néanmoins rencontrer quelques difficultés à réaliser son ambitieux objectif qui est, rappelons-le, de faire en sorte que toutes les voitures neuves vendues à partir de l'année prochaine soit 10…",
              "url": "https://www.auto-moto.com/en-bref/les-voitures-electriques-en-difficulte--l-exemple-de-la-norvege-29571",
              "urlToImage": "https://photos.auto-moto.com/32/2024/01/photo_article/29571/158648/1200-L-les-voitures-lectriques-en-difficult-l-exemple-de-la-norvge.webp",
              "publishedAt": "2024-02-01T07:00:00Z",
              "content": "Un marché où la plupart des voitures neuves vendues sont 100 % électrique et ne rejettent pas le moindre gramme de CO2 à l'usage, une simple utopie pour le moment ? Non, la Norvège constitue en cela … [+4482 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Feber.se"
              },
              "author": "Wille Wilhelmsson",
              "title": "Palworld har nu över 19 miljoner spelare",
              "description": "Största tredjepartsspelet på Xbox Game Pass någonsin\n\n\n\n\n\n\nSuccén för Pocket Pairs spelet Palworld fortsätter. Spelet, som har kallat för \"Pokémon med vapen\" har nu sålts i över 12 miljoner exemplar i spelbutiken Steam. Samtidigt uppger Microsoft att Palworld…",
              "url": "https://feber.se/spel/palworld-har-nu-over-19-miljoner-spelare/461838/",
              "urlToImage": "https://static.feber.se/article_images/58/09/54/580954.jpg",
              "publishedAt": "2024-02-01T07:00:00Z",
              "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+42677 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Bangkok Post"
              },
              "author": "Bloomberg News",
              "title": "Tesla, VW at risk of ties to Uyghur forced labour in China",
              "description": "NEW YORK - Five of the world's major carmakers are not sufficiently mapping their supply chains to stamp out links to forced labour programs in China's Xinjiang region, according to a report by Human Rights Watch (HRW).",
              "url": "https://www.bangkokpost.com/business/motoring/2734655/tesla-vw-at-risk-of-ties-to-uyghur-forced-labour-in-china",
              "urlToImage": "https://static.bangkokpost.com/media/content/20240201/c1_2734655_700.jpg",
              "publishedAt": "2024-02-01T07:00:00Z",
              "content": "NEW YORK - Five of the world's major carmakers are not sufficiently mapping their supply chains to stamp out links to forced labour programs in China's Xinjiang region, according to a report by Human… [+5354 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "CNBC"
              },
              "author": "Arjun Kharpal, Lora Kolodny",
              "title": "Elon Musk says Tesla will hold a shareholder vote to incorporate in Texas after Delaware pay snub",
              "description": "Musk's X post comes after a judge in Delaware, where Tesla is currently incorporated, voided the $56 billion pay package granted to the billionaire in 2018.",
              "url": "https://www.cnbc.com/2024/02/01/elon-musk-tesla-will-hold-a-shareholder-vote-to-incorporate-in-texas.html",
              "urlToImage": "https://image.cnbcfm.com/api/v1/image/107362492-1705943497451-gettyimages-1952768063-omm_0137_glqhhy5f.jpeg?v=1706651704&w=1920&h=1080",
              "publishedAt": "2024-02-01T06:59:00Z",
              "content": "Elon Musk said late Wednesday that Tesla will hold a shareholder vote on whether to transfer the electric carmaker's state of incorporation to Texas.\r\nThe billionaire asked his followers via a straw … [+1853 chars]"
            },
            {
              "source": {
                "id": "next-big-future",
                "name": "Next Big Future"
              },
              "author": "Brian Wang",
              "title": "Expecting Continued 8-10% Annual Cost Reductions for Tesla $TSLA",
              "description": "Supply Chain expert, Jeff Lutz, expects Tesla to continue 8-10% annual cost reductions from $36300 for the Model Y at the end of Q4 2023. This could range from 6-12% or more if there are external global issues. If we project 9% annual cost reductions for each…",
              "url": "https://www.nextbigfuture.com/2024/01/expecting-continued-8-10-annual-cost-reductions-for-tesla-tsla.html",
              "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2024/01/Screen-Shot-2024-01-31-at-10.15.09-PM.jpg",
              "publishedAt": "2024-02-01T06:58:48Z",
              "content": "Supply Chain expert, Jeff Lutz, expects Tesla to continue 8-10% annual cost reductions from $36300 for the Model Y at the end of Q4 2023.\r\nThis could range from 6-12% or more if there are external gl… [+3379 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "coinpedia.org",
              "title": "or Hedera (HBAR) Can Compete with Pullix (PLX) passive Income",
              "description": "The post Not Even Aave (AAVE) or Hedera (HBAR) Can Compete with Pullix (PLX) passive Income appeared first on Coinpedia Fintech News The attractive prospects of Pullix have made it one of the best crypto in the market. Even giants like Aave (AAVE) and Hedera …",
              "url": "https://biztoc.com/x/87d43612c70ba3b9",
              "urlToImage": "https://c.biztoc.com/p/87d43612c70ba3b9/s.webp",
              "publishedAt": "2024-02-01T06:52:10Z",
              "content": "The post Not Even Aave (AAVE) or Hedera (HBAR) Can Compete with Pullix (PLX) passive Income appeared first on Coinpedia Fintech NewsThe attractive prospects of Pullix have made it one of the best cry… [+269 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Portfolio.hu"
              },
              "author": "Portfolio.hu",
              "title": "A Huawei miatt akadozik a kínai e-autó ipar - a Tesla S kihívója is érintett",
              "description": "A Huawei gyártási nehézségei miatt a Changan Auto, a Chery Auto és a Seres vállalatok kénytelenek késleltetni elektromos járműveik szállítását.",
              "url": "https://www.portfolio.hu/uzlet/20240201/a-huawei-miatt-akadozik-a-kinai-e-auto-ipar-a-tesla-s-kihivoja-is-erintett-666521",
              "urlToImage": "https://pcdn.hu/articles/images-xl/l/u/x/luxeed-s7-654299.jpg",
              "publishedAt": "2024-02-01T06:50:00Z",
              "content": "A Huawei által szállított kulcsfontosságú számítástechnikai egységek gyártásával kapcsolatos problémák miatt több kínai autógyártó is késlekedik modelljeinek piacra dobásával - tájékoztatták a Reuter… [+2127 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "futurezone.at"
              },
              "author": "futurezone.at",
              "title": "Video: Elon Musk geht mit nacktem Tesla-Roboter spazieren",
              "description": "Der humanoide Optimus-Roboter zeigt sich im Video von einer noch nie zuvor gesehenen Seite.",
              "url": "https://futurezone.at/produkte/video-elon-musk-optimus-tesla-humanoider-roboter-spazieren-nackt-atlas-boston-dynamics/402762802",
              "urlToImage": "https://image.futurezone.at/images/facebook/8494120/46-198365523.jpg",
              "publishedAt": "2024-02-01T06:47:40Z",
              "content": "01.02.2024\r\nDer humanoide Optimus-Roboter zeigt sich im Video von einer noch nie zuvor gesehenen Seite."
            },
            {
              "source": {
                "id": null,
                "name": "Digital Trends"
              },
              "author": "Trevor Mogg",
              "title": "Tesla video shows off Cybertruck’s Basecamp tent attachment",
              "description": "First unveiled alongside the first Cybertruck deliveries in November, the vehicle's Basecamp tent attachment paves the way for overnight adventures.",
              "url": "https://www.digitaltrends.com/cars/tesla-video-cybertruck-basecamp-tent/",
              "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/01/cybertruck-basecamp-tent.jpg?resize=1200%2C630&p=1",
              "publishedAt": "2024-02-01T06:45:33Z",
              "content": "Camp with Cybertruck Basecamp\r\nAfter a long wait, Tesla finally delivered the Cybertruck pickup to the first customers at the end of November.\r\nSince then, the Elon Musk-led automaker has been pushin… [+1999 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Abajournal.com"
              },
              "author": "Jenny B. Davis",
              "title": "10 Questions: In crafting a new career, this Texas contracts attorney created a community",
              "description": "",
              "url": "https://www.abajournal.com/magazine/article/10-questions-in-crafting-a-new-career-this-texas-contracts-attorney-created-a-community",
              "urlToImage": "https://www.abajournal.com/images/covers/020324_COVER_250px.jpg",
              "publishedAt": "2024-02-01T06:41:59Z",
              "content": "<ol><li>Home</li><li>Magazine</li><li>10 Questions: In crafting a new career, this…</li></ol>By Jenny B. Davis\r\nFebruary 1, 2024, 1:10 am CST\r\nIt’s lunchtime in Las Vegas. There’s a DJ spinning beats… [+9216 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Feber.se"
              },
              "author": "Bobby Green",
              "title": "Skoda teasar uppdaterade Octavia",
              "description": "Har premiär nästa månad\n\n\n\n\n\n\n\n\n\n\nSnart kommer Skoda att dra täcket av uppdaterade Octavia och här får vi oss en första glimt av den. Den har fått en \"modernare\" look vilket bland annat innebär nya strålkastare och ny grill. Det väntas även bli uppdateringar …",
              "url": "https://feber.se/bil/skoda-teasar-uppdaterade-octavia/461835/",
              "urlToImage": "https://i.ytimg.com/vi/2jSnl21n6zI/hqdefault.jpg",
              "publishedAt": "2024-02-01T06:40:00Z",
              "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+42282 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Madshrimps.be"
              },
              "author": "Stefan Mileschin",
              "title": "Elon Musk's $56 billion Tesla pay package has been tossed out by the court",
              "description": "In 2018, Tesla awarded Elon Musk a $56 billion pay package that helped propel him to the top of world's richest lists. Now, a judge in Delaware has rendered the deal between the company and the CEO to be invalid and called the compensation an \"unfathomable su…",
              "url": "http://www.madshrimps.be/news/item/226991",
              "urlToImage": null,
              "publishedAt": "2024-02-01T06:38:23Z",
              "content": "Copyright © 2001-2011 Madshrimps, All rights reserved.Graphic Design by Dennis Kestelle, Programming by Maarten Menten,\r\nOverall Site design by John Meys\r\nAll information and graphics contained in Ma… [+135 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Oliver Bünte",
              "title": "Tesla Optimus Bot läuft noch menschenähnlicher",
              "description": "Teslas Optimus Bot hat ein Update erhalten. Der humanoide Roboter läuft nun sturzfreier und menschenähnlicher.",
              "url": "https://www.heise.de/news/Tesla-Optimus-Bot-laeuft-noch-menschenaehnlicher-9615034.html",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/5/2/7/1/Optimus_Fu__sse-d05f461a31ffda30.jpg",
              "publishedAt": "2024-02-01T06:38:00Z",
              "content": "Teslas humanoider Roboter Optimus Bot hat ein Update im Bereich der Fortbewegung erhalten. Die damit erweiterte zweite Generation des Roboters kann nun etwas schneller, sturzfreier und menschenähnlic… [+2488 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Zacjohnson.com"
              },
              "author": "Disclaimer and DMCA",
              "title": "Who Owns Uber? – Uber Company History",
              "description": "Curious about who owns Uber? In this article, we will dive into the history and ownership of Uber, the popular ride-hailing and delivery service. From its humble beginnings to its global expansion, we will explore the key figures behind the company and its cu…",
              "url": "https://zacjohnson.com/who-owns-uber/",
              "urlToImage": "https://0043d976.rocketcdn.me/wp-content/uploads/2024/02/who-owns-uber.jpg",
              "publishedAt": "2024-02-01T06:30:01Z",
              "content": "Curious about who owns Uber? In this article, we will dive into the history and ownership of Uber, the popular ride-hailing and delivery service. From its humble beginnings to its global expansion, w… [+27990 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Numerama"
              },
              "author": "Bob Jouy",
              "title": "Hausse de l’électricité : rouler en voiture électrique est-il encore rentable ?",
              "description": "Les tarifs de l'électricité augmentent au 1er février 2024. Beaucoup d'indécis se demandent alors si le gain financier du passage à l'électrique est toujours là. Que coûte une voiture électrique face à une thermique, en tenant compte de cette hausse ?",
              "url": "https://www.numerama.com/vroom/1616726-hausse-de-lelectricite-rouler-en-voiture-electrique-est-il-encore-rentable.html",
              "urlToImage": "https://www.numerama.com/wp-content/uploads/2024/02/voiture-electrique-charge-3.jpg",
              "publishedAt": "2024-02-01T06:25:00Z",
              "content": "Les tarifs de l’électricité augmentent au 1er février 2024. Beaucoup d’indécis se demandent alors si le gain financier du passage à l’électrique est toujours là. Que coûte une voiture électrique face… [+10051 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Zacjohnson.com"
              },
              "author": "Disclaimer and DMCA",
              "title": "Who Owns Twitter? – Twitter Company History",
              "description": "Twitter, currently known as X, is a popular social media website based in the United States. If you’ve ever wondered about the ownership of Twitter, the journey has been quite interesting. Let’s delve into the history of this platform and uncover the details …",
              "url": "https://zacjohnson.com/who-owns-twitter/",
              "urlToImage": "https://0043d976.rocketcdn.me/wp-content/uploads/2024/02/who-owns-twitter.jpg",
              "publishedAt": "2024-02-01T06:20:04Z",
              "content": "Twitter, currently known as X, is a popular social media website based in the United States. If you’ve ever wondered about the ownership of Twitter, the journey has been quite interesting. Let’s delv… [+24854 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Feber.se"
              },
              "author": "Wille Wilhelmsson",
              "title": "Handelshögskolan skärper intagningskrav",
              "description": "För att motverka betygsinflation\n\n\n\n\n\n\nHandelshögskolan i Stockholm har nu beslutat att skärpa sina intagningskrav på studenter som söker till skolan, något som innebär att de som söker till högskolan nu måste ha fått minst 1,25 poäng på högskoleprovet, oavse…",
              "url": "https://feber.se/samhalle/handelshogskolan-skarper-intagningskrav/461832/",
              "urlToImage": "https://static.feber.se/article_images/58/09/53/580953.jpeg",
              "publishedAt": "2024-02-01T06:20:00Z",
              "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+42116 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Biztoc.com"
              },
              "author": "nytimes.com",
              "title": "Elon Musk’s $50 Billion Tesla Pay Was Struck Down. What Happens Next?",
              "description": "A Delaware judge’s decision to void the pay package that helped make Elon Musk the world’s richest person leaves Tesla’s board of directors with some difficult decisions to make. Chancellor Kathaleen St. J. McCormick of the Delaware Court of Chancery on Tuesd…",
              "url": "https://biztoc.com/x/ad7067238d242527",
              "urlToImage": "https://c.biztoc.com/p/ad7067238d242527/s.webp",
              "publishedAt": "2024-02-01T06:14:06Z",
              "content": "A Delaware judges decision to void the pay package that helped make Elon Musk the worlds richest person leaves Teslas board of directors with some difficult decisions to make.Chancellor Kathaleen St.… [+236 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Politiken.dk"
              },
              "author": null,
              "title": "Musk vil flytte Teslas hjemstat efter nederlag om lønspørgsmål",
              "description": "Elon Musk vil flytte Teslas tekniske hjemstat efter retligt nederlag om sit lønspørgsmål.",
              "url": "https://politiken.dk/viden/tech/art9742788/Musk-vil-flytte-Teslas-hjemstat-efter-nederlag-om-l%C3%B8nsp%C3%B8rgsm%C3%A5l",
              "urlToImage": "https://politiken.dk/incoming/img9742798.4z3y6f/ALTERNATES/p16x9_960/FILE%20PHOTO%20Tesla%20CEO%20Musk%20attends%20a%20conference%20organized%20by%20the%20European%20Jewish%20Association%20in%20Krakow",
              "publishedAt": "2024-02-01T06:11:57Z",
              "content": "Teslas aktionærer får lov til at stemme om, hvorvidt elbilselskabet fremover skal registreres i den amerikanske delstat Texas i stedet for Delaware.\r\nDet oplyser selskabets administrerende direktør o… [+1789 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Politiken.dk"
              },
              "author": null,
              "title": "Musk sender Teslas hjemstat til afstemning efter lønnederlag",
              "description": "Elon Musk vil flytte Teslas tekniske hjemstat efter retligt nederlag om sit lønspørgsmål.",
              "url": "https://politiken.dk/viden/tech/art9742788/Musk-sender-Teslas-hjemstat-til-afstemning-efter-l%C3%B8nnederlag",
              "urlToImage": "https://politiken.dk/incoming/img9742798.4z3y6f/ALTERNATES/p16x9_960/FILE%20PHOTO%20Tesla%20CEO%20Musk%20attends%20a%20conference%20organized%20by%20the%20European%20Jewish%20Association%20in%20Krakow",
              "publishedAt": "2024-02-01T06:11:57Z",
              "content": "Teslas aktionærer får lov til at stemme om, hvorvidt elbilselskabet fremover skal registreres i den amerikanske delstat Texas i stedet for Delaware.\r\nDet oplyser selskabets administrerende direktør o… [+1789 chars]"
            },
            {
              "source": {
                "id": "il-sole-24-ore",
                "name": "Il Sole 24 Ore"
              },
              "author": null,
              "title": "Ecobonus e produzione, Stellantis oggi al tavolo di Urso: il governo cerca il secondo costruttore di auto",
              "description": "Al centro dell’incontro ci sono gli attesi nuovi eco-incentivi che difficilmente però entreranno in vigore prima di marzo",
              "url": "https://www.ilsole24ore.com/art/ecobonus-e-produzione-stellantis-oggi-tavolo-urso-governo-cerca-secondo-costruttore-auto-AFtZeJYC",
              "urlToImage": "https://i2.res.24o.it/images2010/2024/01/AFtZeJYC/images/e06633d4-c06e-11ee-b38a-fc683781244a-fotohome0.jpg",
              "publishedAt": "2024-02-01T06:09:44Z",
              "content": "Ascolta la versione audio dell'articolo\r\n2' di lettura\r\nArriva oggi al tavolo automotive il nuovo piano di incentivi. Il ministro Adolfo Urso presenterà il decreto del presidente del consiglio dei mi… [+2321 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hibridosyelectricos.com"
              },
              "author": "Alejandro González",
              "title": "Volkswagen ya tiene la fórmula para esquivar la quiebra de sus eléctricos, y la clave del éxito está donde siempre",
              "description": "Si hacer que un coche funcione a nivel comercial ya es una tarea complicada para cualquier fabricante, más aún es que un coche eléctrico goce de un protagonismo significativo en el ámbito de las ventas en Europa, que, además, también es un mercado complicado …",
              "url": "https://www.hibridosyelectricos.com/coches/volkswagen-ya-tiene-formula-esquivar-quiebra-sus-electricos-clave-exito-esta-donde-siempre_72774_102.html",
              "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/61/74/05/el-coche-de-siempre-sera-el-que-salve-los-muebles-dentro-de-volkswagen_17_2000x1126.jpeg",
              "publishedAt": "2024-02-01T06:06:54Z",
              "content": "Si hacer que un coche funcione a nivel comercial ya es una tarea complicada para cualquier fabricante, más aún es que un coche eléctrico goce de un protagonismo significativo en el ámbito de las vent… [+3965 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Forbes"
              },
              "author": "Siladitya Ray, Forbes Staff, \n Siladitya Ray, Forbes Staff\n https://www.forbes.com/sites/siladityaray/",
              "title": "Musk Says Tesla Will Hold Shareholder Vote ‘Immediately’ To Move Company’s Incorporation To Texas",
              "description": "The billionaire justified the decision on the results of an unscientific poll run on his X account a day earlier.",
              "url": "https://www.forbes.com/sites/siladityaray/2024/02/01/musk-says-tesla-will-hold-shareholder-vote-immediately-to-move-companys-incorporation-to-texas/",
              "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65bb345b26b5ec22d1c5abfb/0x0.jpg?format=jpg&crop=3917,2204,x0,y111,safe&height=900&width=1600&fit=bounds",
              "publishedAt": "2024-02-01T06:05:41Z",
              "content": "Tesla CEO Elon Musk on Thursday said the electric vehicle maker will hold a shareholder vote soon to transfer the companys state of incorporation to Texas, after publicly lashing out at Delawarewhere… [+749 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Marketscreener.com"
              },
              "author": null,
              "title": "Asia weathers Fed fallout, bonds still banking on rate cuts",
              "description": "(marketscreener.com) Asian shares steadied on\nThursday as Chinese stocks eked out rare gains, while investors\nstuck to bets for sizable cuts in U.S. interest rates this year\neven if the kick off might now be a little later than first\nhoped.\n The Federal Reser…",
              "url": "https://www.marketscreener.com/quote/currency/AUSTRALIAN-DOLLAR-US-DOLL-2373531/news/Asia-weathers-Fed-fallout-bonds-still-banking-on-rate-cuts-45858998/",
              "urlToImage": "https://www.marketscreener.com/images/reuters/2016-01-26T234256Z_1006950001_LYNXNPEC0P1GI_RTROPTP_2_CBUSINESS-US-GLOBAL-FOREX.JPG",
              "publishedAt": "2024-02-01T06:01:52Z",
              "content": "* Asian stock markets : https://tmsnrt.rs/2zpUAr4\r\n* China shares steady, S&amp;P futures bounce\r\n* Markets shift Fed rate cut timing from March to May\r\n* Fed futures still see sizable easing over 20… [+3948 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Notebookcheck.net"
              },
              "author": "Nitisha Upadhye",
              "title": "Tesla tweaks Model Y hardware to push sales in China",
              "description": "To encourage sales in China, Tesla has upgraded Model Y’s hardware, which will add significant tweaks to the car. The brand is anticipating slow growth in the EV market across the globe, so this move will likely push sales.",
              "url": "https://www.notebookcheck.net/Tesla-tweaks-Model-Y-hardware-to-push-sales-in-China.798965.0.html",
              "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/Tesla-model-Y.jpg",
              "publishedAt": "2024-02-01T06:01:00Z",
              "content": "Tesla China has recently revealed details about the upgrades made to the Model Y on its official Weibo handle. The EV manufacturer has shared information on the Hardware 4.0 update, which will introd… [+1085 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Insurance Journal"
              },
              "author": "admin",
              "title": "Report Shows California’s 2023 Auto Registrations Highest Since 2020, with an 11.9% Increase in New Vehicles",
              "description": "Last year proved to be a banner year for new car registrations in California, reaching the highest numbers since the COVID-19 pandemic, a new report out this week shows. The California New Car Dealers Association’s fourth quarter 2023 California Auto …",
              "url": "https://www.insurancejournal.com/news/west/2024/02/01/758533.htm",
              "urlToImage": "https://www.insurancejournal.com/app/uploads/2022/02/rows-of-new-volkswagens-before-shipping-bloomberg-scaled.jpg",
              "publishedAt": "2024-02-01T06:00:44Z",
              "content": "Last year proved to be a banner year for new car registrations in California, reaching the highest numbers since the COVID-19 pandemic, a new report out this week shows.\r\nThe California New Car Deale… [+3012 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Auto-swiat.pl"
              },
              "author": "Tomasz Kamiński",
              "title": "Widziałem na żywo Teslę Cybertruck. Mam mieszane uczucia",
              "description": "Los Angeles to najludniejsze miasto stanu Kalifornia. Znane przede wszystkim z Hollywood, studiów filmowych, a także sławnych dzielnic typu Beverly Hills, Malibu, czy Bel Air. Jadąc jedną z takich dzielnic, spotkałem samochód, który budzi ogromne zainteresowa…",
              "url": "https://www.auto-swiat.pl/wiadomosci/aktualnosci/nagle-na-ulicy-zobaczylem-tesle-cybertruck-mam-mieszane-uczucia/rt93pql",
              "urlToImage": "https://ocdn.eu/pulscms-transforms/1/9J3ktkpTURBXy9iZmFjZGM1MmFlZGQ1ZTZhYjUxMzE3YjQxZTMwZTA2MC5qcGeSlQMAzQEVzQfQzQRlkwXNBLDNAnY",
              "publishedAt": "2024-02-01T06:00:00Z",
              "content": "Potne amerykaskie pikapy, luksusowe i sportowe modele, a take bogato wyposaone europejskie terenówki. Wszystko to mona spotka na ulicach Los Angeles czy pooonego niedaleko Newport Beach. Tutaj pikap … [+3213 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Feber.se"
              },
              "author": "Wille Wilhelmsson",
              "title": "Starlink har nu 2,3 miljoner kunder",
              "description": "I över 70 länder\n\n\n\n\n\n\nSpaceX:s rymdinternetoperatör Starlink uppgav under eventet SPIE Photonics West att man nu har 2,3 miljoner kunder i över 70 länder. Eventet var primärt inriktat på laserteknik och Starlink uppgav att man med hjälp av laser transportera…",
              "url": "https://feber.se/internet/starlink-har-nu-23-miljoner-kunder-/461827/",
              "urlToImage": "https://static.feber.se/article_images/58/09/49/580949.jpg",
              "publishedAt": "2024-02-01T06:00:00Z",
              "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+44066 chars]"
            }
          ]
        }

        setTotalPages(Math.ceil(data.totalResults / 9));
        console.log(data.articles);
        setImages(data.articles);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <section className="section-cards">
        <div className="container">
          <h2 className="text-4xl font-bold my-7">Editor Picks</h2>
          {loading ? (
            <p className="text-3xl">Loading...</p>
          ) : (
            <>
              <div className="cards grid grid-cols-3 gap-10">
                {Images.map((ele, i) => (
                  <div key={i} className="card">
                    <img src={ele.urlToImage} alt="Ent" />
                    <div>
                      <h3>{ele.title}</h3>
                      <p>{ele.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination">
                <button className="btn ml-1" onClick={() => handlePageChange(currentPage - 1)}>
                  Prev
                </button>
                <span>{currentPage}</span>
                <button className="btn ml-1" onClick={() => handlePageChange(currentPage + 1)}>
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cards;

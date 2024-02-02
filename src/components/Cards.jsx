import React, { useState, useEffect } from "react";
import "./card.css";

const Cards = () => {
  const [Images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = {
          "status": "ok",
          "totalResults": 2217,
          "articles": [
            {
              "source": {
                "id": "wired",
                "name": "Wired"
              },
              "author": "Michael Calore, Lauren Goode",
              "title": "The Apple Vision Pro Lives Deep in the Uncanny Valley",
              "description": "This week, we learn what it feels like to use Apple's new mixed reality headset, and we examine the various ways Apple envisions people interacting with each other while wearing the devices.",
              "url": "https://www.wired.com/story/gadget-lab-podcast-630/",
              "urlToImage": "https://media.wired.com/photos/65bae385cc880e2d196fd460/191:100/w_1280,c_limit/Apple-Vision-Pro-Uncanny-Valley-Gadget-Lab-Gear-GettyImages-1258467410.jpg",
              "publishedAt": "2024-02-01T13:00:00Z",
              "content": "Apple's first ever mixed reality headset, the Vision Pro, arrives tomorrow. Apple has a knack for revitalizing and legitimizing a product categorysomething that the face computer market really needs … [+1863 chars]"
            },
            {
              "source": {
                "id": "wired",
                "name": "Wired"
              },
              "author": "Angela Watercutter",
              "title": "Music Piracy Is Back in a Big Way—Especially From YouTube",
              "description": "Visits to music piracy websites went up more than 13 percent last year, a new report says. The majority of those visits were to sites that allow users to download the audio from YouTube URLs.",
              "url": "https://www.wired.com/story/music-piracy-way-up/",
              "urlToImage": "https://media.wired.com/photos/65bae24ccdd1fa15dcc5a876/191:100/w_1280,c_limit/Music-Piracy-Culture-1926940224.jpg",
              "publishedAt": "2024-02-01T12:00:00Z",
              "content": "This weekend, dozens of artists are set to descend on Los Angeles for the 66th annual Grammy Awards. Trevor Noah will tell jokes, musicians will get trophiesand somewhere on the internet, someone wil… [+4264 chars]"
            },
            {
              "source": {
                "id": "wired",
                "name": "Wired"
              },
              "author": "Will Knight",
              "title": "I Tested a Next-Gen AI Assistant. It Will Blow You Away",
              "description": "WIRED experimented with a new form of voice assistant that can browse the web and perform tasks online. Siri, Alexa, and other virtual helpers could soon be much more powerful.",
              "url": "https://www.wired.com/story/fast-forward-tested-next-gen-ai-assistant/",
              "urlToImage": "https://media.wired.com/photos/65baf73038f4406f11e1a29c/191:100/w_1280,c_limit/business_ai_voice_assistant.jpg",
              "publishedAt": "2024-02-01T17:00:00Z",
              "content": "The most famous virtual valets around todaySiri, Alexa, and Google Assistantare a lot less impressive than the latest AI-powered chatbots like ChatGPT or Google Bard. When the fruits of the recent ge… [+3117 chars]"
            },
            {
              "source": {
                "id": "the-verge",
                "name": "The Verge"
              },
              "author": "Emma Roth",
              "title": "Meta’s Quest headsets add spatial video and pinch controls to compete with Vision Pro",
              "description": "Meta is rolling out spatial video and new pinching gestures to its Quest 2 and Quest 3 headsets just before the launch of the Vision Pro.",
              "url": "https://www.theverge.com/2024/2/1/24058088/meta-quest-3-spatial-video-vision-pro",
              "urlToImage": "https://cdn.vox-cdn.com/thumbor/Zh72X2mSe4dkOKcoxsEjQMTn6Yw=/0x0:780x439/1200x628/filters:focal(390x220:391x221)/cdn.vox-cdn.com/uploads/chorus_asset/file/25261271/meta_spatial_vid.png",
              "publishedAt": "2024-02-01T18:17:59Z",
              "content": "Metas Quest headsets add spatial video and pinch controls to compete with Vision Pro\r\nMetas Quest headsets add spatial video and pinch controls to compete with Vision Pro\r\n / Now, Quest 2 and Quest 3… [+3096 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Gizmodo.com"
              },
              "author": "Maxwell Zeff",
              "title": "Music Piracy Is Back, Baby",
              "description": "“You wouldn’t steal a car. You wouldn’t steal a handbag,” said that infamous 2000s anti-piracy commercial from the Motion Picture Association. “Piracy is stealing.”Read more...",
              "url": "https://gizmodo.com/music-piracy-is-back-baby-1851218401",
              "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/6a4bb584d704297d79864bff9a17009a.jpg",
              "publishedAt": "2024-02-01T22:10:00Z",
              "content": "You wouldnt steal a car. You wouldnt steal a handbag, said that infamous 2000s anti-piracy commercial from the Motion Picture Association. Piracy is stealing.\r\nBut would you pirate a song? Last year,… [+2097 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Gizmodo.com"
              },
              "author": "Dua Rashid",
              "title": "I'm Obsessed With This Huge Smart Touchscreen Calendar",
              "description": "Skylight recently released a 27-inch variant of its smart calendar, which looks pretty promising. It’s essentially a huge touchscreen display housed in an aluminum or plastic case that you put on your wall like a framed piece of art. It lets you add, remove, …",
              "url": "https://gizmodo.com/skylight-touchscreen-smart-calender-organization-1851215964",
              "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a5aba7d33c3c2e32dde3bed947cdda82.jpg",
              "publishedAt": "2024-02-01T18:10:00Z",
              "content": "Skylight recently released a 27-inch variant of its smart calendar, which looks pretty promising. Its essentially a huge touchscreen display housed in an aluminum or plastic case that you put on your… [+1393 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Android Central"
              },
              "author": "nicholas.sutrich@futurenet.com (Nicholas Sutrich)",
              "title": "Meta is shifting from AR to VR, doubles down on Ray-Ban partnership",
              "description": "Now that the Apple Vision Pro is giving Meta its first big challenge in years, the company has shifted development away from AR glasses and toward VR headsets.",
              "url": "https://www.androidcentral.com/gaming/virtual-reality/meta-shifting-from-ar-to-vr",
              "urlToImage": "https://cdn.mos.cms.futurecdn.net/2pZECUKtHzkvjNeJBDe4rX-1200-80.jpg",
              "publishedAt": "2024-02-01T20:03:05Z",
              "content": "<ul><li>One report states that Meta is pulling back on AR glasses development, citing high R&amp;D costs and no commercially viable product results.</li><li>One feature, Augments, has been canceled f… [+2732 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Android Central"
              },
              "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
              "title": "Samsung Galaxy S24 Ultra vs. Apple iPhone 15 Pro Max: Battle of the flagships",
              "description": "The Galaxy S24 Ultra is the best phone that Samsung has to offer in 2024, but can it beat the iPhone 15 Pro Max?",
              "url": "https://www.androidcentral.com/phones/samsung-galaxy-s24-ultra-vs-apple-iphone-15-pro-max",
              "urlToImage": "https://cdn.mos.cms.futurecdn.net/FdXaRthr7zNSsPYddDWksM-1200-80.jpg",
              "publishedAt": "2024-02-01T04:29:29Z",
              "content": "Samsung Galaxy S24 Ultra vs. iPhone 15 Pro Max: Design\r\nWhy you can trust Android Central \r\nOur expert reviewers spend hours testing and comparing products and services so you can choose the best for… [+11788 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Android Central"
              },
              "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
              "title": "Snapdragon 8 Gen 4 leak shows the chip may achieve some impressive clock speeds",
              "description": "Qualcomm has just started to showcase Snapdragon 8 Gen 3's prowess with the latest Android flagships. The successor, however, is likely to outshine it very soon.",
              "url": "https://www.androidcentral.com/phones/qualcomm-snapdragon-8-gen-4-early-benchmarks",
              "urlToImage": "https://cdn.mos.cms.futurecdn.net/YS7xAwLueVWgPgeVpKTtfc-1200-80.jpg",
              "publishedAt": "2024-02-01T06:22:42Z",
              "content": "<ul><li>Qualcomm's next flagship SoC details and benchmarks leak way ahead of launch.</li><li>The Snapdragon 8 Gen 4 could hit 4.0GHz clock speeds — as noted by Digital Chat Station.</li><li>The late… [+2226 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Android Central"
              },
              "author": "michael.hicks@futurenet.com (Michael L Hicks)",
              "title": "Meta Q4 2023 earnings report shows record-breaking Quest 3 sales, ad profits",
              "description": "Meta's Reality Labs is still losing billions every quarter, but it's making so much money on ad revenue that it doesn't really matter (except to greedy shareholders).",
              "url": "https://www.androidcentral.com/apps-software/meta-q4-2023-earnings-report",
              "urlToImage": "https://cdn.mos.cms.futurecdn.net/zuwB8uGQSdre52kaVNFjSC-1200-80.jpeg",
              "publishedAt": "2024-02-01T23:55:15Z",
              "content": "<ul><li>Meta's final Q4 2023 earnings report showed $40.1 billion in revenue and a 41% operating margin.</li><li>Reality Labs invested about $5.6 billion in R&amp;D, but earned $1.07 billion back in … [+2911 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MacRumors"
              },
              "author": "Juli Clover",
              "title": "Apple Extends Modem Licensing Deal With Qualcomm Through March 2027",
              "description": "Apple has extended its modem chip licensing agreement with Qualcomm through March 2027, Qualcomm said today during its first earnings call of 2024. Apple's existing agreement has now been extended for two years, so we can expect to see Qualcomm modems in the …",
              "url": "https://www.macrumors.com/2024/01/31/apple-extends-qualcomm-modem-licensing-deal/",
              "urlToImage": "https://images.macrumors.com/t/IHL9bVLl1s8V8hr6AaCmZcetTsc=/2500x/article-new/2023/02/5G-Modem-Feature-Blue.jpg",
              "publishedAt": "2024-02-01T00:20:04Z",
              "content": "Apple has extended its modem chip licensing agreement with Qualcomm through March 2027, Qualcomm said today during its first earnings call of 2024. Apple's existing agreement has now been extended fo… [+1690 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MacRumors"
              },
              "author": "Juli Clover",
              "title": "Apple Vision Pro Apps Now Live on App Store Website",
              "description": "While Apple officially launched the visionOS App Store in mid-January, apps were not showing up on the ‌App Store‌ website. That has now changed, and the Vision Pro ‌App Store‌ is now live on the web as well.\n\n\n\n\n\nWhen viewing an app's webpage, ‌visionOS‌ scr…",
              "url": "https://www.macrumors.com/2024/02/01/apple-vision-pro-apps-app-store-website/",
              "urlToImage": "https://images.macrumors.com/t/3JRhiUaIcen-UTz-uPIImOElYWY=/2000x/article-new/2024/02/visionos-website.jpg",
              "publishedAt": "2024-02-01T20:07:22Z",
              "content": "While Apple officially launched the visionOSApp Store in mid-January, apps were not showing up on the ‌App Store‌ website. That has now changed, and the Vision Pro ‌App Store‌ is now live on the web … [+533 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MacRumors"
              },
              "author": "Tim Hardwick",
              "title": "Apple's Fifth Avenue Store Vision Pro Installation Is Shaping Up to Be a Spectacle",
              "description": "Apple is putting the final retail preparations in place for the U.S. launch of its Apple Vision Pro headset on Friday, with dedicated areas in flagship retail stores where customers can test out the headset. But Apple's Fifth Avenue retail store in New York a…",
              "url": "https://www.macrumors.com/2024/02/01/apple-vision-pro-launch-fifth-avenue/",
              "urlToImage": "https://images.macrumors.com/t/JYuh4hKVNdiKNZ1b40SYtz5G3ek=/1600x/article-new/2024/02/cube-store-vision-pro-construction.jpeg",
              "publishedAt": "2024-02-01T11:00:28Z",
              "content": "Apple is putting the final retail preparations in place for the U.S. launch of its Apple Vision Pro headset on Friday, with dedicated areas in flagship retail stores where customers can test out the … [+1498 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MacRumors"
              },
              "author": "Juli Clover",
              "title": "Meta's VR Headset Can Play iPhone Spatial Videos",
              "description": "The Meta Quest VR headset will soon be able to play spatial videos captured on an iPhone 15 Pro or ‌iPhone 15 Pro‌ Max, Meta announced today. The upcoming v62 update will add support for the feature.\n\n\n\n\n\nSpatial videos can be uploaded to the Meta Quest heads…",
              "url": "https://www.macrumors.com/2024/02/01/meta-quest-spatial-videos/",
              "urlToImage": "https://images.macrumors.com/t/1mlSu4iaIcamM9G1FgjDgi2IRus=/1600x/article-new/2024/02/meta-quest-spatial-video.png",
              "publishedAt": "2024-02-01T19:22:03Z",
              "content": "The Meta Quest VR headset will soon be able to play spatial videos captured on an iPhone 15 Pro or ‌iPhone 15 Pro‌ Max, Meta announced today. The upcoming v62 update will add support for the feature.… [+1434 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MacRumors"
              },
              "author": "Juli Clover",
              "title": "Apple Now Has More Than 2.2 Billion Active Devices Worldwide",
              "description": "There are more than two billion active iPhones, iPads, Macs, and other Apple devices worldwide, Apple said today in the earnings report covering the first fiscal quarter of 2024.\n\n\n\n\n\n\"We are pleased to announce that our installed base of active devices has n…",
              "url": "https://www.macrumors.com/2024/02/01/apple-2-2-billion-active-devices/",
              "urlToImage": "https://images.macrumors.com/t/zJWS6V8S235N6gEQ3yr0qXteUWI=/1600x/article-new/2022/09/apple-beta-lineup-2022.jpg",
              "publishedAt": "2024-02-01T21:47:32Z",
              "content": "There are more than two billion active iPhones, iPads, Macs, and other Apple devices worldwide, Apple said today in the earnings report covering the first fiscal quarter of 2024.\r\n\"We are pleased to … [+511 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MacRumors"
              },
              "author": "Joe Rossignol",
              "title": "Vision Pro Demo Appointments Begin Tomorrow at All U.S. Apple Stores",
              "description": "Apple Vision Pro launches in the U.S. this Friday, and you will be able to try out the headset at your local Apple Store on the same day.\n\n\n\n\n\nStarting tomorrow at 8 a.m. local time, all Apple Stores in the U.S. will allow customers to sign up for a Vision Pr…",
              "url": "https://www.macrumors.com/2024/02/01/vision-pro-apple-store-demos/",
              "urlToImage": "https://images.macrumors.com/t/FeS4YOErTvcpwBbP9Qu7HaevaDA=/2880x/article-new/2024/02/Apple-Vision-Pro-Demo.jpeg",
              "publishedAt": "2024-02-01T19:32:31Z",
              "content": "Apple Vision Pro launches in the U.S. this Friday, and you will be able to try out the headset at your local Apple Store on the same day.\r\nStarting tomorrow at 8 a.m. local time, all Apple Stores in … [+724 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MacRumors"
              },
              "author": "Tim Hardwick",
              "title": "Here's What Tim Cook Looks Like Wearing Apple Vision Pro",
              "description": "Tim Cook has been finally photographed wearing the Apple Vision Pro headset for a Vanity Fair interview, which leads on the digital cover of the magazine.\n\n\n\n\n\nThis is the first time the Apple CEO has been seen wearing the device since its unveiling at WWDC 2…",
              "url": "https://www.macrumors.com/2024/02/01/tim-cook-wears-apple-vision-pro-vanity-fair/",
              "urlToImage": "https://images.macrumors.com/t/91adLpD7OElpgF3BZGcJKLS7KnE=/1920x/article-new/2024/02/vanity-fair-vision-pro-tim-cook.jpg",
              "publishedAt": "2024-02-01T12:42:51Z",
              "content": "Tim Cook has been finally photographed wearing the Apple Vision Pro headset for a Vanity Fair interview, which leads on the digital cover of the magazine.\r\nThis is the first time the Apple CEO has be… [+2972 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MacRumors"
              },
              "author": "Juli Clover",
              "title": "Apple Spending a 'Tremendous Amount of Time and Effort' on AI, Details Coming 'Later This Year'",
              "description": "During today's earnings call covering the first fiscal quarter of 2024, Apple CEO Tim Cook commented on Apple's work on artificial intelligence. He said that Apple is investing a \"tremendous\" amount of time and effort in AI, with details to come later this ye…",
              "url": "https://www.macrumors.com/2024/02/01/apple-ai-details-coming-later-this-year/",
              "urlToImage": "https://images.macrumors.com/t/X8Mvv4-ay3fM6NWUohr6lbyLJmM=/1600x/article-new/2022/03/hey-siri-banner-apple.jpg",
              "publishedAt": "2024-02-01T22:17:18Z",
              "content": "During today's earnings call covering the first fiscal quarter of 2024, Apple CEO Tim Cook commented on Apple's work on artificial intelligence. He said that Apple is investing a \"tremendous\" amount … [+931 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MacRumors"
              },
              "author": "Juli Clover",
              "title": "Apple's Q1 2024 Earnings Call Takeaways",
              "description": "Apple today held its earnings call for the first fiscal quarter of 2024 (fourth calendar quarter of 2023), with Apple CEO Tim Cook and Apple CFO Luca Maestri sharing details on Apple's performance, recent product sales, services growth, and more.\n\n\n\n\n\nWe've h…",
              "url": "https://www.macrumors.com/2024/02/01/apple-q1-2024-earnings-tidbits/",
              "urlToImage": "https://images.macrumors.com/t/xkVHlBaujx_SDb1_mm4VSNOI50g=/2676x/article-new/2022/01/Apple-Logo-Cash-Feature-Yellow.jpg",
              "publishedAt": "2024-02-01T23:04:55Z",
              "content": "Apple today held its earnings call for the first fiscal quarter of 2024 (fourth calendar quarter of 2023), with Apple CEO Tim Cook and Apple CFO Luca Maestri sharing details on Apple's performance, r… [+3257 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "NPR"
              },
              "author": "The Associated Press",
              "title": "Former CIA engineer gets 40 years for giving agency's hacking secrets to WikiLeaks",
              "description": "Joshua Schulte was sentenced in what the U.S. government described as the biggest theft of classified information in CIA history and for possession of child sexual abuse images and videos.",
              "url": "https://www.npr.org/2024/02/01/1228493323/former-cia-engineer-sentenced-40-years-wikileaks",
              "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
              "publishedAt": "2024-02-01T22:57:52Z",
              "content": "NEW YORK A former CIA software engineer was sentenced to 40 years in prison on Thursday after his convictions for what the government described as the biggest theft of classified information in CIA h… [+4072 chars]"
            },
            {
              "source": {
                "id": "business-insider",
                "name": "Business Insider"
              },
              "author": "Matthew Fox",
              "title": "Live updates: Apple to report 4th-quarter earnings",
              "description": "Apple will report first-quarter earnings after the closing bell on Feb. 1. Investors will be watching iPhone sales and the launch of the Vision Pro.",
              "url": "https://www.businessinsider.com/apple-stock-earnings-report-q1-call-aapl-price-live-updates-2024-2",
              "urlToImage": "https://i.insider.com/65baaea3ac2de4f17ee6666d?width=1200&format=jpeg",
              "publishedAt": "2024-02-01T15:01:01Z",
              "content": "Apple CEO Tim Cook officially took over the company in 2011.Richard Drew/AP\r\n<ul><li>Apple reports fiscal first-quarter earnings on Thursday.</li><li>Investors will be watching iPhone sales in China … [+1538 chars]"
            },
            {
              "source": {
                "id": "business-insider",
                "name": "Business Insider"
              },
              "author": "Tom Carter",
              "title": "Apple fans finally got a proper look at one of the Vision Pro's more bizarre features — and some think it's terrible",
              "description": "The Apple Vision Pro's EyeSight feature displays a digital version of a user's eyes while they're wearing the $3,499 headset.",
              "url": "https://www.businessinsider.com/apple-vision-pro-eyesight-feature-fans-reaction-2024-1",
              "urlToImage": "https://i.insider.com/65ba34cf43bb77284ba1f963?width=1200&format=jpeg",
              "publishedAt": "2024-02-01T12:40:21Z",
              "content": "\"EyeSight\" has featured heavily in the marketing for the Vision Pro. Apple\r\n<ul><li>Some Apple fans were unimpressed by the Vision Pro's \"EyeSight\" feature when reviews came out this week.</li><li>It… [+2903 chars]"
            },
            {
              "source": {
                "id": "business-insider",
                "name": "Business Insider"
              },
              "author": "Sarah Jackson",
              "title": "Tim Cook says Apple's earliest version of the Vision Pro was a 'monster' you couldn't even wear",
              "description": "Apple Vision Pro reviewers say it's heavy after extended use, but Tim Cook told Vanity Fair an early version was even bulkier.",
              "url": "https://www.businessinsider.com/tim-cook-early-apple-vision-pro-monster-not-wearable-2024-2",
              "urlToImage": "https://i.insider.com/65bbb72243bb77284ba27301?width=1200&format=jpeg",
              "publishedAt": "2024-02-01T19:42:55Z",
              "content": "The Apple Vision Pro launches in the US on February 2.Justin Sullivan/Getty Images\r\n<ul><li>Reviewers say the Apple Vision Pro can feel heavy, but it's at least lighter than it used to be.</li><li>CE… [+1668 chars]"
            },
            {
              "source": {
                "id": "business-insider",
                "name": "Business Insider"
              },
              "author": "Ana Altchek",
              "title": "Tim Cook has finally been photographed wearing Apple's new face computer",
              "description": "Apple's chief appeared in pictures wearing the mixed-reality headset, marking the first time that a company exec has been seen with it on.",
              "url": "https://www.businessinsider.com/tim-cook-finally-photographed-wearing-apple-vision-pro-2024-2",
              "urlToImage": "https://i.insider.com/65bbcf9a7a3d27148876a871?width=1200&format=jpeg",
              "publishedAt": "2024-02-01T18:11:53Z",
              "content": "Tim Cook next to the Vision Pro headset during the Apple Worldwide Developers Conference in June 2023.Justin Sullivan/Getty Images\r\n<ul><li>Apple CEO Tim Cook has finally been photographed with the V… [+2054 chars]"
            },
            {
              "source": {
                "id": "business-insider",
                "name": "Business Insider"
              },
              "author": "Beatrice Nolan",
              "title": "Microsoft's full set of Office apps will be available on Apple's Vision Pro — including the company's new AI assistant, Copilot",
              "description": "The tech giant said programs including Microsoft Word, Excel, and PowerPoint would be available on Apple's new headset on its launch day.",
              "url": "https://www.businessinsider.com/microsoft-office-apps-apple-vision-pro-copilot-2024-2",
              "urlToImage": "https://i.insider.com/65bb91ce43bb77284ba26302?width=1200&format=jpeg",
              "publishedAt": "2024-02-01T15:18:46Z",
              "content": "Microsoft CEO Satya Nadella.Stephen Brashear/Getty Images\r\n<ul><li>Microsoft is bringing a full suite of Office apps to Apple's Vision Pro.</li><li>The company said the apps would be available from t… [+1729 chars]"
            },
            {
              "source": {
                "id": "business-insider",
                "name": "Business Insider"
              },
              "author": "Camilo Fonseca",
              "title": "Apple is shipping out jailbroken iPhones and a bunch of stickers to bug bounty hunters",
              "description": "A security researcher recently received a jailbroken device from the company so he could look for new bugs and vulnerabilities in iOS.",
              "url": "https://www.businessinsider.com/apple-jailbreaking-iphones-stickers-security-bugs-2024-2",
              "urlToImage": "https://i.insider.com/65bc16407a3d27148876ebf1?width=1200&format=jpeg",
              "publishedAt": "2024-02-01T22:36:30Z",
              "content": "Apple is shipping jailbroken iPhones to third-party researchers who are part of its Security Research Device Program.Courtesy of Gergely Kalman\r\n<ul><li>Images are circulating on social media of Appl… [+2821 chars]"
            },
            {
              "source": {
                "id": "business-insider",
                "name": "Business Insider"
              },
              "author": "Sarah Jackson",
              "title": "Meta's soaring profits just paid for its first-ever dividend",
              "description": "Meta declared a $0.50-per-share dividend, its first ever, and authorized a $50 billion buyback boost as profits spiked.",
              "url": "https://www.businessinsider.com/metas-profits-first-ever-dividend-2024-2",
              "urlToImage": "https://i.insider.com/65bc1be07a3d27148876f0a5?width=1200&format=jpeg",
              "publishedAt": "2024-02-01T22:32:14Z",
              "content": "Mark Zuckerberg's Meta announced its first-ever dividend in its earnings release Thursday.BRENDAN SMIALOWSKI / Getty Images\r\n<ul><li>Meta says it's going to start paying its first-ever dividend.</li>… [+1395 chars]"
            },
            {
              "source": {
                "id": "business-insider",
                "name": "Business Insider"
              },
              "author": "Theron Mohamed",
              "title": "Warren Buffett's Berkshire Hathaway is an epic turnaround story — and its latest deal looks a winner, expert says",
              "description": "Warren Buffett's company beat the odds given its original focus on \"textiles, trading stamps, and department stores,\" says author Jacob McDonough.",
              "url": "https://www.businessinsider.com/warren-buffett-berkshire-hathway-turnaround-story-mcdonough-pilot-real-estate-2024-1",
              "urlToImage": "https://i.insider.com/5f3aa95ae89ebf001f04541f?width=1200&format=jpeg",
              "publishedAt": "2024-02-01T09:42:34Z",
              "content": "Warren Buffett.Getty Images / Bill Pugliano\r\n<ul>\n<li>Warren Buffett's Berkshire Hathaway is the result of an incredible turnaround, Jacob McDonough said.</li>\n<li>The company was unlikely to succeed… [+3092 chars]"
            },
            {
              "source": {
                "id": "business-insider",
                "name": "Business Insider"
              },
              "author": "Peter Kafka",
              "title": "The video game industry is in trouble. Here's why.",
              "description": "Video games have hit a rough patch: Sales are down, usage is down, and layoffs are spiking. There isn't an obvious solution showing up anytime soon.",
              "url": "https://www.businessinsider.com/video-games-xbox-playstation-spider-man-movie-business-trouble-why-2024-2",
              "urlToImage": "https://i.insider.com/65bbd18e7a3d27148876a9b9?width=1200&format=jpeg",
              "publishedAt": "2024-02-01T17:37:23Z",
              "content": "Is it \"Game Over\" for the video game industry? It faces trying times ahead.DC Studio/Shutterstock\r\n<ul><li>Video games are a huge business — even bigger than Hollywood by some measures.</li><li>But i… [+4628 chars]"
            },
            {
              "source": {
                "id": "business-insider",
                "name": "Business Insider"
              },
              "author": "Dan DeFrancesco",
              "title": "A Senate hearing with top tech CEOs about online child safety had plenty of fireworks",
              "description": "In today's big story, we're looking at the grilling tech CEOs got during a contentious Senate hearing, with one notable exception.",
              "url": "https://www.businessinsider.com/social-media-congress-hearing-meta-tiktok-x-2024-2",
              "urlToImage": "https://i.insider.com/65bb8a207a3d2714887676bb?width=1200&format=jpeg",
              "publishedAt": "2024-02-01T14:44:50Z",
              "content": "Alex Wong/Getty\r\n<ul><li>This post originally appeared in the Insider Today newsletter.</li><li>You can sign up for Business Insider's daily newsletter here.</li></ul>Hello! You could win a prize wor… [+7640 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "ReadWrite"
              },
              "author": "Sam Shedden",
              "title": "Wizz: Tinder-like app for teens removed from Apple App Store and Google Play Store",
              "description": "The teen-focused dating app Wizz has been taken down from both the Apple App Store and Google Play Store over […]\nThe post Wizz: Tinder-like app for teens removed from Apple App Store and Google Play Store appeared first on ReadWrite.",
              "url": "https://readwrite.com/wizz-tinder-like-app-for-teens-removed-from-apple-app-store-and-google-play-store/",
              "urlToImage": "https://readwrite.com/wp-content/uploads/2024/02/Untitled-design-9.jpg",
              "publishedAt": "2024-02-01T13:43:36Z",
              "content": "The teen-focused dating app Wizz has been taken down from both the Apple App Store and Google Play Store over allegations it facilitated the sexual exploitation of minors.\r\nLaunched in 2019 by French… [+2102 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "ReadWrite"
              },
              "author": "Paul McNally",
              "title": "Game-creating royalty Hideo Kojima working on new spy title",
              "description": "When the creator of legendary video game history such as Metal Gear Solid and Death Stranding drops into conversation that […]\nThe post Game-creating royalty Hideo Kojima working on new spy title appeared first on ReadWrite.",
              "url": "https://readwrite.com/game-creating-royalty-hideo-kojima-working-on-new-spy-title/",
              "urlToImage": "https://readwrite.com/wp-content/uploads/2024/02/2048px-Hideo_Kojima_20100702_Japan_Expo_1.jpg",
              "publishedAt": "2024-02-01T12:36:50Z",
              "content": "When the creator of legendary video game history such as Metal Gear Solid and Death Stranding drops into conversation that he is working on a new action espionage game set in a completely different g… [+1598 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hipertextual"
              },
              "author": "Rubén Chicharro",
              "title": "Apple Vision Pro: 13 secretos muy curiosos que no sabíamos hasta ahora",
              "description": "Las Apple Vision Pro saldrán a la venta el 2 de febrero, y si bien desde su lanzamiento no hemos parado de cubrir detalles que Apple no reveló durante la presentación del producto, como la tasa de refresco de las pantallas o los precios de las lentes ZEISS, h…",
              "url": "http://hipertextual.com/2024/02/apple-vision-pro-13-secretos-muy-curiosos-que-no-sabiamos-hasta-ahora",
              "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/06/DSC06393-scaled.jpg",
              "publishedAt": "2024-02-01T17:00:58Z",
              "content": "Las Apple Vision Pro saldrán a la venta el 2 de febrero, y si bien desde su lanzamiento no hemos parado de cubrir detalles que Apple no reveló durante la presentación del producto, como la tasa de re… [+5999 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hipertextual"
              },
              "author": "Gabriel Erard",
              "title": "Así fue la primera prueba de Tim Cook con un prototipo del Apple Vision Pro: “Era como un monstruo”",
              "description": "El lanzamiento del Apple Vision Pro está a la vuelta de la esquina. Mañana, viernes 2 de febrero, el ordenador espacial de la firma de Cupertino estará oficialmente disponible en Estados Unidos. Tim Cook, CEO de la compañía, ha aprovechado para recordar cómo …",
              "url": "http://hipertextual.com/2024/02/tim-cook-prototipo-apple-vision-pro",
              "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/02/Apple-WWDC23-Tim-Cook-with-Apple-Vision-Pro-scaled.jpg",
              "publishedAt": "2024-02-01T15:57:00Z",
              "content": "El lanzamiento del Apple Vision Pro está a la vuelta de la esquina. Mañana, viernes 2 de febrero, el ordenador espacial de la firma de Cupertino estará oficialmente disponible en Estados Unidos. Tim … [+4376 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hipertextual"
              },
              "author": "Gabriel Erard",
              "title": "Apple extiende su contrato con Qualcomm y crece la incertidumbre por el módem 5G propio para el iPhone",
              "description": "En la presentación de los resultados financieros del primer trimestre fiscal 2024, Qualcomm anunció que Apple ejecutó la \"opción unilateral\" de extender su acuerdo global de licencias de patentes hasta marzo de 2027. Una noticia que vuelve a generar incertidu…",
              "url": "http://hipertextual.com/2024/02/apple-extiende-vinculo-qualcomm-modem-5g-iphone",
              "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/09/iPhone-15-1-scaled.jpg",
              "publishedAt": "2024-02-01T19:46:08Z",
              "content": "En la presentación de los resultados financieros del primer trimestre fiscal 2024, Qualcommanunció que Apple ejecutó la \"opción unilateral\" de extender su acuerdo global de licencias de patentes hast… [+3268 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hipertextual"
              },
              "author": "Luis Miranda",
              "title": "Apple anuncia más de 600 apps optimizadas para las Vision Pro en su lanzamiento",
              "description": "Apple anunció que habrá más de 600 aplicaciones optimizadas con las Vision Pro para el día de lanzamiento. Los desarrolladores optimizaron la experiencia de uso para aprovechar las posibilidades que ofrece el lienzo infinito y otras prestaciones de las nuevas…",
              "url": "http://hipertextual.com/2024/02/apple-vision-pro-apps-optimizadas-visionos",
              "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/06/Apple-Vision-pro-scaled.jpg",
              "publishedAt": "2024-02-01T18:00:00Z",
              "content": "Apple anunció que habrá más de 600 aplicaciones optimizadas con las Vision Pro para el día de lanzamiento. Los desarrolladores optimizaron la experiencia de uso para aprovechar las posibilidades que … [+5056 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Hipertextual"
              },
              "author": "Luis del Barco",
              "title": "Apple anuncia unos moderados resultados trimestrales el día antes de la llegada de las Vision Pro",
              "description": "Apple acaba de dar a conocer los resultados correspondientes a su primer trimestre fiscal (Q1). Estos se corresponden con el último trimestre del año natural, que suele ser el periodo más fuerte de ventas para la empresa. En octubre, noviembre y diciembre la …",
              "url": "http://hipertextual.com/2024/02/apple-resultados-trimestrales-vision-pro",
              "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/06/Apple-WWDC23-Tim-Cook-with-Apple-Vision-Pro.jpg",
              "publishedAt": "2024-02-01T22:06:36Z",
              "content": "Apple acaba de dar a conocer los resultados correspondientes a su primer trimestre fiscal (Q1). Estos se corresponden con el último trimestre del año natural, que suele ser el periodo más fuerte de v… [+3303 chars]"
            },
            {
              "source": {
                "id": "time",
                "name": "Time"
              },
              "author": "Frank Bajak / AP",
              "title": "Journalists and Lawyers Hacked With Pegasus Spyware in Jordan, Probe Finds",
              "description": "Pegasus spyware was used in Jordan to hack at least 30 people, including journalists, lawyers, and activists, a probe Access Now found.",
              "url": "https://time.com/6590855/jordan-pegasus-spyware-hack/",
              "urlToImage": "https://api.time.com/wp-content/uploads/2024/02/GettyImages-1238318114.jpg?quality=85",
              "publishedAt": "2024-02-01T15:34:40Z",
              "content": "Israeli-made Pegasus spyware was used in Jordan to hack the cellphones of at least 30 people, including journalists, lawyers, human rights and political activists, the digital rights group Access Now… [+4250 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Xataka.com"
              },
              "author": "Javier Pastor",
              "title": "Hemos comparado el nuevo Bard con Gemini Pro con ChatGPT y Copilot: GPT-4 es mucho GPT-4",
              "description": "La aparición de ChatGPT hizo que Google pronto se diera cuenta de la amenaza que este chatbot planteaba para su negocio. En la empresa se activó un \"código rojo\", pero curiosamente eso no provocó lanzamientos apresurados.\n<!-- BREAK 1 -->\nEn lugar de eso, anu…",
              "url": "https://www.xataka.com/robotica-e-ia/hemos-comparado-nuevo-bard-gemini-pro-chatgpt-copilot-gpt-4-mucho-gpt-4",
              "urlToImage": "https://i.blogs.es/bb60f6/chat2/840_560.jpeg",
              "publishedAt": "2024-02-01T16:31:22Z",
              "content": "La aparición de ChatGPT hizo que Google pronto se diera cuenta de la amenaza que este chatbot planteaba para su negocio. En la empresa se activó un \"código rojo\", pero curiosamente eso no provocó lan… [+14429 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Xataka.com"
              },
              "author": "Ricardo Aguilar",
              "title": "Samsung Galaxy S24 Ultra, análisis: la IA era el ingrediente secreto para volver a ser el mejor Android del mercado",
              "description": "Si me preguntas cuál fue el mejor móvil Android en 2023 mi respuesta es tajante: el Samsung Galaxy S23 Ultra. Tras haber probado toda la gama alta del año pasado, bajo mi criterio no hubo un solo modelo que se le acercase en equilibrio general. El reto del nu…",
              "url": "https://www.xataka.com/analisis/samsung-galaxy-s24-ultra-analisis-caracteristicas-precio-especificaciones",
              "urlToImage": "https://i.blogs.es/5e1e66/samsung-galaxy-s24-ultra_2274-mejorado-nr/840_560.jpeg",
              "publishedAt": "2024-02-01T16:01:22Z",
              "content": "Si me preguntas cuál fue el mejor móvil Android en 2023 mi respuesta es tajante: el Samsung Galaxy S23 Ultra. Tras haber probado toda la gama alta del año pasado, bajo mi criterio no hubo un solo mod… [+43006 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Apple Newsroom"
              },
              "author": "John Gruber",
              "title": "PCalc, Fantastical, and Over 598 Other Native VisionOS Apps, Are Available in the App Store For Launch Day",
              "description": "Apple today announced incredible new apps that will be available on Apple Vision Pro beginning Friday, February 2.",
              "url": "https://www.apple.com/newsroom/2024/02/apple-announces-more-than-600-new-apps-built-for-apple-vision-pro/",
              "urlToImage": "https://www.apple.com/newsroom/images/2024/02/apple-announces-more-than-600-new-apps-built-for-apple-vision-pro/tile/Apple-Vision-Pro-app-experiences-visionOS-home-lp.jpg.og.jpg?202402012135",
              "publishedAt": "2024-02-01T23:52:55Z",
              "content": "February 1, 2024\r\nUPDATE\r\nApple announces more than 600 new apps built for Apple Vision Pro\r\nAll-new spatial apps built for Apple Vision Pro join more than 1 million compatible apps available on the … [+14333 chars]"
            },
            {
              "source": {
                "id": "ign",
                "name": "IGN"
              },
              "author": "Brian Barnett",
              "title": "Claim a Key for Hellcard, the Turn-Based Deckbuilding Rogue-Lite From Book of Demons Developer",
              "description": null,
              "url": "https://www.ign.com/articles/claim-a-key-for-hellcard-the-turn-based-deckbuilding-rogue-lite-from-book-of-demons-developer",
              "urlToImage": "https://assets-prd.ignimgs.com/2022/11/24/hellcardthumb-1669299176154.jpg?width=1280",
              "publishedAt": "2024-02-01T20:00:00Z",
              "content": "If you dig old-school turn-based fantasy games, I've got some great news for you. Hellcard is going to scratch that itch, and it adds quite a few strategic gameplay elements to the mix as well, keepi… [+10492 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Digital Trends"
              },
              "author": "Aaron Mamiit",
              "title": "The 5 best Apple Pencil alternatives in 2024",
              "description": "For the best Apple Pencil alternatives for your iPad, you should check out our recommendations here that range from budget-friendly tools to premium devices.",
              "url": "https://www.digitaltrends.com/mobile/best-apple-pencil-alternatives/",
              "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2021/06/logitech-crayon-digital-pencil.jpg?resize=1200%2C630&p=1",
              "publishedAt": "2024-02-01T12:50:52Z",
              "content": "Adam Doud / Digital Trends\r\nIf you want a tool that will help you take notes or create drawings on your iPad, you should know that there are other options aside from the Apple Pencil, Apple Pencil 2,… [+8235 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Digital Trends"
              },
              "author": "Alan Truly",
              "title": "The Vision Pro App Store has already tripled in size",
              "description": "Apple gave an update on the Vision Pro App Store, announcing that many more native apps were available than rumors suggested.",
              "url": "https://www.digitaltrends.com/computing/the-vision-pro-app-store-has-already-tripled-in-size/",
              "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/01/Apple-Vision-Pro-Environments-4.jpg?resize=1200%2C630&p=1",
              "publishedAt": "2024-02-01T18:12:35Z",
              "content": "The Voyager app on Vision Pro lets you see airports in 3D in real time.Apple\r\nApple just announced a surge in Vision Pro apps, nearly tripling the best estimates from late January. That’s good news f… [+2183 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Digital Trends"
              },
              "author": "Bryan M. Wolfe",
              "title": "I’m a lifelong iPhone user. Here’s what I think about the Samsung Galaxy S24",
              "description": "I'm a lifelong iPhone user and prefer Apple smartphones over other options. But I have a lot of thoughts on Samsung's Galaxy S24 series.",
              "url": "https://www.digitaltrends.com/mobile/im-an-iphone-user-what-i-think-about-samsung-galaxy-s24/",
              "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/01/galaxy-s24-ultra-screen-spen-leaves.jpg?resize=1200%2C630&p=1",
              "publishedAt": "2024-02-01T13:00:05Z",
              "content": "Andy Boxall / Digital Trends\r\nSamsung and Apple typically release new smartphones at different times of the year. Samsung usually does it early in the year, while Apple waits until the fall ahead of … [+6760 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Digital Trends"
              },
              "author": "Derek Malcolm",
              "title": "Cambridge Audio hopes for another hit with its new CXN100 network streamer",
              "description": "British audio device maker Cambridge Audio has unveiled its new flagship network music streamer, the redesigned CXN100.",
              "url": "https://www.digitaltrends.com/home-theater/cambridge-audio-launches-cxn100-network-streamer/",
              "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/01/cambridge-audio-cxn100-network-streamer-01.jpeg?resize=1200%2C630&p=1",
              "publishedAt": "2024-02-01T14:00:49Z",
              "content": "Cambridge Audio\r\nFans of Cambridge Audio’s award-winning network music players are about to get a treat, as the British audio maker today launched its CXN100 Network Player, the long-awaited successo… [+3552 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Honest-broker.com"
              },
              "author": "Ted Gioia",
              "title": "Nine Ugly Truths about Copyright and five predictions about its future",
              "description": "...and five predictions about its future",
              "url": "https://www.honest-broker.com/p/nine-ugly-truths-about-copyright",
              "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0ad2b685-2256-44af-afda-30788feef38b_1400x982.png",
              "publishedAt": "2024-02-01T17:18:17Z",
              "content": "They say nobody has a crystal ballbut thats not true. I bought one at a flea market years ago.\r\nIts a little dull and scratched nowadays, much like its owner, but I still peer into it. And even with … [+4237 chars]"
            },
            {
              "source": {
                "id": "hacker-news",
                "name": "Hacker News"
              },
              "author": null,
              "title": "Launch HN: Escape (YC W23) – Discover and secure all your APIs",
              "description": "Comments",
              "url": "https://news.ycombinator.com/item?id=39215779",
              "urlToImage": null,
              "publishedAt": "2024-02-01T13:38:42Z",
              "content": "Hey HN! Were Tristan and Antoine, co-founders of Escape (https://escape.tech). We use AI inspired by chess to help security engineers and developers discover and secure APIs created by their organiza… [+8710 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Gigazine.net"
              },
              "author": "@GIGAZINE",
              "title": "Apple Vision ProとMeta Quest 3を比較した貴重な本音レビューが明らかに、Apple Vision Proは買いなのか？",
              "description": "2024年2月2日(金)にアメリカで発売されるApple初のヘッドセット型空間コンピューティングデバイス「Apple Vision Pro」について、実際に先行で数日間使ったという人がオンライン掲示板サイト・Redditに、Apple Vision Proのおよそ7分の1の価格で入手できるスタンドアローン型MRヘッドセット「Meta Quest 3」と比較したレビューを投稿しています。続きを読む...",
              "url": "https://gigazine.net/news/20240201-apple-vision-pro-meta-quest-3/",
              "urlToImage": "https://i.gzn.jp/img/2024/02/01/apple-vision-pro-meta-quest-3/00_m.jpg",
              "publishedAt": "2024-02-01T10:00:00Z",
              "content": "202422()AppleApple Vision ProRedditApple Vision Pro71MRMeta Quest 3\r\n[Long post]Tried Vision Pro. Here's what I thought : OculusQuesthttps://old.reddit.com/r/OculusQuest/comments/1aetqks/long_posttri… [+873 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Johannes Schuster, Sebastian Trepesch",
              "title": "Pro & Contra: Vernachlässigt Apple das iPad?",
              "description": "Neue iPads wurden zuletzt im Oktober 2022 vorgestellt. Verliert Apple seine Tablets aus dem Auge?",
              "url": "https://www.heise.de/meinung/Pro-Contra-Vernachlaessigt-Apple-das-iPad-9608651.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/1/9/0/5/Pro_Contra_Vorlage_2000x1125-2-a2b65e91b9ec6208.jpg",
              "publishedAt": "2024-02-01T09:45:00Z",
              "content": "Im ganzen Jahr 2023 gab es keine einzige iPad-Neuvorstellung. Die jüngsten Modelle stellte Apple im Oktober 2022 vor. Das letzte iPad Air stammt vom März 2022, das iPad mini gar vom September 2021. D… [+3515 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Malte Kirchner",
              "title": "homeOS: Apple-TV-Firmware enthält Hinweise auf neues Betriebssystem",
              "description": "Apple hat in der ersten Beta von tvOS 17.4 Hinweise auf ein neues Betriebssystem namens homeOS versteckt. Was es damit auf sich hat.",
              "url": "https://www.heise.de/news/homeOS-Apple-TV-Firmware-enthaelt-Hinweise-auf-neues-Betriebssystem-9615513.html",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/5/5/2/5/homepod2-3a0f6816c3948ae5.jpg",
              "publishedAt": "2024-02-01T11:50:00Z",
              "content": "Es gibt neue Anzeichen, dass Apple an einem Betriebssystem für Smart-Home-Geräte namens homeOS arbeitet. Nennungen des Begriffs in Dateien der ersten Betaversion von tvOS 17.4 deuten darauf hin, dass… [+2325 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Leo Becker",
              "title": "Was sich in Europa für iPhone-Nutzer jetzt ändert | Mac & i-Podcast",
              "description": "App-Läden, Browser-Auswahl, offenes NFC und mehr: Apple muss das iPhone in der EU grundlegend öffnen. Was das für Nutzer und Entwickler konkret bedeutet.",
              "url": "https://www.heise.de/news/Was-sich-in-Europa-fuer-iPhone-Nutzer-jetzt-aendert-Mac-i-Podcast-9615543.html",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/5/5/4/0/euiphone169-7aa8a6897cc4cb78.jpg",
              "publishedAt": "2024-02-01T11:56:00Z",
              "content": "Seit über einem Jahr hat sich Apple still auf das Gesetz über digitale Märkte in Europa vorbereitet jetzt ist die Katze aus dem Sack: iOS 17.4 öffnet das Betriebssystem erstmals für alternative App-M… [+1621 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Wilhelm Drehling",
              "title": "heise+ | Nullchiffre: Wie man Botschaften verschleiert",
              "description": "Die Nullchiffre setzt auf das Können und die Kreativität des Verfassers. Das Ergebnis sind normal aussehende Texte, in denen eine Botschaft versteckt ist.",
              "url": "https://www.heise.de/hintergrund/Nullchiffre-Wie-man-Botschaften-verschleiert-9604838.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/2/9/8/9/5/shutterstock_190449881-f6cf5cc513acbf11.jpg",
              "publishedAt": "2024-02-01T16:00:00Z",
              "content": "Inhaltsverzeichnis\r\nMehr zum Thema Verschlüsselung\r\nSie starrt auf den Boden \"Nein, Otis! Wieso?!\" Traurig blickt Tanja hinab auf ihren Kater, der gierig eine Elster durch das Fenster anschaut. Neben… [+4314 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Holger Zelder",
              "title": "heise-Angebot: Mac & i 1/24: iPhone individualisieren, Zeitmanagement, 40 Jahre Mac",
              "description": "iPhone individuell • Effizientes Zeitmanagement • 40 Jahre Macintosh • Loslegen mit Kurzbefehlen • AirPods-Akkutausch",
              "url": "https://www.heise.de/news/Mac-i-1-24-iPhone-individualisieren-Zeitmanagement-40-Jahre-Mac-9614987.html",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/5/2/4/7/Titelbild_Heftanku__ndigung_Mac__amp__i_2024-01_A-dd90c5dee13d585f.jpg",
              "publishedAt": "2024-02-01T11:55:00Z",
              "content": "Inhaltsverzeichnis\r\nAb dem 2. Februar gibt es die Mac &amp; i 1/2024 im gut sortierten Zeitschriftenhandel. Das Heft können Sie zudem im heise Shop bestellen gedruckt (bis einschließlich zum 9. Febru… [+3103 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Andrijan Möcker",
              "title": "heise+ | So können Sie mit Node-Red einfach Smart-Home-Geräte von Tuya ohne Cloud steuern",
              "description": "Die Tuya-Firmware bringt leider einige Datenschutzrisiken mit sich und kann kaum ausgetausch werden, Tuyas eigene Schnittstelle entschärft jedoch das Problem.",
              "url": "https://www.heise.de/ratgeber/So-koennen-Sie-mit-Node-Red-einfach-Smart-Home-Geraete-von-Tuya-ohne-Cloud-steuern-9602715.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/2/8/7/9/1/ct0424Tuyalokal_RUDOLF_A_BLAHA_128143-amo-online-821315fec565ed97.jpg",
              "publishedAt": "2024-02-01T10:00:00Z",
              "content": "Inhaltsverzeichnis\r\nKaffeemaschinen, Schaltsteckdosen, Leuchtmittel, Heizlüfter, Luftbefeuchter, Klimaanlagen, Wärmepumpen, beheizte Toilettenbrillen und viele weitere Geräte: Der chinesische Smart-H… [+4382 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Marvin Strathmann",
              "title": "heise+ | Copilot in Office: KI-Helfer in Excel, Word, Powerpoint und Outlook ausprobiert",
              "description": "Microsofts KI-Assistent Copilot ist nun für mehr Office-365-Abonnenten verfügbar. Wir haben Copilot in Excel, Word, Powerpoint und Outlook ausprobiert.",
              "url": "https://www.heise.de/tests/Copilot-in-Office-KI-Helfer-in-Excel-Word-Powerpoint-und-Outlook-ausprobiert-9612021.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/3/6/6/7/aufmacher-689a8cf98f4b6a4c.jpg",
              "publishedAt": "2024-02-01T06:30:00Z",
              "content": "Inhaltsverzeichnis\r\nBüroarbeit besteht oft aus langweiliger und sich wiederholender Arbeit: Man muss Präsentationen erstellen, Excel-Tabellen analysieren oder professionelle Mails verfassen. Microsof… [+4613 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Jacek Galowicz",
              "title": "heise+ | Paketmanager Nix ausprobiert, Teil 3: Bedarfsgerecht paketieren",
              "description": "Nix verpackt Programme für andere Nix-Nutzer sowie in Binaries und Docker-Container. Wir zeigen, wie Sie durch binäre Caches die Arbeit mit Nix beschleunigen.",
              "url": "https://www.heise.de/ratgeber/Paketmanager-Nix-ausprobiert-Teil-3-Bedarfsgerecht-paketieren-9611393.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/3/3/3/5/ct0424nix_paket_128124_syt_uwei_online-ec0421b40cb3c818.jpg",
              "publishedAt": "2024-02-01T14:00:00Z",
              "content": "Inhaltsverzeichnis\r\nDie ersten beiden Artikel zum Paketbau mit Nix mündeten in einer \"Flake\"-Datei, die ein kleines C++- und ein Rust-Beispielprogrämmchen verwaltet. Nix-Nutzer können die Programme d… [+4382 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Daniel Herbig",
              "title": "Outdoor-Smartphones: Bullitt Group macht dicht",
              "description": "Die britische Bullitt Group baute widerstandsfähige Handys für CAT und Motorola. Nun musste die Firma offenbar schließen.",
              "url": "https://www.heise.de/news/Outdoor-Smartphones-Bullitt-Group-macht-dicht-9615128.html",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/5/3/2/2/Cat_S75_-_Dust_Proof-ff18c3d44cbf408e.jpg",
              "publishedAt": "2024-02-01T08:49:00Z",
              "content": "Die britische Firma Bullitt Group schließt offenbar. Das berichtet das Branchenmagazin Mobile World Live auf Basis von mehreren LinkedIn-Einträgen früherer Angestellter. Demnach hat der Hersteller vo… [+1776 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Kristina Beer",
              "title": "Mark Zuckerberg entschuldigt sich bei geschädigten Familien",
              "description": "Die Chefs großer Social-Media-Firmen wurden vor den US-Kongress geladen. Zuckerberg entschuldigte sich bei anwesenden Familien für Schäden durch seine Apps.",
              "url": "https://www.heise.de/news/Mark-Zuckerberg-entschuldigt-sich-bei-geschaedigten-Familien-9615020.html",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/5/2/6/4/shutterstock_627623021-0594da79141213eb.jpg",
              "publishedAt": "2024-02-01T06:24:00Z",
              "content": "Facebook-Gründer Mark Zuckerberg entschuldigte sich in einer Anhörung im US-Senat bei Familien, deren Kinder durch die Nutzung von Online-Plattformen seines Konzerns zu Schaden gekommen sind. Zuckerb… [+2841 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "heise online"
              },
              "author": "Dirk Knop",
              "title": "\"Ändere Dein Passwort\"-Tag: Besser Passkeys oder Passwort-Manager nutzen",
              "description": "Alle Jahre wieder am 1. Februar sorgt der \"Ändere Dein Passwort\"-Tag für Grummeln in der Redaktion.  Wir empfehlen: Besser alte Gewohnheiten ändern!",
              "url": "https://www.heise.de/hintergrund/Aendere-Dein-Passwort-Tag-Besser-Passkeys-oder-Passwort-Manager-nutzen-9614565.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
              "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/5/0/2/5/shutterstock_1434313295-a5ba574df94aa2c5.jpg",
              "publishedAt": "2024-02-01T05:48:00Z",
              "content": "Am ersten Februar eines jeden Jahres findet er statt, der \"Ändere Dein Passwort\"-Tag. Der ist gut gemeint, aber schon namentlich nicht gut gemacht. Ein anlassloser Passwortwechsel bringt nichts außer… [+3529 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Chance Miller",
              "title": "Tim Cook says Apple is focused on appealing the Apple Watch ban, not settling with Masimo",
              "description": "Apple’s patent battle with Masimo is far from over. As it stands right now, Apple is still selling the Apple Watch Series 9 and Ultra 2 in the United States, but with the contested blood oxygen feature disabled. \n\n\n\nIn a new interview today, Apple CEO Tim Coo…",
              "url": "https://9to5mac.com/2024/02/01/tim-cook-masimo-apple-watch-settlement/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/ECG-Apple-Watch.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T23:38:20Z",
              "content": "Apple’s patent battle with Masimo is far from over. As it stands right now, Apple is still selling the Apple Watch Series 9 and Ultra 2 in the United States, but with the contested blood oxygen featu… [+1332 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Zac Hall",
              "title": "The Vision Pro countdown clock has officially started on Apple․com",
              "description": "Not hyped enough about Apple Vision Pro yet? Apple has cranked up the anticipation with a countdown clock on apple․com that tells you how soon Apple Vision Pro will officially launch.\n\n\n\n more…",
              "url": "https://9to5mac.com/2024/01/31/vision-pro-countdown-clock/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/countdown-vision-pro.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T04:22:03Z",
              "content": "Not hyped enough about Apple Vision Pro yet? Apple has cranked up the anticipation with a countdown clock on applecom that tells you how soon Apple Vision Pro will officially launch.\r\nThe Clock of Sp… [+1322 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Michael Potuck",
              "title": "Apple Arcade Guide: Here’s everything available [New: BEAST]",
              "description": "Apple Arcade launched with close to 100 titles and the service is seeing new games added almost every week with over 200 games now in the library. Follow along with our guide on all the available Apple Arcade games plus the latest releases.\n\n\n\n more…",
              "url": "https://9to5mac.com/2024/02/01/apple-arcade-games/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/apple-arcade-announces-20-new-games.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T18:00:00Z",
              "content": "Apple Arcade launched with close to 100 titles and the service is seeing new games added almost every week with over 200 games now in the library. Follow along with our guide on all the available App… [+107352 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Filipe Espósito",
              "title": "Apple to let developers request consultation on EU changes coming to the App Store",
              "description": "Apple recently announced a series of measures to comply with the European Union’s Digital Markets Act (DMA) antitrust legislation, which includes allowing alternative app stores on the iPhone. To make sure developers understand what’s changing, Apple will let…",
              "url": "https://9to5mac.com/2024/02/01/apple-developers-consultation-eu-app-store/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/app-store-eu.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T21:41:21Z",
              "content": "Apple recently announced a series of measures to comply with the European Union’s Digital Markets Act (DMA) antitrust legislation, which includes allowing alternative app stores on the iPhone. To mak… [+1257 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Filipe Espósito",
              "title": "Sharing your Apple Vision Pro with your family won’t be a seamless process",
              "description": "Apple Vision Pro is an extremely personal and individual device. Even so, Apple has created a “Guest User” mode so that you can let your friends and family try out the headset without accessing your personal data. However, sharing your Vision Pro with others …",
              "url": "https://9to5mac.com/2024/01/31/sharing-apple-vision-pro-with-family/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/vision-pro-tour.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T01:17:20Z",
              "content": "Apple Vision Pro is an extremely personal and individual device. Even so, Apple has created a “Guest User” mode so that you can let your friends and family try out the headset without accessing your … [+1486 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Filipe Espósito",
              "title": "Mark Zuckerberg explains why there will be no Meta app store for iPhone in the EU",
              "description": "Many developers and tech companies didn’t react well to the changes proposed by Apple last month to comply with the European Union’s Digital Markets Act (DMA) antitrust legislation, and Mark Zuckerberg is on that team. The Meta CEO said on Thursday that he do…",
              "url": "https://9to5mac.com/2024/02/01/zuckerberg-meta-apple-terms-in-the-eu/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/05/meta-apple.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T23:33:23Z",
              "content": "Many developers and tech companies didn’t react well to the changes proposed by Apple last month to comply with the European Union’s Digital Markets Act (DMA) antitrust legislation, and Mark Zuckerbe… [+2563 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Zac Hall",
              "title": "Bug bounty hunter gives rare peek at Apple’s special research iPhone for security experts",
              "description": "Apple started shipping special research iPhone hardware to security experts in 2020. Naturally, security researchers have been mostly coy about sharing the specifics of what Apple calls “rooted” hardware. Still, there are some program participants who grant a…",
              "url": "https://9to5mac.com/2024/02/01/apple-security-research-device-swag/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/iPhone-Security-Research.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T20:42:01Z",
              "content": "Apple started shipping special research iPhone hardware to security experts in 2020. Naturally, security researchers have been mostly coy about sharing the specifics of what Apple calls “rooted” hard… [+2274 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Filipe Espósito",
              "title": "Apple Vision Pro firmware can be recovered with the help of an iPhone",
              "description": "We’re only a few days away from the official launch of the Apple Vision Pro in the U.S., and we’ve been learning a lot about the device over the last few days as Apple has invited some journalists to try it out in advance. Some users have been wondering how t…",
              "url": "https://9to5mac.com/2024/01/31/apple-vision-pro-firmware-recovery-iphone/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/Apple-WWDC23-event-photos-Apple-Vision-Pro.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T01:48:20Z",
              "content": "We’re only a few days away from the official launch of the Apple Vision Pro in the U.S., and we’ve been learning a lot about the device over the last few days as Apple has invited some journalists to… [+1420 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Zac Hall",
              "title": "Apple announces Q1 2024 earnings, beating expectations with $119.58 billion revenue",
              "description": "Apple has its fiscal year 2024 Q1 earnings results. The company reports $119.58 billion in revenue during the three-month period.\n\n\n\n more…",
              "url": "https://9to5mac.com/2024/02/01/apple-earnings-q1-2024/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/apple-earnings.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T21:32:06Z",
              "content": "Apple has its fiscal year 2024 Q1 earnings results. The company reports $119.58 billion in revenue during the three-month period. Analysts expected revenue around $117.91 billion. Apple reported reve… [+2591 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Ben Lovejoy",
              "title": "As a new optical Apple product arrives, another is declared obsolete",
              "description": "As one optical Apple product makes its debut, the company has declared another one obsolete: The last MacBook Pro with an optical drive … \n\n\n\n more…",
              "url": "https://9to5mac.com/2024/02/01/optical-apple-product-obsolete/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/optical-Apple-product-obsolete.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T14:06:00Z",
              "content": "As one optical Apple product makes its debut, the company has declared another one obsolete: The last MacBook Pro with an optical drive … \r\nArsTechnica spotted the change in status.\r\nSometimes, it’s … [+614 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Benjamin Mayo",
              "title": "Tim Cook teases Apple AI announcements coming “later this year”, amid iOS 18 rumors",
              "description": "During the quarterly earnings call today, Apple CEO Tim Cook made a rare comment about the future of Apple’s products, referencing the company’s investments in artificial intelligence. \n\n\n\nCook said that Apple is “excited to share the details of our ongoing w…",
              "url": "https://9to5mac.com/2024/02/01/tim-cook-apple-ai-ios-18/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/how-to-stop-apple-from-listening-siri-recordings.jpeg.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T22:17:41Z",
              "content": "During the quarterly earnings call today, Apple CEO Tim Cook made a rare comment about the future of Apple’s products, referencing the company’s investments in artificial intelligence. \r\nCook said th… [+1897 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Zac Hall",
              "title": "Meta confirms spatial video playback coming to Quest one day before Vision Pro launch",
              "description": "A long, long time ago (last Friday) we shared that Meta appeared to be planning to officially support spatial videos shot on iPhone without workarounds. Now, on the eve of Apple Vision Pro hitting stores, Meta has made it real. will indeed gain spatial suppor…",
              "url": "https://9to5mac.com/2024/02/01/meta-quest-iphone-spatial-video/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/iphone-15-pro-spatial-video.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T18:18:05Z",
              "content": "A long, long time ago (last Friday) we shared that Meta appeared to be planning to officially support spatial videos shot on iPhone without workarounds. Now, on the eve of Apple Vision Pro hitting st… [+1256 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Filipe Espósito",
              "title": "Apple extends deal with Qualcomm until 2027 as it delays its own 5G modems",
              "description": "Apple announced last year that it would extend its agreement with Qualcomm to continue using the company’s 5G modems until 2026. However, as Apple’s plans to build its own modems have been thwarted, it will continue to use Qualcomm’s modems in the iPhone unti…",
              "url": "https://9to5mac.com/2024/01/31/apple-deal-qualcomm-2027-5g-modem/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/11/iphone-5g-india.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T02:24:20Z",
              "content": "Apple announced last year that it would extend its agreement with Qualcomm to continue using the company’s 5G modems until 2026. However, as Apple’s plans to build its own modems have been thwarted, … [+1532 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Zac Hall",
              "title": "Things is going spatial with the full project manager experience on Apple Vision Pro",
              "description": "Culture Code’s Things, the tasks system I’ve relied on for over a decade, is going spatial for Apple Vision Pro. The standalone visionOS app brings the full project management experience to Apple’s first spatial computer.\n\n\n\n more…",
              "url": "https://9to5mac.com/2024/02/01/things-apple-vision-pro/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Things-3-for-Vision-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T20:01:38Z",
              "content": "Culture Code’s Things, the tasks system I’ve relied on for over a decade, is going spatial for Apple Vision Pro. The standalone visionOS app brings the full project management experience to Apple’s f… [+1074 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Ben Lovejoy",
              "title": "Hundreds of new Vision Pro apps available on launch day, says Apple",
              "description": "More than 600 new Vision Pro apps will be available on launch day, says Apple – adding to the million plus iPad apps that also run on the device.\n\n\n\nThe company says that the new apps will change the way we approach everything from entertainment to productivi…",
              "url": "https://9to5mac.com/2024/02/01/new-vision-pro-apps/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/600-new-Vision-Pro-apps.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T14:19:20Z",
              "content": "More than 600 new Vision Pro apps will be available on launch day, says Apple adding to the million plus iPad apps that also run on the device.\r\nThe company says that the new apps will change the way… [+2852 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Chance Miller",
              "title": "Apple says the EU accounts for just 7% of its global App Store revenue",
              "description": "During Apple’s Q1 2024 earnings call with analysts and investors today, CEO Tim Cook and CFO Luca Maestri commented on the company’s recently-announced App Store changes in the European Union. \n\n\n\nMaestri revealed a notable statistic about the importance of A…",
              "url": "https://9to5mac.com/2024/02/01/apple-says-the-eu-accounts-for-just-7-of-its-global-app-store-revenue/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/app-store-eu.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T23:05:30Z",
              "content": "During Apple’s Q1 2024 earnings call with analysts and investors today, CEO Tim Cook and CFO Luca Maestri commented on the company’s recently-announced App Store changes in the European Union. \r\nMaes… [+1651 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Zac Hall",
              "title": "These are the new emoji coming in iOS 17.4",
              "description": "Apple is updating the iPhone with even more emoji characters. iOS 17.4 introduces new ways to express approval or denial, break through the chains, rise from the ashes, or just express that limes are superior to lemons. There’s also a mushroom that looks less…",
              "url": "https://9to5mac.com/2024/02/01/new-emoji-ios-17/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/emoji-17-4.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T18:00:00Z",
              "content": "Apple is updating the iPhone with even more emoji characters. iOS 17.4 introduces new ways to express approval or denial, break through the chains, rise from the ashes, or just express that limes are… [+648 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Zac Hall",
              "title": "Screen Time is broken",
              "description": "Last month I wrote about two features that I consider missing from Apple’s Screen Time parental controls. In retrospect, what I should have written is how Screen Time is broken. I thought the next software update would fix things.\n\n\n\n more…",
              "url": "https://9to5mac.com/2024/02/01/screen-time-is-broken-2/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/screen-time-broken.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T19:17:04Z",
              "content": "Last month I wrote about two features that I consider missing from Apple’s Screen Time parental controls. In retrospect, what I should have written is how Screen Time is broken. I thought the next so… [+3673 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Seth Kurkowski",
              "title": "9to5Mac Daily: February 1, 2024 – More iOS 17.4 changes, iPhone shipment reports",
              "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\n\n\n\nConnect with us in the off…",
              "url": "https://9to5mac.com/2024/02/01/daily-february-1-2024/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T18:39:43Z",
              "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+783 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Chance Miller",
              "title": "EU App Store sideloading and commission changes, Vision Pro reviews, iOS 17.4 features",
              "description": "Benjamin and Chance deep dive into all the App Store changes announced in response to the EU Digital Markets Act, and debate whether anyone is incentivized to make the leap. Also, the first Apple Vision Pro reviews have dropped ahead of its Friday release, an…",
              "url": "https://9to5mac.com/2024/02/01/happy-hour-471/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/04/9to5mac-happy-hour-lead1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T19:23:14Z",
              "content": "Benjamin and Chance deep dive into all the App Store changes announced in response to the EU Digital Markets Act, and debate whether anyone is incentivized to make the leap. Also, the first Apple Vis… [+1358 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Rikka Altland",
              "title": "iPad Air 5 clearance starts at $450, iPhone 15 promo, official MagSafe leather wallet $45, more",
              "description": "A new month means a new batch of fresh Apple deals, and all of today’s best come headlined by Apple’s latest iPad Air 5. Various configurations start from $450 and come joined by a chance to score iPhone 15 for just a penny thanks to this Amazon and Boost Inf…",
              "url": "https://9to5mac.com/2024/02/01/ipad-air-5-iphone-15-best-apple-deals/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/ipad-air-5-iphone-15-deals.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T16:46:28Z",
              "content": "A new month means a new batch of fresh Apple deals, and all of today’s best come headlined by Apples latest iPad Air 5. Various configurations start from $450 and come joined by a chance to score iPh… [+5134 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Ben Lovejoy",
              "title": "Tim Cook talks Vision Pro, and his secret prototype experience many years ago",
              "description": "In a new piece in Vanity Fair, Tim Cook talks Vision Pro – including his first ever experience of using an early prototype of the device in the company’s secretive design block.\n\n\n\nThe piece doesn’t say when that was, only that it was before Apple moved to it…",
              "url": "https://9to5mac.com/2024/02/01/tim-cook-talks-vision-pro/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Tim-Cook-talks-Vision-Pro-secret-prototype.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T13:16:21Z",
              "content": "In a new piece in Vanity Fair,Tim Cook talks Vision Pro including his first ever experience of using an early prototype of the device in the company’s secretive design block.\r\nThe piece doesn’t say w… [+2623 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Chance Miller",
              "title": "Abode debuts new smart lock with a retrofit design, but HomeKit support is missing",
              "description": "Popular smart home is venturing into the smart lock business for the first time. The new Abode Lock features a retrofit design that the company says works with any latch-style deadbolt and doesn’t require any changes to the door hardware itself.\n\n\n\nUnfortunat…",
              "url": "https://9to5mac.com/2024/02/01/abode-new-smart-lock-no-homekit-sad/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/01/Abode-Lock-on-door-with-handle-deadbolt-out.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T15:00:00Z",
              "content": "Popular smart home security company Abode is venturing into the smart lock business for the first time. The new Abode Lock features a retrofit design that the company says works with any latch-style … [+5826 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Ben Lovejoy",
              "title": "App Store changes: EU is watching, and ready to ‘take strong action’",
              "description": "There’s been much discussion of Apple’s proposed App Store changes, and whether or not they will satisfy antitrust regulators.\n\n\n\nThe EU has so far been non-committal, but has said that it will be examining them closely, and won’t hesitate to “take strong act…",
              "url": "https://9to5mac.com/2024/02/01/app-store-changes-eu-response/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/App-Store-changes.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T12:04:36Z",
              "content": "There’s been much discussion of Apple’s proposed App Store changes, and whether or not they will satisfy antitrust regulators.\r\nThe EU has so far been non-committal, but has said that it will be exam… [+1946 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Michael Potuck",
              "title": "Are you happy with your iPhone 15 Pro/Max battery life? [Poll]",
              "description": "We saw a report this week that iPhone 15 Pro customer satisfaction has dropped considerably since launching last September – low enough that the iPhone 15/Plus is now rated higher by users. Why? One of the top reasons is disappointment with the battery. So ho…",
              "url": "https://9to5mac.com/2024/02/01/happy-with-iphone-15-pro-battery-life-poll/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/iphone-battery-mah-capacity-list.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T18:06:27Z",
              "content": "We saw a report this week that iPhone 15 Pro customer satisfaction has dropped considerably since launching last September low enough that the iPhone 15/Plus is now rated higher by users. Why? One of… [+1382 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Ben Lovejoy",
              "title": "Senate hearing on social media: Zuckerberg apologises to families; bizarre racism",
              "description": "The Senate hearing on social media saw Meta CEO Mark Zuckerberg apologise to families who hold social media responsible for children who harmed themselves, including some who took their own lives.\n\n\n\nIt also saw some bizarre racism by one senator who apparent…",
              "url": "https://9to5mac.com/2024/02/01/senate-hearing-on-social-media/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Senate-hearing-on-social-media.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T13:51:22Z",
              "content": "The Senate hearing on social media saw Meta CEO Mark Zuckerberg apologise to families who hold social media responsible for children who harmed themselves, including some who took their own lives.\r\nI… [+2496 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "9to5Mac"
              },
              "author": "Michael Potuck",
              "title": "iPhone 15 camera vs 15 Pro camera: What sets them apart?",
              "description": "Many of the differences between the iPhone 15 and 15 Pro come down to the new camera systems. As the name implies, the Pro devices offer the most advanced cameras but 15 and 15 Plus still have very capable systems. However, new this year, iPhone 15 Pro Max st…",
              "url": "https://9to5mac.com/2024/02/01/iphone-15-camera-vs-15-pro-camera/",
              "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-camera-vs-15-pro-camera-comparison.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
              "publishedAt": "2024-02-01T19:10:00Z",
              "content": "Many of the differences between the iPhone 15 and 15 Pro come down to the new camera systems. As the name implies, the Pro devices offer the most advanced cameras but 15 and 15 Plus still have very c… [+10322 chars]"
            },
            {
              "source": {
                "id": "vice-news",
                "name": "Vice News"
              },
              "author": "Nicolette Accardi, HP",
              "title": "Small Kitchen? Le Creuset’s Tiny Cocotte Does Everything a Dutch Oven Can",
              "description": "Le Creuset's small-space-friendly cocotte is made with the same high-quality materials as its big boys, and is perfect for meals for one or two.",
              "url": "https://www.vice.com/en/article/wxjypb/le-creuset-cocotte-review",
              "urlToImage": "https://video-images.vice.com/articles/65bbf95b4846ce7565dc4de6/lede/1706822004503-cockotte.png?image-resize-opts=Y3JvcD0xeHc6MXhoO2NlbnRlcixjZW50ZXImcmVzaXplPTEyMDA6KiZyZXNpemU9MTIwMDoq",
              "publishedAt": "2024-02-01T22:36:37Z",
              "content": "VICE may receive a commission if you buy products through the links on our site. Read morehere.\r\nWhenever Im at my friends house for social gatheringswhether theyre dinner parties or less kitchen-cen… [+5452 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MarketWatch"
              },
              "author": "Barbara Kollmeyer",
              "title": "This fund is shorting Apple — and just bet against another popular AI stock",
              "description": "Bireme Capital say they are shorting Apple, which reports results after the close on Thursday.",
              "url": "https://www.marketwatch.com/story/this-fund-is-shorting-apple-and-just-bet-against-another-popular-ai-stock-a6967b20",
              "urlToImage": "https://images.mktw.net/im-38439506/social",
              "publishedAt": "2024-02-01T11:38:00Z",
              "content": "Its looking like an upbeat start to fearful February as investors look past a hawkish Fed and put their faith in the last of Big Tech results coming after the close.An immaculate landing is fully pri… [+7357 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MarketWatch"
              },
              "author": "Jamie Chisholm",
              "title": "S&P 500 futures bounce after two-day sell-off as Apple, Amazon and Meta earnings loom",
              "description": "U.S. stock futures rose early Thursday ahead of earnings from three of the Magnificent 7: Apple, Amazon and Meta.",
              "url": "https://www.marketwatch.com/story/s-p-500-futures-bounce-after-two-day-sell-off-as-apple-amazon-and-meta-earnings-loom-c1db8ef1",
              "urlToImage": "https://images.mktw.net/im-34248748/social",
              "publishedAt": "2024-02-01T10:07:00Z",
              "content": "U.S. stock futures rose early Thursday ahead of earnings from three of the Magnificent 7: Apple, Amazon.com and Meta Platforms.On Wednesday, the Dow Jones Industrial Average \r\n DJIA\r\n fell 317 points… [+3427 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MarketWatch"
              },
              "author": "Therese Poletti",
              "title": "Meta stuns Wall Street with its first dividend. Amazon and Alphabet could be next.",
              "description": "Meta likely just made Silicon Valley’s most monumental dividend decision since Apple reinstated its payout over a decade ago.",
              "url": "https://www.marketwatch.com/story/meta-stuns-wall-street-with-its-first-dividend-amazon-and-alphabet-could-be-next-b8b2349e",
              "urlToImage": "https://images.mktw.net/im-818987/social",
              "publishedAt": "2024-02-01T23:41:00Z",
              "content": "Meta Platforms Inc. surprised Wall Street on Thursday with its first-ever dividend, a move thats likely Silicon Valleys most monumental dividend decision since Apple Inc. reinstated its payout over a… [+2661 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MarketWatch"
              },
              "author": "Mike Murphy",
              "title": "Max is back on top: Here’s what’s worth streaming in February 2024",
              "description": "February boasts the final season of “Curb Your Enthusiasm,” the return of network shows like “Abbott Elementary” and “Ghosts” and blockbusters like “Mr. & Mrs. Smith” and “Shōgun.”",
              "url": "https://www.marketwatch.com/story/max-is-back-on-top-heres-whats-worth-streaming-in-february-2024-058faede",
              "urlToImage": "https://images.mktw.net/im-39459940/social",
              "publishedAt": "2024-02-01T12:01:00Z",
              "content": "Its become tiresome to hear ever-more-common complaints that between price hikes, consolidation and fewer shows, streaming has basically become cable.It has not. Its not going to. For consumers, stre… [+16825 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MarketWatch"
              },
              "author": "Tomi Kilgore",
              "title": "Why you can count on the Dow making changes in February",
              "description": "Investors can count on the Dow Jones Industrial Average changing its members next month, for the first time in nearly four years, for several reasons. The question is, who’s out and who’s in?",
              "url": "https://www.marketwatch.com/story/why-you-can-count-on-the-dow-making-changes-in-february-6334fda9",
              "urlToImage": "https://images.mktw.net/im-47719801/social",
              "publishedAt": "2024-02-01T16:49:00Z",
              "content": "Investors can count on the Dow Jones Industrial Average changing its members next month, for the first time in nearly four years, for several reasons. The question is, whos out and whos in?How and wh… [+6728 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "MarketWatch"
              },
              "author": "Claudia Assis, Ciara Linnane",
              "title": "Can Elon Musk do ‘whatever he wants’? Why moving Tesla out of Delaware may spook investors.",
              "description": "Tesla Inc. Chief Executive Elon Musk’s push to reincorporate the electric-vehicle maker in Texas after a legal defeat in Delaware may have broader implications for the company.",
              "url": "https://www.marketwatch.com/story/can-elon-musk-do-whatever-he-wants-why-moving-tesla-out-of-delaware-may-spook-investors-d07e20a8",
              "urlToImage": "https://images.mktw.net/im-73882240/social",
              "publishedAt": "2024-02-01T18:16:00Z",
              "content": "Tesla Inc. Chief Executive Elon Musks push to reincorporate the electric-vehicle maker in Texas after a legal defeat in Delaware may have broader implications for the company.The move could reinforce… [+6780 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "AppleInsider"
              },
              "author": "news@appleinsider.com (William Gallagher)",
              "title": "Inside Apple Karntner Strabe: Austria's first and only Apple Store",
              "description": "Situated between the Vienna State Opera and the city's famous St. Stephen's Cathedral, Apple Karntner Strabe is a deceptively small boutique store. Take a look inside.Apple Karntner Strabe in ViennaApple Stores are always noteworthy because the company appear…",
              "url": "https://appleinsider.com/articles/24/02/01/inside-apple-karntner-strabe-austrias-first-and-only-apple-store",
              "urlToImage": "https://photos5.appleinsider.com/gallery/57887-118935-000-lead-Apple-Karntner-Strabe-xl.jpg",
              "publishedAt": "2024-02-01T11:23:54Z",
              "content": "Apple Karntner Strabe in Vienna\r\nSituated between the Vienna State Opera and the city's famous St. Stephen's Cathedral, Apple Karntner Strabe is a deceptively small boutique store. Take a look inside… [+4115 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "AppleInsider"
              },
              "author": "news@appleinsider.com (Wesley Hilliard)",
              "title": "Apple won't license Masimo's patents despite Apple Watch import ban",
              "description": "Apple CEO Tim Cook says there isn't any intention to license Masimo's blood oxygen detection to end the Apple Watch import ban.Apple Watch Series 9Masimo has been embroiled in a patent lawsuit that most recently resulted in an import ban for Apple Watches wit…",
              "url": "https://appleinsider.com/articles/24/02/01/apple-wont-license-masimos-patents-despite-apple-watch-import-ban",
              "urlToImage": "https://photos5.appleinsider.com/gallery/58412-118986-Series-9-back-4-xl.jpg",
              "publishedAt": "2024-02-01T21:54:02Z",
              "content": "Apple Watch Series 9\r\nApple CEO Tim Cook says there isn't any intention to license Masimo's blood oxygen detection to end the Apple Watch import ban.\r\nMasimo has been embroiled in a patent lawsuit th… [+1231 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "AppleInsider"
              },
              "author": "news@appleinsider.com (Wesley Hilliard)",
              "title": "Apple Vision Pro immersive titles have begun showing up in Apple TV app ahead of launch",
              "description": "Apple's 8K immersive experience series have started populating in the Apple TV app, though you'll need the Apple Vision Pro to interact.Apple Vision Pro immersive experiencesApple Vision Pro launches on Friday and there are signs of that impending release beg…",
              "url": "https://appleinsider.com/articles/24/02/01/apple-vision-pro-immersive-titles-have-begun-showing-up-in-apple-tv-app-ahead-of-launch",
              "urlToImage": "https://photos5.appleinsider.com/gallery/58395-118962-IMG_4862-xl.jpg",
              "publishedAt": "2024-02-01T00:10:40Z",
              "content": "Apple Vision Pro immersive experiences\r\nApple's 8K immersive experience series have started populating in the Apple TV app, though you'll need the Apple Vision Pro to interact.\r\nApple Vision Pro laun… [+1845 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "AppleInsider"
              },
              "author": "news@appleinsider.com (Amber Neely)",
              "title": "Tim Cook says he always knew Apple would arrive at the Apple Vision Pro",
              "description": "In a new interview, Apple CEO Tim Cook was pictured for the first time wearing the Apple Vision Pro, and discussed the inevitable road to the headset.Tim Cook dons the Apple Vision Pro | Credit: Vanity FairThe Apple Vision Pro is set to start arriving to earl…",
              "url": "https://appleinsider.com/articles/24/02/01/tim-cook-says-he-always-knew-apple-would-arrive-at-the-apple-vision-pro",
              "urlToImage": "https://photos5.appleinsider.com/gallery/58405-118978-cookavp-xl.jpg",
              "publishedAt": "2024-02-01T15:11:21Z",
              "content": "Tim Cook dons the Apple Vision Pro | Credit: Vanity Fair\r\nIn a new interview, Apple CEO Tim Cook was pictured for the first time wearing the Apple Vision Pro, and discussed the inevitable road to the… [+2276 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "AppleInsider"
              },
              "author": "news@appleinsider.com (William Gallagher)",
              "title": "Apple Vision Pro now has over 600 native apps for launch day",
              "description": "Following early doubts over how many developers were creating native apps for the Apple Vision Pro, Apple says it has triple the previous estimates.Apple's visionOS menu systemBased on third-party estimates, it was previously reported that the Apple Vision Pr…",
              "url": "https://appleinsider.com/articles/24/02/01/apple-vision-pro-now-has-over-600-native-apps-for-launch-day",
              "urlToImage": "https://photos5.appleinsider.com/gallery/58243-118691-58142-118463-57058-116036-visionOS-home-xl-xl-xl.jpg",
              "publishedAt": "2024-02-01T14:20:57Z",
              "content": "Apple's visionOS menu system\r\nFollowing early doubts over how many developers were creating native apps for the Apple Vision Pro, Apple says it has triple the previous estimates.\r\nBased on third-part… [+2104 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "AppleInsider"
              },
              "author": "news@appleinsider.com (William Gallagher)",
              "title": "Apple Car could automatically pick you up, take you home, and play your music on the way",
              "description": "Apple has been researching how an Apple Car could reduce how a driver even needs to think about destinations, music or air conditioning, by recognizing passengers and re-routing locations.Starting a SharePlay session in CarPlayIf you thought it was good when …",
              "url": "https://appleinsider.com/articles/24/02/01/apple-car-could-automatically-pick-you-up-take-you-home-and-play-your-music-on-the-way",
              "urlToImage": "https://photos5.appleinsider.com/gallery/56249-114167-IMG_3029-xl.jpg",
              "publishedAt": "2024-02-01T13:50:47Z",
              "content": "Starting a SharePlay session in CarPlay\r\nApple has been researching how an Apple Car could reduce how a driver even needs to think about destinations, music or air conditioning, by recognizing passen… [+5099 chars]"
            }
          ]
        }

        setTotalPages(Math.ceil(data.articles.length / itemsPerPage));
        setImages(data.articles);
      } catch (error) {
        console.error(error);
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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
                {Images.slice(startIndex, endIndex).map((ele, i) => (
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

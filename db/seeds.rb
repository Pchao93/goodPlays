# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

blizzard = Developer.create(name: "Blizzard Entertainment")
rare = Developer.create(name: 'Rare Ltd')
riot = Developer.create(name: 'Riot Games')
epic = Developer.create(name: "Epic Games")
valve = Developer.create(name: "Valve")
five = Developer.create(name: "505 Games")
capcom = Developer.create(name: "Capcom")
rockstar = Developer.create(name: "Rockstar")



overwatch = Game.create(title: "Overwatch",
  release_date: "2016-05-23",
  description: "Overwatch is a highly stylized team-based shooter set on earth in the near future. Every match is an intense multiplayer showdown pitting a diverse cast of soldiers, mercenaries, scientists, adventurers, and oddities against each other in an epic, globe-spanning conflict.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg",
  amazon_url: "https://www.amazon.com/Overwatch-Game-Year-PlayStation-4/dp/B0733HQQQP/",
  developer_id: blizzard.id)

sea_of_thieves = Game.create(title: "Sea of Thieves",
  release_date: "2018-03-20",
  description: "Be The Pirate You Want To Be - With musket loaded and grog in hand@ the freedom of the pirate life awaits. What will your legend be? An epic multiplayer adventure. Crew up and set sail on memorable voyages. Make and break your pirates' code on the Sea of Thieves. A treacherous shared world. Plot your course and set sail for hidden riches. Navigate the perils of a fantastical world and the danger of rival crews.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Sea%20of%20Thieves-285x380.jpg",
  amazon_url: "https://www.amazon.com/Sea-Thieves-Xbox-One/dp/B00ZPT59YS/ref=sr_1_1?s=videogames&ie=UTF8&qid=1516866670&sr=1-1&keywords=Sea+of+Thieves",
  developer_id: rare.id)

lol = Game.create!(title: "League of Legends",
  release_date: "2009-10-27",
  description: "Join forces with your closest allies as you unite to defeat your foes in deadly multiplayer battle arenas. League of Legends combines elements from both strategy and role playing games to bring you a unique and dynamic player experience. As a Summoner@ you will have your own distinct@ customizable avatar that grows in power as you move through the game. In each battle you will select and call forth one of dozens of Champions to control and engage in head-to-head combat against teams of highly trained warriors. Choose your allies wisely@ for the stakes are high. In the League@ every battle means more than life or death as the balance of power shifts with each victory or defeat. [Riot Games]",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg",
  amazon_url: "https://www.amazon.com/League-Legends-25-Gift-Card/dp/B0153XBEBM/ref=sr_1_1?ie=UTF8&qid=1516866691&sr=8-1&keywords=League+of+Legends",
  developer_id: riot.id)

hearthstone = Game.create!(title: "Hearthstone",
  release_date: "2014-04-16",
  description: "Hearthstone is a free-to-play digital strategy card game where you can choose one of nine epic Warcraft heroes to play as.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-285x380.jpg",
  amazon_url: "https://www.amazon.com/Battle-net-Store-Gift-Card-Balance/dp/B012JMS4W2/ref=sr_1_1?ie=UTF8&qid=1516866750&sr=8-1&keywords=Hearthstone",
  developer_id: blizzard.id)

fortnite = Game.create(title: "Fortnite",
  release_date: "2017-07-21",
  description: "The Storm came without warning and wiped out 98 percent of the world's population in a flash. Poof. Adios. Sayonara. Then came the monsters, wave after wave, night after night. Destroying everything in their path. But it's not all doom and gloom. In an abandoned missile silo, we've found one of our first weapons against the Storm you. We're looking for a few good commanders like you to help make a difference, push back the storm and protect those among us who are unable to protect themselves. Explore the world. Rescue survivors. Make hundreds of guns, swords, and things that go boom. Make impregnable forts. Tastefully decorate with sniper perches, poison gas traps, and jump pads. Take back the world. You know, the usual. And be sure to invite your friends. Welcome to Fortnite.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg",
  amazon_url: "https://www.amazon.com/Fortnite-PlayStation-4/dp/B071WNVX56/ref=sr_1_1?ie=UTF8&qid=1516866719&sr=8-1&keywords=Fortnite",
  developer_id: epic.id)

counterstrike = Game.create(title: "Counterstrike",
  release_date: "2012-08-21",
  description: "Counter-Strike: Global Offensive features new maps@ characters@ and weapons and delivers updated versions of the classic CS content.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg",
  amazon_url: "https://www.amazon.com/Counter-strike-Global-Offensive-Pc-Game-MAC/dp/B009FZZUPQ/ref=sr_1_1?ie=UTF8&qid=1516866768&sr=8-1&keywords=Counter-Strike%3A+Global+Offensive",
  developer_id: valve.id)

deadbydaylight = Game.create(title: "Dead By Daylight",
  release_date: "2017-06-20",
  description: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer@ and the other four players play as Survivors@ trying to escape the Killer and avoid being caught@ tortured and killed. Survivors play in third-person and have the advantage of better situational awareness. The Killer plays in first-person and is more focused on their prey. The Survivors' goal in each encounter is to escape the Killing Ground without getting caught by the Killer - something that sounds easier than it is@ especially when the environment changes every time you play.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Dead%20by%20Daylight-285x380.jpg",
  amazon_url: "https://www.amazon.com/Dead-Daylight-PlayStation-4/dp/B06WVKKHJM/ref=sr_1_1?ie=UTF8&qid=1516866783&sr=8-1&keywords=Dead+by+Daylight",
  developer_id: five.id)

mhw = Game.create(title: "Monster Hunter World",
  release_date: "2018-01-26",
  description: "In Monster Hunter: World you assume the role of a hunter venturing to a new continent where you track down and slay ferocious beasts in heart-pounding battles. This new land and its diverse inhabitants play a critical role in each quest as you strategically use the surrounding environment including terrain@ vegetation and wildlife to your advantage in battle or become hindered by the hazards they present. As a hunter@ you must use your cunning and expertise to track and maneuver your targets throughout the intense@ evolving battles. [Capcom]",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Monster%20Hunter%20World-285x380.jpg",
  amazon_url: "https://www.amazon.com/Monster-Hunter-World-PlayStation-4-Standard/dp/B071G5HZ7F/ref=sr_1_1?s=videogames&ie=UTF8&qid=1516866800&sr=1-1&keywords=Monster+Hunter+World",
  developer_id: capcom.id)

wow = Game.create(title: "World of Warcraft: Legion",
  release_date: "2016-08-30",
  description: "The Tomb of Sargeras has been reopened, and the demons of the Burning Legion pour into our world. Their full, terrifying might is fixed on summoning the Dark Titan to AzerothÑand theyÕve already located the key to his return. With the Alliance and Horde devastated, only you can take up WarcraftÕs most legendary artifacts, scour the ancient Broken Isles for relics of the Titans, and challenge the Legion before AzerothÕs last hope dies. Steel yourself, champion. Extinction is imminent.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-285x380.jpg",
  amazon_url: "https://www.amazon.com/World-Warcraft-Game-Time-Digital/dp/B012JIOKM4/ref=sr_1_2?ie=UTF8&qid=1516866814&sr=8-2&keywords=World+of+Warcraft",
  developer_id: blizzard.id)

gtav = Game.create(title: "Grand Theft Auto V",
  release_date: "2015-04-14",
  description: "Los Santos: a sprawling sun-soaked metropolis full of self-help gurus@ starlets and fading celebrities@ once the envy of the Western world@ now struggling to stay alive in a time of economic uncertainty and cheap reality TV. Amidst the turmoil@ three very unique criminals plot their own chances of survival and success: Franklin@ a street hustler looking for tangible opportunities and serious money; Michael@ a professional ex-con whose retirement is less rosy than he figured it would be; and Trevor@ a violent dude driven by the opportunity for a cheap high and his next big score. With options at a premium@ the crew risks it all in a myriad of daring and dangerous heists that could set them up for life.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-285x380.jpg",
  amazon_url: "https://www.amazon.com/Grand-Theft-Auto-V-PlayStation-4/dp/B00KVSQ848/ref=sr_1_1?ie=UTF8&qid=1516866841&sr=8-1&keywords=Grand+Theft+Auto+V",
  developer_id: rockstar.id)

overwatch11 = Game.create(title: "Overwatch11",
  release_date: "2016-05-23",
  description: "Overwatch is a highly stylized team-based shooter set on earth in the near future. Every match is an intense multiplayer showdown pitting a diverse cast of soldiers, mercenaries, scientists, adventurers, and oddities against each other in an epic, globe-spanning conflict.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg",
  amazon_url: "https://www.amazon.com/Overwatch-Game-Year-PlayStation-4/dp/B0733HQQQP/",
  developer_id: blizzard.id)

overwatch12 = Game.create(title: "Overwatch12",
  release_date: "2016-05-23",
  description: "Overwatch is a highly stylized team-based shooter set on earth in the near future. Every match is an intense multiplayer showdown pitting a diverse cast of soldiers, mercenaries, scientists, adventurers, and oddities against each other in an epic, globe-spanning conflict.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg",
  amazon_url: "https://www.amazon.com/Overwatch-Game-Year-PlayStation-4/dp/B0733HQQQP/",
  developer_id: blizzard.id)

overwatch13 = Game.create(title: "Overwatch13",
  release_date: "2016-05-23",
  description: "Overwatch is a highly stylized team-based shooter set on earth in the near future. Every match is an intense multiplayer showdown pitting a diverse cast of soldiers, mercenaries, scientists, adventurers, and oddities against each other in an epic, globe-spanning conflict.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg",
  amazon_url: "https://www.amazon.com/Overwatch-Game-Year-PlayStation-4/dp/B0733HQQQP/",
  developer_id: blizzard.id)

overwatch14 = Game.create(title: "Overwatch14",
  release_date: "2016-05-23",
  description: "Overwatch is a highly stylized team-based shooter set on earth in the near future. Every match is an intense multiplayer showdown pitting a diverse cast of soldiers, mercenaries, scientists, adventurers, and oddities against each other in an epic, globe-spanning conflict.",
  image_url: "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg",
  amazon_url: "https://www.amazon.com/Overwatch-Game-Year-PlayStation-4/dp/B0733HQQQP/",
  developer_id: blizzard.id)


pc = Platform.create(name: 'Personal Computer', abreviation: 'PC')
ps4 = Platform.create(name: 'PlayStation 4', abreviation: 'PS4')
xb1 = Platform.create(name: 'XBOX ONE', abreviation: 'XB1')

PlatformGame.create(game_id: overwatch.id, platform_id: pc.id)
PlatformGame.create(game_id: overwatch.id, platform_id: ps4.id)
PlatformGame.create(game_id: overwatch.id, platform_id: xb1.id)

PlatformGame.create(game_id: sea_of_thieves.id, platform_id: pc.id)
PlatformGame.create(game_id: sea_of_thieves.id, platform_id: ps4.id)
PlatformGame.create(game_id: sea_of_thieves.id, platform_id: xb1.id)

PlatformGame.create(game_id: lol.id, platform_id: pc.id)
PlatformGame.create(game_id: hearthstone.id, platform_id: pc.id)

PlatformGame.create(game_id: fortnite.id, platform_id: pc.id)
PlatformGame.create(game_id: fortnite.id, platform_id: ps4.id)
PlatformGame.create(game_id: fortnite.id, platform_id: xb1.id)

PlatformGame.create(game_id: deadbydaylight.id, platform_id: pc.id)
PlatformGame.create(game_id: deadbydaylight.id, platform_id: ps4.id)
PlatformGame.create(game_id: deadbydaylight.id, platform_id: xb1.id)

PlatformGame.create(game_id: counterstrike.id, platform_id: xb1.id)

PlatformGame.create(game_id: mhw.id, platform_id: pc.id)
PlatformGame.create(game_id: mhw.id, platform_id: ps4.id)
PlatformGame.create(game_id: mhw.id, platform_id: xb1.id)

PlatformGame.create(game_id: wow.id, platform_id: pc.id)

PlatformGame.create(game_id: gtav.id, platform_id: pc.id)
PlatformGame.create(game_id: gtav.id, platform_id: ps4.id)
PlatformGame.create(game_id: gtav.id, platform_id: xb1.id)


want_to_read = Collection.create(name: "Want to Play", user_id: 1)
want_to_read = Collection.create(name: "Have Played", user_id: 1)
want_to_read = Collection.create(name: "Playing", user_id: 1)
want_to_read = Collection.create(name: "My Favorites", user_id: 1)

CollectionGame.create(game_id: overwatch.id, collection_id: 1)
CollectionGame.create(game_id: overwatch.id, collection_id: 2)
CollectionGame.create(game_id: overwatch.id, collection_id: 3)
CollectionGame.create(game_id: overwatch.id, collection_id: 4)

# 'Blizzard Entertainment	Blizzard Entertainment	PC PlayStation 4 Xbox One	General-Action-Shooter First-Person Tactical	T'

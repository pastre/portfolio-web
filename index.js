var model = 
{
	isLoading: true,
	repos: [
		'https://github.com/pastre/color-palette',
		'https://github.com/pastre/bubbles',
		'https://github.com/pastre/nc4',
		'https://github.com/pastre/pick-me-a-movie',
		'https://github.com/pastre/pocket-pastre',
		'https://github.com/pastre/studying-with-pc',
		'https://github.com/pastre/startupeiros',
		'https://github.com/pastre/celeste',
		'https://github.com/pastre/nc2',
		'https://github.com/pastre/Activity-Manager',
	],
	urls: [
		'https://apps.apple.com/br/app/harmonify-cores-e-paletas/id1467642991',
		'https://apps.apple.com/br/app/bubbles-why-not/id1458220809',
		'https://apps.apple.com/br/app/pocket-pastre/id1497205539',
		'https://apps.apple.com/br/app/the-movie-genie/id1462797983',
		'https://apps.apple.com/br/app/zombie-apocalypse/id1504183894',
		'https://apps.apple.com/br/app/studying-with-pc/id1463404891',
		'https://apps.apple.com/br/app/cube-h/id1491076636',
		'https://apps.apple.com/br/app/space/id1477382763',
		'https://apps.apple.com/br/app/jumpy-aliens/id1500965920',
		'https://apps.apple.com/br/app/activities-manager/id1464430414',
	],
	loadedApps: []
};
var cellContent = {
			
			"Harmonify" : {
				"WorkDetail-Title" : "Harmonify",
				"images": 
					[ 
						'https://apps.apple.com/us/app/harmonify-cores-e-paletas/id1467642991?l=pt',
					 	'https://github.com/pastre/color-palette'
					 ],
				"WorkDetail-Description": [ "<b>Stack: </b>UIKit, AdMob, Firebase Database, Firebase Auth, CoreGraphics, CoreImage, AutoLayout, MetalKit, Sketch", "<b>Process: </b>To develop harmonify, I read a book on color theory to understand palette generation and color pigments and the math behind it. I then started to design screens on Sketch to properly preview the app. Having designed the app, I jumped into Xcode and started to program the app. Having developed an MVP, I interviwed some collegues and figured out that being able to quickly export to macOS was an important thing, I developed a macOS app that syncs with the palettes generated on the app.  With the app published on the App Store, I did some usability tests to understand how some people interact with the app, and to get some insights about how to improve it and how to monetize it. Since then, I am developing a version with some freemium features and improving the app. "] ,

			},

			"Pocket Pastre" : {
				"WorkDetail-Title" : "Pocket Pastre",
				"images": 
					[ 
						'https://apps.apple.com/us/app/pocket-pastre/id1497205539?l=pt',
					 	'https://github.com/pastre/pocket-pastre'
					 ],
				"WorkDetail-Description": [ "<b>Stack: </b>UIKit, CoreAnimations, AutoLayout, Sketch, AVFoundation", "<b>Process: </b> In order to develop Pocket Pastre, I needed to better understand how does one present himself online, therefore, I created a moodboard mostly composed by portfolios, but also added some personal blogs and curriculums. With enough inspiration, I was able to create the app's concept, which is basically me telling stories about myself. With all that in mind, I prototyped some screens on Sketch and tried to get a little crazy with the interactions. With that done, I started coding,  which was pretty hard, since I wanted to use the native Memoji library, which is private. After playing a little with Obj-C to try and dynamically load the lib and reverse engineer it, I discovered that Memojis are stored in a private database, which, due to sandbox, my app doesn't have permission to access. I then recorded some Memoji videos and played them randomly using AVFoundation, which was pretty fun, because I needed to perfectly record transitions that I'm still working on getting perfect. I also learned a lot about animations and custom view controller transitions"] ,
			},

			"Zombie! Apocalypse" : {
				"WorkDetail-Title" : "Zombie! Apocalypse",
				"images": 
					[ 
						'https://apps.apple.com/us/app/zombie-apocalypse/id1504183894?l=pt',
					 	'https://github.com/pastre/nc4'
					],
				"WorkDetail-Description": [ 
					"<b>Stack: </b>UIKit, SpriteKit, AutoLayout, AdMob, StoreKit, Firebase, Game Development",
					"<b>Process: </b> This game was developed with a friend who is a really badass communicator, so we developed the concept and mechanics together, I designed and programmed, he developed our marketing strategy and communication. We decided to do a game based on Snake VS Blocks, but with some extra challenges. With a very strong reference, I started to work on procedural level generation, game mechanics, progression and balancing. This was the third game I've ever made, and I'm thankful for the people around me for helping me better understand how deep can game development go. Having so many experts around me, I did a few pair programmings to get some concepts right, and, with the game in a publishable state, I designed the UI. Then, my communications friend took some time to teach me about marketing, and that experience was pretty fun and de-mistifyed a lot about how advertising works"
				],
			

			},

			".space" : {
				"WorkDetail-Title" : ".space",
				"images": 
					[ 
						'https://apps.apple.com/us/app/space/id1477382763?l=pt',
					 	'https://github.com/pastre/celeste'
					],
				"WorkDetail-Description": [ 
					"<b>Stack: </b>ARKit, SceneKit, UIKit, AutoLayout",
					"<b>Process: </b> We were 4 people: a 3D modeler, a designer, a SpriteKit guy, and me. We used CBL for our first time, and discovered that a tool for people to organize their thoughts was a good product, like an augmented bullet journal. We researched and interviewed people to better understand what they think and how do they expect to interact with .space, and started developing. I developed the Augmented Reality feature using ARKit and SceneKit, then imported the models that my friend was created, then pair programmed with my other friend to implement the UI using layout constraints. It was an awesome experiment, since I always wanted to learn AR"
				],
			},

			"Relibox" : {
				"WorkDetail-Title" : "Relibox",
				"images": 
					[ 
						'https://apps.apple.com/us/app/relibox/id1483243383?l=pt',
					 	'https://github.com/purplelipstick89/challenge-2'
					],
				"WorkDetail-Description": [ 
					"<b>Stack: </b> Wireframing, UI Design, UX Research, Programming Assistance ",
					"<b>Process: </b> In this project, which was composed by 5 people, I mainly contributed as a designer, since I really wanted to get better at it. Although I did some coding, I mainly provided assistance for my friends who wanted to leard about code, specially the CoreNFC, CoreBluetooth and CoreLocation frameworks. In Relibox, I developed flow diagrams, created personas, created wireframes and screens. My group and I also did UX research, interviews, cultural probes and focal groups. This project really opened my eyes about what does it mean to be a designer, and it is a privillege to truly understand and empathise with the other side of mobile development"
				],

			},

			"Cube H" : {
				"WorkDetail-Title" : "Cube H",
				"images": 
					[ 
					 	'https://apps.apple.com/us/app/cube-h/id1491076636?l=pt',
						'https://github.com/pastre/startupeiros',
					],
				"WorkDetail-Description": [ 
					"<b>Stack: </b> UIKit, AutoLayout, Game Development",
					"<b>Process: </b>  TODO "
				],

			}
		}

		var presentedContent;

		function cellClicked (event) {
			var cellName;

			if(event.target.className === "Work-cellOverlayTitle") {
				cellName = event.target.textContent.trim()
			} else {
				cellName = Array.from(event.target.childNodes).filter(cell => cell.className === "Work-cellOverlayTitle" )[0].textContent.trim()
			}
			
			displayModal(cellName, event)
		}

		function getWorldDetail() {
			return document.getElementsByClassName("WorkDetail")[0]
		}

		function updateModalContent(cellName, event) {
			var content = cellContent[cellName]

			presentedContent = content

			console.log("content", content)
			var titleDiv = document.getElementsByClassName("WorkDetail-Title")[0]
			var imageDivs = document.getElementsByClassName("WorkDetail-ImageLink")
			var descriptionDivs = document.getElementsByClassName("WorkDetail-Description")

			titleDiv.innerHTML = content["WorkDetail-Title"]


			for(var i  = 0; i < descriptionDivs.length; i++) {
				descriptionDivs[i].innerHTML = content["WorkDetail-Description"][i]
			}

		}

		function presentAppStore() {
			openInNewTab(presentedContent["images"][0])
		}

		function presentGithub() {
			openInNewTab(presentedContent["images"][1])
		}

		function openInNewTab(url) {
			window.open(url, "_blank")
		}


		function presentOnNewTab(url) {
			console.log("Navigating to", url)
		}


		function displayModal(cellName, event) {
			updateModalContent(cellName, event)
			getWorldDetail().style.display = "flex"
			lockScroll()
		}

		function dismissModal() {
			getWorldDetail().style.display = "none"
			unlockScroll()
		}

		function lockScroll() {
			var body = document.getElementsByTagName("html")[0];
			console.log(body.style.overflow)
			body.style.overflow = "hidden";
		}

		function unlockScroll() {

			var body = document.getElementsByTagName("html")[0];

			body.style.overflow = "";
		}

		function bootstrap() {
			console.log("Oi!")

			var cells = Array.from(document.getElementsByClassName("Work-cell"))

			cells.forEach (cell => cell.addEventListener("click", event => cellClicked(event)))
		}
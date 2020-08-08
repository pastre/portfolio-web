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
				"WorkDetail-Description": [ "<b>Stack: </b>UIKit, AdMob, Firebase Database, Firebase Auth, CoreGraphics, CoreImage, AutoLayout, MetalKit", "<b>Process: </b>To develop harmonify, I read a book on color theory to understand palette generation and color pigments and the math behind it. I then started to design screens on Sketch to properly preview the app. Having designed the app, I jumped into Xcode and started to program the app. Having developed an MVP, I interviwed some collegues and figured out that being able to quickly export to macOS was an important thing, I developed a macOS app that syncs with the palettes generated on the app.  With the app published on the App Store, I did some usability tests to understand how some people interact with the app, and to get some insights about how to improve it and how to monetize it. Since then, I am developing a version with some freemium features and improving the app. "] ,

			},

			"Pocket Pastre" : {
				"WorkDetail-Title" : "Pocket Pastre",
				"images": 
					[ 
						'https://apps.apple.com/us/app/pocket-pastre/id1497205539?l=pt',
					 	'https://github.com/pastre/nc4'
					 ],
				"WorkDetail-Description": [ "<b>Stack: </b>UIKit, AdMob, Firebase Database, Firebase Auth, CoreGraphics, CoreImage, AutoLayout, MetalKit", "<b>Process: </b>To develop harmonify, I read a book on color theory to understand palette generation and color pigments and the math behind it. I then started to design screens on Sketch to properly preview the app. Having designed the app, I jumped into Xcode and started to program the app. Having developed an MVP, I interviwed some collegues and figured out that being able to quickly export to macOS was an important thing, I developed a macOS app that syncs with the palettes generated on the app.  With the app published on the App Store, I did some usability tests to understand how some people interact with the app, and to get some insights about how to improve it and how to monetize it. Since then, I am developing a version with some freemium features and improving the app. "] ,
			},

			"Zombie! Apocalypse" : {

			},

			".space" : {

			},

			"Relibox" : {

			},

			"Cube H" : {

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
		}

		function dismissModal() {
			getWorldDetail().style.display = "none"
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
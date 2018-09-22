"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {

};

// Define the Characters
const characters = {
	"t": {
		"Name": "Triangle with dots",
		"Color": "#000",
        "Images":{ 
            "Normal": "triangle.png"
        }
	},
	"s": {
		"Name": "Squiggly line",
		"Color": "#000",
        "Images":{ 
            "Normal": "squiggle.png"
        }
	},
	"r": {
		"Name": "Rhomboid",
		"Color": "#000",
        "Images":{ 
            "Normal": "rhombus.png"
        }
	},
	"c": {
		"Name": "Round edge cross",
		"Color": "#000",
        "Images":{ 
            "Normal": "cross.png"
        }
	},
	"e": {
		"Name": "Empty cube",
		"Color": "#000",
        "Images":{ 
            "Normal": "square.png"
        }
	},
    "player": {
        "Name": " ",
        "Color": "#000"
    }
};

let script = {
	// The game starts here.
	"Start": [
        "play music theme.mp3 loop",
        "player I am a student at the Institute of Geodesic Theory.",
        "player It's the first day of a new session.",
        "player I was so excited for the break but, I found myself somehow...",
        "player drawn...",
        "player back here.",
        "player As I sit down with my new texts I can barely contain my excitement.",
        
        "show s Normal up",
		"s A line that spans between two points",

		{
			"Choice": {
				"Dialog": "s but that ebbs and flows like a wave",
				"Yes": {
					"Text": "Rad",
					"Do": function () {
                        return storage.played == true; // The "Player" option will only be shown if this returns true.
                    }
				},
				"No": {
					"Text": "Bad",
					"Do": function () {
                        return storage.played == true; // The "Player" option will only be shown if this returns true.
                    }
				}
			}
		}
	],

	"Yes": [

		"h That's awesome!",
		"h Then you are ready to go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	],

	"No": [

		"h You can do it now.",

		"display message Help",

		"h Go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	]
};
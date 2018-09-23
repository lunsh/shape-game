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
            "Normal": "triangle.svg"
        }
	},
	"s": {
		"Name": "Squiggly line",
		"Color": "#000",
        "Images":{ 
            "Normal": "squiggle.svg"
        }
	},
	"r": {
		"Name": "Rhomboid",
		"Color": "#000",
        "Images":{ 
            "Normal": "rhombus.svg"
        }
	},
	"c": {
		"Name": "Round edge cross",
		"Color": "#000",
        "Images":{ 
            "Normal": "cross.svg"
        }
	},
	"e": {
		"Name": "Empty cube",
		"Color": "#000",
        "Images":{ 
            "Normal": "square.svg"
        }
	},
    "player": {
        "Name": " ",
        "Color": "#000"
    }
};

function fadedGoodbye() {
    $('.faded').addClass('faded-goodbye');
}
function resetRound(){
    storage.love.squiggle = 0;
    storage.love.cross = 0;
    storage.love.triangle = 0;
    storage.love.rhomboid = 0;
    storage.love.cube = 0;
    return true;
}

let script = {
	// The game starts here.
	"Start": [
        resetRound,
        "play music theme.mp3 loop",
        /*"jump GoodEnd",*/
        "player I am a student at the Institute of Geodesic Theory.",
        "player It's the first day of a new session.",
        "player I was so excited for the break but, I found myself somehow...",
        "player drawn...",
        "player back here.",
        "player As I sit down with my new texts I can barely contain my excitement.",
        
        "scene black with fadeIn",
        "centered Mis-shapen chaos of well-seeming forms! - Shakespeare, Romeo and Juliet",
        "scene white with fadeIn",
        
        "show s Normal up",
		"s A line that spans between two points",

		{
			"Choice": {
				"Dialog": "s but that ebbs and flows like a wave",
				"Yes": {
					"Text": "Rad",
					"Do": "jump SquiggleYes1"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump SquiggleNo1"
				}
			}
		}
	],

	"SquiggleYes1": [
        {"Function": {
            "Apply": function () {
                storage.love.squiggle += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.squiggle -= 1;
                return true;
            }
        }},
        "s Cool.",
        "jump Triangle1"
	],

	"SquiggleNo1": [
		"s Aw.",
        "jump Triangle1"
	],
    
    "Triangle1": [
                 "hide s",         "hide t",         "hide c",         "hide r",         "hide e",
        "show t Normal up",
		"t A common geometric shape",
        "t but filled with a repeating pattern",

		{
			"Choice": {
				"Dialog": "t a delightful subversion of form",
				"Yes": {
					"Text": "Rad",
					"Do": "jump TriangleYes1"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump TriangleNo1"
				}
			}
		}
    ],

	"TriangleYes1": [
        {"Function": {
            "Apply": function () {
                storage.love.triangle += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.triangle -= 1;
                return true;
            }
        }},
        "t Cool.",
        "jump Cross1"
	],

	"TriangleNo1": [
		"t Aw.",
        "jump Cross1"
	],
    "Cross1": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "show c Normal up",
		"c This simple arrangement of lines is",
		{
			"Choice": {
				"Dialog": "c Synonymous with the most...basic math",
				"Yes": {
					"Text": "Rad",
					"Do": "jump CrossYes1"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump CrossNo1"
				}
			}
		}
    ],
	"CrossYes1": [
        {"Function": {
            "Apply": function () {
                storage.love.cross += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.cross -= 1;
                return true;
            }
        }},
        "c Cool.",
        "jump Rhomb1"
	],
	"CrossNo1": [

		"c Aw.",
        "jump Rhomb1"
	],
    "Rhomb1": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "show r Normal up",
		"r n. A parallelogram with unequal sides",
		{
			"Choice": {
				"Dialog": "r adj. Shaped like a rhombus or rhomboid",
				"Yes": {
					"Text": "Rad",
					"Do": "jump RhombYes1"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump RhombNo1"
				}
			}
		}
    ],
	"RhombYes1": [
        {"Function": {
            "Apply": function () {
                storage.love.rhomboid += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.rhomboid -= 1;
                return true;
            }
        }},
        "r Cool.",
        "jump Empty1"
	],
	"RhombNo1": [
		"r Aw.",
        "jump Empty1"
	],
    "Empty1": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "show e Normal up",
		"e A 2D element arranged to appear 3D",
		"e or a 3D element perceived as flat?",
		{
			"Choice": {
				"Dialog": "e you decide",
				"Yes": {
					"Text": "Rad",
					"Do": "jump EmptyYes1"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump EmptyNo1"
				}
			}
		}
    ],

	"EmptyYes1": [
        {"Function": {
            "Apply": function () {
                storage.love.cube += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.cube -= 1;
                return true;
            }
        }},
        "e Cool.",
        "jump CheckRound1"
	],

	"EmptyNo1": [
		"e Aw.",
        "jump CheckRound1"
	],
    
    /* INTERSTITIAL 2 ******************************************************************************************/
    "CheckRound1": [
        {"Conditional": {
            "Condition": function(){
                return storage.love.squiggle == 0 && storage.love.triangle == 0 && storage.love.rhomboid == 0 && storage.love.cross == 0 && storage.love.cube == 0;
            },
            "True": "jump GameOver",
            "False": "jump Interstitial1"
        }},
    ],
    "Interstitial1": [
        "scene black with fadeIn",
        "centered I'll find you waiting at the very end of this crooked line... - Elvis Costello",
        "scene white",
        {"Conditional": {
            "Condition": function(){
                return storage.love.squiggle >= 1;
            },
            "True": "jump Squiggle2",
            "False": "jump Triangle2"
        }},
    ],
    "Squiggle2": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "clear",
        "show s Normal up",
		"s It's like...",
		{
			"Choice": {
				"Dialog": "s What is even its deal, you know?",
				"Yes": {
					"Text": "Rad",
					"Do": "jump SquiggleYes2"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump SquiggleNo2"
				}
			}
		}
	],
	"SquiggleYes2": [
        {"Function": {
            "Apply": function () {
                storage.love.squiggle += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.squiggle -= 1;
                return true;
            }
        }},
        "s Cool.",
        "jump Triangle2"
	],
	"SquiggleNo2": [
		"s Aw.",
        "jump Triangle2"
	],
    "Triangle2": [
        {"Conditional": {
            "Condition": function(){
                return storage.love.triangle >= 1;
            },
            "True": "jump Triangle2Inner",
            "False": "jump Cross2"
        }},
    ],
    "Triangle2Inner": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "clear",
        "show t Normal up",
		"t It's as if a Dorito",
        "t was wearing polka dots.",
		{
			"Choice": {
				"Dialog": "t What does that even mean?",
				"Yes": {
					"Text": "Rad",
					"Do": "jump TriangleYes2"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump TriangleNo2"
				}
			}
		}
    ],
	"TriangleYes2": [
        {"Function": {
            "Apply": function () {
                storage.love.triangle += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.triangle -= 1;
                return true;
            }
        }},
        "t Cool.",
        "jump Cross2"
	],

	"TriangleNo2": [
		"t Aw.",
        "jump Cross2"
	],
    
    "Cross2": [
        {"Conditional": {
            "Condition": function(){
                return storage.love.cross >= 1;
            },
            "True": "jump Cross2Inner",
            "False": "jump Rhomb2"
        }},
    ],
    "Cross2Inner": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "clear",
        "show c Normal up",
		"c The points of this shape are rounded",
		"c Safe, nonthreatening, but...",
		{
			"Choice": {
				"Dialog": "c Where's the fun in that?",
				"Yes": {
					"Text": "Rad",
					"Do": "jump CrossYes2"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump CrossNo2"
				}
			}
		}
    ],

	"CrossYes2": [
        {"Function": {
            "Apply": function () {
                storage.love.cross += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.cross -= 1;
                return true;
            }
        }},
        "c Cool.",
        "jump Rhomb2"
	],

	"CrossNo2": [
		"c Aw.",
        "jump Rhomb2"
	],
    
    "Rhomb2": [
        {"Conditional": {
            "Condition": function(){
                return storage.love.rhomboid >= 1;
            },
            "True": "jump Rhomb2Inner",
            "False": "jump Empty2"
        }},
    ],
    "Rhomb2Inner": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "clear",
        "show r Normal up",
		"r Slouching towards symmetry.",
        "r Acutely obtuse.",
		{
			"Choice": {
				"Dialog": "r Is it relaxing? Is it just too cool?",
				"Yes": {
					"Text": "Rad",
					"Do": "jump RhombYes2"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump RhombNo2"
				}
			}
		}
    ],

	"RhombYes2": [
        {"Function": {
            "Apply": function () {
                storage.love.rhomboid += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.rhomboid -= 1;
                return true;
            }
        }},
        "r Cool.",
        "jump Empty2"
	],

	"RhombNo2": [
		"r Aw.",
        "jump Empty2"
	],
    
    "Empty2": [
        {"Conditional": {
            "Condition": function(){
                return storage.love.cube >= 1;
            },
            "True": "jump Empty2Inner",
            "False": "jump CheckRound2"
        }},
    ],
    "Empty2Inner": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "clear",
        "show e Normal up",
		"e Is there vacuum within its bounds",
		{
			"Choice": {
				"Dialog": "e Or do its walls hold hidden volumes?",
				"Yes": {
					"Text": "Rad",
					"Do": "jump EmptyYes2"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump EmptyNo2"
				}
			}
		}
    ],

	"EmptyYes2": [
        {"Function": {
            "Apply": function () {
                storage.love.cube += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.cube -= 1;
                return true;
            }
        }},
        "e Cool.",
        "jump CheckRound2"
	],

	"EmptyNo2": [
		"e Aw.",
        "jump CheckRound2"
	],
    
    /* INTERSTITIAL 3 ******************************************************************************************/
    "CheckRound2": [
        {"Conditional": {
            "Condition": function(){
                return storage.love.squiggle < 2 && storage.love.triangle < 2 && storage.love.rhomboid < 2 && storage.love.cross < 2 && storage.love.cube < 2;
            },
            "True": "jump GameOver",
            "False": "jump Interstitial2"
        }},
    ],
    
    "Interstitial2": [
        "scene black with fadeIn",
        "centered It's hip to be square. - Huey Lewis and the News",
        "scene white with fadeIn",
        {"Conditional": {
            "Condition": function(){
                return storage.love.squiggle >= 2;
            },
            "True": "jump Squiggle3",
            "False": "jump Triangle3"
        }},
        
    ],
    "Squiggle3": [
        "show s Normal up",
		"s One side? No sides? Infinite sides?",
		{
			"Choice": {
				"Dialog": "s Where to begin?",
				"Yes": {
					"Text": "Rad",
					"Do": "jump SquiggleYes3"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump SquiggleNo3"
				}
			}
		}
	],

	"SquiggleYes3": [
        {"Function": {
            "Apply": function () {
                storage.love.squiggle += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.squiggle -= 1;
                return true;
            }
        }},
        "s Cool.",
        "jump Triangle3"
	],

	"SquiggleNo3": [
		"s Aw.",
        "jump Triangle3"
	],
    
    "Triangle3": [
        {"Conditional": {
            "Condition": function(){
                return storage.love.triangle >= 2;
            },
            "True": "jump Triangle3Inner",
            "False": "jump Cross3"
        }},
    ],
    "Triangle3Inner": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "clear",
        "show t Normal up",
		"t Pointed, like the head of an arrow.",
        "t To grasp it would only bring pain",
		{
			"Choice": {
				"Dialog": "t but what love doesn't?",
				"Yes": {
					"Text": "Rad",
					"Do": "jump TriangleYes3"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump TriangleNo3"
				}
			}
		}
    ],

	"TriangleYes3": [
        {"Function": {
            "Apply": function () {
                storage.love.triangle += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.triangle -= 1;
                return true;
            }
        }},
        "t Cool.",
        "jump Cross3"
	],
	"TriangleNo3": [
		"t Aw.",
        "jump Cross3"
	],
    "Cross3": [
        {"Conditional": {
            "Condition": function(){
                return storage.love.cross >= 2;
            },
            "True": "jump Cross3Inner",
            "False": "jump Rhomb3"
        }},
    ],
    "Cross3Inner": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "clear",
        "show c Normal up",
		"c It's an unambiguous sign.",
		{
			"Choice": {
				"Dialog": "c You want the D-pad.",
				"Yes": {
					"Text": "Rad",
					"Do": "jump CrossYes3"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump CrossNo3"
				}
			}
		}
    ],

	"CrossYes3": [
        {"Function": {
            "Apply": function () {
                storage.love.cross += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.cross -= 1;
                return true;
            }
        }},
        "c Cool.",
        "jump Rhomb3"
	],

	"CrossNo3": [
		"c Aw.",
        "jump Rhomb3"
	],
    
    "Rhomb3": [
        {"Conditional": {
            "Condition": function(){
                return storage.love.rhomboid >= 2;
            },
            "True": "jump Rhomb3Inner",
            "False": "jump Empty3"
        }},
    ],
    "Rhomb3Inner": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "clear",
        "show r Normal up",
		"r It looks stable enough right now, sure.",
		{
			"Choice": {
				"Dialog": "r But beware of unsafe angles.",
				"Yes": {
					"Text": "Rad",
					"Do": "jump RhombYes3"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump RhombNo3"
				}
			}
		}
    ],

	"RhombYes3": [
        {"Function": {
            "Apply": function () {
                storage.love.rhomboid += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.rhomboid -= 1;
                return true;
            }
        }},
        "r Cool.",
        "jump Empty3"
	],

	"RhombNo3": [
		"r Aw.",
        "jump Empty3"
	],
    
    "Empty3": [
        {"Conditional": {
            "Condition": function(){
                return storage.love.cube >= 2;
            },
            "True": "jump Empty3Inner",
            "False": "jump CheckRound3"
        }},
    ],
    "Empty3Inner": [
        "hide s",
        "hide t",
        "hide c",
        "hide r",
        "hide e",
        "clear",
        "show e Normal up",
		"e All those right angles...",
		{
			"Choice": {
				"Dialog": "............",
				"Yes": {
					"Text": "Rad",
					"Do": "jump EmptyYes3"
				},
				"No": {
					"Text": "Bad",
					"Do": "jump EmptyNo3"
				}
			}
		}
    ],
	"EmptyYes3": [
        {"Function": {
            "Apply": function () {
                storage.love.cube += 1;
                return true;
            },
            "Reverse": function () {
                storage.love.cube -= 1;
                return true;
            }
        }},
        "e Cool.",
        "jump CheckRound3"
	],
	"EmptyNo3": [
		"e Aw.",
        "jump CheckRound3"
	],
    "CheckRound3": [
        {"Conditional": {
            "Condition": function(){
                return storage.love.squiggle < 3 && storage.love.triangle < 3 && storage.love.rhomboid < 3 && storage.love.cross < 3 && storage.love.cube < 3;
            },
            "True": "jump GameOver",
            "False": "jump GoodEnd"
        }},
    ],
    "GoodEnd": [
        "scene black with fadeIn",
        "centered I'm in love with the shape of you. - Ed Sheeran",
        "scene white with fadeIn",
        "player I can't believe it - I've already read through three",
        "player THREE",
        "player whole chapters of my new textbook",
        "player This is going to be a great semester. I just know it already.",
        "player I can't wait to see what else we learn",
        "player All the new shapes...",
        "scene black with fadeIn",
        "centered Graphic design is <span class='faded'>my</span> passion",
        "centered Graphic design is passion",
        "centered FIN.",
        "end"
    ],
    "GameOver": [
        "scene black with fadeIn",
        "centered But that's not the shape of my heart. - Sting",
        "centered FIN.",
        "end"
    ]
};
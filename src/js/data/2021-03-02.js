dataSetVersion = "2021-03-02";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by game",
        key: "series",
        tooltip: "Check this to restrict to specific games.",
        checked: false,
        sub: [
            { name: "Red Hood's Woods", key: "rhw"},
            { name: "BLACKSOULS", key: "bs" },
            { name: "BLACKSOULS 2", key: "bs2" }
        ]
    },
    {
        name: "Remove non-girls",
        key: "notgirl",
        tooltip: "Check this to remove all non-female characters (with one exception :^) )."
    },
    {
        name: "Remove DLC3 characters",
        key: "dlc3",
        tooltip: "Check this to remove characters from DLC3 of BLACKSOULS 2."
    }
];

dataSet[dataSetVersion].characterData = [
    {
        name: "Alice (Daughter)",
        img: "daughter.jpg",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Alice (Mother)",
        img: "mother.jpg",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Alice (Sister)",
        img: "sister.jpg",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Alice Doll",
        img: "doll.jpg",
        opts: {
            series: ["bs2"],
            dlc3: true
        }
    },
    
    {
        name: "Alice Liddel",
        img: "alice.jpg",
        opts: {
            series: ["bs", "bs2"]
        }
    },
    
    {
        name: "Bandersnatch",
        img: "bandersnatch.jpg",
        opts: {
            series: ["bs", "bs2"]
        }
    },
    
    {
        name: "Baphomet",
        img: "baphomet.png",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Belle",
        img: "belle.png",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Blackwell",
        img: "blackwell.jpg",
        opts: {
            series: ["bs2"],
            notgirl: true
        }
    },
    
    {
        name: "Cheshire Cat",
        img: "cheshire.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Catherine",
        img: "catherine.png",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Chick",
        img: "chick.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Cinderella",
        img: "cinderella.png",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Dodo",
        img: "dodo.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Dormouse",
        img: "dormouse.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Dorothy",
        img: "dorothy.png",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Edith",
        img: "edith.jpg",
        opts: {
            series: ["bs2"],
            dlc3: true
        }
    },
    
    {
        name: "Elizabeth",
        img: "elizabeth.png",
        opts: {
            series: ["rhw", "bs", "bs2"]
        }
    },
    
    {
        name: "Elma",
        img: "elma.png",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Florence",
        img: "florence.png",
        opts: {
            series: ["bs2"],
            dlc3: true
        }
    },
    
    {
        name: "Frog Princess",
        img: "frog.jpg",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Gerda",
        img: "gerda.jpg",
        opts: {
            series: ["bs2"],
            dlc3: true
        }
    },
    
    {
        name: "Goose",
        img: "goose.png",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Gretel",
        img: "gretel.png",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Griffy",
        img: "griffy.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Jeanne",
        img: "jeanne.png",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Lizard Bill",
        img: "bill.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Hansel",
        img: "hansel.png",
        opts: {
            series: ["bs"],
            notgirl: true
        }
    },
    
    {
        name: "Hatta",
        img: "hatta.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Humpty Dumpty",
        img: "humpty.png",
        opts: {
            series: ["bs2"],
            notgirl: true
        }
    },
    
    {
        name: "Jabberwock",
        img: "jabberwock.png",
        opts: {
            series: ["bs", "bs2"]
        }
    },
    
    {
        name: "Jub-jub",
        img: "jubjub.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Kaki",
        img: "kaki.jpg",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Kuti",
        img: "kuti.jpg",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Leaf",
        img: "leaf.jpg",
        opts: {
            series: ["bs", "bs2"]
        }
    },
    
    {
        name: "Lingierina",
        img: "lingerina.jpg",
        opts: {
            series: ["bs2"],
            dlc3: true
        }
    },
    
    {
        name: "Lorina",
        img: "lorrina.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Mabel",
        img: "mabel.jpg",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "March Hare",
        img: "hare.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Marianna",
        img: "marianna.png",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Margaret",
        img: "margaret.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Mermaid Princess",
        img: "mermaid.jpg",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Miranda",
        img: "meryphilia.jpg",
        opts: {
            series: ["bs", "bs2"]
        }
    },
    
    {
        name: "Mock Turtle",
        img: "mock.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Node",
        img: "node.jpg",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Prickett",
        img: "prickett.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Leiden",
        img: "raiden.png",
        opts: {
            series: ["bs2"],
            dlc3: true
        }
    },
    
    {
        name: "Rapunzel",
        img: "rapunzel.jpg",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Red Hood",
        img: "red.jpg",
        opts: {
            series: ["rhw", "bs", "bs2"]
        }
    },
    
    {
        name: "Shisha",
        img: "shisha.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Shiyo",
        img: "shiyo.jpg",
        opts: {
            series: ["bs2"],
            dlc3: true
        }
    },
    
    {
        name: "Snake God",
        img: "snake.jpg",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Snow White",
        img: "snow.jpg",
        opts: {
            series: ["bs"]
        }
    },
    
    {
        name: "Tweedledee",
        img: "dee.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Tweedledum",
        img: "dum.png",
        opts: {
            series: ["bs2"]
        }
    },
    
    {
        name: "Unis",
        img: "unis.png",
        opts: {
            series: ["bs2"],
            dlc3: true
        }
    },
    
    {
        name: "Victoria",
        img: "victoria.png",
        opts: {
            series: ["bs", "bs2"]
        }
    },
    
    {
        name: "Wolris",
        img: "shivuchi.jpg",
        opts: {
            series: ["bs2"]
        }
    }
];

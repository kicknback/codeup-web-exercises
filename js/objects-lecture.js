(function(){
    "use strict";

    let laptop = {
        color: "space gray",
        make: "mac",
        size: 13,
        turnsOn: function() {
            return "turn the computer on";
        }
    }

    // TODO:

    let aboutMe = new Object();


    let thisIsMe = {
        size: "fat",
        height: `6'1"`,
        age: 34
    };
    // ---------- dot notation

    thisIsMe.hairColor = "brown";

    //console.log(thisIsMe);

    // ---------- bracket notation

    thisIsMe["job"] = "unemployed";

    //console.log(thisIsMe);

    aboutMe.likesCode = true;
    aboutMe.isFat = true;
    aboutMe.likesSpurs = "meh";
    aboutMe["isHairFading"] = true;
    aboutMe["wins"] = 235;
    aboutMe["lbs"] = 320;

    //console.log(aboutMe);

    // =======================================

    // TODO: create an empty 'yourFaveSportsTeam' object using object literals
    // TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
    // TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using   bracket notation
    // TODO: write a function that returns the sport and numOfPlayers from your 'team' object

    // let yourFaveSportsTeam = {};
    //
    // yourFaveSportsTeam.city = "somewhere";
    // yourFaveSportsTeam.coach = "someone";
    // yourFaveSportsTeam.sport = "a sport";
    // yourFaveSportsTeam["numOfPlayers"] = 80;
    // yourFaveSportsTeam["numOfChampsWon"] = 9;
    // yourFaveSportsTeam["isBestTeam"] = "nope";
    //
    // function sportReturn() {
    //     return [yourFaveSportsTeam.sport, yourFaveSportsTeam.numOfPlayers];
    // }
    //
    // console.log(yourFaveSportsTeam);
    // console.log(sportReturn());

    // =====================================

    // nested values

    // let theSpurs = {
    //     city: "SA",
    //     coach: "Gregg",
    //     wins: 5,
    //     players: ['one', 'two', 'three'],
    //     playerInfo: [
    //         {
    //             name: "Tim",
    //             age: 40,
    //             mvp: 3
    //         },
    //         {
    //             name: "Manu",
    //             age: 38,
    //             mvp: 6
    //         }
    //     ]
    // }


    var theSpurs = {
        city: "SA",
        coach: 'gregg',
        wins: 5,
        players: ["one", "two", "tim duncan", "manu", "david robinson"],
        playerInfo: [
            {
                name: "Tim",
                age: 40,
                mvp: 3
            },
            {
                name: "manu",
                age: 38,
                mvp: 6
            }
        ],
        otherNBATeams: {
            Jazz: {
                city: "Salt Lake City",
                mascot: "Jazz Bear",
                champsWon: 0
            },
            Mavs: {
                city: "Dallas",
                mascot: "MavsMan & Champ",
                champsWon: 1
            },
            Pistons: {
                city: "Detroit",
                mascot: "Hooper the Horse",
                champsWon: 3
            }
        }
    }
    console.log(theSpurs.otherNBATeams.Mavs);
    // console.log(theSpurs.playerInfo[0].age);
    // console.log(theSpurs);
    // TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
    //  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
    //  'otherNBATeam' team object.

    console.log("Mavs: " + theSpurs.otherNBATeams.Mavs.mascot + "\nJazz: " + theSpurs.otherNBATeams.Jazz.mascot + "\nPistons: " + theSpurs.otherNBATeams.Pistons.mascot)
    theSpurs.playerInfo[1].name = "Ginobli";
    console.log(theSpurs.players[2]);

    theSpurs.otherNBATeams.Bulls = {
        city: "Chicago",
        mascot: "Benny the bull",
        champsWon: 6
    }
    console.log(theSpurs.otherNBATeams);





    // -----------------

    /** Mini Exercises */
    /*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
          isOpen, ranking, yearOpened), as
          well as, information about at least 5 different animals (think nested objects). For each
          Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
           livingPlace). Each animal must also contain a method that returns the sound of that
            animal using the THIS keyword.
           hint: Each animal should have at least 5 properties (one of them being animalSound);
    */



    let randomZoo = {
        name: "The zoo of zoos",
        city: "Forgotten city",
        isOpen: true,
        ranking: "The best",
        yearOpened: 1801,
        makeASound: function(animalObj) {
           return animalObj.animalSound;
        },
        animals: {
            zebra: {
                hasFur: true,
                isMammal: true,
                animalSound: "naaaaaaaaaaay",
                canFly: false,
                livingPlace: "Africa",
                hearTheSound: function() {
                    return this.animalSound;
                },
                //testingSound: this.makeASound(this.animals.zebra)
            },
            eagle: {
                hasFur: false,
                isMammal: false,
                animalSound: "Kaaaaaaaaa",
                canFly: true,
                livingPlace: "North America",
                hearTheSound: function() {
                    return this.animalSound;
                }
            },
            ape: {
                hasFur: true,
                isMammal: true,
                animalSound: "uuu uuuu uuuu",
                canFly: false,
                livingPlace: "Southeast Asia",
                hearTheSound: function() {
                    return this.animalSound;
                }
            },
            whale: {
                hasFur: false,
                isMammal: true,
                animalSound: "ooooooooooo",
                canFly: false,
                livingPlace: "All oceans",
                hearTheSound: function() {
                    return this.animalSound;
                }
            },
            tiger: {
                hasFur: true,
                isMammal: true,
                animalSound: "Rooooooar",
                canFly: false,
                livingPlace: "Siberian Taiga",
                hearTheSound: function() {
                    return this.animalSound;
                }
            }
        }
    }

    console.log(randomZoo.makeASound(randomZoo.animals.zebra));
    //console.log(randomZoo.animals.zebra.testingSound);
    //console.log(randomZoo.animals.eagle.hearTheSound());

})()
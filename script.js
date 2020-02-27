// strings/arrays/objects //////////////////////////////////////////////////////////////////////
let fourTeamBracket = []
let eightTeamBracket = []
let championTeamOne = ''
let championTeamTwo = ''

// FUNCTIONS //////////////////////////////////////////////////////////////////////////////////
// shuffle/randomize array - fields/yates
function shuffle(array) {
    let m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }


// HIDDEN/SHOWN FORMS & BRACKETS ON CLICK/SUBMIT ////////////////////////////////////////////////

// HIDDEN/SHOWN BRACKET FORMS ON CLICK
// 4 team form
$(document).ready(function() {
    $("#fourFormButton").click(function() {
      $("#fourForm").toggle();
    });
  });
// 8 team form
  $(document).ready(function() {
    $("#eightFormButton").click(function() {
      $("#eightForm").toggle();
    });
  });
// 16 team form
  $(document).ready(function() {
    $("#sixteenFormButton").click(function() {
      $("#sixteenForm").toggle();
    });
  });
// 32 team form
  $(document).ready(function() {
    $("#thirtyTwoFormButton").click(function() {
      $("#thrityTwoForm").toggle();
    });
  });

// HIDDEN/SHOWN BRACKET ON CLICK
// 4 team bracket 
$(document).ready(function() {
    $("#submitFourBracket").click(function() {
      $("#fourTeamBracketWrapper").toggle();
    });
  });
  // 8 team bracket
  $(document).ready(function() {
    $("#submitEightBracket").click(function() {
      $("#eightTeamBracketWrapper").toggle();
    });
  });




// FOUR TEAM CREATE BRACKET CLICK EVENT: //////////////////////////////////////////////////////
// pushes values of inputs into fourTeamBracket array
  document.querySelector('#submitFourBracket').addEventListener('click', (e) => {
    e.preventDefault()
    fourTeamBracket.push(document.querySelector('#fourFormInputOne').value)
    fourTeamBracket.push(document.querySelector('#fourFormInputTwo').value)
    fourTeamBracket.push(document.querySelector('#fourFormInputThree').value)
    fourTeamBracket.push(document.querySelector('#fourFormInputFour').value)

    // calls shuffle function to shuffle and return randomized four-team Array
    shuffle(fourTeamBracket)

    // renders four-team bracket in different bracket buttons
    document.querySelector('#fourTeamBracketLeftOne').innerText = fourTeamBracket[0]
    document.querySelector('#fourTeamBracketLeftTwo').innerText = fourTeamBracket[1]
    document.querySelector('#fourTeamBracketRightOne').innerText = fourTeamBracket[2]
    document.querySelector('#fourTeamBracketRightTwo').innerText = fourTeamBracket[3]
  })


// FOUR TEAM BRACKET WINNER CLICK EVENTS 
//   four team bracket, left one, winner, click event: 
//   assigned to champion team 1 string, & moved to champion team 1 button
document.querySelector('#fourTeamBracketLeftOne').addEventListener('click', (e) => {
    championTeamOne = document.querySelector(`#fourTeamBracketLeftOne`).innerText
    document.querySelector('#fourTeamBracketChampionshipOne').innerText = fourTeamBracket[0]

})
//   four team bracket, left two, winner, click event: 
//   assigned to champion team 1 string, & moved to champion team 1 button
document.querySelector('#fourTeamBracketLeftTwo').addEventListener('click', (e) => {
    championTeamOne = document.querySelector(`#fourTeamBracketLeftTwo`).innerText
    document.querySelector('#fourTeamBracketChampionshipOne').innerText = fourTeamBracket[1]
})
//   four team bracket, right one, winner, click event: 
//   assigned to champion team 2 string, & moved to champion team 2 button 
document.querySelector('#fourTeamBracketRightOne').addEventListener('click', (e) => {
    championTeamTwo = document.querySelector(`#fourTeamBracketRightOne`).innerText
    document.querySelector('#fourTeamBracketChampionshipTwo').innerText = fourTeamBracket[2]
})
//   four team bracket, right two, winner, click event: 
//   assigned to champion team 2 string, & moved to champion team 2 button 
document.querySelector('#fourTeamBracketRightTwo').addEventListener('click', (e) => {
    championTeamTwo = document.querySelector(`#fourTeamBracketRightTwo`).innerText
    document.querySelector('#fourTeamBracketChampionshipTwo').innerText = fourTeamBracket[3]
})
//  four team bracket, championship team one: alerts winner 
document.querySelector('#fourTeamBracketChampionshipOne').addEventListener('click', (e) => {
    alert(`${championTeamOne} Wins`)
})
//  four team bracket, championship team two: alerts winner 
document.querySelector('#fourTeamBracketChampionshipTwo').addEventListener('click', (e) => {
    alert(`${championTeamTwo} Wins`)
})



// EIGHT TEAM CREATE BRACKET CLICK EVENT: //////////////////////////////////////////////////////
// pushes values of inputs into eightTeamBracket array

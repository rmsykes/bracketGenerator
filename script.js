// strings/arrays/objects //////////////////////////////////////////////////////////////////////
let fourTeamBracket = []
let eightTeamBracket = []
let sixteenTeamBracket = []
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

// HIDDEN/SHOWN BRACKET INPUT FORMS ON CLICK //////////////////////////////////////////////////////
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

// HIDDEN/SHOWN BRACKET ON CREATE BRACKET CLICK //////////////////////////////////////////////////////
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
  // 16 team bracket
  $(document).ready(function() {
    $("#submitSixteenBracket").click(function() {
      $("#sixteenTeamBracketWrapper").toggle();
    });
  });

// HIDE INPUT FIELDS ON CREATE BRACKET CLICK  //////////////////////////////////////////////////////
// 4 team bracket
$(document).ready(function() {
  $("#submitFourBracket").click(function() {
    $("#fourForm").toggle();
  });
});
// 8 team bracket
$(document).ready(function() {
  $("#submitEightBracket").click(function() {
    $("#eightForm").toggle();
  });
});
// 16 team input fields
$(document).ready(function() {
  $("#submitSixteenBracket").click(function() {
    $("#sixteenForm").toggle();
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


// FOUR TEAM BRACKET WINNER CLICK EVENTS //////////////////////////////////////////////////////
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
document.querySelector('#submitEightBracket').addEventListener('click', (e) => {
  e.preventDefault()
  eightTeamBracket.push(document.querySelector('#eightFormInputOne').value)
  eightTeamBracket.push(document.querySelector('#eightFormInputTwo').value)
  eightTeamBracket.push(document.querySelector('#eightFormInputThree').value)
  eightTeamBracket.push(document.querySelector('#eightFormInputFour').value)
  eightTeamBracket.push(document.querySelector('#eightFormInputFive').value)
  eightTeamBracket.push(document.querySelector('#eightFormInputSix').value)
  eightTeamBracket.push(document.querySelector('#eightFormInputSeven').value)
  eightTeamBracket.push(document.querySelector('#eightFormInputEight').value)

  // calls shuffle function to shuffle and return randomized eight-team Array
  shuffle(eightTeamBracket)

  // renders eight-team bracket in different bracket buttons
  document.querySelector('#eightTeamBracketLeftOne').innerText = eightTeamBracket[0]
  document.querySelector('#eightTeamBracketLeftTwo').innerText = eightTeamBracket[1]
  document.querySelector('#eightTeamBracketLeftThree').innerText = eightTeamBracket[2]
  document.querySelector('#eightTeamBracketLeftFour').innerText = eightTeamBracket[3]
  document.querySelector('#eightTeamBracketRightOne').innerText = eightTeamBracket[4]
  document.querySelector('#eightTeamBracketRightTwo').innerText = eightTeamBracket[5]
  document.querySelector('#eightTeamBracketRightThree').innerText = eightTeamBracket[6]
  document.querySelector('#eightTeamBracketRightFour').innerText = eightTeamBracket[7]
})


// EIGHT TEAM BRACKET WINNER CLICK EVENTS //////////////////////////////////////////////////////
// eight team bracket, left one, winner, click event: 
// assigned to eight team bracket, final four, left one button  
document.querySelector('#eightTeamBracketLeftOne').addEventListener('click', (e) => {
  document.querySelector('#eightTeamBracketFinalFourLeftOne').innerText = eightTeamBracket[0]
})
// eight team bracket, elite 8, left two, winner, click event:
// assign to eight team bracket, final four, left one button
document.querySelector('#eightTeamBracketLeftTwo').addEventListener('click', (e) => {
  document.querySelector('#eightTeamBracketFinalFourLeftOne').innerText = eightTeamBracket[1]
})
// eight team bracket, elite 8, left three, winner, click event:
// assign to eight team bracket, final four, left two button
document.querySelector('#eightTeamBracketLeftThree').addEventListener('click', (e) => {
  document.querySelector('#eightTeamBracketFinalFourLeftTwo').innerText = eightTeamBracket[2]
})
// eight team bracket, elite 8, left four, winner click event:
// assign to eight team bracket, final four, left two button
document.querySelector('#eightTeamBracketLeftFour').addEventListener('click', (e) => {
  document.querySelector('#eightTeamBracketFinalFourLeftTwo').innerText = eightTeamBracket[3]
})
// eight team bracket, elite 8, right one, winner click event:
// assign to eight team bracket, final four, right one
document.querySelector('#eightTeamBracketRightOne').addEventListener('click', (e) => {
  document.querySelector('#eightTeamBracketFinalFourRightOne').innerText = eightTeamBracket[4]
})
// eight team bracket, elite 8, right two, winner click event:
// assign to eight team bracket, final four, right one
document.querySelector('#eightTeamBracketRightTwo').addEventListener('click', (e) => {
  document.querySelector('#eightTeamBracketFinalFourRightOne').innerText = eightTeamBracket[5]
})
// eight team bracket, elite 8, right three, winner click event:
// assign to eight team bracket, final four, right two
document.querySelector('#eightTeamBracketRightThree').addEventListener('click', (e) => {
  document.querySelector('#eightTeamBracketFinalFourRightTwo').innerText = eightTeamBracket[6]
})
// eight team bracket, elite 8, right four, winner click event:
// assign to eight team bracket, final four, right two
document.querySelector('#eightTeamBracketRightFour').addEventListener('click', (e) => {
  document.querySelector('#eightTeamBracketFinalFourRightTwo').innerText = eightTeamBracket[7]
})
// eight team bracket, final 4, left one, winner click event:
// assign to champion team 1 string, & moved to champion button 1 button
document.querySelector('#eightTeamBracketFinalFourLeftOne').addEventListener('click', (e) => {
  championTeamOne = document.querySelector(`#eightTeamBracketFinalFourLeftOne`).innerText
  document.querySelector('#eightTeamBracketChampionshipOne').innerText = document.querySelector('#eightTeamBracketFinalFourLeftOne').innerText
})
// eight team bracket, final 4, left two, winner click event:
// assign to champion team 1 string, & moved to champion button 1 button
document.querySelector('#eightTeamBracketFinalFourLeftTwo').addEventListener('click', (e) => {
  championTeamOne = document.querySelector(`#eightTeamBracketFinalFourLeftTwo`).innerText
  document.querySelector('#eightTeamBracketChampionshipOne').innerText = document.querySelector('#eightTeamBracketFinalFourLeftTwo').innerText
})
// eight team bracket, final 4, right one, winner click event:
// assign to champion team 2 string, & moved to champion button 2 button
document.querySelector('#eightTeamBracketFinalFourRightOne').addEventListener('click', (e) => {
  championTeamTwo = document.querySelector(`#eightTeamBracketFinalFourRightOne`).innerText
  document.querySelector('#eightTeamBracketChampionshipTwo').innerText = document.querySelector('#eightTeamBracketFinalFourRightOne').innerText
})
// eight team bracket, final 4, right two, winner click event:
// assign to champion team 2 string, & moved to champion button 2 button
document.querySelector('#eightTeamBracketFinalFourRightTwo').addEventListener('click', (e) => {
  championTeamTwo = document.querySelector(`#eightTeamBracketFinalFourRightTwo`).innerText
  document.querySelector('#eightTeamBracketChampionshipTwo').innerText = document.querySelector('#eightTeamBracketFinalFourRightTwo').innerText
})
// eight team bracket, championship team one: alerts winner 
document.querySelector('#eightTeamBracketChampionshipOne').addEventListener('click', (e) => {
  alert(`${championTeamOne} Wins!`)
})
// eight team bracket, championship team two: alerts winner 
document.querySelector('#eightTeamBracketChampionshipTwo').addEventListener('click', (e) => {
  alert(`${championTeamTwo} Wins!`)
})


// SIXTEEN TEAM CREATE BRACKET CLICK EVENT: //////////////////////////////////////////////////////
// pushes values of inputs into sixteenTeamBracket array
document.querySelector('#submitSixteenBracket').addEventListener('click', (e) => {
  e.preventDefault()
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputOne').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputTwo').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputThree').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputFour').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputFive').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputSix').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputSeven').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputEight').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputNine').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputTen').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputEleven').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputTwelve').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputThirteen').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputFourteen').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputFifteen').value)
  sixteenTeamBracket.push(document.querySelector('#sixteenFormInputSixteen').value)
  
  // calls shuffle function to shuffle and return randomized sixteen-team Array
  shuffle(sixteenTeamBracket)

  // renders sixteen-team bracket in different bracket buttons
  document.querySelector('#sixteenTeamBracketLeftOne').innerText = sixteenTeamBracket[0]
  document.querySelector('#sixteenTeamBracketLeftTwo').innerText = sixteenTeamBracket[1]
  document.querySelector('#sixteenTeamBracketLeftThree').innerText = sixteenTeamBracket[2]
  document.querySelector('#sixteenTeamBracketLeftFour').innerText = sixteenTeamBracket[3]
  document.querySelector('#sixteenTeamBracketLeftFive').innerText = sixteenTeamBracket[4]
  document.querySelector('#sixteenTeamBracketLeftSix').innerText = sixteenTeamBracket[5]
  document.querySelector('#sixteenTeamBracketLeftSeven').innerText = sixteenTeamBracket[6]
  document.querySelector('#sixteenTeamBracketLeftEight').innerText = sixteenTeamBracket[7]

  document.querySelector('#sixteenTeamBracketRightOne').innerText = sixteenTeamBracket[8]
  document.querySelector('#sixteenTeamBracketRightTwo').innerText = sixteenTeamBracket[9]
  document.querySelector('#sixteenTeamBracketRightThree').innerText = sixteenTeamBracket[10]
  document.querySelector('#sixteenTeamBracketRightFour').innerText = sixteenTeamBracket[11]
  document.querySelector('#sixteenTeamBracketRightFive').innerText = sixteenTeamBracket[12]
  document.querySelector('#sixteenTeamBracketRightSix').innerText = sixteenTeamBracket[13]
  document.querySelector('#sixteenTeamBracketRightSeven').innerText = sixteenTeamBracket[14]
  document.querySelector('#sixteenTeamBracketRightEight').innerText = sixteenTeamBracket[15] 
})

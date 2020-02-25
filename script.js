// objects
let fourTeamBracket = []



// hidden forms displayed on click

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

// create bracket click event listener
// 4 team create click
  document.querySelector('#submitFourBracket').addEventListener('click', (e) => {
    e.preventDefault()
    fourTeamBracket.push(document.querySelector('#fourFormInputOne').value)
    document.querySelector('#fourTeamBracket').innerText = fourTeamBracket[0]
  })

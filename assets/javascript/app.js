var topics = [
  "run dmc",
  "snoop doggy dogg",
  "notorious big",
  "2pac",
  "nwa",
  "mc hammer",
  "eazy e",
  "wu-tang clan",
  "master p",
  "beastie boys",
  "outkast"
];

var listOfOthers = [
  "DMX",
  "Three 6 Mafia",
  "Nas",
  "dr. dre",
  "salt n pepa",
  "Jay Z",
  "warren g",
  "lil wayne",
  "mob deep",
  "KRS one",
  "de la soul",
  "lil jon",
  "kanye west",
  "snoop dogg",
  "Ice Cube",
  "UGK",
  "Kool Keith",
  "Kendrick Lamar",
  "Cypress Hill"
];
var lowerCaseList = [];

for (var i = 0; i < listOfOthers.length; i++) {
  lowerCaseList.push(listOfOthers[i].toLowerCase());
}

$(document).ready(function() {
  renderButtons();
});

$("#button-add").on("click", function() {
  event.preventDefault();

  var inputText = $("#add")
    .val()
    .trim()
    .toLowerCase();

  if (lowerCaseList.indexOf(inputText) >= -1) {
    if (topics.indexOf(inputText) > -1) {
      alert(inputText + " has already been added.");
      return;
    } else {
      if (inputText !== "") {
        topics.push(inputText);
        $("#add").val("");
        renderButtons();
      }
    }
  } else {
    alert(inputText + " is not an acceptable rapper");
  }
});

$("#button-delete").on("click", function() {
  event.preventDefault();
  topics.pop();
  renderButtons();
});

function renderButtons() {
  $("#rapper-button").empty();

  for (var i = 0; i < topics.length; i++) {
    var rapper = topics[i];
    var button = $("<button class = 'rapper m-1 p- btn btn-success'/>")
      .attr("data-name", rapper)
      .text(rapper);
    $("#rapper-button").append(button);
  }
}

$(document).on("click", ".rapper", getAPI);

function getAPI() {
  $("#gifs-appear-here").empty();
  var rapper = $(this).attr("data-name");
  var apiKey = "&api_key=jTWg8u1iBnfVgoly5uxq0oZxjoAiOIun";
  var limit = "&limit=12";
  var rating = "&rating=";
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    rapper +
    apiKey +
    limit +
    rating;

  console.log(queryURL);
  console.log(rating);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    for (var i = 0; i < response.data.length; i++) {
      var imageURL = response.data[i].images.downsized.url;
      var stillImg = response.data[i].images.downsized_still.url;
      var animateImg = imageURL;

      var rapperImg = $(
        "<img class = 'rapperImg img-fluid img-thumbnail m-2'>"
      );

      rapperImg.attr({ src: stillImg, alt: rapper });
      rapperImg.attr("data-still", stillImg);
      rapperImg.attr("data-animate", animateImg);
      rapperImg.attr("data-state", "animate");

      $("#gifs-appear-here").prepend(rapperImg);
    }
  });
}

$(document).on("click", ".rapperImg", gifState);

function gifState() {
  var state = $(this).attr("data-state");
  var animate = $(this).attr("data-animate");
  var still = $(this).attr("data-still");

  if (state === "still") {
    $(this).attr("src", animate);
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", still);
    $(this).attr("data-state", "still");
  }
}

$(document).ready(function() {
    renderButtons();
});

  var topics = [
    "run dmc",
    "notorious big",
    "2pac",
    "nwa",
    "mc hammer",
    "eazy e",
    "wu-tang clan",
    "sir mixalot",
    "master p",
    "beastie boys",
    "outkast",
  ];
  var lowerCaseList = [];

  var listOfOthers = [
    "dmx",
    "three 6 mafia",
    "nas",
    "dr. dre",
    "salt n pepa",
    "jay z",
    "warren g",
    "lil wayne",
    "mob deep",
    "krs one",
    "de la soul"
    "lil jon",
    "kanye west",
    "snoop dogg"
    "ice cube",
    "ugk",
    "kool keith",
    ""
  ];
  for (var i = 0; i < listOfOthers.length; i++) {
    lowerCaseList.push(listOfOthers[i].toLowerCase());
  }

function renderButtons() {
$("#rapper-button").empty();

for (var i=0; i < topics.length; i++) {
 var rapper = topics[i];
 var button = $("<button class = 'rapper m-1 p- btn btn-warning'/>")
 .attr("data-name", rapper)
      .text(rapper);
      $("#rapper-button").append(button);
  }
}

$(document).on("click", ".animal", getApi);


var ArtPieces = [
	{
		name: "Hours of Jeanne d'Evreaux",
		Author: "Jean Pucelle",
		period: "1324-1328",
		src: "artPieces/bookofHours.jpg"
	},
	{
		name: "Philip the Bold and Margaret of Flanders",
		Author: "Claus Sluter",
		period: "1389-1406",
		src: "artPieces/philipTheBold.jpg"
	},
	{
		name: "Tres Riches Heures",
		Author: "Limbourg brothers",
		period: "1411-1416",
		src: "artPieces/TresRichesHeures.jpg"
	},
	{
		name: "Hours of Mary of Burgundy",
		Author: "anonymous painter - Master of Mary of Burgundy",
		period: "Before 1482",
		src: "artPieces/HoursofMaryofBurgundy.jpg"
	},

];

var answer_button = $("#show-answer");
var next_button = $("#next-button");
var currentArtPiece = ArtPieces[0].name;
console.log(currentArtPiece);
answer_button.click(function(){
	$(".answer_part").show();
});

next_button.click(function(){
	$(".answer_part").hide();
	$("#artist-input").val('');
	$("#period-input").val(''); 
	var next_pos = titles.indexOf(currentArtPiece) + 1;
	if (next_pos == titles.length) {
		next_pos = 0;
	}
	var next_work = ArtPieces[next_pos];
	$("#artist-name").html(next_work.Author);
	$("#art-period").html(next_work.period);
	$("#art_title").html(next_work.name);
	$("#img").attr("src", next_work.src);
	currentArtPiece = next_work.name;

});

$(document).keypress(function(event){
	if (event.keyCode == 93) {		
		$(".answer_part").hide();
		$("#artist-input").val('');
		$("#period-input").val(''); 
		var next_pos = titles.indexOf(currentArtPiece) + 1;
		if (next_pos == titles.length) {
			next_pos = 0;
		}
		var next_work = ArtPieces[next_pos];
		$("#artist-name").html(next_work.Author);
		$("#art-period").html(next_work.period);
		$("#art_title").html(next_work.name);
		$("#img").attr("src", next_work.src);
		currentArtPiece = next_work.name;
	}
	if (event.keyCode == 91) {
		$(".answer_part").show();
	}
	
});

var titles = [];
for (var i = 0; i < ArtPieces.length; i++) {
	titles.push(ArtPieces[i].name);
	$(".mdl-navigation").append('<a class="mdl-navigation__link" id="'+i+'" href="#">' + ArtPieces[i].name +"</a>");
}
for (var i = 0; i < ArtPieces.length; i++) {
	$("#"+i).click(function(event){
		var currentID = this.id;
		currentArtPiece = ArtPieces[currentID-1].name;
		console.log(currentArtPiece);
	});
}

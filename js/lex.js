var yellow = "#F4B350";
var blue = "#52B3D9";
var green = "#3FC380";
var pink = "#F62459";
var teal = "#1BA39C";
var red = "#E74C3C";
var purple = "#9B59B6";
var ming = "#336E7B";
var orange = "#D36B29";

var prefix = [
	{word: "macro", dots: "ma·cro·", def: "long", col: yellow},
	{word: "micro", dots: "mi·cro·", def: "small", col: orange},
	{word: "eu", dots: "eu·", def: "good", col: green},
	{word: "mega", dots: "me·ga·", def: "large", col: orange},
	{word: "caco", dots: "ca·co·", def: "bad", col: green},
	{word: "homo", dots: "ho·mo·", def: "the same", col: yellow},
	{word: "hetero", dots: "he·te·ro·", def: "different", col: orange},
	{word: "pan", dots: "pan·", def: "all", col: green},
	{word: "dasy", dots: "da·sy·", def: "hairy", col: yellow},
	{word: "tele", dots: "te·le·", def: "far off", col: orange},
	{word: "pseudo", dots: "pseu·do·", def: "fake", col: green},
	{word: "neo", dots: "ne·o·", def: "new", col: yellow},
	{word: "archaeo", dots: "ar·chae·o·", def: "old", col: orange},
	{word: "plano", dots: "pla·no·", def: "flat", col: green},
	{word: "hiero", dots: "hie·ro·", def: "sacred", col: yellow},
	{word: "necro", dots: "ne·cro·", def: "old", col: orange},
	{word: "oliga", dots: "o·li·ga·", def: "a few", col: green},
	{word: "brachy", dots: "bra·chy·", def: "short", col: yellow},
	{word: "calli", dots: "cal·li·", def: "beautiful", col: orange},
	{word: "chlora", dots: "chlo·ra·", def: "green", col: green},
	{word: "crypto", dots: "cryp·to·", def: "hidden", col: orange},
	{word: "chrysa", dots: "chry·sa·", def: "golden", col: yellow},
	{word: "dino", dots: "di·no·", def: "terrible", col: green},
	{word: "oxy", dots: "ox·y·", def: "sharp", col: yellow},
	{word: "myri", dots: "my·ri·", def: "countless", col: orange},
	{word: "idio", dots: "id·i·o·", def: "private", col: green},
	{word: "amphi", dots: "am·phi·", def: "both", col: yellow},
	{word: "melan", dots: "me·lan·", def: "black", col: orange},
	{word: "leuko", dots: "leu·ko·", def: "white", col: yellow},
	{word: "etym", dots: "e·tym·", def: "true", col: green},
 ];

 var root = [
	{word: "anthro", dots: "an·thro·", def: "men", col: red},
	{word: "gyne", dots: "gy·ne·", def: "women", col: teal},
	{word: "rhino", dots: "rhi·no·", def: "noses", col: pink},
	{word: "hippo", dots: "hip·po·", def: "horses", col: red},
	{word: "algia", dots: "al·gi·a·", def: "pain", col: teal},
	{word: "chiro", dots: "chi·ro·", def: "pain", col: pink},
	{word: "dendrono", dots: "den·dro·no·", def: "trees", col: red},
	{word: "doxo", dots: "dox·o·", def: "opinions", col: teal},
	{word: "lexi", dots: "lex·i·", def: "words", col: pink},
	{word: "psycho", dots: "psy·cho·", def: "souls", col: red},
	{word: "techno", dots: "tech·no·", def: "art", col: teal},
	{word: "podo", dots: "po·do·", def: "feet", col: pink},
	{word: "hypno", dots: "hyp·no·", def: "sleep", col: red},
	{word: "pyga", dots: "py·ga·", def: "buttocks", col: teal},
	{word: "petro", dots: "pet·ro·", def: "stones", col: pink},
	{word: "hema", dots: "he·ma·", def: "blood", col: red},
	{word: "ethno", dots: "eth·no·", def: "races", col: teal},
	{word: "dento", dots: "den·to·", def: "teeth", col: pink},
	{word: "thermo", dots: "ther·mo·", def: "heat", col: red},
	{word: "dynamo", dots: "dy·na·mo·", def: "power", col: teal},
	{word: "icono", dots: "i·co·no·", def: "images", col: pink},
	{word: "bibli", dots: "bi·bli·", def: "books", col: red},
	{word: "bio", dots: "bi·o·", def: "life", col: teal},
	{word: "demo", dots: "de·mo·", def: "people", col: pink},
	{word: "derma", dots: "der·ma·", def: "skin", col: red},
	{word: "chroma", dots: "chro·ma·", def: "colors", col: teal},
	{word: "photo", dots: "pho·to·", def: "light", col: pink},
	{word: "ergo", dots: "er·go·", def: "work", col: red},
	{word: "xylo", dots: "xy·lo·", def: "wood", col: teal},
	{word: "galacta", dots: "gal·ac·ta·", def: "milk", col: pink},
	{word: "episteme", dots: "ep·is·te·me·", def: "knowledge", col: red},
	{word: "encephalo", dots: "en·ce·pha·lo·", def: "brains", col: teal},
	{word: "chrono", dots: "chro·no·", def: "time", col: pink},
	{word: "etho", dots: "e·tho·", def: "customs", col: teal},
 ];

 var suffix = [
	{word: "philia", dots: "phi·li·a", def: "The love of", col: purple},
	{word: "phobia", dots: "pho·bi·a", def: "The fear of", col: blue},
	{word: "logy", dots: "lo·gy", def: "The study of", col: ming},
	{word: "mania", dots: "ma·ni·a", def: "The craziness for", col: purple},
	{word: "sis", dots: "sis", def: "The condition of having", col: blue },
	{word: "graphy", dots: "gra·phy", def: "The representation of", col: ming},
	{word: "archy", dots: "ar·chy", def: "The rule of", col: purple},
	{word: "gony", dots: "go·ny", def: "The production of", col: blue},
	{word: "nomy", dots: "no·my", def: "The laws of", col: ming},
	{word: "cracy", dots: "cra·cy", def: "The authority of", col: purple},
	{word: "synthesis", dots: "syn·the·sis", def: "The combination of", col: blue},
	{word: "plasty", dots: "pla·sty", def: "The shaping of", col: ming},
 ];

var countP = 0;
var countR = 2;
var countS = 1;

var tweet;
var twitterTextUrl;

console.log(prefix[0].word);
console.log(prefix[1].def);
console.log(prefix[2].dots);
console.log(suffix[3].def);

function update(p, r, s){
	// $(".composite-sentence").hide();
	// $(".composite-word").hide();
	$(".composite-word").text(prefix[p].dots + root[r].dots + suffix[s].dots);
	$(".composite-sentence").text(suffix[s].def + " " + prefix[p].def + " " + root[r].def);
	$(".part-1").text(prefix[p].word).css("background-color", prefix[p].col);
	$(".part-2").text(root[r].word).css("background-color", root[r].col);
	$(".part-3").text(suffix[s].word).css("background-color", suffix[s].col);

	tweet= prefix[p].word + "·" +
			root[r].word + "·" + 
			suffix[s].word + ": " +
			$(".composite-sentence").text() +
			". Make your own Greek words at ";
	
	 twitterTextUrl = "https://twitter.com/share?text=" + tweet + 
	 					"http://lexiphilia.com"; 

	$(".my-twitter-share-button").attr("href", twitterTextUrl);
	console.log(twitterTextUrl);

};



$(document).ready(function() {
  
  	update(countP, countR, countS);
   
      // Bind the swiperightHandler callback function to the swipe event on div.box
    $( ".box1" ).on( "swiperight", swiperightHandler);
    // $( ".box1" ).on( "click", swiperightHandler);
   
    // Callback function references the event target and adds the 'swiperight' class to it
    function swiperightHandler( event ){
      // $( event.target ).removeClass( "red" );
      // $( event.target ).addClass( "blue" );
      console.log("something");
		
		if(countP < prefix.length-1){
			countP++;
			
		} else { 
			countP = 0;
		 }
		update(countP, countR, countS);
    }


    $( ".box1" ).on( "swipeleft", swipeleftHandler );
   
    // Callback function references the event target and adds the 'swiperight' class to it
    function swipeleftHandler( event ){
      // $( event.target ).removeClass( "blue" );
      // $( event.target ).addClass( "red" );
      console.log("something");

		if(countP > 0){
			countP--;
			
		} else { 
			countP = prefix.length-1;
		 }
		update(countP, countR, countS);

    }

	$( ".box2" ).on( "swiperight", swiperightHandler2);
   
    function swiperightHandler2( event ){	
		if(countR < root.length-1){
			countR++;	
		} else { 
			countR = 0;
		 }
		update(countP, countR, countS);
    }


    $( ".box2" ).on( "swipeleft", swipeleftHandler2 );
   
    function swipeleftHandler2( event ){
		if(countR > 0){
			countR--;
			
		} else { 
			countR = root.length-1;
		 }
		update(countP, countR, countS);

    }

    $( ".box3" ).on( "swiperight", swiperightHandler3);
   
    function swiperightHandler3( event ){	
		if(countS < suffix.length){
			countS++;	
		} else { 
			countS = 0;
		 }
		update(countP, countR, countS);
    }


    $( ".box3" ).on( "swipeleft", swipeleftHandler3 );
   
    function swipeleftHandler3( event ){
		if(countS > 0){
			countS--;
			
		} else { 
			countS = suffix.length-1;
		 }
		update(countP, countR, countS);

    }

    //randomizer function
    $(".button").click(randomizer);

    function randomizer(){
    	$(".button").addClass("button-tap");
    	countP = Math.floor(Math.random()*prefix.length);
    	countR = Math.floor(Math.random()*root.length);
    	countS = Math.floor(Math.random()*suffix.length);
    	update(countP, countR, countS);
    	$(".button").removeClass("button-tap");

    }


//this is tap stuff, probably wont use it
  // $( ".box1" ).bind( "tap", tapHandler );
  
  // function tapHandler( event ){

  // 	$( event.target ).toggle(function() {
  //       $( event.target ).removeClass( "yellow" );
  //     	$( event.target ).addClass( "green" );

  //   }, function() {
  //     	$( event.target ).addClass( "green" );
  //     	$( event.target ).removeClass( "yellow" );
  //  });      
  
  //  }

   $( ".box1" ).bind( "tap", tapHandler );
  
  function tapHandler( event ){
  		if(countP < prefix.length-1){
			countP++;
			
		} else { 
			countP = 0;
		 }
		update(countP, countR, countS);
   }

   $( ".box2" ).bind( "tap", tapHandler2 );
  
  function tapHandler2( event ){
  		if(countR < root.length-1){
			countR++;	
		} else { 
			countR = 0;
		 }
		update(countP, countR, countS);
   }

   $( ".box3" ).bind( "tap", tapHandler3 );
  
  function tapHandler3( event ){
  		if(countS < suffix.length){
			countS++;	
		} else { 
			countS = 0;
		 }
		update(countP, countR, countS);
   }

   //twitter
   window.twttr=(function(d,s,id){var t,js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);return window.twttr||(t={_e:[],ready:function(f){t._e.push(f)}})}(document,"script","twitter-wjs"));


});

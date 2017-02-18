$(document).ready(function(){ 
  var rand = function(arg) {
        if ($.isArray(arg)) {
            return arg[rand(arg.length)];
        } else if (typeof arg == "number") {
            return Math.floor(Math.random() * arg);
        } else {
            return 4;  // chosen by fair dice roll
        }
    };
    var items = ['Ionian','Dorian','Phrygian','Lydian','Mixolydian','Aeolian','Locrian'];
    $('.randomize').click(function(){
      console.log(rand(items));
      $('#mode > h1').html(rand(items));
    });
});
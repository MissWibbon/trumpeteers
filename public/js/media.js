

var winImages = [
  { 'img': '/images/GRaExcited.gif' },
  { 'img': '/images/GRgordonGoat.jpg' },
  { 'img': '/images/GRPeeringLeft.jpg' },
  { 'img': '/images/GRSmilingOutside.png' },
];


var loseImages = [
  { 'img': '/images/GRawHell.jpg' },
  { 'img': '/images/GRCryingMan.jpg' },
  { 'img': '/images/GRCutoffGirl.jpg' },
  { 'img': '/images/GREyeRoll.gif' },
  { 'img': '/images/GRFinesse.gif' },
  { 'img': '/images/GRgetOut.jpg' },
  { 'img': '/images/GRGetTheF@$&Out.gif' },
  { 'img': '/images/GRHandsOnHead.jpg' },
  { 'img': '/images/GRHeadSpinning.gif' },
  { 'img': '/images/GROhFace.jpg' },
  { 'img': '/images/GRWhySoDifficult.gif' },
  { 'img': '/images/GRYelling.jpg' }
];


var loseAudio = [
  { 'audio': '/audio/Absolutely-useless.m4a' },
  { 'audio': '/audio/Alfredo-my-ass.m4a' },
  { 'audio': '/audio/Are-you-for-real.m4a' },
  { 'audio': '/audio/Bitter-and-theyre-burnt.m4a' },
  { 'audio': '/audio/Crunch-fucking-spagetti.m4a' },
  { 'audio': '/audio/Easiest-and-youre-still-screwing-up.m4a' },
  { 'audio': '/audio/Get-out.m4a' },
  { 'audio': '/audio/Get-out2.m4a' },
  { 'audio': '/audio/Get-the-fuck-out-of-here.m4a' },
  { 'audio': '/audio/Gr1.m4a' },
  { 'audio': '/audio/Have-any-idea-how-stupid-you-look.m4a' },
  { 'audio': '/audio/Hurry-up-bozo.m4a' },
  { 'audio': '/audio/I-dont-know-how-to-wake-you-up-anymore.m4a' },
  { 'audio': '/audio/I-just-want-the-best.m4a' },
  { 'audio': '/audio/I-know-you-dont-care-i-do.m4a' },
  { 'audio': '/audio/I-mean-fuck-me.m4a' },
  { 'audio': '/audio/It-looks-a-mess.m4a' },
  { 'audio': '/audio/Its-hideous.m4a' },
  { 'audio': '/audio/Its-just-not-good-enough.m4a' },
  { 'audio': '/audio/Like-a-bunch-of-idiots.m4a' },
  { 'audio': '/audio/Piss-off.m4a' },
  { 'audio': '/audio/Raw-and-overcooked-start-again.m4a' },
  { 'audio': '/audio/get-a-grip.m4a' },
  { 'audio': '/audio/The-confusion-was-evident-get-a-grip.m4a' },
  { 'audio': '/audio/This-pigeon-is-so-raw-it-can-still-fly.m4a' },
  { 'audio': '/audio/What-are-you-doing.m4a' },
  { 'audio': '/audio/What-the-fuck-are-you-doing.m4a' },
  { 'audio': '/audio/Wheres-the-standards.m4a' },
  { 'audio': '/audio/You-are-so-in-denial.m4a' },
  { 'audio': '/audio/You-stuckup-precious.m4a' },
  { 'audio': '/audio/You-sucked.m4a' },
];



var winAudio = [
  { 'audio': '/audio/Cooked-beautifully-delicious.m4a' },
  { 'audio': '/audio/Great-job-well-done.m4a' },
  { 'audio': '/audio/Greatjob-welldone.m4a' },
  { 'audio': '/audio/Looking-good.m4a' },
  { 'audio': '/audio/Unbelievable.m4a' },
  { 'audio': '/audio/Voice 001.m4a' },
  { 'audio': '/audio/You-hung-in-there-never-gave-up.m4a' },

];
function getRandomAudio() {
  var randomLoseAudio = loseAudio[Math.floor(Math.random() * recipes.length)].audio;
  return randomLoseAudio;

}
var randomWinAudio = winAudio[Math.floor(Math.random() * recipes.length)].audio;

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

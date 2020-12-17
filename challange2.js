var JohnAvg = (89+120+103)/3;
var MikeAvg = (116+94+123)/3;
var MaryAvg = (97+135+105)/3;
console.log("John\'s Avg = " + JohnAvg + "\nMike\'s Avg =" + MikeAvg + "\nMary\'s Avg = " + MaryAvg);
if(JohnAvg>MikeAvg && JohnAvg>MaryAvg)
{
    console.log("John is the winner with avg " + JohnAvg);
}
else if(MikeAvg>JohnAvg && MikeAvg>MaryAvg)
{
    console.log("Mike is the winner with avg " + MikeAvg);
}
else if(MaryAvg>MikeAvg && MaryAvg>JohnAvg)
{
    console.log("Mary is the winner with avg " + MaryAvg);
}
else
{
    console.log("Draw");
}
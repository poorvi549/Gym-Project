a=1;
function openpack(ch)
{   if(ch=='pack1')
    document.getElementById("info").innerHTML="<h2>Perfect for Beginners:</h2><hr color='white' width='75%'><br>INR 4000/Month<br><i><font size='4'>(recurs for 3 months)</font></i><ul><li>Unlimited Yoga access<li>24/7 Gym access<li>Use of lockers and showers";
    if(ch=='pack2')
    document.getElementById("info").innerHTML="<h2>GREAT FOR THOSE WHO TAKE WELLNESS SERIOUSLY:</h2><hr color='white' width='75%'><br>INR 3000/Month<br><i><font size='4'>(recurs for 12 months)</font></i><ul><li>Unlimited Yoga access<li>24/7 Gym access<li>Use of lockers and showers<li>Weekday pool access";
    if(ch=='pack3')
    document.getElementById("info").innerHTML="<h2>UNLIMITED ACCESS TO SERVICES:</h2><hr color='white' width='75%'><br>INR 5500/Month<br><i><font size='4'>(recurs for 1 month)</font></i><ul><li>Unlimited Yoga access<li>24/7 Gym access<li>Use of lockers and showers<li>Access to pool 7 days a week<li>12% off all store products<li>Complimentary Gym Merchandise";
}
function faq(ch)
{ if(ch=='faq1')
document.getElementById("info").innerHTML="<h2>Info:</h2><hr color='white' width='75%'><br>Mumbai:- 9029002873,<br> Pune:- 8411907222,<br> Delhi:- 9560044981,<br> Other Cities:- 9560044981<br>Please call one of the numbers above and we can arrange a convenient time for you to visit or alternatively join us online.<br>";
if(ch=='faq2')
document.getElementById("info").innerHTML="<h2>Info:</h2><hr color='white' width='75%'><br>There is no one answer to these questions.<br> When you join Gold’s Gym one of our qualified fitness instructors will develop a personal program for you based on your current fitness level and goals.";
if(ch=='faq3')
document.getElementById("info").innerHTML="<h2>Info:</h2><hr color='white' width='75%'><br>Atmosphere – Comfortable and Inviting<br>Staff – Friendly, helpful, & professional.<br>Service – Exceptional.<br>Follow-up – What most clubs won’t do after they have your money – to us it is ESSENTIAL!<br>Motivation – Some have, some don’t – we provide it.<br>Goals – Our job is to help you accomplish yours!";
if(ch=='faq4')
document.getElementById("info").innerHTML="<h2>Info:</h2><hr color='white' width='75%'><br>You can cancel your membership at any time by giving us 30 days written notice from your next Direct Debit collection date provided you have completed your minimum term. If you are still within your contract then a cancellation request will only be considered for the following reason :-<ul><li>Long Term (Over 3 months) injury or sickness : This agreement can be cancelled in the event of an illness, injury or medical condition which in the written opinion of a doctor or other suitably qualified medical practitioner prohibits exercise for 3 months or longer upon appropriate proof being provided.<li>Relocation : This agreement can be cancelled in the event that your new permanent address is more than 15 miles away from any of our branches upon receipt of a copy utility bill or bank statement showing the new address.<li>Redundancy : This agreement can be cancelled upon appropriate proof of redundancy from your employer or other loss of livelihood.<li>Pregnancy : This agreement can be cancelled upon appropriate written proof being given.";
if(ch=='faq5')
document.getElementById("info").innerHTML="<h2>Info:</h2><hr color='white' width='75%'><br>All members are required to present their membership card at Reception on every visit to the Club. Lost cards will be replaced at the member’s expense.";
if(ch=='faq6')
document.getElementById("info").innerHTML="<h2>Info:</h2><hr color='white' width='75%'><br>Memberships may be suspended for any reasons for an admin fee of £25 for a period of not less than one and not more than three months.";

}

function next(){
    a++;
    if(a>6)
    {a=1;}

    document.getElementById("img1").src="images/slideimg"+a+".jpg";

    }
function prev(){
        a--;
        if(a<1)
        {a=6;}
        document.getElementById("img1").src="images/slideimg"+a+".jpg";
    }

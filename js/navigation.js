// Navigation bar header says "Troop 463", center aligned
document.write("<div id='navigation'>");

//document.write("<div align='center'><h3>Troop 463</h3></div>");
//document.write("<p></p>");

if (false && location.href.indexOf("index.html") == -1) {
  // add the mini banner
  document.write('<div align="center" style="padding: 7px 0;"><a href="../index.html">' +
    '<img height="45px" alt="Boy Scout Troop 463 Banner" src="../images/banner3.png"></img></a></div>');
  document.write("<p></p>");
}


// Links...
document.write("<p><a href='index.html'>Home</a></p>");
document.write("<p><a href='calendar.html'>Outings Calendar</a></p>");
document.write("<p><a href='philosophy.html'>463's Philosophy</a></p>");
document.write("<p><a href='joining.html'>Joining Troop 463</a></p>");
document.write("<p><a href='meetings.html'>Troop Meetings</a></p>");
document.write("<p><a href='organization.html'>Troop Organization</a></p>");
document.write("<p><a href='highadventure.html'>High Adventure</a></p>");
document.write("<p><a href='troophistory.html'>Troop History</a></p>");
document.write("<p><a href='troopsuccess.html'>Troop Success</a></p>");
document.write("<p><a href='orderofthearrow.html'>Order of the Arrow</a></p>");
document.write("<p><a href='resources.html'>Resources & Links</a></p>");

document.write("</div>");

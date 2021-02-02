var wsbUrl = "https://www.reddit.com/r/wallstreetbets/comments/la1cxi/sec_intern_pls_read_false_media_reports_about/.json";


function getAllAwardings(url){
    fetch(url)
    .then(response => response.text())
    .then((data) => {
      document.getElementById("mainspan").text = data;
  });
}


console.log(getAllAwardings(wsbUrl));
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "1da6229a63ed45acb68a2e33ea027098"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
    var example = result.response.docs;
    for( i = 0; i < example[i].length; i++ ){
      console.log(example[i]);
    }


}).fail(function(err) {
  throw err;
});

function example(){
  
}
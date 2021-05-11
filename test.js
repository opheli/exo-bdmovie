$(document).ready(function() {
    $("#search").click(function() {
        let movieName = $("#movieName").val();
        //console.log(movieName);
        let searchLink = "https://api.themoviedb.org/3/search/movie?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&query=" + movieName;
        $.ajax({
            url: searchLink + "&page=1",
            success: function(data, statuts, response) {
                if (data.total_results == '0') {
                    $("#result").html("<h4>Film not found</h4>");
                    return;
                }
                console.log(data.total_pages);
                $("#resultdefault").text("Total Result : " + data.total_results);
                data.results.forEach(element => {
                    $("#result").append('<div class="row"><div class="col-6"><p>Title : ' + element.title + '</p><p>Synopsis : ' + element.overview + '</p><p>Release date : ' + element.release_date + '</p></div><div class="col-6"><img src=https://image.tmdb.org/t/p/w500/' + element.poster_path + '></div> ');
                });
            },
            error: function(resultat, statut, erreur) {
                $("#result").html("Error");
            }
        });
    });
});
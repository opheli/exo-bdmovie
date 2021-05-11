$(function () {

    console.log("test tout est ok");

    $("button").click(function () {

        const URL_API_KEY = "b8e16ff25f44004fe2ab5dedc9e0453e";
        const URL_API = "https://api.themoviedb.org/3/search/movie/";
        let query = $("input").val();
        console.log($("input").val())


        $.ajax({
            method: "GET",
            url: URL_API + "?" + "api_key=" + URL_API_KEY + "&" + "query=" + query + "&language=fr-FR",
            //url: "https://api.themoviedb.org/3/search/movie/?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&query=dog&language=fr-FR",
            
            success: function (data, statuts, response) {
               
                console.log("Il y a " + data.total_results + " résultats");

                let displayMovies = function (movies) {
                    let movieToDisplay = "";
                    movies.forEach((movie) => {
                      movieToDisplay += '<div class="d-flex mb-4 movie justify-content-between">';
                      movieToDisplay += "<div>";
                      movieToDisplay += `<h3>${movie.original_title}</h3>`;
                      movieToDisplay += movie.release_date ? `<p><strong>Date de sortie</strong> : ${movie.release_date} </p>` : "";
                      movieToDisplay += movie.overview ? `<p class="synopsis"><strong>Synopsis</strong> : ${movie.overview} </p>`: "";
                      movieToDisplay += `</div>`;
                      movieToDisplay += `<div>`;
                      movieToDisplay += movie.poster_path ? `<img src="${URL_IMAGE_PREFIX + movie.poster_path}" alt="image-${movie.id}">` : "";
                      movieToDisplay += `</div>`;
                      movieToDisplay += `</div>`;
                    });
                    $resultsList.append(movieToDisplay);
                    return;
                  };
                },
            });
        });
    
        console.log("fin script");
    });
            //     data.results.forEach(element => {
            //         console.log(element)
            //         $("#nombre").html(
            //             "<span id='nombre'>" +"Il y a " + data.total_results + " résultats"+ "</span>" + "<br>"
            //         )
            //         $("#titre").append(
            //             "<span id='titre'>" + element.original_title + "</span>"
            //         )
            //         $("#synopsis").append(
            //             "<span id='synopsis'>" + element.overview + "</span>"
            //         ) 
            //         $("#date").append(
            //             "<span id='date'>" + element.release_date + "</span>"
            //         )
            //         $("#photo").append(
            //             "<img id='photo'>" + element.poster_path + "</span>"
            //         ) 
            // });



          
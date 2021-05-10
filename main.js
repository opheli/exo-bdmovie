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
                console.log("data", data.results);















                

                // $("#country").html(
                //     "Country: <span id='country'>" + data[0].name + "</span>"
                // );

                // $("#capital").html(
                //     "Capital: <span id='capital'>" + data[0].capital + "</span>"
                // );
            },
        });
    });

    console.log("fin script");
});
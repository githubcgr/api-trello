
var idUser = "caique54";

function getQuadrosUsuario() {
    Trello.get('/members/' + idUser + '/boards?filter=public', function (r) {
        html = "";
        html += '<div class="row">';
        $.each(r, function (key, value) {
            html += '<div class="col-3" onclick="openBoard(\'' + value.name + '\',\'' + value.id + '\')">';
            html += '<div class="col-12 jumbotron">';
            html += value.name;
            html += "</div>";
            html += "</div>";
        });
        html += "</div>";

        $("#quadros").append(html);
    });
}

function openBoard(nameBoard, idBoard) {
    $("#modalBoard").find('.modal-title').html(nameBoard);


    Trello.get("/boards/" + idBoard + "/lists", function (r) {

        htmlCorpo = "";
        htmlCorpo += '<div class="row">';
        $.each(r, function (key, value) {
            htmlCorpo += "<div class='col-4'>";
            htmlCorpo += "<div class='col-12'>";
            htmlCorpo += "<p style='font-weight:bold'>" + value.name + "</p><hr>";
            htmlCorpo += "<ul>";

            lists = getCardsBoard(value.idBoard);

            $.each(lists, function (indexList, item) {
                htmlCorpo += "<li>";
                htmlCorpo += item.name;
                htmlCorpo += "</li>";
            })
            htmlCorpo += "</ul>";
            htmlCorpo += "</div>";
            htmlCorpo += "</div>";
        });
        htmlCorpo += "</div>";

        $("#modalBoard").find('.modal-body').html(htmlCorpo);
    });
    $("#modalBoard").modal();
}


function getCardsBoard(idBoard) {


    a = Trello.get("/boards/" + idBoard + "/cards", function (r) {
        return r;
    });
    console.log(a.responseText);

}
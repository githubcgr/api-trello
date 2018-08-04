var userKey = '2b2558bca372c8ecd40edd861d5ce7bf';
var userToken = '5f43614610f8029a37c8a3233d47e93fd9f97fea3be33b5d2208ef714e399b09';

var idUser = "caique54";

function getQuadrosUsuario() {
    openLazyLoader();
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

        closeLazyLoader();
    });
}

function openBoard(nameBoard, idBoard) {
    openLazyLoader();
    $("#modalBoard").find('.modal-title').html(nameBoard);

    Trello.get("/boards/" + idBoard + "/lists", function (lists) {

        htmlCorpo = "";
        htmlCorpo += '<div class="row">';
        $.each(lists, function (key, listItem) {
            htmlCorpo += "<div class='col-4'>";
            htmlCorpo += "<div class='col-12'>";
            htmlCorpo += "<p style='font-weight:bold'>" + listItem.name + "</p><hr>";
            htmlCorpo += "<ul>";

            cardsColletion = getCardsBoard(listItem.id);

            $.each(cardsColletion, function (indexCard, cards) {
                $.each(cards, function (indexCard, cardItem) {
                    htmlCorpo += "<li>";
                    htmlCorpo += cardItem.name;
                    htmlCorpo += "</li>";
                });
            });

            htmlCorpo += "</ul>";
            htmlCorpo += "</div>";
            htmlCorpo += "</div>";
        });
        htmlCorpo += "</div>";

        $("#modalBoard").find('.modal-body').html(htmlCorpo);

        closeLazyLoader();
    });
    $("#modalBoard").modal();
}

function getCardsBoard(idList) {
    openLazyLoader();
    url = "https://api.trello.com/1/lists/" + idList + "/cards?key=" + userKey + "&token=" + userToken;

    var data = $.ajax({
        url: url,
        async: false,
        dataType: "json",
        success: function (data) {
            return data;
        }
    });

    json = [];
    data.done(function (a) {
        json.push(a);
        closeLazyLoader();
    })
    return json;
}


function openLazyLoader() {
    $("#modalLoading").modal();
}
function closeLazyLoader() {
    $("#modalLoading").modal("hide");
}

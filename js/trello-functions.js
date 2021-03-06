function openLazyLoader() {
    $("#modalLoading").modal();
}
function closeLazyLoader() {
    $("#modalLoading").modal("hide");
}

function getQuadrosUsuario() {
    openLazyLoader();
    Trello.get('/members/' + idUser + '/boards?filter=public', function (r) {
        html = "";
        html += '<div class="row">';
        $.each(r, function (key, value) {
            html += '<div class="col-3" onclick="showBoardsList(\'' + value.name + '\',\'' + value.id + '\')">';
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

function showBoardsList(nameBoard, idBoard) {
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
            htmlCorpo += "<button class='btn btn-success btn-sm' onclick='openModalAddCard(\"" + listItem.id + "\",\"" + listItem.name + "\")'><i class='fas fa-plus-circle'></i> Novo</button>";
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

function openModalAddCard(idList, listName) {
    openLazyLoader();
    $("#modalAddCard").find('.modal-title').html(listName);
    $("#modalAddCard").find('#idList').val(idList);
    $("#modalAddCard").modal();
    closeLazyLoader();
}

function salvarCartao() {
    inputs = $("#formAddCard").serialize();
    url = "https://api.trello.com/1/cards?" + inputs + "&key=" + userKey + "&token=" + userToken;
    var data = $.ajax({
        url: url,
        async: false,
        dataType: "json",
        method: "POST",
        success: function (data) {
            alert('Enviado');
            boardName = $("#modalBoard").find(".modal-title").html();
            $("#modalAddCard").modal('hide');

            showBoardsList(boardName, data.idBoard);
        },
        error: function (data) {
            alert('erro');
        }
    });
}
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>

        <script src="js/jquery-3.2.1.min.js" type="text/javascript"></script>

        <script src="js/api-params.js"></script>
        <script src="https://trello.com/1/client.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="fontawesome-free-5.2.0-web/css/all.min.css">
    </head>
    <body>
        <h1 class="text-center">API TRELLO</h1>

        <div class="col">

            <hr>

            <div class="col-12" id="quadros"></div>
        </div>
        <script>
            $(function () {
                getQuadrosUsuario();
            })
        </script>


        <div class="modal" tabindex="-1" role="dialog" id="modalBoard">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" tabindex="-1" role="dialog" id="modalLoading">
            <div class="modal-dialog modal-sm" style="display: table">
                <div class="modal-content">
                    <div class="modal-body text-center" style="background: #c33c3c;color:#fff">
                        <i class="fas fa-spin fa-spinner fa-4x"></i>
                    </div>
                </div>
            </div>
        </div>

        <script src="js/trello-functions.js"></script>

    </body>
</html>

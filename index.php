<html>
    <head>
        <meta charset="UTF-8">
        <title></title>

        <script src="https://code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
        <?php
        $key = '2b2558bca372c8ecd40edd861d5ce7bf';
        $token = '5f43614610f8029a37c8a3233d47e93fd9f97fea3be33b5d2208ef714e399b09';
        ?>
        <script src="https://trello.com/1/client.js?key=<?= $key ?>&token=<?= $token ?>"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
    </head>
    <body>
        <h1 class="text-center">API TRELLO</h1>

        <div class="col-12" id="quadros"></div>

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

        <script>
            $(function () {
                getQuadrosUsuario();
            })
        </script>

        <script src="trello-functions.js"></script>

    </body>
</html>

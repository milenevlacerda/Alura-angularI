angular.module( 'minhasDiretivas', [] )
.directive( 'meuPainel', function() {

    var ddo = {};

    ddo.restrict = "AE"; // attribute - element

    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';


    return ddo;
});

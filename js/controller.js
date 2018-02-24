angular.module('CronappLanding')
    .controller('landingCtrl', function($scope){
        $scope.usuario = {};
        $scope.cadastro = false;

        $scope.images = {
            image1: 'img/cronappIDE.png',
            image2: 'img/exampleapp.png'
        }

        $scope.cadastrar = function(usuario){
            console.log(usuario);
            if(usuario){
                $scope.usuario.nome = usuario.nome.split(' ').slice(0, -1).join(' ');
                $scope.cadastro = true;
            }
        };

        $scope.scrollSlider = function(pos){
            angular.element('html').animate({scrollTop: pos}, 800, function() { 
            });
        }

        $scope.navegarItem = function(event, title){
            let offset = angular.element('#'+title).offset();
            let yPos = offset.top;
            $scope.scrollSlider(yPos);
            setTimeout(function(){
                angular.element('.botao-navegar-topo').css('opacity', '0.8');
            }, 1500);    
        }

    });
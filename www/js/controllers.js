angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats,$ionicModal) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
  var modalOptions = {scope:$scope, animation: 'slide-in-up'};
    $ionicModal.fromTemplateUrl('templates/testModal.html', modalOptions).then(function(dialog) {
      $scope.testModal = dialog;
  });
  var obj1 = {name:"Monday", id:1},
      obj2 = {name:"Tuesday", id:2},
      obj3 = {name:"Wednesday", id:3},
      obj4 = {name:"Thursday", id:4},
      obj5 = {name:"Friday", id:5};
  
  $scope.testItems = [obj1,obj2,obj3,obj4,obj5];
  $scope.closeModal = function(){
  	$scope.testModal.hide();
  }
  $scope.openModal = function(item) {
  	$scope.testModal.show();
  }
})
.controller('ChatsResetModalCtrl', function($scope, Chats,$ionicModal) {
$scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
	var modalOptions = {scope:$scope, animation: 'slide-in-up'};
	$ionicModal.fromTemplateUrl('templates/testModal.html', modalOptions).then(function(dialog) {
  		$scope.testModal = dialog;
  	});
  var obj1 = {name:"Monday", id:1},
      obj2 = {name:"Tuesday", id:2},
      obj3 = {name:"Wednesday", id:3},
      obj4 = {name:"Thursday", id:4},
      obj5 = {name:"Friday", id:5};
  
  $scope.testItems = [obj1,obj2,obj3,obj4,obj5];
  $scope.closeModal = function(){
  	$scope.testModal.remove();
  }
  $scope.openModal = function(item) {
  	if(!$scope.testModal._isShown) {
  		$ionicModal.fromTemplateUrl('templates/testModal.html', modalOptions).then(function(dialog) {
  			$scope.testModal = dialog;
  			$scope.testModal.show();
  		});
  	} else {
  		$scope.testModal.show();
  	}
  	
  }

})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

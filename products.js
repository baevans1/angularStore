(function(){
  var app = angular.module('store-products', []);
  app.directive("productImages", function() {
    return {
      restrict: 'E',
      templateUrl: "product-images.html",
      controller: function(){
          this.current = 0;

          this.setCurrent = function(newGallery){
            this.current = newGallery || 0;
          };
        },
      controllerAs: 'gallery'
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict: 'E',
      templateUrl: "product-specs.html"
    };
  });
  app.directive("productTitle", function() {
    return {
      restrict: 'E',
      templateUrl: "product-title.html"
    };
  });
  app.directive("productReview", function() {
    return {
      restrict: 'E',
      templateUrl: "product-review.html"
    };
  });
  app.directive("reviewForm", function() {
    return {
      restrict: 'E',
      templateUrl: "review-form.html",
      controller: function(){
            this.review = {};

            this.addReview = function(product) {
              this.review.createdOn = Date.now();
              product.reviews.push(this.review);
              this.review = {};
            };
        },
      controllerAs: 'reviewCtrl'
    };
  });
  app.directive("productDesc", function() {
    return {
      restrict: 'E',
      templateUrl: "product-desc.html"
    };
  });
  app.directive("productPanels", function() {
    return {
      restrict: 'E',
      templateUrl: "product-panels.html",
      controller: function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
          this.tab = setTab;

        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        }
      },
      controllerAs: 'panel'
    };
  });
})();

(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gems;
  });
  app.controller("PanelController", function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;

    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('GalleryController', function(){
      this.current = 0;

      this.setCurrent = function(newGallery){
        this.current = newGallery || 0;
      };
    });

  app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(product) {
          this.review.createdOn = Date.now();
          product.reviews.push(this.review);
          this.review = {};
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
    app.directive("productDesc", function() {
      return {
        restrict: 'E',
        templateUrl: "product-desc.html"
      };
    });

  var gems = [
  {
    name: 'Grace Kelly Engagement',
    price: 7000,
    description: 'Worn by Grace Kelly herself as she became Hollywood royalty.',
    canPurchase: true,
    soldOut: false,
    images: [
      'images/graceKelly.jpg',
      'images/graceKelly2.jpg',
      'images/graceKelly3.jpg',
    ],
    reviews:[
    {
      stars: 5,
      body: "such a beautiful piece",
      author: "carmensandy@yahoo.com",
      createdOn: 6-5-16
    },
    {
      stars: 5,
      body: "It glimmers so bright in the sun.",
      author: "rougeetrois@plie.fr",
      createdOn: 8-12-15
    }
  ]
  },
  {
   name: "Heart of the Ocean",
   price: 4500,
   description: "Forged to mimic the timeless movie classic necklace lost in the depths of the Atlantic.",
   canPurchase: true,
   images:
   [
    'images/heartOcean.jpg',
    'images/heartOcean2.jpg',
    'images/heartOcean3.jpg'
    ],
    reviews:
    [
      {
        stars: 4,
        body: "I love the realistic feel of a diamond.",
        author: "luna@lovegood.org",
        createdOn: 1-7-12
      },
      {
        stars: 2,
        body: "It's too heavy to wear.",
        author: "miriam@complainer.com",
        createdOn: 5-13-14
      },
    ]
 },
  ]


})(); //end

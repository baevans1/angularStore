(function() {
  var app = angular.module('store', []);



  app.controller('StoreController', function(){
    this.product = gems;
  });

  var gems = [
  {
    name: 'Grace Kelly Engagement',
    price: 7000,
    description: 'Worn by Grace Kelly herself as she became Hollywood royalty.',
    canPurchase: true,
    soldOut: false,
    images: [
      'images/GraceKelly.jpg',
      'images/GraceKelly2.jpg',
      'images/GraceKelly3.jpg',
    ],
    reviews:[
    {
      stars: 5,
      body: "such a beautiful piece",
      author: "carmensandy@yahoo.com"
    },
    {
      stars: 5,
      body: "It glimmers so bright in the sun.",
      author: "rougeetrois@plie.fr"
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
        author: "luna@lovegood.org"
      },
      {
        stars: 2,
        body: "It's too heavy to wear.",
        author: "miriam@complainer.com"
      },
    ]
 },
  ]

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

})();

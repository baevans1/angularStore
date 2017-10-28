(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.product = gems;
  });

  var gems = [
  {
    name: 'Grace Kelly Engagement',
    price: 47500,
    description: 'Worn by Grace Kelly herself as she became Hollywood royalty.',
    canPurchase: true,
    soldOut: true,
    images: [
      {
        full: 'images/GraceKelly.jpg'
        // thumb: 'gemOfHera-01-thumb.jpg'
      }
    ]
  },
  {
   name: "Heart of the Ocean",
   price: 13500,
   description: "Forged to mimic the timeless movie classic necklace lost in the depths of the Atlantic.",
   canPurchase: true,
   images: [
     {
       full: 'images/heartOcean.jpg'
     }
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

})();

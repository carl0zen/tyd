Meteor.startup( function() {
    filepicker.setKey("AKIAJNARF54GMGH3BWEQ");
    filepicker.constructWidget(document.getElementById('attachment'));
});


Offers = new Meteor.Collection('offers');


if (Meteor.isClient){

  Template.home.events({
    'click .submit': function(){
        Offers.insert({
          offer: $('.offer').val()
        });
        $('.offer').val('').focus();
    },
    'change #attachment': function(evt){
        console.log(evt.files);
    }
  });
}

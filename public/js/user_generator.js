// This is my JS, which uses an empty data structure based on the randomuser.me api structure
var user_app = new Vue({
  el: '#user_generator_app',
  data: {
    users: {

      "gender": "",

      "name": {
        "title": "",
        "first": "",
        "last": ""
      },
      "location": {
        "street": "",
        "city": "",
        "state": "",
        "postcode": ""
      },
      "email": "",
      "dob": {
        "date": "",
        "age": ""
      },
      "phone": "",
      "cell": "",
      "id": {
        "name": "",
        "value": ""
      },
      "picture": {
        "large": "",
        "medium": "",
        "small": "",
        "thumbnail": ""
      },
      "nat": "",

    }
  },
// This is the method detailed in class and in the video which allows us to fetch a user from randomuser.me
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {user_app.users = json.results[0]});

    }
},
created: function() {
  this.fetchUser();
}

})

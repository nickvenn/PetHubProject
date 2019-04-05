import axios from "axios";

export default {
  // call router and pass in paramaters
  GetDogs: function (zip, gender, type) {
    return axios.get("api/users/dog/" + zip + "/" + type + "/" + gender);
  },
  GetMap: function () {
    console.log("map function called");
  }
};

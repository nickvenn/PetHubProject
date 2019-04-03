import axios from "axios";

export default {
  // call router and pass in paramaters
  GetDogs: function (zip, gender, type) {
    return axios.get("api/users/dog/" + zip + "/" + type + "/" + gender);
  },
  GetLikes: function (userData) {
    console.log(userData);
    return axios.post("/api/users/likes", userData);
  }
};

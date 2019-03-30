import axios from "axios";

export default {
  // call router and pass in paramaters
  GetDogs: function (zip, gender, type) {
    console.log("api call with " + zip + " " + gender + " " + type);
    return axios.get("api/users/dog/" + zip + "/" + type + "/" + gender);
  }
};

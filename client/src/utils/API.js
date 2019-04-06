import axios from "axios";

export default {
  // call router and pass in paramaters
  GetDogs: function (zip, miles, gender, type) {
    return axios.get("api/users/dog/" + zip + "/" + miles + "/" + type + "/" + gender);
  },
};

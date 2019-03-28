import axios from "axios";

export default {
 
  search: function(query) {
    return  axios.get(`https://api.thedogapi.com/v1/breeds`);
  }
};
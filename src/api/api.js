import axios from "axios";

export const DataKamar = () => {
  return axios.get("https://647c5a8bc0bae2880ad09b73.mockapi.io/kamar");
};

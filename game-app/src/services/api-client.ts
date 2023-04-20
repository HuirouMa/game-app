import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5f08b09a05ea4ff383a99eb65d08ee80'
  }
})
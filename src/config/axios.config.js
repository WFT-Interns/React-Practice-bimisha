import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.edamam.com',
  params: {
    type: 'any',
    app_id: '9b196ee7',
    app_key:'a7732b93bbd41f510359888962dff3e7'
  },
  headers: {
    "x-request-id": "72d273aaba9cdbd0c8a37bca4edbfc18",
    "x-served-by": "ip-10-0-1-154.ec2.internal/10.0.1.154"
  }
})

export default instance;


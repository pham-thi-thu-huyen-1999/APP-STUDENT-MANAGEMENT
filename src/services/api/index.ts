import axios from "axios";

axios({
  method: "get",
  url: "http://localhost:8000/api",
  headers: { "X-Custom-Header": "foobar" },
}).then(function (response: any) {
  response.data.pipe();
});

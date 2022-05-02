import http from "../http-common";
class VocabDataService {
  get(id) {
    return http.get(`/vocab/${id}`);
  }
  create(data) {
    return http.post("/vocab", data);
  }
  update(id, data) {
    return http.put(`/vocab/${id}`, data);
  }
  delete(id) {
    return http.delete(`/vocab/${id}`);
  }
  search(data) {
    return http.post(`/vocab/search`, data);
  }
}
export default new VocabDataService();
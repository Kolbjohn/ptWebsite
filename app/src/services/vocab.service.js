import http from "../http-common";
class VocabDataService {
  getAll() {
    return http.get("/vocab");
  }
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
  findByLocation(location) {
    return http.get(`/vocab?location=${location}`);
  }
}
export default new VocabDataService();
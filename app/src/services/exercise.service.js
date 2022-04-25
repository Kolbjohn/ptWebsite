import http from "../http-common";
class ExerciseDataService {
  getAll() {
    return http.get("/exercises");
  }
  get(id) {
    return http.get(`/exercises/${id}`);
  }
  create(data) {
    return http.post("/exercises", data);
  }
  update(id, data) {
    return http.put(`/exercises/${id}`, data);
  }
  delete(id) {
    return http.delete(`/exercises/${id}`);
  }
  findByLocation(location) {
    return http.get(`/exercises?location=${location}`);
  }
}
export default new ExerciseDataService();
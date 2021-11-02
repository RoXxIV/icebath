import http from "../http-common";

class IcebathDataService {
  getAll() {
    return http.get("/icebath");
  }

  get(id) {
    return http.get(`/icebath/${id}`);
  }

  create(data) {
    return http.post("/icebath", data);
  }

  update(id, data) {
    return http.put(`/icebath/${id}`, data);
  }

  delete(id) {
    return http.delete(`/icebath/${id}`);
  }

  deleteAll() {
    return http.delete(`/icebath`);
  }
}

export default new IcebathDataService();

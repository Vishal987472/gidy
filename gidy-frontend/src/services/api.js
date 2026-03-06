import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api"
});

export const getProfile = (id) => API.get(`/profile/${id}`);

export const addSkill = (profileId, skill) =>
    API.post(`/profile/${profileId}/skills`, skill);

export const addExperience = (profileId, experience) =>
    API.post(`/profile/${profileId}/experience`, experience);

export const addEducation = (profileId, education) =>
    API.post(`/profile/${profileId}/education`, education);

export const addCertification = (profileId, certification) =>
    API.post(`/profile/${profileId}/certification`, certification);

export const updateTheme = (profileId, theme) =>
    API.put(`/profile/${profileId}/theme`, { theme });
export default API;
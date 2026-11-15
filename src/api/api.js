import axios from "axios";

const base = axios.create({
  baseURL: "https://dxxniqehqtrjxggozehp.supabase.co",
  headers: {
    apikey: "sb_publishable_mlZJuUoNCE6OdzthwwepOg_duQqGNw_",
    "Content-Type": "application/json",
  },
});

const api = axios.create({
  ...base.defaults,
  baseURL: `${base.defaults.baseURL}/rest/v1`,
});

export default api;

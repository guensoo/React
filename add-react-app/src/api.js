let backendHost;
const hostname = window && window.location&& window.location.hostname;

// http://localhost:10000/todo
if(hostname == "localhost"){
  backendHost = "http://localhost:10000";
}

export const API_BASE_URL = `${backendHost}`
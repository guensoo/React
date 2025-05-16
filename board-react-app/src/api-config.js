let backendHost;

const hostname = window && window.location&& window.location.hostname;

// http://localhost:10000/todo
if(hostname == "localhost"){
  backendHost = "http://localhost:10000/api/board";
}

export const API_BASE_URL = `${backendHost}`
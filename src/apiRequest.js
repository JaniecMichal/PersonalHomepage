const endPoint = "https://api.github.com/users/JaniecMichal/repos?sort=updated";

export const apiRequest = () => fetch(endPoint);

export class Storage {
  get token() {
    return window.sessionStorage.getItem("token");
  }

  set token(token) {
    window.sessionStorage.setItem("token", token);
  }
}

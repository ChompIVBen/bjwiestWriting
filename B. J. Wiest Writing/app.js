function getLinkAndTitle(title, link) {
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("link", link);
    location.reload();
}
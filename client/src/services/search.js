import Fuse from "fuse.js";

class Search {
  constructor() {
    this.options = {
      keys: ["username"],
      shouldSort: true,
      threshold: 0,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
    };

    this.searchbase = [];
    this.fuse = new Fuse([], this.options);
  }

  addUsers(users) {
    this.searchbase = this.searchbase.concat(
      users.map((user) => {
        return { name: user.name, username: user.username, id: user.id };
      })
    );

    this.fuse = new Fuse(this.searchbase, this.options);
  }

  search(term) {
    return this.fuse.search(term);
  }
}

export default new Search();

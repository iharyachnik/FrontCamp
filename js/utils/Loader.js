class Loader {
  static getData(url) {
    return fetch(url)
      .then((res) => res.json())
      .then((content) => {
        const { articles } = content;

        return Promise.resolve(articles);
      })
      .catch((err) => console.log(err));
  }
}

export default Loader;
export default function useAuthor() {
  return {
    seller: (author) =>
      author.substring(34).split("+").join().replace(",", " "),
  };
}

import Book, { BookProps } from "./Book";

const BooksGrid = () => {

  const books: BookProps[] = [];

  return (books.forEach((book) => <Book {...book} />));
};

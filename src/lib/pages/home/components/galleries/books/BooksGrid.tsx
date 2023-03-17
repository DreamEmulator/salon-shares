import Book, { BookProps } from "./Book";
import { FocusBox } from "../../animators/FocusBox";
import { SimpleGrid } from "@chakra-ui/react";

const BooksGrid = () => {

  const books: BookProps[] = [{
    title: "Journals",
    author: "Keith Haring",
    year: 1988,
    tipper: "Sebas",
    cover: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81l3noDblaL.jpg",
    link: "https://www.bol.com/nl/nl/p/keith-haring-journals/1001004007250566/?bltgh=kqzEUdaITYSIbGcGJM1EWA.2_12.13.ProductTitle"
  }];

  return <SimpleGrid>{books.map(book => <FocusBox><Book key={book.title} {...book} /></FocusBox>)}</SimpleGrid>;
};

export default BooksGrid;

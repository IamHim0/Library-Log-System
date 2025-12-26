import { useState } from "react";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([
    { title: "book1", author: "author1", publicationDate: "date1" },
    { title: "book2", author: "author2", publicationDate: "date2" },
    { title: "book3", author: "author3", publicationDate: "date3" },
    { title: "book4", author: "author4", publicationDate: "date4" },
  ]);
  return (
    <>
      <p>Hello Home!</p>{" "}
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          publicationDate={book.publicationDate}
        />
      ))}
    </>
  );
};

export default Home;

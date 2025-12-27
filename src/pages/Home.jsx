import { useState } from "react";
import BookCard from "../components/BookCard";
import {
  FavoritesProvider,
  useFavoritesContext,
} from "../css/contexts/FavoritesContext";

const Home = () => {
  const [books, setBooks] = useState([
    { id: "0", title: "book1", author: "author1", publicationDate: "date1" },
    { id: "1", title: "book2", author: "author2", publicationDate: "date2" },
    { id: "2", title: "book3", author: "author3", publicationDate: "date3" },
    { id: "3", title: "book4", author: "author4", publicationDate: "date4" },
  ]);

  const setFavorites = useFavoritesContext;

  return (
    <>
      <p>Hello Home!</p>{" "}
      {books.map((book, index) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          publicationDate={book.publicationDate}
        />
      ))}
    </>
  );
};

export default Home;

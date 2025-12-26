import "../css/components.css";

const BookCard = ({ title, author, publicationDate }) => {
  return (
    <div className="bookCard">
      <h2>{title}</h2>
      <p>{author}</p>
      <span>{publicationDate}</span>
      <button />
    </div>
  );
};

export default BookCard;

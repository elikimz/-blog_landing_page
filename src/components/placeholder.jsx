

const Placeholder = ({ src, w, h }) => {
  return (
    <img
      className="profile"
      src={src}
      alt="profile"
      width={w}
      height={h}
    />
  );
};

export default Placeholder;

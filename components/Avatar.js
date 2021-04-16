const Avatar = ({ url, className }) => {
  return (
    <img
      src={url}
      alt="Profile Picture"
      loading="lazy"
      className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
};

export default Avatar;

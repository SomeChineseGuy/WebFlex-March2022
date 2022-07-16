const Header = (props) => {
  return (
    <div>
      <h1>{props.message ? props.message : "Hello"}</h1>
      <h1>{props.message && props.message}</h1>
      <h1>{props.children}</h1>      
    </div>
  );
}

export default Header;
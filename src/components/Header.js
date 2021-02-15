const Header = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};

Header.defaultProps = {
  title: 'エクスペンストラッカー',
};

export default Header;

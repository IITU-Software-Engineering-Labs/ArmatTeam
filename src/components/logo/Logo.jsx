export const Logo = ({ isLight = true, children }) => {
  return isLight ? (
    <a href="/">
      <img src="/img/logo.svg" alt="Logo" />
    </a>
  ) : (
    <a href="/">
      <img src="/img/logoNegative.svg" alt="LogoNegative" />
    </a>
  );
};

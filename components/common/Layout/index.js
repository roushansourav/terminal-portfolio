import styles from "/styles/Layout.module.scss";

const Layout = ({ children }) => {
  return <div className={styles["flex-box"]}>{children}</div>;
};

export default Layout;

import MainNavigation from '../header/MainNavigation';
import classes from './Layout.module.css';
import Footer from '../footer/Footer';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.body}>{props.children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;

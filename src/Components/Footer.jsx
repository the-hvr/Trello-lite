import './Style/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
        <p className="footerContent">
          © {new Date().getFullYear()} Trello Lite (Mini Project Manager)
        </p>

        <p className="footerContent">
          <i className="fa-brands fa-react"></i>  React Based Project
        </p>

        <p className="footerContent">
          <i class="fa-solid fa-code"></i> Built by Harshvardhan Raj
        </p>
        <p className="footerContent">
          <a href="https://github.com/the-hvr/Trello-lite"><i class="fa-brands fa-square-github"></i> Github Repo</a>
        </p>
    </footer>
  );
}<i class="fa-brands fa-hackerrank"></i>
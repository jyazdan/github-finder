import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-4 bg-gray-700 text-primary-content footer-center">
      <div>
        <p>Copyright &copy; {footerYear} All Rights Reserved</p>
        <p>Developed by Jonathan Yazdanpanah</p>

        <div className="container">
          <div class="flex justify-center mt-2">
            <a href="https://github.com/jyazdan" className="mr-10">
              <FaGithub className="text-2xl hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-yazdanpanah">
              <FaLinkedin className="text-2xl " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

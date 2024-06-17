const Footer = () => (
  <footer className="py-10 text-center">
    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="/privacy" className="hover:underline">
        Privacy Policy
      </a>
      <a href="/terms" className="hover:underline">
        Terms of Service
      </a>
      <a href="/contact" className="hover:underline">
        Contact Us
      </a>
    </div>
  </footer>
);

export default Footer;

import { useEffect } from "react";

function MobileMenu({ onClose }) {

  useEffect(() => {
    function handleKeyUp(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [onClose]);

  return (
    <>
      {/* Mobile Menu Underlay */}
      <div className="menu-underlay" onClick={onClose}></div>

      <div className="mobile-menu">
        <div className="close-container">
          <button className="close-button" onClick={onClose}>
            <img src="./assets/images/icon-menu-close.svg" alt="Menu close button" />
          </button>
        </div>
        <ul>
          <li className="menu-item"><a href="#">Home</a></li>
          <li className="menu-item"><a href="#">New</a></li>
          <li className="menu-item"><a href="#">Popular</a></li>
          <li className="menu-item"><a href="#">Trending</a></li>
          <li className="menu-item"><a href="#">Categories</a></li>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
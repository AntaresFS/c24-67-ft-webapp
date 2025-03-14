import React, { useState, useEffect, useRef } from 'react';
import '../styles/index.css'; // Asegúrate de que la ruta sea la correcta

const LandingPage = () => {
  // Estado para el menú hamburguesa
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  // Estado para el dropdown abierto en desktop (puede ser "alumni", "paths" o null)
  const [openDropdown, setOpenDropdown] = useState(null);

  // Refs para los submenús (para manejar la altura en mobile)
  const alumniSubmenuRef = useRef(null);
  const pathsSubmenuRef = useRef(null);

  // Alterna el menú hamburguesa
  const handleHamburgerClick = () => {
    setIsHamburgerOpen((prev) => !prev);
  };

  // Maneja el click en un elemento "nav__parent"
  const handleNavParentClick = (dropdownName, e) => {
    e.preventDefault();

    // Si estamos en mobile (<768px), usamos el efecto de altura
    if (window.innerWidth < 768) {
      const submenuRef = dropdownName === 'alumni' ? alumniSubmenuRef : pathsSubmenuRef;
      if (submenuRef.current) {
        // Si la altura actual es 0, se expande al scrollHeight; de lo contrario, se cierra
        if (submenuRef.current.clientHeight === 0) {
          submenuRef.current.style.height = `${submenuRef.current.scrollHeight}px`;
        } else {
          submenuRef.current.style.height = '0px';
        }
      }
    } else {
      // En desktop se maneja con clases y se permite que solo un dropdown esté abierto a la vez
      if (openDropdown === dropdownName) {
        setOpenDropdown(null);
      } else {
        setOpenDropdown(dropdownName);
      }
    }
  };

  // Resetea los dropdowns al redimensionar la ventana
  useEffect(() => {
    const handleResize = () => {
      setOpenDropdown(null);
      // Para desktop, resetea la altura inline de los submenús en mobile
      if (window.innerWidth > 768) {
        if (alumniSubmenuRef.current) {
          alumniSubmenuRef.current.style.height = '';
        }
        if (pathsSubmenuRef.current) {
          pathsSubmenuRef.current.style.height = '';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <nav className="nav container">
        <img src="src/logo.svg" alt="Logo" className="nav__img" />

        <div
          className={`nav__hamburguer ${isHamburgerOpen ? 'nav__hamburguer--open' : ''}`}
          onClick={handleHamburgerClick}
        ></div>

        <div className={`nav__overlay ${isHamburgerOpen ? 'nav__overlay--show' : ''}`}>
          <ul className="nav__menu">
            {/* Dropdown "Alumni" */}
            <li className="nav__item">
              <span
                className="nav__parent"
                onClick={(e) => handleNavParentClick('alumni', e)}
              >
                Alumni
                <img
                  src="src/assets/icon-arrow-down.svg"
                  alt="Arrow"
                  className="nav__arrow"
                />
              </span>

              <ul
                ref={alumniSubmenuRef}
                className={`nav__inner ${
                  openDropdown === 'alumni' && window.innerWidth >= 768
                    ? 'nav__inner--show'
                    : ''
                }`}
              >
                <li className="nav__dropdown">
                  <a href="#" className="nav__link">
                    <img
                      src="src/assets/icon-todo.svg"
                      alt="Todo"
                      className="nav__illustration"
                    />
                    Initiate
                  </a>
                </li>

                <li className="nav__dropdown">
                  <a href="#" className="nav__link">
                    <img
                      src="src/assets/icon-calendar.svg"
                      alt="Calendar"
                      className="nav__illustration"
                    />
                    Crusader
                  </a>
                </li>

                <li className="nav__dropdown">
                  <a href="#" className="nav__link">
                    <img
                      src="src/assets/icon-reminders.svg"
                      alt="Reminders"
                      className="nav__illustration"
                    />
                    Master
                  </a>
                </li>
              </ul>
            </li>

            {/* Dropdown "Paths" */}
            <li className="nav__item">
              <span
                className="nav__parent"
                onClick={(e) => handleNavParentClick('paths', e)}
              >
                Paths
                <img
                  src="src/assets/icon-arrow-down.svg"
                  alt="Arrow"
                  className="nav__arrow"
                />
              </span>

              <ul
                ref={pathsSubmenuRef}
                className={`nav__inner ${
                  openDropdown === 'paths' && window.innerWidth >= 768
                    ? 'nav__inner--show'
                    : ''
                }`}
              >
                <li className="nav__dropdown">
                  <a href="#" className="nav__link">
                    Web Dev
                  </a>
                </li>

                <li className="nav__dropdown">
                  <a href="#" className="nav__link">
                    DevOps
                  </a>
                </li>

                <li className="nav__dropdown">
                  <a href="#" className="nav__link">
                    AI/Data Science
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                Instructors
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                About
              </a>
            </li>

            <li className="nav__login">
              <a href="#" className="nav__sign">
                Login
              </a>
            </li>

            <li className="nav__login nav__login--border">
              <a href="#" className="nav__sign">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main">
        <section className="main__grid">
          <picture className="main__picture">
            <source
              srcSet="src/assets/image-hero-desktop.png"
              media="(min-width:768px)"
              className="main__img"
            />
            <img
              src="src/assets/image-hero-mobile.png"
              alt="Hero"
              className="main__img"
            />
          </picture>

          <article className="main__article">
            <div className="main__texts">
              <h1 className="main__title">Python made easy</h1>
              <p className="main__paragraph">
                Get your coding to the next level, create beyond imagination, and land your first high paying job.
              </p>
              <a href="#" className="main__cta">
                Get started
              </a>
            </div>

            <div className="main__brands">
              <img
                src="src/assets/company-google.png"
                alt="Google"
                className="main__brand"
              />
              <img
                src="src/assets/company-ibm.png"
                alt="IBM"
                className="main__brand"
              />
              <img
                src="src/assets/company-oracle.png"
                alt="Oracle"
                className="main__brand"
              />
              <img
                src="src/assets/company-apple.png"
                alt="Apple"
                className="main__brand"
              />
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;

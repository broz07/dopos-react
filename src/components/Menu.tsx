const Menu = () => {
    return (
    <nav className={`desktop:block laptop:block hidden h-full`}>
        <ul className="desktop:flex laptop:flex h-full hidden">
          <a href="#" className={`menu-button bounce-to_bottom`}>
              Domů
          </a>
          <a href="#" className={`menu-button bounce-to_bottom`} >
              O nás
          </a>
          <a href="#" className={`menu-button bounce-to_bottom`}>
              Naše služby
          </a>
          <a href="#" className={`menu-button bounce-to_bottom`}>
              Reference
          </a>
          <a href="#" className={`menu-button bounce-to_bottom`}>
              Kontakt
          </a>
        </ul>
    </nav>
    )
}
export default Menu;
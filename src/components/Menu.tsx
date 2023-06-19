const Menu = () => {
    console.log('rendering menu');
    return (
    <nav className={`desktop:block laptop:block hidden h-full`}>
        <ul className="desktop:flex laptop:flex h-full hidden">
          <a href="#" className={`menu-button bounce-to-bottom`}>
              Domů
          </a>
          <a href="#" className={`menu-button bounce-to-bottom`} >
              O nás
          </a>
          <a href="#" className={`menu-button bounce-to-bottom`}>
              Naše služby
          </a>
          <a href="#" className={`menu-button bounce-to-bottom`}>
              Reference
          </a>
          <a href="#" className={`menu-button bounce-to-bottom`}>
              Kontakt
          </a>
        </ul>
    </nav>
    )
}
export default Menu;
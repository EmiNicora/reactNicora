import React from 'react'
import CartWidget from '../CartWidget'

const NavBar = ({titulo}) => {
    return (
        <><h1>{titulo}</h1><div>
          <div class="card-panel teal lighten-2">
              <ul>
                <li><a href="#">Varitas</a></li>
                <li><a href="#">Funkos</a></li>
                <li><a href="#">Merch</a></li>
            </ul>
        </div>
            <nav>
  </nav>
            <CartWidget />
        </div></>
    )
}

export default NavBar 
import React from 'react'
import './producto.css'
import { Link } from 'react-router-dom'

export default function Pagination() {
    return (
        
        <div class="col-12">
            <div className='float-right'>
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <Link class="page-link" to='/change' tabindex="-1">Previous</Link>
                    </li>
                    <li class="page-item"><Link class="page-link" to='/change'>1</Link></li>
                    <li class="page-item active">
                        <Link class="page-link" to='/change'>2 <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="page-item"><Link class="page-link" to='/change'>3</Link></li>
                    <li class="page-item">
                        <Link class="page-link" to='/change'>Next</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </div>
    )
}

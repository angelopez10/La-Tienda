import React from 'react'



export default function MainHome() {



    return (
        <div className='main'>
            <form class=" hide-on-med-and-down" id="form1" >
                <div class="input-field" >
                    <input id="search" type="search" required />
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                    <div id="searchResults" ></div>
                </div>
            </form>
        </div>
    )
}

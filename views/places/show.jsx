const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>  
                <div class="flex-container">
                    <div>
                        <img src="/images/ramen.jpg" alt="bowl of ramen" id="ramen"/>
                    </div>
                    <div>
                        <h1>{ data.place.name }</h1>
                        <h2><font color="#FE8C8C">Rating</font></h2>
                        <div>currently unrated</div>
                        <h2><font color="#FE8C8C">Comments</font></h2>
                        <div>no comments</div>
                        <div>
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                            Edit
                            </a>    
                        </div> 
                        <div>
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger">
                            Delete
                                </button>
                            </form>  
                        </div>
                    </div>
                </div>    
            </main>
        </Def>
)}

module.exports = show


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
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                    <div>
                        <h1>{ data.place.name }</h1>
                        <h2><font color="#FE8C8C">Rating</font></h2>
                        <div>currently unrated</div>
                        <br/>
                        <h2><font color="#FE8C8C">Description</font></h2>
                        <br />
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <br />
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
                                <br/>
                                
                                <h2>
                                    <font color="#FE8C8C">Comments</font>
                                </h2>
                                <div>no comments</div>
                            
                            </form>  
                        </div>
                    </div>
                </div>    
            </main>
        </Def>
)}

module.exports = show


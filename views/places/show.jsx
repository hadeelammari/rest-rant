const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
      <div className="row">
      <div className="col-sm-6">
        <img src={data.place.pic} alt ={data.place.name}/>
      </div>
      <div className="col-sm-6">
      <h1>{data.place.name}</h1>
        <h2>Rating</h2>
        <p>Not Rated</p>
        <h2>Description</h2>
        <p>{data.place.showEstablished()}</p>
        <h3>Located in {data.place.city}, {data.place.state}</h3>
        <h4>Serving {data.place.cuisines}</h4>
      </div>
      </div>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

function new_form (data) {
  let message = ''                 
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            {message}                 
            ...
          </main>
        </Def>
    )
}

module.exports = new_form
module.exports = show;

   

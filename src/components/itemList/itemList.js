function ItemList({data}) {


    return (
        <div className="card mx-auto w-50" style={{ width: "18rem" }}>

            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">
                        {data.title}
                    </h5>
                    <div>
                        <small className="card-subtitle mb-2 text-muted ml-auto">{data.createdate}</small>
                    </div>

                </div>
                <div>
                    <p className="card-text">
                        {data.content}
                    </p>
                </div>

            </div>
        </div>
    );


}

export default ItemList;
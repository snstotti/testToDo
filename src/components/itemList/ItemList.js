import "../../style/Task.css"

function ItemList({data}) {


    return (
        <div className="card w-50">

            <div className="card__block w-100">
                <div className={data.completionStatus ? "" : "d-none"}>
                    <input readOnly={true} className="" type="checkbox" checked={data.completionStatus} id="" />
                </div>
                <div className="">
                    <h5 className="card__title">
                        {data.title}
                    </h5>
                    

                </div>
                <div className="card__content">
                    <p className="">
                        {data.content}
                    </p>
                    <div>
                        <small className="card__subtitle">{data.createdate}</small>
                    </div>
                </div>

            </div>
        </div>
    );


}

export default ItemList;
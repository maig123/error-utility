
const errorlist = (props) => {

    return (
        <div className="row">
              <div>
                <p className="text-primary"> current error rate: { props.errorvalues.errorrate} </p>
                <p> current error code: { props.errorvalues.errorcode } </p>

              </div>
        
        </div>
    )
}

export default errorlist;
import { connect } from 'react-redux'

var mapStateToProps = state => {
    return { carts : state.carts }
}
function Cart(props)
{
    return  <div>
    <h3>Cart Details</h3>
    <table className='table table-striped'>
      <thead>
        <tr>
                          <th>S.No.</th>
                          <th>Image</th>
                          <th>Product Name</th>                           
                          <th>Price</th>
                          <th>Discount</th>
                          <th>Quantity</th>
                          <th>Total Price</th>
                          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {props.carts.map((prod, index)=>
        {
          return <tr>
                              <td>{index + 1}</td>
                              <td><img src={prod.image} /></td>
                              <td>{prod.name}</td>
                              <td>{prod.price}</td>
                              <td>{prod.discount}</td>
                              <td>{prod.qty}</td>
                              <td>{(prod.price*prod.qty)-(prod.discount*prod.qty)}</td>
                              <th>
                                {/* <button onClick={()=>deleteCart(prod.pid)} className='btn btn-danger'>Delete</button>
                                <br/><br/>
                                <button onClick={()=>addProductToCart(prod.pid,false)} className='btn btn-info'>-</button>
                                &nbsp;
                                <button onClick={()=>addProductToCart(prod.pid,true)} className='btn btn-info'>+</button> */}
                              </th>
                  </tr>
        })}
      </tbody>
    </table>   
  </div>
}

export default connect(mapStateToProps)(Cart)
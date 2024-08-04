import "./index.css"
import 'boxicons'


const Card = (props)=>{
    const Id = props.id
    const price = props.price
    const photo = props.photo
    const title = props.title
    const rate = props.rate
    const discount = props.discount
    const count = props.count
    const isFreeShipping = props.isFreeShipping
    const isSpecialSale = props.isSpecialSale
    const priceFormat=(price)=>{
        const intPrice = parseInt(price)
        const result = new Intl.NumberFormat('en-US').format(intPrice)
        return result.toString()
    }
    const calcSpecialPrice = (discount,price)=>{
        const percent = (discount/100) * parseInt(price)
        const answer =  price - percent
        const result = new Intl.NumberFormat('en-US').format(answer)
        return result.toString()

    }

    return(
        <div className="card" id={Id}>
            <div className="card-header">
                <div className="top-header">
                    {isSpecialSale && <span>فروش ویژه</span>}
                </div>
                <div className="bottom-header">
                <img src={photo} alt="" />
                </div>
            </div>
            <div className="card-body">
                <div className="shipping-type">
                <div ><box-icon flip="horizontal"  size="20px" color="red" name='truck' type='solid' ></box-icon><span>ارسال رایگان</span></div>
                </div>
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="shipping-time">
                    <div className="condition-sale">{count < 10 && <div><span style={{fontSize:11,color:"red",marginBottom:5}}>تنها {count} عدد در انبار باقی مانده است</span></div> }
                    {isFreeShipping && <div><box-icon color="blue" size="20px" name='timer' ></box-icon><span>ارسال فردا</span></div>}</div>
                   <div> <span className="star">{rate}</span><box-icon color="gold" size="18px" animation="spin-hover" name='star' type='solid' ></box-icon></div>
                </div>
            </div>
            <div className="card-footer">
                <div className="price-section">

                    {isSpecialSale ?<> <div className="discount-price"><span className="badge">{discount}%</span><span className="price">  {calcSpecialPrice(discount,price)} تومان</span></div>
                    <div className="normal-price old-price"><span className="price">  {priceFormat(price)} </span></div></>
                    :<div  className="normal-price"><span className="price">  {priceFormat(price)} تومان</span></div>}

                </div>
            </div>
            
        </div>
    )
}

export default Card
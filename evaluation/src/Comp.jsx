import Button from './Button.jsx'
import Features from './Features.jsx'
function Comp(props){
    return(
        <div className="main">
            <div className="container">
                
                    <img src= {props.image} />
                
                <div className="secondP">
                    <div className="p">
                    {props.f1}
                    {
                      props.but1 &&  props.but1.map((item,index)=>{
                            return(
                                <Button
                   key={index}
                   but={item}

                                />
                            )
                        })
                   
                }
                </div>
                
                 <h3 className='h3'>{props.h3}</h3>
            
                <div className="time">
                    <p>{props.p1}</p>
                    <p>{props.p2}</p>
                    <p>{props.p3}</p>
                </div>
                </div>
          
            </div>
            <div className="features">
                <Features
                p4="front end"
                 />
                 <Features
                p4="senior"
                 />
                 <Features
                p4="HTML"
                 />
                 <Features
                p4="CSS"
                 />
                 <Features
                p4="JavaSCRIPT"
                 />
                 
            </div>
        </div>
    )
}
export default Comp
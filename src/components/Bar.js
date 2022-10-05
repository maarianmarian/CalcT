import React, { Component } from 'react';

class Bar extends Component {

    state = {
       
        nombre: "ok"
    }

    cerrarSesion() {
        
        window.location.reload();
    }

    render() {
       {/* const {changeViewLogin} = this.props   
        const {changeViewHome} = this.props
        const {changeViewCreate} = this.props  
        const {changeViewDirectorio} = this.props  
    const {changeViewMiDirectorio} = this.props     */} 
        return (
            <tbody >
                <tr >
                    <th className="table" >
                        <div >
                            <ul>


                                <ul>
                                   
                                    
                                   <li>
                                    {(() => {
                                             switch (this.state.nombre) {
                                                    case "ok":
                                                        return(
                                                            <div>
                                                          
                                                            <button className="btn-navBar" >Home</button>
                                                            <button className="btn-navBar" >Music</button> 
                                                            <button className="btn-navBar" >Blog</button> 
                                                            <button className="btn-navBar" >Calendar</button> 
                                                            <button className="btn-navBar" onClick={this.cerrarSesion}>Contact</button>
                                                            </div>
                                                        );
                                                    case undefined:
                                                        return(
                                                            <div>
                                                            {/*<li  ><Link to='/' className="active">Home</Link></li>*/}
                                                            {/*<li><Link to='Login' className="active">Login</Link></li>*/}
                                                            
                                                            <a className="btn-navBar" >Home</a>
                                                            <a className="btn-navBar" >Login</a>
                                                            <a className="btn-navBar" >Crear Cuenta</a>
                                                            </div>
                                                        );
                                             }
                                            })()}
                                    </li>
                                </ul>




                            </ul>
                        </div>

                    </th>
                </tr>
            </tbody>
           
           

        );
    }

}
export default Bar;
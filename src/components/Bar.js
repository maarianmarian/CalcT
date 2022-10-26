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
                    <th  >
                        <div >
                            <ul>




                            </ul>
                        </div>

                    </th>
                </tr>
            </tbody>
           
           

        );
    }

}
export default Bar;
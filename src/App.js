
import dignas from './img/dignas.jpg';
import './App.css';

import React, {Component} from 'react';


class App extends Component {
  fecha1 =  React.createRef();
  fecha2 =  React.createRef();
  fechaResult = React.createRef();
  fechaResult = "sin resultado";
  sueldoRef = React.createRef();

  state = {
    fecha1: "sin fecha",
    fecha2: "sin fecha",
    fechaRes: "",
    sueldo: "",
    vacaciones:"",
    aguinaldo:"",
    finiquito:""
  }


  dateConverter =() => {
    const newStartDate= new Date(this.state.fecha1);
    const newEndDate=new Date(this.state.fecha2);
    const one_day = 1000*60*60*24;
    let result = "";
    result = Math.ceil((newEndDate.getTime()-newStartDate.getTime())/(one_day))
    // console.log('math result'  + result);
    if (result < 0 ) {return 0}
    else{ return result}
  }


  changeState = () => {

    this.setState({
      fecha1: this.fecha1.current.value,
      fecha2:this.fecha2.current.value,
      sueldo:this.sueldoRef.current.value
    });

  }
  calcular = () =>{
    let sueldoDiario = 0;
    let vacaciones = 0;
    let aguinaldo = 0;
    let finiq = 0;
    let RestaFechas= new Date();

    RestaFechas = this.dateConverter();
    //  A QUI SE CAMBIAN LOS PORSENTAJES QUE TE DIGAN
    if(this.state.sueldo > 0 && this.state.sueldo !== undefined){
      sueldoDiario = (this.state.sueldo / 7);
      vacaciones = ((RestaFechas) *((sueldoDiario/ 100)) * 5).toFixed(2);
      finiq = ((RestaFechas) *((sueldoDiario/ 100)) * 10).toFixed(2);
      aguinaldo = ((RestaFechas) *((sueldoDiario / 100)) * 15).toFixed(2);
      this.setState({
        fechaRes:RestaFechas,
        sueldo:this.state.sueldo,
        sualdodiario: sueldoDiario,
        vacaciones: vacaciones,
        finiquito: finiq,
        aguinaldo:aguinaldo,
      });
    }
    console.log('sueldo semanal ' + this.state.sueldo);
    console.log('sueldo diario' + this.state.sualdodiario);
    console.log('dias laborados' + this.state.fechaRes);
    console.log(' vacaciones ' + this.state.vacaciones);
    console.log('finiquito ' + this.state.finiquito);
    console.log('aguinaldo' + this.state.aguinaldo);


    console.log('vacas' + this.state.vacaciones );
  }

  render(){
    return (
        <>


          <div className = "center">

            <div id="sidebar" className="archivosAdminCenter3">
              <div>
                <img src={dignas} />
              </div>
              <h1>Dignas</h1><br/><br/>
              <label>Sueldo semanal</label><br/><br/>
              <input type= "number" ref={this.sueldoRef} onChange={this.changeState}></input><br/><br/>
              <label>Fecha de ingreso </label><br/><br/>
              <input type = "date"  ref={this.fecha1} onChange={this.changeState}></input><br/><br/>
              <label>Fecha de salida </label><br/><br/>
              <input type = "date" ref={this.fecha2} onChange={this.changeState}></input><br/><br/>

              <button className="btn" id="btn-table" onClick={this.calcular} >Calcular</button><br/><br/>
              <output >Días días traajados: {this.state.fechaRes}</output><br/>
              <output >Vacaciones: {this.state.vacaciones}</output><br/>
              <output >Aguinaldo:{this.state.aguinaldo}</output><br/>
              <output >finiquito:{this.state.finiquito}</output><br/>
            </div>
          </div>
        </>
    );
  }
}

export default App;

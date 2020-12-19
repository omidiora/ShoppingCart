import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

class App  extends  React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       products:data.products,
       size:"",
       sort:"",
    }
  }
  sortProducts=(event)=>{
    
    console.log(event.target.value);
    const sort=event.target.value;
    this.setState({ 
      sort:event.target.value , 
      products:this.state.products.slice().sort((a,b)=>(
        sort==='lowest' ? ((a.price > b.price) ? 1:-1):
        sort==='highest'?((a.price < b.price) ? 1:-1):
        ((a._id < b._id) ? 1:-1)
      ))
    })

  }
 
 filterProducts = (event) => {
    // impl
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products });
    } 
    else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  
  render(){
  return (
    <div className="grid-container">

      <header>
        <a href='/'>React Shopping Cart</a>
      </header>
      <main>
       <div className='content'>
         <div className='main'>
           <Filter count={this.state.products.length} size={this.state.size} sortProduct={this.state.sortProducts} filterProducts={this.filterProducts} 
           sortProduct={this.sortProducts} ></Filter>
           
           <Products products={this.state.products} />
         </div>
         <div className='sidebar' >Cart Items</div>
       </div>
      </main>
        <footer>
          All right is resevered
        </footer>
    
      
    </div>
  );
}
}
export default App;

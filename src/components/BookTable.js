import React from 'react';
import './BookTable.css';
import { useEffect, useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function BookTable() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [price, setPrice] = useState(10000);
  const [option, setOption] = useState('Ratings');
  const [location, setLocation] = useState('Delhi');

  const pageStyle = {
    background: `url(${process.env.PUBLIC_URL}/booktable-img.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const restaurantImage = {
    background: `url(${process.env.PUBLIC_URL}/profile-background.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const restaurants = [
    {
      id: 1,
      name: 'Restaurant A',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://example.com/restaurant-a.jpg',
    },
    {
      id: 2,
      name: 'Restaurant B',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://example.com/restaurant-b.jpg',
    },
    {
      id: 3,
      name: 'Restaurant C',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageUrl: 'https://example.com/restaurant-c.jpg',
    },
    // Add more restaurants as needed
  ];

  const navigate = useNavigate();

  const handleCardClick = (restaurantId) => {
    navigate.push(`/restaurant/${restaurantId}`);
  };
  
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const restaurantRows = chunkArray(restaurants, 3);

  useEffect(() => {

            // Axios.get('http://localhost:3000/restaurants')
        // .then((res)=>{
        //     if(res.status == 200)
        //     {
        //         setData(res.data)

        //     }
        // })
        // .catch((err) => alert(err))

    handleData();
  }, [location, price]);

  const handleData = () => {
    Axios.post('http://localhost:3000/filterCategory', {
      category: category,
      cuisine: cuisine,
      price: price,
      sort: option,
      city: location,
    })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => console.error('Error:', err));
  };

  const handleChange = (e) => {
    var id = e.target.id;

    if (id === 'c1') {
      if (e.target.checked) {
        let arr = category.slice();
        arr.push(e.target.value);
        setCategory(arr);
      } else {
        let arr = category.slice();
        let idx = arr.indexOf(e.target.value);
        arr.splice(idx, 1);
        setCategory(arr);
      }
    }

    if (id === 'd1') {
      if (e.target.checked) {
        let arr = cuisine.slice();
        arr.push(e.target.value);
        setCuisine(arr);
      } else {
        let arr = cuisine.slice();
        let idx = arr.indexOf(e.target.value);
        arr.splice(idx, 1);
        setCuisine(arr);
      }
    }

    if (id === 'e1') {
      let val = Number(e.target.value);

      if (e.target.checked) {
        setPrice(val);
      } else {
        setPrice(10000);
      }
    }

    if (id === 'sort') {
      setOption(e.target.value);
    }

    if (id === 'loc') {
      setLocation(e.target.value);
    }

    handleData();
  };

  return (
    <>
      <div style={pageStyle}>
        <div className="menu-container">
          <div className="sidebar">
            <Link to="/" className="table-tales-link">
              <h1 className="row justify-content-center table-tales-heading">Table Tales</h1>
            </Link>
            <h2>Filter by Category</h2>
            <div className="sidebar-item">
              <input
                type="checkbox"
                id="c1"
                name="c1"
                onChange={handleChange}
                value="Pure Veg"
              />
              <label htmlFor="c1">Pure Veg</label>
              <br />
              <input
                type="checkbox"
                id="c2"
                name="c2"
                onChange={handleChange}
                value="Non Veg"
              />
              <label htmlFor="c2">Non Veg</label>
            </div>
            <h2>Filter by Cuisine</h2>
            <div className="sidebar-item">
              <input
                type="checkbox"
                id="d1"
                name="d1"
                onChange={handleChange}
                value="North Indian"
              />
              <label htmlFor="d1">North Indian</label>
              <br />
              <input
                type="checkbox"
                id="d2"
                name="d2"
                onChange={handleChange}
                value="Chinese"
              />
              <label htmlFor="d2">Chinese</label>
              <br />
              <input
                type="checkbox"
                id="d3"
                name="d3"
                onChange={handleChange}
                value="Italian"
              />
              <label htmlFor="d3">Italian</label>
              <br />
              <input
                type="checkbox"
                id="d4"
                name="d4"
                onChange={handleChange}
                value="Continental"
              />
              <label htmlFor="d4">Continental</label>
            </div>
            <h2>Filter by Price</h2>
            <div className="sidebar-item">
              <input
                type="checkbox"
                id="e1"
                name="e1"
                onChange={handleChange}
                value="3000"
              />
              <label htmlFor="e1">Under 3000</label>
              <br />
            </div>
          </div>
          <div className="menu">
            <div className="select-menu" id="s1">
              <span>Sort By </span>
              <select name="sort" id="sort" onChange={handleChange}>
                <option value="Ratings">Rating</option>
                <option value="Price">Price</option>
              </select>
            </div>
            <div className="select-menu2" id="s2">
              <span>Enter your location </span>
              <select name="loc" id="loc" onChange={handleChange}>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <div className="restaurant-list">
      <div className="restaurant-rows">
        {restaurantRows.map((row, rowIndex) => (
          <div className="restaurant-row" key={rowIndex}>
            {row.map((restaurant) => (
              <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id} style={{ textDecoration: 'none', color: 'inherit' }}>
  <div className="restaurant-card" style={restaurantImage}>
    <div className="card-content">
      <h3>{restaurant.name}</h3>
      <p>{restaurant.description}</p>
    </div>
  </div>
</Link>
            ))}
          </div>
        ))}
      </div>
    </div>
            </div>
            <div className="card-container">
            {data
              .sort((a, b) => {
                if (option === 'Ratings') {
                  return b.Ratings - a.Ratings;
                } else if (option === 'Price') {
                  return a.AvgPrice - b.AvgPrice;
                }
                return 0;
              })
              .map((val) => {
                return (
                  <div className="menu-item" key={val._id}>
                    <img src={val.Images[0]} alt={val.Name} />
                    <span className="menu-item-title">{val.Name}</span>
                    <p className="menu-item-address">{val.Address}</p>
                    <div className="menu-item-rating">
                      <span>{val.Ratings}</span>
                    </div>
                    <div className="menu-item-price">
                      {val.Cuisine.map((cuisineVal, index) => (
                        <span key={index}>{cuisineVal}</span>
                      ))}
                      <span>Price: ₹{val.AvgPrice}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default BookTable;
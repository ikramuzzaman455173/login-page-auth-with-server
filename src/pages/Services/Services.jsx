/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./services.css";
// import { Link } from "react-router-dom";
const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:4000/data")
  //     .then((response) => response.json())
  //     .then((data) => setServicesData(data.services));
  // }, []);

  // console.log(servicesData);
  return (
    <>
      <h1>Our Services</h1>
      {/* <div className="services">
        {servicesData.map((service) => (
          <div key={service?.id} className="service-card d-flex flex-column">
            <img className="w-100 my-1 img-thumbnail" src={service.image} alt="" />
            <h2>{service?.name}</h2>
            <p>{service?.description}</p>
            <ul>
              {service?.items?.map((item) => (
                <li key={item?.id}>
                  {item?.name} - ${item?.price}
                </li>
              ))}
            </ul>
            <p>Price: ${service?.price}</p>
            <p className="mb-2">Duration: {service?.duration}</p>
            <Link className="mt-auto" to={`/services/${service?.id}`}>
              <button className="btn fw-semibold btn-outline-danger rounded-1">Details</button>
            </Link>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Services;
import logo from "./logo.svg";
import "./App.css";
import { hotelData } from "./constant";

function App() {
  const compHotel = hotelData?.compSetHotelsRates;

  let compHotelData = {};

  for (let i = 0; i < compHotel?.length; i++) {
    let hotelName = compHotel[i].HotelName;
    if (compHotelData.hasOwnProperty(hotelName)) {
      if (compHotelData[hotelName].hasOwnProperty(compHotel[i].RoomType)) {
        compHotelData[hotelName][compHotel[i].RoomType].push(compHotel[i]);
      } else {
        compHotelData[hotelName] = {
          ...compHotelData[hotelName],
          [compHotel[i].RoomType]: [compHotel[i]],
        };
        // console.log("compHotelData[hotelName]:::", compHotelData[hotelName]);
      }
    } else {
      compHotelData = { ...compHotelData, [hotelName]: {} };
      if (compHotelData[hotelName].hasOwnProperty(compHotel[i].RoomType)) {
      } else {
        compHotelData[hotelName] = {
          ...compHotelData[hotelName],
          [compHotel[i].RoomType]: [compHotel[i]],
        };
        // console.log("compHotelData[hotelName]:::", compHotelData[hotelName]);
      }
    }
  }

  console.log("compHotelDatacompHotelData:::", compHotelData);

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Competitor Name</th>
            {hotelData.rateDates.map((item) => (
              <th scope="col" key={item.RateDate}>
                {item.RateDate.split("T")[0]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(compHotelData).map((hotel) =>
            // console.log("hotelData::", compHotelData[hotel]["Studio Suite"]);
            Object.keys(compHotelData[hotel]).map((room) => {
              console.log("roomData:::", compHotelData[hotel]);
              compHotelData[hotel][room].map((roomDetails) =>
                // console.log("roomDetails:::", roomDetails);
                hotelData.rateDates.map((date) => (
                  <tr>
                    <td></td>
                  </tr>
                ))
              );
              // <tr key={compHotelData[hotel][room]}>
              //   <td>{compHotelData[hotel][room]}</td>
              // </tr>
            })
          )}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default App;

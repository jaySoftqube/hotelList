import { hotelData } from "./constant";

const HotelList = () => {
  let hotelDetailsList = [];

  for (let i = 0; i < hotelData.compSetHotelsRates.length; i++) {
    if (hotelDetailsList.length === 0) {
      hotelDetailsList.push({
        name: hotelData.compSetHotelsRates[i].HotelName,
      });
    }

    let findHotelName = hotelDetailsList.some((hotel) => {
      return hotel.name === hotelData.compSetHotelsRates[i].HotelName;
    });
    let room = hotelData.compSetHotelsRates[i].RoomType;
    if (findHotelName) {
      let index = hotelDetailsList.findIndex(
        (x) => x.name === hotelData.compSetHotelsRates[i].HotelName
      );

      if (hotelDetailsList[index].hasOwnProperty(room)) {
        hotelDetailsList[index] = {
          ...hotelDetailsList[index],
          [room]: [
            ...hotelDetailsList[index][room],
            hotelData.compSetHotelsRates[i],
          ],
        };
      } else {
        hotelDetailsList[index] = {
          ...hotelDetailsList[index],
          [room]: [hotelData.compSetHotelsRates[i]],
        };
      }
    } else {
      hotelDetailsList.push({
        name: hotelData.compSetHotelsRates[i].HotelName,
        [room]: [hotelData.compSetHotelsRates[i]],
      });
    }
  }

  console.log("hotelDetailsList::", hotelDetailsList);

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-end" scope="col">
              Competitor Hotel
            </th>
            {hotelData.rateDates.map((rate) => (
              <th className="text-end" key={rate.RateDate} scope="col">
                {rate.RateDate.split("T")[0]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hotelDetailsList.map((hotelDetail, index) => {
            return Object.entries(hotelDetail).map((data) => {
              return (
                <tr>
                  {typeof data[1] === "string" ? (
                    <th
                      className="bg-dark text-white"
                      key={data[1]}
                      colSpan={6}
                    >
                      {data[1]}
                    </th>
                  ) : (
                    <>
                      <td key={data[0]}>{data[0]}</td>

                      {hotelData.rateDates.map((rate, index) =>
                        data[1][index] != undefined ? (
                          <td className="text-end">
                            ${data[1][index].BarRate}
                          </td>
                        ) : (
                          <td></td>
                        )
                      )}
                    </>
                  )}
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HotelList;

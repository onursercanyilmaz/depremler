import React from "react";

const getDaysList = () => {
  var daysList = [];
  for (let i = 1; i <= 100; i++) {
    daysList.push({ id: i, value: i });
  }
  return daysList;
};

export default function EarthSelect(props: any) {
  return (
    <>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>
            <b>Depremleri Filtrele</b>
          </h2>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div className="relative mr-3 inline-block w-64">
            <label
              htmlFor="magnitudes"
              style={{ fontWeight: "bold", fontSize: "12px" }}
            >
              Büyüklük
            </label>
            <select
              onChange={props.onMagnitudeSelect}
              name="magnitudes"
              id="magnitudes"
              defaultValue="DEFAULT"
              className="focus:shadow-outline block w-full appearance-none rounded-full border border-gray-400 bg-white  py-2 text-center leading-tight shadow hover:border-gray-500 focus:outline-none"
            >
              <option value="DEFAULT" disabled>
                X&apos;ten büyük depremler
              </option>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
            </select>
          </div>
          <div className="relative mr-3 inline-block w-64">
            <label
              htmlFor="regions"
              style={{ fontWeight: "bold", fontSize: "12px" }}
            >
              Bölge
            </label>
            <select
              onChange={props.onRegionSelect}
              name="regions"
              id="regions"
              defaultValue="DEFAULT"
              className="focus:shadow-outline block w-full appearance-none rounded-full border border-gray-400  bg-white  py-2 text-center leading-tight shadow hover:border-gray-500 focus:outline-none"
            >
              <option value="DEFAULT" disabled>
                Deprem bölgesi seçiniz
              </option>
              {props.regions.map((region: any) => {
                var regionLatLonList = [];

                regionLatLonList.push(region.region);
                regionLatLonList.push(region.minlat);
                regionLatLonList.push(region.maxlat);
                regionLatLonList.push(region.minlon);
                regionLatLonList.push(region.maxlon);

                return (
                  <option
                    key={region.id}
                    id={region.id}
                    value={regionLatLonList}
                  >
                    {region.region}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="relative mr-3 inline-block w-64">
            <label
              htmlFor="regions"
              style={{ fontWeight: "bold", fontSize: "12px" }}
            >
              Gün Sayısı
            </label>
            <select
              onChange={props.onDaysSelect}
              name="days"
              id="days"
              defaultValue="DEFAULT"
              className="focus:shadow-outline block w-full appearance-none rounded-full border border-gray-400  bg-white  py-2 text-center leading-tight shadow hover:border-gray-500 focus:outline-none"
            >
              <option value="DEFAULT" disabled>
                Son X günde olan depremler
              </option>
              {getDaysList().map((day: any) => {
                return (
                  <option key={day.id} id={day.id} value={day.value}>
                    {day.value}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <button
            onClick={props.onSearchClick}
            id="searchButton"
            style={{ fontWeight: "bold" }}
            className={`bg-black-900  h-10 w-24 rounded-full text-center  shadow-md hover:shadow-red-500/50 `}
          >
            Ara
          </button>
        </div>
      </div>
    </>
  );
}

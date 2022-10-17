import React from 'react'
import {useEffect, useState} from 'react'
import LineChart from '../components/Chart/LineChart';
import './Visualize.css'
import TempData from '../components/Chart/Temp';


function Visualize() {

    useEffect(() => {
        const fetchPrices = async () => {
          const res = await fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-nvrgb/endpoint/get_testdata")
          const data = await res.json()

          const datex = data.map(function(elem) {
            return new Date(elem.date)
          })

          const humid = data.map(function(elem) {
            return elem.hum
          })

          const lastdate = datex[datex.length -1]
 
          setLastDate(lastdate.setDate(datex[datex.length-1].getDate() - 5));
   
          console.log(lastdate)
   
   
          var filteredData = data.filter(function(a){
              var aDate = new Date(a.date);
              return aDate >= lastdate;
          });

          const fixdate = filteredData.map(function(elem) {
            return new Date(elem.date).toISOString()
          })

          const fixhum = filteredData.map(function(elem){
            return elem.hum
          })
  
          setUserData({
            labels: fixdate,
            datasets: [
              {
                label: "% of Humidity",
                data: fixhum,
                backgroundColor: [
                  "#FF0000",
                ],
                borderWidth: 1,
                showLine: false
              }
            ]
          });
        };
        fetchPrices()
      }, []);
    
    const handleClickTemp = () => {
      const fetchTemp = async () => {
        const res = await fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-nvrgb/endpoint/get_testdata")
        const data = await res.json()

        const datex = data.map(function(elem) {
          return new Date(elem.date)
        })

        const humid = data.map(function(elem) {
          return elem.hum
        })

        const lastdate = datex[datex.length -1]

        setLastDate(lastdate.setDate(datex[datex.length-1].getDate() - 5));
 
        console.log(lastdate)
 
 
        var filteredData = data.filter(function(a){
            var aDate = new Date(a.date);
            return aDate >= lastdate;
        });

        const fixdate = filteredData.map(function(elem) {
          return new Date(elem.date).toISOString()
        })

        const fixhum = filteredData.map(function(elem){
          return elem.temp
        })

        setUserData({
          labels: fixdate,
          datasets: [
            {
              label: "°C of Temperature",
              data: fixhum,
              backgroundColor: [
                "#FF0000",
              ],
              borderWidth: 1,
              showLine: false
            }
          ]
        });

      setOptionData({
        scales: {
        y: {
            beginAtZero: true,
            max:30,
            ticks : {
                callback: function(value, index, ticks) {
                    return  value + '°C';
            }  
        }
        },
        x: {
            ticks:{
                maxTicksLimit: 6
            }
        }
    }})
      };
      fetchTemp()
    }

    const handleClickHum = () => {
      const fetchHum = async () => {
        const res = await fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-nvrgb/endpoint/get_testdata")
        const data = await res.json()

        const datex = data.map(function(elem) {
          return new Date(elem.date)
        })

        const humid = data.map(function(elem) {
          return elem.hum
        })

        const lastdate = datex[datex.length -1]

        setLastDate(lastdate.setDate(datex[datex.length-1].getDate() - 5));
 
        console.log(lastdate)
 
 
        var filteredData = data.filter(function(a){
            var aDate = new Date(a.date);
            return aDate >= lastdate;
        });

        const fixdate = filteredData.map(function(elem) {
          return new Date(elem.date).toISOString()
        })

        const fixhum = filteredData.map(function(elem){
          return elem.hum
        })

        setUserData({
          labels: fixdate,
          datasets: [
            {
              label: "% of Humidity",
              data: fixhum,
              backgroundColor: [
                "#FF0000",
              ],
              borderWidth: 1,
              showLine: false
            }
          ]
        });

      setOptionData({
        scales: {
        y: {
            beginAtZero: true,
            max:100,
            ticks : {
                callback: function(value, index, ticks) {
                    return  value + '%';
            }  
        }
        },
        x: {
            ticks:{
                maxTicksLimit: 6
            }
        }
    }})
      };
      fetchHum()
    }

    const handleClickWind = () => {
      const fetchWind = async () => {
        const res = await fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-nvrgb/endpoint/get_testdata")
        const data = await res.json()

        const datex = data.map(function(elem) {
          return new Date(elem.date)
        })

        const humid = data.map(function(elem) {
          return elem.hum
        })

        const lastdate = datex[datex.length -1]

        setLastDate(lastdate.setDate(datex[datex.length-1].getDate() - 5));
 
        console.log(lastdate)
 
 
        var filteredData = data.filter(function(a){
            var aDate = new Date(a.date);
            return aDate >= lastdate;
        });

        const fixdate = filteredData.map(function(elem) {
          return new Date(elem.date).toISOString()
        })

        const fixhum = filteredData.map(function(elem){
          return elem.wind
        })

        setUserData({
          labels: fixdate,
          datasets: [
            {
              label: "km/s of Wind Speed",
              data: fixhum,
              backgroundColor: [
                "#FF0000",
              ],
              borderWidth: 1,
              showLine: false
            }
          ]
        });

      setOptionData({
        scales: {
        y: {
            beginAtZero: true,
            max:25,
            ticks : {
                callback: function(value, index, ticks) {
                    return  value + 'km/s';
            }  
        }
        },
        x: {
            ticks:{
                maxTicksLimit: 6
            }
        }
    }})
      };
      fetchWind()
    }
    

    const handleClickFiltTemp = () => {
      const fetchFiltTemp = async () => {
        const res = await fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-nvrgb/endpoint/get_testdata")
        const data = await res.json()

        const datex = data.map(function(elem) {
          return new Date(elem.date)
        })

        const humid = data.map(function(elem) {
          return elem.hum
        })

        const lastdate = datePicker;
        const blastdate = new Date(datePicker);

        blastdate.setDate(datePicker.getDate() - 5)

        console.log(blastdate)
 
        var filteredData = data.filter(function(a){
            var aDate = new Date(a.date);
            return aDate <= lastdate && aDate >= blastdate;
        });

        const fixdate = filteredData.map(function(elem) {
          return new Date(elem.date).toISOString()
        })

        const fixhum = filteredData.map(function(elem){
          return elem.temp
        })

        setUserData({
          labels: fixdate,
          datasets: [
            {
              label: "°C of Temperature",
              data: fixhum,
              backgroundColor: [
                "#FF0000",
              ],
              borderWidth: 1,
              showLine: false
            }
          ]
        });

      setOptionData({
        scales: {
        y: {
            beginAtZero: true,
            max:30,
            ticks : {
                callback: function(value, index, ticks) {
                    return  value + '°C';
            }  
        }
        },
        x: {
            ticks:{
                maxTicksLimit: 6
            }
        }
    }})
      };
      fetchFiltTemp()
    }

    const handleClickFiltHum = () => {
      const fetchFiltHum = async () => {
        const res = await fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-nvrgb/endpoint/get_testdata")
        const data = await res.json()

        const datex = data.map(function(elem) {
          return new Date(elem.date)
        })

        const humid = data.map(function(elem) {
          return elem.hum
        })

        const lastdate = datePicker;
        const blastdate = new Date(datePicker);

        blastdate.setDate(datePicker.getDate() - 5)

        console.log(blastdate)
 
        var filteredData = data.filter(function(a){
            var aDate = new Date(a.date);
            return aDate <= lastdate && aDate >= blastdate;
        });

        const fixdate = filteredData.map(function(elem) {
          return new Date(elem.date).toISOString()
        })

        const fixhum = filteredData.map(function(elem){
          return elem.hum
        })

        setUserData({
          labels: fixdate,
          datasets: [
            {
              label: "% of Humidity",
              data: fixhum,
              backgroundColor: [
                "#FF0000",
              ],
              borderWidth: 1,
              showLine: false
            }
          ]
        });

      setOptionData({
        scales: {
        y: {
            beginAtZero: true,
            max:100,
            ticks : {
                callback: function(value, index, ticks) {
                    return  value + '%';
            }  
        }
        },
        x: {
            ticks:{
                maxTicksLimit: 6
            }
        }
    }})
      };
      fetchFiltHum()
    }

    const handleClickFiltWind = () => {
      const fetchFiltWind = async () => {
        const res = await fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-nvrgb/endpoint/get_testdata")
        const data = await res.json()

        const datex = data.map(function(elem) {
          return new Date(elem.date)
        })

        const humid = data.map(function(elem) {
          return elem.hum
        })

        const lastdate = datePicker;
        const blastdate = new Date(datePicker);

        blastdate.setDate(datePicker.getDate() - 5)

        console.log(blastdate)
 
        var filteredData = data.filter(function(a){
            var aDate = new Date(a.date);
            return aDate <= lastdate && aDate >= blastdate;
        });

        const fixdate = filteredData.map(function(elem) {
          return new Date(elem.date).toISOString()
        })

        const fixhum = filteredData.map(function(elem){
          return elem.wind
        })

        setUserData({
          labels: fixdate,
          datasets: [
            {
              label: "km/s of Wind Speed",
              data: fixhum,
              backgroundColor: [
                "#FF0000",
              ],
              borderWidth: 1,
              showLine: false
            }
          ]
        });

      setOptionData({
        scales: {
        y: {
            beginAtZero: true,
            max:30,
            ticks : {
                callback: function(value, index, ticks) {
                    return  value + 'km/s';
            }  
        }
        },
        x: {
            ticks:{
                maxTicksLimit: 6
            }
        }
    }})
      };
      fetchFiltWind()
    }
    const [chartState, setChartState] = useState('');
    const [lastDate, setLastDate] = useState();
    const [datePicker, setDatePicker] = useState(new Date('2006-04-20'));
    const [userData, setUserData] = useState({
        labels: [],
        datasets: [
          {
            label: "Users Gained",
            data: [],
            backgroundColor: [
              "rgba(75,192,192,1)"
            ],
            borderWidth: 10,
            showLine: false
          }
        ]
      }, 
      );
    
    const [optionData, setOptionData] = useState({
      scales: {
        y: {
            beginAtZero: true,
            max:100,
            ticks : {
                callback: function(value, index, ticks) {
                    return  value + '%';
            }  
        }
        },
        x: {
            ticks:{
                maxTicksLimit: 6
            }
        }
    }
  })


  const onChangeChart = (e) => {
    setDatePicker(new Date(e.target.value));
    if (chartState == "humid") {
      handleClickFiltHum();
    }
    else if (chartState == "temp") {
      handleClickFiltTemp();
    }
    else {
      handleClickFiltWind();
    }
  }
console.log(chartState)

  const onClickHum= (e) => {
    handleClickHum();
    setChartState('humid')
  }

  const onClickTemp= (e) => {
    handleClickTemp();
    setChartState('temp')
  }

  const onClickWind= (e) => {
    handleClickWind();
    setChartState('wind')
  }
  
  return (
    <>
    <div className='container-chart'>Visualize
      <div className='chart'>
        <LineChart chartData={userData} chartOption={optionData} />
      </div>
      <div className='button-chart'>
      <input onChange={onChangeChart} type="date" className='enddate' value="2006-04-30"></input>
      <button className='btn-humid'onClick={onClickHum} >Humidity</button>
      <button className='btn-temp' onClick={onClickTemp}>Temp</button>
      <button className='btn-wind' onClick={onClickWind}>Wind</button> 
      </div>
      
    </div>
    
    </>
    
  )
}

export default Visualize
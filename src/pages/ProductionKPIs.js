import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { MyLineChart } from "../components/MyLineChart";
import { MyHorizontalBarChart } from "../components/MyHorizontalBarChart";
import VerticalText from "../components/VerticalText";
import HorizontalText from "../components/HorizontalText";

export const ProductionKPIs = () => {

  const [filters, setFilters] = useState({
    eo: true,
    do: true,
    epli: true,
    all: true,
    broker: true,
    direct: true,
  })
  const handleInputChange = useCallback((event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }, [setFilters])

  return (
    <div style={{
      width: '100%'
    }}>
      <Link to="/" style={{
        fontSize: 14,
        position: 'absolute',
        top: 10,
        right: 10,
        color: 'white'
      }}>
        Back to Dashboard
      </Link>


      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 30,
        justifyContent: 'center',
        marginBottom: 50
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 16,
          marginLeft: 20,
          width: 300
        }}> 
          <span>Product</span>
          <div>
            <input 
              type="checkbox" 
              name="do" 
              checked={filters["do"]} 
              onChange={handleInputChange}
            />
            <label for="do">D&O</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              name="eo" 
              checked={filters['eo']} 
              onChange={handleInputChange}
            />
            <label for="eo">E&O</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              name="epli" 
              checked={filters['epli']} 
              onChange={handleInputChange}
            />
            <label for="epli">EPLI</label>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 16,
          marginLeft: 20,
          width: 300
        }}> 
          <span>Source of Submission</span>
          <div>
            <input 
              type="checkbox" 
              name="all" 
              checked={filters['all']} 
              onChange={handleInputChange} 
            />
            <label for="all">All</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              name="broker" 
              checked={filters['broker']} 
              onChange={handleInputChange} 
            />
            <label for="broker">Broker</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              name="direct" 
              checked={filters['direct']} 
              onChange={handleInputChange} 
            />
            <label for="direct">Direct</label>
          </div>
        </div>
      </div>
      <div 
        className="main-section"
      >
        <div 
          style={{
            width: '100%',
            padding: 10,
            minWidth: 0
          }}
        >
            <MyHorizontalBarChart filters={filters}/>
        </div>
        <div 
          style={{
            width: '100%',
            height: '100%',
            minWidth: 0,
            padding: 30,
            paddingBottom: 100,
          }}
        >
          <div 
            style={{
              width: '100%',
              position: "relative",
              display: 'flex',
              flexDirection: 'column',
              marginBottom: 30
            }}
          >
            <HorizontalText text="Submission-to-bind ratio, rolling 28 days" />
            <div style={{
              display: 'flex',
              width: '100%',
              position: 'relative'
            }}>
              <VerticalText text="Monthly submission-to-bind ratio" />
              <div style={{
                width: '100%',
                height: '100%',
                paddingLeft: 30
              }}>
                <MyLineChart symbol='$' dataKey="spend" filters={filters}/>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              position: "relative",
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <HorizontalText text="Premiums, bind, rolling 28 days" />
            <div style={{
              display: 'flex',
              width: '100%',
              position: 'relative'
            }}>
              <VerticalText text="Monthly premiums, bind ratio" />
              <div style={{
                width: '100%',
                height: '100%',
                paddingLeft: 30
              }}>
                <MyLineChart symbol='%' dataKey="percentage" filters={filters}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

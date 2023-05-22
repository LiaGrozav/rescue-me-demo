import React from "react";

const Filters = ({
  filteredColorHandler,
  filteredtypeHandler,
  filteredSizeHandler,
  filteredVacccinatedHandler,
  filteredSterilizedHandler,
  filteredAgeHandler,
  filteredGenderHandler,
  filteredGoodWithHandler,
  filteredDaysonSiteHandler,
  filteredCityHandler,
  resetFiltersHandler,filterCriteria
}) => {
  return (
    <div className="filters-list">
      <div>
      <label>Animal</label>
        <select  value={filterCriteria.type}
          id='sort'
          onChange={filteredtypeHandler}
          className='form-select form-select-sm'
          aria-label='.form-select-sm example'
        >          <option value=""></option>

          {/* <option value='all'>All</option> */}
        
          <option value="all">All</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
 
        </select>
      <label>Age</label>
<input type="number" min="0" value={filterCriteria.age} onChange={filteredAgeHandler} className='form-control' aria-label='Age' />

        {/* <select   value={filterCriteria.age}
          onChange={filteredAgeHandler}
          className='form-select form-select-sm  '
          aria-label='Age'
        >
          <option value=""></option>
          <option value='junior'>junior</option>
          <option value='adult'>adult</option>
          <option value='senior'>senior</option> */}
        {/* </select> */}

        <label>Gender</label>
        <select  value={filterCriteria.gender}
          onChange={filteredGenderHandler}
          className='form-select form-select-sm '
          aria-label='.form-select-sm example'
        >
                    <option value=""></option>

          <option value='female'>Female</option>
          <option value='male'>Male</option>
        </select>

        <label>Sterilized</label>
        <select  value={filterCriteria.sterilized}
          onChange={filteredSterilizedHandler}
          className='form-select form-select-sm '
          aria-label='.form-select-sm example'
        >
                   <option value=""></option>

          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>

        <label>Vaccinated</label>
        <select  value={filterCriteria.vaccinated}
          onChange={filteredVacccinatedHandler}
          className='form-select form-select-sm '
          aria-label='.form-select-sm example'
        >
                   <option value=""></option>

          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>

        <label>Color</label>
        <select  value={filterCriteria.color}
          onChange={filteredColorHandler}
          className='form-select form-select-sm '
          aria-label='.form-select-sm example'
        >          <option value=""></option>

          <option value='black'>Black</option>
          <option value='white'>White</option>
          <option value='brown'>Brown</option>
          <option value='golden'>Golden</option>
          <option value='gray'>Gray</option>


        </select>
      </div>

      <div>

        <label>Good with</label>
        <select  value={filterCriteria.goodWith}
          onChange={filteredGoodWithHandler}
          className='form-select form-select-sm '
          aria-label='.form-select-sm example'
        >
                    <option value=""></option>

          <option value='kids'>Kids</option>
          <option value='dogs'>Other Dogs</option>
          <option value='cats'>Cats</option>
        </select>

        <label>Days on the Site</label>
        <select  value={filterCriteria.daysOnSite}
          onChange={filteredDaysonSiteHandler}
          className='form-select form-select-sm '
          aria-label='.form-select-sm example'

        >
                    <option value=""></option>

          {/* <option value='1'>/option> */}
          <option value='week'>Less than a  Week</option>
          <option value='month'>More than a Month</option>

     
        </select>


        <label>Size</label>
        <select  value={filterCriteria.size}
          id='sort'
          onChange={filteredSizeHandler}
          className='form-select form-select-sm  '
          aria-label='.form-select-sm example'
        >
                    <option value=""></option>

          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='big'>Large</option>
        </select>

        <label>City</label>
        <select  value={filterCriteria.city}
          id='sort'
          onChange={filteredCityHandler}
          className='form-select form-select-sm  '
          aria-label='.form-select-sm example'
        >
                    <option value=""></option>

          <option value='berlin'>Berlin</option>
          <option value='hamburg'>Hamburg</option>
          <option value='munich'>Munich</option>
          <option value='cologne'>Cologne</option>
          <option value='frankfurt'>Frankfurt</option>
          <option value='stuttgart'>Stuttgart</option>
          <option value='düsseldorf'>Düsseldorf</option>
          <option value='leipzig'>Leipzig</option>
          <option value='dortmund'>Dortmund</option>
          <option value='essen'>Essen</option>
          <option value='bremen'>Bremen</option>
          <option value='dresden'>Dresden</option>
          <option value='hanover'>Hannover</option>
          <option value='nuremberg'>Nuremberg</option>
          <option value='duisburg'>Duisburg</option>
          <option value='bochum'>Bochum</option>
          <option value='wuppertal'>Wuppertal</option>
          <option value='bielefeld'>Bielefeld</option>
          <option value='bonn'>Bonn</option>

        </select>
     
      </div>

      {/* <div className=''> */}
      

      <button
        onClick={resetFiltersHandler}
        className='btn_filters'
      >
        Reset Filters
      </button>
    {/* </div> */}
    </div>
  );
};

export default Filters;

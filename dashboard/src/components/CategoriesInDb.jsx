import PropTypes from 'prop-types'


export const CategoriesInDb = ({categories}) => {

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorías 
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categories.map(({name}, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


CategoriesInDb.propTypes = {
  categories : PropTypes.array
}
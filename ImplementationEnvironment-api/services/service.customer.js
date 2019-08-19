const CustomerModel = require('../models/model.customer');

let customers = {};

let counter = 0;

let namePattern = /([A-Za-z\-\’])*/;
let zipCodePattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;

class CustomerService {
  static create(data) {
    let customer = new CustomerModel(data.firstName, data.lastName, data.email, data.zipcode, data.password);

    customer.uid = 'c' + counter++;

    customers[customer.uid] = customer;

    return customer;
  }

  static retrieve (uid) {
    if (customers[uid] != null) {
      return customers[uid];
    } else {
      throw new Error('Unable to find customer by id');
    }
  }

  static update (uid, data) {
    if (!data || typeof data !== 'object') {
      throw new Error('Data is undefined or improperly formatted');
    }

    if (customers[uid] == null) {
      const customer = customers[uid];

      Object.assign(customer, data);
    }else {
      throw new Error('Unable to retrieve a customer by (uid:'+ uid +')');
    }
  }

  static delete(uid) {
    if(customers[uid] != null) {
      delete customers[uid];
    }
    else {
      throw new Error('Unable to retrieve a customer by (uid:'+ uid +')');
    }
  }
}


module.exports = CustomerService;

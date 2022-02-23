Contact = require("../models/contactModel");
// Handle index actions

exports.index = function (req, res) {
  Contact.get(function (err, contacts) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts,
    });
  });
};
// Handle create contact actions
exports.new = function (req, res) {
  var contact = new Contact();
  contact.firstName = req.body.firstName
    ? req.body.firstName
    : contact.firstName;
  contact.lastName = req.body.lastName ? req.body.lastName : contact.lastName;
  contact.gender = req.body.gender || contact.gender;
  contact.email = req.body.email || contact.email;
  contact.phone = req.body.phone || contact.phone;
  contact.note = req.body.note || contact.note;
  contact.city = req.body.city || contact.city;
  contact.street = req.body.street || contact.street;
  contact.houseNumber = req.body.houseNumber || contact.houseNumber;
  contact.zipCode = req.body.zipCode || contact.zipCode;
  contact.birthDate = req.body.birthDate || contact.birthDate;

  // save the contact and check for errors
  contact.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New contact created!",
      data: contact,
    });
  });
};
// Handle view contact info
exports.view = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err) res.send(err);
    res.json({
      message: "Contact details loading..",
      data: contact,
    });
  });
};
// Handle update contact info
exports.update = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err) res.send(err);
    contact.firstName = req.body.firstName
      ? req.body.firstName
      : contact.firstName;
    contact.lastName = req.body.lastName ? req.body.lastName : contact.lastName;
    contact.gender = req.body.gender || contact.gender;
    contact.email = req.body.email || contact.email;
    contact.phone = req.body.phone || contact.phone;
    contact.note = req.body.note || contact.note;
    contact.city = req.body.city || contact.city;
    contact.street = req.body.street || contact.street;
    contact.houseNumber = req.body.houseNumber || contact.houseNumber;
    contact.zipCode = req.body.zipCode || contact.zipCode;
    contact.birthDate = req.body.birthDate || contact.birthDate;
    // save the contact and check for errors
    contact.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "Contact Info updated",
        data: contact,
      });
    });
  });
};
// Handle delete contact
exports.delete = function (req, res) {
  Contact.remove(
    {
      _id: req.params.contact_id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Contact deleted",
      });
    }
  );
};
